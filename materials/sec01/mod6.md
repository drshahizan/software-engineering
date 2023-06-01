<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

<!---
Module 6: Architectural Design

Group LimaPuluh
1. Lim Jing Yong A22EC0182
2. Yong Wern Jie A22EC0121
3. Lee Soon Der A22EC0065
4. Marcus Joey Sayner A22EC0193
-->

# Module 6: Architectural Design

## Supplementary Notes 
### Topics
<b>- Architectural Design and Detailed Design</b><br>
<b>- Architectural Design Decision</b><br>
<b>- Architectural View</b><br>
<b>- Architectural Pattern</b><br>

# Architectural Design and Detailed Design

## Recap on Design Stage<br>
<img src="https://raw.githubusercontent.com/Wernjie0713/Image/main/Screenshot%202023-04-11%20224547.jpg" width="600" height="400">

## Architecture Analogy for Software vs. House?<br>
<li><b>Building Blocks</b></li>
In a house, the building blocks are the bricks, mortar, wood, and other materials used to construct the physical structure. In software, the building blocks are the components, libraries, frameworks, and other software artifacts used to construct the software system.
<br>
<br>
<li><b>Design</b></li>
In a house, the design determines the layout, size, shape, and other characteristics of the physical structure. In software, the design determines the layout, size, shape, and other characteristics of the software system.
<br>
<br>
<li><b>Components</b></li>
In a house, the components include the walls, floors, windows, doors, roof, and other physical elements that make up the physical structure. In software, the components include the modules, classes, functions, and other software artifacts that make up the software system.
<br>
<br>
<li><b>Interface</b></li>
In a house, the interface between the physical structure and the outside world includes the windows, doors, and other openings that allow people to enter and exit the house. In software, the interface between the software system and the outside world includes the user interface, APIs, and other mechanisms that allow users to interact with the software system.
<br>
<br>
<li><b>Maintenance</b></li>
In a house, maintenance involves repairing and replacing physical elements that wear out or become damaged over time. In software, maintenance involves updating and modifying the software system to address changing requirements and to fix bugs and other issues.
<br>
<br>
By understanding the analogy between software architecture and house architecture, software engineers can better understand the importance of good software architecture and the principles of good design. Just as a well-designed house is functional, efficient, and comfortable, a well-designed software system is functional, efficient, and easy to use and maintain.
<br><br>

## Analogy: Residential Styles<br>
<img src="https://raw.githubusercontent.com/Wernjie0713/Image/main/image.png">

## Design Discipline Activities
Segmented into <b>6 major activities</b>:
<br>

<b>1. Design the Support Services Architecture and Deployment Environment:</b>
This activity involves designing the architecture of the support services that the software system will need, such as networking, web servers, databases, and other infrastructure components. It also involves designing the deployment environment, which includes the hardware, software, and network configurations needed to deploy the software system.
<br>
<br>
<b>2. Design the Software Architecture:</b>
This activity involves designing the overall structure of the software system, including the components, modules, and subsystems that make up the system. It also involves defining the relationships between these components and the interfaces that they expose to each other and to external systems.
<br>
<br>
<b>3. Design the Use Case Realizations:</b>
Design the Use Case Realizations:
This activity involves designing the detailed behavior of the software system in response to the various use cases that it needs to support. This includes designing the user interfaces, the flow of control between different parts of the system, and the specific algorithms and data structures used to implement the system's functionality.
<br>
<br>
<b>4. Design the Database:</b>
This activity involves designing the database schema and data model that the software system will use to store and retrieve data. It includes defining the tables, fields, relationships, and constraints that will be used in the database, as well as designing the queries and other data access mechanisms used by the system.
<br>
<br>
<b>5. Design the System and User Interfaces:</b>
This activity involves designing the overall user interface of the software system, including the layout, navigation, and visual design of the system. It also involves designing the specific interactions that users will have with the system, such as data entry and retrieval, and defining the usability and accessibility requirements of the system.
<br>
<br>
<b>6. Design the System Security and Controls:</b>
This activity involves designing the security and access controls for the software system, including authentication, authorization, encryption, and other mechanisms used to protect the system and its data from unauthorized access or modification. It also involves designing the audit and logging mechanisms used to track system activity and detect potential security breaches.
<br>
<br>
By following a disciplined approach to these design activities, software engineers can ensure that the software system they are building meets the needs of its users, is scalable and maintainable, and provides a secure and reliable platform for its intended use.
<br><br>

