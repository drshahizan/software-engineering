
<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&countColor=%23263759&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering)


Don't forget to hit the :star: if you like this repo.

### Table of Contents

- [Requirements Modeling Concept](p1-intro.md)
- [Use Case Diagram](p2-use-case.md)
- [Structural Models](p3-struc-model.md)

# Part 3: Structural Models

In software engineering, structural models are used to represent the internal structure of a software system. These models are typically created during the design phase of software development and help developers to understand the relationships between different components of the system.

There are several types of structural models used in software engineering, including:

1. Class diagrams: A class diagram is a type of structural model that shows the classes, interfaces, and their relationships in a software system. It helps developers to understand the structure of the system and the interactions between different objects.

2. Object diagrams: An object diagram is a type of structural model that shows the objects and their relationships in a particular instance of a software system. It helps developers to understand the interactions between objects at runtime.

3. Component diagrams: A component diagram is a type of structural model that shows the components of a software system and the dependencies between them. It helps developers to understand how the different components of the system work together to achieve the system's functionality.

4. Deployment diagrams: A deployment diagram is a type of structural model that shows the physical deployment of a software system, including the hardware and software components, and their relationships. It helps developers to understand how the system will be deployed and configured in the production environment.

5. Package diagrams: A package diagram is a type of structural model that shows the organization of the software system into packages and the dependencies between them. It helps developers to understand how the different packages of the system are related and how they work together to achieve the system's functionality.

Overall, structural models are important in software engineering as they help developers to understand the structure of a software system and how the different components of the system work together to achieve the system's functionality.


## Class diagrams
Class diagrams are one of the most commonly used structural models in software engineering. They are used to represent the static structure of a software system by showing the classes, interfaces, and their relationships. Class diagrams help developers to understand the structure of the system and the interactions between different objects.

A class diagram consists of the following elements:

1. Classes: A class is a blueprint for creating objects in a software system. It defines the properties and methods that are common to all objects of that class. In a class diagram, classes are represented by rectangles with the name of the class written inside the rectangle.

2. Attributes: Attributes are the properties of a class that define the characteristics of an object. They are represented in a class diagram as a list of properties below the name of the class.

3. Methods: Methods are the functions that a class can perform. They are represented in a class diagram as a list of functions below the attributes of the class.

4. Relationships: Relationships define the associations between classes in a software system. There are several types of relationships in class diagrams, including inheritance, composition, and aggregation.

    - Inheritance: Inheritance is a relationship between a superclass and a subclass. It allows the subclass to inherit the properties and methods of the superclass. In a class diagram, inheritance is represented by a solid line with an arrowhead pointing to the superclass.

    - Composition: Composition is a relationship between two classes where one class is composed of the other. In a class diagram, composition is represented by a filled diamond at the end of a solid line that connects the two classes.

    - Aggregation: Aggregation is a relationship between two classes where one class is part of the other class. In a class diagram, aggregation is represented by an unfilled diamond at the end of a solid line that connects the two classes.

5. Multiplicity: Multiplicity is used to specify how many objects can be associated with a particular class in a relationship. It is represented in a class diagram using numbers or symbols.

Class diagrams are a powerful tool for visualizing the structure of a software system. They help developers to understand the relationships between classes, the properties and methods of each class, and how objects interact with each other. By using class diagrams, developers can design software systems that are easy to understand, maintain, and extend.

### Example
An example of a class diagram for a university academic course registration system:

<p align="center">
  <img src="class-diagram.png"  width="400" />
</p>

In this example, we have identified several key classes and relationships within the system. Let's take a closer look at each of them:

1. **Student:** The Student class represents a student who is registered in the system. It has attributes such as name, student ID, email, and password.

2. **Faculty:** The Faculty class represents the instructors who teach courses in the system. It has attributes such as name, faculty ID, email, and password.

3. **Course:** The Course class represents a course offered by the university. It has attributes such as course code, name, description, and credit hours.

4. **Section:** The Section class represents a section of a course, which is typically taught by a single instructor during a specific time period. It has attributes such as section number, capacity, and location.

5. **Registration:** The Registration class represents the act of a student registering for a specific section of a course. It has attributes such as registration ID and registration date.

6. **Relationships:**

    - The Student class has a one-to-many relationship with the Registration class, indicating that a student can register for multiple courses.

    - The Faculty class has a one-to-many relationship with the Section class, indicating that a faculty member can teach multiple sections of courses.

    - The Course class has a one-to-many relationship with the Section class, indicating that a course can have multiple sections.

    - The Section class has a many-to-many relationship with the Registration class, indicating that multiple students can register for the same section of a course.

Overall, this class diagram provides a clear overview of the key classes and relationships within a university academic course registration system. It can serve as a useful tool for software developers to design, implement, and maintain such a system.

### Code PUML

```puml
@startuml

class Student {
  - id: int
  - name: string
  - studentID: string
  - email: string
  - password: string
}

class Faculty {
  - id: int
  - name: string
  - facultyID: string
  - email: string
  - password: string
}

class Course {
  - code: string
  - name: string
  - description: string
  - creditHours: int
}

class Section {
  - number: string
  - capacity: int
  - location: string
}

class Registration {
  - id: int
  - date: string
}

Student "1" --> "many" Registration
Faculty "1" --> "many" Section
Course "1" --> "many" Section
Section "many" --> "many" Registration

@enduml
```

