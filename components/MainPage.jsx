const React = require('react');
const Layout = require('./Layout');
const SwiperBlock = require('./CarouselBlock');

const AboutUs = require('./AboutUs');
const WatchesBlocks = require('./WatchesBlocks');
const Navbar = require('./Navbar');
const OrderCreate = require('./OrderCreate');
const Footer = require('./Footer');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <Navbar user={user} />
      <AboutUs />
      <SwiperBlock />
      <WatchesBlocks />
      <OrderCreate />
      <Footer />
    </Layout>
  );
}

module.exports = MainPage;
