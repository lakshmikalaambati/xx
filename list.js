//var arraylist=[];
var count=1;

function addtolist(){    

    //arraylist.push(document.getElementById('addtolist').value);
    //console.log(arraylist);

    var title   =document.getElementById('addtolist').value;
    var parentcontainer=document.getElementById('addtolistsection');
        
            var div = document.createElement('div'); 
            div.className="w-75";
            div.id="parent"+count;
      
            var checkbox = document.createElement('input'); 
              
            checkbox.type="checkbox"; 
            checkbox.id="checkbox"+count;
            checkbox.onclick=function () {strikeoff(this) };
            
            var label = document.createElement('label'); 
             
            label.htmlFor = "checkbox"+count; 
            label.className ="m-1 text-white h5"; 
            label.id="label"+count;
            label.appendChild(document.createTextNode(title)); 
              
             var button= document.createElement('button'); 
             button.className="btn-xs text-white bg-warning rounded ml-5 pull-right";
             button.type="button";
             button.onclick=function () {removeitem(this,) };
             button.appendChild(document.createTextNode("Remove")); 
    
            var divelement =parentcontainer.appendChild(div);
            divelement.appendChild(checkbox); 
            divelement.appendChild(label); 
            divelement.appendChild(button);
     //concole.log(parentcontainer.innerHTML);
    count=count+1;
    document.getElementById("addtolist").value = "";
}

function strikeoff(idname)
{
    
    var text=idname.id;
    
    var text1=document.getElementById(text).nextSibling.innerHTML;
        
    if(idname.checked ==true){
    document.getElementById(text).nextSibling.innerHTML = "<del>"+text1+"</del>";
    }
    else if(idname.checked ==false){
        document.getElementById(text).nextSibling.innerHTML = text1.replace("<del>","");
    }
   
   alert(text1);
}

function removeitem(removeindex)
{   

   var removeitem=removeindex.parentElement;
    removeitem.remove();
   

}
