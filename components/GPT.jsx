const React = require('react');
const Layout = require('./Layout');

class OrderCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFileInput: false,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange() {
    this.setState((prevState) => ({
      showFileInput: !prevState.showFileInput,
    }));
  }

  render() {
    const { showFileInput } = this.state;

    return (
      <div>
        <h1>Оформление заказа</h1>
        <form className='add-form'>
          <input type='text' name='name' placeholder='name' />
          <input type='text' name='email' placeholder='email' />
          <input type='text' name='tel' placeholder='tel' />
          {/* Инпут с типом "file" будет показан только если showFileInput равен true */}
          {showFileInput && <input type='file' name='img' placeholder='img' />}
          {/* Чекбокс для изменения состояния showFileInput */}
          <label>
            Показать инпут с файлом:
            <input
              type='checkbox'
              checked={showFileInput}
              onChange={this.handleCheckboxChange}
            />
          </label>
          <button className='btn-create-order'>Отправить заказ</button>
        </form>
      </div>
    );
  }
}

module.exports = OrderCreate;
