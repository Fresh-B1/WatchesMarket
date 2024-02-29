const React = require('react');
const Navbar = require('./Navbar');
const AboutUs = require('./AboutUs');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <script defer src="/scripts/auth.js" />
        <link rel="stylesheet" href="/styles/aboutUs.css" />
      </head>
      <body>
        {/* наши страницы */}
        <Navbar user={user} />
        <AboutUs user={user} />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
