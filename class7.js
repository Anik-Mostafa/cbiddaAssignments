var arr=[1,2,3];

function pushpush(a,v){
  var arrC=[];
  for(let i=0;i<a.length;i++){
    arrC[i]=a[i];
  }

  for(let i=0;i<a.length;i++){
    a[i+1]=arrC[i];
  }
  a[0]=v;
  return a;

}

pushpush(arr,5);
