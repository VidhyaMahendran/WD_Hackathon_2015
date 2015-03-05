var myFamily = myFamily || {};
myFamily.match = {
	init: function () {

	},

	getImages: function () {
		$.getJSON( "json/eatables.json", function( data ) {
		  var left = "<ul class='leftSection col-sm-4'>";
		  var right = "<ul class='rightSection col-sm-4'>";
		  $.each(data.items, function( key, val ) {
		  	if(key < data.items.length / 2) {
			    left += "<li id='" + key + "'><img src='" + val.url + "' height='50px' /></li>";
		  	} else {
			    right += "<li id='" + key + "'><img src='" + val.url + "' height='50px' /></li>";
		  	}
		  });
		  left += "</ul>";
		  right += "</ul>";
		  $(".matchSection").html(left + right);
		});
	}
};

$(document).ready(function () {
	myFamily.match.getImages();
});