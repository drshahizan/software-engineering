
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

##Interaction Model

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

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

