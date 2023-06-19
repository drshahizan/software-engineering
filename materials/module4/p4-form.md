<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&countColor=%23263759&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering)


Don't forget to hit the :star: if you like this repo.

### Table of Contents

- [Requirements Engineering Introduction](p1-intro.md)
- [Functional Requirements](p2-functional.md)
- [Requirements Specification](p3-soft-requirement.md)
- [Form Based Specifications](p4-form.md)
- [Advance Requirements Engineering](p5-req-eng.md)
- [An interview with a stakeholder](p6-interview.md)

# Part 4: Form Based Specifications

Form-based specifications, also known as tabular specifications, are another way to document system requirements in a structured format. This approach involves organizing requirements into tables with columns representing different aspects of the requirement, such as the requirement identifier, description, priority, and so on. Each row in the table represents a single requirement.

Here is an example of a form-based specification for a requirement in an academic course registration system:

| Requirement ID | CR-001 |
| --- | --- |
| Requirement Description | The system shall allow students to view their course schedules |
| Priority | High |
| Source | Student |
| Rationale | Students need to be able to access their schedules to keep track of their classes and plan their time |
| Acceptance Criteria | The system should display a clear and concise schedule that includes course titles, times, and locations |
| Dependencies | None |

In this example, the requirement ID is "CR-001", which identifies the requirement in the overall list of requirements. The requirement description states what the system should do, which is to allow students to view their course schedules. The priority of this requirement is "High", indicating its importance. The source of the requirement is the student, meaning that the requirement is driven by the needs of the student. The rationale explains why this requirement is necessary, which is to help students keep track of their classes and plan their time. The acceptance criteria specify how the system should fulfill the requirement, which is by displaying a clear and concise schedule that includes course titles, times, and locations. Finally, the dependencies column indicates if there are any other requirements that this requirement depends on.

Form-based specifications can be useful because they provide a clear and structured way to document requirements, making them easier to understand and manage. They can also help ensure that all necessary information is included for each requirement, such as its rationale and acceptance criteria.

## Template for Writing Functional Requirements
Template-based approaches can help ensure consistency and completeness in functional requirement documentation. Here's an example of a template for writing functional requirements for an academic course registration system:

Template: Requirements Statement Example

• The `<user>` shall be able to `<capability>`
• The student shall be able to register for courses.

• There shall be a `<system function>`
• There shall be a course search function.

• The `<system function>` shall able to `<action>` `<entity>`
• The course search function shall be able to search for courses based on course code, course name, instructor name, and course schedule.

• The `<user>` shall be able to `<capability>`
• The instructor shall be able to view their course rosters.

• There shall be a `<system function>`
• There shall be a course roster display function.

• The <system function> shall able to `<action>` `<entity>`
• The course roster display function shall be able to display the instructor's current course rosters, including student name, student ID, and contact information.

In this template, the first line specifies the user and the capability that the system must provide. The second line specifies the system function, which is a high-level feature or service that the system must provide. The third line specifies the action and entity, which defines the specific behavior or operation of the system.

Using this template, it's important to ensure that each requirement is complete, unambiguous, and testable. This means that each requirement should be written in a clear and concise language, avoiding any ambiguity or vagueness. Additionally, it's important to include acceptance criteria that define how each requirement will be tested and verified.

Using this template, you can write functional requirements for an academic course registration system in a structured and consistent manner. This can help ensure that all important aspects of the requirements are captured and that the requirements are testable and verifiable.

## Case Study: Functional Requirements

Functional requirements for an academic course registration system could be organized using a table:

