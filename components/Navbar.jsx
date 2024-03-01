const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div>
        <ul>
          <li className="logo">
           <a href="/"> <img src="./img/logo.png" alt="Logo" /></a>
          </li>
          <a href="#aboutUs">
            <li className="nav_center">
              О нас
              {/* <a href='/books'>Watches</a> */}
            </li>
          </a>
          <a href="#carouselExampleDark"><li className="nav_center">Популярное</li></a>
          <a href="#watchBlock">
            <li className="nav_center">Продукция</li>
          </a>
          <a href="#order_crt">
            <li className="nav_center">Заказать</li>
          </a>
          <a href="#footer">
            <li className="nav_center">Контакты</li>
          </a>
          {user ? (
            <>
              <li className="nav_center">Режим админа</li>
              <a href="/orders">
                <li className="nav_center">Заказы</li>
              </a>
              <a href="/api/auth/logout">
                <li className="nav_center">Logout</li>
              </a>
            </>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
