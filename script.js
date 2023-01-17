$(document).ready(function(){
    var d = new Date();
    var days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Month= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var name = days[d.getDay()];
    var vmonth =Month[d.getMonth()];
    var vtime= d.getUTCDate();
   if (name == "Sunday"){
    $("#show-day").html(name);
    $(".sun").css("background-color", "red");
    $(".sun1").css("background-color", "red");
  }
  if (name == "Monday"){
    $("#show-day").html(name);
    $("#show-time").html(vtime);
    $(".mon").css("background-color", "red");
    $(".mon2").css("background-color", "red");
  }
    if (name == "Tuesday"){
      $("#show-day").html(name);
      $("#show-time").html(vtime);
      $(".tue").css("background-color", "red");
      $(".tue3").css("background-color", "red");
    }
    if (name == "Wednesday"){
      $("#show-day").html(name);
      $("#show-time").html(vtime);
      $(".wed").css("background-color", "red");
      $(".wed4").css("background-color", "red");
    }
    if (name == "Thursday"){
      $("#show-day").html(name);
      $("#show-time").html(vtime);
      $(".thur").css("background-color", "red");
      $(".thur5").css("background-color", "red");
    }
    if (name == "Friday"){
      $("#show-day").html(name);
      $("#show-time").html(vtime);
      $(".fri").css("background-color", "red");
      $(".fri6").css("background-color", "red");
    }
    if (name == "Saturday"){
      $("#show-day").html(name);
      $("#show-time").html(vtime);
      $(".sar").css("background-color", "red");
      $(".sar7").css("background-color", "red");
    }

    if (vmonth == "January") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "February") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "March") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "April") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "May") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "June") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "July") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "August") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "September") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "October") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "November") {
    $("#show-month").html(vmonth);
     
    }
    if (vmonth == "December") {
    $("#show-month").html(vmonth);
     
    }

$("#days-in-Weeks" ).selectable();

 
});/*end of  code*/

