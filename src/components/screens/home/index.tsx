import type { FC, PropsWithChildren } from 'react';

import Meta from '@/ui/Meta';

const Home: FC<PropsWithChildren<unknown>> = () => {
  return (
    <Meta title='Home'>
      <div>index</div>
    </Meta>
  );
};

export default Home;
