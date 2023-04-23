<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

# Actor
In UML (Unified Modeling Language), an actor is an entity or component that interacts with the system being modeled. Actors can be people, organizations, external systems, or even other software components. Actors are often depicted as stick figures in UML diagrams.

In use case diagrams, actors are used to represent the external entities that interact with the system being modeled. Use cases describe the different functions or features of the system, and actors describe the different roles that interact with those functions or features.

For example, in a university academic course registration system, a student would be an actor. The student interacts with the system by registering for courses, viewing course catalogs, and dropping courses. In this case, the student actor would be connected to the use cases for these functions.

Actors are important in UML because they help to identify and define the boundaries of the system being modeled. By identifying the actors and their interactions with the system, the model can better capture the requirements and behavior of the system.

## Case study
How to use PlantUML to create a UML diagram with an actor for a university academic course registration system:

```puml
@startuml

actor Student
rectangle "University Academic Course Registration System" {
  usecase "View Course Catalog"
  usecase "Register for a Course"
  usecase "Drop a Course"
  
  Student --> "Register for a Course"
  Student --> "View Course Catalog"
  Student --> "Drop a Course"
}

@enduml
```

In this example, we use the `actor` keyword to define the `Student` actor. We then create a rectangle that represents the `University Academic Course Registration System` and add three use cases to it: `View Course Catalog`, `Register for a Course`, and `Drop a Course`. Finally, we connect the `Student` actor to each of the use cases using the `-->` arrow.

I hope this helps!

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)
