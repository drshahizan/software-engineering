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
  
  ---
  
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

<img src=https://github.com/drshahizan/software-engineering/blob/main/proposal/submission/sec02/Alpha/agile%20method.png></img>


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


1. Platform: The platform for the room rental service project should be decided. It can be a web application, mobile application, or both.

2. Database: The database used for the room rental service project should be chosen, and the database schema should be designed to store all necessary data, such as user profiles, room listings, booking history, and payment information.

3. User Authentication and Authorization: The room rental service project should have user authentication and authorization functionality to ensure secure access to user accounts and data.

4. Room Listings: The room rental service project should provide functionality for room owners to create, edit, and delete room listings. The room listing should include details such as room type, location, amenities, price, availability, and photos.

5. Booking Management: The room rental service project should provide functionality for users to search for available rooms and book them. It should also have a booking management system for users to manage their bookings, and for room owners to manage their reservations.

6. Payment Gateway: The room rental service project should integrate a payment gateway to allow users to pay for their bookings online. It should support multiple payment methods and be secure and reliable.

7. Search Functionality: The room rental service project should have robust search functionality that allows users to search for rooms based on location, price, availability, and other criteria.

8. Messaging System: The room rental service project should have a messaging system that allows users to communicate with each other before, during, and after their stay.

9. Reviews and Ratings: The room rental service project should have a system for users to leave reviews and ratings for rooms and room owners.

10. Analytics: The room rental service project should integrate analytics to provide insights into user behavior, such as the most popular rooms, most searched locations, and booking trends.


### 11. Timeline and Deliverables:

1. Planning and Requirements Gathering: This phase involves gathering requirements, defining project scope, and creating a project plan. This phase can take 2-4 weeks, depending on the size and complexity of the project.

Deliverables: Project scope document, project plan, and requirements document.

2. Design and Prototyping: This phase involves creating wireframes, user interface designs, and prototypes to get feedback from stakeholders. This phase can take 4-6 weeks, depending on the size and complexity of the project.

Deliverables: Wireframes, user interface designs, and prototypes.

3. Development: This phase involves building the room rental service platform, including front-end and back-end development, database design, and integration with payment gateway and messaging system. This phase can take 8-12 weeks, depending on the size and complexity of the project.

Deliverables: Fully functional platform, payment gateway integration, messaging system integration.

4. Testing: This phase involves testing the platform for bugs, usability, and performance. This phase can take 2-4 weeks, depending on the size and complexity of the project.

Deliverables: Test plan, test cases, and test reports.

5. Deployment: This phase involves deploying the platform to the production environment and making it live. This phase can take 1-2 weeks, depending on the size and complexity of the project.

Deliverables: Deployed platform, go-live plan.

6. Maintenance and Support: This phase involves providing ongoing maintenance and support for the platform, including bug fixes, upgrades, and customer support. This phase can continue indefinitely, depending on the needs of the project.

Deliverables: Maintenance plan, support plan, bug fixes, and upgrades.

These are some general timelines and deliverables that could be included in a room rental service project. The specifics of the project will depend on the requirements of the project and the technologies and platforms being used. It's important to create a detailed project plan and timeline to ensure that the project stays on track and meets all deliverables on time.

### 12. Conclusion:

The Kolej Tun Dr Ismail College room rental services project aims to simplify the room rental process for students and staff by developing a web-based system that automates the process of renting college rooms. The system will consist of a three-tier architecture with a presentation tier, application tier, and data tier. The project will require a team with expertise in full-stack web development, and various software tools such as HTML, CSS, JavaScript, React, Flask, Node.js, and PostgreSQL.

The system will include features such as student registration, room searching and booking, payment processing, room cancellation, user feedback and review, and administrative functions. The project team will also define a clear scope, timeline, and deliverables of the project, as well as the resources required to complete the project. The expected outcomes of the project include an efficient and streamlined college room rental process, accurate and timely payment processing, and reduced administrative workload for staff.

Agile methodology will be used for software development, emphasising the importance of collaboration, flexibility, and iterative development. The Kolej Tun Dr Ismail College room rental services project has the potential to significantly improve the college room rental experience for students and staff at the university.

## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)

  
 
  
 
  
 
