elixir.bannerImage = {};
elixir.bannerImage = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function bannerImageFunction() {
		$('#banner_image').attr('src', banner7);
	}
	
	$(document).ready(function() {
		bannerImageFunction();
	});	
	
})(elixir.bannerImage);