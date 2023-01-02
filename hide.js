(async () => {
	const hideSomeAnalyticsViewElement = async () => {
		(async () => {document.querySelectorAll(
			'[href*=analytics][aria-label]'
		).forEach(async (e)=>{
			e.parentNode.remove();
		})})();
		(async () => {document.querySelectorAll(
			'[href*=analytics][dir=ltr]'
		).forEach(async (e)=>{
			e.parentNode.remove();
		})})();
	};
	const events = Object.keys(document.__proto__.__proto__).reduce((arr, event)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
		if(event.startsWith('on')) return [...arr, event.substr(2)];
		return arr;
	}, []);
	events.forEach(async (event) => {
		document.addEventListener(event,hideSomeAnalyticsViewElement);
	});
})();
