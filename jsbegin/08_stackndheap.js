//* In primitive datatype the data is stored in the form of stack
//* here u get the copy of the variable

let myname = "yash tiwari"
let mynickname = myname // callling the variable
mynickname = "yashu"
console.log(mynickname);
console.log(myname);

// so here basicaly: let mynickname = myname
//                  mynickname = "yashu"  [so here we change the value]
//                  myname = "yashu"      [so logically the value of myname
//                                         changes but when it is printed on the 
//                                        output its shows its original value]
//  THATS mean here we cannot change the original values of variables

//* In non-primitive dtatatype the data is stored in the heap
//* here u get original copy

let user1 = {
    email: "abc@gmail.com",
    upi: "qwe@34"

}

let user2 = user1  // calling the variable
user2.email = "uio@gmail.com"

console.log(user1);
console.log(user2);

// here while executing we changed original value








