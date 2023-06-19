<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&countColor=%23263759&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering)


Don't forget to hit the :star: if you like this repo.


Module 7: Object-Oriented Detailed Design

Group Four Peas in Pod
1. Bernice Lim Jing Xuan , A22EC0038
2. Kek Jesslyn, A22EC0057
3. Soh Han Wei , A22EC0273
4. Tan Jun Yuan, A22EC0107



# Module 7: Object-Oriented Detailed Design 

## Important part of this topic:
<ul type=bullet>
  <li>To understand the relationship among analysis, design and implementation</li>
  <li>To comprehend object-oriented design principles</li>
  <li>To further understand object-oriented design using UML</li>
  <li>To elaborate the related diagrams from analysis in design phase in use case realization</li>
</ul>

## 7.1 Relationships among analysis, design and implementation
<p>
  Analysis, design, and implementation are three important phases of the software development life cycle (SDLC). Each phase plays a critical role in the overall process of software development.
</p>

<ul type=circle>
  <li>
    Analysis involves the process of understanding and defining the requirements and objectives of the software to be developed. It involves studying the existing system, identifying problems and opportunities, and defining the requirements that the new system should meet. The output of this phase is a comprehensive analysis report, which serves as a foundation for the next phase.
  </li>
  <li>
    Design is the process of creating a solution that meets the requirements defined in the analysis phase. It involves designing the architecture, modules, interfaces, and data structures of the software. The design phase is critical because it sets the stage for the implementation phase. The output of this phase is a design document that contains all the technical details of the software to be developed.
  </li>
  <li>
    Implementation is the process of writing the code, integrating the modules, and testing the software. It involves translating the design into actual code and making sure that the software is functioning as expected. This phase requires technical expertise and attention to detail. The output of this phase is the final software product, which can then be deployed and used by the end-users.
  </li>
</ul>

<p>
  In summary, analysis defines the requirements of the software, design creates the solution to meet those requirements, and implementation makes the solution a reality by writing the actual code. All three phases are interdependent and require careful planning and execution to ensure the success of the software development project.
</p>

### 7.1.1 Design and Implementation
<p>Software design and implementation is the stage in the software engineering process at which an <b>executable software system</b> is developed.
  
 <ul type="circle">
    <li>Software design is a creative activity that identifies software components and their relationships, based on a customer's requirements</li>
    <li>Software design is the process of creating a detailed plan or blueprint for how a software application will be developed. It involves identifying the requirements of the software, analyzing them, and then creating a design that will meet those requirements. The goal of software design is to create a solution that is robust, scalable, maintainable, and efficient. The design phase is critical because it sets the stage for the implementation phase.</li>
    <li>Software implementation is the process of realizing the design as a program</li>
    <li>Software implementation is the process of turning the design into a working software application. It involves writing code, integrating different modules, and testing the software to ensure it functions as expected. The implementation phase requires technical expertise, attention to detail, and the ability to work with different programming languages, software tools, and libraries. Once the software is implemented, it can be deployed and used by end-users.</li>
    <li>Both software design and implementation are critical phases of the software development life cycle (SDLC). Software design provides a blueprint for how the software will be developed, while software implementation brings that design to life. To ensure the success of a software development project, both phases must be carefully planned and executed.</li>
 </ul>
</p>

#### Some specification of each design stage
<ul type="dics">
 <li>
   <ol type="a">Design inputs
     <li>Platform information</li>
     <li>Requirement specification</li>
     <li>Data description</li>
   </ol>
 </li>
  
 <br>
  
 <li>
   <ol type="a">Design activities
     <li>Architectural</li>
     <li>Interface design</li>
     <li>Component design</li>
     <li>Database design</li>
   </ol>
 </li>
  
 <br>

 <li>
   <ol type="a">Design outputs
     <li>System architecture</li>
     <li>Database specification</li>
     <li>Interface specification</li>
     <li>Component specification</li>
   </ol>
 </li>
</ul>

