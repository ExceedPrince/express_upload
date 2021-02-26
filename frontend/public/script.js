const pageLoad = () => {
	console.log("client is running");
	let form = document.getElementById("uploadForm");

	let formData = new FormData(form);



	function notLoad (event) {
		event.preventDefault()
		
		console.log("We blocked the file upload process");
		
		Array(2).fill(1).map((item,index)=>{
			return formData.append(`${document.querySelector('input').type}`, event.target[index].value);
		})
		
		let allData = []
		for (var value of formData.values()) {
      allData.push(value);
   }

		console.log(allData)

		fetch('https://localhost:8000/upload', {
  		method: 'POST',
  		body: allData
		})

	}

	form.addEventListener("submit", notLoad);

}

window.addEventListener("load", pageLoad);