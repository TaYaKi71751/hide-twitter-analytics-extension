(async () => {
	const hideSomeAnalyticsViewElement = async () => {
		(async() => {document.querySelectorAll(
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
	(async () => {document.addEventListener("scroll",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("scroll",hideSomeAnalyticsViewElement)})();
 (async () => {document.addEventListener("click",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("animation",hideSomeAnalyticsViewElement)})();
 (async () => {document.addEventListener("change",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("focus",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("waiting",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("load",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("loadend",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("loadstart",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("progress",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("load",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("readystatechange",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("DOMContentLoaded",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("loadeddata",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("play",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("canplay",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("canplaythrough",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("timeupdate",hideSomeAnalyticsViewElement)})();
	(async () => {document.addEventListener("durationchange",hideSomeAnalyticsViewElement)})();
})();