In this PUML code, we define the classes and their attributes using the `class` keyword followed by the class name and a list of attributes preceded by a `-` symbol. We then define the relationships between the classes using the `-->` symbol, and indicate the multiplicity of the relationships using the numbers on each end of the arrow.

> Note that this is just an example of how to represent a university academic course registration system using PUML. The actual implementation may vary depending on the specific requirements of the system.

## Domain Model Class Diagram notation

Domain Model Class Diagram notation is a type of UML (Unified Modeling Language) diagram that is used to represent the conceptual classes and relationships within a domain or subject area. The purpose of the Domain Model Class Diagram is to capture the essential concepts and business rules of a system, without including any implementation details. It is commonly used in software engineering to create a high-level overview of the domain and to facilitate communication between stakeholders, including developers, business analysts, and users.

The notation used in a Domain Model Class Diagram includes several key elements:

1. **Class:** A class is represented by a rectangle with the class name at the top. It represents a conceptual entity or object within the domain. Attributes are listed within the class, and methods may be included as well.

2. **Association:** An association represents a relationship between two or more classes. It is represented by a line connecting the classes, with optional arrowheads indicating the direction of the relationship. Multiplicity and role names may be included as well.

3. **Aggregation and Composition:** Aggregation and composition are special types of associations that represent a whole-part relationship between classes. Aggregation is represented by a diamond-shaped arrowhead on the containing class, while composition is represented by a filled-in diamond.

4. **Inheritance:** Inheritance represents a specialized relationship between classes, where one class is a subtype of another. It is represented by a solid line with an arrowhead pointing from the subtype to the supertype.

Overall, the Domain Model Class Diagram notation provides a visual representation of the conceptual classes and relationships within a domain, making it easier to understand and communicate the essential concepts of a system.

In software engineering, a class is a blueprint or template that defines the properties and behavior of objects that belong to that class. An object, on the other hand, is an instance of a class. 

## Class and Object Instantiation

To create an object from a class, we use a process called instantiation. This involves creating a new instance of the class and assigning it to a variable. The syntax for instantiation varies depending on the programming language, but the general steps are as follows:

1. Declare a variable of the appropriate class type. This reserves memory space for the object.

2. Use the "new" keyword to create a new instance of the class.

3. Assign the new object to the variable.

For example, let's say we have a class called "Person" that has properties such as "name" and "age". We can create a new object from this class using the following code in Java:

```
Person john;        // Declare a variable of type Person
john = new Person();    // Create a new instance of Person and assign it to the variable "john"
```

We can also initialize the properties of the object during instantiation by passing arguments to the constructor. The constructor is a special method that is called when a new object is created from a class. It initializes the object with the specified values.

For example, let's say we have a constructor for the Person class that takes two arguments: name and age. We can create a new object with the name "John" and age 30 using the following code:

```
Person john = new Person("John", 30);   // Create a new instance of Person and initialize its properties with values
```

In summary, class and object instantiation is a fundamental concept in object-oriented programming. It allows us to create objects from a blueprint or template defined by a class, and initialize their properties with specific values.

## Class Stereotype Syntax
Class stereotypes are labels applied to classes that indicate their intended use or purpose within a system. They are a way of adding additional meaning and context to the class and can help to improve the overall clarity and understanding of the system's design.

In UML, class stereotypes are denoted using a special syntax that includes a guillemet (`«` and `»`) symbol around the stereotype name, placed above the class name. For example, the `«entity»` stereotype might be applied to a class that represents a persistent data entity.

In the case of the university academic course registration system, we could use class stereotypes to indicate the roles that certain classes play within the system. Here are a few examples:

- `«student»` stereotype: Applied to the `Student` class to indicate that it represents a student in the university system.

- `«faculty»` stereotype: Applied to the `Faculty` class to indicate that it represents a faculty member who teaches courses.

- `«course»` stereotype: Applied to the `Course` class to indicate that it represents a course offered by the university.

- `«section»` stereotype: Applied to the `Section` class to indicate that it represents a specific section of a course.

- `«registration»` stereotype: Applied to the `Registration` class to indicate that it represents a student's registration for a specific section of a course.

By using class stereotypes in this way, we can quickly and easily communicate the intended purpose and role of each class within the system, making it easier for developers and other stakeholders to understand and work with the system.

## Types of Class Stereotype

In the university academic course registration system, we can identify several classes that can be assigned different stereotypes based on their roles within the system. 

1. **Boundary class:** The `CourseRegistrationUI` class can be assigned the boundary stereotype, as it interacts with the user interface and handles input/output. 

2. **Entity class:** The `Course` class can be assigned the entity stereotype, as it represents a persistent data entity in the system.

3. **Control class:** The `RegistrationController` class can be assigned the control stereotype, as it coordinates between the boundary and entity objects, collects information from the boundary object, and dispatches it to the entity object.

Assigning class stereotypes can help to clarify the roles and responsibilities of different classes within the system, and can also assist in organizing and managing the system's architecture.

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)

