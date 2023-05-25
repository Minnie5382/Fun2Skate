
var contactButton = document.querySelectorAll("button.contact");
var modal = document.querySelector("#modal");
var pin = $(".map_wrap img.pin");
var domain = "https://fun2skate.site:8080"

// contact 버튼 클릭 시 instrIdx 넘겨주고 request 페이지로 이동
$(document).on("click", "button.contact", function() {
    var clicked_button_id = $(this).parents("div.profile_card").attr("id");
    localStorage.setItem("instrIdx", clicked_button_id);
    // console.log("localStorage.getItem('instrIdx') : " + localStorage.getItem("instrIdx"));

    location.href='./request.html#page';
});

// 모달창에 클릭한 지역 강사 목록 띄우기
$(function() {
    $(".map_wrap img.pin").click(function() {
        var clicked_pin_city = $(this).attr("id");
        document.querySelector("span.city").innerHTML = clicked_pin_city;
        // console.log(clicked_pin_city);
        modal.style.display = "flex";
        fetch(domain + '/instructors/' + clicked_pin_city, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type'},
          }).then( function(text) { 
            text.json().then(function(data) {
                var text = "";
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
                }
                $(".loc_instr_list").html(text);
            })
        })
    })
});

// 전체 강사 목록 띄우기
$(function() {
    fetch(domain + '/instructors', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type'},
      }).then( function(text) { 
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

