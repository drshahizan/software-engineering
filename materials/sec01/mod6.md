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
- Architectural Design and Detailed Design
- Architectural Design Decision
- Architectural View
- Architectural Pattern

#### Architectural Design and Detailed Design
<br>
#### Architecture Analogy for Software vs. House?
<img src="https://media.licdn.com/dms/image/C5612AQEH0VXsQ_hVag/article-cover_image-shrink_600_2000/0/1520203112384?e=2147483647&v=beta&t=wePYqDGqj2_M-0I8NfkVqEZDAppoKdEIR6RILQ-z7Us" width="300" height="200">
<br>
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
<br>
#### Design Discipline Activities
<li>Segmented into <b>6 major activities</b>:</li>
<br>
<b>Design the Support Services Architecture and Deployment Environment:</b>
This activity involves designing the architecture of the support services that the software system will need, such as networking, web servers, databases, and other infrastructure components. It also involves designing the deployment environment, which includes the hardware, software, and network configurations needed to deploy the software system.
<br>
<br>
<b>Design the Software Architecture:</b>
This activity involves designing the overall structure of the software system, including the components, modules, and subsystems that make up the system. It also involves defining the relationships between these components and the interfaces that they expose to each other and to external systems.
<br>
<br>
<b>Design the Use Case Realizations:</b>
Design the Use Case Realizations:
This activity involves designing the detailed behavior of the software system in response to the various use cases that it needs to support. This includes designing the user interfaces, the flow of control between different parts of the system, and the specific algorithms and data structures used to implement the system's functionality.
<br>
<br>
<b>Design the Database:</b>
This activity involves designing the database schema and data model that the software system will use to store and retrieve data. It includes defining the tables, fields, relationships, and constraints that will be used in the database, as well as designing the queries and other data access mechanisms used by the system.
<br>
<br>
<b>Design the System and User Interfaces:</b>
This activity involves designing the overall user interface of the software system, including the layout, navigation, and visual design of the system. It also involves designing the specific interactions that users will have with the system, such as data entry and retrieval, and defining the usability and accessibility requirements of the system.
<br>
<br>
<b>Design the System Security and Controls:</b>
This activity involves designing the security and access controls for the software system, including authentication, authorization, encryption, and other mechanisms used to protect the system and its data from unauthorized access or modification. It also involves designing the audit and logging mechanisms used to track system activity and detect potential security breaches.

By following a disciplined approach to these design activities, software engineers can ensure that the software system they are building meets the needs of its users, is scalable and maintainable, and provides a secure and reliable platform for its intended use.
#### Architectural Design Decision
<hr>

#### Architectural View
<hr>
<ol type="A">
    <li>4+1 View Model</li>
    <li></li>
    <li></li>
</ol>

#### Architectural Pattern
<hr>
<ul>
  <li>Model-View-Controller</li>
    <p>>Separates an application into three main components: Model, View, and Controller</p>
        <ul>
            <li>Model: Data and business logic of the application. Responsible for managing data, processing business logic, and interacting with data sources such as databases, APIs, or external services. The Model is independent of the user interface and communicates with the View and Controller through well-defined interfaces.</li>
            <li>View: Responsible for rendering the user interface and presenting data to the user. Displays the data from the Model to the user and provides a way for the user to interact with the application. View receives input from the user and communicates it to the Controller for further processing.</li>
            <li>Controller: Controller acts as an intermediary between the Model and View. It receives input from the View, processes it, updates the Model, and communicates back to the View to update the user interface. Controller also handles user interactions, such as handling user input, validating data, and making decisions about how to update the Model and View.</li>
        </ul>
<br>
  <li>Layered</li>
    <p>>Involves organizing the application into distinct layers or tiers based on their responsibilities and functionality. Each layer performs a specific set of tasks, and communication between layers follows a predefined set of rules, typically with higher layers depending on lower layers.</p>
    <ul>
        <li>Presentation Layer: User Interface (UI) layer, responsible for rendering the user interface and handling user interactions</li>
        <li>Application Layer: Business Logic layer. Contains the core business logic and processing rules of the application. It encapsulates application-specific logic and orchestrates interactions between the Presentation Layer and the Data Layer. Contains business rules, domain-specific logic, and data validation.</li>
        <li>Domain Layer: Model layer, represents the core domain objects and business entities of the application. This Domain Layer is typically designed to be independent of the other layers and contains the domain models or entities, as well as interfaces for interacting with these models.</li>
        <li>Data Layer: Persistence Layer, layer is responsible for handling data storage and retrieval. Includes components such as databases, data access objects (DAOs), and ORMs (Object-Relational Mappers). The Data Layer is responsible for abstracting the underlying data storage and providing interfaces for the upper layers to interact with the data.</li>
    </ul>
<br>
  <li>Repository</li>
    <p>>Also known as the Repository Design pattern. Provides an abstraction layer between the data access logic and the rest of the application. Commonly used in applications that need to interact with persistent data sources, such as databases, APIs, or external services, and aims to separate the data access logic from the business logic, promoting maintainability, testability, and modularity.</p>
    <ul>
        <li>Repository: Repository is responsible for providing a high-level abstraction over the data source, encapsulating the details of data storage and retrieval. Consists of a well-defined interface that allows the application to perform operations such as create, read, update, and delete (CRUD) on the data.</li>
        <li>Data Sources: Data Source represents the persistent storage where the data is stored, such as a database, API, or external service. Communicates with the Data Source to perform data operations.</li>
        <li>Domain Objects: Domain Objects represent the business entities or data models of the application. These are the objects that are manipulated by the Repository and used by the application to represent and manipulate data.</li>
    </ul>
  <li>Client-Server</li>
    <p>>Divides an application into two main components: the client and the server. The client represents the user interface or front-end, while the server represents the back-end that processes requests, manages data, and performs business logic.</p>
    <ul>
        <li>Client: The client represents the user interface or front-end of the application, typically responsible for rendering the user interface, capturing user input, and sending requests to the server for processing. Clients can be various types of devices, such as desktop computers, mobile devices, or web browsers.</li>
        <li>Server: The server represents the back-end of the application. Responsible for processing requests from clients, managing data storage and retrieval, and performing business logic. Servers can be physical machines or virtual servers that run software applications and handle requests from clients.</li>
        <li>Communication Protocol: Defines the rules and conventions for communication between clients and servers. It includes protocols such as HTTP, TCP/IP, REST (Representational State Transfer), SOAP (Simple Object Access Protocol), and others. The communication protocol allows clients and servers to exchange data and requests in a standardized and interoperable manner.</li>
    </ul>
  <li>Pipe and filter</li>
    <p>>The Pipe and Filter Architecture pattern is a software architectural pattern that involves processing data through a series of interconnected components, called filters, in a sequential manner. Each filter performs a specific operation on the data and passes it to the next filter in the pipeline until the data has been processed through all the filters.</p>
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

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

