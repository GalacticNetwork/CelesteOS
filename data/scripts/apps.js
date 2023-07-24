function showApps() {
  var showApps = document.createElement("object");
  showApps.style = "position:fixed;height:100%;width:100%;top:0;left:0;user-select:none";
  showApps.data = "https://celestial.easyreadwrite.xyz/apps.html";

  document.documentElement.appendChild(showApps);
  
}
function showSettings() {
  var showSettings = document.createElement("object");
  showSettings.style = "position:fixed;height:100%;width:100%;top:0;left:0;user-select:none";
  showSettings.data = "https://celestial.easyreadwrite.xyz";

  document.documentElement.appendChild(showSettings);
  
}
    function showMath() {
	var page = open();
      var iframe = document.createElement('iframe');
      iframe.style = "position:fixed; top:0%; left: 0%; width:100%; height:100%; border: none; user-select: none;";
      iframe.src = "https://giant-hare-visor.cyclic.app/gs.html";
  
      page.document.body.appendChild(iframe)
		}