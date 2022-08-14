// break for loop
for (var i = 1; i <= 20; i++) {
    if (i > 10) {
        break;
    }
    console.log(i);
}

var roastGiven = 0;
while (roastGiven < 10) {
    console.log(roastGiven + '.roast den');
    roastGiven++;
    if (roastGiven > 5) {
        break;
    }
}


var items = ['bottle', 'mouse', 'keyboard', 'pen', 'notebook'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'pen') {
        break;
    }
    console.log(item);
}