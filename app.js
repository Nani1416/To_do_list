let add=document.querySelector(".empty-item");
let items=document.querySelector(".items");
let inputBox=document.querySelector(".searchbox");
let submit=document.querySelector(".submit");
let nulls=document.querySelector(".null");
let icons=document.querySelector(".icons");
let contents=document.querySelector(".content");
submit.addEventListener("click",()=>{
    let content=inputBox.value;
    if(content===""){
        nulls.style.display='flex';
    }
    else{
        nulls.style.display='none';
        let newDiv=document.createElement('div');
        let childDiv1=document.createElement('div');
        let childDiv2=document.createElement('div');
        let childDiv3=document.createElement('p');
        childDiv3.innerHTML=content;
        childDiv2.innerHTML='<i class="fa-solid fa-trash" id="delete" style="color: #ea2806;"></i>';
        newDiv.appendChild(childDiv1);
        newDiv.appendChild(childDiv2);
        childDiv1.appendChild(childDiv3);
        contents.appendChild(newDiv);
        newDiv.classList.add("empty-item");
        childDiv1.classList.add("items");
        childDiv2.classList.add("icons");
        childDiv3.classList.add("item-name");
        newDiv.style.display='flex';
        inputBox.value="";
        let del=document.querySelectorAll(".fa-trash");
        for (let i = 0; i < del.length; i++) {
            del[i].addEventListener("click", () => {
              let parent = del[i].parentNode.parentNode;
              contents.removeChild(parent);
            });
          }
    }
    
});

