// setInterval(fn, ms);

// var idx = 0;

// var inter = setInterval(function() {
//     console.log(idx);
//     idx++;
//     if(idx == 10) {
//     clearInterval(inter);
//     }
// }, 1000);

function countForm(a, b) {
    return new Promise(function(resolve, reject) {
        var idx = a;
        var inter = setInterval(function() {
            console.log(idx);
            idx++;
            if(idx == b + 1) {
                clearInterval(inter);
            }
        }, 1000);
    });
}

countForm(1, 10).then(function() {
    console.log('Done');
})