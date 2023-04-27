var MAX_LTR = 500;
$(document).ready(function() {
  $('#message_box').on('keyup', function() {
      $('#letter_count').html($(this).val().length);

      if($(this).val().length > MAX_LTR) {
          $(this).val($(this).val().substring(0, MAX_LTR));
          $('#test_cnt').html(MAX_LTR);
      }
  });
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    var myForm = document.getElementById('form');
    var payload = new FormData(myForm);

    payload.append("instrIdx", localStorage.getItem("instrIdx"));

    console.log([...payload]);

    fetch('http://localhost:8080/email', {
        method: 'POST',
        body: payload
      })
      .then(res => res.json())
      .then(data => console.log(data));
    
    alert("Your submission is complete! \nWe'll contact you within 24 hours.\n제출이 완료되었습니다. 24시간 이내로 연락드리겠습니다.");
    console.log(localStorage.getItem("instrIdx"));
    // location.href='./index.html';
    localStorage.clear();
  
});

