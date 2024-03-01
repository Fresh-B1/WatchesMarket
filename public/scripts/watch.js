const formAddWatch = document.querySelector('.add-form');

// проверяем на наличие формы в нашем ДОМ дереве
if (formAddWatch) {
  formAddWatch.addEventListener('submit', async (e) => {
    // останавляем стандартное поведение формы

    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;
    const nameRegex = /^[a-zA-Zа-яА-Я]+\s[a-zA-Zа-яА-Я]+$/;

    // event.target - цель события в виде obj
    // деструкоризацией из цели(форма) событий достаем наши инпуты
    const { name, email, tel, description, img } = e.target;
    if (!name.value.trim() || !email.value.trim() || !tel.value.trim()) {
      alert('Поля имени, почты и телефона обязательны!');
    } else if (!nameRegex.test(name.value)) {
      alert(
        'Заполните имя правильно! \nОно должно содержать имя и фамилию на кириллице'
      );
    } else if (!emailRegex.test(email.value)) {
      alert('Заполните почту правильно!');
    } else if (!phoneRegex.test(tel.value.replace(/\D/g, ''))) {
      alert('Заполните номер телефона правильно! \nВ формате ');
    }
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('tel', tel.value);
    formData.append('img', img.files[0]);
    formData.append('description', description.value);

    // отправялем  феч
    const response = await fetch('/api/upload', {
      method: 'POST',
      // положили все в одну коробчку, которая скрыта от глаз посторонних пользователей
      body: formData,
    });
    // обрабатываем наш ответ и приводим к obj
    const res = await response.json();
    console.log(res);
    if (res.message === 'success') {
      formAddWatch.reset();
      // document
      // находим див, куда хотим добавить карточку
      // .querySelector('.container')
      // добавляет карточку в конец нашего дива, который мы нашли выше
      // .insertAdjacentHTML('beforeend', res.html);
    }
  });
}
