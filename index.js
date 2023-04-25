//alert("website running"); 


const wbesiteTitltle_name = 'Heidy'; 
 

 
const root = document.getElementById("root");
 

//header.innerHTML += headerContent;

function fetching(path, target,  ){
    fetch(path).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
     // alert(html)
	// Convert the HTML string into a document object
	//var parser = new DOMParser();
	//var doc = parser.parseFromString(html, 'text/html');

    target.innerHTML += html; 
}).catch(function (err) {
	// There was an error
	alert('Something went wrong.', err);
});}

fetching('./docs/components/Home/home.html', root )
//fetching('../Home/home.html', root, contentCont)
//fetching('../footer/footerCont.html', footer, footerContent)



