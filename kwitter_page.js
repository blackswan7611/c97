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

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("userName");

    //firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    //{ document.getElementById("output").innerHTML = "";
    // snapshot.forEach(function(childSnapshot) 
     //{ 
      //childKey = childSnapshot.key; 
      //childData = childSnapshot.val(); 
      //if(childKey != "purpose") 
      //{ 
           // firebase_message_id = childKey; 
            //message_data = childData;


function getData()
 {
      firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = "";
     snapshot.forEach(function(childSnapshot) 
     { 
      childKey = childSnapshot.key;
      console.log("childkey") ;
      childData = childSnapshot.val(); 
      if(childKey != "purpose") 
      { 
            firebase_message_id = childKey; 
            message_data = childData;

         console.log("firebase_message_id");
         console.log("message_data");
         name1 = message_data['name'];
name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'>"; 
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
      } });  }); }


function sendMessage() 
{ 
      msg = document.getElementById("message").value; 
      firebase.database().ref(room_name).push({ 
            name:user_name, 
            message:msg, 
            like:0 
      });
      document.getElementById("message").value = ""; 

      getData();
}



function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      likes = document.getElementById(message_id).value;
      updated_likes= Number(likes) +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });

}