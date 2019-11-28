var arraylist=[];
i=1;
function add(){    
  arraylist.push(document.getElementById('addtolist').value);
  console.log(arraylist);

        var title   =document.getElementById('addtolist').value;
        var node = document.createElement('div');        
        node.innerHTML = '<input type="checkbox" id="check' + i + '" name="check' + i + '"><label for="check' +i + '">'+ title +'</label>';       
        document.getElementById('container').appendChild(node);    
    
}
