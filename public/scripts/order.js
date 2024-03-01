const btnChange = document.querySelector('.btn-order');

if (btnChange) {
  btnChange.addEventListener('click', async (e) => {
    e.preventDefault();
    const res = await fetch('/api/upload');
    const data = await res.json();
    if (data.message === 'success') {
      document.querySelector('.oreder-text').innerHTML = data;
    }
  });
}
