var movieList = [
    { title: "star wars episode 7", year: "1977", length: 125, rating: "8.7", genre: "sci-fi" },//0
    { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },//1
    { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },//2
    { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },//3
    { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },//4
    {title: "The Matrix Reloaded", year: "1003", length: 138, rating: "7.2",genre: "sci-fi"}//5
];


movieList.sort(function(a,b){
  if(a.year<b.year)
    return -1;
  else if(a.year>b.year)
    return 1;
  return 0;
})


//console.log(movieList);


movieList.sort(function(a,b){
  if(a.rating<b.rating)
    return -1;
  else if(a.rating>b.rating)
    return 1;
  return 0;
})

//console.log(movieList[2].year);


// var student=["Anik","Asif","Akib","AsifSaif","Ovi"];
// for(let i=0;i<student.length;i++){
//   //console.log(student[i].search("Saif"));
// }
function findByTitle(title){
    // title=title.toLowerCase();
for(var i=0 ;i<movieList.length;i++){
    // movieList[i].title=movieList.title.toLowerCase();

    if(movieList[i].title.search(title)>-1){
        console.log(movieList[i]);
    }
}

}
findByTitle("Matrix");
