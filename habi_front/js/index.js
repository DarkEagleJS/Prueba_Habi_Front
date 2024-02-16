const listData = async () => {
    const response = await fetch("http://192.168.0.33:3000/estate/");
    console.log(response);
    const data = await response.json();
    console.log(data);
    var count = 1;
    data.forEach((i, index) => {
        var c= count++;
        var id = i._id;
        var name = i.name;
        var email = i.email;
        var address = i.address;
        var floor = i.floor;
        var additional = i.additional;
        var dataTD = "<tr><td>" + c + "</td><td>" + name + "</td><td>" + email + "</td><td>" + address + "</td><td>" + floor + "</td><td>" + additional + "</td><td><a id="+id+" onclick=eliminar(this)><button class='button'>ELIMINAR</button></a></td></tr>";
        $('#table tbody').append(dataTD);
    });
};

window.addEventListener("load", function () {
    listData();
});

$(function(){
    $("#navContent").load("./routes/nav.html"); 
    $("#tableContent").load("./routes/table.html"); 
});

async function eliminar(id){
    var id = $(id).attr("id");
    try {
        const response = await fetch("http://192.168.0.33:3000/estate/"+id, {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    $('#table tbody tr').remove();
    listData();
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


