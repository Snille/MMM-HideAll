/* global Module */

/* MagicMirror²
 * Module: MMM-HideAll
 * Created by: masters1222 (https://github.com/masters1222)
 * Modified by Snille (https://github.com/Snille)
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

	// Load the font awesome symbols and the defined styles.
	getStyles: function() {
		return ["font-awesome.css", "MMM-HideAll.css"];
	},

	getDom: function() {
		const wrapper = document.createElement("div");
		const button = document.createElement("button");
		const text = document.createElement("div");
		const symbol = document.createElement("div");
		const overlay = document.createElement("div");
		let hidden = true;

		const buttontexthide = this.config.hidetext;
		const buttontextshow = this.config.showtext;
		const fadeSpeed = this.config.fadeSpeed;
		const vishidden = this.config.vishidden;
		const symbolhide = this.config.symbolhide;
		const symbolshow = this.config.symbolshow;

		overlay.className = "paint-it-black";
		overlay.style.transitionDuration = `${fadeSpeed}ms`;

		button.className = "hide-toggle";
		button.type = "button";
		button.style.transitionDuration = `${fadeSpeed}ms`;
		button.setAttribute("aria-label", "Toggle screen visibility");

		button.appendChild(text);
		text.textContent = buttontexthide;
		if (symbolshow || symbolhide) {
			symbol.className = `hideall-picture fa fa-${symbolshow}`;
			button.appendChild(symbol);
		}

		wrapper.appendChild(button);
		wrapper.appendChild(overlay);

		button.addEventListener("click", () => {
			hidden = !hidden;
			overlay.classList.toggle("paint-it-black--visible", !hidden);
			button.classList.toggle("hide-toggle--hidden", !hidden);
			button.style.opacity = hidden ? 1 : vishidden;
			text.textContent = hidden ? buttontexthide : buttontextshow;

			if (symbolshow || symbolhide) {
				const iconName = hidden ? symbolshow : symbolhide;
				symbol.className = iconName ? `hideall-picture fa fa-${iconName}` : "hideall-picture";
			}
		});

		return wrapper;
	}
});
