const React = require('react');
const Layout = require('./Layout');
const SwiperBlock = require('./CarouselBlock');

const AboutUs = require('./AboutUs');
const WatchesBlocks = require('./WatchesBlocks');
const Navbar = require('./Navbar');
const Footer = require('./Footer');


function MainPage({ title, user, watches }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <Navbar user={user} />
        <AboutUs />
        <SwiperBlock watches={watches} />
        <WatchesBlocks />
        <Footer />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
