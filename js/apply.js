var submitButton = document.querySelector("button.submit");
var MAX_LTR = 150;
var domain = "https://fun2skate.site:8080"

// 메시지 박스 글자수 제한 기능
$(document).ready(function() {
  $('#message_box').on('keyup', function() {
      $('#letter_count').html($(this).val().length);

      if($(this).val().length > MAX_LTR) {
          $(this).val($(this).val().substring(0, MAX_LTR));
          $('#test_cnt').html(MAX_LTR);
      }
  });
});


// 제출 시 지원서 이메일 전송
form.addEventListener('submit', (e) => {
  const fileInput = document.getElementById("file_upload");
  var myForm = document.getElementById('form');
  var payload = new FormData(myForm);

  const uploaded_file = fileInput.files[0];

  payload.append("ProfileImg", uploaded_file);

  fetch(domain + '/instructors/apply', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: payload
    })
    .then(res => res.json())
    .then(function(data) {
      console.log(data);

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
    })
  localStorage.clear();

});

// 이메일 형식 검증 함수
function email_check( email ) {    
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
}

$("input[type=email]").blur(function(){
  var email = $(this).val();
  if( email == '' || email == 'undefined') return;
  if(! email_check(email) ) {
  	$(".result-email").text('Invalid email form.');
    $(this).focus();
    return false;
  }else {
	$(".result-email").text('');
  }
});
