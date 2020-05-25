console.log("You are connected")
$("#formSub").on("click", event => {
    alert("in general")
    $.get("/api/user_data").then(function (data) {
        let charChoice = "";
        if ($("charity-yes").val().trim() != ""){
            charChoice = true
        } else {
            charChoice = false
        }


        $.post("/api/produce", {
            whenCrops_due: $("due-date").val().trim(),
            product_type : $("type").val().trim(),
            amount : $("amount").val().trim(),
            charity : charChoice,
            FarmerId : data.id
     }).then(function(data1){
         console.log("completed")
     })
    })
})