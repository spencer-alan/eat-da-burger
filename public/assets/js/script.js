$(function(){
  $("#submit").on("click", function(event) {
    event.preventDefault();

    const burgerName = $("#burgerName").val().trim();
    console.log(burgerName);
    $.ajax({
      url: "/add",
      method: "POST",
      data: {
        burger_name: burgerName
      }
    }).then(function(){
      console.log("burger added");
    }).catch(function() {
      alert("something went wrong");
    });
  });
})