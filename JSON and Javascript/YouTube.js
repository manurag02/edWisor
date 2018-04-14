let youTube = [ 
{"name":"anurag" ,"addr":"mumbai"} , {"name":"parag" ,"addr":"mumbai"}
  
  ]


//for (i in youTube.items)
//alert (youTube.items[i].etag)

for (x of youTube)
  {console.log(x.name)
   if (x.name == "anurag")
    console.log(x.addr)
  }
