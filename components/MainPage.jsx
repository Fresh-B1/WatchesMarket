const React = require('react');
const Layout = require('./Layout');
const SwiperBlock = require('./CarouselBlock');

function MainPage({ title, user, watches }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h1>Main page</h1>
        <SwiperBlock watches={watches} />
      </div>
    </Layout>
  );
}

module.exports = MainPage;
