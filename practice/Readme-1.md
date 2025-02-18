# Programming Logic Exercises

Here is a collection of programming exercises that focus on building logic and solving real-world problems.

---

## 1. Generate Query String from Object

### Description:
Create a function `buildQueryString` that accepts an object of key-value pairs and converts it into a query string for a URL.

### Example:
```javascript
buildQueryString({ search: "programming", page: 2, sort: "asc" });
// Output: "?search=programming&page=2&sort=asc"
```

---

## Separate File Suggestion
Consider saving this exercise as a separate `.md` file for better organization and easier reference.

---

## 2. Parse a Query String to Object

### Description:
Write a function `parseQueryString` that takes a query string and converts it into an object.

### Example:
```javascript
parseQueryString("?search=programming&page=2&sort=asc");
// Output: { search: "programming", page: 2, sort: "asc" }
```

---

## 3. URL Builder

### Description:
Given a base URL and an object of paths and parameters, create a function `buildURL`.

### Example:
```javascript
buildURL("https://example.com", {
    path: "products",
    params: { category: "books", sort: "price" }
});
// Output: "https://example.com/products?category=books&sort=price"
```

---

## 4. Dynamic Template Replacer

### Description:
Create a function `replacePlaceholders` that replaces placeholders in a template string with provided values.

### Example:
```javascript
replacePlaceholders("Hello, {name}! You have {count} messages.", {
    name: "Alice",
    count: 5
});
// Output: "Hello, Alice! You have 5 messages."
```

---

## 5. Flatten Nested Object

### Description:
Write a function `flattenObject` that takes a nested object and converts it into a single-level object with dot notation keys.

### Example:
```javascript
flattenObject({
    user: {
        name: "Alice",
        address: { city: "Wonderland", zip: "12345" }
    }
});
// Output: { "user.name": "Alice", "user.address.city": "Wonderland", "user.address.zip": "12345" }
```

---

## 6. Reverse Dynamic URL Mapping

### Description:
Create a function `reverseRoute` that takes a route string with placeholders and a URL, returning the dynamic values as an object.

### Example:
```javascript
reverseRoute("banner/:id/user/:name", "banner/1/user/romik");
// Output: { id: "1", name: "romik" }
```

---

## 7. Validate Balanced Brackets

### Description:
Write a function `isBalanced` that checks if a string has balanced brackets (e.g., `{}`, `[]`, `()`).

### Example:
```javascript
isBalanced("(a + b) * [c - d]");
// Output: true

isBalanced("(a + b) * [c - d))");
// Output: false
```

---

## 8. Count Word Occurrences

### Description:
Create a function `countWords` that counts the occurrences of each word in a string.

### Example:
```javascript
countWords("hello world hello");
// Output: { hello: 2, world: 1 }
```

---

## 9. Find Longest Palindrome

### Description:
Write a function `findLongestPalindrome` to find the longest palindrome in a given string.

### Example:
```javascript
findLongestPalindrome("babad");
// Output: "bab" or "aba"
```

---

## 10. Calculate Fibonacci Sequence

### Description:
Create a function `fibonacci` that generates the Fibonacci sequence up to a given number of terms.

### Example:
```javascript
fibonacci(5);
// Output: [0, 1, 1, 2, 3]
```

---

Each of these exercises tackles a unique problem type. Feel free to implement them one by one to enhance your problem-solving skills!