### 7.1.2 Object-Oriented Design Process
<p>
 Object-oriented design process (OODP) is a software engineering methodology that involves using the principles of object-oriented programming to design and develop software systems. It is a process that involves several steps, including analysis, design, and implementation. OODP is based on the concept of objects, which are self-contained modules of data and behavior that interact with each other to form a software system.

 <ul type="circle">
   <li>Structured object-oriented design processes involve developing a number of different system models</li>
   <li>They require a lot of effort for development and maintenance of these models and, for small systems, this may not be cost-effective</li>
   <li>However, for large systems developed by different groups, design models are an important communication machanism</li>
   <li>The OODP starts with identifying the requirements and goals of the software system, and then proceeds to design the system by creating a set of interacting objects that meet those requirements. The design process involves several steps, including identifying classes, defining attributes and methods, specifying relationships between classes, and defining interfaces.</li>
   <li>Once the design is complete, the implementation phase begins, which involves writing the code and integrating the different components of the system. The OODP emphasizes the use of reusable code, which promotes modularity and reduces the complexity of the software.</li>
   <li>Overall, the object-oriented design process is a structured and systematic approach to designing software systems. It emphasizes the use of objects, encapsulation, inheritance, and polymorphism to create software systems that are modular, extensible, and maintainable.</li>
 </ul>
</p>
  
## 7.2 Object-Oriented Design Principles
### Well-Formed Design Class
<p>
 A well-formed design class is one that conforms to a set of characteristics that make it easy to understand, maintain, and extend. The following are the key characteristics of a well-formed design class:

 <ul type="square">
  <li>High Cohesion: High cohesion is desirable in software design because it leads to modules that are easier to understand, maintain, and modify. A module with high cohesion will have clear and well-defined responsibilities, making it easier to reason about and test. It also makes it easier to make changes to the module without affecting other parts of the system.</li>
  <li>Low Coupling: Low coupling is desirable in software design because it leads to systems that are more flexible and easier to modify. It also makes it easier to test and debug individual modules or components. However, achieving low coupling can be challenging, as it often requires careful consideration of the dependencies between modules and components within a system.</li>
  <li>Complete and Sufficient: A well-formed design class should provide all the necessary functionality to fulfill its responsibility or purpose. This means that it should have all the required attributes and methods to perform its task without relying on other classes. Besides, A well-formed design class should have only the necessary attributes and methods to fulfill its responsibility or purpose. This means that it should not have unnecessary or redundant attributes and methods that add complexity and reduce clarity.</li>
  <li>Primitive:  A "primitive" is a basic data type or value that cannot be decomposed into smaller parts. For example, integers, booleans, and characters are all primitives because they cannot be broken down into smaller parts. Primitives are important because they can help improve the clarity, simplicity, and efficiency of a class.</li>
 </ul>
</p>

  ### Fundamental Design principles
  <p>
    <ul type="circle">
      <li>Encapsulation: Encapsulation is used to protect internal state from external manipulation. This means that the class should define a clear interface that allows other classes to interact with it in a controlled way.</li>
      <li>Object reuse: the ability to reuse existing code by creating objects that are designed to be flexible and reusable across different parts of a system. This is achieved by creating classes that are well-designed, well-encapsulated, and have a clear and concise interface. By reusing existing code, developers can reduce the amount of time and effort needed to develop new software, as well as improve the overall quality and reliability of the software.</li>
      <li>Information hiding: the practice of hiding the internal details of a class or object from other parts of the system. This is achieved by creating classes that have a clear and concise interface and by using access modifiers to restrict access to internal data and methods. By hiding the internal details of a class, developers can protect the data and methods from being accessed or modified by other parts of the system.</li>
      <li>Navigation visibility:  the ease with which developers can navigate through the code to understand the behavior and relationships of the different classes and modules. In order to achieve good navigation visibility, it is important to create a clear and concise class structure, with well-defined relationships between the different classes.</li>
      <li>Coupling and cohesion: coupling refers to the degree to which one module or component depends on another, while cohesion refers to the degree to which the elements within a module or class are related and contribute to a single, well-defined purpose. Both of these principles are important for creating software systems that are easy to understand, maintain, and modify.</li>
      <li>Seperation of responsibilities:  the practice of dividing the functionality of a system into distinct modules or components, each with a well-defined set of responsibilities. By separating responsibilities in this way, developers can create systems that are easier to understand, maintain, and modify, since changes to one module or component will have minimal impact on other parts of the system.</li>
    </ul>
  </p>

