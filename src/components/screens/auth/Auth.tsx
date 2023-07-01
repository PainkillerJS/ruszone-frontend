import { type FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { EmailPasswordType, MethodAuthEnum } from '@/store/user/interface';
import Button from '@/ui/Button';
import Field from '@/ui/Field';
import Heading from '@/ui/Heading';
import Loader from '@/ui/Loader';
import Meta from '@/ui/Meta';

import { validEmail } from './valid-email';

const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();
  const { login, register } = useActions();

  const [methodAuth, setMethodAuth] = useState<MethodAuthEnum>(MethodAuthEnum.LOGIN);
  const {
    register: formRegister,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmailPasswordType>({ mode: 'onChange' });

  const textSecondBtn =
    methodAuth === MethodAuthEnum.LOGIN ? MethodAuthEnum.REGISTER : MethodAuthEnum.LOGIN;

  const onSubmit: SubmitHandler<EmailPasswordType> = (data) => {
    const method = methodAuth === MethodAuthEnum.LOGIN ? login : register;

    method(data);

    reset();
  };

  return (
    <Meta title='Auth'>
      <section className='flex h-screen'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='rounded-lg bg-white shadow-sm p-8 m-auto'
        >
          <Heading className='capitalize text-center mb-4'>{methodAuth}</Heading>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                {...formRegister('email', {
                  required: 'Email is required',

                  pattern: {
                    value: validEmail,
                    message: 'Please enter a valid email address'
                  }
                })}
                placeholder='Email'
                error={errors.email?.message}
              />

              <Field
                {...formRegister('password', {
                  required: 'password is required',

                  minLength: {
                    value: 6,
                    message: 'Min lenght should more 6 symbols'
                  }
                })}
                type='password'
                placeholder='password'
                error={errors.password?.message}
              />

              <Button type='submit' variant='orange'>
                Let`s go
              </Button>

              <div>
                <button
                  type='button'
                  className='inline-block opacity-20 mt-3 text-sm capitalize'
                  onClick={() => setMethodAuth(textSecondBtn)}
                >
                  {textSecondBtn}
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </Meta>
  );
};

export default Auth;
