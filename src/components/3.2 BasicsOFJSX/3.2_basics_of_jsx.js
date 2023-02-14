// Create some JSX from the following variables:
// 1. const data = ["hello", "world"];


// the output should be: “Hello World” notice the spacing!
// 2. const number1 = 5;
// const number2 =6;
// The output should be: 5 + 6 = 11
// 3. const string = "I love React!"
// The output should be: The string’s length is <display
// the length of the string>
const Data = ["hello", "world"];
 const Number1 = 5;
 const Number2 =6;
 const string = "I love React!"

 function Basics(){
    return <div className="style">
    <div>{ Data[0]} { Data[1]}</div>
<div> {Number1} + {Number2}</div>
<div> {string}</div>


</div>
 }
 export default Basics