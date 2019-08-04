(function(){
    'use strict';

    const theRecipies = $('#choice');

    fetch("Recipies.json")
        .then(function(response){
            return response.json();
        }).then(function(data){
            for(let i = 0; i < data.length; i++){
                theRecipies.append(`<li>
                <input type="radio" name="recipies" value="${data[i].fileURL}"> ${data[i].name}
                         </li>`);
            };
        });


}());