  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKwZMXXtpkbGLKjNIJgVYZ3TPXX4CjB6A",
    authDomain: "ignite-60d9e.firebaseapp.com",
    databaseURL: "https://ignite-60d9e.firebaseio.com",
    projectId: "ignite-60d9e",
    storageBucket: "ignite-60d9e.appspot.com",
    messagingSenderId: "941173824400"
  };
  firebase.initializeApp(config);
  const txtEmail=document.getElementById('txtEmail');
const txtPassword=document.getElementById('txtPassword');
const btnLogin=document.getElementById('btnLogin');
const btnSignUp=document.getElementById('btnSignUp');
const btnLogout=document.getElementById('btnLogout');
const verify=document.getElementById('verification');
//add login event

btnLogin.addEventListener('click',e=>{
  const email=txtEmail.value;
  const pass=txtPassword.value;
  const auth=firebase.auth();
  //Sign in
  const promise=auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));

});
  //Sign up
  btnSignUp.addEventListener('click',e=>{
    const email=txtEmail.value;
    const pass=txtPassword.value;
    const auth=firebase.auth();
    const promise=auth.createUserWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  //Add realtiime addEventListener
  firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
      console.log(firebaseUser);
    }
    else{
      console.log('not logged in');
    }
  });

  //log out
  btnLogout.addEventListener('click',e=>{
    firebase.auth().signOut();
  });
  //verification
  verify.addEventListener('click',e=>{
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

});
