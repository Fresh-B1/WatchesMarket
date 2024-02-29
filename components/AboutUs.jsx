const React = require('react');

function AboutUs() {
  return (
    <div id='aboutUs' className="aboutUs">
      <img src="./img/about_us.png" alt="about us" />
      <div className="container">
        <p className="p_1">Мы рады приветствовать Вас на сайте часовой компании «IN-Time».</p>

        <p className="p_2">Часовая торговая марка «IN-Time» зарегистрирована в 2020 году, опыт работы в часовом бизнесе мы имеем с 2001 года.</p>
        <p className="p_3">У нас богатый опыт в области ремонта часов, а c начала 2015 года мы стали заниматься производством и сборкой.</p>
        <p className="p_4">В настоящее время мы занимаемся сборкой часов для мужчин и женщин по индивидуальным заказам.</p>

        <p className="p_5">Мы любим создавать часы. Наша страсть воплощать идеи клиентов, создавая креативные проекты.</p>
      </div>
    </div>
  );
}

module.exports = AboutUs;
