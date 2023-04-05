var contactButton = document.querySelectorAll("button.contact");
var kell_email_addr = 'minik001@naver.com';
var lee_email_addr = 'radic7700@gmail.com';

function contact_link() {
    getIdByButton();
    window.location.href='./request.html';
}

function getIdByButton() {
    function retrieveId()  {
        let clicked_button_id = $(this).closest("div.profile_card").attr("id");
        return clicked_button_id;
    }

    function retrieveEmail()  {
        let clicked_button_email = $(this).closest("div.profile_card").attr("email");
        return clicked_button_email;
    }

    const instructor_id = retrieveId();
    const instructor_email = retrieveEmail();

    result_list = [instructor_id, instructor_email];
    console.log(result_list);

    return result_list;
};


for(var i=0 ; i<contactButton.length ; i++) {
    contactButton[i].addEventListener('click', contact_link);
}
// export { getIdByButton };





// // 이메일 형식 검증 함수
// function email_check( email ) {    
//     var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     return (email != '' && email != 'undefined' && regex.test(email)); 
// }

// $("input[type=email]").blur(function(){
//   var email = $(this).val();
//   if( email == '' || email == 'undefined') return;
//   if(! email_check(email) ) {
//   	$(".result-email").text('이메일 형식으로 적어주세요');
//     $(this).focus();
//     return false;
//   }else {
// 	$(".result-email").text('');
//   }
// });
