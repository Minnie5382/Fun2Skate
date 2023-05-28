var MAX_LTR = 500;
var domain = "https://www.fun2skate.site:8080";

const backendServerUrl = domain;

// handleREquest 함수 선언
function handleRequest(url, options) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        e.preventDefault();
        alert("We have a problem. Try again from the beginning, or contact the administrator.\n" + 
        "문제가 생겼습니다. 처음부터 다시 시도하거나, 관리자에게 문의하세요.");
      }
      return response;
    })
}

// 메시지 박스 글자수 카운트
$(document).ready(function() {
  $('#message_box').on('keyup', function() {
      $('#letter_count').html($(this).val().length);
      if($(this).val().length > MAX_LTR) {
          $(this).val($(this).val().substring(0, MAX_LTR));
          $('#test_cnt').html(MAX_LTR);
      }
  });
});

// 제출 시 이메일 발송
form.addEventListener('submit', (e) => {
    var myForm = document.getElementById('form');
    var payload = new FormData(myForm);

    payload.append("instrIdx", localStorage.getItem("instrIdx"));

    const requestOptions = {
      method: 'POST',
      body: payload
    };

  handleRequest(`${backendServerUrl}/email`, requestOptions)
    .then(function(data) {
      if(data.isSuccess) {
        e.preventDefault();
        alert("Your submission is complete! \n" + 
        "We'll contact you within 24 hours.\n" + 
        "제출이 완료되었습니다. 24시간 이내로 연락드리겠습니다.");
        window.location.replace('index.html');
      } else {
        e.preventDefault();
        alert("We have a problem. Try again from the beginning, or contact the administrator.\n" + 
        "문제가 생겼습니다. 처음부터 다시 시도하거나, 관리자에게 문의하세요.");
      }
    })
  localStorage.clear();

});

