const React = require('react');
const Layout = require('./Layout');
const SwiperBlock = require('./CarouselBlock');

const AboutUs = require('./AboutUs');
const WatchesBlocks = require('./WatchesBlocks');
const Navbar = require('./Navbar');
const OrderCreate = require('./OrderCreate');

function MainPage({ title, user, watches }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <Navbar user={user} />
        <AboutUs />
        <SwiperBlock watches={watches} />
        <WatchesBlocks />
        <OrderCreate />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
