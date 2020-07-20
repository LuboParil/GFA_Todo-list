$('#btn-add-item').click( () => { 
	let newItem = $('#todo-item').val();
	
	if (newItem.length > 0) {
		$('ul').append('<li>'+ newItem +'</li>');

		$('#todo-item').val("");
	}
	
	$('li').click(function () {
		$(this).css("text-decoration", "line-through");
	});
	
});

$('#todo-item').keypress( (event) => { 
	if (event.which === 13) {
		let newItem = $('#todo-item').val();
	
		if (newItem.length > 0) {
			$('ul').append('<li>'+ newItem +'</li>');

			$('#todo-item').val("");
		}
	}

	$('li').click(function () {
		$(this).css("text-decoration", "line-through");
	});
	
});

