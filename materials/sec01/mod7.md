<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

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

## 7.4 Use Case Realization
## An Example of a Complete Design Sequence Diagram
<br>![]([https://qph.cf2.quoracdn.net/main-qimg-e91bd2d4b63b8f8aa781c2a9c4dd687e-lq](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sciencedirect.com%2Ftopics%2Fcomputer-science%2Fsequence-diagram&psig=AOvVaw2zSojM1oCQdEQomgQtAenG&ust=1681616070919000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDSpJn6qv4CFQAAAAAdAAAAABAE>)<br>

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

