function add_user(){
    user_name = document.getElementById("username-field").value ;
    localStorage.setItem("User name", user_name);
    window.location = "kwitter_room.html";
}