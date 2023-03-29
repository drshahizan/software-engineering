<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

<!---
Module 8: Software Verification, Validation and Testing

Group 2
1. DANIAL HARRIZ BIN MOHD ASINEH @ MOHD ASNEH, A22EC0152
2. KUGEN A/L KALIDAS, 
3. LUQMAN, matrix no
4. ANAS,

-->

## Module 8 : Software Verification, Validation and Testing

Click [here](https://drive.google.com/drive/folders/1fFqVSa7WdQ2Uet0UdvbQcALUVcqme6gw) to access the PDF file for this module (including other modules)

## Contents
1. [**Verification and Validation (V&V)**](#verification-and-validation-(V&V))


## Verification and Validation (V&V)
  
Verification: The process of evaluating a software system or component to determine whether                 it meets the specified requirements and standards.

Validation: The process of evaluating a software system or component during or at the end of               the development process to determine whether it satisfies the customer or end-user             requirements.

#### Goals : 

1. Ensure that the software system meets the requirements and specifications.
2. Detect and eliminate defects and errors in the software system.
3. Ensure that the software system is reliable, efficient, and maintainable.
4. Ensure that the software system is easy to use and meets the user's needs.

#### Techniques:
There are several techniques used for V&V, including:

 Verification Technique:

1. Prototyping
2. Model Analysis (can be validation)
3. Inspection and review (Static testing)

• Validation Technique:

1. Software Testing (Dynamic testing)
2. Code Inspection (Static analysis)

• Independent V&V

#### Description

1. Verification and validation are two separate but related processes. Verification is focused on ensuring that the software system meets its requirements and specifications, while validation is focused on ensuring that the software system meets the customer's needs.

2. V&V is an ongoing process that starts early in the software development lifecycle and continues throughout the development process.

3. V&V is essential to the development of high-quality software systems, as it helps to identify and eliminate defects and errors early in the development process, reducing the cost and time required for rework.

4. V&V is often performed by a separate team from the software development team, to ensure that there is an independent and unbiased evaluation of the software system.

5. V&V can be performed manually, using techniques such as reviews and testing, or it can be automated using tools and techniques such as static analysis and model checking.

6. The goals, techniques, and purposes of V&V may vary depending on the type of software system being developed, the development methodology being used, and the specific requirements of the customer or end-user.

7. V&V is not a one-time activity, but an ongoing process that continues even after the software system has been deployed and is in use. Maintenance activities, such as bug fixes and updates, should also be subject to V&V to ensure that they do not introduce new defects or issues into the system.










  
## Test-Case Approach 1 : Requirements-Based Testing

### Requirement-Based Testing :

1. Identify the requirements of the system that need to be tested
2. Create test cases that cover each requirement
3. Verify that each requirement is met by the corresponding test case
4. Ensure that all test cases are traceable back to the requirements they cover

#### Example:
Requirement: The login page should authenticate a user's credentials before granting access to the system
Test Case: Enter valid username and password and verify that access is granted to the system.

## Test-Case Approach 2 : Black-box Testing

### Black-box Testing :

1. Identify the input and output parameters of the system
2. Create test cases that cover different combinations of inputs and expected outputs
3. Execute the test cases and verify the actual output against the expected output
4. Ensure that all possible scenarios are covered, including boundary cases and invalid inputs

#### Example:
Input Parameter: A calculator that can perform addition, subtraction, multiplication, and division
Test Case: Enter two positive integers and perform addition. Verify that the result is correct.

### Black-box Testing Strategies :

The two common black-box testing strategies are:

 **Equivalence Partitioning**: This strategy involves dividing the input data into different partitions or classes based on the behavior of the system. Each partition represents a group of input values that are expected to behave similarly and produce the same output. Test cases are then designed to cover at least one input value from each partition. This helps in reducing the number of test cases required to cover all possible inputs.

**Boundary Value Analysis** : This strategy involves testing the system using input values that are at the extreme boundaries of the input domain. These extreme values are the minimum and maximum values of the input range, as well as the values immediately outside the input range. The purpose of this strategy is to identify any issues or errors that may occur at the boundaries of the input domain. By testing the boundary values, testers can ensure that the system behaves correctly and consistently across the entire input range.

## Test-Case Approach 3 : White-box Testing

### White-box Testing :

1. Understand the internal workings of the system, including its code and data structures
2. Create test cases that cover different branches, loops, and statements within the code
3. Use code coverage tools to ensure that all parts of the code are exercised
4. Verify that the system behaves correctly under different conditions, such as error handling and edge cases

#### Example:
Internal Function: A function that checks if a given number is prime
Test Case: Pass a prime number as input and verify that the function returns true. Pass a composite number as input and verify that the function returns false.

### White-box testing Strategies 1 : Basis Path Testing

Basis Path Testing is a structural testing technique that involves testing the control flow of a program. It is based on the concept of Cyclomatic Complexity, which is a measure of the number of independent paths through a program. The objective of Basis Path Testing is to test all possible independent paths through the program to ensure that each statement and decision has been executed at least once.

The process of Basis Path Testing involves the following steps:

1. Create a Control Flow Graph (CFG) of the program, which represents the sequence of statements and control flow structures such as loops and conditionals.
2. Determine the Cyclomatic Complexity of the program by counting the number of independent paths through the CFG.
3. Identify the basis set of independent paths, which is a set of paths that represent all possible independent paths through the program.
4. Create test cases to execute each path in the basis set, ensuring that each statement and decision has been executed at least once.
5. Execute the test cases and verify that the program behaves correctly for each path.


Basis Path Testing is useful in identifying errors related to control flow, such as incorrect loop termination conditions, unreachable code, and infinite loops. It also helps in improving code quality by ensuring that all possible paths through the program are tested, and can provide insight into the complexity and maintainability of the code.

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

