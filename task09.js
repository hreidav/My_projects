// Task09 - create 2 functions: task09a and task09b
// First function should pass parameter and divide it on 2
// result function should return.
// Second function should call first function and 
// return it result concat with string "result - "
//
// For example: you get in second function a number 6
// Result of call both function shoul be like "result - 3"

// TODO: Define your function here
function task09a (y) {
	return y/2;
}

function task09b () {
	return 'rezult - ' + task09a(y);
}
y=prompt('your digit=');
alert (task09b ());
