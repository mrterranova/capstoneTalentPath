$(document).ready(function() {
    $.get("/api/farm").then(function(data){
        var newFarmer;
        // console.log(dataMore)
        data.forEach(element => {
newFarmer = '<div class="newInsert">'+
                '<div class="farm">'+ element.business_entity +'</div>'+
                '<div class="details">'+
                    '<div class="name">'+ element.first_name + " "+ element.last_name +'</div>'+
                    '<div class="location">'+ element.address+ "<br>"+ element.city + ", "+ element.state + ", " + element.zip + '</div>'+
                    '<a href="/form/donation"><button id="donation" data-id='+ element.id +'>DONATE HERE</button></a>'+
                '</div>'+
                '<div class="charity">'+
                    'Help Farming goods to Donation Centers (tax deductible)'+
                    '<div class="amount-ch amount">Donation need : '+element.charity+'</div>';
                    element.Product.forEach(Product => {
newFarmer += '<div class="products-ch">'+
                        '<div class="product-ch product">Beets</div>'+
                        '<div class="type-ch type">Vegetable</div>'+
                        '<div class="due-ch due">Will be due : Sept 28th</div>'+
                    '</div>'+
                '</div>'+
                '<div class="not-charity">'+
                    'Help Farming Industry (non-tax deductible)'+
                    '<div class="amount-not amount">Donation need : '+ element.industry+'</div>'+
                    '</div>'+
                    '<br>'+
                '</div>'+
           '</div>'
        // }
        $(".produce-tables").prepend(newFarmer)

    })
});
})
