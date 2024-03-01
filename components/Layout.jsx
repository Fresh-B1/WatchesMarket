const React = require('react');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/navbar.css" />
        <link rel="stylesheet" href="/styles/carousel.css" />
        <script defer src="/scripts/auth.js" />
        <link rel="stylesheet" href="/styles/footer.css" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />

        <link rel="stylesheet" href="/styles/aboutUs.css" />
        <link rel="stylesheet" href="/styles/wb.css" />
        <script defer src="https://api-maps.yandex.ru/2.1/?apikey=ecbc7da4-095a-4cbf-9f22-3b4c979ece04&lang=ru_RU" type="text/javascript"></script>
        <script defer src='./scripts/map.js'></script>
      </head>
      <body>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        />
        {/* наши страницы */}

        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
