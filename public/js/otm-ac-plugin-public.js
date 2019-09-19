(function() {
	const app = {
		AccessibilityWidget: null,
		Host: "https://accessibly.apps.onthemapmarketing.com",
		Routes: {
			Settings: "/api/options/"
		},
		Settings: {},
		Name: "OTMAccessibilityWidget",
		Run: function() {
			app.AppendAccessibilityWidget(function() {
				//Configure Accessibility Widget
				app.AccessibilityWidget = app.ConfigurePlugin();
			});
		},
		AppendAccessibilityWidget: function(callback) {
			//Build the CSS element
			const cssLink = "http://dlieyhrm30x3f.cloudfront.net/accessibility-widget.min.css";

			var style = document.createElement("link");

			style.href = cssLink;
			style.rel = "stylesheet";
			//Append the script and style to the document's head.
			document.head.appendChild(style);

			//Build the script element
			const scriptSrc = "http://dlieyhrm30x3f.cloudfront.net/accessibility-widget.umd.js";

			var script = document.createElement("script");
			script.src = scriptSrc;
			script.async = true;
			script.type = "text/javascript";

			script.onload = callback;
			document.head.appendChild(script);
		},
		ConfigurePlugin: function() {
			var settings = {
				iconColor: otmAcScriptData.iconColor,
				themeColor: otmAcScriptData.themeColor,
				position: otmAcScriptData.position,
				showBrightness: otmAcScriptData.showBrightness === 'true',
				showContrast: otmAcScriptData.showContrast === 'true',
				showCursor: otmAcScriptData.showCursor === 'true',
				showGrayScale: otmAcScriptData.showGrayScale === 'true',
				showHideImages: otmAcScriptData.showHideImages === 'true',
				showHighlightLinks: otmAcScriptData.showHighlightLinks === 'true',
				showInvertColors: otmAcScriptData.showInvertColors === 'true',
				showReadableFonts: otmAcScriptData.showReadableFonts === 'true',
				showReadingLine: otmAcScriptData.showReadingLine === 'true',
				showTooltip: otmAcScriptData.showTooltip === 'true',
				showVoiceOverText: otmAcScriptData.showVoiceOverText === 'true',
				showZoom: otmAcScriptData.showZoom === 'true',
				voiceLanguage: otmAcScriptData.voiceLanguage,
				showLogo: otmAcScriptData.showLogo  === 'true',
				wordpress: true,
				enabled: otmAcScriptData.enabled  === 'true'
			};

			accessibilityWidget(settings);
		}
	};

	app.Run();

	//Just for testing
	window["OTMAccessibilityWidget"] = app;
})();