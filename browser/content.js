let url = window.location.href;
let backend = 'https://web-control.local/api/request/add';

$.ajax({
    url: backend,
    method: 'post',
    dataType: 'json',
    data: {url: url},
    success: function(data) {
        console.log(data);
    }
})
