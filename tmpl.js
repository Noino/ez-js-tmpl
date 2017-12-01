/*! Ez JS template engine | (c) 2016 William Wendell */

	var EzJStmpl = function(){
		$.extend(this, {
			tmpl: (function(h){
				// scrape first html comment content from each
				// template container and remove it
				$('.\\.tmpl').each(function(){
					h[this.id] = $(this).contents().filter(function() {
						return this.nodeType === 8;
					})[0].nodeValue;
					$(this).remove();
				});
				return h;
			})({})
		});
		return $.proxy(function(t, data) {
			if (!(''+this.tmpl[t]).length) { return; }
			return this.tmpl[t].replace(/{[^{}]+}/g, function(key) {
				return data[key.replace(/[{}]+/g, "")] || "";
			})
		},this);
	};