## From Analysis to Design: Design Artefacts Metamodel<br>
Design model contains exactly one design system that contains many design subsystems (also known as <b>“package”</b> that can also be introduced in the analysis)
<br>
<img src="https://raw.githubusercontent.com/Wernjie0713/Image/main/Screenshot%202023-04-11%20225353.jpg" >
<br><br>

## Relationships between Analysis and Design (Model and System)
<b>Analysis and Design are Interrelated:</b>
Analysis and design are closely related activities that are both essential to the software development process. Analysis involves understanding the problem domain, defining requirements, and identifying constraints and assumptions. Design involves creating a solution that meets the identified requirements and constraints.
<br>
<br>
<b>Analysis Drives Design:</b>
The analysis phase provides the foundation for the design phase. The analysis phase identifies the requirements and constraints that the system must meet, and the design phase creates a solution that meets those requirements and constraints.
<br>
<br>
<b>Design is an Extension of Analysis:</b>
Design is an extension of analysis, building on the information and knowledge gained during the analysis phase. The design phase takes the requirements and constraints identified during analysis and transforms them into a concrete solution that meets the needs of the stakeholders.
<br>
<br>
<b>Models are Used in Both Analysis and Design:</b>
Models are used in both analysis and design to represent the system being developed. In the analysis phase, models are used to represent the problem domain, requirements, and constraints. In the design phase, models are used to represent the solution being developed.
<br>
<br>
<b>Iterative Process:</b>
The software development process is often iterative, with feedback and refinement occurring between analysis and design. As the design progresses, it may become apparent that additional analysis is needed to refine the requirements and constraints of the system. Similarly, as the analysis progresses, new design solutions may be identified that better meet the needs of the stakeholders.
<br>
<br>
In summary, analysis and design are two closely related activities that are essential to the software development process. Analysis provides the foundation for design, with design building on the information and knowledge gained during analysis. Models are used in both analysis and design, and the software development process is often iterative, with feedback and refinement occurring between analysis and design.
<br><br>

## Architectural Design: Design the Software Architecture
Architectural design is a key activity in the software development process, which involves understanding how a software system should be organized and designing the overall structure of that system. The main goal of architectural design is to identify the main structural components of a system and the relationships between them. This is important because the structure of a software system can have a significant impact on its quality attributes, such as its maintainability, scalability, reliability, and performance.
<br><br>
Architectural design is the critical link between design and requirements engineering because it helps to bridge the gap between the high-level requirements of a system and the detailed design of its components. By defining the overall structure of a system, architectural design helps to ensure that the system meets the requirements and constraints specified by stakeholders, while also providing a framework for the detailed design of the system components.
<br><br>
The output of the architectural design process is an architectural model that describes how the system is organized as a set of communicating components. This model includes a description of the main architectural components of the system, their interfaces, and their interactions. It also includes information about the allocation of functionality to these components and how they will be implemented and deployed.
<br><br>
To design a software architecture, software engineers need to have a deep understanding of the problem domain, the stakeholders' needs, and the technical options available for implementing the system. They also need to consider the quality attributes that are important for the system and how the architecture can be designed to achieve them. This involves making trade-offs between different design options and evaluating the impact of design decisions on the overall system.
<br><br>
In summary, architectural design is a critical activity in the software development process that involves designing the overall structure of a software system. It helps to bridge the gap between requirements engineering and detailed design, and provides a framework for designing the system components. The output of the architectural design process is an architectural model that describes the organization of the system as a set of communicating components. To design an effective software architecture, software engineers need to have a deep understanding of the problem domain, stakeholders' needs, and technical options available for implementing the system.
<br><br>

## Design Use Case Realizations<br>
Designing use case realizations involves creating a lower-level view of how a software system will support specific use cases. This process involves focusing on <b>two</b> main areas:
<br>
1. Class interactions that support a particular use case, which involves designing how the different classes in the system will interact with each other to achieve the goals of the use case.
2. Interactions among the software system, users, and external systems, which involves designing how the system will interact with its environment to support the use case.


