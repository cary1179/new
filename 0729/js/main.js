$(function() {
	"use strict";

	function showSingle(array, index) {
		$.each(array, function(i, $dom) {
			$dom.hide().eq(index).show();
		})
	}

	
	showSingle([$(".J_tar1"), $(".J_cont1"), $(".J_tar2")], 0);
	$(".J_tab1").mouseenter(function() {
		var index = $(this).index(".J_tab1");
		showSingle([$(".J_tar1"), $(".J_cont1")], index);
	});
	$(".J_tab2").mouseenter(function() {
		var index = $(this).index(".J_tab2");
		showSingle([$(".J_tar2")], index);
	});

	$(".J_eye").addClass("imt2");
	$(".J_cont_wrap").hide();
	$(".J_eye").on("click", function() {
		var index = $(this).index(".J_eye");
		$(".J_cont_wrap").show();

		
		if( !$(this).hasClass("imt2") ) { /*是否当前cur*/
			$(this).addClass("imt2");
			$(".J_cont_wrap").hide();
		}else {
			$(".J_eye").addClass("imt2");
			$(this).removeClass("imt2");
		}

		$(".J_cont2").hide().eq(index).show();
		showSingle([$(".J_tar2")], index);
	});

	$(".select").on("click", function(e) {
		var tar = e.target.tagName == "LI" ? e.target : undefined, $this = $(this);
		$this.toggleClass("open");
		tar && $this.find(".J_select_val").html( $(tar).html() );
	});

	$.each($(".count"), function(i, $dom) {
		Count({
			elem: $(".count").eq(i),
			addElem: ".add",
			reduceElem: ".cut",
			initValue: 95
		});
	});

	// console.log($("#change").find("input").attr("data-value").split(","))
	Change({
		elem: $("#change"),
		next: $("#next"),
		prev: $("#prev"),
		data: "经典,修身,宽松"
	})
	
});