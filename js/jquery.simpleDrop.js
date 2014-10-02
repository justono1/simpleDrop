(function( $ ) {

	$.fn.simpleDrop = function() {

		var menuNav = this.children();
		var menuItem = menuNav.children();
		var menuItems = menuItem.children();

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

		return this;
	}

}(jQuery));