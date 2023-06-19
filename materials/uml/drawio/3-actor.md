<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&labelColor=%23d9e3f0&countColor=%23697689&style=flat)


Don't forget to hit the :star: if you like this repo.

# Actor
In UML (Unified Modeling Language), an actor is an entity or component that interacts with the system being modeled. Actors can be people, organizations, external systems, or even other software components. Actors are often depicted as stick figures in UML diagrams.

In use case diagrams, actors are used to represent the external entities that interact with the system being modeled. Use cases describe the different functions or features of the system, and actors describe the different roles that interact with those functions or features.

For example, in a university academic course registration system, a student would be an actor. The student interacts with the system by registering for courses, viewing course catalogs, and dropping courses. In this case, the student actor would be connected to the use cases for these functions.

Actors are important in UML because they help to identify and define the boundaries of the system being modeled. By identifying the actors and their interactions with the system, the model can better capture the requirements and behavior of the system.

## Case study

### 1. Create an actor using Draw.io

| No. | Item | Description |
| --- | --- | --- |
| 1 | Open Draw.io | Open Draw.io in your browser |
| 2 | Select "UML" | From the left-hand panel, select "UML" |
| 3 | Drag and Drop "Actor" | From the "UML Use Case" library, drag and drop "Actor" onto the drawing area |
| 4 | Rename the Actor | Double-click on the actor and type in the new name, e.g. "Student" |
| 5 | Resize the Actor | Click on the actor to select it, then click and drag the handles to resize it |
| 6 | Customize the Actor | Right-click on the actor and select "Edit Style" to customize the color, font, and other properties of the actor |

In this case, we're creating an actor for a university academic course registration system. Once you've followed these steps, you'll have a UML actor element representing the `Student` actor in your diagram.

### 2. PlantUML: Create a UML diagram with an actor

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
<p align="center">
<img src="https://github.com/drshahizan/software-engineering/blob/main/materials/uml/images/actor.png"  height="150" />
</p>

In this example, we use the `actor` keyword to define the `Student` actor. We then create a rectangle that represents the `University Academic Course Registration System` and add three use cases to it: `View Course Catalog`, `Register for a Course`, and `Drop a Course`. Finally, we connect the `Student` actor to each of the use cases using the `-->` arrow.

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan&labelColor=%23697689&countColor=%23555555&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan)
![](https://hit.yhype.me/github/profile?user_id=81284918)

