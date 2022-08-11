(function() {
	const app = {
		AccessibilityWidget: null,
		Host: "https://ac.onthemapmarketing.com",
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
			//Build the script element
			const scriptSrc = "https://cdn.accessibly.app/accessibility-widget-v2.min.js";

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
				showBrightness: otmAcScriptData.showBrightness,
				showContrast: otmAcScriptData.showContrast,
				showCursor: otmAcScriptData.showCursor,
				showGrayScale: otmAcScriptData.showGrayScale,
				showHideImages: otmAcScriptData.showHideImages,
				showHighlightLinks: otmAcScriptData.showHighlightLinks,
				showInvertColors: otmAcScriptData.showInvertColors,
				showReadableFonts: otmAcScriptData.showReadableFonts,
				showReadingLine: otmAcScriptData.showReadingLine,
				showTooltip: otmAcScriptData.showTooltip,
				showVoiceOverText: otmAcScriptData.showVoiceOverText,
				showZoom: otmAcScriptData.showZoom,
				voiceLanguage: otmAcScriptData.voiceLanguage,
				showLogo: otmAcScriptData.showLogo,
				wordpress: true,
				enabled: otmAcScriptData.enabled
			};

			Accessibly.init(Object.assign(settings));
		}
	};

	app.Run();

	//Just for testing
	window["OTMAccessibilityWidget"] = app;
})();
