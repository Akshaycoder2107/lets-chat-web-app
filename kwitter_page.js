//YOUR FIREBASE LINKS// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDC8E_aeZCtAzFh7_QvHgvOCpvjvhc2XSs",
      authDomain: "kwitter-60adb.firebaseapp.com",
      databaseURL: "https://kwitter-60adb-default-rtdb.firebaseio.com",
      projectId: "kwitter-60adb",
      storageBucket: "kwitter-60adb.appspot.com",
      messagingSenderId: "792777125530",
      appId: "1:792777125530:web:a3b10dabb2a6938000f923"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
