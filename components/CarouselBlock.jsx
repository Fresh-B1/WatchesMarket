const React = require('react');
const CarouselItem = require('./CarouselItem');

function CarouselBlock({ watches, user }) {
  return (
    // <div classNameNameName="container-fluid my-carousel">
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active swiperItem">
          <img
            src="https://content.rolex.com/v7/dam/new-watches/2023/stewart/mini-site-collection/landing-page/roller/professional-watches-cosmograph-daytona-100-roller-m126529ln-0001_2302jva_001_full_roller.jpg?imwidth=640"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Метка первого слайда</h5>
            <p>Некоторый репрезентативный заполнитель для первого слайда.</p>
          </div>
        </div>
        {/* перелистываемые карточки */}
        {watches.map((el) => (
          <CarouselItem watch={el} user={user} />
        ))}
        {/* перелистываемые карточки */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
    // </div>
  );
}

module.exports = CarouselBlock;
