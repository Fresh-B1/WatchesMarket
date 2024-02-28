const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/navbar.css' />
        <script defer src='/scripts/auth.js' />
      </head>
      <body>
        {/* наши страницы */}
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
