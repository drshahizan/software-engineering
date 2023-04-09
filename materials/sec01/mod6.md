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
<hr>

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

