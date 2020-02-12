$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bork!</li>");
    $("ul#cat").prepend("<li>Purrrr</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#growl").click(function() {
    $("ul#dog").prepend("<li>GRRRRR!</li>");
    $("ul#cat").prepend("<li>HSSSSSS!</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>woof!</li>");
    $("ul#cat").prepend("<li>mew</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#hiss").click(function() {
    $("ul#dog").prepend("<li>GRRRR!</li>");
    $("ul#cat").prepend("<li>HSSSSSSSS!</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });
});

