const React = require('react');
const Layout = require('./Layout');

function FormSelectWatch({ title }) {
  return (
    <div>
      <select>
        <option value='type' disabled selected>
          Выбери готовые решения
        </option>
        <option value='ALLURING OAK'>ALLURING OAK</option>
        <option value='DARK WOOD'>DARK WOOD</option>
        <option value='GOLDEN WOOD'>GOLDEN WOOD</option>
        <option value='RARE BREGUETTE STYLE'>RARE BREGUETTE STYLE</option>
        <option value='BLACK SAPPHIRE'>BLACK SAPPHIRE</option>
      </select>
    </div>
  );
}

module.exports = FormSelectWatch;
