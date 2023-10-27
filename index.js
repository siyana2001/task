var fun1 = async()=>{
   
    var view=""
    var fetchdata = await fetch("https://fakestoreapi.com/products");
    var output = await fetchdata.json()
    output.map((value,index)=>{
        view += "<h1>" + value.id + value.title +'</h1><img src = "'+value.image+'">'
    })
    document.getElementById("outs").innerHTML = view;
    
}

