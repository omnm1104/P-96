var firebaseConfig = {
  apiKey: "AIzaSyB5Rwxcnlx3Mxd7IejGYKvU_c-LP58eBhc",
  authDomain: "chatgram-project.firebaseapp.com",
  databaseURL: "https://chatgram-project-default-rtdb.firebaseio.com",
  projectId: "chatgram-project",
  storageBucket: "chatgram-project.appspot.com",
  messagingSenderId: "359620904865",
  appId: "1:359620904865:web:f23cadb1a4032b6a08ade0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User name");
  document.getElementById("user_name").innerHTML = "WELCOME " + user_name + " !!!!";

  function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });
    window.location = "kwitter_page.html";
  }

  function getData(){
    firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey =
    childSnapshot.key;
     Room_names = childKey;
     //Start code
     row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirect(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
     //End code
     });});}

    getData();

    function redirect(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }

    function logout(){
        localStorage.removeItem("room_name");
        localStorage.removeItem("User name");
        window.location = "index.html";
    }