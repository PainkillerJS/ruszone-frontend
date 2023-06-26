import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  const a = 'in\nde\nx';

  const b = (text: string) => text.split('\n').map((str) => <p>{str}</p>);

  return <div>{b(a)}</div>;
};

export default HomePage;
