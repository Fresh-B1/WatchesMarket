const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div>
        <ul>
          <li className='logo'>
            <img src="./img/logo.png" alt="Logo" />
          </li>
          <a href="#aboutUs"><li className="nav_center">
            О нас
            {/* <a href='/books'>Watches</a> */}
          </li></a>
          <a href="#carouselExampleDark"><li className="nav_center">
            Популярное
          </li></a>
          <a href="#watchBlock"><li className="nav_center">
            Продукция
          </li></a>
          <li className="nav_center">
            Заказать
          </li>
          <a href="#footer"><li className="nav_center">
            Контакты
          </li></a>
          {user ? (
            <>
              <li>
                <a>{user.name}</a>
              </li>
              <li>
                <a href="/api/auth/logout">Logout</a>
              </li>
            </>
          ) : (
            <li>
              {/* <a href='/auth'>Sign-in</a> */}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
