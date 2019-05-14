var inputBox;

function addItem(item) {
	
	$('#input').after('<div class="me-want to-do panel-body alert alert-primary"><span class="fas fa-check-circle"></span> ' + item + '</div>');


	var it = $('.me-want');

	it.fadeOut(0);
	it.fadeIn(1000);
	it.removeClass('me-want');
	it.hover(addRemoveIcon, addRemoveIcon);
	
}

function add() {

	if (inputBox.val() == '') {
		console.log("Nothing in form!");
		return;
	}
	 var items = $('.to-do');
	// for(let i=0; i<items.length;i++){
	// 	if(inputBox.val()===items[i].innerHTML){
	// 		alert("same value exist")
	// 	}

	// }
	// var arr = items
	// 	$.each(arr, function (index, value) {
	// 	console.log(value);
		
	// 	// Will stop running after "three"
	// 	return (value !== 'three');
	// 	});	
	
	addItem(inputBox.val());
	inputBox.val('');

	
}

function remove(element) {
	
	var item = $(this);
	
	item.find('span').removeClass("fa-trash");
	item.find('span').removeClass("text-warning");
	item.find('span').addClass("glyphicon-ok");
	item.fadeOut(1000, function() {
		item.remove();
	});
	
}

function clear() {
	
	var items = $('.to-do');
	var glyph = items.find('span');
	
	glyph.removeClass('fa-check-circle');
	glyph.addClass('glyphicon-ok');
	items.fadeOut(1000, function() {
		items.remove();
	});
	
}

function addRemoveIcon() {
	
	var glyph =$(this).find('span');
	
	if (glyph.hasClass('glyphicon-ok'))
		return;
	
	glyph.toggleClass('fa-check-circle');
	glyph.toggleClass('fa-trash');
	glyph.toggleClass('text-warning');
	
}

function onKeyPress(event) {
	
	if (event.keyCode == 13)
		add();

}

$(document).ready(function() {

	inputBox = $('input[name="add-to-list"]');

	$('#add').click(add);
	$('#clear').click(clear);
	inputBox.keypress(onKeyPress);
	$('#list').on('click', '.to-do', remove);

	$('#script-error').remove();
	
});