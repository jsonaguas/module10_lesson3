//Task 1//

let apps = ["Instagram", "YouTube", "Gmail", "Facebook"];
apps.push("Roblox");
console.log(apps);
apps.pop();
console.log(apps);

//Task 2//
let nums = [21, 38, 19, 59, 45];
nums.sort();
console.log(nums);

//Task 3//
let even_nums = [4, 7, 2, 8, 5];
let double_nums = even_nums.map( num => num * 2);
console.log(double_nums);
let even = even_nums.filter(num => num % 2 == 0);
console.log(even);

let total = even_nums.reduce((acc, num) => acc + num, 0);
console.log(total);
