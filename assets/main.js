$(function() {

  // your code will go here
    reportCard = "https://www.codeschool.com/users/clare86.json";
    
    $.ajax({
    url: reportCard,
    dataType: 'jsonp',
    success: function(response) {
      // handle response
        completed = response.courses.completed;
        for(var i = 0; i < completed.length; i++){
            $("#badges").append("<div class='course'><h3>" + completed[i].title + "</h3><img src='" + completed[i].badge + "'></img><a href='" + completed[i].url + "' target='_blank' class='btn btn-primary'>See Course</a></div>");
        }
    }
  });

});
