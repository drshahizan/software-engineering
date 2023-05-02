<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/issues"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/software-engineering)

Don't forget to hit the :star: if you like this repo.

#  Proposal: College Room Rental System

## College Room Rental System


### Prepared by: Group Alpha
  1. Salini Ravinthiran A22EC0267
  2. Nur Farah Adibah Binti Idris A22EC0245 
  3. Nur Aleysha Qurratu'aini Binti Mat Salleh A22EC0241
  4. Nadhrah NurSabrina Binti Zulaini A22EC0224

### Table of Contents
- [Executive Summary](#1-executive-summary)
- [Background](#2-background)
- [Objectives](#3-objectives)
- [Scope](#4-scope)
- [Sofware Process Model](#5-software-process-model)
- [Budget](#6-budget)
- [System Architecture](#7-system-architecture)
- [Risk Assessment](#8-risk-assessment)
- [Resources](#9-resources)
- [Technical Specification](#10-technical-specification)
- [Timeline and Deliverables](#11-timeline-and-deliverables)
- [Conclusion](#12-conclusion)
  
### 1. Executive Summary
The Kolej Tun Dr Ismail College room rental services project aims to develop a web-based system that allows students to easily request and rent college rooms. The system will automatically calculate the rental price based on the type of room and number of days the student will stay. After the application is approved, the student will receive an invoice that will be sent to the student Financial Sections of University Technology of Malaysia. 

The main goal of the system is to simplify the college room rental process and ensure timely and accurate payment processing. The system will be developed using a web-based architecture and will require expertise in full-stack web development. The project team will consist of a main developer, a business analyst, a quality assurance engineer, a UI/UX designer, a database administrator, and an assistant developer. The project will require workstations, a server or cloud infrastructure, and various software tools such as an IDE, front-end and web frameworks, and testing frameworks. The project will also require other expenses such as internet access and office supplies. 

The expected outcomes of the project include an efficient and streamlined college room rental process for students and staff, accurate and timely payment processing, and reduced administrative workload for staff. Overall, the Kolej Tun Dr Ismail College room rental services project has the potential to significantly improve the college room rental experience for students and staff at the university.

---

### 2. Background:
- The introduction should provide background information about the software project and the purpose of the proposal. 
- It should also briefly describe the problem the software is meant to solve, the benefits it will provide, and its potential impact on the organization.

---

### 3. Objectives:
#### 1. Simplifying the room rental procedure: 
The objective of the college room rental system is to make it easy for students to find available rooms, view details about the rooms and to complete the rental process without any trouble. The system should provide clear information about the rental terms and conditions, as well as any fees associated with the rental.

#### 2. Enhancing security: 
To maintain the security of user’s information and ensure that the payment procedure is carried out safely. With the system, the payment made by the student will be automatically calculated and directed to the university’s academic and account information management system. 

#### 3. Streamlining administrative tasks: 
College room rental systems can help automating administrative processes like handling rental agreements, accepting payments, and producing reports. 

#### 4. Improve user experience: 
The system can help provide a better user experience by offering features such as room choices, and user feedback. The system will ensure that any issues or concerns can be addressed in a timely manner. 

---

### 4. Scope: 
The scope refers to the boundaries of the project and outlines the features and functionalities of the system, including goals, objectives and requirements as well as the expected outcomes and benefits. Here are detailed explanations of the features and functionality of our college room rental system:

- Students Registration: 
<br>Students should be allowed to register and create an account so they can use it to access the room rental features by entering their personal information. If they are eligible to register for room rental, the system should be able to verify their identity.

- Room searching: 
<br>According to the students’ preferences, students should be able to search for available rooms by looking at the location, price and facilities. 
Room booking: Room booking features allows students to book rooms based on availability and their preferred dates. The system should provide a calendar view of the rooms availability and allows students to request any services for their room. 

- Payment Processing: 
<br>The system allows students to complete their payment process through credit card or online banking. Students should be able to monitor their payment history and receipts. 

- Room cancellation: 
<br>The room cancellation features should allow students to cancel their room reservation if needed. 

- User feedback and review: 
<br>Students should be allowed to provide feedback and review on the rooms that have rented. They can report any problems and request for maintenance services through the system’s help desk. 

- Administrative Functions: 
<br>The administrative functions for college employees, such as controlling room availability, determining room prices, and creating reports, should be included in the system.

---

### 5. Software Process Model:
This section describe the ideal software process model for this system development. The write-up must consist of:
- Explanation of the goal of the software process model.
- Choose the ideal software process model and give justification.
- The illustration of chosen software process model that relates to your project and shows every phase involved in the chosen software process model
- Describe detailed activities that are relevant to every phase of the software process model (you may use a Gantt chart or any suitable project management tool). Determine the suitable duration for every phase and assign the person in charge. Also, propose the appropriate deliverables/products/outputs for every phase. 
- It should also describe the testing methodologies, project management practices, and quality assurance processes.

---

### 6. Budget:
- The budget section should outline the costs associated with the development of the software, including hardware, software, personnel, and testing. It should also include any contingency plans for unexpected expenses.

---

### 7. System Architecture:
- Provide a detailed overview of the proposed system architecture including the tools and technologies that will be used to develop and deploy the system
## System Architecture Overview
#### System Architecture Overview
The proposed system architecture for this college room rental services is
a three tier architecture which organises applications into three logical and physical computing tiers that is:
 - **presentation tier** or user interface that will present information and handle user interface for users.In this tier,  HTML, CSS, and JavaScript, along with a framework like React or Angular can be used  for building the user interface.
- **application tier** that processes user requests and updates the price and number of days to be processed. By using a framework like Flask or Express.js for building RESTful APIs with a server-side language such as Node.js or Python.
- **data tier** that will store and manage all the rental data. Depending on the requirements of the system, relational database management system (RDBMS) like MySQL or PostgreSQL, or MongoDB(a NoSQL database) 

#### Data Storage, Management and Analysis
For this system, the data tier will be responsible to store and manage the database management system of the rental data . As data integrity, security, and scalability is extremely important, the database will be designed. Tools and frameworks like Python's pandas library or R programming language that is capable of analysing and visualising data will be used to implement data analysis.

As for the software and hardware requirements that are needed to support this system, a server or cloud based infrastructure that can handle the expected workload traffic with sufficient resources will be required.


#### Tools and Frameworks
This college rental system will use various tools and frameworks. For Example to Handle user interface, design tools such as HTML, CSS and JavaScript will be used.Moreover, Frameworks like React that is a front-end JavaScript framework or Angular that can build single-page client applications using HTML and TypeScript might be used.

#### Flowchart and Block Diagram

##### Flowchart
<img src="https://github.com/drshahizan/software-engineering/blob/main/proposal/submission/sec02/Alpha/flowchartSE.png"></img>


##### Block Diagram
<img src="https://github.com/drshahizan/software-engineering/blob/main/proposal/submission/sec02/Alpha/detailed%20block%20diagram.drawio%20(1).png"></img>

---

### 8. Risks Assessment:
- The risk assessment section identifies and assesses any potential risks that could impact the project, such as technical challenges, resource constraints, or changes in project requirements. 
- It should also describe the plans and strategies to mitigate those risks.

| Potential Risks | Plan/Strategies |
| --- | --- |
| Technical challenges - Technical risk with the system could include system crashes or slow performance, which could impact the user experience and cause frustation. | Mitigation strategies could include testing the system thoroughly before deployment, ensuring adequate hardware and software resources, and implementing robust error-handling and fault-tolerant mechanisms. Several versions of the system components, which demand ongoing maintenance and testing, will be required by the organisation to prevent the crash of key systems and networks.|
| Resources Constraints - The college room rental system could experience resources constraint if the project is not carefully planned and managed. Inadequate staffing or funds are examples of resource constraints. If it lacks sufficient funding, it may find it difficult to distribute resources effectively, resulting in staff and technology limits. It may also be challenging to attract and keep workers with the required skills and experience to effectively execute the project. | The strategies to reduce the risk is to develop a comprehensive plan for resource allocation, including staff and technology by maintaining regular resource usage monitoring and making necessary adjustments to resource allocation in order to identify potential obstacles or areas of risk and address them before they become major issues. Critical path activities that are essential to the success of the system should also be prioritized. Cross-train team members is required to ensure they have a diverse set of abilities and can handle a variety of duties. This can assist in ensuring that resources are utilised effectively and efficiently. |
| Changes in Project Requirements - Changes to project requirements may lead to changes in the project timeline, which could impact project delivery dates and deadlines. For example, if a new requirement is added to the project scope, it may require additional time to complete, which could push back the project delivery date. | To mitigate the impact of changes in project requirements on a college room rental system, it is important to have a clear and well-defined scope for the project from the outset. This can help to minimize the likelihood of changes to project requirements and ensure that any changes that do occur are properly managed. |
| Security Risks - There is a risk of security breaches and data theft, which could compromise the personal and financial information of users such as hackers or unauthorized personnel may gain access to the system and steal or manipulate sensitive data such as students' personal information or payment data. These security risks could potentially cause financial loss, reputational damage, and legal consequences for the college and its stakeholders. | To mitigate security risks, the college could conduct a risk assessment by identify potential security, regularly update the system's software and patches, and implement security controls such as firewalls, antivirus software, encryption, and access controls to protect the system from unauthorized access, data breaches, and malware attacks. |

---

### 9. Resources:
The resources required for the proposed college room rental system project can be broken down into detailed aspects like staff, equipment, software, and other expenses.

#### Staff:
- Main Developer: Responsible for overall project management, system architecture design, and leading the development team.
- Assistant Developer: will be responsible for supporting the main developer in the development of the college room rental system .
- Business Analyst: Gather and analyse user requirements, and translating them into technical requirements.
- Quality Assurance Engineer: Ensure the quality and functionality of the system, including testing, bug reporting, and documentation.
- UI/UX Designer: Design and Implement the user interface of the system, including user experience design, usability testing, and graphical design.
- Database Administrator: maintain and manage the database management system to ensure data scalability, integrity and security.


#### Equipment:
- Server or Cloud-based Infrastructure: To handle the expected workload and traffic, the system will need a server or cloud-based infrastructure with sufficient resources . The specific hardware requirements will depend on the expected workload and traffic which may include servers, storage, networking equipment as well as other hardware components.

#### Software:
- Development Tools: The development team will require a suite of software tools to design, develop, and test the system which may include project management software, code editors, version control systems, and integrated development environments (IDEs).
- Web Frameworks: The development team will require web frameworks to build the application tier of the system. This may include Flask or Express.js for building RESTful APIs.
- Front-End Frameworks: The development team will require front-end frameworks like React or Angular for building the user interface of the system.
- Quality Assurance Tools: Tools for testing and quality assurance, including bug reporting software, automated testing frameworks, and documentation tools will be required to use.
- Database Management System: As the system will require a database management system to store and manage rental data, a relational database management system (RDBMS) such as PostgreSQL or MySQL, or a NoSQL database like MongoDB may be included.


#### Other Expenses:
- Licences and Permits: The project may require various licenses and permits depending on the specific implementation and legal requirements.
- Training and Professional Development: The development team may require training and professional development to gain the necessary skills and knowledge to develop the system.

--- 

### 10. Technical Specifications:
- Discuss the technical specifications of the proposed project, including data sources, data schema, data transformations, machine learning algorithms, data visualization tools, and other technical details.
- Mention the programming languages, frameworks, and libraries that will be used in the project.
- Provide details about the hardware and software requirements for the proposed system.
- Explain the data security measures that will be implemented.

---

### 11. Timeline and Deliverables: 
- Provide a detailed timeline for the project, including milestones and deadlines.
- Specify the deliverables that will be provided at each milestone. It should also specify the expected time frame for each deliverable and the resources that will be required to complete the project.
- Explain the quality assurance and testing procedures that will be followed.

---

### 12. Conclusion:
- Conclude your proposal with a call to action, highlighting the benefits of your proposed solution and urging the decision-makers to take action.
- Summarize the proposal and reiterate the importance of the project.
- Mention any potential limitations or challenges that may arise during the project.
- Provide a call to action for the client to approve the proposal and proceed with the project.

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

  
 
  
 
  
 
