MMM-HideAll
===
[MagicMirror](https://github.com/MichMich/MagicMirror) Module to hide everything on screen.

Setup:
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
		symbol: "hand-point-down"
	}
},
````

| Option | Description |
|---|---| 
|`hidetext`|The text on the hide button.<br><br>**Default value:** ``|
|`showtext`|The text on the show button.<br><br>**Default value:** ``|
|`fadeSpeed`|Speed of the fade.<br><br>**Default value:** `1000`|
|`vishidden`|How visual the "show" button shall be when everything else is hidden (0.0 - 1.0)<br><br>**Default value:** `0.3`|
|`symbol`|If you don't want text on your button, you can use any symbol from Font Awesome.<br><br>**Default value:** `hand-point-down`|

Once the module is loaded correctly, simple click or tap the 'Hide' button. Click it again to get everything back.

* Note

This requires the ability for you to click the button. It is not voice activated.