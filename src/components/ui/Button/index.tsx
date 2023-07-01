import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import cn from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'orange' | 'white';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, className, variant, ...rest }) => (
  <button
    {...rest}
    className={cn(
      'rounded-xl font-medium shadow px-6 py-2',
      {
        'text-white bg-primary': variant === 'orange',
        'text-primary bg-white': variant === 'white'
      },
      className
    )}
  >
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'white'
};

export default Button;
