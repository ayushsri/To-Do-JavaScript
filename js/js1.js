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

const createList=(names)=>{
    const container=document.getElementsByClassName("hmm").item(0);
    //const list =document.createElement("ul");
    let listItem;
    let list;
    names.forEach(name=>{
        listItem=document.createElement('li');
        listItem.id='item-${name.title}';
        listItem.setAttribute('data-index',name.title)
        listItem.textContent=name.title;
        listItem.classList.add("list-Item");

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        listItem.appendChild(span);

       container.appendChild(listItem);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

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
    }
}