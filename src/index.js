document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const createTaskForm = document.getElementById('create-task-form')

  //add eventlistener for submit needs to modify a form element
 createTaskForm.addEventListener('submit',(event) =>{
    event.preventDefault()
    const newTask = document.getElementById("new-task-description")
    const taskList = document.getElementById("tasks")
    const listItem = document.createElement('li')
    listItem.textContent = newTask.value
    taskList.appendChild(listItem)
    console.log(taskList)

    const newButton = document.createElement('button')
    newButton.textContent = "x"

    listItem.appendChild(newButton)

    newButton.addEventListener('click',(event) =>{
      listItem.remove()
      //event.target.parentNode.remove();  another way to acess listItem
    
    createTaskForm.reset();

    })
     

    //should be outside submit event?

    //create button
    //add click event listener to remove element
  
  })

});


//add multiple elements
//remove elements

// newFoodForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   const newNameInputElement = document.getElementById('new-name')
//   const newImageInputElement = document.getElementById('new-image')
//   const newDescriptionTextareaElement = document.getElementById('new-description')

//   const newFood = {
//       name: newNameInputElement.value,
//       image: newImageInputElement.value,
//       description: newDescriptionTextareaElement.value
//   }
  
//   addFoodImageToMenu(newFood)
// })
