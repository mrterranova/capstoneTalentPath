$(document).ready(function() {
    $.get("/api/user_data").then(function(data) {
        if (data.id){
            $('.buttons').html('<a class="navbar-brand" href="/members" style="float:right; margin-top:10px;">Profile</a>');
        }
    })
    $.get("/api/farm").then(function(data){
        var newFarmer = ""
        // console.log(dataMore)
        data.forEach(element => {
            $.get("/api/farm").then(function(dataMore){
                var newFarmer = ""
        if(element.charity!=null && element.industry !=null){
        newFarmer += '<div class="newInsert"><div class="farm">'+element.business_entity+'('+element.farm_type+')'+'</div><div class="row"><div class="col-sm-3" style="border: 1px solid black;background-color:rgb(121,139,57); height:500px;"><div class="details">'+
        '<div class="name"><strong>'+ element.first_name+' '+ element.last_name +'</strong></div><div class="location">'+element.address+'<br> '+element.city+', '+element.state+', '+element.zip+'</div><br><a href="./donation?farm='+element.id+'"><button id="donation" data-id='+ element.id +'>DONATE HERE</button></a>'+
        '<a href="mailto:'+ element.email +'?subject=Contacting from Donation Website"><button id="contact">CONTACT HERE</button></a></div></div><div class="col-md-9"><div class="row" style="border-bottom: 1px solid black;">'+
        '<div class="col-lg-12 message-box">';
        if (element.message===null){
            newFarmer += ''
        } else{
            newFarmer += element.message
        }
        newFarmer +='</div><div class="col-md-6"><br><strong>Help Farming goods to Donation Centers (tax deductible)</strong><br><div class="amount-ch amount"> $';
        if (element.charity ===null){ newFarmer +='0'}
        else{ newFarmer += element.charity}
        newFarmer += '.00</div></div><div class="col-md-6"><br><strong>Help Farming Industry (non-tax deductible)</strong><br><div class="amount-not amount">$';
        if (element.industry ===null){ newFarmer += '0'}
        else {newFarmer += element.industry}
        newFarmer +='.00</div>';
        for(let i=0; i<element.Products.length; i++){
            if(element.Products[i].charity){
                let createDate = element.Products[i].createdAt.split("T");
                let cropDate = element.Products[i].whenCrops_due.split("T");
                newFarmer += '</div><br></div><div class="row"><div class="col-md-6 donation-col"><br><div class="row"><div class="col-md-6">'+ element.Products[i].product+'('+element.Products[i].product_type+')</div>'+
                '<div class="col-md-6">Estimated Cost: $'+element.Products[i].amount+'.00</div> </div><br><div class="row"><div class="col-md-12">Charity location: '+element.Products[i].charity_donation+'<br>When due: '+cropDate[0]+'<br> When posted: '+createDate[0]+'</div></div></div>';
        } else {
            newFarmer += '</div><br></div><div class="row"><div class="col-md-6 donation-col"><br><div class="row"><div class="col-md-6">'+ element.Products[i].product+'('+element.Products[i].product_type+')</div>'+
            '<div class="col-md-6">Estimated Cost: $'+element.Products[i].amount+'.00</div> </div><br><div class="row"><div class="col-md-12"><br>When due: '+cropDate[0]+'<br> When posted: '+createDate[0]+'</div></div></div>';
        }
    }
            newFarmer +='</div></div></div><br>';
                $(".produce-tables").prepend(newFarmer)
        
            }
        })

    })
});
})
