var arraylist=[];


function addtolist(){    

    arraylist.push(document.getElementById('addtolist').value);
    console.log(arraylist);

    var title   =document.getElementById('addtolist').value;
    var node = document.createElement('div');        
    node.innerHTML = '<div class="w-50"><input type="checkbox" onclick="strikeoff('+arraylist.length+')" id="check' + arraylist.length + '" name="check' + arraylist.length + '"><label class="m-1 text-white h5" for="check' +arraylist.length + '">'+ title   +'</label><button class="btn-xs text-white bg-warning rounded ml-5 pull-right" type="button"><small>Remove</button></small></div>';
    console.log(node.innerHTML);
    document.getElementById('addtolistsection').appendChild(node);    
}

function strikeoff(itemindex)
{
    var text ="check"+itemindex;
    
   console.log(document.getElementById(text).value);
}
