const firebaseConfig = {
      apiKey: "AIzaSyCiMWK3Vyzo06bX0LDGaqUjMaFRxFLMy3g",
      authDomain: "kwitterdatabase-d73a5.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-d73a5-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-d73a5",
      storageBucket: "kwitterdatabase-d73a5.appspot.com",
      messagingSenderId: "382662703488",
      appId: "1:382662703488:web:a6d613b9d8acd743b5a965"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("userName");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
    console.log(user_name);
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
      {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot)
             {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names );
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name1)
{
      console.log(name1);
      localStorage.setItem("room_name", name1);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location = "index.html" ;
}

