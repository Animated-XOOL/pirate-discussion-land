const firebaseConfig = {
    apiKey: "AIzaSyDOOT8KuHsJpdmtaMIxDDCsNZl2DkF5Lrc",
    authDomain: "pirate-discuss-land.firebaseapp.com",
    databaseURL: "https://pirate-discuss-land-default-rtdb.firebaseio.com",
    projectId: "pirate-discuss-land",
    storageBucket: "pirate-discuss-land.appspot.com",
    messagingSenderId: "1004013026713",
    appId: "1:1004013026713:web:271292e22af03d313ae708"
  };
  const app = initializeApp(firebaseConfig);

  

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "AY, WELCOME TO THE SEAS " + user_name + " ,have a great time !"

  function addroom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().red("/").child(room_name).update({});
  }

    function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name")
           window.location = "pirate_Login.html";
    }