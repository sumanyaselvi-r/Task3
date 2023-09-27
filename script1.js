

// Question 3

//Use the Rest countries display all the countries names ,regions,sub-regions,population


var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        for(let i = 0 ; i< result.length ; i++){
            console.log(result[i].name);
            console.log(result[i].region);
            console.log(result[i].subregion); 
            console.log(result[i].population);    
       
    }
}
}
