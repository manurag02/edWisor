let bubbleSort = (a) => {
  let swapp;
  let n=a.length - 1;
  let x=a;
  do {
   swapp = false;
   for (let i=0; i<n; i++)
   {  console.log(x[i])
      if (x[i] < x[i+1])
     {
       let temp = x[i];
       x[i] = x[i+1]
       x[i+1] = temp
       swapp = true
       console.log(x[i])
      }
    }
    n--;
} while (swapp);
return x;
}
 let a =[56,78,90,34,23];
 bubbleSort(a);
 for (x of a)
 console.log(`after sort`+x)