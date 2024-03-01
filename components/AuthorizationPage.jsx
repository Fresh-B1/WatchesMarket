const React = require('react');
const Layout = require('./Layout');

function AuthorizationPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container_auth">
        <div
          className="adm_form"
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
            Admin Panel
          </h2>
          <form
            className="sign-in"
            style={{
              margin: '0 auto',
            }}
          >
            <input type="name" name="name" placeholder="name" />
            <input type="password" name="password" placeholder="password" />
            <button>Войти</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = AuthorizationPage;
