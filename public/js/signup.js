$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstNameInput = $("input#first_name-input");
  var lastNameInput = $("input#last_name-input");
  var businessEntityInput = $("input#business_entity-input");
  var farmTypeInput = $("input#farm_type-input");
  var addressInput = $("input#address-input");
  var cityInput = $("input#city-input");
  var stateInput = $("input#state-input");
  var zipInput = $("input#zip-input");


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(), 
      first_name : firstNameInput.val().trim(),
      last_name : lastNameInput.val().trim(),
      business_entity : businessEntityInput.val().trim(),
      farm_type : farmTypeInput.val().trim(),
      address : addressInput.val().trim(), 
      city : cityInput.val().trim(),
      state : stateInput.val().trim(),
      zip : zipInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        alert("second")
        $.get("/api/user_data").then(function(data){
        $.post("/api/farm", {
          UserId : data.id,
          first_name : first_name, 
          last_name : last_name, 
          business_entity : business_entity, 
          farm_type : farm_type, 
          address : address, 
          city : city, 
          state : state, 
          zip : zip
        }).then(function(data) {
          alert(third)
          window.location.replace("/members");
        })
      })
    
      })
    }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
