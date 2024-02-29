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
        <link rel="stylesheet" href="/styles/carousel.css" />
        <script defer src="/scripts/auth.js" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />

        <link rel="stylesheet" href="/styles/aboutUs.css" />
        <link rel="stylesheet" href="/styles/wb.css" />

      </head>
      <body>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossorigin="anonymous"
        />
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
