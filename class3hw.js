let x=[];
for(let i=1;i<1000;i++){
  x[i]=0;
}
for(let i=2;i<100;i++){
  for(let j=2;j<100;j++){
    x[i*j]=1;
  }
}
//console.log(x[5]);
