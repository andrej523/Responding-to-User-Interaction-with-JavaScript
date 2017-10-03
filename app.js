const listDiv = document.querySelector('.list'); // selection on the first element (<div> in this case) with the class 'list'
const listItems = document.getElementsByTagName('li'); // selection on all <li> elements
const toggleList = document.getElementById('toggleList'); // selection on the element (<button> in this case) with the id 'toggleList'
const descriptionButton = document.querySelector('button.description'); // selection on the first <button> element with the class 'description'
const descriptionInput = document.querySelector('input.description'); // selection on the first <input> element with the class 'description'
const descriptionP = document.querySelector('p.description'); // selection on the first <p> element with the class 'description'
const addItemButton = document.querySelector('button.addItem'); //selection on the first <button> element with the class 'addItem'
const removeItemButton = document.querySelector('button.removeItem'); // selection on the first <button> element with the class 'removeItem'
const addItemInput = document.querySelector('input.addItem'); // selection on the first <input> element with the class 'addItem'
                                  
// event listener on click event: user clicks on the button with text label of "Hide/Show List"
toggleList.addEventListener('click', () =>
                                     {
                                         if (listDiv.style.display == 'none') // condition: if the list is hidden...
                                         {
                                             listDiv.style.display = 'block';  // ...show the list
                                             
                                             toggleList.textContent = 'Hide'; // when the list is shown, the button's text is 'Hide'
                                         } else // condition: if the list is anything other than hidden (shown)...
                                           {
                                               listDiv.style.display = 'none'; // ...hide the list
                                               
                                               toggleList.textContent = 'Show'; // when the list is hidden, the button's text is 'Show'
                                           }
                                     }
                           );

// event listener on click event: user clicks on the button with text label of "Change List Description"
descriptionButton.addEventListener('click', () =>
                                            {
                                                descriptionP.innerHTML = descriptionInput.value + ':'; // replace the content in the <p> element (name of the list) with the text value provided by the user after they click inside the <input> element, and display a ':' character at the end
    
                                                descriptionInput.value = ''; // clear the content in the <input> element
                                            }
                                  );

// event listener on click event: user clicks on the button with text label of "Add New List Item"
addItemButton.addEventListener('click', () =>
                                        {
                                            let ul = document.getElementsByTagName('ul')[0]; // selection on all <ul> elements; since there is only one, it is referenced at index 0
    
                                            let li = document.createElement('li'); // create a new <li> element
    
                                            li.textContent = addItemInput.value; // set the content of the newly created <li> element to the text value provided by the user after they click inside the <input> element
    
                                            ul.appendChild(li); // add the newly created <li> element (child node) to the end of the <ul> element (parent node)
    
                                            addItemInput.value = ''; // clear the content in the <input> element
                                        }
                              );

// event listener on click event: user clicks on the button with text label of "Remove Previous List Item"
removeItemButton.addEventListener('click', () =>
                                           {
                                               let ul = document.getElementsByTagName('ul')[0]; // selection on all <ul> elements; since there is only one, it is referenced at index 0

                                               let li = document.querySelector('li:last-child'); // selection on the <li> element that is the last child element of its parent; :last-child CSS pseudo-class
    
                                               ul.removeChild(li); // remove the previous <li> element (child node) from the end of the <ul> element (parent node)
                                           }
                                 );

// iterate through every each <li> element
for (let i = 0; i < listItems.length; i += 1)
{
    // event listener on mouse event: user hovers mouse over any of the list items
    listItems[i].addEventListener('mouseover', () =>
                                               {
                                                   listItems[i].textContent = listItems[i].textContent.toUpperCase(); // set the content of the <li> element to upper case
                                               }
                                 );

    // event listener on mouse event: user moves out of the hover area for any of the list items
    listItems[i].addEventListener('mouseout', () =>
                                              {
                                                  listItems[i].textContent = listItems[i].textContent.toLowerCase(); // set the content of the <li> element to lower case
                                              }
                                 );
}