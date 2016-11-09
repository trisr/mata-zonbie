$(document).foundation();

$("#main-search").keyup(function(event){
    if(event.keyCode == 13){
      location.href = 'search-result.html';
    }
});
