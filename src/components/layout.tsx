import { ReactElement } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <section className='w-full min-h-screen bg-[#f4f4f6]   relative'>
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
