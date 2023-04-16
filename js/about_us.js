fetch('docs/About_Us').then(function(response) {
    response.text().then(function(text) {
        $(".content").html(text);
        console.log(text);
    })
})