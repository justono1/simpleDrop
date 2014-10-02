;(function ( $, window, document, undefined ) {

		var pluginName = "simpleDrop",
				defaults = {
				propertyName: "value",
				icon: false
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		$.extend(Plugin.prototype, {
				init: function () {
					//Short Hand References
					var DOM = this.element,
							settings = this.settings;


					//Main Plugin Vars
					var menuNav = $(DOM).children(),
							menuItem = menuNav.children(),
							menuItems = menuItem.children();


					//Start Main Plugin Function
					menuItem.hide();

					menuItems.on("click", function(event) {
						return false;
					});

					menuNav.on("click", function(event) {

						var dropMenu = $(this).children();
						var visible = dropMenu.is(":visible");

						menuItem.slideUp('fast');

						if(visible) {

						} else {
							dropMenu.slideDown('fast');
						}					
						event.stopPropagation();
					});
				}
		});

		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				return this;
		};

})( jQuery, window, document );
