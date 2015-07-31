$(function() {
	"use strict";

	$(".select").on("tap", function(e) {
		var tar = e.target.tagName == "LI" ? e.target : undefined, $this = $(this);
		$this.toggleClass("open");
		tar && $this.find("input").val( $(tar).html() );
	});

	$.each($(".count"), function(i, $dom) {
		Count({
			elem: $(".count").eq(i),
			addElem: ".add",
			reduceElem: ".cut",
			initValue: 95
		});
	});

	Change({
		elem: $("#change"),
		next: $("#next"),
		prev: $("#prev"),
		data: "经典,修身,宽松"
	});

	$.fn.setIndex = function() {
		$.each(this, function(i, dom) {
			$(dom).attr("data-index", i);
		});
	}

	var tapShow = function(tab, tar) {
		this.elem = $(tab);
		this.tar = $(tar);
		this.cur = 0;
		this.eventType = "tap";
	}
	tapShow.prototype = {
		constructor: "tapShow",
		init: function() {
			this.show();
			this.elem.setIndex();
			this.elem.on(this.eventType, $.proxy(function(e) {
				var tar = e.target.tagName == "TD" ? e.target : undefined;
				if(tar) {
					this.cur = $(tar).attr("data-index");
					this.show();
				}
			}, this));
		},
		show: function() {
			this.elem.find(".imt").addClass("imt3");
			this.elem.find(".imt").eq(this.cur).removeClass("imt3");
			this.tar.find("li").hide();
			this.tar.find("li").eq(this.cur).show();
		}
	}
	var tap1 = new tapShow(".J_imt1", ".J_imt1_tar");
	var tap2 = new tapShow(".J_imt2", ".J_imt2_tar");
	tap1.init();
	tap2.init();
});