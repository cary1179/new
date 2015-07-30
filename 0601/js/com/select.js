/* = 模拟select = */
function Select(obj) {
	return new select.prototype.init(obj);
}
function select() {}
select.prototype = {
	constructor: "select",
	init: function(obj) {
		$.extend(this, {
			selector: $(obj.selector),
			option: $(obj.option),
			target: $(obj.target),
			callback: obj.callback || $.noop,
			toSelectIndex: obj.toSelectIndex
		});
		var _this = this;
		_this.selector.on("tap", function(e) {
			_this.option.toggle();
		});
		_this.option.on("tap", function(e) {
			var tar = e.target, content = _this.target || undefined, value = $(tar).html(),
				selectElem = _this.selector.find("select"); // 是否复制给select
			if(tar.tagName = "LI") {
				var index = !!_this.toSelectIndex ? _this.toSelectIndex($(tar).index()) : $(tar).index(); // 对应给option中的索引
				!!content && _this.target.html( value );
				selectElem.length !== 0 && selectElem.find("option").eq(index<0 ? 0 : index).attr("selected", true); // 如果有select，就将对应的索引选中，索引不能为负数
			}
			_this.callback(value); // 返回值与索引
		});
		$("body").on("tap", function(e) {
			if($(e.target).parent()[0] !== _this.selector[0]) {
				_this.option.hide();
			}
		});
	}
}
select.prototype.init.prototype = select.prototype;