Designing use case realizations typically requires multiple iterations, as software engineers refine and improve the design over time. They use UML design class diagrams and interaction diagrams, such as sequence diagrams, to document the design and ensure that it meets the requirements of the use case.
<br>

In summary, designing use case realizations involves creating a lower-level view of how a software system will support specific use cases. This involves designing how classes in the system will interact with each other, as well as how the system will interact with users and external systems. Software engineers typically use UML diagrams to document the design and refine it over time.
<br><br>

## Example: Architecture of a Packing Robot Control System<br>
<img src="https://raw.githubusercontent.com/Wernjie0713/Image/main/Screenshot%202023-04-11%20225437.jpg">

## Example: High Level Architecture of Weather Station System
<img src="https://raw.githubusercontent.com/Wernjie0713/Image/main/Screenshot%202023-04-11%20225501.jpg">

## Architectural Abstraction<br>
Architectural abstraction refers to the process of breaking down a software system into smaller components to better understand its structure and design. This process can be applied at different levels, such as the architecture of <b>individual programs</b> or the architecture of <b>large enterprise systems</b>.

Architecture in the small refers to the architecture of individual programs. This involves breaking down a program into smaller components or modules and understanding how they interact with each other to achieve the program's goals.

Architecture in the large refers to the architecture of complex enterprise systems that may include multiple programs, systems, and components. These enterprise systems are often distributed across different computers and may be owned and managed by different companies. Understanding the architecture of these systems involves analyzing how the different components interact with each other to achieve the system's overall goals.

In summary, architectural abstraction involves breaking down a software system into smaller components to better understand its structure and design. This process can be applied at different levels, such as the architecture of individual programs or the architecture of large enterprise systems. Understanding these architectures involves analyzing how the components interact with each other to achieve the system's goals.
<br><br>

## Advantages of Explicit Architecture<br>
Explicit architecture in software design has several advantages:

<b>1. Stakeholder communication:</b> An explicit architecture can serve as a focal point for communication among system stakeholders, helping to ensure that everyone involved in the project has a shared understanding of the system's structure and design.

<b>2. System analysis:</b> An explicit architecture makes it possible to analyze whether the system can meet its non-functional requirements, such as performance, scalability, and security. This analysis can help identify potential problems early in the design process, allowing them to be addressed before they become more costly to fix.

<b>3. Large-scale reuse:</b> An explicit architecture can be reusable across a range of systems. This means that designers can create product-line architectures that can be used across multiple products or systems, reducing design and development time and increasing efficiency.

<b>4. Improved quality:</b> Explicit architecture can help ensure that the system is designed to meet its functional and non-functional requirements. This can lead to higher quality software with fewer bugs, better performance, and greater user satisfaction.

<b>5. Reduced costs:</b> By providing a clear and explicit architecture, developers can avoid costly design mistakes and reduce the likelihood of system failures, leading to overall cost savings for the project.
<br><br>

## Architectural Representations<br>
When documenting software architectures, the most commonly used method is simple, informal block diagrams that show entities and relationships. However, these diagrams have been criticized for not providing enough information about the types of relationships between entities or the visible properties of entities in the architecture. To address this issue, designers can use architectural models that provide more detailed information about the system's components and how they interact with each other. The choice of representation depends on the requirements for model semantics, or the meaning and interpretation of the models used to describe the system's architecture.
<br><br>

## Box and Line Diagrams<br>
<li>Very <b>abstract</b> - they do not show the nature of component relationships nor the externally visible properties of the sub-systems.</li>
<li>However, <b>useful for communication</b> with stakeholders and for project planning.</li>
<br><br>

## Use of Architectural Models<br>
Architectural models can be used in various ways, including:

• <b>Facilitating communication:</b> A high-level architectural view of a system is useful for communicating with stakeholders and project planning. It provides an abstract view of the system that stakeholders can easily understand and discuss without being overwhelmed by details.

• <b>Documenting design:</b> Architectural models are used to document an architecture that has been designed. The aim is to create a complete system model that shows the different components in a system, their interfaces, and their connections.

• <b>Analysis and evaluation:</b> Architectural models are used to analyze and evaluate the system's properties and behavior. This helps to ensure that the system meets its requirements and functions as intended.

