(function($) {

  $('#reset').on('click', function(){
      document.location.reload(true);
  });

})

// Production Link
const scriptURL = 'https://script.google.com/macros/s/AKfycbzhcgXfFbr-eJVlXEP2tcxmR-maWvcwIIcflq0BeIM27fXi8KUbYrXA9ArGGaBZKiaR0A/exec'

// Test Link
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzTImkVAsDTUlbrpeHHUCttlHs_nEEBuZByWHsw6iLMZvKN8dqtLB__HEUmcXDMc8fy/exec'
const form = document.forms['register-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => alert("ફોર્મ સફળતાપૂર્વક રજીસ્ટર થયું..! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું..!"))
      .catch(error => console.error('Error!', error.message))

  });(jQuery);
