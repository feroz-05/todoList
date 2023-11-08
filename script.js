let divdisplay = document.querySelector(".render");
        
const myarray=[
// {name:"wash vessles",
//     date:'31-10-2023'},
// {name:"wash clothes", 
//     date:'31-10-2023'}
];
let para='';


function todoList(){
para="";
let textip = document.querySelector(".ip-data").value;
let dateip = document.querySelector(".date").value;
console.log(textip);
console.log(dateip);
myarray.push({name:textip, date:dateip});
document.querySelector(".ip-data").value ='';
document.querySelector(".date").value ='';
renderTodo();
}

function renderTodo(){
    for(let i = 0; i<myarray.length; i++){
        const dataObject = myarray[i];
        const name = dataObject.name;
        const date = dataObject.date;
        const html = 
            `<div class='container'>
            <p>${name}</p> <p>${date}</P>
            <button class="delete-button" onclick='
            myarray.splice(${i},1);
            para="";
            renderTodo();
            '>
            DELETE
            </button>
            </div>
            `;
        para += html;
        //console.log(html);
    }
    divdisplay.innerHTML=para;
}