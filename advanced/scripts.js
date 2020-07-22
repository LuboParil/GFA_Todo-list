$(document).ready( function() {

	//make item done/completed - add .light class to parent <div>
	function taskDone() {
		//task unone
		$('i.fas.fa-check-circle').click( function() {
			let parent = $(this).parent();
			parent.removeClass('light');
			parent.children('.fas.fa-check-circle').hide();
			parent.children('.far.fa-check-circle').show();
		});
		//task done
		$('i.far.fa-check-circle').click( function() {
			let parent = $(this).parent();
			parent.addClass('light');
			parent.children('.fas.fa-check-circle').show();
			parent.children('.far.fa-check-circle').hide();
		})
	}

	//remove item - .remove()
	function removeItem() {
		$('.fa-trash').click( function() {
			$(this).parent('div').remove();
		});
	}

	// function: add Item from 'form' to 'list'
	function addItem() {
		let newTask = "";
		newTask = $('#addItem').val();

		if (newTask.length > 0) {
			$('.todo-list__items-list').append(
				`<div class="todo-list__items-list__item">
					<span>${newTask}</span>
					<i class="fas fa-check-circle"></i>
					<i class="far fa-check-circle"></i>
					<i class="fas fa-trash"></i>
				</div>`
			);
			
			// after added item, remove value from text input
			$('#addItem').val(null);
		}	
	}

	function allInOne() {
		addItem();
		removeItem();
		taskDone();
	}

	////////////////////////////////////
	// add item by click
	$('.todo-list__btn').click( () => { 
		allInOne();
	} );

	// add item by Enter key
	$('#addItem').keypress( (event) => {
		if (event.which === 13) {
			allInOne();
		}
	});
});