### Coupling and Cohesion of Susbsystems
<p>
  Cohesion and coupling are two important concepts in software design that relate to how modules or components within a software system are structured and interact with each other.
 <ul type="bullet">
   <li>Cohesion refers to the degree to which the elements within a module or class are related and contribute to a single, well-defined purpose. High cohesion means that the elements within a module are strongly related and work together towards a single, specific task or responsibility. In contrast, low cohesion means that the elements within a module are loosely related and may not contribute to a single, well-defined purpose.</li>

   <li>Coupling refers to the degree to which one module or component depends on another. High coupling means that modules or components within a system are tightly interconnected, so that changes to one module can have a significant impact on other modules or components. In contrast, low coupling means that modules or components within a system are loosely interconnected, so that changes to one module have minimal impact on other modules or components.</li>
  </ul>
 </p>

  ### Ways to achieve <b>High Cohesion</b>
  <p>
    <ol type="1">
      <li>Define Clear Responsibilities: When designing a class or module, it is important to define a clear and well-defined set of responsibilities for that component. This helps to ensure that the elements within the component work together in a coherent and logical manner.</li>
      <li>Minimize the Number of Responsibilities: In addition to defining clear responsibilities, it is important to minimize the number of responsibilities that each component has. This helps to ensure that each component is focused on a specific set of tasks, and that the elements within the component are all working towards the same goal.</li>
      <li>Use Cohesive Naming Conventions: Naming conventions can also help to promote high cohesion by ensuring that the elements within a component are named in a consistent and coherent manner. This makes it easier for developers to understand how the different elements within the component are related to one another.</li>
      <li>Use Appropriate Data Structures: Using appropriate data structures, such as arrays or linked lists, can also help to promote high cohesion by ensuring that the data within a component is organized in a coherent and logical manner. This makes it easier for developers to understand how the different elements within the component are related to one another.</li>
      <li>Use Appropriate Encapsulation: Encapsulation is the practice of hiding the internal details of a component from other parts of the system. By using appropriate encapsulation techniques, such as access modifiers, it is possible to ensure that the elements within a component are all working towards the same goal, without being influenced by external factors.</li>
    </ol>
  </p>

  ### Ways to achieve <b>Low Coupling</b>
  <p>
    <ol type="1">
      <li>Define Clear Interfaces: When designing modules or components, it is important to define clear and well-defined interfaces between them. This helps to ensure that each component can interact with the others in a clear and predictable manner, without depending on the internal details of other components.</li>
      <li>Use Abstraction: Abstraction is the practice of hiding the internal details of a component from other parts of the system. By using appropriate abstraction techniques, such as interfaces or abstract classes, it is possible to reduce the coupling between different components, since each component only needs to know about the abstract interface, rather than the implementation details of the other components.</li>
      <li>Minimize Dependencies: In addition to using clear interfaces and abstraction techniques, it is important to minimize the number of dependencies between different modules or components. This can be achieved by breaking down complex functionality into smaller, more focused components, each with a well-defined set of responsibilities.</li>
      <li>Use Appropriate Design Patterns: Design patterns, such as the Observer or Mediator patterns, can also be used to reduce coupling between different components by providing a well-defined way for components to communicate with one another.</li>
      <li>Use Dependency Injection: Dependency Injection is a technique for reducing coupling by separating the creation of objects from their dependencies. By injecting dependencies into objects at runtime, rather than creating them directly within the object, it is possible to reduce the coupling between different components.</li>
 </ol>
</p>

## 7.3 Object-Oriented Design Models using UML

<p>
  Unified Modeling Language (UML) is a general purpose modelling language. The main aim of UML is to define a standard way to visualize the way a system has been designed. It is quite similar to blueprints used in other fields of engineering.

UML is not a programming language, it is rather a visual language. We use UML diagrams to portray the behavior and structure of a system. UML helps software engineers, businessmen and system architects with modelling, design and analysis. The Object Management Group (OMG) adopted Unified Modelling Language as a standard in 1997. Its been managed by OMG ever since. International Organization for Standardization (ISO) published UML as an approved standard in 2005. UML has been revised over the years and is reviewed periodically.
</p>

