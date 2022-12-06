function reverseString_1(str) {
    let newString = "";
    for(let i=str.length;i>=0;i--){
     //  console.log(str.slice(i,i+1));
      newString+=str.slice(i,i+1);
      
    }
     return newString;
     // return str;
   }
   
   console.log(reverseString_1("hello"));
   //method#2
   function reverseString_2(str) {
    let reversed = str.split("").reverse().join("")
    // let rever = reversed.reverse();
    // let joined = rever.join("")
    
    return reversed;
    }
    
    console.log(reverseString_2("hello"));