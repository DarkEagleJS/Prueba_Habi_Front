$(function(){
    $("#navContent").load("/habi_front/routes/nav_progress.html"); 
});

var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

function cargar() {
    modal.style.display = "block";
    var aditional = "";
    var checkedValue1 = $('#checkbox1:checked').val();
    var checkedValue2 = $('#checkbox2:checked').val();
    var checkedValue3 = $('#checkbox3:checked').val();
    if(checkedValue1 != undefined) aditional = checkedValue1 ?? "";
    if(checkedValue2 != undefined) aditional = aditional + " " + checkedValue2;
    if(checkedValue3 != undefined) aditional = aditional + " " + checkedValue3;

    let params = new URLSearchParams(location.search);
    var obj = params.get('obj');
    var t = JSON.parse(obj);

    const data = JSON.stringify({
        name: t.name.toString(),
        email: t.email.toString(),
        address: t.address.toString(),
        floor: t.floor.toString(),
        additional: aditional.toString()
    });

    const nameElement = document.createElement("p");
    nameElement.textContent = "Name: " + t.name;
    const emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + t.email;
    const addressElement = document.createElement("p");
    addressElement.textContent = "Dirección: " + t.address;
    const floorElement = document.createElement("p");
    floorElement.textContent = "Piso: " + t.floor;
    const aditionalElement = document.createElement("p");
    aditionalElement.textContent = "Adicionales: " + aditional;

    var dataModal = document.getElementById("modal_data");

    dataModal.appendChild(nameElement);
    dataModal.appendChild(emailElement);
    dataModal.appendChild(addressElement);
    dataModal.appendChild(floorElement);
    dataModal.appendChild(aditionalElement);

}

async function guardar() {
    
    try {
        var aditional = "";
        var checkedValue1 = $('#checkbox1:checked').val();
        var checkedValue2 = $('#checkbox2:checked').val();
        var checkedValue3 = $('#checkbox3:checked').val();
        if(checkedValue1 != undefined) aditional = checkedValue1 ?? "";
        if(checkedValue2 != undefined) aditional = aditional + " " + checkedValue2;
        if(checkedValue3 != undefined) aditional = aditional + " " + checkedValue3;
    
        let params = new URLSearchParams(location.search);
        var obj = params.get('obj');
        var t = JSON.parse(obj);
    
        const data = JSON.stringify({
            name: t.name.toString(),
            email: t.email.toString(),
            address: t.address.toString(),
            floor: t.floor.toString(),
            additional: aditional.toString()
        });

        const response = await fetch("http://192.168.0.33:3000/estate/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        });
        console.log(response);
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
      window.location.href = `/habi_front/index.html`
}