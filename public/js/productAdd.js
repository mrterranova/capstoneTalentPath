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
                whenCrops_due: $("#due-date").val().trim(),
                product: $("#category").val().trim(),
                product_type: $("#type").val().trim(),
                amount: $("#amount").val().trim(),
                charity: charityVal,
                FarmerId: data.id
            }).then(function (data1) {
                alert("You have added a new product")
                window.location.replace(window.location.pathname + window.location.search + window.location.hash);
            })
        })
    })
})