• <b>Performance prediction:</b> Architectural models are used to predict the system's performance. This helps to ensure that the system performs adequately under expected workloads and identifies potential bottlenecks.

• <b>Design exploration:</b> Architectural models are used to explore alternative system designs. This helps to identify the most suitable design that meets the system's requirements and constraints.

• <b>Code generation:</b> Architectural models are used to generate code automatically. This reduces the time and effort required to develop and maintain software systems.
<br><br>

# Architectural Design Decision


<p><b>Architecture design decision</b> refers to <i>the process of making key choices during the design and development of a software or system architecture</i>. These decisions have a significant impact on the overall structure and behavior of the system and can affect its quality attributes such as performance, scalability, maintainability, security, and usability.</p>

  

<p>Architectural design decisions involve evaluating trade-offs among various options based on factors such as requirements, constraints, technical feasibility, cost, and risks. These decisions are often documented in an architectural design document and communicated to stakeholders to ensure alignment and understanding.</p>

  

<p>Examples of architecture design decisions include choosing a programming language, selecting a database management system, deciding on the use of microservices or monolithic architecture, and determining the deployment model (on-premises or cloud-based).</p>


<h1>QNA</h1>

<hr>

<h3  align="center"><b>Question</b> : Is there a generic application architecture that can act as a template for the system that is being designed?</h3>

<p>Yes, there are several generic application architecture templates that can be used as a starting point when designing a system. These templates are often referred to as architectural patterns, and they provide a set of proven solutions to common design problems. Some examples of widely used architectural patterns include:</p>

- Model-View-Controller (MVC) pattern: This pattern separates an application into three interconnected components: the model (data and business logic), the view (user interface), and the controller (handles user input and manages interactions between the model and the view).

  

- Layered architecture pattern: This pattern separates an application into layers, where each layer is responsible for a specific set of tasks. Typically, there is a presentation layer (user interface), business logic layer, and data access layer.

  

= Service-oriented architecture (SOA) pattern: This pattern breaks an application down into smaller, modular services that communicate with each other through a network. Each service performs a specific task and can be developed, deployed, and scaled independently.

  

- Microservices architecture pattern: This pattern is similar to SOA but places a stronger emphasis on independently deployable and scalable services. Microservices are typically smaller in scope than SOA services and often communicate with each other through lightweight protocols like REST.

  

<p>It's important to note that while these architectural patterns can be helpful in providing a starting point for system design, they are not one-size-fits-all solutions. The specific needs and requirements of the system being designed should always be taken into consideration, and the architecture should be tailored accordingly.</p>

<br>
  

<h3  align="center"><b>Question</b> : How will the system be distributed across hardware cores or processors?</h3>

  

<p>The distribution of a system across hardware cores or processors will depend on several factors, including the system requirements, the available hardware resources, and the design decisions made during the development process. In general, the distribution of a system across hardware cores or processors can be achieved through parallelization or through the use of distributed computing techniques.</p>

  

<p>Parallelization involves dividing a system's workload into smaller, independent tasks that can be executed concurrently across multiple cores or processors. This approach can improve system performance and scalability by reducing processing time and enabling the system to handle larger workloads. Parallelization can be achieved through techniques such as multithreading, multiprocessing, and vectorization.</p>

  

<p>

Distributed computing techniques involve dividing a system's workload across multiple machines connected through a network. This approach can improve system reliability, fault tolerance, and scalability by enabling the system to handle larger workloads and providing redundancy in case of hardware failures. Distributed computing techniques can be achieved through approaches such as client-server architecture, peer-to-peer architecture, and message passing.</p>

  

<p>

The choice between parallelization and distributed computing techniques will depend on the specific requirements of the system being developed. If the system requires high performance and is running on a single machine with multiple cores, parallelization may be the best approach. If the system requires high availability and redundancy, distributed computing techniques may be the better option. In many cases, a combination of both approaches may be used to achieve the desired system performance and reliability.</p>

  

<h3  align="center"><b>Question</b> : What architectural patterns or styles might be used?</h3>

There are several architectural patterns or styles that can be used to design a software system, depending on the specific requirements and constraints of the system being developed. Here are some examples of commonly used patterns or styles:

