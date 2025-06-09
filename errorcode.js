// let foo = "bad";  // ❌ single quotes → double quotes (auto-fixable)
// console.log(foo); // ❌ space before ) (auto-fixable)
// let a = 5;
// function example() {  // ❌ spacing issues (auto-fixable)
//   let x=5;  // ❌ spacing (auto-fixable)
//   if(x == 5){  // ❌ use === instead of ==
//     console.log("Equal"); // ❌ missing semicolon (auto-fixable)
//   }
// }

// eval("2 + 2"); // ❌ using eval (MANUAL FIX)

// alert("Hey!"); // ❌ using alert() (MANUAL FIX)

const name="yashika";
const a = 10;
let result;

function greet(name)
{
  if(name ==  "yashika") {
    print("Welcome!");
  }else{
    console.log("Hello");
  }
  return;
}
greet();
eval("2 + 2");
alert("This is a test");

const obj={ key1: "value1", key2: "value2" };
const arr = [1, 2, 3];

function complex(a, b, c, d, k) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          return true;
        }
      }
    }
  }
}