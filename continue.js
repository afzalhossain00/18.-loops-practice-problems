// continue statements
var numbers = [45, 87, 89, 56, 32, 51, 25, 48, 124, 95];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        continue;
    }
    console.log(numbers[i]);
}