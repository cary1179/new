/* = 基础JS继承 = */
$.extend($.fn, {
	center: function() {
		this.css({
			display: "block",
			position: "fixed",
			top: "50%",
			"-webkit-transform": "translateY(-49.5%)",
			transform: "translateY(-49.5%)"
		});
		return $.fn;
	},
	mask: function() {
		$(".mask").fadeIn();
		return $.fn;
	},
	unmask: function() {
		$(".mask").fadeOut();
		return $.fn;
	}
});