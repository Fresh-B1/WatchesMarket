const React = require('react');
const Layout = require('./Layout');

function OrdersPage({ title, order }) {
  return (
    <Layout title={title}>
      <h1>OrdersPage</h1>
    </Layout>
  );
}

module.exports = OrdersPage;
