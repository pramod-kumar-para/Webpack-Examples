// bundling css
import './css/style.css';

// bundling image
import icon from './images/icon.png';

// bundling data
import Data from './data/data.xml';

function addImage(){
    var imageDiv = document.getElementById('image_src');
    var myIcon = new Image();
    myIcon.src = icon;
    myIcon.style.width = '200px';
    myIcon.style.height = '200px';
    imageDiv.appendChild(myIcon)
}

addImage();

console.info(Data);