var contactButton = document.querySelectorAll("button.contact");
const modal = document.querySelector("#modal");
const pin = document.querySelectorAll(".map_wrap img.pin");



// contact 버튼 클릭 시 강사 id값 구하는 함수
function getInstrIdxByButton() {
    function retrieveId()  {
        let clicked_button_id = $(this).closest("div.profile_card").attr("id");
        return clicked_button_id;
    }

    const instructor_id = retrieveId();

    console.log(instructor_id);

    return instructor_id;
};

function getPinId() {
    let PIN_ID = $(this).attr("id");
    return PIN_ID;
}

function openModal(PIN_ID) {
    modal.style.display = "flex";
}

function contact_link() {
    var instrIdx = getInstrIdxByButton();
    window.location.href='./request.html';

    window.instructorIdx = instrIdx;
    var instrIdx = window.instructorIdx;
}

export {instrIdx}

for(var i=0 ; i<contactButton.length ; i++) {
    pin[i].addEventListener('click', openModal);
}

for(var i=0 ; i<contactButton.length ; i++) {
    contactButton[i].addEventListener('click', contact_link);
}


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
