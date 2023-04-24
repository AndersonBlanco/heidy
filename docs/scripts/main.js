//alert("website running"); 


const wbesiteTitltle_name = 'Heidy'; 
const header = document.getElementById('header');
const content = document.getElementById("content");
const footer = document.getElementById('footer');


var headerContent = `
<ul>

<li>Home</li>
<li>Affirmations</l1>
<li>Contact</l1>
<li>Shop</l1>

</ul>
`;

//header.innerHTML += headerContent;

function fetching(path, target){
    fetch(path).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
     // alert(html)
	// Convert the HTML string into a document object
	//var parser = new DOMParser();
	//var doc = parser.parseFromString(html, 'text/html');

    header.innerHTML += html;
}).catch(function (err) {
	// There was an error
	alert('Something went wrong.', err);
});}

fetching('./docs/components/header/headerContent.html', header)
fetching('./docs/components/content/contentCont.html', content)
fetching('./docs/components/footer/footerCont.html', footer)
