$("button").click(wordLookup);

$("button").keyup(function(e){    
    if(e.keyCode == 13) wordLookup();
});

function wordLookup() {
    $.get("https://cs472-dict.herokuapp.com/lookup", { term: $("#term").val() }).done(
      function (data) {
        $("#content").empty().append(
          ...data.map((result, index) => $(`<p>${index+1}(${result.wordtype}) ${result.definition}</p>`))
        );
      }
    );
  }