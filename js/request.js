// $(document).ready(function() {
//   $('#message_box').on('keyup', function() {
//       $('#letter_count').html($(this).val().length);

//       if($(this).val().length > 150) {
//           $(this).val($(this).val().substring(0, 150));
//           $('#test_cnt').html("100");
//       }
//   });
// });

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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var myForm = document.getElementById('form');
    var payload = new FormData(myForm);

    payload.append("instrIdx", localStorage.getItem("instrIdx"));

    console.log([...payload]);

    fetch('http://localhost:8080/email', {
        method: 'POST',
        body: payload
      })
      .then(res => res.json())
      .then(data => console.log(data));
  });

