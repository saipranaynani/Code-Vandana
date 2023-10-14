const input = prompt("Enter numbers separated by spaces:");

const inputArray = input.split(' ').map(Number);

if (inputArray.length > 1) {
    inputArray.sort(function(a, b) {
        return b - a; 
    });

    alert("Sorted Array (in descending order): " + inputArray.join(', '));
} else {
    alert("Please enter valid input with multiple numbers separated by spaces.");
}
