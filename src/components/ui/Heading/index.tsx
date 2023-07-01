import type { FC, PropsWithChildren } from 'react';

import cn from 'clsx';

interface HeadingProps {
  className?: string;
}

const Heading: FC<PropsWithChildren<HeadingProps>> = ({ children, className }) => (
  <h1 className={cn('font-semibold text-3xl', className)}>{children}</h1>
);

export default Heading;
