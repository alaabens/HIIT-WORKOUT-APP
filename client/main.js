const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

    // this is to add the functional button to add exercises in a list format
function AddExercise(){
    // Im making an if statement to condition if there is nothing written in the inout box it shows an alert to the user 
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // This is to clear out the input box after writin gsomething in it  
    inputBox.value = "";
    saveData();

}
    //this is to remove whatever has been inout once you click on the x buttob next to it and make sure the data is saved 
listContainer.addEventListener("click", function(e){
    // if(e.target.tagName === "LI"){
    //     e.target.classList.toggle("checked");
    // }
     if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
// , false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//this is to display the data whenever we open the website again 

function showExercise(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showExercise();