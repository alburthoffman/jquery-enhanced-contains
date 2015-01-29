(function() {
	var oldContainsFnt = jQuery.find.selectors.pseudos.contains;
	
	jQuery.find.selectors.pseudos.contains = function( pattern ) {
		var mat;
		
		if (pattern[0] != "/") {
			mat = function(text) {
				return text.indexOf(pattern) > -1;
			}
		} else {
			var pos = pattern.lastIndexOf("/");
			var regex = new RegExp(pattern.substring(1, pos), pattern.substring(pos + 1));
			
			mat = function(text) {
				return regex.exec(text) != null;
			}
		}
		
		return function( elem ) {
			var txt = ( elem.textContent || elem.innerText || jQuery.find.getText( elem ) );
			
			return mat( txt );
		};
	}
	
	for (var p in oldContainsFnt) {
		jQuery.find.selectors.pseudos.contains[p] = oldContainsFnt[p];
	}
})();