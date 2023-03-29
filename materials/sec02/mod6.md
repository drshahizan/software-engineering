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
A UML component diagram is a type of diagram that **shows the structure** of a system or application in terms of its components and the relationships between them. Components are modular parts of the system that perform specific functions and can be assembled together to create the larger system. Here are some key elements that you might see in a UML component diagram:

**Components**: These are the building blocks of the system, representing the modular parts that perform specific functions. Each component can have its own interface, ports, and properties.

**Interfaces**: These define the methods and services that a component provides to other components or to the outside world. Interfaces can be depicted as a small circle on the edge of a component shape.

**Ports**: These are specific points on a component where connections can be made to other components or to the outside world. Ports can be depicted as small squares or circles on the edge of a component shape.

**Connectors**: These represent the relationships between components, showing how they communicate and interact with each other. Connectors can be depicted as lines with arrows or other symbols to show the direction of communication.

**Dependencies**: These show that one component depends on another component for its functionality. Dependencies can be depicted as dashed lines with an arrow pointing from the dependent component to the component it depends on.

**Deployment nodes**: These show the physical hardware or software environment in which the system or application is deployed. Deployment nodes can be depicted as boxes or clouds with the components deployed on them.

Overall, a UML component diagram provides *a high-level view of the system's structure, showing how the different components interact with each other and with the outside world*. It can be used to help design and communicate the system architecture to stakeholders and developers.






## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