### Design Models Artefacts
<ul type="bullet">
  <li>Involves an elaboration of the analysis model where we add detail and specific technical solutions</li>
  <li>Contains the same sorts of things as the analysis model, but
  <ul type="bullet">
    <li>all the artefacts are more fully formed</li>
    <li>must now include implementation details</li>
  </ul>
  <li>A fully specified design class with all completed attributes and operations including return types and parameter lists</li>
</ul>

### Object Oriented Concepts Used in UML

<ul type ="bullet">
  <li><b>Class - </b>A class defines the blue print i.e. structure and functions of an object.</li>
  <li><b>Objects – </b>Objects help us to decompose large systems and help us to modularize our system. Modularity helps to divide our system into understandable
components so that we can build our system piece by piece. An object is the fundamental unit (building block) of a system which is used to depict an entity.</li>
  <li><b>Inheritance – </b>Inheritance is a mechanism by which child classes inherit the properties of their parent classes.</li>
  <li><b>Abstraction – </b>Mechanism by which implementation details are hidden from user</li>
  <li><b>Encapsulation – </b>Binding data together and protecting it from the outer world is referred to as encapsulation.</li>
  <li><b>Polymorphism – </b>Mechanism by which functions or entities are able to exist in different forms.</li>
</ul>
  
### Why we need UML?
<ul type="bullet">
  <li>Complex applications need collaboration and planning from multiple teams and hence require a clear and concise way to communicate amongst them.</li>
  <li>Businessmen do not understand code. So UML becomes essential to communicate with non programmers essential requirements, functionalities and processes of the system.</li>
  <li>A lot of time is saved down the line when teams are able to visualize processes, user interactions and static structure of the system.</li>
</ul>

### Design Subsystems: Package Diagram
<p>A package diagram is a type of UML diagram that shows the organization and dependencies between different packages in a system. In the context of a design subsystem, a package diagram can be used to represent the different software components or modules that make up the subsystem, and how they relate to each other.

The main purpose of a package diagram is to provide a high-level view of the system architecture, by showing how the different parts of the system are organized into packages, and how those packages depend on each other. A package is a container for related elements, such as classes, interfaces, and other packages. Packages can be nested inside other packages to create a hierarchy.

In a package diagram, packages are represented as rectangles with a name and a stereotypical icon. The dependencies between packages are shown as arrows between the rectangles, with the arrowhead indicating the direction of the dependency. There are several types of dependencies that can be shown in a package diagram, including:
<ul type="bullet">
  <li>Dependency: a package depends on another package, but does not require it to function.</li>
  <li>Association: a package is associated with another package, meaning that there is a relationship between them.</li>
  <li>Generalization: a package inherits from another package, meaning that it extends or specializes its functionality.</li>
</ul>

By using a package diagram to visualize the design subsystem, designers can better understand how the different components fit together, identify potential areas for improvement or optimization, and communicate the design to other stakeholders.
</p>

### Design Classes: Class Diagram
<p>A class diagram is a type of UML diagram used in software design to describe the classes and their relationships in a system. In the context of a design class, a class diagram can be used to represent the attributes, methods, and relationships of a class.

In a class diagram, a class is represented as a rectangle with the class name at the top. The attributes of the class are listed in the middle of the rectangle, while the methods of the class are listed at the bottom. Each attribute and method has a visibility symbol that indicates whether it is public, private, or protected. Public attributes and methods can be accessed from outside the class, while private attributes and methods can only be accessed from within the class.

The relationships between classes are shown as lines between the rectangles. There are several types of relationships that can be shown in a class diagram, including:
<ul>
  <li>Inheritance: a subclass inherits attributes and methods from a superclass.</li>
  <li>Association: a relationship between two classes that indicates that instances of one class are connected to instances of the other class.</li>
  <li>Aggregation: a relationship between two classes that indicates that instances of one class are part of instances of the other class.</li>
  <li>Composition: a stronger form of aggregation, where the existence of the parts is dependent on the existence of the whole.</li>
  <li>Dependency: a relationship between two classes that indicates that one class uses the other class, but does not own it.</li>
</ul>

