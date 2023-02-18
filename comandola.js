
{
	document.getElementsByTagName("script")[9].remove();
	document.getElementsByTagName("script")[5].remove();
	window.addEventListener('load', function () {
		try {
			document.getElementsByClassName('adblock_detect')[0].remove();
			let content = document.getElementsByClassName('entry-content cf')[0];
			var pa = content.getElementsByTagName('p');
			for (var i = 0, l = pa.length; i < l; i++) {
				//this.alert(pa[i].style.cssText);
				if (pa[i].style.cssText.includes('display: none')) {
					pa[i].style = pa[i].style.cssText + "display: block;";
				}
			}
		} catch (error) {

		}


	});

	/*
	chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
		alert("aq2");
		if (changeInfo.status == 'complete' && myURLs.some(url => tab.url.includes(url))) {
			const tabId = tab.id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ['getLinks.js']
			});

		}
	});*/
}