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
* [Objective](#2-objective)
* [Problem Statement](#3-problem-statement)
* [Potential Statement](#4-potential-impact)


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
- Describe the approach and methodologies utilized to tackle the project.

We utilised Agile software development process model for our KTDI event management system. The Agile process model is an adaptable and iterative method of developing software that places a focus on teamwork, client satisfaction, and the quick delivery of functional software. This process model emphasises delivering value to the user (JKM) at each iteration and is appropriate for projects with varying requirements and uncertainties.

The agile process model was chosen because it enables frequent feedback and changes to be made to the software while it is being developed. Since this system is being created for a university, it is likely that the requirements will change and be updated as the project moves forwards. The Agile process model is well suited to handle such changes and still deliver a high-quality product on time.

- Explain the software development life cycle model or any other relevant methodology adopted.
The Agile process model consists of the following phases:
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

- Highlight any specific tools, technologies, or frameworks employed during the project.
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
- Detail the specific tasks and activities undertaken by your group.
- Gantt Chart

### Requirement collection
- Stalkholder meeting

### 3. Software components & modules
- Provide an overview of the software components or modules developed.
- Analysis
- User Case Diagram

### 4. Design phase
- low fidenity

### 5. Design system
- colour
- typography
- iconography
- components
- Home screen 
- Flow for students
- Flow for JKM
- Flow for staff

### 6. Challenges
- Describe any challenges faced during the implementation phase and how you addressed them

## Testing and Quality Assurance
- Explain the testing strategies and techniques employed.

- Discuss the types of testing conducted (e.g., unit testing, integration testing, etc.).

- Highlight any quality assurance processes implemented to ensure the reliability and robustness of the software.

## Results and Archievements
- Present the outcomes and achievements of the project.
- Share any quantitative or qualitative data that demonstrates the success of the software solution.
- Discuss any feedback received from stakeholders or users during the evaluation process.

## Conclusion
- Summarize the overall project experience and lessons learned.
- Reflect on the challenges faced and how they were overcome.
- Highlight any future improvements or recommendations for further development.

## Prototype