/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    var solution = '';
    for (i=1; i <= num; i+=1) {
        solution += 'ha';
    }
    return solution + '!';
}

console.log(laugh(10));
