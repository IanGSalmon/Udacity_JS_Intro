/*
 * Programming Quiz: JuliaJames (4-1)
 * From 1-20, if divisible by 3, Julia, if divisible by 5, James, both JuliaJames, else x
 */

var x = 1;

while (x < 21) {
    answer = (!(x%3) && !(x%5)) ? 'JuliaJames' : (!(x%3)) ? 'Julia' : (!(x%5)) ? 'James' : x;
    console.log(answer);
    x += 1;
}