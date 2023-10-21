/*
    Sieve of Eratosthenes - The sieve of Eratosthenes is one of the most efficient ways
    to find all of the smaller primes (below 10 million or so).
*/

// TODO: Adjust this script so it can work with the sieve.html file.

var sieve = function () {
  "use strict";

  var n = parseInt(document.getElementById('num').value);
    var array = [], 
    primes = [], 
    i, 
    j;
    for (i = 2; i <= n; i++) {
        if (array.indexOf(i) == -1) {
            primes.push(i);
            for (j = i*i; j <= n; j+=i) {
                array.push(j)
            }
        }
    }
    var result = primes.join(', ')
    document.getElementById('primes').innerHTML = result;
  };