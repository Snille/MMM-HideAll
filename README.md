MMM-HideAll
===
[MagicMirror](https://github.com/MichMich/MagicMirror) Module to hide everything on screen.

### Screen shots

Different styles:

![Normal](.github/normal.png)

Keep the ring add a new symbol

![Eye in Ring](.github/eye-ring.png)

````javascript
{
	module: 'MMM-HideAll',
	position: 'bottom_right'
	config: {
		symbolhide: "eye",
		symbolshow: "eye"
	}
},
````

Maybe a smile without the ring?

![Smile](.github/smile.png)

````javascript
{
	module: 'MMM-HideAll',
	position: 'bottom_right'
	config: {
		symbolhide: "smile",
		symbolshow: "smile"
	}
},
````

In your custome.css add the following rows.

````CSS
.hide-toggle{
	border: 0px solid #FFF;
}

.hide-toggle div{
	position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	font-size: 55px;
}
````

The old default

![Old](.github/old.png)

````javascript
{
	module: 'MMM-HideAll',
	position: 'bottom_left',
	config: {
		hidetext: "Hide",
		showtext: "Show",
		symbolhide: "",
		symbolshow: ""
	}
},
````

Options for Setup:
---
* Add the following to your config:
````javascript
{
	module: 'MMM-HideAll',
	position: 'bottom_right'
	config: {
		hidetext: "",
		showtext: "",
		fadeSpeed: 1000,
		vishidden: 0.3,
		symbolhide: "toggle-off",
		symbolshow: "toggle-on"

	}
},
````

| Option | Default | Description |
|---|---|---| 
|`hidetext`|``|The text on the hide button.|
|`showtext`|``|The text on the show button.|
|`fadeSpeed`|1000|Speed of the fade.|
|`vishidden`|0.3|How visual the "show" button shall be when everything else is hidden (0.0 - 1.0)|
|`symbolhide`|`toggle-off`|Font awesome symbol to show when modules are hidden (instead of text)|
|`symbolshow`|`toggle-on`|Font awesome symbol to show when modules are shown (instead of text)|

Once the module is loaded correctly, simple click or tap the 'Hide' button. Click it again to get everything back.

* Note

This requires the ability for you to click the button. It is not voice activated.
