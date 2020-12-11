
let parent = document.getElementById('parent')
let paragraphe = document.getElementById('p_id')


let h1_element = document.createElement('h1');
let p_element = document.createElement('p');
let h2_element = document.createElement('h2');


p_element.innerText = "Oh!";
h1_element.innerText = "H1";
h2_element.innerText = "H2";

parent.appendChild(h1_element);
parent.appendChild(p_element);


function boutonClick(){
  parent.removeChild(paragraphe);
}

function Remove(){
  parent.removeChild(h1_element);
  parent.appendChild(h2_element);
  parent.replaceChild(h2_element, parent.firstChild)
}
