import type { FC, PropsWithChildren } from 'react';

const Loader: FC<PropsWithChildren<unknown>> = () => {
  // @TODO: Добавить нормальную прелоадер
  return <div>Загрузка</div>;
};

export default Loader;
