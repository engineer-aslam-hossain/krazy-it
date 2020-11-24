import React from 'react';
import Achievement from '../Achivement/Achievement';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Partner from '../Partner/Partner';
import Pricing from '../Pricing/Pricing';
import Service from '../Service/Service';
const Home = () => {
  return (
    <section className='home'>
      <Header />
      <HeaderMain />
      <Service />
      <Partner />
      <Achievement />
      <Pricing />
      <Footer />
    </section>
  );
};

export default Home;
