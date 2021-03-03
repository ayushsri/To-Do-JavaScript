//Getting the JSON data
const xhr=new XMLHttpRequest();
//Getting JSON data using todo.json
xhr.open('GET','Data/todo.json');
//using xhr object
xhr.onload=(response)=>{
    if(response.currentTarget.status===200)
    {//parsing json
        const names=JSON.parse(response.currentTarget.responseText);
        createList(names);
    }

}

xhr.send();
//creating function to render the json
const createList=(names)=> {
    const container = document.getElementsByClassName("hmm").item(0);
    //const list =document.createElement("ul");
    let listItem;
    let list3;
//creating an li and div element and rendering loop
    names.forEach(name => {
        let stat="notComplete";
        listItem = document.createElement('li');
        //creating li element
        listItem.id = 'item-${name.title}';
        //seting the id
        listItem.setAttribute('data-index', name.title)
        listItem.textContent = name.title;
        //getting the list item
        listItem.classList.add("list-Item");
        let button1 = document.createElement("button1");
        let button2 = document.createElement("button2");
        button1.innerHTML = "view";
        button2.innerHTML = "complete";
        button2.className = "button2";
        button1.className = "button1";

        //two buttons to get input
        list3=document.createElement("div");
        list3.id = name.title;
        list3.textContent ="Description: " +name.description+" Status: "+stat+" Due Date :"+ name.dueDate+" Time: "+name.dueTime;
        list3.style.display="none";
        listItem.appendChild(button1);
        listItem.appendChild(button2);

     //using span for the input
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        let close = document.getElementsByClassName("close");
        span.appendChild(txt);
        // append the child to parent element
        listItem.appendChild(span);
        button2.addEventListener("click", function () {

            this.parentElement.style.backgroundColor = "yellow";
            stat="complete";
            list3.textContent = "Description: " +name.description+" Status: "+stat+" Due Date :"+ name.dueDate+" Time: "+name.dueTime;

        })


        button1.addEventListener("click", function () {
          /*  this.parentElement.textContent= name.title+"\r\n"+name.dueDate;
          listItem.appendChild(button2);
            listItem.appendChild(span);*/
            let div = document.getElementById(name.title);
            if (div.style.display !== "none") {
                div.style.display = "none";
            }
            else {
                div.style.display = "block";
            }

        })

    //appendng all data
        container.appendChild(list3);
        container.appendChild(listItem);
        //close the div
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }


    })

}

// Create a new list item when clicking on the "Add" button
function fun123() {
  //make second container
    const container1 = document.getElementsByClassName("hmm").item(0);
    //set the status as not complete
    let stat1="Not Complete";
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    //get the description value
    let discriptionValue = document.getElementById("description").value;
    let dateValue= document.getElementById("dueDate").value;
    let timeValue= document.getElementById("dueTime").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    //if string is null
    if (inputValue === '') {
        alert("You must write something!");
        return;
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    //append the child
    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
        let button1 = document.createElement("button1");
        let button2 = document.createElement("button2");
        button1.innerHTML = "view";
        button2.innerHTML = "complete";
        button2.className = "button2";
        button1.className = "button1";


        let list4;
        list4=document.createElement("div");
        list4.id = inputValue ;
        list4.textContent ="Description: " +discriptionValue+" Status: "+"Not complete"+" Due Date :"+ dateValue+" Time: "+timeValue;
        list4.style.display="none";



        button2.addEventListener("click", function () {

            this.parentElement.style.backgroundColor = "yellow";
            stat1="complete";
            list4.textContent ="Description: " +discriptionValue+" Status: "+stat1+" Due Date :"+dateValue+" Time: "+timeValue;

        })



        button1.addEventListener("click", function () {
            /*  this.parentElement.textContent= name.title+"\r\n"+name.dueDate;
            listItem.appendChild(button2);
              listItem.appendChild(span);*/
            let div = document.getElementById(inputValue);
            if (div.style.display !== "none") {
                div.style.display = "none";
            }
            else {
                div.style.display = "block";
            }

        })

        li.appendChild(button1);
        li.appendChild(button2);
        container1.appendChild(li);
        container1.appendChild(list4);


    }
}
//validating the date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

/** jan starts with 0**/
if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}
//today
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("dueDate").setAttribute("min", today);
//today value
let today1 = new Date();
let time = today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds();

let date1=document.getElementById("dueDate").value;
console.log(date1);
//today
if(date1==today)
{
    document.getElementById("dueTime").min = time;

}
