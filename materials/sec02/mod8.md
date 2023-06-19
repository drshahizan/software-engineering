<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&countColor=%23263759&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering)


Don't forget to hit the :star: if you like this repo.

<!---
#Module 8: Software Verification, Validation and Testing

Group TEMPEST
1. DANIAL HARRIZ BIN MOHD ASINEH @ MOHD ASNEH, A22EC0152
2. KUGEN A/L KALIDAS, A22EC0178
3. MUHAMMAD LUQMAN HAKIM BIN MOHD RIZAUDIN, A22EC0086
4. MUHAMMAD ANAS BIN MOHD PIKRI A21SC0464

-->

## Module 8 : Software Verification, Validation and Testing

Click [here](https://drive.google.com/drive/folders/1fFqVSa7WdQ2Uet0UdvbQcALUVcqme6gw) to access the PDF file for this module (including other modules)

## Contents
- [**Verification and Validation (V&V)**](#verification-and-validation-vv)
  - [**Techniques for V&V**](#techniques)
  - [**Description of V&V**](#description)
  - [**Verification Inspection and Validation Testing**](#verification-inspection-static-and-validation-testing-dynamic)
- [**Software Testing Process**](#software-testing-process)
  - [**Test Case Approach 1**](#test-case-approach-1--requirements-based-testing)
  - [**Test Case Approach 2**](#test-case-approach-2--black-box-testing)
  - [**Test Case Approach 3**](#test-case-approach-3--white-box-testing)


# Verification and Validation (V&V)

<p align="center"><img src="https://goktl.com/wp-content/uploads/2021/02/validation_verification.png" alt="Verification and Validation" width="800"> </p>
  
**Verification** : The process of evaluating a software system or component to determine whether it meets the specified requirements and standards.

**Validation** : The process of evaluating a software system or component during or at the end of the development process to determine whether it satisfies the customer or end-user requirements.

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


# Verification [Inspection (Static)] and Validation [Testing (Dynamic)]

### Inspections vs Dynamic Testing
1. Inspections are a static process that may recognize errors before the code is executed, making it simpler to isolate and identify specific errors. Incomplete versions of a system can be examined for free.
2. Dynamic testing requires specialised tests that must be linked. Inspections can look at a programme's overall quality characteristics, such as standard compliance, portability, and maintainability.

## Stages of Testing
The 4 stages of commercial software testing :

## Stage 1 : Component test 
Component or unit testing is a form of testing that analyses individual parts of a software system. It is performed by the developer and attempts to detect errors in the functionality, boundary conditions, and error handling of the component. Individual functions or procedures, object classes, or composite components are all examples of components.

#### Two types of component testing. 
 1. Object Class Testing
- Object Class Testing is a type of testing that focuses on testing the behavior and functionality of individual object classes in an object-oriented program. Object classes are the blueprints that define the properties and behavior of objects, so testing them thoroughly is crucial to ensure the quality and reliability of the software. Object Class Testing involves creating test cases that cover all possible scenarios and edge cases for each method and attribute of the class, and verifying that the class behaves as expected under each scenario.

 2. Interface testing
- Interface Testing is a type of testing that focuses on testing the interfaces between objects in an object-oriented program. Interfaces are the contracts that define the methods and properties that an object must expose to interact with other objects, so testing them thoroughly is crucial to ensure the correct functioning of the overall system. Interface Testing involves creating test cases that cover all possible scenarios and edge cases for each method and property of the interface, and verifying that the interface behaves as expected under each scenario. Interface Testing also involves testing the compatibility and interoperability of the interface with other objects that use it.

### Interface Testing Types
- Parameter interface
– Data passed from one procedure to another
- Procedural interface
– Sub-system encapsulates a set of procedures
to be called by other sub-systems
- Message passing interface
– Sub-systems request services from other sub

## Stage 2:  Integration test
Integration testing during software development involves integrating system components and testing them together to ensure proper system interaction. The testing workers, which has access to the system source code, oversees this. The purpose of integration testing is to determine whether the components are compatible, interact correctly, and transfer data across their interfaces at the appropriate moment.

#### Two common approaches for integration testing :
1. Top-down integration

•	Develop the system's skeleton and then complete it with components.

2. Bottom-up integration 

•	Integrate infrastructure components before implementing useful components.

These tests involve either starting with the main components and adding details or starting with the smaller components and working up to the larger ones. It is suggested that the system be integrated incrementally to facilitate error localization.

## Stage 3: System test
An independent testing team verifies that the entire system meets specified criteria through function tests, function interaction testing, and evaluation of non-functional attributes when undergo the process of testing an integrated system.

#### Example of non-functional system testing test
1. Stress testing

-Load testing involves running an application to high-stress or high-load scenarios, such as complex numerical values or a large number of inputs or queries, in order to determine the application's ability for withstanding stress or heavy loads.

2. Performance testing

-Before releasing a system to users, it is essential to test the new features of the system, such as how well it functions and how reliable it is. This is done to ensure that the system fulfils all of the requirements and is ready for the intended users to use.

3. Usability testing

-Used to determine how easy a system or component is for a user to operate and understand. Usability testing is typically performed by specialists who observe how users interact with the system in order to identify any issues that may interfere with the user's ability to use the system effectively. Usability testing aims to improve the user experience by making the system simpler and user-friendly.


Testing also one of the process that is used to increase assurance that a system meets its requirements before it is released. It usually consists of functional testing based on system specifications without knowledge of its implementation.

##### System testing 

-Typically involves black-box or functional testing, where testers depend on the system specification to test the system's functionality without knowing how it is implemented.

##### Requirements testing

-A separate process that includes testing against specific requirements.


## Stage 4 : Acceptance test

-Acceptance testing is a formal testing process performed by customers to determine whether a system meets the minimum requirements and is ready for release,
because the user environment cannot be replicated in a testing environment.

-Acceptance testing also is a phase in the testing process where users or customers provide input and suggestions on system testing.


#### Goal of Aceeptance test 

To create reliability in the system/part-system or particular non-functional characteristics

-To ensure that the system meets the requirements for production deployment

#### Types of Acceptance test

##### 1. Alpha testing

-Software users work alongside the development team to assess the software and this process is an in-house test or an internal exercise.

##### 2. Beta Testing

-A stable product is made accessible to clients or customers for testing while identifying any issues to the system developers. Beta testing can also include the publication of test results reviews, which can have a major effect on the success of a product, especially within industries such as PC games.

##### 3. User Acceptance Test (UAT)

-User acceptance testing (UAT) is the final phase of validation which involves end users and customers. UAT is based on user requirements and shares the same methodology as functional system testing, with the goal of ensuring that the system is prepared for deployment and meets the needs of the users.

























## Software Testing Process

The software testing process is an essential aspect of the software verification, validation, and testing (VV&T) topic. The software testing process is a crucial step in ensuring that software products are of high quality, reliable, and meet the requirements of the end-users.

The software testing process involves the following steps:

1.  Planning: This involves defining the objectives and goals of the software testing process, including the scope of testing, the testing strategies, and the test cases to be used.
    
2.  Design: This step involves developing test cases based on the requirements and specifications of the software. The test cases should be designed to test all possible scenarios and conditions that the software may encounter.
    
3.  Execution: This step involves executing the test cases to identify defects and errors in the software. The results of the tests are recorded, and defects are reported to the developers for resolution.
    
4.  Reporting: This step involves documenting the results of the testing process and providing feedback to the development team. The feedback should include information about defects, errors, and other issues that were encountered during testing.
    
5.  Analysis: This step involves analyzing the results of the testing process to identify patterns and trends in the software's behavior. This information is then used to refine the testing process and improve the quality of the software.
    

The software testing process is a continuous process that should be performed throughout the software development life cycle. It is essential to ensure that the software is of high quality and meets the needs of the end-users.
  
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

<p align="center" ><img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2020/03/thumbnail_Black-box.jpg" alt="Black box image" width="300"> </p>

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

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)


