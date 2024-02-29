const React = require('react');
const Navbar = require('./Navbar');
const AboutUs = require('./AboutUs');
const WatchesBlocks = require('./WatchesBlocks');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <script defer src="/scripts/auth.js" />
        <link rel="stylesheet" href="/styles/aboutUs.css" />
        <link rel="stylesheet" href="/styles/wb.css" />
      </head>
      <body>
        {/* наши страницы */}
        <Navbar user={user} />
        <AboutUs />
        <WatchesBlocks />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
