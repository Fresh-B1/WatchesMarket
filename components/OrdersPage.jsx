const React = require('react');
const Layout = require('./Layout');
const OrderItem = require('./OrderItem');

function OrdersPage({ title, orders, user }) {
  // console.log(Array.isArray(orders));
  return (
    <Layout title={title} user={user}>
      <h2>Заказы</h2>
      <div className='orderBlock'>
        {orders.map((el) => (
          <OrderItem key={el.id} order={el} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = OrdersPage;
