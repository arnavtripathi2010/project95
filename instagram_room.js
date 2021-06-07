  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyY3T7luX-ZyvLd3ajCACE7-SEIGnOaR0",
    authDomain: "project93-330d3.firebaseapp.com",
    projectId: "project93-330d3",
    storageBucket: "project93-330d3.appspot.com",
    messagingSenderId: "1096362099555",
    appId: "1:1096362099555:web:0f52b4fc16644ecbcf4956"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 user_name= localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!!";
//ADD YOUR FIREBASE LINKS HERE

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot)
   {
     document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room_nme - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick=redirecToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHtml += row;
   //End code
   });});}
getData();

function addRoom(){
  room_name= document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "instagram_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
   window.location = "instagram_page.html";
}
