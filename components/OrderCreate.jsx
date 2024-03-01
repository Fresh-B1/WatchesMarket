const React = require('react');

function OrderCreate({}) {
  return (
    <div>
      <h3>Оформление заказа</h3>
      <form className='add-form'>
        <input type='text' name='name' placeholder='Имя и фамилия' />
        <input type='text' name='email' placeholder='Электронная почта' />
        <input type='text' name='tel' placeholder='Номер телефона' />
        <input type='text' name='description' placeholder='Описание' />
        <input type='file' name='img' placeholder='Фото' />
        <button>Отправить заказ</button>
      </form>
    </div>
  );
}

module.exports = OrderCreate;
