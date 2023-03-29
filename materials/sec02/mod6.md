<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.
<!---
Module 6: Architectural Design

Group XXX
1. WAN NUR SOFEA BINTI MOHD HASBULLAH, A22EC0115
2. NUR FARAH ADIBAH BINTI IDRIS , A22EC0245
3. NIK ZULAIKHAA BINTI ZURAIDI AFANDI, A22EC0232
4. LEE YIK HONG, A21BE0376
-->


# Module 6: Architectural Design

### Contents:
#### Notes

#### ARCHITECTURAL DESIGN AND DETAILED DESIGN
- [Recap on Design Detailed Design](#recap-on-design-detailed-design)
- [Architectural Analogy for Software vs. House](#architectural-analogy-for-software-vs-house)
- [Analogy : Residential Styles](#analogy-residential-styles)
- [Design Discipline Activities](#design-discipline-activities)
- [From Analysis to Design : Design Artefacts Metamodel](#from-analysis-to-design-design-artefacts-metamodel)
- [Relationship between Analysis and Design (Model and System)](#relationship-between-analysis-and-design-model-and-system)
- [Architectural Design : Design the Software Architecture](#architectural-design-design-the-software-architecture)
- [Design Use Case Realizations](#design-use-case-realizations)
- [Architectural Abstraction](#architectural-abstraction)
- [Advantages of Explicit Architecure](#advantanges-of-explicit-architecture)
- [Architectural Representations](#architectural-representations)
- [Box and Line Diagrams](#box-and-line-diagrams)
- [Use of Architectural Models](#use-of-architectural-models)

#### ARCHITECTURAL DESIGN DECISION 
- [Architectural Design Decisions](#architectural-design-decisions)
- [Architecture Reuse](#architecture-reuse)
- [Architecture and System Characteristics (Non-Functional Requirements)](#architecture-and-system-characteristics-non-functional-requirements)

#### ARCHITECTURAL VIEW
- [Architecture Views](#architecture-views)
- [4 + 1 View Model of Software Architecture](#4-+-1-view-model-of-software-architecture)
- [UML Diagrams to Represent Architectural Views (4 + 1 View Model](#UML-diagrams-to-represent-archictectural-views-4-+-1-view-model)
- [From Design to Implementation](#from-design-to-implementation)
- [Relationship between Implementation Model and Design Model](#relationship-between-implementation-model-and-design-model)
- [Relationship between Design Subsystems and Implementation Subsytems](#relationship-between-design-subsytems-and-implementation-subsystems)

#### COMPONENTS DIAGRAM AS AN IMPLEMENTATION VIEW
- [UML Component Diagram](#UML-component-diagram)
- [UML Component Notation and Extension Notation for Windows and Web page](#UML-component-notation-and-extension-notation-for-windows-and-web-pages)
- [Types of Interface in Components](#types-of-interface-in-components)
- [Influence from the System Environment : Existing Framework](#influence-from-the-system-environment-existing-framework)
- [Influence from the System Environment : Legacy System](#influence-from-the-system-environment-legacy-system)
- [Influence from the System Environment : External System](#influence-from-the-system-environment-external-system)
- [Influence from the System Environment : Hardware Driver](#influence-from-the-system-environment-harware-driver)
- [Influence from the System Environment : Web Service](#influence-from-the-system-environment-web-service)
- [Combination of Architectural Style : Layered, Subsystems and Components](#combination-of-architectural-style-layered-subsystems-and-components)
- [Example : Two-Layer Architectural Design of Internet Systems](#example-two-layer-architectural-design-of-internet-systems)
- [Example : Three-Layer Architectural Design of Internet Systems](#example-three-layer-architectural-design-of-internet-systems)
- [Example : Component Diagram for Online Shopping](#example-component-diagram-for-online-shopping)

#### ARCHITECTURAL PATTERN
- [Architectural Patterns](#architectural-patterns)
- [Common Architectural Patterns](#common-architectural-patterns)
- [Model-View-Controller (MVC) Pattern](#model-view-controller-mvc-pattern)
- [Organization of MVC](#organization-of-MVC)
- [Web Application Architecture Using MVC](#web-application-architecture-using-MVC)
- [Example : MVC Architecture Used for a Dashboard](#example-MVC-architecture-used-for-a-dashboard)
- [Layered Architecture](#layered-architecture)
- [Layered Architecture Pattern](#layered-architecture-pattern)
- [Generic Layered Architecture](#generic-layered-architecture)
- [Example : Architecture of iLearn System](#example-architecture-of-ilearn-system)
- [Example : Architecture of Mentcare System](#example-layered-of-mentcare-system)
- [Three and Four Layer Architectures](#three-and-four-layer-architecture)
- [Example : Partiotioned Subsytems in Four Layer Architecture](#example-partiontioned-subsytems-in-four-layer-architecture)
- [Repository Architecture](#repository-architecture)
- [Repository Pattern](#repository-pattern)
- [Example : Repository Architecture for an IDE](#example-repository-architecture-for-an-IDE)
- [Example : Repository Architecture for Language Processing System](#example-repository-architecture-for-language-processing-system)
- [Client-Server Architecture](#client-server-architecture)
- [Client-Server Pattern](#client-server-pattern)
- [Example : Client-Server Architecture for Film Library](#example-client-server-architecture-for-film-library)
- [Pipe and Filter Architecture](#pipe-and-filter-architecture)
- [Pipe and Filter Pattern](#pipe-and-filter-pattern)
- [Example : Pipe and Filter Architecture Used in Payments System](#example-pipe-and-filter-architecture-used-in-payments-system)
- [Example : Pipe and Filter Used for Compiler Architecture](#example-pipe-and-filter-used-for-compiler-architecture)
- [Key Points](#key-points)

## UML Component Diagram

UML-Unified Modelling Language.

A UML component diagram is a type of diagram that **shows the structure** of a system or application in terms of its components and the relationships between them. Components are modular parts of the system that perform specific functions and can be assembled together to create the larger system. Here are some key elements that you might see in a UML component diagram:

**Components**: These are the building blocks of the system, representing the modular parts that perform specific functions. Each component can have its own interface, ports, and properties.

**Interfaces**: These define the methods and services that a component provides to other components or to the outside world. Interfaces can be depicted as a small circle on the edge of a component shape.

**Ports**: These are specific points on a component where connections can be made to other components or to the outside world. Ports can be depicted as small squares or circles on the edge of a component shape.

**Connectors**: These represent the relationships between components, showing how they communicate and interact with each other. Connectors can be depicted as lines with arrows or other symbols to show the direction of communication.

**Dependencies**: These show that one component depends on another component for its functionality. Dependencies can be depicted as dashed lines with an arrow pointing from the dependent component to the component it depends on.

**Deployment nodes**: These show the physical hardware or software environment in which the system or application is deployed. Deployment nodes can be depicted as boxes or clouds with the components deployed on them.

Overall, a UML component diagram provides *a high-level view of the system's structure, showing how the different components interact with each other and with the outside world*. It can be used to help design and communicate the system architecture to stakeholders and developers.

## Types of Interface in Components

In UML (Unified Modeling Language), interfaces are a way to define a contract or set of methods that a class or component must implement. In the context of components, there are two main types of interfaces:

Provided Interface: This interface specifies the services or operations that a component provides to its clients or other components that depend on it.

Required Interface: This interface specifies the services or operations that a component requires from other components to function properly.

The provided and required interfaces together form the interface of a component, which defines the set of services that the component provides to and requires from other components in a system. The interface of a component is a crucial part of its design, as it helps ensure that the component can interact with other components in a well-defined and consistent manner.

## Architectural Patterns

Architectural patterns are high-level, abstract design patterns that provide solutions to common problems that arise in software architecture. They are reusable solutions to design problems that can be applied to different systems or applications. These patterns help architects and designers to create a robust, scalable, and maintainable system by providing a proven set of guidelines and best practices. Patterns (also known as styles) are a means of representing, sharing and reusing knowledge.

## Common Architectural Patterns

-	Model-View-Controller (MVC)
-	Layered
-	Repository
-	Client-Server
-	Pipe and Filter

## Model-View-Controller (MVC) Pattern

The Model-View-Controller (MVC) pattern is a software architectural pattern that separates an application into three interconnected components: the model, the view, and the controller. The goal of the MVC pattern is to provide a clean separation of concerns between these three components, improving the modularity and maintainability of the application.

The model : manages the system data and associate operation with the date

The view : manages how the data is presented to the user

The controller : manages user interaction and passes to the model and the view

## Organization of MVC

![](https://csis.pace.edu/~marchese/SE616_New/L6/L6_files/image004.png)

## Web Application Architecture Using MVC

Web application architecture using the Model-View-Controller (MVC) pattern is a common approach for building scalable and maintainable web applications. The MVC pattern separates the application into three components: the model, the view, and the controller. Here's how this pattern can be applied to a web application architecture:

Model: The model represents the data and business logic of the application. In the context of a web application, the model would typically consist of a database or other data storage mechanism, and the logic for retrieving, storing, and manipulating data. The model should be designed to be reusable across different views and controllers.

View: The view represents the user interface of the application. In the context of a web application, the view would typically consist of HTML, CSS, and JavaScript, and would be responsible for presenting the data to the user. The view should be designed to be reusable across different controllers.

Controller: The controller acts as an intermediary between the model and the view. In the context of a web application, the controller would typically consist of server-side code, such as PHP, Python, or Ruby on Rails. The controller would be responsible for receiving requests from the user, retrieving data from the model, and passing that data to the view for presentation to the user. The controller should be designed to be reusable across different views.

The flow of data in the MVC pattern for a web application is as follows: the user interacts with the view, which sends a request to the controller. The controller retrieves data from the model, performs any necessary processing, and passes the data to the view for presentation to the user.

By separating the application into these three components, the MVC pattern allows for a clear separation of responsibilities, making it easier to maintain and extend the application over time. The model can be updated independently of the view and controller, the view can be updated independently of the model and controller, and the controller can be updated independently of the model and view. This makes it easier to develop, test, and maintain each component of the application separately, which ultimately results in a more robust and maintainable application.

## Example : MVC Architecture Used for a Dashboard

The Model-View-Controller (MVC) architecture can be used for a dashboard application in the following way:

Model: The model would be responsible for managing the data that is displayed on the dashboard. This could include data from multiple sources, such as databases, APIs, or other applications. The model would also be responsible for defining how the data can be manipulated, such as filtering, sorting, or aggregating data.

View: The view would be responsible for presenting the data to the user in a visual format, such as charts, tables, or graphs. The view would allow the user to interact with the data, such as selecting a date range or changing the type of chart being displayed.

Controller: The controller would act as an intermediary between the model and the view. It would receive input from the user through the view, such as selecting a date range, and then update the model accordingly. The controller would then update the view to reflect any changes made to the data.

The MVC architecture would allow for a clear separation of responsibilities between the different components of the dashboard application. This would make it easier to modify or extend the application without affecting the other components, and would also make it easier to maintain and understand the codebase. Additionally, the MVC architecture would allow for the reuse of components across different dashboards, improving the scalability and maintainability of the application.






## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

