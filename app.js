
const outputElement = document.getElementById('output');

    function isPrime(num) {
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }

    function renderPrimes(n, current = 1) {
      if (current > n) {
        alert("Calculation is finished!");
        return;
      }

      if (isPrime(current)) {
        outputElement.innerHTML += current + ", ";
        setTimeout(() => renderPrimes(n, current + 1), 0);
      } else {
        setTimeout(() => renderPrimes(n, current + 1), 0);
      }
    }

    renderPrimes(10000);
    