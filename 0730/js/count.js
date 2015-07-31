function Count(obj) {
	return new count.prototype.init(obj);
}
function count() {}
count.prototype = {
	constructor: "count",
	init: function(obj) {
		$.extend(this, {
			elem: $(obj.elem),
			val: obj.initValue,
			addElem: $(obj.elem).find(obj.addElem),
			reduceElem: $(obj.elem).find(obj.reduceElem),
			step: obj.step || 1,
			eventType: obj.eventType || "click",
			disable: false
		});
		var _this = this;
		_this.elem.find("input").val(_this.val);
		_this.addElem.on(_this.eventType, $.proxy(function() {
			this.add();
		}, _this));
		_this.reduceElem.on(_this.eventType, $.proxy(function() {
			this.reduce();
		}, _this));
	},
	add: function() {
		this.val = this.val+this.step;
		this.elem.find("input").val(this.val);
		this.val>0 && this.reduceElem.removeClass("J_count_disable");
	},
	reduce: function() {
		var val;
		this.val = (val = this.val-this.step)<=0 ? 0 : val;
		this.val==0 && this.reduceElem.addClass("J_count_disable");
		this.elem.find("input").val(this.val);
	}
}
count.prototype.init.prototype = count.prototype;

$(function() {

	Count({
		elem: "#count",
		addElem: "#add",
		reduceElem: "#reduce",
		eventType: "click",
		initValue: 1,
		step: 1
	});

});

