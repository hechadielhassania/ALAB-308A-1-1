# Prime Number Renderer

This project demonstrates how to efficiently render prime numbers up to a given limit in a web browser environment using JavaScript. It employs techniques such as deferred execution and asynchronous rendering to enhance user experience.

## Overview

In this project, we use JavaScript to calculate and render prime numbers up to a specified limit (`n`) in a web browser. The traditional method of calculating prime numbers involves iterating through each number and checking its divisibility by all integers up to its square root. This can be computationally expensive, especially for large values of `n`.

To improve performance and provide a better user experience, we employ the following techniques:

1. **Deferred Execution**: We use `setTimeout` with a delay of 0 milliseconds to place tasks into the event queue. This allows the browser to render each prime number before moving on to the next calculation.

2. **Asynchronous Rendering**: Each prime number is rendered asynchronously, allowing the browser time to update the DOM between iterations. This ensures that the user sees the numbers being displayed in real-time.

3. **Optimized Prime Number Calculation**: We optimize the prime number generation algorithm by only checking divisibility up to the square root of the current number. This reduces the number of iterations required and improves performance.

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.

2. Open the `index.html` file in a web browser.

3. The page will display a list of prime numbers up to a specified limit (`n`). By default, `n` is set to 10,000.

4. You can modify the value of `n` in the `renderPrimes` function to generate prime numbers up to a different limit.

5. The prime numbers will be rendered asynchronously, and an alert will appear once all numbers have been displayed.

## Contributors

- El Hassania Hechadi - hechadihassia@gmail.com


