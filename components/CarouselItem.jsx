const React = require('react');

function CarouselItem({ watch, user }) {
  return (
    <div className="carousel-item swiperItem">
      <div className="watchItem" data-watchid={watch.id}>
        <img className="d-block w-100" src={watch.img} />
        <div className="carousel-caption d-none d-md-block">
          <h3>{watch.title}</h3>
          <h4>{watch.price} ₽</h4>
          <p>{watch.description}</p>
        </div>
        {user && (
          <div>
            <a href={`/watches/${watch.id}/update`}>Редактировать</a>
            <button className="btn-delete">Удалить</button>
          </div>
        )}
      </div>
    </div>
  );
}

module.exports = CarouselItem;
