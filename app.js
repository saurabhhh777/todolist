let task = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
// let li = document.querySelector("li");
btn.addEventListener("click", function(event) {
        // console.log(task.value);
        if(event.target.nodeName == "BUTTON" && !(task.value == "")){
                let item = document.createElement("li");
                item.innerText = task.value;
        
                let delbtn = document.createElement("button");
                delbtn.innerText = "delete";
                delbtn.classList.add("delete"); 
        
                item.appendChild(delbtn);
                ul.appendChild(item);
                task.value = "";
        }



});
ul.addEventListener("click",function(event){
        if(event.target.nodeName == "BUTTON"){
                console.log("button deleted !");
                let par = event.target.parentElement;
                par.remove();
        }
        else{
                console.log("don't delete");
        }
});

// let delbtns = document.querySelectorAll(".delete");
// for(delbtns of delbtns){
//         delbtns.addEventListener("click",function(){
//           console.log("button deleted !"); 
//           let par = this.parentElement;
//           console.log(par);
//           par.remove()     
//         });
// }

