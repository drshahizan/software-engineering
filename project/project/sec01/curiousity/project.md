# KTDI Event Management System
### 💫Table of Contents
* [Table of Contents](#table-of-contents)
* [Introduction](#introduction)
* [Purpose](#1-purpose)
* [Objective](#2-objective)
* [Problem Statement](#3-problem-statement)
* [Potential Impact](#4-potential-impact)
* [Methodology](#methodology)
* [Implementation](#implementation)
* [Timeline process](#1-timeline-process)
* [Requirement collection](#2-requirement-collection)
* [Software components & modules](#3-software-components-modules)
* [Design phase](#4-design-phase)
* [Design system](#5-design-system)
* [Challenges](#6-challenges)
* [Testing and Quality Assurance](#testing-and-quality-assurance)
* [Results and Archievements](#results-and-archievements)
* [Conclusion](#conclusion)


## Introduction
### 1. Purpose
THe purpose of our project of building a KTDI Event Management System is aimed to simplify and streamline the processes of event management held by KTDI Student Residential College Committee (JKM) at UTM Johor. The system offers a variety of key features that assist our stakeholders, JKM KTDI, KTDI staff members, as well as the students around UTM Johor, in respective tasks for event preparation and post-activity processes. 

### 2. Objective
1. To develop a KTDI Event Management System that is simple to use, which includes multiple functions like calendar for events in a semester, task delegation, and automated merit point record.
2. To enhance communication and information access by providing a centralised platform for students to view event details and register for activities that they are interested in.
3. To help JKM KTDI to track the number of student registrations for events through the system.
4. To provide comprehensive training and support to users of the system (JKM KTDI, KTDI staff members, UTM students) to ensure successful implementation. 

### 3. Problem Statement
1. One of the many problems faced by JKM KTDI is the crashing of event dates, due to manual event preparation processes. 
2. Besides, they will need to conduct multiple meetings to ensure team progression, which can be time-consuming.
3. Furthermore, JKM KTDI is also required to manually compute the merit points of KTDI students, which determines their active quota for priority in booking the hostel for the upcoming semester. 
4. On the contrary, students often encounter difficulties in finding college events due to the overwhelming number of events being shared on social meida platforms like WhatsApp and Telegram.

### 4. Potential Impact
1. Avoid clashing of events via the event calendar and to view upcoming events held in KTDI.
2. Task delegation for JKM KTDI.
3. Tracking of students' registration, attendance and feedback for the events.
4. Automatic update of KTDI merit points.

## Methodology
### Approach and Methodology
We utilised Agile software development process model for our KTDI event management system. The Agile process model is an adaptable and iterative method of developing software that places a focus on teamwork, client satisfaction, and the quick delivery of functional software. This process model emphasises delivering value to the user (JKM) at each iteration and is appropriate for projects with varying requirements and uncertainties.

The agile process model was chosen because it enables frequent feedback and changes to be made to the software while it is being developed. Since this system is being created for a university, it is likely that the requirements will change and be updated as the project moves forwards. The Agile process model is well suited to handle such changes and still deliver a high-quality product on time.

### Software development life cycle model: Agile Process Model
<img src="https://agilie.com/_next/image?url=/api/imageproxy?url=https%3A%2F%2Fd12zh9bqbty5wp.cloudfront.net%2Fimages%2Ff9e66e179b6747ae54108f82f8ade8b3c25d76fd30afde6c395822c530196169-1674685166733.png&w=1920&q=75" alt="Agile" height="500px"></img>

#### 1. Planning Phase: 
During this stage, the project manager will establish the project's scope, objectives, and goals while taking into account the requirements of the stakeholders. The team will create a product backlog that prioritises the system's features or requirements, and defines milestones, deadlines, and checkpoints. This will ensure that the project stays on track and within the set timeline.

#### 2. Design Phase:
The team will create the system's architecture, data models, user interfaces, and user experience during this phase. In order to obtain feedback from the stakeholders and make sure that the design meets their needs, the user experience designer will also create a mockup or prototype of the system. To ensure that the system design is feasible and meets the project's goals, it will be thoroughly reviewed and documented.

#### 3. Development Phase:
The team will begin coding and integrating the various system components during this phase. The main developer will keep an eye on the process and guarantee that the code complies with the standards and guidelines established by the project. The team will collaborate, and the code will be frequently checked to make sure it performs as expected. Throughout this phase, testing will be done to find any flaws and make sure the code complies with project requirements.

#### 4. Testing Phase:
Unit testing, integration testing, system testing, and user acceptance testing are a few of the tests the system will go through at this stage. To make sure the system follows the requirements and operates as intended, the main developer will test the system. The team will conduct user acceptance testing in conjunction with stakeholders to ensure that the system meets users' needs and expectations.

#### 5. Deployment Phase: 
The main developer will deploy the system to the production environment during this phase, making it accessible to the users (JKM KTDI, KTDI staff members, and students). The system will undergo final testing and validation to make sure it is ready for use. To ensure the system is successfully adopted, users and support personnel will receive training, and any required documentation will be made available.

#### 6. Maintenance Phase
The team will ensure the system's upkeep and maintenance during this phase, including bug fixes, software updates, and any necessary improvements. The objective is to maintain the system's smooth operation and adapt to the users' changing needs. The team will carry out routine assessments to make sure the system keeps up with the project's goals and stakeholder expectations.

### Specific Tools, Technologies, and Frameworks
<table style="border-collapse: collapse;">
      <thead>
        <tr>
          <th>Layer/Aspect</th>
          <th>Tool/Technology</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="4">Presentation Layer</td>
          <td>HTML</td>
          <td>Markdown language that used to structure content and create a basic layout, in line with the design of the system's user interface</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>Style sheet language that used to describe the presentation of HTML documents by styling and formatting the HTML content.</td>
        </tr>
        <tr>
          <td>Bootstrap</td>
          <td>CSS framework that will be utilized to create responsive web pages and enhance the system's user interface by providing a consistent and responsive design across different devices and screen sizes</td>
        </tr>
        <tr>
          <td>Figma</td>
          <td>Cloud-based design tool used for create interface design and prototype user interfaces</td>
        </tr>
        <tr>
          <td rowspan="2">Application Layer</td>
          <td>PHP</td>
          <td>Server-side scripting language that used to handle server-side tasks, such as user authentication and database management, and to create dynamic web pages that display information based on user input or system data.</td>
        </tr>
        <tr>
          <td>Apache</td>
          <td>Open-source web server software that used to host and serve the web pages and PHP scripts that make up the system's user interface and backend functionality</td>
        </tr>
        <tr>
          <td rowspan="2">Overall of the System Development</td>
          <td>Visual Studio Code</td>
          <td>Used as Code Editor</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>Used for version control and collaborative development. Developers involved will use it to store codebase, track changes to code and collaborate with other developers on the project. It will be used for code review and issue tracking to resolve bugs and other issue in the system</td>
        </tr>
      </tbody>
    </table>

## Implementation

### Timeline process
| No | Date | Member Name | Role	| Task	|
| -----:| ----- | ------ | ------ | ------ |
| 1 | 08/04/2023 | Low Ying Xi | Project Manager | Create project plan |
| 2 | 16/04/2023 | Ng Shu Yu | Documentation Specialist | Gather user requirements |
| 3 | 21/04/2023 | Camily Tang Jia Lei | Developer | Create proposal |
| 4 | 02/05/2023 | Low Ying Xi | Project Manager | Contact stakeholders |
| 5 | 02/05/2023 | Low Ying Xi | Project Manager | Create interview questions |
| 6 | 03/05/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei | Project Manger, Documentation Specialist, Developer | Meeting with 1st stakeholder, Hanie Azyuni Binti Mazle (JKM KTDI)|
| 7 | 04/05/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei | Project Manger, Documentation Specialist, Developer | Meeting with 2nd stakeholder, Lim Shi Kai (JKM KTDI) |
| 8 | 10/05/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | Meeting with 3rd stakeholder, Nadia Syahadah Binti Saharudin |
| 9 | 11/05/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | Meeting with 4nd stakeholder, LT KOL Prof. Madya Dr. Mohd Noor Azli Bin Haji. Ali Khan (KTDI Administrator) |
| 10 | 14/05/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | Contact with 5th stakeholder, Hamizah Amalina Binti Amlan (Pembantu Felo KTDI) | 
| 11 | 15/05/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | SRS Planning |
| 12 | 15/05/2023 | Camily Tang Jia Lei | Developer | Identify software functionality |   
| 13 | 15/05/2023 | Koh Li Hui | User Experience Designer | User Requirement Analysis | 
| 14 | 15/05/2023 - 05/06/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | Creates UML Diagram, User Diagram, User Journey Maps and User Stories. |
| 15 | 10/06/2023 | Ng Shu Yu | Documentation Specialist | Create system documentation | 
| 16 | 13/06/2023| Low Ying Xi | Project Manager | Create SDD document | 
| 17 | 15/06/2023| Low Ying Xi | Project Manager | Distribute task on managing SDD document | 
| 18 | 16/06/2023 | Low Ying Xi  | Project Manager | Create system architecture design | 
| 19 | 16/06/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui  | Project Manger, Documentation Specialist, Developer, User Experience Designer | Create detailed description of modules |
| 20 | 16/06/2023 | Ng Shu Yu | Documentation Specialist | Create Data Design |
| 21 | 17/06/2023 | Camily Tang Jia Lei, Koh Li Hui |Developer, User Experience Designer | Create User Interfaces Design |
| 22 | 17/06/2023 | Camily Tang Jia Lei, Koh Li Hui |Developer, User Experience Designer | Create Requirement Matrix |  
| 23 | 20/06/2023 | Ng Shu Yu | Documentation Specialist | Finalize the SDD document |
| 24 | 20/06/2023| Low Ying Xi | Project Manager | Create STD Document |
| 25 | 20/06/2023 | Low Ying Xi  | Project Manager | Distribute task |
| 26 | 21/06/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui  | Project Manger, Documentation Specialist, Developer, User Experience Designer | Create test cases |
| 27 | 22/06/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | Create test procedures |
| 28 | 23/06/2023 | Camily Tang Jia Lei, Koh Li Hui |Developer, User Experience Designer | Create test results |
| 29 | 24/06/2023 | Camily Tang Jia Lei, Koh Li Hui |Developer, User Experience Designer | Create traceability matrix |  
| 30 | 26/06/2023 | Ng Shu Yu | Documentation Specialist | Finalize the STD document |
| 31 | 27/06/2023 | Low Ying Xi, Ng Shu Yu, Camily Tang Jia Lei, Koh Li Hui | Project Manger, Documentation Specialist, Developer, User Experience Designer | Project Presentation |

### Requirement collection
Meeting with stakeholders <br><br>

#### Meeting with JKM KTDI (Hanie Azyuni binti Mazle) 
<img src="https://user-images.githubusercontent.com/129201809/236988075-7de16aa3-4a6a-489a-a324-8e9d31c543b4.jpg" alt="Hanie" height="500px"></img><br>
At 8 p.m. of 3 May 2023, we had a meeting with Hanie at M01, KTDI to discuss about the requirements, wants, and needs of JKM KTDI in doing their pre, during, and post event preparation.

Problems: 
- Laborious process of seeking approval from multiple parties through paperwork.
- Management of works between members

Solutions:
- Handling necessary documents for each activity
- Distribution of tasks to members
- Post-event report


#### Meeting with JKM KTDI (Lim Shi Kai)
<img src="https://user-images.githubusercontent.com/129201809/236986877-e485f15d-3268-41da-9e4f-f854e21eaec6.jpg" alt="Sky" height="500px"></img><br>
At 9 a.m. of 4 May 2023, we had a meeting with Shi Kai at M01, KTDI to discuss about the requirements, wants, and needs of JKM KTDI in doing their pre, during, and post event preparation.

Problems: 
- Event crashing
- Manual event preparation process
- Scheduling conflict

Solutions:
- Calendar for annual event
- Plan events for the year in advance



#### Meeting with student (Nadia Syahadah Binti Saharudin)
<img src="https://user-images.githubusercontent.com/129201809/240615920-b4dbd2b9-b736-4289-85e4-da75df7c90d7.jpg" alt="Sky" height="500px"></img><br>
At 9 p.m. of 10 May 2023, we had a meeting with Nadia at M25, KTDI to discuss about the requirements, wants, and needs of a student in joining events.

Problems: 
- Messy blasting of event registration form in groups

Solutions:
- Organized registration link in our system




#### Meeting with KTDI Principal (LT KOL Prof. Madya Dr. Mohd Noor Azli Bin Haji. Ali Khan)
<img src="https://user-images.githubusercontent.com/129201809/238513654-63fbed05-d986-42ae-a51d-76c0cb0b504a.jpg" alt="Principal" height="500px"></img><br>
At 4 p.m. of 11 May 2023, we had a meeting with Prof. Madya Dr. Mohd Noor Azli at the KTDI office to discuss about the requirements, wants, and needs as a KTDI staff member in event preparation as well as the post-event operations.

Problems: 
- Active student quota (manual)

Solutions:
- Calculate active quota (systematic)


#### Meeting with Pembantu Felo (Hamizah Amalina Binti Amlan)
At 14 May 2023, we contacted with Hamizah Amalina via WhatsApp to discuss about the the problem they faced as a KTDI staff member in event preparation as well as the post-event operations.

Problems: 
- Problem to track the progress of the unit in JKM
- Problem in getting information about the event

Solutions:
- Task delegations
- Event calendar for semesters events
- Event descriptions

### 3. Software components & modules
- Provide an overview of the software components or modules developed.
- Component Model:
- Use Case Diagram:
- Complete Package Diagram:

- Analysis

### 4. Design phase
- low fidenity

### 5. Design system
#### Colour Codes
<img src="color.jpg" alt="color" height="100px"></img>

#### Components
<img src="component.jpg" alt="component" height="350px"></img>

#### Home Screen
<img src="homepage.png" alt="homepage" height="350px"></img>

#### Flow for Students
<img src="student_flow.png" alt="student" height="350px"></img>

#### Flow for JKM KTDI
<img src="jkm_flow.png" alt="jkm" height="500px"></img>

#### Flow for KTDI Staff
<img src="staff_flow.png" alt="staff" height="500px"></img>

### 6. Challenges
| No | Challenge | Solution | 
|1.| Finding of stakeholders | Contact appriopraite stakeholders that is found on the KTDI website and the gantt chart in college |
|2.| Rapid requirement changes | Rapid meetings with stakeholders and members |
|3.| Busy schedules of the developers | Improve time management |
|4.| New to Figma | Adapt to figma in weeks through practices and continuous design updates |
|5.| Project documentation | Maintaining an accurate and up-to-date documentation throughouut the lifecycle by updating GitHub with the necessary documents |

## Testing and Quality Assurance
- Explain the testing strategies and techniques employed.

- Discuss the types of testing conducted (e.g., unit testing, integration testing, etc.).

- Highlight any quality assurance processes implemented to ensure the reliability and robustness of the software.

## Results and Archievements
### 1. Project Outcome: Figma
<a href="https://www.figma.com/proto/j19tAaFoStbu6fxeleYlf3/KTDI-Event-Management-System?page-id=27%3A7&type=design&node-id=24-85&viewport=326%2C-303%2C0.04&scaling=scale-down&starting-point-node-id=24%3A85&mode=design"><img src="figma.jpg" width="50px" height="50px" ></a>

- Share any quantitative or qualitative data that demonstrates the success of the software solution.
- Discuss any feedback received from stakeholders or users during the evaluation process.

## Conclusion
- Summarize the overall project experience and lessons learned.
- Reflect on the challenges faced and how they were overcome.
- Highlight any future improvements or recommendations for further development.

## Prototype