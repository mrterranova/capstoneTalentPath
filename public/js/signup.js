$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstNameInput = $("#firstname-input");
  var lastNameInput = $("#lastname-input");
  var businessEntityInput = $("#businessentity-input");
  var farmTypeInput = $("#farmtype-input");
  var addressInput = $("#address-input");
  var cityInput = $("#city-input");
  var stateInput = $("#state-input");
  var zipInput = $("#zip-input");


  // When the signup button is clicked, we validate the email and password are not blank
  $("#submit").on("click", function(event) {
    alert("You are in the form submitting")
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(), 
    };
    alert(cityInput)
    var farmerData = {
      first_name : firstNameInput.val(),
      last_name : lastNameInput.val(),
      business_entity : businessEntityInput.val(),
      farm_type : farmTypeInput.val(),
      address : addressInput.val(), 
      city : cityInput.val(),
      state : stateInput.val(),
      zip : zipInput.val()
    }
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, farmerData.first_name, farmerData.last_name, farmerData.business_entity, farmerData.farm_type, farmerData.address, farmerData.city, farmerData.zip, farmerData.state);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    businessEntityInput.val("");
    farmTypeInput.val("");
    addressInput.val("");
    cityInput.val("");
    stateInput.val("");
    zipInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password,first, last, bus, type, address, city, zip, state ) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function(data) {
        $.get("/api/user_data").then(function(data) {
        $.post("/api/farm", {
          UserId : data.id,
          first_name : first, 
          last_name : last, 
          address : address, 
          state : state, 
          city : city, 
          zip : zip, 
          farm_type : type,
          business_entity : bus

        }).then(function(data) {
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
