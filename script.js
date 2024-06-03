const addButton = document.querySelector('button');
const input = document.querySelector('input');
const listContainer = document.getElementById('list-container')
// console.log(addButton);

addButton.addEventListener('click',function(){
    if(input.value == ''){
        alert('please enter a task to enter')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      
    }
    input.value = '';
    saveData();
})

listContainer.addEventListener('click',(e) => {
    // console.log(e);
    // console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentNode.remove();
        // console.log("span is clicked");
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();