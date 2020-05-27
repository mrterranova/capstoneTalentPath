
var url = window.location.search;
var FId;
if (url.indexOf("?farm=") !== -1) {
    FId = url.split("=")[1]
}
const FarmerId = FId;

$.get("/api/farm/" + FarmerId).then(function (data) {
    let newCharity = data.charity;
    let newIndustry = data.industry;
    $("#submit").on("click", function (data) {

        let amountCh = $("#amount-ch").val().trim();
        let amountNot = $("#amount-not").val().trim();
        // alert("you are in 1")
        let nnewCharity
        let nnewIndustry
        if(amountCh != "" || null){
        nnewCharity = parseInt(newCharity) - parseInt(amountCh);
         } else {
            nnewCharity = parseInt(newCharity)
         }

        if (amountNot !="" || null){
        nnewIndustry = parseInt(newIndustry) - parseInt(amountNot);
        } else {
            nnewIndustry = parseInt(newIndustry)
        }
        // alert("you are in 3")
        // let text = "Thank you " + fname + " " + lname + ", for your gift of " + amountCh + " for produce to be sent to charity and " + amountNot + "towards other farming necessities to Farmer Nationwide Services today!"
            $.ajax({
                method: 'PUT',
                url: '/api/farm/' + FarmerId,
                data: {
                    charity: nnewCharity,
                    industry: nnewIndustry
                }
            }).then(data =>{
            })
        // window.location.replace("/main");
    })
})