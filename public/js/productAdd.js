$(document).ready(function () {

    console.log("You are connected")
    $("#formSub").on("click", event => {
        $.get("/api/user_data").then(function (data) {
            var charityVal = "";
            var checkbox = document.getElementById('myCheck');
            if (checkbox.checked != true){
                charityVal = 0;
            } else {
                charityVal = 1;
            }
            $.post("/api/produce", {    
                donation : $("#donation").val().trim(),
                whenCrops_due: $("#due-date").val().trim(),
                product: $("#category").val().trim(),
                product_type: $("#type").val().trim(),
                amount: $("#amount").val().trim(),
                charity: 1,
                FarmerId: data.id
            }).then(function (data1) {
                alert("You have added a new product")
                // window.location.replace("/members");
                var charity;
                if(charityVal){
                    charity = $("#amount").val().trim() + data.charity
                } else {
                    industry = $("amount").val().trim()+ data.industry
                }
                $.ajax({
                    method: 'PUT', 
                    url: '/api/farm/'+data.id, 
                    data: {
                        FarmerId: data.id,
                        charity : charity,
                        industry: industry
                    }
                }).then (data =>{
                    console.log("You are in window: " + window.location)
                })
                window.location.replace("/members");
            })
        })
    })
})