1.  Layered Architecture: This pattern separates the system into layers, where each layer is responsible for a specific set of tasks. Typically, there is a presentation layer (user interface), business logic layer, and data access layer.
    
2.  Model-View-Controller (MVC): This pattern separates an application into three interconnected components: the model (data and business logic), the view (user interface), and the controller (handles user input and manages interactions between the model and the view).
    
3.  Microservices Architecture: This pattern divides the system into smaller, independent services that can be developed, deployed, and scaled independently. Each service performs a specific task and communicates with other services through lightweight protocols like REST.
    
4.  Event-Driven Architecture: This pattern is based on the idea that events trigger actions within the system. The system is designed to react to events and initiate actions in response to them.
    
5.  Service-Oriented Architecture (SOA): This pattern breaks the system down into smaller, modular services that communicate with each other through a network. Each service performs a specific task and can be developed, deployed, and scaled independently.
    
6.  Domain-Driven Design (DDD): This pattern focuses on the domain model of the system and aims to create a clear and well-defined understanding of the problem domain. The system is designed around the domain model, with each component representing a specific aspect of the domain.
    

These are just a few examples of architectural patterns or styles that can be used in software system design. The choice of pattern or style will depend on the specific requirements, constraints, and goals of the system being developed.

<h3  align="center"><b>Question</b> : What strategy will be used to control the operation of the components in the system?</h3>

The strategy used to control the operation of components in a system will depend on the specific requirements and design decisions of the system. Here are some common strategies that can be used:

1.  Centralized Control: This strategy involves a central component that controls the operation of all other components in the system. The central component can be responsible for coordinating communication between components, managing resources, and enforcing system-wide policies.
    
2.  Distributed Control: This strategy involves distributing control across multiple components in the system. Each component may be responsible for managing its own resources, and communication between components may be peer-to-peer or through a messaging system.
    
3.  Hierarchical Control: This strategy involves organizing components into a hierarchical structure, with higher-level components responsible for coordinating the operation of lower-level components. This approach can help to simplify system management and improve scalability.
    
4.  Reactive Control: This strategy involves components reacting to events or changes in the system environment. The components may be designed to adapt to changing conditions and adjust their behavior accordingly.
    
5.  Proactive Control: This strategy involves components proactively monitoring the system environment and taking action to prevent potential problems or errors. This approach can help to improve system reliability and reduce downtime.
    

The choice of strategy will depend on several factors, including the system requirements, the complexity of the system, and the desired level of control and flexibility. In many cases, a combination of strategies may be used to achieve the desired system behavior and performance.

<h3  align="center"><b>Question</b> : How should the architecture of the system be documented?</h3>
                                                                                              

# Architectural View
<h2>The 4 + 1 View Model</h2>
The 4 + 1 View Model of Software Architecture comprises different perspectives that showcase the system's key features and functions.
<ol type="A">
    <li>The Logical view highlights the fundamental abstractions of the system as objects or object classes. </li>
    <li>The Process view illustrates how the system is composed of interconnected processes during runtime.</li>
    <li>The Development view presents how the software is divided and organized for development purposes.</li>
    <li>The Physical view depicts the hardware components of the system and how software components are distributed across processors. </li>
</ol>

Finally, the +1 element relates these different views using use cases or scenarios to provide a more comprehensive understanding of the system.

<img src="https://i.stack.imgur.com/5zzFg.gif" width="600" height="400">

<h2>Two type of diagram</h2>

<ul>
  <li>Component diagram</li> 
Models the dependencies
between the software components that constitute the
system
  <li>Deployment diagram</li>
Models the physical
computational nodes on which the software will be
deployed, and the relationships between those nodes
</ul>

<h2>Relationship between Implementation Model and Design Model</h2>

<img src="![Screenshot 2023-04-12 204236](https://user-images.githubusercontent.com/129196395/231461033-6681d1b7-6cdc-45fa-9400-82063a1f2811.png)
"
     
<h3>Relationship between Design Subsystems and Implementation Subsystems</h3>

There is a one-to-one «trace» relationship between design subsystems and implementation subsystems.Design subsystems contain design classes but
implementation subsystems contain components that package those classes.

