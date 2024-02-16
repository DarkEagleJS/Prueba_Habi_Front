$(function(){
    $("#navContent").load("/habi_front/routes/nav_progress.html"); 
});

function guardar() {
    user = document.getElementById('name');
    var myjson = {
        name: user.value
    };
    var obj = JSON.stringify(myjson);
    window.location.href = `/habi_front/routes/email/email.html?obj=`+obj;  
}