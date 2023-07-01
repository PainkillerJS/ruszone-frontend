import { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
}

export const titleMerge = (title: string) => `${title} | Ruszone`;

const Meta: FC<PropsWithChildren<SeoProps>> = ({ title, description, image, children }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp='headline'>{titleMerge(title)}</title>

        {description ? (
          <>
            <meta itemProp='description' name='description' content={description} />
            <link rel='canonical' href={currentUrl} />
            <meta property='og:locale' content='ru' />
            <meta property='og:title' content={titleMerge(title)} />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={image || '/favicon.svg'} />
            <meta property='og:description' content={description} />
          </>
        ) : (
          <>
            <meta name='robots' content='noindex, nofollow' />
          </>
        )}
      </Head>

      {children}
    </>
  );
};

export default Meta;
