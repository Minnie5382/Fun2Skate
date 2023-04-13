var contactButton = document.querySelectorAll("button.contact");
const modal = document.querySelector("#modal");
const pin = document.querySelectorAll(".map_wrap img.pin");
 

function setCookie(name, value, exp, path, domain) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000); // 일
    var cookieText=escape(name)+'='+escape(value);
    cookieText+=(exp ? '; EXPIRES='+exp.toGMTString() : '; EXPIRES='+date.toUTCString());
    cookieText+=(path ? '; PATH='+cookiePath : '; PATH=/');
    cookieText+=(domain ? '; DOMAIN='+cookieDomain : '');
    document.cookie=cookieText;
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? unescape(value[2]) : null;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}


function getPinId() {
    let PIN_ID = $(this).attr("id");
    return PIN_ID;
}

function openModal() {
    modal.style.display = "flex";
}

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

for(var i=0 ; i<contactButton.length ; i++) {
    pin[i].addEventListener('click', openModal);
};

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