| Requirement ID | Function | Description | Inputs | Source | Outputs | Destination |
| --- | --- | --- | --- | --- | --- | --- |
| FR001 | User Registration | The system shall allow users to create an account to access the registration system. | Username, password, email address | User | Confirmation message | User |
| FR002 | Course Search | The system shall allow users to search for available courses based on different criteria (e.g., course code, instructor name, course title, etc.). | Search criteria (e.g., course code, instructor name, course title) | User | List of courses matching the search criteria | User |
| FR003 | Course Registration | The system shall allow users to register for courses that are open for registration. | Course ID, user ID | User | Confirmation message | User |
| FR004 | Course Withdrawal | The system shall allow users to withdraw from courses that they have already registered for. | Course ID, user ID | User | Confirmation message | User |
| FR005 | Course Waitlist | The system shall allow users to add themselves to the waitlist for a course that is full. | Course ID, user ID | User | Confirmation message | User |
| FR006 | Course Availability | The system shall keep track of the availability of each course and update it in real-time as users register or withdraw from the course. | Course ID, user ID | System | Updated course availability status | System |
| FR007 | User Roles | The system shall have two types of users: students and instructors, with different access levels to the system. | User type | System | User-specific interface and functionality | User |
| FR008 | User Profile Management | The system shall allow users to update their personal information and view their course registration history. | User ID, updated personal information | User | Confirmation message | User |

Note: This is just an example and is not a comprehensive list of all the functional requirements for an academic course registration system. The actual requirements may vary depending on the specific needs and constraints of the system.

## Case Study: Non Functional Requirements

Non-Functional Requirements: Template Requirements Statement Example

| Title | Function | Description | Inputs | Source | Outputs | Destination |
| --- | --- | --- | --- | --- | --- | --- |
| Availability | The system | The system shall be available 24/7, except during maintenance windows that will be communicated in advance to the users | N/A | N/A | N/A | N/A |
| Response time | The system | The system shall have a response time of less than 3 seconds for any user action | User action | N/A | System response | User |
| Security | The system | The system shall have a security mechanism that ensures data privacy and confidentiality of all users | User data | N/A | Protected user data | System |
| Scalability | The system | The system shall be scalable to accommodate at least 10,000 users concurrently | User requests | N/A | Concurrent users | System |
| User interface | The system | The system shall have a user-friendly interface with clear navigation and easy-to-use features | User interaction | N/A | User feedback | System |
| Compatibility | The system | The system shall be compatible with major web browsers including Google Chrome, Mozilla Firefox, and Safari | Web browsers | N/A | System functionality | User |
| Accessibility | The system | The system shall comply with accessibility standards to ensure equal access to all users, including those with disabilities | User interaction | N/A | User accessibility | System |
| Backup and recovery | The system | The system shall have a backup and recovery mechanism to prevent data loss and minimize downtime in case of a system failure | System data | N/A | Recovered data | System |

These non-functional requirements specify the characteristics of the academic course registration system that are not directly related to its functionality but are still essential for its usability, security, and performance.

## Tabular specification

Tabular specification is a method of documenting requirements using a table format. This format is commonly used in software development and is often used in conjunction with natural language or structured specifications. The table typically includes columns for the requirement ID, description, priority, status, source, and any other relevant information.

For an academic course registration system, a tabular specification might include the following information:

| Requirement ID | Description | Priority | Status | Source | 
|----------------|-------------|----------|--------|--------|
| REQ001 | The system shall allow students to register for courses online | High | Approved | Customer |
| REQ002 | The system shall provide real-time course availability information | High | Approved | Customer |
| REQ003 | The system shall allow students to add and drop courses before the registration deadline | High | Approved | Customer |
| REQ004 | The system shall provide a confirmation message to students upon successful course registration | Medium | Approved | Customer |
| REQ005 | The system shall restrict course registration for students with unpaid fees | High | Approved | Customer |
| REQ006 | The system shall allow students to view their current course schedule | Low | Approved | Customer |
| REQ007 | The system shall allow students to search for courses by various criteria (e.g. course code, instructor, schedule) | Medium | Approved | Customer |
| REQ008 | The system shall provide course descriptions and prerequisites for all available courses | Medium | Approved | Customer |
| REQ009 | The system shall send reminders to students about registration deadlines and payment due dates | Low | Proposed | Development team |
| REQ010 | The system shall be accessible to students with disabilities | High | Proposed | Accessibility consultant |

By using a tabular specification, stakeholders can easily view and track the progress of each requirement. Additionally, the use of a standardized format helps ensure that all requirements are captured and documented in a consistent manner.

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)