<h2>COMPONENT DIAGRAM AS AN IMPLEMENTATION VIEW</h2>

<h3>UML Component Diagram</h3>

<ul>
  <li>Used to model the top-level view of the system design in terms of components and dependencies among the components.</li>
  <li>Components can be linkable libraries, executables.</li>
  <li>Components can be identified based on influence from the system environment e.g. existing framework used for the software, connection to
legacy system or external system, hardware driver used and also if the software used any web serviceavailable</li>
</ul>

<h3><b>Types of Interface in Components</b></h3>

<ul>
  <li>A provided interface is modeled using the lollipop notation</li>
  <li>A required interface is modeled using the socket notation</li>
</ul>

<h3>Influence from the System Environment</h3>
<ul>
  <li>Existing Framework</li>
  The impact of the system's environment on its development and operation is significant, particularly when considering existing frameworks. These frameworks, which are pre-established systems or structures, can greatly influence the design and implementation of a new system. Therefore, understanding the existing frameworks in the system environment is crucial in developing a successful and effective system.
  <li>Legacy System</li>
  The system environment, specifically legacy systems, can have a significant impact on the development and operation of a new system. Legacy systems are older, established systems that may still be in use, and as such, they can impose constraints or requirements on the development of a new system. Therefore, it is important to consider legacy systems when designing and implementing a new system to ensure compatibility and integration with the existing system environment.
  <li>External System</li>
  The system environment can be influenced by external systems, which are systems that are outside of the scope of the system being developed. External systems can impact the design and functionality of the new system, as it may need to interact with these external systems to achieve its goals. Therefore, it is important to consider the presence and requirements of external systems when developing a new system to ensure effective communication and integration with these systems.
  <li>Hardware Driver</li>
  The system environment can be influenced by hardware drivers, which are software components that allow the operating system to communicate with hardware devices. Hardware drivers can impact the development and operation of a new system, as they may require specific software or hardware configurations. Therefore, it is important to consider hardware drivers when designing and implementing a new system to ensure compatibility and proper communication with the hardware devices in the system environment.
  <li>Web Service</li>
  The system environment can be influenced by web services, which are software systems that enable communication and exchange of data between different devices or applications over the internet. Web services can impact the development and operation of a new system, as it may need to interact with these services to perform certain tasks. Therefore, it is important to consider the presence and requirements of web services when developing a new system to ensure effective communication and integration with these services.
</ul>

<h2>Combination of Architectural Style: Layered, Subystems and Components</h2>

