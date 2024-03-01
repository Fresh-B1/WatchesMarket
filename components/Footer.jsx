const React = require('react');

function Footer() {
  return (
    <footer>
      <div id="footer" className="footer_container">
        <div className="lll">

          <div className="map" id="map">
            <h3>Как к нам добраться</h3>
          </div>

        </div>

        <div className="footer_inner_1">
          <h3>Поддержка</h3>
          <a href="">
            <p>Связаться с нами</p>
          </a>
          <a href="">
            <p>FAQ</p>
          </a>
          <a href="">
            <p>Гарантия</p>
          </a>
        </div>

        <div className="footer_inner_2">
          <h3>Информация о компании</h3>
          <a href="">
            <p>Пресса</p>
          </a>
          <a href="">
            <p>Работа в IN-Time</p>
          </a>
          <a href="">
            <p>Политика Конфиденциальности</p>
          </a>
        </div>

        <div className="footer_inner_3">
          <h3>Способы оплаты</h3>
          <a
            target="_blank"
            href="https://devby.io/news/novyy-dizayn-platezhnoy-stranitsy-karta-halva"
            rel="noreferrer"
          >
            <img
              className="payments master"
              src="./img/payment/Mastercard_footer.avif"
              alt=""
            />
          </a>
          <a
            target="_blank"
            href="https://devby.io/news/novyy-dizayn-platezhnoy-stranitsy-karta-halva"
            rel="noreferrer"
          >
            <img
              className="payments visa"
              src="./img/payment/Visa_footer.webp"
              alt=""
            />
          </a>
          <a href="/">
            <img
              className="payments COD"
              src="./img/payment/COD_footer.avif"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

module.exports = Footer;
