<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&labelColor=%23d9e3f0&countColor=%23697689&style=flat)

Don't forget to hit the :star: if you like this repo.

## Instructions
- Please use the [answer template](temp_struc.md).
- Please answer the following case study question to assess your knowledge in UML. You are required to submit your answer file in the submission folder. Within the [`submission/sec01`](../uml/submission/sec01) or [`submission/sec02`](../uml/submission/sec02) folder, create a folder with your GitHub ID. Name the file as `ad4.md`.

### Folder structure

```
🗂️submission
├─ 🗂️sec01
├── 📄readme.md
├── 📁drshahizan
│   ├── 📄mcq1.md
│   ├── ...
│   └── 📄mcq5.md
├── 📁your github id
├─ 🗂️sec02
├── 📄readme.md
├── 📁drshahizan
│   ├── 📄mcq1.md
│   ├── ...
│   └── 📄mcq5.md
└── 📁your github id
```

# Case Study: Hospital Management System

## Problem Statement:
A hospital wants to develop a comprehensive Hospital Management System to streamline their administrative and medical processes. The system should include modules for patient management, appointment scheduling, medical records management, billing and invoicing, and inventory management. The system should have an intuitive user interface and ensure data accuracy, security, and efficiency.

## Architectural Design:

| Component          | Description                                                                                   | Tool/Software Recommendation     |
|--------------------|-----------------------------------------------------------------------------------------------|----------------------------------|
| User Interface     | Develop a web-based interface using HTML, CSS, and JavaScript. The interface should provide forms and pages for patient registration, appointment scheduling, medical records management, billing, and inventory management. It should communicate with the backend components through REST APIs.                           | React, Angular, Vue.js            |
| Business Logic     | Implement the business logic using a server-side programming language like Java or Python. The logic should handle patient management, appointment scheduling, medical records management, billing, and inventory management. It should enforce business rules, validate inputs, and coordinate operations between different modules. Use appropriate design patterns to maintain modularity and scalability. | Java Spring Boot, Django, Node.js |
| Data Access Logic  | Develop a data access layer to interact with the database. Use an object-relational mapping (ORM) framework like Hibernate or Django ORM to handle database operations. Implement methods to retrieve and store patient-related data, appointments, medical records, billing information, and inventory details.                           | Hibernate, Django ORM, Sequelize |
| Database           | Use a relational database management system (RDBMS) such as MySQL, PostgreSQL, or Oracle. Create tables to store patient information, appointments, medical records, billing details, and inventory records. Establish appropriate relationships between tables using primary and foreign keys for data integrity and efficient querying.                              | MySQL, PostgreSQL, Oracle         |

## System Workflow:

- Hospital staff, such as receptionists and doctors, access the web-based user interface to perform various tasks.
- When registering a new patient, the user interface captures patient details and sends them to the backend through a REST API.
- The business logic component receives the patient data, performs validation, and instructs the data access logic to store the patient details in the database.
- For appointment scheduling, the user interface displays available slots, and upon selection, sends the appointment details to the backend. The business logic validates the appointment and instructs the data access logic to update the appointment schedule.
- Medical records management involves capturing patient diagnoses, treatments, and test results. The business logic coordinates with the data access logic to store and retrieve medical records from the database.
- For billing and invoicing, the business logic calculates charges based on treatments, medications, and other services provided. It interacts with the data access logic to store billing details and generate invoices.
- Inventory management involves tracking the availability of medical supplies, equipment, and medications. The business logic updates inventory records based on usage and communicates with the data access logic to ensure accurate inventory management.
- The user interface component displays patient details, appointment schedules, medical records, billing information, and inventory status to the hospital staff.

### Multiple-Choice Questions (MCQs):

1. Which component of the Hospital Management System handles the presentation layer and user interaction?
   a) User Interface
   b) Business Logic
   c) Data Access Logic
   d) Database

2. Which programming languages are commonly used for implementing the business logic of a Hospital Management System?
   a) HTML and CSS
   b) JavaScript and Python
   c) Java and PHP
   d) C++ and Ruby

3. Which component is responsible for interacting with the database in the Hospital Management System?
   a) User Interface
   b) Business Logic
   c) Data Access Logic
   d) Database

4. Which tool or software is commonly used to develop the user interface of a web-based Hospital Management System?
   a) React
   b) Django ORM
   c) Hibernate
   d) MySQL

5. What type of database management system is recommended for storing patient information in the Hospital Management System?
   a) Relational Database Management System (RDBMS)
   b) NoSQL Database
   c) Object-Oriented Database
   d) File-based Database

6. Which component of the Hospital Management System handles tasks such as patient registration, appointment scheduling, and medical records management?
   a) User Interface
   b) Business Logic
   c) Data Access Logic
   d) Database

7. Which design pattern is commonly used to maintain modularity and scalability in the business logic component?
   a) Model-View-Controller (MVC)
   b) Singleton
   c) Observer
   d) Factory

8. Which component is responsible for retrieving and storing patient-related data from the database?
   a) User Interface
   b) Business Logic
   c) Data Access Logic
   d) Database

9. Which programming language is commonly used to implement the data access logic of a Hospital Management System?
   a) JavaScript
   b) Python
   c) Java
   d) C#

10. Which component of the Hospital Management System stores patient information, appointments, medical records, billing details, and inventory records?
    a) User Interface
    b) Business Logic
    c) Data Access Logic
    d) Database

11. Which tool or software is commonly used to handle database operations in the data access logic component?
    a) Django ORM
    b) Sequelize
    c) Hibernate
    d) Spring Boot

12. Which component of the Hospital Management System enforces business rules and validates inputs?
    a) User Interface
    b) Business Logic
    c) Data Access Logic
    d) Database

13. Which component of the Hospital Management System ensures secure and efficient access to the database?
    a) User Interface
    b) Business Logic
    c) Data Access Logic
    d) Database

14. Which component of the Hospital Management System provides an intuitive and user-friendly experience for hospital staff?
    a) User Interface
    b) Business Logic
    c) Data Access Logic
    d) Database

15. Which component of the Hospital Management System updates inventory records based on usage and ensures accurate inventory management?
    a) User Interface
    b) Business Logic
    c) Data Access Logic
    d) Database

### Structured Questions:

1. Explain the role of the User Interface component in the Hospital Management System.

2. How does the Business Logic component coordinate operations between different modules in the Hospital Management System?

3. Describe the purpose of the Data Access Logic component in the Hospital Management System.

4. Which types of patient-related data are typically stored in the database of a Hospital Management System?

5. Discuss the benefits of using a relational database management system (RDBMS) for storing patient information in the Hospital Management System.

6. Explain how the user interface captures patient details during the registration process.

7. Outline the steps involved in appointment scheduling and how the system handles it.

8. Describe the role of the Business Logic component in medical records management in the Hospital Management System.

9. How does the Business Logic component calculate charges for billing and invoicing in the Hospital Management System?

10. Discuss the importance of inventory management in a Hospital Management System and how it is handled by the system.

## Benefits of the Architecture:
- Modular design allows for the independent development and maintenance of different components, ensuring scalability and flexibility.
- The user interface provides a user-friendly and intuitive experience for hospital staff, enabling easy interaction with the system.
- Business logic enforces business rules, maintains data integrity, and ensures accurate execution of hospital processes.
- Data access logic provides efficient and secure access to the database, ensuring proper storage and retrieval of hospital-related data.
- The database stores patient information, appointments, medical records, billing details, and inventory records in a structured and secure manner.


## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan&labelColor=%23697689&countColor=%23555555&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan)
![](https://hit.yhype.me/github/profile?user_id=81284918)






