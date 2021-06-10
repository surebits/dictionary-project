$("button").click(wordLookup);

$("button").keyup(function(e){    
    if(e.keyCode == 13) wordLookup();
});

function wordLookup() {
    $.get("http://localhost:3000/lookup", { term: $("#term").val() }).done(
      function (data) {
        $("#content").empty().append(
          ...data.map((result, index) => $(`<p>${index+1}(${result.wordtype}) ${result.definition}</p>`))
        );
      }
    );
  }