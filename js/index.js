var contactButton = document.querySelectorAll("button.contact");
var modal = document.querySelector("#modal");
var pin = $(".map_wrap img.pin");


function getPinId() {
    var pin = $(".map_wrap img.pin");
    var PIN_ID = pin.attr("id");
    return PIN_ID;
}

function openModal() {
    var pin_id = getPinId();
    console.log(pin_id);
    fetch('http://localhost:8080/instructors/' + pin_id, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => console.log(data));
    modal.style.display = "flex";
}
/*
// contact 버튼 클릭 시 강사 id값 구하는 함수
function getInstrIdxByButton() {
    var clicked_button_id = $(this).parents("div.profile_card").attr("id");
    localStorage.setItem("instrIdx", clicked_button_id)
    console.log("clicked_button_id : " + clicked_button_id);
    console.log("localStorage.getItem(\"instrIdx\") : "+ localStorage.getItem("instrIdx"));
}

function contact_link() {
    getInstrIdxByButton();
    console.log("localStorage.getItem(\"instrIdx\") : "+ localStorage.getItem("instrIdx"));
    location.href='./request.html';
}
*/


// pin.addEventListener('click',openModal);
$(function() {
    $(".map_wrap img.pin").click(function() {
        var PIN_ID = $(this).attr("id");
        console.log(PIN_ID);
        fetch('http://localhost:8080/instructors/' + PIN_ID, {
            method: 'GET'
        })
          .then(res => res.json())
          .then(data => console.log(data));

        
        modal.style.display = "flex";

    })
})

// 해당 지역 핀 클릭 시 강사 목록 API 호출



// contact 버튼 클릭 시 instrIdx 넘겨주고 request 페이지로 이동
for(var i=0 ; i<contactButton.length ; i++) {
    contactButton[i].addEventListener('click', function() {
        var clicked_button_id = $(this).parents("div.profile_card").attr("id");
        localStorage.setItem("instrIdx", clicked_button_id)
        console.log("clicked_button_id : " + clicked_button_id);
        console.log("localStorage.getItem(\"instrIdx\") : "+ localStorage.getItem("instrIdx"));

        location.href='./request.html';
        console.log("localStorage.getItem(\"instrIdx\") : "+ localStorage.getItem("instrIdx"));
    }) 
};



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
