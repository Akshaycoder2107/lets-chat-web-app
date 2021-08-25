// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            roomName:room_name,
            purpose:"adding room name "
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_names-"+Room_names);
row='<div class="room_name" id="'+Room_names+'" onclick="redirectToRoomname(this.id)" >#'+Room_names+'</div><hr>';
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";  
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}