# JS-Task
## Tasks Overview

This project comprises six tasks, each showcasing distinct JavaScript concepts and techniques:

### Task 1: Book Details

- **Purpose:** Implement a `Book` constructor function, later evolving it into an ES6 `class`.
- **Functionality:**
  - Properties: `title`, `author`, `pages`, and `read` (boolean).
  - Methods:
    - `toggleReadStatus()`: Modifies the `read` status.
    - `getBookInfo()`: Returns a formatted string detailing the book's information.

### Task 2: Data Fetching with Callbacks and Promises

- **Objective:** Retrieve user and order data using callback functions, subsequently transitioning to Promises.
- **Functionality:**
  - Two functions (`fetchUserData` and `fetchOrderData`) simulate data retrieval with a delay.
  - A main function that sequentially fetches user data followed by order data.

### Task 3: Asynchronous Data Fetching with Async/Await

**Purpose:** Employ async/await to concurrently fetch user and order data, handling potential errors.
- **Functionality:**
  - Two functions (`getUser` and `getOrder`) simulate data fetching with potential errors.
  - A main function that processes both data requests using `Promise.all`.

### Task 4: User Details Processing 

- **Objective:** Safely extract user information using optional chaining and ternary operators.
- **Functionality:**
  - A function (`getUserDetails`) that takes a user object and returns a formatted string indicating the user's age status and city.
  - Later getting user input.

### Task 5: Logging Object Properties

- **Purpose:** Utilize JavaScript object methods to log properties of a car object.
- **Functionality:**
  - A function (`logCarProperties`) that logs property names, values, and key-value pairs of a car object using `Object.keys`, `Object.values`, and `Object.entries`.
  - Demonstrates iterating over entries using a `for...of` loop.

### Task 6: Data Transformation with JSON

- **Objective:** Transform a product object by converting it to JSON and back, calculating a discounted price.
- **Functionality:**
  - A function (`transformData`) that takes a product object, converts it to a JSON string, parses it back, and adds a discounted price property.

## Features

- Object-oriented programming with constructors and ES6 classes.
- Callback and Promise-based asynchronous operations.
- Asynchronous data fetching using async/await.
- Safe property access using optional chaining.
- Object manipulation using JavaScript built-in methods.
