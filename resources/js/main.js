$(document).ready(function() {
	// render the html for the good guy area
	for (var i = 0;i < 5; i++) {
  	let $card = $("<div id="+i+" class='good-guy-cell'></div>");
    $card.data('active', false);
    $card.data('id', i);
    $card.text($card.data('id'));
		$('#good-guy-container').append($card);
	};
  $("#0").data('active', true);
  
	// render the html for the bad guy area
  for (var j = 5; j < 10; j++) {
  	let $row = $("<div id="+j+" class='bad-guy-row'></div>");
    $row.data('id', j);
    $("#bad-guy-container").append($row);
  };
  $(".bad-guy-row").each(function(index) {
  	for (var k = 10; k < 16; k++) {
        let rowIdNum = $(this).data('id');
        let badCardIdNum = rowIdNum+'-'+k;
        let badCardClass = "bad-card-class"+rowIdNum;
  		let $badCard = $("<div id="+badCardIdNum+" class="+badCardClass+"></div>");
  		$(this).append($badCard);
    };
  });
});


$(document).on("keydown", function(event) {
  	if (event.which === 38) {  // if user presses up arrow
    	$("div.good-guy-cell").each(function(index) {
        let currentCellActiveStatus = $(this).data('active');
        if (currentCellActiveStatus === true) {
        	let currentCellId = $(this).data('id');
          let nextCellId = Number(currentCellId - 1);
          if (nextCellId < 0) {nextCellId = 4};
          $("#"+currentCellId).text("");
        	$("#"+currentCellId).data('active', false);
       	 	$("#"+nextCellId).text("G");
        	$("#"+nextCellId).data('active', true);
          return false;
        };
       });
    } else
    if (event.which === 40) {  // if user presses down arrow
    	$("div.good-guy-cell").each(function(index) {
        let currentCellActiveStatus = $(this).data('active');
        if (currentCellActiveStatus === true) {
        	let currentCellId = $(this).data('id');
          let nextCellId = Number(currentCellId + 1);
          if (nextCellId > 4) {nextCellId = 0};
          $("#"+currentCellId).text("");
        	$("#"+currentCellId).data('active', false);
       	 	$("#"+nextCellId).text("G");
        	$("#"+nextCellId).data('active', true);
          return false;
        };
       });
  	} else    
    if (event.which === 32) {  // if user presses space bar
    	$("div.good-guy-cell").each(function(index) {   // iterate through the good guy column
      let currentCellActiveStatus = $(this).data('active');  // find the cell that is active
      if (currentCellActiveStatus === true) {   // when you find the active cell..
    		let currentCellId = $(this).data('id');  // get its HTML id
     		let rowId = Number(currentCellId + 5);   // get the id of its corresponding row
    		$("#"+rowId).css("background-color", "yellow");  // set the color of that row to yellow
        return false;
      };
    	});
    };
});

  