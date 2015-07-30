$(function() {
	var global = {
		vip: true // vip接口
	};
	!global.vip && $("#w_pop ul").eq(1).find("li").addClass("disable");
	$.fn.center = function() {
		this.css({
			display: "block",
			position: "fixed",
			top: "50%",
			"-webkit-transform": "translateY(-49.5%)",
			transform: "translateY(-49.5%)"
		});
		return $.fn;
	}
	$.fn.mask = function() {
		$(".mask").fadeIn();
		return $.fn;
	}
	$.fn.unmask = function() {
		$(".mask").fadeOut();
		return $.fn;
	}
	$("#timepop").on("tap", function() {
		$("#w_pop").center().mask();
	});
	$("#w_pop").on("tap", function(e) {
		var tar = e.target;
		if(tar.tagName == "LI") {
			if( !$(tar).hasClass("disable") ) {
				var index = $(tar).parent().index() == 3 ? $(tar).index()+20 : $(tar).index();
				$("#w_pop li").removeClass("cur");
				$(tar).addClass("cur");
				$(this).find("select").find("option").eq( index ).attr("selected", true);
			}	
		};
		$("#wTime_no,#wTime_yes").on("tap", function() {
			$("#w_pop").hide().unmask();
		});
		$("#wTime_yes").on("tap", function() {
			var time = $("#w_pop ul .cur").html(), value = parseInt(time.substring(0,2)),
			date = (value>=9 && value<=12) ? "上午" :
					(value>12 && value<=18) ? "下午" : "晚上",
			vipTime = value>=19 ? " 晚间服务" : "";

			$("#timepop .tool_cont").html( date+" "+time+vipTime );
		});
	});

	/* = select = */
	Select({
		selector: "#datepop",
		option: "#datepop .o_pop1",
		target: "#datepop .tool_cont"
	});
	Select({
		selector: "#typepop",
		option: "#typepop .o_pop1",
		target: "#typepop .tool_cont"
	});
	Select({
		selector: "#carpop",
		option: "#carpop .o_pop1",
		target: "#carpop .tool_cont",
		callback: function(val) {
			console.log(val);
		}
	});
});