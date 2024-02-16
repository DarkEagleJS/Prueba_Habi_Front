$(function(){
    $("#navContent").load("/habi_front/routes/nav_progress.html"); 
});

let params = new URLSearchParams(location.search);
var obj = params.get('obj');
var t = JSON.parse(obj);

function guardar() {
    floor = document.getElementById('floor');
    var myjson = {
        name: t.name,
        email: t.email,
        address: t.address,
        floor: floor.value
    };
    var obj = JSON.stringify(myjson);
    window.location.href = `/habi_front/routes/additional/additional.html?obj=`+obj;
}