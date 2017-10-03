const listDiv = document.querySelector('.list');
const listItems = document.getElementsByTagName('li');
const toggleList = document.getElementById('toggleList');
const descriptionButton = document.querySelector('button.description');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const addItemButton = document.querySelector('button.addItem');
const removeItemButton = document.querySelector('button.removeItem');
const addItemInput = document.querySelector('input.addItem');
                                  
toggleList.addEventListener('click', () =>
                                     {
                                         if (listDiv.style.display == 'none')
                                         {
                                             listDiv.style.display = 'block';
                                             
                                             toggleList.textContent = 'Hide';
                                         } else
                                           {
                                               listDiv.style.display = 'none';
                                               
                                               toggleList.textContent = 'Show';
                                           }
                                     }
                           );

descriptionButton.addEventListener('click', () =>
                                            {
                                                descriptionP.innerHTML = descriptionInput.value + ':';
    
                                                descriptionInput.value = '';
                                            }
                                  );

addItemButton.addEventListener('click', () =>
                                        {
                                            let ul = document.getElementsByTagName('ul')[0];
    
                                            let li = document.createElement('li');
    
                                            li.textContent = addItemInput.value;
    
                                            ul.appendChild(li);
    
                                            addItemInput.value = '';
                                        }
                              );

removeItemButton.addEventListener('click', () =>
                                           {
                                               let ul = document.getElementsByTagName('ul')[0];

                                               let li = document.querySelector('li:last-child');
    
                                               ul.removeChild(li);
                                           }
                                 );

for (let i = 0; i < listItems.length; i += 1)
{
    listItems[i].addEventListener('mouseover', () =>
                                               {
                                                   listItems[i].textContent = listItems[i].textContent.toUpperCase();
                                               }
                                 );

    listItems[i].addEventListener('mouseout', () =>
                                              {
                                                  listItems[i].textContent = listItems[i].textContent.toLowerCase();
                                              }
                                 );
}