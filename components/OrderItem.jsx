const React = require('react');

function OrderItem({ order }) {
  // console.log(order);
  return (
    <div className='orderInfo'>
      <p className='orderP'>{order.id}</p>
      <p className='orderP'>{order.name}</p>
      <p className='orderP'>{order.email}</p>
      <p className='orderP'>{order.tel}</p>
      <img src={order.img} alt='' />
      <p className='orderP'>{order.description}</p>
    </div>
  );
}

module.exports = OrderItem;
