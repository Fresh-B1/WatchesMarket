const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <a href='/'>Main</a>
          </li>
          <li>
            <a href='/books'>Books</a>
          </li>
          {user ? (
            <>
              <li>
                <a>{user.name}</a>
              </li>
              <li>
                <a href='/api/auth/logout'>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href='/auth/registration'>Sign-up</a>
              </li>
              <li>
                <a href='/auth/authorization'>Sign-in</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
