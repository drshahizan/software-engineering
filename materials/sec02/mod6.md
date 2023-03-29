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
- [Example : Partitioned Subsytems in Four Layer Architecture](#example-partitioned-subsytems-in-four-layer-architecture)
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


# ARCHITECTURAL DESIGN DECISION 

## Architectural Design Decisions

Architectural design decisions refer to the choices made during the process of designing a building or structure. These decisions can have a significant impact on the functionality, aesthetics, and cost-effectiveness of the building.

Some examples of architectural design decisions include:

Building orientation: The orientation of a building can have a significant impact on its energy efficiency. For example, a building with large windows facing south can take advantage of natural sunlight to reduce the need for artificial lighting and heating.

Material selection: The choice of building materials can impact the durability, maintenance, and aesthetic of a building. For example, using sustainable materials such as bamboo or recycled steel can reduce the environmental impact of a building.
Space planning: The arrangement of spaces within a building can impact its functionality and efficiency. For example, designing an open floor plan can encourage collaboration and communication between occupants.

Structural system: The choice of structural system can impact the cost, speed of construction, and aesthetic of a building. For example, a steel frame structure can be faster and more cost-effective to build than a traditional masonry structure.

Building envelope: The design of the building envelope, including the roof, walls, and windows, can impact the building's energy efficiency, ventilation, and acoustics.

Sustainable design features: Incorporating sustainable design features such as green roofs, solar panels, and rainwater harvesting systems can reduce a building's environmental impact and operating costs.
Accessibility: Designing for accessibility ensures that a building can be used by people with a wide range of abilities. This includes features such as ramps, elevators, and wide doorways.


## Architecture Reuse 

Architecture reuse refers to the practice of using existing architectural designs, components, or systems in new construction projects. The goal of architecture reuse is to improve the efficiency, cost-effectiveness, and sustainability of construction by reducing the need for new designs and components.

Some examples of architecture reuse include:

Standardization of building components: Standardizing building components such as doors, windows, and HVAC systems can reduce design and construction time, as well as costs.

Modular construction: Modular construction involves the use of pre-fabricated modules or components that can be assembled on-site. This can reduce construction time, costs, and waste.

Adaptive reuse: Adaptive reuse involves the conversion of existing buildings or structures for new uses. This can reduce the need for new construction and preserve historic or culturally significant buildings.

Design libraries: Design libraries are collections of pre-designed architectural plans and components that can be used in new construction projects. This can reduce design time and costs, as well as ensure consistency and quality.

Building information modeling (BIM): BIM involves the use of digital models to design, construct, and manage buildings. BIM can facilitate architecture reuse by allowing designers to easily modify and reuse existing designs and components.

By promoting architecture reuse, construction projects can become more efficient, cost-effective, and sustainable. This can also lead to greater consistency and quality in construction projects, as well as the preservation of historic and cultural landmarks.


## Architecture and System Characteristics (Non-Functional Requirements)

Architecture and system characteristics, also known as non-functional requirements, refer to the qualities or attributes that a software system or architecture should possess. These characteristics define how the system behaves or performs, rather than what it does. Here are some examples of architecture and system characteristics:

Performance: This refers to the ability of a system to process a large number of transactions or requests within a given time frame. Performance characteristics include throughput, response time, and scalability.

Security: This refers to the ability of a system to protect against unauthorized access or malicious attacks. Security characteristics include confidentiality, integrity, and availability.

Reliability: This refers to the ability of a system to perform consistently and predictably under normal and abnormal conditions. Reliability characteristics include fault tolerance, recoverability, and availability.

Maintainability: This refers to the ability of a system to be easily modified, tested, and repaired. Maintainability characteristics include modularity, testability, and simplicity.

Usability: This refers to the ability of a system to be easily learned, used, and understood by its users. Usability characteristics include learnability, efficiency, and satisfaction.

Interoperability: This refers to the ability of a system to communicate and work with other systems or components. Interoperability characteristics include compatibility, adaptability, and portability.

Scalability: This refers to the ability of a system to handle increased workload or users without compromising performance or reliability.



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


## Layered Architecture

The layered architecture style is one of the most common architectural styles. The idea behind
Layered Architecture is that modules or components with similar functionalities are
organized into horizontal layers. As a result, each layer performs a specific role within the
application.

The layered architecture style does not have a restriction on the number of layers that the
application can have, as the purpose is to have layers that promote the concept of separation of
concerns. The layered architecture style abstracts the view of the system as a whole while
providing enough detail to understand the roles and responsibilities of individual layers and
the relationship between them. 


## Layered Architecture Pattern

The Layered Architecture pattern is a software architecture pattern that structures an application into separate layers that interact with each other in a hierarchical manner. Each layer provides a specific set of services to the layer above it and consumes services from the layer below it. The Layered Architecture pattern typically includes three layers:

Presentation Layer: This layer is responsible for providing the user interface to the application. It is the layer that interacts directly with the user, and its main responsibility is to present the data to the user in a meaningful way. This layer typically includes user interface components, such as forms, web pages, and views.

Business Layer: This layer is responsible for implementing the business logic of the application. It contains the application's rules and policies that govern the behavior of the application. This layer typically includes business components, such as services, managers, and controllers.

Data Layer: This layer is responsible for storing and retrieving data. It interacts with the application's data sources, such as databases, files, or web services. This layer typically includes data access components, such as repositories, DAOs (Data Access Objects), and gateways.

The main advantage of using the Layered Architecture pattern is that it provides a clear separation of concerns and a high degree of modularity, which makes it easier to maintain, test, and evolve the application. The separation of concerns also makes it easier to distribute the work among multiple developers or teams. Another advantage of the Layered Architecture pattern is that it allows for greater flexibility in choosing the implementation technology for each layer, which can lead to better performance, scalability, and reliability.

However, one potential downside of the Layered Architecture pattern is that it can lead to excessive coupling between layers, especially if the layers are not well defined and do not adhere to their responsibilities strictly. Another potential downside is that it can result in an increase in the number of layers, which can lead to an increase in complexity and difficulty in maintaining the application.



## Generic Layered Architecture

![]( https://csis.pace.edu/~marchese/SE616_New/L6/L6_files/image008.png )



## Example : Architecture of iLearn System

Presentation layer : Browse-based user interface, iLearn app
Configuration services layer : Group management, Application management, Identity management
Application services layer : Email, Messaging, Video conferencing, Newspaper archive, Word processing, Simulation, Video storage, Resource finder, Spreadsheet, Virtual learning environment, History archive
Utility services layer : Authentication, Logging and monitoring, Interfacing, User storage, Application storage, Search


## Example : Architecture of Mentcare System

Presentation layer : Web browser, Login, Role checking, Form and menu manager, Data validation
Business layer : Security management, Patient information management, Data import and export Report generation
Data access layer : Transaction management, Patient database

## Three and Four Layer Architectures

Three layer architecture only consists of :
-	Presentation layer
-	Business logic layer
-	Database layer

But, business logic layer can be split into two layers which is application logic layer and domain layer, 

Therefore, four layer architecture consists of :
-	Presentation layer
-	Application logic layer
-	Domain layer
-	Database layer

## Example : Partitioned Subsytems in Four Layer Architecture

Partitioned subsystems is a loosely coupled subsystems, each delivering a sigle service or coherent group of services. 
Example of partitioned subsystems is an agate campaign management system.





## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

