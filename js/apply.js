var submitButton = document.querySelector("button.submit");
var MAX_LTR = 150;
var backendServerUrl = "https://www.fun2skate.site:8080";


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

// 첨부파일 용량 제한
$("#file_upload").off().on("change", function(){
	if (this.files && this.files[0]) {

		var maxSize = 3 * 1024 * 1024;
		var fileSize = this.files[0].size;

		if(fileSize > maxSize){
			alert("첨부파일 사이즈는 3MB 이내로 등록 가능합니다.");
			$(this).val('');
			return false;
		}
	}
});


// 제출 시 지원서 이메일 전송
form.addEventListener('submit', (e) => {
  const fileInput = document.getElementById("file_upload");
  var myForm = document.getElementById('form');
  var payload = new FormData(myForm);

  const uploaded_file = fileInput.files[0];

  payload.append("profileImg", uploaded_file);

  const requestOptions = {
    method: 'POST',
    body: payload
  };

  fetch(`${backendServerUrl}/instructors/apply`, requestOptions)
    .then(res => res.json())
    .then(data => {
      e.preventDefault();
      if(data.isSuccess) {
        alert("Your submission is complete! \n" + 
        "We'll contact you within 24 hours.\n" + 
        "제출이 완료되었습니다. 24시간 이내로 연락드리겠습니다.");
        window.location.replace('index.html');
      } else {
        alert("We have a problem. Try again from the beginning, or contact the administrator.\n" + 
        "문제가 생겼습니다. 처음부터 다시 시도하거나, 관리자에게 문의하세요.");
      }
    })
    .then(() => {
      localStorage.clear();
    })
    .catch(error => {
      console.error('Error:', error);
    });

  e.preventDefault();

});

form.addEventListener('submit', (e) => {
  var loading = document.querySelector(".loading");
  loading.style.display = "flex";
}
);
