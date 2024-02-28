const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title }) {
  return (
    <Layout title={title}>
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '50px',
            textAlign: 'center',
          }}
        >
          Welcome back!
        </h2>
        <form
          className='sign-in'
          style={{
            margin: '0 auto',
          }}
        >
          <input type='name' name='name' placeholder='name' />
          <input type='password' name='password' placeholder='password' />
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = AuthorizationPage;
