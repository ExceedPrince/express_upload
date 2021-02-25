const pageLoad = () => {
	console.log("client is running");
	let form = document.getElementById("uploadForm");

	function notLoad (event) {
		event.preventDefault();
		console.log("We blocked the file upload process");
	}

	form.addEventListener("submit", notLoad);

}

window.addEventListener("load", pageLoad);