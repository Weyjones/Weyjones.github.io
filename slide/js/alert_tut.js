var imageCount = 1;
var total = 5;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
								
	}
 
setInterval(function photoA() {  
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},3000);

