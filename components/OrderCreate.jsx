const React = require('react');

function OrderCreate({}) {
  return (
    <div id="order_crt" className="order_crt">

      <div className="order-form">
        <h3>Оформление заказа</h3>
        <form className="add-form">
          <p><input type="text" name="name" placeholder=" Имя и фамилия" /></p>
          <p><input type="text" name="email" placeholder=" Электронная почта" /></p>
          <p><input type="text" name="tel" placeholder=" Номер телефона" /></p>
          <p><input type="text" name="description" placeholder=" Описание" /></p>
          <p><input type="file" name="img" placeholder=" Фото" /></p>
          <button className='btn-order'>Отправить заказ</button>
        </form>
      </div>

      <div className="about-order">
        <h5>Вы можете заказать индивидуальный дизайн часов или выбрать одну из представленных выше моделей.</h5>
        <p>Просим использовать форму для оформления заказа, наши менеджеры свяжутся с Вами по указанным контактным данным.</p>
 
      </div>

    </div>
  );
}

module.exports = OrderCreate;
