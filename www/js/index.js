var paused_count = window.localStorage.getItem("paused");
var resumed_count = window.localStorage.getItem("resumed");
var launched_count = window.localStorage.getItem("launched");

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
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
		alert("pause");
		paused_count++;
		window.localStorage.setItem("paused", paused_count)
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		window.localStorage.setItem("resumed", resumed_count)
		updateDisplay();
    }
