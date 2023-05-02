## Project Title


### Prepared by: Group Cutie 3.142s
  1. Jaslene Yu (A22EC0171)
  2. Nicole Lim Tze Yee (A22EC0123)
  3. Tiew Chuan Rong (A22EC0112)
  4. Tiew Chuan Shen (A22EC0113)
  5. Wong Jun Ji (A22EC0117)

### Table of Contents
 |No.  | Content |
|--|--|
| 1. | [Executive Summary](#1-executive-summary) |
| 2. | [Background](#2-background) |
| 3. | [Objectives](#3-objectives) |
| 4. | [Scope](#4-scope) |
| 5. | [Sofware Process Model](#5-software-process-model) |
| 6. | [Budget](#6-budget) |
| 7. | [System Architecture](#7-system-architecture) |
| 8. | [Risks Assessment](#8-risks-assessment) |
| 9. | [Resources](#9-resources) |
| 10. | [Technical Specification](#10-technical-specifications) |
| 11. | [Timeline and Deliverables](#11-timeline-and-deliverables) |
| 12. |  [Conclusion](#12-conclusion) |
  
### 1. Executive Summary
We expect to improve the design of the current existing Student Attendance Management System without changing too much of its root design. The improved attendance management system will face fewer bugs, implement a new alternative way for students to mark their attendance, location based check-ins, biometric authentication, and generate a table to ease the management of attendance for lecturers. The scope of the project includes attendance tracking, reporting and analytics, integration with other systems, mobile accessibility, security,and customization. The proposed software process model for this project is agile methodology.

### 2. Background:
In today's world, technology has become an integral part of our daily lives, including education. Digital attendance management systems are widely used in educational institutions to manage student attendance. For example, UTM uses UTM Digital to track and manage student attendance. However, some features are inefficient, and fail to meet the needs of modern-day educational institutions.
The proposed digital student attendance management system aims to address the weaknesses of the existing attendance systems by providing an efficient and effective way to manage student attendance. The software will be designed to be user-friendly, intuitive, and easy to use, allowing teachers and administrators to manage attendance with ease.
The proposed software will enable lecturers to take attendance quickly and easily using a range of devices, including smartphones, tablets, and laptops. The system will also provide real-time attendance reports, allowing teachers and administrators to monitor attendance trends and take corrective action as needed.
The benefits of the proposed system are numerous. The software will improve accuracy and reliability, reduce the workload of teachers, and provide a more comprehensive and efficient way to manage attendance. Moreover, the system will identify areas for improvement, leading to better student engagement.

### 3. Objectives:
<li>Identify the existing bugs and inefficiencies in the current system, which will be addressed in the new design.</li>
<li>Implement new attendance marking options: In addition to the current attendance marking system using QR codes, alternative methods such as typing in a line of random generated code should be an option for students in case their device faces camera issues.</li>
<li>Implement location based check-ins: Students are often able to mark their attendance without actually attending the class through the help of their friends. With the implementation of location based check-ins, we can ensure  the students that have marked their location are actually attending the class.</li>
<li>Implement biometric authentication: Biometric authentication, such as facial recognition or fingerprint scanning. This helps to prevent attendance fraud and increase accuracy.</li>
<li>Generate a table that records the attendance of the students, displays their attending time in order, and highlights students who are late to class. The table eases the management of student attendance for the lecturers.</li>

### 4. Scope: 
The scope of this project includes attendance tracking, reporting and analytics, integration with other systems, mobile accessibility, security, and customization. The system allows teachers to track and record student attendance. Besides, the system provides insights into attendance patterns, and visualisations that can be used by lecturers to ease decision making. Moreover, the system should be able to integrate with other university systems such as the student information system and the learning management system. For mobile accessibility, the system is accessible from mobile devices, to ease the attendance submission process. The system should have strong data security measures to protect student’s data and prevent unauthorised access. Other than that, the system should be easily customised to meet the specific requirements of the university, such as class schedules.

### 5. Software Process Model:
The ideal software process model for the development of UTM Student Attendance Management System is Agile methodology.
Agile Methodology is a flexible and iterative approach to software development that allows for continuous feedback and adaptation. It is suitable for this project as it enables us to respond quickly to changes and deliver working software early and often.
<img width="465" alt="image" src="https://user-images.githubusercontent.com/129235052/235556623-d14c5c2e-9fa6-4c44-b8ff-9290ced8e78e.png">

The phases involved in the AGILE software process model are:
#### 1. Planning Phase: 
The planning phase involves defining the scope of the project, identifying the stakeholders, and creating a project roadmap. The duration for this phase is two weeks, and the project manager (Jaslene Yu)  is responsible for this phase's deliverables, which include the project roadmap and stakeholder analysis.
#### 2. Analysis Phase: 
The analysis phase involves gathering requirements and identifying user stories. The duration for this phase is four weeks, and the business analyst (Nicole Lim Tze Yee) is responsible for this phase's deliverables, which include the requirements document and user stories.
#### 3. Design Phase: 
The design phase involves creating the system architecture, wireframes, and prototypes. The duration for this phase is six weeks, and the UI/UX designer (Tiew Chuan Rong)  is responsible for this phase's deliverables, which include the system architecture, wireframes, and prototypes. 
#### 4. Implementation Phase: 
The implementation phase involves developing and testing the software. The duration for this phase is eight weeks, and the developer (Tiew Chuan Shen)  is responsible for this phase's deliverables, which include working software and test reports. The person in charge for this phase is Tiew Chuan Shen.
#### 5. Review Phase: 
The review phase involves reviewing the software and identifying areas for improvement. The duration for this phase is two weeks, and the quality assurance team (Wong Jun Ji)  is responsible for this phase's deliverables, which include the review report and the list of improvements. <br>
Testing methodologies such as unit testing, integration testing, system testing, and acceptance testing are used to assure the quality and functionality of the system. The project management practices for this project include regular communication, project tracking, risk management and change management. Lastly, the quality assurance processes for this project are code reviews, testing and continuous integration.

### 6. Budget:
<li>Salaries: Pay the team members involved in the development process, such as project managers, system analysts, software developers, testers, etc.</li>
<li>Software tools and licences: The cost to purchase software tools or licences required to develop the system, such as IDEs, and development platforms.</li>
<li>Hardware and infrastructure: The cost to purchase or lease hardware and infrastructure required to reinforce the development process, such as servers, workstations, network equipment, and storage devices.</li>
<li>Training and professional development: The cost to acquire new skills of the team and achieve certifications required to develop the system more effectively via training.</li>
<li>Others: Other expenses that may arise during the development process, such as legal fees, insurance, and etc.</li>

### 7. System Architecture:
<li>User Interface: UTM Smart to allow users to interact with our system.It lets students, teachers, and administrators view attendance data and mark attendance.</li>
<li>Application Server: The application server runs the system's logic, handles data processing, communicates with other system components, and manages the database.</li>
<li>Database: Stores attendance-related data such as student information and attendance records, and is designed to handle large volumes of data efficiently.</li>
<li>Authentication and Authorization: Verifies user identity and permissions.</li>
<li>Integration with Other Systems: The student attendance system may integrate with other systems, such as student information systems. This component data sharing seamlessly between the student attendance system and other systems.</li>
<li>Reporting and Analytics: The reporting and analytics component offers attendance insights and tools for generating reports and visualisations.</li>

### 8. Risks Assessment:
<li>Stakeholder issues such as low engagement and inaccurate expectations.
Time allocated for us to communicate to stakeholders is not enough as both stakeholders and us are having different schedules.It is difficult for us to have a meeting at the same time. Hence,the stakeholder might interact with us via social media such as Whatsapp and Email. Thus, the stakeholder may misunderstand what we want to deliver and cause inaccurate expectations.</li>
<li>Technical risk such as system failures or data corruption. These problems may arise due to software/hardware failure, database management and network.
User acceptance risk </li>
<li>Target users may refuse to provide their personal data such as name and student ID that is necessary for attendance records. And users prefer the previous version of the system.
</li>
<li>Security risk. This system consists of students’ data. Thus we have to take risk on data lost issues from hacking, phishing or data breaches.</li>
<li>Data Quality risk such as data entry error, system glitches may provide wrong information to the users.</li>
<li>Implementation risk including cost overruns, and difficulties integrating the system with school systems and process</li>

### 9. Resources:
#### Staff
<li>Project manager</li>
<li>System analyst</li>
<li>Software developer</li>
<li>Database administrator</li>

#### Equipment:
<li>Computers/Laptops</li>
<li>Servers</li>
<li>Network infrastructure (switches, routers, storage, etc.)</li>
<li>Printers and scanners</li>
<li>Mobile devices (tablets/smartphones)</li>

#### Software:
<li>Integrated Development Environment (IDE)</li>
<li>Database management system</li>
<li>Version control system</li>
<li>Project management software</li>
<li>Testing tools</li>
<li>Security software</li>

#### Other expenses:
<li>Rental fees (office)</li>
<li>Bills (Internet, phone, utilities, petrol, etc.)</li>
<li>Cloud computing services</li>
<li>Training and development programs for the team members</li>
<li>Legal and administrative fees</li>

### 10. Technical Specifications:
<li>Data sources: Data will be collected through methods that students use to submit their attendance. For example, students can scan the attendance QR via their devices or students can insert a randomly generated code to submit their attendance. Data will also be collected via biometric devices such as fingerprint scanners and facial recognition systems in order to prove that their attendance is valid.</li>
<li>Data Schema: 
Student data (name,student ID, program, year, section)
Attendance data (date, time, location)
User data (user ID, user type, user permissions)</li>
<li>Data Transformations: Data cleaning and validation. To ensure that data is accurate, complete, and consistent. Data cleaning involves identifying and correcting errors, such as misspellings, missing values, or duplicates, while data validation involves checking that the data meets certain criteria. Data enrichment and augmentation  to improve the quality, accuracy, and usefulness of data for various applications, such as business intelligence, research, and machine learning.</li>
<li>Machine Learning Algorithms: Classification algorithms (Decision Trees, Random Forests ,etc) In student attendance systems, the algorithm could be used to predict whether a student is present or absent based on input data such as time, location, and biometric data.</li>
<li>Data Visualization Tools: 
Bar charts to display attendance rates for students. Pie charts to show the percentage of students’ status. Heat maps to show the overall attendance rates of students in a particular course or class. And also Python and Java which include libraries that are used for data visualization. </li>
<li>Hardware and Software Requirements: Computers/Laptops, servers, network infrastructure (switches, routers, storage, etc.), printers and scanners, mobile devices (tablets/smartphones), integrated Development Environment (IDE), database management system, version control system, project management software, testing tools, and security software</li>

<li>Data Security Measures: Encryption, the process of converting data into a coded language that can only be accessed with a decryption key. This can prevent unauthorised access to sensitive data.</li>

### 11. Timeline and Deliverables: 
- Provide a detailed timeline for the project, including milestones and deadlines.
- Specify the deliverables that will be provided at each milestone. It should also specify the expected time frame for each deliverable and the resources that will be required to complete the project.
- Explain the quality assurance and testing procedures that will be followed.

### 12. Conclusion:
  In conclusion, the recommended UTM Student Attendance Management System is designed to improve the existing system as there are some weaknesses or bugs. Such problems are students can scan the attendance without attending the actual lecture, leading to fake data received by lecturers. This will indirectly affect student’s academic performance and preferences. The modified system intends to improve the accuracy of the data, efficiency of the system and better management of student’s attendance data. To add on, the recommended system can increase the satisfaction of lecturers, enhance productivity and an overall  more dependable system.

  However, there are also issues and challenges when doing and implementing this system. For example, technical issues like sometimes the system may fail due to software/hardware failure and network connection problems and this will cause the lecturer can’t access the QR code for the student to scan their attendance on time. As a result, this problem will affect the accuracy and consistency of the data and corrupt the data in the system.

  We encourage the decision-makers to consider this proposal and approve the project, as this mostly benefits lecturers and students who are the most important role to symbolise a university. With this improved system, the users will face less issues and bugs.
