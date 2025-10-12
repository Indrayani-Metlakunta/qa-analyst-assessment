# QA Analyst Technical Assessment

**Candidate:** Indrayani  
**Language Used:** JavaScript  
**Completion Date:** October 11, 2025  

---

## Repository Structure
```
qa-analyst-assessment/
├── README.md`
├── part1-functional/
│   └── solution.js
└── part2-api-testing/
    ├── solution.js
    └── package.json 
```


## Part 1: Remove Duplicates

**File:** `part1-functional/solution.js`  
**Time Spent:** ~30 minutes  

### **Approach**
Implemented three different methods to remove duplicate elements from an array:

1. **Using `filter()` + `indexOf()`**  
   Filters each element by comparing its first occurrence index.  

2. **Using `Set()` + `Array.from()`**  
   Converts the array into a Set (which stores unique values) and back to an array.  

3. **Using `reduce()`**  
   Iteratively builds a new array by checking for existing occurrences before adding.  


### **How to Run**
> ⚠️ Prerequisite: Ensure that **Node.js** is installed on your system.  
> You can verify by running:
> ```bash
> node -v
> ```
> If not installed, download it from [https://nodejs.org](https://nodejs.org).
1. Navigate to the folder:
   ```bash
   cd part1-functional
   ```

2. Run the file using Node.js:
   ```bash
   node solution.js
   ```
3. Output should be displayed on the console

## Part 2: API Testing

**File:** `part2-api-testing/solution.js`  
**Time Spent:** ~30 minutes  

### **Approach**

Automated REST API test cases using Mocha, Chai, and Axios.

The tests validate both positive and negative scenarios for the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

### **How to Run**
> ⚠️ Prerequisite: Ensure that **Node.js** is installed on your system.  
> You can verify by running:
> ```bash
> node -v
> ```
> If not installed, download it from [https://nodejs.org](https://nodejs.org).
1. Install Dependencies
   From the root folder:
   ```bash
   cd part2-api-testing
   ```
   ```bash
   npm install
   ```

2. Run Tests
   ```bash
   npm test
   ```

