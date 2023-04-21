var submitButton = document.querySelector("button.submit");
var MAX_LTR = 150;

$(document).ready(function() {
  $('#message_box').on('keyup', function() {
      $('#letter_count').html($(this).val().length);

      if($(this).val().length > MAX_LTR) {
          $(this).val($(this).val().substring(0, MAX_LTR));
          $('#test_cnt').html(MAX_LTR);
      }
  });
});


function submit_alert(){
    alert('Your submission is complete! We\'ll contact you within 24 hours.\n' + 
    '제출이 완료되었습니다. 24시간 이내로 연락드리겠습니다.');
}

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

submitButton.addEventListener('click', submit_alert);