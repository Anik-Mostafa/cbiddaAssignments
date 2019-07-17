var calculator = require("./../class5.js");

test("The function add two number",function(){
  expect( calculator.addition(5, 7)).toBe(12);
  expect( calculator.addition(-50, 70)).toBe(20);
    expect( calculator.addition(-50.6667, 70.6665)).toBe(19.9998);

expect(calculator.addition("50", "70")).toBe("5070");

});
test("The function should subtract two number",function(){
  expect( calculator.subtraction(5, 7)).toBe(-2);
  expect( calculator.subtraction(-50, 70)).toBe(-120);



});
