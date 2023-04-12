// $(document).ready(function() {
//   $('#message_box').on('keyup', function() {
//       $('#letter_count').html($(this).val().length);

//       if($(this).val().length > 150) {
//           $(this).val($(this).val().substring(0, 150));
//           $('#test_cnt').html("100");
//       }
//   });
// });

// import {instrIdx} from index.js



form.addEventListener('submit', (e) => {
    e.preventDefault();

    var myForm = document.getElementById('form');
    payload = new FormData(myForm);    

    console.log([...formData]);

    fetch('http://localhost:8080/email', {
        method: 'POST',
        body: payload
      })
      .then(res => res.json())
      .then(data => console.log(data));
  });

