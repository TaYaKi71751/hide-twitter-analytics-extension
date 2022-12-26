(async () => {
	document.addEventListener("scroll",async ()=>{
		document.querySelectorAll(
			'[href*=analytics][aria-label]'
		).forEach(async (e)=>{
			e.parentNode.remove();
		});
		document.querySelectorAll(
			'[href*=analytics][dir=ltr]'
		).forEach(async (e)=>{
			e.parentNode.remove();
		});
	});
})();
