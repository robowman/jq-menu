(function($){

    $.fn.menu = function(options){
	
			var settings = $.extend({
				"header_selector"	:	"H2",
				"force_one"			:	true,
				"speed"				:	100
			}, options);
						
            return this.each(function(){
			
				$(this).data("options", settings);
				
			    var $this = $(this),
				$headers = $($this.data("options").header_selector,$this);		

				$this.addClass("jq-menu");
				$headers.addClass("jq-menu-header");
				
				$headers.each(function(){
										
					var $child = $(this).next("ul");
					
					if ($child.length)
						$("a",this).append("<em>+</em>");
					else
						return;
												
					$(this).click(function(){
					
						var $em = $("em",this);
						
						if ($this.data("options").force_one) $("ul",$this).not($child).slideUp($this.data("options").speed);
						
						$child.slideToggle($this.data("options").speed,function(){checkSymbol()});
						
					})
					
					function checkSymbol(){
						$headers.each(function(){
						
							var $child = $(this).next("ul"),
							$em = $("em",this);
							
							if (!$child.length) return;
							
							($child.is(":visible")) ? $em.text("-") : $em.text("+");							
							
						})
					}
					
				})

            });
		
    };
	
})(jQuery);