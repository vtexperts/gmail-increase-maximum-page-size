
	( function () {

		chrome.contextMenus.onClicked.addListener( ( info, tab ) => {

			chrome.tabs.executeScript( tab.id, { file: "/content_script.js" });

		});

		chrome.contextMenus.removeAll( () => {

			chrome.contextMenus.create({

				id: "main",
				type: "normal",
				title: "Increase Gmail Page Size",
				contexts: [ "page" ],
				targetUrlPatterns: [ "https://mail.google.com/*" ]

			});

		});

	} () );
