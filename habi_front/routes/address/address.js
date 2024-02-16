$(function(){
    $("#navContent").load("/habi_front/routes/nav_progress.html"); 
});

let params = new URLSearchParams(location.search);
var obj = params.get('obj');
var t = JSON.parse(obj);

function guardar() {
    address = document.getElementById('address');
    var myjson = {
        name: t.name,
        email: t.email,
        address: address.value
    };
    var obj = JSON.stringify(myjson);
    window.location.href = `/habi_front/routes/floor/floor.html?obj=`+obj;
}