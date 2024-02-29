const React = require('react');
const Layout = require('./Layout');

function FormAddWatch() {
  return (
    <div>
      <h1>FormAddWatch</h1>
      <form className='add-form'>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='email' placeholder='email' />
        <input type='text' name='tel' placeholder='tel' />
        <input type='file' name='img' placeholder='img' />
        <button>Create</button>
      </form>
    </div>
  );
}

module.exports = FormAddWatch;
