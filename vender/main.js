const scriptURL = 'https://script.google.com/macros/s/AKfycbzhcgXfFbr-eJVlXEP2tcxmR-maWvcwIIcflq0BeIM27fXi8KUbYrXA9ArGGaBZKiaR0A/exec'
  const form = document.forms['registration-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })