/*
* Library 
*/

(function($){
	

    //Methods
    var methods = {
    	//Constructor
    	init : function(options){
    		//Default values
			var settings = $.extend({}, $.fn.startLeroyCustomizer.defaults, options);

			if(settings.product_id === null){
				console.error("Enter a product id");
				return false;
			}

			//Save product personalization data
			var product_personalization = {

			}

			//Set title
			var titulo = $("<p>Producto "+settings.product_id+"</p>");

			$(this).append(titulo);

			//initialize step
			var current = 0;
			goNextStep(current);


			//Prev and next buttons
			var prev_btn = $("<a href='javascript:void(0)' id='prev_btn' data-prev-step='"+null+"'>Anterior</a>");
			var next_btn = $("<a href='javascript:void(0)' id='next_btn' data-next-step='"+null+"'>Siguiente</a>");

			next_btn.click(function(){
				//Validation


				//Go
				goNextStep($(this).data('nextStep'));
			})

			$(this).append(prev_btn).append(next_btn);
    	}
    }

    //Initialize
	$.fn.startLeroyCustomizer = function(methodOrOptions){
		 if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }		
	}

	/* Private functions */
	function goNextStep(step_id){
		//Load step

		//Reload prev and next data attrs with the nexts and prev steps id

	}

	/* End private functions */

	//Default values
	$.fn.startLeroyCustomizer.defaults = {
        product_id : null
    }
	
})(jQuery)
