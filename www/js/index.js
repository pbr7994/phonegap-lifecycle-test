var paused_count = window.localStorage.getItem("paused");
var resumed_count = window.localStorage.getItem("resumed");
var launched_count = window.localStorage.getItem("launched");
var item_count = window.localStorage.length;
var flake = {
	"Energy": {
		"KJ": "2230kj",
		"Kcal": "535kcal"
		},
	"Protein": "8.1g",
	"Carbohydrate": "56g",
	"Fat": {
		"Saturated": "19g",
		"UnSaturated": "11.5g"
		},
	"Fibre": "0.7g"
	};
var flake_string = JSON.stringify(flake);
window.localStorage.setItem("flake_info", flake_string);
var getFlake = window.localStorage.getItem("flake_info");
var JSON_flake = JSON.parse(getFlake);


    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
		item_count = window.localStorage.length;
		$("#count").text("There are " + item_count + " items being stored on the device for this app!");
		$("#flake").text(flake_string + <p> + "Energy " + JSON_flake.Energy.KJ + " / " + JSON_flake.Energy.Kcal);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		launched_count++;
		window.localStorage.setItem("launched", launched_count)
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		paused_count++;
		window.localStorage.setItem("paused", paused_count)
		updateDisplay();
    }
	
	function onResume() {
		resumed_count++;
		window.localStorage.setItem("resumed", resumed_count)
		updateDisplay();
    }
