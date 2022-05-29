const location = document.getElementById("location_input");

if(location.addEventListener && location.value.length == null){
    location.addEventListener('input', changeText());
    } else { alert("empty"); }