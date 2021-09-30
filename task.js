let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
let values = numbers ;
console.log("Original numbers list: ", numbers)
// add -1
for(let i = 0 ; i < values.length-1 ; i++)
{
    //add - i 
    for(let j = 0 ; j < values.length - 1 -i ; j++)
    {
        if(values[j] > values[j + 1])
        {
        // replace let with const 
            let temp = values[j];
            values[j] = values[j + 1]
            values[j + 1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", values)
let des_values = numbers ;

for(let i = 0 ; i < des_values.length-1 ; i++)
{
    for(let j = 0 ; j < des_values.length - 1-i ; j++)
    {
        if(des_values[j] < des_values[j + 1])
        {
            let temp = des_values[j];
            des_values[j] = des_values[j + 1]
            des_values[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", des_values)

// Display the file data
const fs = require('fs');
const data = fs.readFileSync('./data.txt',
            {encoding:'utf8', flag:'r'});
            var newArray = data.split(',').map(function(item) {
                return parseInt(item, 10);
            });
 
console.log(newArray);
values=newArray;
      for(let i = 0 ; i < values.length-1 ; i++)
      {
    //add - i 
    for(let j = 0 ; j < values.length - 1 -i ; j++)
    {
        if(values[j] > values[j + 1])
        {
        // replace let with const 
            let temp = values[j];
            values[j] = values[j + 1]
            values[j + 1] = temp;
        }
    }
}
console.log(values);
fs.writeFileSync("output.txt", values.toString());
console.log("File written successfully\n");




