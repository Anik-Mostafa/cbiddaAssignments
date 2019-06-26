var k=123;
var l=23;
console.log("The value is %s, The 2nd value is %d",k,l);
console.log(`The adition is ${k+l}`)
console.log(process.argv);
var x=0;
for(var i=2;i<process.argv.length; i++){
  x=x+parseInt(process.argv[i]);
}
console.log("The Result is "+x);

//console.log(student);

var course1={
  title:"CSE 101",
  credit:3,
  gpa:4
}
var course2={
  title:"CSE 104",
  credit:3,
  gpa:3.4
}
var course3={
  title:"ENV 101",
  credit:3,
  gpa:[3,2,1]
}
var student={
  name:"Anik",
  age:5,
  courseList:[course1,course2,course3]
}
var gpa=0;
var credit=0;
for(var i=0;i<student.courseList.length;i++){
  gpa=gpa+student.courseList[i].gpa;
  credit=credit+student.courseList[i].credit;

}
gpa=gpa*3;
finalGpa=gpa/credit;

console.log(finalGpa);
for(let i=0;i<7;i++){

}
console.log(i);
const student3={
  name:"Anik",
  age:5,
  courseList:[course1,course2,course3]
}
student3.age=10;
console.log(student3.age);
// student3=5;
// console.log(student3);
