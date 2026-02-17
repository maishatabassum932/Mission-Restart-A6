1) What is the difference between null and undefined?
Ans: undefined = যখন একটি variable declare করা হয় কিন্তু তাকে কোনো value দেওয়া হয় না। JavaScript নিজে এটিকে undefined হিসেবে নির্ধারণ করে।
    null= যখন programmer নিজে ইচ্ছাকৃতভাবে বোঝায় যে এই variable-এ বর্তমানে কোনো value নেই, এটি একটি intentional value.
2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans: map() এবং forEach() দুটিই array এর উপর loop চালানোর জন্য ব্যবহৃত হয়। map() প্রতিটি element এর উপর কাজ করে এবং একটি নতুন array return করে, যেখানে পরিবর্তিত মানগুলো থাকে। forEach() প্রতিটি element এর উপর কাজ করে কিন্তু কোনো নতুন array/ value return করে না। console.log বা DOM change করার জন্য ব্যবহৃত হয়।
3) What is the difference between == and ===?
Ans: == এবং === দুটিই JavaScript-এ দুইটি value check করার জন্য ব্যবহার করা হয়। == শুধুমাত্র value তুলনা করে। যদি দুইটি value-এর data type আলাদা হয়, তাহলে JavaScript আগে type conversion করে নেয়, তারপর value তুলনা করে। === value এবং data type—দুটিই একসাথে তুলনা করে। এখানে কোনো type conversion হয় না।
4) What is the significance of async/await in fetching API data?
Ans:API থেকে data fetch করার সময় Promise ব্যবহার করতে হয়। async/await ব্যবহার করলে সেই Promise-based code কে synchronous-এর মতো দেখায়, ফলে কোড পড়া ও বোঝা সহজ হয়। এটি কোডকে আরও readable করে এবং error handling-ও সহজ করে তোলে।
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans: Global Scope: যদি কোনো variable function বা block-এর বাইরে declare করা হয়, তাহলে সেটি global scope-এ পড়ে। এটি কোডের যেকোনো জায়গা থেকে access করা যায়।
Function Scope: যদি কোনো variable function-এর ভিতরে declare করা হয়, তাহলে সেটি শুধু সেই function-এর ভিতরেই ব্যবহার করা যায়। function-এর বাইরে থেকে এটি access করা যায় না।
Block Scope:
let এবং const দিয়ে { } (block)-এর ভিতরে variable declare করলে সেটি শুধু সেই block-এর মধ্যেই ব্যবহার করা যায়। block-এর বাইরে থেকে এটি access করা যায় না।
