/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/
//function first(names, cb) {
//    cb(names[0]);
//}



//Code Here for first


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//first(names, function(firstName){ // cb has a parameter called firstName. Hence, i need to pass an argument to the function via the parameter to let that function do what i want.
//    // result - i need first firstName in the array
//    //how to get first item in an array - index 0
//    //how to make that a arrgument that need to passed into a parameter - simple like any other function. functionName(arrgument);
//    console.log('The first name in names is ' + firstName)
//});
//
//
//
///* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//
////cb has a parameter. Need to send a argument to that.
////result - looking for last firstName in the array
////last index in an array = arry.lenght -1 --> pass this into cb
////last item in an array = arry[arry.length - 1];
//function last(nameList, cb) {
//    cb(names[nameList.length - 1]);
//}
////Code Here for last
//
//last(names, function(lastName){ //invoking a function called last with two arrguments - one called names (its a varaible) and two its a function
//    console.log('The last name in names is ' + lastName);
//});
/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

//function multiply(num1, num2, cb) {
//    cb(num1*num2);
//}
//
//
//
//
////Code Here for multiply
//
//multiply(4, 3, function(answer){
//    console.log('The answer is ' + answer); //should console.log 12
//})
//
//
//
//
//
///* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//function contains(myArr, firstName, cb) {
//    for(var i=0; i<names.length; i++) {
//        if(names[i] === firstName) {
//            cb(true);
//        } else {
//            cb(false);
//        }
//    }
//}
////Code Here for contains
//
//contains(names, 'Colt', function(result){
//    if(result === true){
//        console.log('Colt is in the array');
//    } else {
//        console.log('Colt is not in the array');
//    }
//});
//
//
//
//
//
///* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//function uniq(myArr,cb) {
//    for(var i=0; i<myArr.length;i++) {
//        for(var j = i+1; j<myArr.length;j++) {
//            if(myArr[i] === myArr[j]) {
//                myArr.splice(i,1);
//                j--;
//
//            }
//
//        }
//    }
//    cb(myArr);
//
//}
//
//
//
////Code Here for uniq
//
//uniq(names, function(uniqArr){
//    console.log('The new names array with all the duplicate items removed is ', uniqArr);
//}); // i need a new array with unique names. hence the function uniq should give array





///* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//function each(nameList,cb) {
//    for(var i = 0; i < nameList.length; i++) {
//        cb(i,nameList[i]); //
//    }
//}
//
//
//
////Code Here for each
//
//each(names, function(indice, item){
//    console.log('The item in the ' + indice + ' position is ' + item)
//});
//need index i; and item array[i]





/////* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
//function getUserById(nameList, id, cb) {
//    for (var i = 0; i<nameList.length; i++) {
//        if(nameList[i].id === id) {
//            cb(nameList[i]);
//        }
//    }
//}
//
//
//
//
////code here for getUserById
//
//var users = [
//    {
//        id: '12d',
//        email: 'tyler@gmail.com',
//        name: 'Tyler',
//        address: '167 East 500 North'
//    },
//    {
//        id: '15a',
//        email: 'cahlan@gmail.com',
//        name: 'Cahlan',
//        address: '135 East 320 North'
//    },
//    {
//        id: '16t',
//        email: 'ryan@gmail.com',
//        name: 'Ryan',
//        address: '192 East 32 North'
//    },
//];
//
//getUserById(users, '16t', function(user){
//    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
//});
