/*****Problem

1 Create a 3 line menu icon that appears in mobile views only
  1.1 save image to file that is the icon
  1.2 insert image into the html with js
2. When Icon is clicked the menu list appears
3. When Icon is clicked again the menu list disappears


*******/



/*document.body.onload = addElement;

function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createElement("input");
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("div1").parentNode;
  document.body.insertBefore(newDiv, currentDiv);
}*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
  }


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event)
{
  if (!event.target.matches('.dropbtn'))
  {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
      {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show'))
            {
              openDropdown.classList.remove('show');
            }
      }
   }

}*/
