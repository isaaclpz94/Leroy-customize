/*
* Library 
*/

(function($){
	$.fn.startLeroyCustomizer = function(options){
		var settings = $.extend({
			product_id : null
		}, options);

		if(settings.product_id === null){
			console.error("Enter a product id");
			return false;
		}

		$(this).append($("<p>Producto "+settings.product_id+"</p>"));
	}
})(jQuery)
