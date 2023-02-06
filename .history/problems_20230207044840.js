/*Problem 1: Let’s play a mind game

একটা function called mindGame যা ইনপুট হিসেবে একটা positive number নিবে।
সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে

Sample Input & Output
Input: 5
Output: 7.5 

*/
function mindGame(num){
    if(typeof num == "number" && num > 0){
            //let mul= num*3;
            //let add = mul+10;
           // let div = add /2;
            //let sub = div -5;
           let result = parseFloat((((num*3)+10)/2)-5);
            return result ;
    }
    else{
            console.log("please enter a positive number")
    } 
}
const a = mindGame(-8);
console.log(a);



/*
Problem 2: Finding even or odd

একটা function called evenOdd() ইনপুট হিসেবে একটা string নিবে। 
String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট হবে‘even’ অথবা ‘odd’ ।

Sample Input & Output:
Input: ‘Phero’
Output: odd
*/ 


/*
Problem 3: Is Less or Greater than seven

একটা function called “isLGSeven()” ইনপুট হিসেবে একটা number নিবে।  
ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন return করতে হবে সেই বিয়োগফল। নাহলে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6
Output: -1
*/ 


/*
Problem 4: Finding Bad data

একটা function called findingBadData() ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে।number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

Sample Input & Output:-

Input: [ 1,2,5 ]
Output: 0
*/


/*
Problem 5: Convert your gems into diamond

একটা function called gemsToDiamond() ইনপুট হিসেবে তিনটা number ( ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
[ gems এর ক্ষমতা একটা gems কে কয়টা diamond এ convert করা যাবে ]

সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। 

total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে ta return else return total diamond 

Sample Input & Output:-

Input: 1, 1, 1
Output:96
*/ 
































/**/ 

