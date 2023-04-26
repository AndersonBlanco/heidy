//alert("website running"); 


const wbesiteTitltle_name = 'Heidy'; 
 

const header = document.getElementById('header');
const root = document.getElementById("root");
const footer = document.getElementById('footer');


var headerContent = `
<div id = 'container'>
<ul>
    <li><h2>AFFIRMATIONS</h2></li>
    <li><h2>SHOP</h2></li>
    <li><h2>CONTACT</h2></li>
    <li><h2>BLOG</h2></li>
    <li><h2>WORK-OUT</h2></li>
    </ul> 
</div>
`;

var contentCont = `
<div id = 'container'>
<h1>Content</h1>
</div>

`;

var footerContent = `
<div id = 'container'>
<h1>footer</h1>
</div>
`;

//header.innerHTML += headerContent;

function fetching(path, target, rawHTML){
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

fetching('./docs/header/headerContent.html', header, headerContent)
//fetching('../Home/home.html', root, contentCont)
fetching('../footer/footerCont.html', footer, footerContent)



