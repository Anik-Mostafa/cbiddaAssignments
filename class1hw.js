var movieList = [
    { title: "star wars episode 7", year: "1977", length: 125, rating: "8.7", genre: "sci-fi" },
    { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
    { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
    { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
    { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
    {title: "The Matrix Reloaded", year: "1003", length: 138, rating: "7.2",genre: "sci-fi"}
];
//1. console.log(movieList[5].year);



function findByTitle(title){
  let arr=[];
  title=title.toLowerCase();
  for(i=0;i<movieList.length;i++){
    if(movieList[i].title.toLowerCase().search(title)>-1){//Used Google for .search
      arr[i]=movieList[i];
    }
  }
  return arr;
}
//2. console.log(findByTitle('matrix'));
function findByGenre(title){
  let arr=[];
  title=title.toLowerCase();
  for(i=0;i<movieList.length;i++){
    if(movieList[i].genre.toLowerCase().search(title)>-1){//Used Google for .search
      arr[i]=movieList[i];
    }
  }
  return arr;
}

//3. console.log(findByGenre('historical'));
function alter(){
  movieList.sort(function(a,b){
    if(a.year>b.year)
    return -1;
    else if(a.year<b.year)
    return 1;

    return 0;

  })

  console.log(movieList);

}
//alter();
function  listAllMoviesbyTitleAndYear(){
  let titleAndYear=[];
  movieList.sort(function(a,b){
    if(a.year>b.year)
    return -1;
    else if(a.year<b.year)
    return 1;
    return 0;
  })
  for(i=0;i<movieList.length;i++){
    titleAndYear[i]={movieList[i].title, movieList[i].year;
  }
  return titleAndYear;
}






function findTear(lowerLimit,upperLimit){
let findYear=[];
movieList.sort(function(a,b){
  if(a.year>b.year)
  return -1;
  else if(a.year<b.year)
  return 1;
  return 0;
})
for(i=0;i<movieList.length;i++){
  findYear[i]={movieList[i].title, movieList[i].year;
}
return findYear;

}

findTear(1999,2005);
//4. console.log(listAllMoviesbyTitleAndYear());

function findByYear(lowerLimit,upperLimit){



let arr=[];
let byYear=[];
for(var i=0;i<movieList.length;i++){
  arr[i]=[movieList[i].year, i];
}
arr.sort();
let j=0;
let k=0;

while(j<movieList.length)
{
  if(arr[j][0]>lowerLimit && arr[j][0]<upperLimit){
    byYear[k]=movieList[arr[j][1]].title;

    k++;
  }
  j++;
}

return byYear;
}
//5. console.log(findByYear(1900,2001));
function findByRating(lowerLimit,upperLimit)
{
  let arr=[];
  let byStar=[];
  for(var i=0;i<movieList.length;i++){
    arr[i]=[movieList[i].rating, i];
  }
  arr.sort();
  let j=0;
  let k=0;

  while(j<movieList.length)
  {
    if(arr[j][0]>lowerLimit && arr[j][0]<upperLimit){
      byStar[k]=movieList[arr[j][1]].title;

      k++;
    }
    j++;
  }

  return byStar;

}


function findByRating2(lowerLimit,upperLimit){

let findRating=[];
movieList.sort(function(a,b){
  if(a.rating>b.rating)
  return -1;
  else if(a.rating<b.rating)
  return 1;
  return 0;
})
for(i=0;i<movieList.length;i++){
  findRating[i]={movieList[i].title, movieList[i].rating;
}
return findRating;
}
//6. console.log(findByRating(8,9));


var total=0;
var count=0;
var average=0;
for(let i=0;i<movieList.length;i++){
  if(movieList[i].genre=='sci-fi'){

    total=total+parseFloat(movieList[i].rating);
    count++;
  }
}
agerage=total/count
agerage=Math.round(agerage * 100) / 100;
//8.  console.log(agerage);


// var unSorted=[];
// for(let i=0;i<movieList.length;i++){
//   if(movieList[i].genre=='sci-fi' && movieList[i].year<2000 && movieList[i].rating>8){
//
//
//
//       let j=0;
//       let k=0;
//       let unSorted=[];
//
//
//
//       while(j<movieList.length)
//       {
//         if(movieList[j].genre=='sci-fi' && movieList[j].year<2000 && movieList[j].rating>8){
//           unSorted[k]=[movieList[].title,j];
//
//           k++;
//         }
//         j++;
//       }
