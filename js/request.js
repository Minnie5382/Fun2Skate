var MAX_LTR = 500;
var domain = "https://fun2skate.site:8080"
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
    var myForm = document.getElementById('form');
    var payload = new FormData(myForm);

    payload.append("instrIdx", localStorage.getItem("instrIdx"));

    console.log([...payload]);

    fetch(domain + '/email', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      header: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: payload
    })
      .then(res => res.json())
      .then(function(data) { 
        // console.log("data : " + data);
        // console.log("data.isSuccess : " + data.isSuccess);
        if(data.isSuccess) {
          alert("Your submission is complete! \n" + 
          "We'll contact you within 24 hours.\n" + 
          "제출이 완료되었습니다. 24시간 이내로 연락드리겠습니다.");
          location.href='./index.html';
        } else {
          alert("We have a problem. Try again from the beginning, or contact the administrator.\n" + 
          "문제가 생겼습니다. 처음부터 다시 시도하거나, 관리자에게 문의하세요.");
          e.preventDefault();
        }
        
      }
        );

    localStorage.clear();
  
});

