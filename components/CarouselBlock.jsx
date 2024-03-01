const React = require('react');

function CarouselBlock({ user }) {
  return (
    // <div className="container-fluid my-carousel">
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://sun9-56.userapi.com/impg/qkIzGh0C5szEn7aGbjtaV8lXdP7b_Noa1e5hpA/HPdhG3Szaxs.jpg?size=1000x1000&quality=95&sign=47ebc9f03584aebd27695b97d762f4d5&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Business WW Blue</h3>
            <p className="text-dark">Любимые часы Джеймса Бонда.</p>
            <p className="text-dark">
              Cветло-коричневые кварцевые мужские деревянные наручные часы,
              ручная работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://sun9-76.userapi.com/impg/alxtlbRHoKU_KS_JIarmUkyFHEokS9pJS0-PTA/bV8bX0fAM4A.jpg?size=1000x1000&quality=95&sign=8120f8aeec5f597832eeb84b1374e113&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Gear</h3>
            <p className="text-dark">
              Красные кварцевые мужские деревянные наручные часы из дерева,
              ручная работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://sun9-41.userapi.com/impg/eXIkjKOoxVBmftztA9gARobpL50Yd2l5OZHyyA/DojwzD32YMc.jpg?size=1000x1000&quality=95&sign=a53085ef38f36602eccef2e610675e5c&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Congress 2</h3>
            <p className="text-dark">
              Бежевые кварцевые мужские деревянные наручные часы из дерева,
              ручная работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://sun9-3.userapi.com/impg/hn4zKJjgztXeW8qo5IR4ZUctLQEnVb8Q-wI6Lw/U2_k1MWbhBU.jpg?size=1000x1000&quality=95&sign=c48ef9cecf7bc81cd5ca1b5cd601e2c8&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Night Lux W</h3>
            <p className="text-dark">
              Темно-коричневые кварцевые деревянные наручные часы из дерева,
              ручная работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://sun9-18.userapi.com/impg/RdxSYguPnXAtGtQ2vyrCe0sl49Ph-BOG3V28jw/0f-MyEF3otw.jpg?size=1000x1000&quality=95&sign=b81f49174e9129d4cce17df5d6d52997&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Prince LECO</h3>
            <p className="text-dark">
              Кварцевые деревянные наручные часы из дерева с кожаным ремешком,
              ручная работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://sun9-48.userapi.com/impg/f0-9FW3YKejZTZL1Am-6gcZRRJSiDcBI7igTvA/BskRap-dNhk.jpg?size=1000x1000&quality=95&sign=d860e22d1eece3bca7b67cec6e6fc9ef&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Night Red WMN</h3>
            <p className="text-dark">
              Красные кварцевые деревянные наручные часы из дерева, ручная
              работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://sun9-76.userapi.com/impg/RbgmgwNqrvAmf0_JcY_9qO51RK4_6Df_ezLY2A/rUBF_0AiIDQ.jpg?size=1000x1000&quality=95&sign=b434737a2e3259193577bc0cbcaa5ce6&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Wall</h3>
            <p className="text-dark">
              Кварцевые деревянные наручные часы из дерева, ручная работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://sun9-2.userapi.com/impg/7Kwggr4_XSDVU1l77eKP5P484mzCKMF1i7JrEg/_8fG68v4IPg.jpg?size=1000x1000&quality=95&sign=f44352b0862ec3b62a337e3f71743368&type=album"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3>Night Lux L</h3>
            <p className="text-dark">
              Кварцевые деревянные наручные часы c кожаным ремешком, ручная
              работа.
            </p>
            <a type="button" class="btn btn-dark" href='#order_crt'>
              ЗАКАЗАТЬ
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
  );
}

module.exports = CarouselBlock;