By using a class diagram to visualize the design class, designers can better understand the class's attributes and methods, and how it interacts with other classes in the system. Class diagrams are an important tool in object-oriented design and can help to improve the clarity and maintainability of the software design.
</p>

## 7.4 Use Case Realization
### An Example of a Complete Design Sequence Diagram
<br>![](http://agilemodeling.com/images/models/sequenceDiagramEnrollInSeminar.jpg)<br>

<b>Steps for Use Case Realization : Three Refinement Steps</b>
<ol type="1">
  <li>Add <b>boundary</b> classes in sequence diagram for View Layer (already done inanalysis but can be added in design)</li>
  <li>Add <b>control</b>  class in sequence diagram for Business Layer (already done in analysis but can be added in design)</li>
  <li>Add <b>Data Access</b>  class in sequence diagram for Data Access Layer</li>
 </ol>
 
 #### Step 1: Add BOUNDARY Classes in Sequence Diagram
 <ul type="bullet">
  <li>GUI layer has been added</li>
  <li>Object construction is also shown by an explicit constructor method invocation</li>
  <li>Click the link below to know more about <b>The Entity-Control-Boundary Pattern</b><br></li>
  http://www.cs.sjsu.edu/~pearce/modules/lectures/ooa/analysis/ecb.htm
  </ul>
  
#### Step 2: Add CONTROL Classes in Sequence Diagram
   <ul type="bullet">
    <li>An artifact invented by the designer to <b>handle a system function</b>
    <li>A <b>single</b> use case controller results in <b>low cohesion</b>
    <li><b>Several</b> use case controllers raise coupling but result in <b>high cohesion</b>
    </ul>
    
 #### Step 3: Add DATA ACESS Classes in Sequence Diagram
   <ul type="bullet">
    <b>The purpose of DAO is for:</b>
    <li>Easier to change database without changing other classes
    <li>Security where only certain classes (DAO) can access the database information.
    <li>Click the video link below to know more about Data Access Object Design Pattern</li>
    https://www.youtube.com/watch?v=9fVQ_mvzV48
  </ul>
  
   <ul type="bullet">
     <b>Example of implentation:</b>
     <li>Cloud database without sql such as Firebase</li>
     <li>JDBC</li>
   </ul>
    
#### Update Design Class Diagram
 <ul type="bullet">
  <li>Add classes for the <b>view & data access layes</li>
  <li>Update Classes with method signatures:
      <ol type="1">
      <li>Constructir and get and set methods are optional</li>
      <li>Use case specific methods are required</li>
      </ol>
  <li>Every <b>message</b> in a sequence diagram requires a method in the destination object</li>
 </ul>
 
#####  Sequence Diagram vs Domain Model 
<ul type="bullet">
  <li>What is the difference between domain model and design class diagram?</li>
In design model you have to specify the type of properties and methods etc, while in domain model you only have to write them without anything additional(just like in real world). For example, value: int in design model will be written as value in domain model.
<li>What is Sequence Diagram ? Know more by clicking the link below</li>
  https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-sequence-diagram/
 <li>What is Domain Model?Find out more by entering the link below.</li>
https://en.wikipedia.org/wiki/Domain_model#:~:text=In%20software%20engineering%2C%20a%20domain,grounded%20in%20a%20description%20logic.
</ul>
  
  
### KeyPoints
<ul type="bullet">
  <li>Object-oriented detailed design is a low level design involves the identification and description of sets of objects that must work together for each use case</li>
  <li>Fundamental design principles include encapsulation, object reuse, information hiding, navigation visibility, cohesion, coupling and separation of responsibilities.</li>
  <li>Models involved in detailed design from analysis stage are class diagram and sequence diagram</li>
  <li>Classes with related resonsibilites should be grouped in a package as a subsystem of the system</li>
  </ul>
 
### Finding more infomation or Videos about Object-Oriented Detailed Design ?
### Here are some videos for you !
<ol type=1>
  <li>https://youtu.be/VnVHgj6OPrQ</li>
  <li>https://youtu.be/m_MQYyJpIjg</li>
  <li>https://youtu.be/Ej_02ICOIgs</li>
  <li>https://youtu.be/VnVHgj6OPrQ</li>
  

 
  
 
 



## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)


