function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var appleCount = 0;  
    var orangeCount = 0; 

    for (var i = 0; i < apples.length; i++) { 
        var applePosition = a + apples[i]; 
        if (applePosition >= s && applePosition <= t) { 
            appleCount++; 
        }
    }

    for (var i = 0; i < oranges.length; i++) { 
        var orangePosition = b + oranges[i]; 
        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    }

    return appleCount, orangeCount;
}

var result = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);  
console.log(result)