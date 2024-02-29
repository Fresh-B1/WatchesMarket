const formAddWatch = document.querySelector('.add-form');

// проверяем на наличие формы в нашем ДОМ дереве
if (formAddWatch) {
  formAddWatch.addEventListener('submit', async (e) => {
    // останавляем стандартное поведение формы

    e.preventDefault();
    // event.target - цель события в виде obj
    // деструкоризацией из цели(форма) событий достаем наши инпуты
    const { name, email, tel, img } = e.target;
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('tel', tel.value);
    formData.append('img', img.files[0]);

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
