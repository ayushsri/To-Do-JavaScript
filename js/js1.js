//Getting the JSON data
const xhr=new XMLHttpRequest();
xhr.open('GET','Data/todo.json');
xhr.onload=(response)=>{
    if(response.currentTarget.status===200)
    {
        const names=JSON.parse(response.currentTarget.responseText);
        createList(names);
    }

}
xhr.send();

const createList=(names)=> {
    const container = document.getElementsByClassName("hmm").item(0);
    //const list =document.createElement("ul");
    let listItem;
    let list3;

    names.forEach(name => {
        let stat="notComplete";
        listItem = document.createElement('li');
        listItem.id = 'item-${name.title}';
        listItem.setAttribute('data-index', name.title)
        listItem.textContent = name.title;
        listItem.classList.add("list-Item");
        let button1 = document.createElement("button1");
        let button2 = document.createElement("button2");
        button1.innerHTML = "view";
        button2.innerHTML = "complete";
        button2.className = "button2";
        button1.className = "button1";
        list3=document.createElement("div");
        list3.id = name.title;
        list3.textContent = name.description+stat;
        list3.testContent+=name.dueDate;
        list3.testContent+=name.dueTime;
        list3.style.display="none";
        listItem.appendChild(button1);
        listItem.appendChild(button2);


        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        listItem.appendChild(span);
        button2.addEventListener("click", function () {

            this.parentElement.style.backgroundColor = "yellow";
            stat="complete";
            list3.textContent = name.description+stat;

        })


        button1.addEventListener("click", function () {
          /*  this.parentElement.textContent= name.title+"\r\n"+name.dueDate;
          listItem.appendChild(button2);
            listItem.appendChild(span);*/
            var div = document.getElementById(name.title);
            if (div.style.display !== "none") {
                div.style.display = "none";
            }
            else {
                div.style.display = "block";
            }

        })

        container.appendChild(listItem);
        container.appendChild(list3);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

       // button1.addEventListener("click", function () {



                //list2.setAttribute('data-index2', "ayush");
                for (i = 0; i < button1.length; i++) {

                    button1[i].onclick = function () {
                        di = document.getElementsByClassName("Details").item(0);
                        let list2;
                            list2 = document.createElement('h1');
                            list2.id = 'item-${hey}';
                            list2.setAttribute('data-index2', name.title);
                            list2.textContent = name.title;

                        di.appendChild(list2);
                    }
                }
          //  }, false);





    })

}

var myNodelist = document.getElementsByClassName("list-Item");
var i;
console.log(myNodelist);
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        //ev.target.classList.toggle('checked');
        const x = document.getElementById("myInput");
        if (x.id === "myInput") {
            x.innerHTML = "Swapped text!";
        } else {
            x.innerHTML = "Hello";
        }
    }

}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        let button1 = document.createElement("button1");
        let button2 = document.createElement("button2");
        button1.innerHTML = "view";
        button2.innerHTML = "complete";
        button2.className = "button2";
        button1.className = "button1";

        button2.addEventListener("click", function () {

            this.parentElement.style.backgroundColor = "yellow";

        })


        button1.addEventListener("click", function () {
            this.parentElement.textContent= name.title+"\r\n"+name.dueDate;
            li.appendChild(button2);
            li.appendChild(span);

        })

        li.appendChild(button1);
        li.appendChild(button2);

    }
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("dueDate").setAttribute("min", today);

var today1 = new Date();
var time = today1.getHours() + ":" + today1.getMinutes() + ":" + today1.getSeconds();

var date1=document.getElementById("dueDate").value;
console.log(date1);

if(date1==today)
{
    document.getElementById("dueTime").min = time;

}
