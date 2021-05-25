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
  room_name = localStorage.getItem("room_name");

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          message: msg,
          username: user_name,
          likes: 0
      });
      document.getElementById("msg").value = "";
  }

  function logout(){
    localStorage.setItem("User name");
    localStorage.setItem("room_name");
    window.location = "index.html";
  }