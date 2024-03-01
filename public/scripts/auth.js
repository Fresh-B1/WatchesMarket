const authForm = document.querySelector('.sign-in');

if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { name, password } = e.target;
    console.log(name, password);

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.message === 'success') {
      window.location.assign('/');
    }
  });
}
