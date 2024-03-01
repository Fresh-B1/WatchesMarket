const React = require('react');

function OrderItem({ order }) {
  // console.log(order);
  return (
    <div className="orderInfo">
      <p className="orderP">{order.id}</p>
      <p className="orderP">{order.name}</p>
      <p className="orderP">{order.email}</p>
      <p className="orderP">{order.tel}</p>
      <p className="orderP">{order.img}</p>
      <p className="orderP">{order.description}</p>
      <p className="orderP">{order.createdAt.toString()}</p>
      <p className="orderP">{order.updatedAt.toString()}</p>
    </div>
  );
}

module.exports = OrderItem;
