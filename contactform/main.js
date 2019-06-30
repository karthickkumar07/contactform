var firebaseConfig = {
    apiKey: "AIzaSyBTCKCziuxkpcGO9raFfDpzMG7o9wKUR0c",
    authDomain: "contactform-60cc0.firebaseapp.com",
    databaseURL: "https://contactform-60cc0.firebaseio.com",
    projectId: "contactform-60cc0",
    storageBucket: "",
    messagingSenderId: "68387779439",
    appId: "1:68387779439:web:0b250f6efe1fa449"
  };
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }