
<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/issues"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

### Table of Contents

- [Requirements Engineering Introduction](p1-intro.md)
- [Functional Requirements](p2-functional.md)
- [Requirements Specification](p3-soft-requirement.md)
- [Form Based Specifications](p4-form.md)
- [Advance Requirements Engineering](p5-req-eng.md)
- [An interview with a stakeholder](p6-interview.md)

# Part 2: 

## Interaction Model

An interaction model is a type of Use Case diagram in software engineering that shows how different actors or users interact with the system to achieve certain goals or objectives. In the context of the university academic course registration system, the interaction model would depict the various steps involved in the registration process from the perspective of the different user roles, such as students, faculty, and staff.

An interaction model for the university academic course registration system:

```puml
@startuml
left to right direction

actor "Student" as S
actor "Faculty" as F
actor "Staff" as St
rectangle "Registration System" as RS {
  usecase "Browse Course Catalog" as UC1
  usecase "Select Courses" as UC2
  usecase "Add to Schedule" as UC3
  usecase "Pay Tuition" as UC4
}

S -> RS : Uses registration system
F -> RS : Uses registration system
St -> RS : Uses registration system

S -> UC1 : Selects course from catalog
UC1 -> S : Displays course information
S -> UC2 : Selects desired courses
UC2 -> S : Displays course selections
S -> UC3 : Adds courses to schedule
UC3 -> S : Confirms course selection
S -> UC4 : Pays tuition
UC4 -> S : Confirms payment

F -> UC1 : Searches course catalog
UC1 -> F : Displays course information
F -> UC2 : Approves course selections
UC2 -> F : Confirms course selection

St -> UC1 : Edits course catalog
UC1 -> St : Displays course information
St -> UC2 : Manages course offerings
UC2 -> St : Confirms course offerings

@enduml
```

In this PUML code, we have actors representing the different user roles (student, faculty, staff), and a rectangle representing the registration system. Inside the rectangle, we have several use cases that represent the different steps involved in the registration process, such as browsing the course catalog, selecting courses, adding them to the schedule, and paying tuition.

The arrows represent the interactions between the different elements of the interaction model. For example, a student selects a course from the catalog, and the system displays the course information. The student then selects their desired courses, and the system confirms the course selection. The student adds the courses to their schedule, and the system confirms the selection. Finally, the student pays their tuition, and the system confirms the payment.

By creating an interaction model for the university academic course registration system, software engineers can gain a better understanding of the different steps involved in the registration process from the perspective of the different user roles. This can help to identify potential issues and ensure that the system meets the needs of its stakeholders. The interaction model can also be used as a communication tool to help stakeholders understand how the system operates and how it is used to achieve specific goals.

## Use case modeling
Use case modeling is a technique used in software engineering to represent the different ways that users interact with a system. It is a way of identifying the different actions or steps that a user takes to accomplish a specific goal or task. In the context of the university academic course registration system, use case modeling would be used to represent the various interactions that students, faculty, and staff have with the registration system.

Examples of use cases for the university academic course registration system:

1. Browse Course Catalog: This use case allows a student or faculty member to browse the course catalog to view available courses.

2. Select Courses: This use case allows a student to select the courses they wish to enroll in and add them to their schedule.

3. Add to Schedule: This use case allows a student to add the selected courses to their schedule for the upcoming semester.

4. Pay Tuition: This use case allows a student to pay their tuition fees for the semester.

5. Approve Course Selections: This use case allows a faculty member to review and approve the course selections made by a student.

6. Manage Course Offerings: This use case allows a staff member to manage the course offerings for the upcoming semester, such as adding or removing courses.

Each use case would be described in more detail, including the specific steps involved in accomplishing the task and the actors or users involved. Use case diagrams would be created to visualize the interactions between the actors and the system.

> A use case diagram for the university academic course registration system might include actors such as students, faculty, and staff, with each use case represented as a separate box. Arrows would connect the actors to the use cases they are involved in, illustrating the interactions between the different elements of the system.

By creating a use case model for the university academic course registration system, software engineers can better understand the needs of the different user roles and ensure that the system meets those needs. It also helps to identify potential issues and design solutions to those issues.

An example of a use case diagram for the university academic course registration system in PlantUML code:

```
@startuml
actor Student
actor Faculty
actor Staff

rectangle System {
  usecase "Browse Course Catalog"
  usecase "Select Courses"
  usecase "Add to Schedule"
  usecase "Pay Tuition"
  usecase "Approve Course Selections" as Approve
  usecase "Manage Course Offerings" as Manage
  
  Student --> "Browse Course Catalog"
  Student --> "Select Courses"
  Student --> "Add to Schedule"
  Student --> "Pay Tuition"
  Faculty --> Approve
  Staff --> Manage
}
@enduml
```
<p align="center">
<img src="ucasem.png"  width="600" />
</p>

This code defines three actors: Student, Faculty, and Staff, and a rectangle representing the System with six use cases, including "Browse Course Catalog," "Select Courses," and "Add to Schedule." Arrows connect the actors to the relevant use cases, illustrating the interactions between them. The "Approve Course Selections" use case is renamed to "Approve" using the "as" keyword, and the "Manage Course Offerings" use case is similarly renamed to "Manage."

## Stereotypes in UML
Stereotypes in UML are a way of customizing the standard UML notation to suit the needs of a specific system or domain. They are used to add additional meaning to UML elements, such as use cases, classes, and packages. In the context of the university academic course registration system, we can use stereotypes to represent specific relationships and roles within the system.

1. `<<include>>` and `<<extend>>` in use case relationship:<br>
These are two common stereotypes used in use case diagrams. <<include>> represents a use case that is always included in the behavior of another use case, while <<extend>> represents a use case that may or may not be included in the behavior of another use case, depending on certain conditions.

    > For example, in the university academic course registration system, the "Pay Tuition" use case may include the "View Account Balance" use case using the `<<include>>` stereotype. Meanwhile, the "Select Courses" use case may extend to the "Check Course Availability" use case using the `<<extend>>` stereotype, where the "Check Course Availability" use case will only be executed if the selected course is already full.

2. `<<entity>>`, `<<controller>>`, `<<boundary>>` in class diagram as class stereotypes:<br>
These are stereotypes used to represent the different types of classes in a class diagram. `<<entity>>` represents a persistent data object, `<<controller>>` represents a class that is responsible for coordinating the activities of other classes, and `<<boundary>>` represents a class that interfaces with the external environment.

    > For example, in the university academic course registration system, we can use `<<entity>>` to represent the "Student" and "Course" classes, `<<controller>>` to represent the "RegistrationController" class, which coordinates the registration process, and `<<boundary>>` to represent the "RegistrationUI" class, which interacts with the user to gather registration information.

3. `<<package>>` and `<<subsystem>>` in package diagram:<br>
These are stereotypes used in package diagrams to group related elements together. `<<package>>` represents a group of related classes, use cases, or other elements, while `<<subsystem>>` represents a higher-level grouping of related packages.

    > For example, in the university academic course registration system, we can use `<<package>>` to group related classes together, such as the "Student" and "Course" classes, and use `<<subsystem>>` to group related packages together, such as the "Registration" package and the "Course Catalog" package.

Here's an example of PlantUML code that uses stereotypes to model the university academic course registration system:

Use Case Diagram:

```puml
@startuml
actor Student
actor Faculty
actor Staff

rectangle System {
  usecase "Browse Course Catalog" as UC1
  usecase "Select Courses" as UC2
  usecase "Add to Schedule" as UC3
  usecase "Pay Tuition" as UC4
  usecase "Approve Course Selections" as UC5 <<extend>>
  usecase "Manage Course Offerings" as UC6 <<include>>
  
  Student --> UC1
  Student --> UC2
  Student --> UC3
  Student --> UC4
  Faculty --> UC5
  Staff --> UC6
}
@enduml
```
<p align="center">
<img src="ucase-s.png"  width="500" />
</p>

### Class Diagram:

```puml
@startuml
package Registration {
  class Student <<entity>> {
    +name: string
    +email: string
    +password: string
    +address: string
    +courses: Course[]
    +schedule: Schedule
    +register(): boolean
    +drop(): boolean
    +payTuition(): boolean
  }
  
  class Course <<entity>> {
    +name: string
    +code: string
    +instructor: string
    +location: string
    +schedule: Schedule
    +availability: int
    +enroll(Student): boolean
    +unenroll(Student): boolean
  }
  
  class RegistrationController <<controller>> {
    +searchCourse(name: string, code: string): Course[]
    +enrollStudent(student: Student, course: Course): boolean
    +unenrollStudent(student: Student, course: Course): boolean
    +payTuition(student: Student): boolean
  }
  
  class RegistrationUI <<boundary>> {
    +displayCourseCatalog(): void
    +selectCourses(): Course[]
    +displaySchedule(schedule: Schedule): void
    +displayAccountBalance(student: Student): void
    +displayRegistrationConfirmation(): void
  }
  
  class Schedule <<entity>> {
    +courses: Course[]
    +addCourse(course: Course): boolean
    +removeCourse(course: Course): boolean
  }
  
  Student --> RegistrationController
  RegistrationController --> Course
  RegistrationController --> RegistrationUI
}
@enduml
```

<p align="center">
<img src="cd-s.png"  width="500" />
</p>

### Package Diagram:

```puml
@startuml
package University {
  
  package Registration {
    class Student <<entity>> {
      +name: string
      +email: string
      +password: string
      +address: string
      +courses: Course[]
      +schedule: Schedule
      +register(): boolean
      +drop(): boolean
      +payTuition(): boolean
    }
    
    class Course <<entity>> {
      +name: string
      +code: string
      +instructor: string
      +location: string
      +schedule: Schedule
      +availability: int
      +enroll(Student): boolean
      +unenroll(Student): boolean
    }
    
    class RegistrationController <<controller>> {
      +searchCourse(name: string, code: string): Course[]
      +enrollStudent(student: Student, course: Course): boolean
      +unenrollStudent(student: Student, course: Course): boolean
      +payTuition(student: Student): boolean
    }
    
    class RegistrationUI <<boundary>> {
      +displayCourseCatalog(): void
      +selectCourses(): Course[]
      +displaySchedule(schedule: Schedule): void
      +displayAccountBalance(student: Student): void
      +displayRegistrationConfirmation(): void
    }
    
    class Schedule <<entity>> {
      +courses: Course[]
      +addCourse(course: Course): void
      +removeCourse(course: Course): void
    }
    
    RegistrationUI --> RegistrationController : <<use>>
    RegistrationController --> Student : <<use>>
    RegistrationController --> Course : <<use>>
    Student --> Schedule : <<use>>
    Course --> Schedule : <<use>>
  }
  
  package Finance {
    class PaymentGateway <<boundary>> {
      +processPayment(amount: double, cardNumber: string, expiryDate: string, cvv: string): boolean
    }
    
    class AccountingController <<controller>> {
      +calculateBalance(student: Student): double
      +updateBalance(student: Student, amount: double): boolean
      +processPayment(amount: double, cardNumber: string, expiryDate: string, cvv: string): boolean
    }
    
    PaymentGateway --> AccountingController : <<use>>
    AccountingController --> Student : <<use>>
  }
  
  package Administration {
    class User <<entity>> {
      +username: string
      +password: string
      +roles: string[]
      +login(username: string, password: string): boolean
      +logout(): boolean
    }
    
    class AuthenticationController <<controller>> {
      +login(username: string, password: string): boolean
      +logout(): boolean
    }
    
    class AdministrationUI <<boundary>> {
      +displayLoginScreen(): void
      +displayMainMenu(): void
      +displayUsers(): void
      +createUser(user: User): boolean
      +updateUser(user: User): boolean
      +deleteUser(user: User): boolean
    }
    
    AuthenticationController --> User : <<use>>
    AdministrationUI --> AuthenticationController : <<use>>
  }
  
  Student --> User : <<inherit>>
  
}
@enduml
```
<p align="center">
<img src="pd-s.png"  width="600" />
</p>

## Use Case Diagram: Notation
A use case diagram in UML is a graphical representation of the functional requirements of a system. It shows the actors (users or external systems) interacting with the system and the various use cases (functional requirements) that the system must satisfy.

The notation for a use case diagram includes the following:

1. Actors are represented by stick figures.
2. Use cases are represented by ovals with the name of the use case inside.
3. Relationships between actors and use cases are represented by lines. There are two types of relationships:
   a. Association: a straight line connecting an actor to a use case.
   b. Include/Extend: a dashed line with an arrowhead connecting a use case to another use case, indicating that one use case includes or extends another use case.

Here is an example of a use case diagram for the university academic course registration system:

```puml
@startuml
left to right direction
skinparam packageStyle rectangle
actor Student
actor Admin
rectangle Registration {
  Student --> (Enroll in Course)
  Student --> (Drop Course)
  Student --> (Pay Tuition)
  (Search Course) <-- Admin
  (Add Course) <-- Admin
  (Delete Course) <-- Admin
}
@enduml
```

In this diagram, there are two actors: `Student` and `Admin`. The `Student` actor can perform three use cases: `Enroll in Course`, `Drop Course`, and `Pay Tuition`. The `Admin` actor can perform three use cases: `Search Course`, `Add Course`, and `Delete Course`. The use cases are represented by ovals and the actors are represented by stick figures. The association between actors and use cases is represented by a straight line, and the association between use cases is represented by a dashed line with an arrowhead. The `Registration` rectangle is used to group related use cases.

### Example
```puml
@startuml
left to right direction
skinparam packageStyle rectangle
actor Student
actor Admin
rectangle Registration {
Student --> (Enroll in Course)
note right of (Enroll in Course) : Allows the student to enroll in a course they are interested in.

Student --> (Drop Course)
note right of (Drop Course) : Allows the student to drop a course they are currently enrolled in.

Student --> (Pay Tuition)
note right of (Pay Tuition) : Allows the student to pay for their tuition fees.

(Search Course) <-- Admin
note left of (Search Course) : Allows the admin to search for courses in the system.

(Add Course) <-- Admin
note left of (Add Course) : Allows the admin to add a new course to the system.

(Delete Course) <-- Admin
note left of (Delete Course) : Allows the admin to remove a course from the system.
}
@enduml
```
<p align="center">
<img src="ucd-n-s.png"  width="600" />
</p>

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

