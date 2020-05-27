$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    let usernum = data.id.toString();
    $.get("/api/farm/"+ usernum).then(data1 => {
      $('.member-name').html(data1.first_name);
      console.log(data1.Products)
      $("#charity-amount").html(data1.charity);
      $("#non-charity-amount").html(data1.industry);
      $("#message-area").html(data1.message)

      $("#change-ch").on("click", function(data){
        var newAmount = $("#ch-new").val().trim();

        $.ajax({
          method : 'PUT',
          url: '/api/farm/'+usernum,
          data: {
            charity: newAmount
          }
        }).then(function(datac){
          window.location.replace("/members");
        })
      })

      $("#message-area-btn").on("click", data => {
        $.ajax({
          method: 'PUT',
          url: 'api/farm/'+usernum,
          data: {
            message : $("#message-area").val().trim()
          }
        }).then (data =>{
          $("#message-action").html('<div class="alert alert-success"><strong>Success!</strong> Your new message has been saved.</div>');
        }).catch(data =>{
          $("#message-action").html('<div class="alert alert-warning"><strong>Error!</strong> Sorry, something went wrong with message.</div>');
        })
      })

      $("#change-not").on("click", function(data){
        var newOther = $("#not-new").val().trim();
        $.ajax({
          method : 'PUT',
          url: '/api/farm/'+usernum,
          data: {
            industry: parseInt(newOther)
          }
        }).then(function(datan){
          window.location.replace("/members");
        })
      })

      for(let i = 0; i < data1.Products.length; i++){
        $("#product-list").prepend("<button id='delete' data-id='"+data1.Products[i].id+"'>DELETE</button><br><br>")
        if(data1.Products[i].charity ){
        $("#product-list").prepend("Charity: Donation to charity <br>")
        } else {
          $("#product-list").prepend("Charity: Donation for industry <br>")
        }
        $("#product-list").prepend("Being Donated To: " + data1.Products[i].charity_donation+"<br>")
        $("#product-list").prepend("Cost: $" + data1.Products[i].amount+".00 <br>")
        let cropDate = data1.Products[i].whenCrops_due.split("T");
        $("#product-list").prepend("Date Due: " + cropDate[0]+ "<br>")
        $("#product-list").prepend("Product Type: " + data1.Products[i].product_type + "<br>")
        $("#product-list").prepend("Product: " + data1.Products[i].product+"<br>")
        
    }
     

    $(document).on("click", "#delete", function() {
      var variable = $(this).data("id")
      console.log(variable)
      $.ajax({
        method: 'DELETE',
        url: "/api/produce/"+variable,
        data: {
          FarmerId : usernum
        }
      }).then(function(data){
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
      })
    })
    










      $(".fName").append(data1.first_name);
      $(".lName").append(data1.last_name);
      $(".fType").append(data1.farm_type);
      $(".bName").append(data1.business_entity);
      $(".fAddress").append(data1.address);
      $(".fCity").append(data1.city);
      $(".fState").append(data1.state);
      $(".fZip").append(data1.zip);



       // When the signup button is clicked, we validate the email and password are not blank
  $("#editButton").on("click", function(event) {
    alert("you clicked the button")
    let firstNameInput; let lastNameInput; let businessEntityInput; let farmTypeInput; let addressInput; let cityInput; let stateInput; let zipInput;

    if (firstNameInput.trim() != ""){
      firstNameInput = data1.first_name
    } else {
      firstNameInput = $("input#first_name-input");
    }
    if (lastNameInput.trim() != ""){
      lastNameInput = data1.last_name
    } else {
      lastNameInput = $("input#last_name-input");
    } 
    if (businessEntityInput.trim() != ""){
      businessEntityInput = data1.business_entity
    } else {
      businessEntityInput = $("input#business_entity-input");
    }
    if (farmTypeInput.trim() != ""){
      farmTypeInput = $("input#farm_type-input");
    } else {
      farmTypeInput = $("input#farm_type-input");
    }
    if (addressInput.trim() != ""){
      addressInput = data1.address
    } else {
      addressInput = $("input#address-input");
    }
    if (cityInput.trim() != ""){
      cityInput = data1.city
    } else {
      cityInput = $("input#city-input");
    }
    if (stateInput.trim() != ""){
      stateInput = data1.state
    } else {
      
    }
    if (zipInput.trim() != ""){
      alert("You changed address")
      zipInput = data1.zip
    } else {
      alert("You didn't change")
      zipInput = $("input#zip-input")
    }
  
  
    event.preventDefault();
    var userData = {
      id : usernum,
      first_name : firstNameInput.val().trim(),
      last_name : lastNameInput.val().trim(),
      business_entity : businessEntityInput.val().trim(),
      farm_type : farmTypeInput.val().trim(),
      address : addressInput.val().trim(), 
      city : cityInput.val().trim(),
      state : stateInput.val().trim(),
      zip : zipInput.val().trim()
    };

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
      $.post("/api/farm", userData).then(function(data) {
        window.location.replace("/members");
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
    })
  });
  });
});
