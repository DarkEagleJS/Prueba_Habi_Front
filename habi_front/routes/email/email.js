$(function(){
    $("#navContent").load("/habi_front/routes/nav_progress.html"); 
});

let params = new URLSearchParams(location.search);
var obj = params.get('obj');
var t = JSON.parse(obj);

function guardar() {
    email = document.getElementById('email');
    var myjson = {
        name: t.name,
        email: email.value
    };
    var obj = JSON.stringify(myjson);
    window.location.href = `/habi_front/routes/address/address.html?obj=`+obj;  
}