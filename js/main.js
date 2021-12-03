(function($) {

  $('#reset').on('click', function(){
      document.location.reload(true);
  });
});

// Sedding registered form data to google spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzhcgXfFbr-eJVlXEP2tcxmR-maWvcwIIcflq0BeIM27fXi8KUbYrXA9ArGGaBZKiaR0A/exec'
const form = document.forms['register-form']

  form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then((response) => {
      if(!alert("ફોર્મ સફળતાપૂર્વક રજીસ્ટર થયું..! અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું..!")){
        location.reload(true);
      }
    })
      .catch(error => console.error('Error!', error.message))
  });
 (jQuery);
