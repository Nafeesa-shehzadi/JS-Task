//Question:1
/***Task:**  
Implement a `Book` constructor function with properties:
- `title`
- `author`
- `pages`
- `read` (boolean)

Add methods on the prototype:
- `toggleReadStatus()`: Toggle the `read` status of the book.
- `getBookInfo()`: Returns a formatted string with book details in this format:  
  `"The book [title] by [author] has [pages] pages. Status: [Read/Not Read]"`.

**Bonus Task:**  
Convert the `Book` constructor to an ES6 `class` with the same functionality.*/

// Constructor function for Book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Method to toggle read status
Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

// Method to get book information
Book.prototype.getBookInfo = function () {
  return `The book "${this.title}" by ${this.author} has ${
    this.pages
  } pages. Status: ${this.read ? "Read" : "Not Read"}.`; // Using literals
};

// Example usage
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, false);
console.log(book1.getBookInfo()); // The book "The Hobbit" by J.R.R. Tolkien has 310 pages. Status: Not Read.
book1.toggleReadStatus();
console.log(book1.getBookInfo());
// ES6 Class for Book
/*class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // Method to toggle read status
  toggleReadStatus() {
    this.read = !this.read;
  }

  // Method to get book information
  getBookInfo() {
    return `The book "${this.title}" by ${this.author} has ${
      this.pages
    } pages. Status: ${this.read ? "Read" : "Not Read"}.`;
  }
}

// Example usage
const book2 = new Book("1984", "George Orwell", 328, true);
console.log(book2.getBookInfo()); // The book "1984" by George Orwell has 328 pages. Status: Read.
book2.toggleReadStatus();
console.log(book2.getBookInfo()); // The book "1984" by George Orwell has 328 pages. Status: Not Read.*/
//Question # 02
// Function to fetch user data using a callback
/*function fetchUserData(callback) {
  setTimeout(() => {
    const userData = { name: "Alice", age: 30, city: "New York" };
    callback(userData);
  }, 2000);
}

// Function to fetch order data using a callback
function fetchOrderData(callback) {
  setTimeout(() => {
    const orderData = { orderId: "5678", amount: 1500, product: "Smartphone" };
    callback(orderData);
  }, 2000);
}

// Main function to call the above functions
function main() {
  fetchUserData((userData) => {
    console.log("User Data:", userData);

    // Fetch order data only after user data is retrieved
    fetchOrderData((orderData) => {
      console.log("Order Data:", orderData);
    });
  });
}

// Call the main function
main();*/
// Function to fetch user data and return a Promise
/*function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userData = { name: "Alice", age: 30, city: "New York" };
      resolve(userData);
    }, 2000);
  });
}

// Function to fetch order data and return a Promise
function fetchOrderData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderData = {
        orderId: "5678",
        amount: 1500,
        product: "Smartphone",
      };
      resolve(orderData);
    }, 2000);
  });
}

// Main function to call the above functions
function main() {
  fetchUserData()
    .then((userData) => {
      console.log("User Data:", userData);// Fetch order data only after user data is retrieved
      return fetchOrderData();
    })
    .then((orderData) => {
      console.log("Order Data:", orderData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the main function
main();*/
//Question # 03
// Function to get user data
/*async function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Bonus task: Randomly throw an error 50% of the time
      if (Math.random() < 0.5) {
        return reject(new Error("Failed to fetch user data"));
      }
      const userData = { name: "John", email: "john@example.com" };
      resolve(userData);
    }, 2000);
  });
}

// Function to get order data
async function getOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orderData = { orderId: "7890", total: 3000 };
      resolve(orderData);
    }, 3000);
  });
}

// Function to process user and order data
async function processData() {
  try {
    // Fetch both user and order data concurrently
    const [user, order] = await Promise.all([getUser(), getOrder()]);

    // Log the data if successful
    console.log("User Data:", user);
    console.log("Order Data:", order);
  } catch (error) {
    // Handle any errors
    console.error("Error:", error.message);
  }
}

// Call the processData function to initiate fetching data
processData();*/
//Question # 04
/*function getUserDetails(user) {
  // Safely access the city using optional chaining
  const city = user.address?.city || "City not available";

  // Determine if the user is an Adult or Minor using a ternary operator
  const ageStatus = user.age >= 18 ? "Adult" : "Minor";

  // Return the formatted output
  return `${ageStatus} from ${city}`;
}

// Example Input 1
const user1 = { name: "Jane", age: 17, address: { city: "Los Angeles" } };
console.log(getUserDetails(user1)); // Output: Minor from Los Angeles

// Example Input 2 (address is missing)
const user2 = { name: "John", age: 20 };
console.log(getUserDetails(user2)); // Output: Adult from City not available

// Example Input 3 (city is missing)
const user3 = { name: "Alice", age: 15, address: {} };
console.log(getUserDetails(user3)); // Output: Minor from City not available

// Example Input 4 (adult without address)
const user4 = { name: "Bob", age: 30 };
console.log(getUserDetails(user4)); // Output: Adult from City not available
*/
//using user input
/*const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get user details
const getUserDetails = (user) => {
  const city = user.address?.city || "City not available";
  const ageStatus = user.age >= 18 ? "Adult" : "Minor";
  return `${ageStatus} from ${city}`;
};

// Prompt user for input
rl.question("Enter your name: ", (name) => {
  rl.question("Enter your age: ", (age) => {
    rl.question(
      "Enter your city (leave blank if not applicable): ",
      (cityInput) => {
        const user = {
          name: name,
          age: parseInt(age, 10),
          address: cityInput ? { city: cityInput } : undefined,
        };

        console.log(getUserDetails(user)); // Call the function and log the output

        // Close the readline interface
        rl.close();
      }
    );
  });
});*/
//Question # 05
/*const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  owner: { name: "John", age: 35 },
};

// Function to log car properties
function logCarProperties(car) {
  // Using Object.keys() to log property names
  console.log("Property Names:");
  Object.keys(car).forEach((key) => {
    console.log(key);
  });

  // Using Object.values() to log property values
  console.log("\nProperty Values:");
  Object.values(car).forEach((value) => {
    console.log(value);
  });

  // Using Object.entries() to log key-value pairs
  console.log("\nKey-Value Pairs:");
  Object.entries(car).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // Bonus Task: Using for...of to iterate over Object.entries()
  console.log("\nUsing for...of to print key-value pairs:");
  for (const [key, value] of Object.entries(car)) {
    console.log(
      `[${key}]: [${typeof value === "object" ? JSON.stringify(value) : value}]`
    );
  }
}

// Call the function
logCarProperties(car);*/
//Question # 06
/* 
const transformData = () => {
  const data = {
    productId: 123,
    productName: "Laptop",
    price: 1000,
    availability: true,
  };

  // Convert the object to a JSON string
  const jsonString = JSON.stringify(data);

  // Convert the JSON string back to an object
  const parsedObject = JSON.parse(jsonString);

  // Calculate the discounted price and add it to the object
  parsedObject.discountedPrice = parsedObject.price * 0.9; // 10% discount

  // Return the final object
  return parsedObject;
};

// Example usage:
const transformedData = transformData();
console.log(transformedData);*/
