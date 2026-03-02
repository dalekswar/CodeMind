import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/header/header';

export const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
