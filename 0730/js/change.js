
function Change (opt) {
	return new change.prototype.init(opt);
}
function change () {}
change.prototype = {
	constructor: "change",

	init: function(opt) {
		var option = {
			elem: $("#change"),
			next: $("#next"),
			prev: $("#prev"),
			cur: 0
		}
		$.extend(option, opt);
		$.extend(this, option);
		this.data = this.data.split(",");
		
		this.next.on("click", $.proxy(this.goNext, this));
		this.prev.on("click", $.proxy(this.goPrev, this));
	},

	goNext: function() {
		this.cur = (++this.cur)%this.data.length;
		this.show();
	},

	goPrev: function() {
		this.cur = ((--this.cur)<0 ? this.cur=this.data.length-1 : this.cur)%this.data.length;
		this.show();
	},

	show: function() {
		this.value = this.data[this.cur];
		this.elem.find("input").val(this.value);
	}
}
change.prototype.init.prototype = change.prototype;
