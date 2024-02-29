const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div>
        <ul>
          <li className='logo'>
            <img src="./img/logo.png" alt="Logo" />
          </li>
          <li className="nav_center">
            О нас
            {/* <a href='/books'>Watches</a> */}
          </li>
          <li className="nav_center">
            Популярное
          </li>
          <li className="nav_center">
            Продукция
          </li>
          <li className="nav_center">
            Заказать
          </li>
          <li className="nav_center">
            Контакты
          </li>
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
