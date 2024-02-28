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
            <a href='/books'>Watches</a>
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
                <a href='/auth'>Sign-in</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

module.exports = Navbar;
