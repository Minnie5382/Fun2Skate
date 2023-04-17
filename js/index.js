
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

// contact 버튼 클릭 시 강사 id값 구하는 함수
// function getInstrIdx() {
//     var clicked_button_id = $("button.contact").parents("div.profile_card").attr("id");
//     localStorage.setItem('instrIdx', clicked_button_id);
// }

// function contact_link() {
//     getInstrIdx();
//     console.log("localStorage.getItem(\"instrIdx\") : " + localStorage.getItem("instrIdx"));
//     location.href='./request.html';
// }

// // contact 버튼 클릭 시 instrIdx 넘겨주고 request 페이지로 이동
// $(function() {
//     $("button.contact").click(contact_link);
// });


$(function() {
    $(".map_wrap img.pin").click(function() {
        var PIN_ID = $(this).attr("id");
        console.log(PIN_ID);
        fetch('http://localhost:8080/instructors/' + PIN_ID, {
            method: 'GET'
        })
          .then(res => res.json());

        
        modal.style.display = "flex";

    })
})

// 해당 지역 핀 클릭 시 강사 목록 API 호출



// contact 버튼 클릭 시 instrIdx 넘겨주고 request 페이지로 이동
$(function() {
    $("button.contact").click(function() {
        var clicked_button_id = $(this).parents("div.profile_card").attr("id");
        localStorage.setItem("instrIdx", clicked_button_id);
        console.log("localStorage.getItem(\"instrIdx\") : "+ localStorage.getItem("instrIdx"));

        location.href='./request.html#page';
    }) 
});

// 모달창에 클릭한 지역 이름 띄우기
$(function() {
    $("img.pin").click(function() {
        var clicked_pin_city = $(this).attr("id");
        document.querySelector("span.city").innerHTML = clicked_pin_city;
    }) 
});

// 모달창에 클릭한 지역 강사 목록 띄우기
$(function() {
    $("img.pin").click(function() {
        var clicked_pin_city = $(this).attr("id");
        fetch('http://localhost:8080/instructors/' + clicked_pin_city).then( function(text) { 
            text.json().then(function(data) {
                var text = "";
                console.log(data);
                console.log("length of data : " +data.result.length);
                for(var i=0 ; i<data.result.length ; i++) {
                    var instrIdx = data.result[i].instrIdx;
                    var name = data.result[i].name;
                    var profileImgPath = data.result[i].profileImgPath;

                    text += '<div class="member_wrap"> \n';
                    text += '<a href="#' + instrIdx + '" id="modal_' + instrIdx + ' " class="profile_wrap"> \n';
                    text += '<img src=" ' + profileImgPath +' "  class="profile_image" alt=" ' + name + '프로필 이미지"> \n' ;
                    text += '<div class="name"> \n' ;
                    text += name + "\n";
                    text += '</div> \n' ;
                    text += '</a> \n' ;
                    text += '</div> \n';
                    console.log(text + "in for loop");
                }
                console.log("final returned result : " + text);
                document.querySelector(".loc_instr_list").innerHTML = text;
            })
        })
    })
});

// 전체 강사 목록 띄우기
$(function() {
    fetch('http://localhost:8080/instructors').then( function(text) { 
        text.json().then(function(data) {
            var text = "";
            for(var i=0 ; i<data.result.length ; i++) {
                var instrIdx = data.result[i].instrIdx;
                var name = data.result[i].name;
                var experience = data.result[i].experience;
                var introducing = data.result[i].introducing;
                var profileImgPath = data.result[i].profileImgPath;
                var region_list = data.result[i].regions;

                // region_list 배열로 변환
                let regions = "";
                for(var j=0 ; j < region_list.length ; j++) {
                    const separator = ", ";
                    if (regions.length == 0) {
                        regions += region_list[j].region;
                    } else {
                        regions += separator + region_list[j].region;
                    }
                }

                text += '<div id="' + instrIdx +'" class="profile_card">\n';
                text += '<img class="profile" src="' + profileImgPath + '" alt="' + name +' 프로필 이미지">\n';
                text += '<div class="name">' + name +'</div>\n';
                text += '<div class="location">in ' + regions +'</div>\n';
                text += '<div class="experience">experince : ' + experience + ' years</div>\n';
                text += '<div class="introducing">\n';
                text += '<p>' + introducing + '</p>\n';
                text += '</div>\n';
                text += '<div class="btn_wrap">\n';
                text += '<button class="contact">CONTACT</button>\n';
                text += '</div>\n';
                text += '</div>';
                
            }
            document.querySelector(".instructors_list").innerHTML = text;
        })
    })
});


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
