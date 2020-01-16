/* global Module */

/* Magic Mirror
 * Module: MMM Hide All
 * Created by: masters1222 (https://github.com/masters1222)
 * Modified my Snille (https://github.com/Snille)
 *
 * By EoF https://forum.magicmirror.builders/user/eof
 * MIT Licensed.
 */

Module.register("MMM-HideAll",{

	/**
	* Module config defaults
	*/
	defaults: {
		// Button "Hide" text.
		hidetext: "",
		// Button "Show" text.
		showtext: "",
		// Fade Speed
		fadeSpeed: 1000,
		// Visibility of button when modules are hidden 1.0 (full visibility) - 0.0 (no visibility).
		vishidden: 0.3,
		// Font awesome symbol to show when modules are hidden (instead of text).
		symbolhide: "toggle-off",
		// Font awesome symbol to show when modules are shown (instead of text).
		symbolshow: "toggle-on"
    },
    
	// Load the jquery file.
	getScripts: function() {
		return ["modules/MMM-HideAll/js/jquery.js"];
	},
	// Load the font awesome symbols and the defined styles.
	getStyles: function() {
		return ["font-awesome.css", "MMM-HideAll.css"];
	},
	
	getDom: function() {
		var wrapper = document.createElement("div");
		var button = document.createElement("div");
		var text = document.createElement("div");
		var symbol = document.createElement("div");
		var overlay = document.createElement("div");
		var hidden = true;
		
		var buttontexthide = this.config.hidetext;
		var buttontextshow = this.config.showtext;
		var fadeSpeed = this.config.fadeSpeed;
		var visshown = this.config.visshown;
		var vishidden = this.config.vishidden;
		var symbolhide = this.config.symbolhide;
		var symbolshow = this.config.symbolshow;
		
		overlay.className = "paint-it-black";
		
		button.className = "hide-toggle";
		button.appendChild(text);
		text.innerHTML = buttontexthide;
		if (symbolshow) {
			symbol.className = "hideall-picture fa fa-" + symbolshow;
			button.appendChild(symbol);
		}

		wrapper.appendChild(button);
		wrapper.appendChild(overlay);
		
		$(button).on("click", function(){
			if (hidden) {
				$(overlay).fadeIn(fadeSpeed);
				$(button).fadeTo(fadeSpeed, vishidden);
				$(text).html(buttontextshow);
				if (symbolhide) {
					symbol.className = "hideall-picture fa fa-" + symbolhide;
					button.appendChild(symbol);
				}
				hidden = false;
			} else {
				$(overlay).fadeOut(fadeSpeed);
				$(button).fadeTo(fadeSpeed, 1);
				$(text).html(buttontexthide);
				if (symbolshow) {
					symbol.className = "hideall-picture fa fa-" + symbolshow;
					button.appendChild(symbol);
				}
				hidden = true;
			}
		});
		
		return wrapper;
	}
});