![image](https://user-images.githubusercontent.com/129196395/231467787-14151dcd-1831-4ee3-91ed-fd2a2ce2b71c.png)

<h2>Two-Layer Architectural Design of Internet Systems</h2>

![image](https://user-images.githubusercontent.com/129196395/231468230-087ada3e-3d23-4de1-ad0e-09f877efbac6.png)

<h2>Three-Layer Architectural Design of Internet Systems</h2>

![image](https://user-images.githubusercontent.com/129196395/231468930-35865af7-f7ce-4e9e-ae8b-e5b7f0c0c366.png)

<h2>Component Diagram for Online Shopping</h2>

![image](https://user-images.githubusercontent.com/129196395/231469137-01837f6c-cd8d-4353-b4f9-39e7df8d1d1a.png)

# Architectural Pattern
<ul>
    <li><h2>Model-View-Controller</h2></li>
    <p>Separates an application into three main components: Model, View, and Controller</p>
        <ul>
            <li>Model: Data and business logic of the application. Responsible for managing data, processing business logic, and interacting with data sources such as databases, APIs, or external services. The Model is independent of the user interface and communicates with the View and Controller through well-defined interfaces.</li>
            <li>View: Responsible for rendering the user interface and presenting data to the user. Displays the data from the Model to the user and provides a way for the user to interact with the application. View receives input from the user and communicates it to the Controller for further processing.</li>
            <li>Controller: Controller acts as an intermediary between the Model and View. It receives input from the View, processes it, updates the Model, and communicates back to the View to update the user interface. Controller also handles user interactions, such as handling user input, validating data, and making decisions about how to update the Model and View.</li>
        </ul>
<br>
    <li><h2>Layered</h2></li>
    <p>Involves organizing the application into distinct layers or tiers based on their responsibilities and functionality. Each layer performs a specific set of tasks, and communication between layers follows a predefined set of rules, typically with higher layers depending on lower layers.</p>
    <ul>
        <li>Presentation Layer: User Interface (UI) layer, responsible for rendering the user interface and handling user interactions</li>
        <li>Application Layer: Business Logic layer. Contains the core business logic and processing rules of the application. It encapsulates application-specific logic and orchestrates interactions between the Presentation Layer and the Data Layer. Contains business rules, domain-specific logic, and data validation.</li>
        <li>Domain Layer: Model layer, represents the core domain objects and business entities of the application. This Domain Layer is typically designed to be independent of the other layers and contains the domain models or entities, as well as interfaces for interacting with these models.</li>
        <li>Data Layer: Persistence Layer, layer is responsible for handling data storage and retrieval. Includes components such as databases, data access objects (DAOs), and ORMs (Object-Relational Mappers). The Data Layer is responsible for abstracting the underlying data storage and providing interfaces for the upper layers to interact with the data.</li>
    </ul>
<br>
    <li><h2>Repository</h2></li>
    <p>Also known as the Repository Design pattern. Provides an abstraction layer between the data access logic and the rest of the application. Commonly used in applications that need to interact with persistent data sources, such as databases, APIs, or external services, and aims to separate the data access logic from the business logic, promoting maintainability, testability, and modularity.</p>
    <ul>
        <li>Repository: Repository is responsible for providing a high-level abstraction over the data source, encapsulating the details of data storage and retrieval. Consists of a well-defined interface that allows the application to perform operations such as create, read, update, and delete (CRUD) on the data.</li>
        <li>Data Sources: Data Source represents the persistent storage where the data is stored, such as a database, API, or external service. Communicates with the Data Source to perform data operations.</li>
        <li>Domain Objects: Domain Objects represent the business entities or data models of the application. These are the objects that are manipulated by the Repository and used by the application to represent and manipulate data.</li>
    </ul>
    <li><h2>Client-Server</h2></li>
    <p>Divides an application into two main components: the client and the server. The client represents the user interface or front-end, while the server represents the back-end that processes requests, manages data, and performs business logic.</p>
    <ul>
        <li>Client: The client represents the user interface or front-end of the application, typically responsible for rendering the user interface, capturing user input, and sending requests to the server for processing. Clients can be various types of devices, such as desktop computers, mobile devices, or web browsers.</li>
        <li>Server: The server represents the back-end of the application. Responsible for processing requests from clients, managing data storage and retrieval, and performing business logic. Servers can be physical machines or virtual servers that run software applications and handle requests from clients.</li>
        <li>Communication Protocol: Defines the rules and conventions for communication between clients and servers. It includes protocols such as HTTP, TCP/IP, REST (Representational State Transfer), SOAP (Simple Object Access Protocol), and others. The communication protocol allows clients and servers to exchange data and requests in a standardized and interoperable manner.</li>
    </ul>
    <li><h2>Pipe and filter</h2></li>
    <p>The Pipe and Filter Architecture pattern is a software architectural pattern that involves processing data through a series of interconnected components, called filters, in a sequential manner. Each filter performs a specific operation on the data and passes it to the next filter in the pipeline until the data has been processed through all the filters.</p>
    <ul>
        <li>Source: The source is the component that provides the input data to the pipeline. It could be a data source such as a file, a database, or an external service, or it could be generated by the application itself.</li>
        <li>Filter: A filter is a component that performs a specific operation on the input data. Filters can perform tasks such as filtering out unwanted data, transforming data into a different format, validating data, or aggregating data. Filters are connected in a sequential manner, forming a processing pipeline, where the output of one filter is passed as input to the next filter.</li>
        <li>Sink: The sink is the component that receives the processed data from the last filter in the pipeline. It could be a data sink such as a file, a database, or an external service, or it could be consumed by the application itself.</li>
        <li>Connector: Connectors are the communication channels or interfaces that connect filters in the pipeline. They are responsible for passing data between filters and coordinating the flow of data through the pipeline. Connectors can be implemented in various ways, such as in-memory pipes, sockets, message queues, or other communication mechanisms.</li>
    </ul>
</ul>


## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)


