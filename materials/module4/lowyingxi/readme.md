<a href="https://github.com/drshahizan/software-engineering/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/software-engineering" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/network/members"><img src="https://img.shields.io/github/forks/drshahizan/software-engineering" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/software-engineering" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering"><img src="https://img.shields.io/github/issues/drshahizan/software-engineering" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/software-engineering/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/software-engineering?color=2b9348"></a>
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering&countColor=%23263759&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan%2Fsoftware-engineering)


Don't forget to hit the :star: if you like this repo.

# Software Requirements Document (SRD): Event Calendar for UTM

Define the purpose and scope: Decide on the purpose of the calendar and who the target audience is. Will it be for current students, faculty, staff, alumni, or the general public? Will it cover all events on campus or focus on specific types of events?

## 1)Choose a platform: 
Decide on the platform you will use to host and manage the calendar. This could be a pre-existing calendar tool or a custom solution.

## 2)Gather event information: 
Collect all necessary information about each event, including the name, date, time, location, description, and any other pertinent details.

## 3)Design the calendar:
Design the calendar with the end-user in mind. Consider the layout and user experience to make it easy to navigate and find events.

## 4)Populate the calendar: 
Add all the events to the calendar, making sure to include all relevant information.

## 5)Promote the calendar:
Promote the calendar to the target audience through various channels such as social media, email newsletters, flyers, and posters.

## 6)Maintain and update the calendar: 
Regularly update and maintain the calendar to keep it current and accurate. Assign someone to manage the calendar and review event submissions regularly to ensure it stays up to date.


## Stalkholders
- Event organizers: These stakeholders are responsible for planning and organizing events on campus. They will use the event management system to create event schedules, manage event registration, and track event attendance. They may also use the system to manage event budgets, request event space and resources, and communicate with event attendees.

- Students: Students are a crucial stakeholder for an event management system as they are the primary audience for campus events. They will use the system to view event schedules, register for events, and receive event reminders and updates. Students may also use the system to provide feedback on events and suggest new event ideas.

- Administrative staff: Administrative staff, such as event coordinators or university officials, are responsible for overseeing and managing events on campus. They will use the event management system to track event attendance, manage event budgets, and ensure that events comply with university policies and regulations. Administrative staff may also use the system to analyze event data and metrics to improve future events.

- Faculty members: Faculty members may be involved in organizing academic events, such as conferences or guest lectures, and may use the event management system to manage event logistics and communicate with event attendees.

- Facilities management: Facilities management staff are responsible for managing and maintaining the physical facilities on campus. They may use the event management system to ensure that event spaces are available and properly equipped, and to coordinate with event organizers on any needed setup or cleanup.
## Requirements Engineering
Requirements engineering is the process of eliciting, analyzing, specifying, validating, and managing the requirements for a software system. In the context of an university event management system, the requirements engineering process is crucial for ensuring that the system meets the needs of its stakeholders, including students, faculty members, and university administrators.

-IT staff: IT staff are responsible for managing the technical infrastructure of the event management system, such as servers, databases, and network security. They may also provide technical support to users of the system and ensure that the system is compatible with other university systems and tools.
The requirements engineering process for an university event management system typically involves the following steps:
# Requirements Engineering

## Gather information: 
The first step is to gather information about the users and their needs. For UTM, the main users would be students, faculty, and staff. Some important questions to consider during this phase are:
- What kind of events do users want to see on the calendar?
- What information do they need to know about the events (date, time, location, description, etc.)?
- How frequently do events occur and how far in advance do users need to know about them?
- How will users access the calendar (website, mobile app, etc.)?

## Define functional requirements: 
Based on the information gathered, the next step is to define the functional requirements of the event calendar. These are the specific features and functions the calendar must perform to meet the needs of users. Some potential functional requirements for UTM's event calendar might include:
- Ability to search and filter events by category, date, and location
- Ability to add events to a personal calendar or set reminders
- Integration with other UTM systems (such as the course registration system or campus map)
- Ability for event organizers to submit events for approval and add details to their listings
- Ability for users to provide feedback on events or suggest new events

## Define non-functional requirements:
In addition to functional requirements, non-functional requirements define the qualities and characteristics the event calendar must possess. Some non-functional requirements for UTM's event calendar might include:
- Usability: The calendar should be easy to navigate and use, with clear labels and intuitive design.
- Performance: The calendar should load quickly and be able to handle a large volume of events and users without crashing or slowing down.
- Security: The calendar should be secure and protect user data from unauthorized access or misuse.
- Accessibility: The calendar should be accessible to users with disabilities, complying with accessibility standards such as WCAG 2.0.
- Prioritize requirements: Once all the requirements are defined, it's important to prioritize them based on their importance and feasibility. This can be done by ranking each requirement on a scale of 1-5 for importance and difficulty. This helps ensure that the most critical and achievable requirements are implemented first.

## Validate requirements:
Finally, the requirements should be validated with stakeholders to ensure they accurately capture the needs of users and can be met within the project timeline and budget. Feedback from stakeholders can be incorporated into the requirements documentation before development begins.


## User System Requirement
### System Development:
- The system should be web-based and accessible through a secure login system.
- The system should have an intuitive user interface that allows event organizers to easily create and manage events, and allows students to easily search for and register for events.
- The system should have a database to store event information, including event schedules, event locations, event descriptions, and event registration information.
- The system should allow for different types of events, such as academic conferences, social events, and athletic events, and allow event organizers to customize event registration forms to collect necessary information.
- The system should allow event organizers to manage event budgets, request event space and resources, and communicate with event attendees.
- The system should provide notifications and reminders to event attendees, such as reminders about upcoming events or updates about event changes.
### System Testing:
- The system should be tested to ensure that it can handle a large number of users and events.
- The system should be tested for scalability to ensure that it can handle an increase in users and events in the future.
- The system should be tested for performance to ensure that it can handle the expected load and provide a fast and responsive user experience.
- The system should be tested for security to ensure that it is secure and that user data is protected.
### System Deployment:
- The system should be deployed on a secure and reliable server infrastructure that can handle the expected load of users and events.
- The system should be integrated with other relevant university systems, such as the university's calendar or registration system.
- The system should be accessible to users through a web browser, and should be compatible with a range of devices, including desktops, laptops, tablets, and smartphones.
### System Maintenance:
- The system should be regularly maintained to ensure that it remains up-to-date and relevant.
- The system should be monitored for performance and security issues, and any issues should be addressed in a timely manner.
- The system should provide technical support to users, and should have a help desk or support team that can address user questions and issues.
- The system should provide regular backups of user data to ensure that user data is protected in case of a system failure or other issue.


## User Requirements and System Requirements
User Requirements:

- Event organizers should be able to create new events, set event details such as date, time, and location, and manage event resources and logistics.
- Students should be able to browse and search for events, register for events, and receive event notifications and reminders.
- Administrative staff should be able to view and manage all events on campus, approve event requests, and manage event budgets.
- Facilities management staff should be able to view event schedules and space availability, and coordinate with event organizers on event setup and cleanup.
- IT staff should be able to manage the technical infrastructure of the event management system and provide technical support to users of the system.
- Marketing and communications staff should be able to create event listings and marketing materials through the system, track event engagement and attendance rates, and communicate with event attendees.
- Alumni relations staff should be able to organize events that engage alumni and promote alumni involvement with the university.

System Requirements:

- The event management system should be web-based and accessible through a secure login system.
- The system should have an intuitive user interface that allows event organizers to easily create and manage events, and allows students to easily search for and register for events.
- The system should have a database to store event information, including event schedules, event locations, event descriptions, and event registration information.
- The system should allow for different types of events, such as academic conferences, social events, and athletic events, and allow event organizers to customize event registration forms to collect necessary information.
- The system should allow event organizers to manage event budgets, request event space and resources, and communicate with event attendees.
- The system should provide notifications and reminders to event attendees, such as reminders about upcoming events or updates about event changes.
- The system should be tested for scalability, performance, and security, to ensure that it can handle a large number of users and events, provide a fast and responsive user experience, and protect user data.
- The system should be regularly maintained and updated to ensure that it remains up-to-date and relevant, and provide technical support to users.



## Functional Requirements
#### 1)User Registration and Login:
- Users should be able to register for an account in the system.
- Users should be able to log in to the system using their email address and password.
- Users should be able to reset their password in case they forget it.
#### 2)Event Creation and Management:
- Event organizers should be able to create new events in the system.
- Event organizers should be able to set event details such as date, time, location, and event description.
- Event organizers should be able to create custom registration forms for events to collect necessary information.
- Event organizers should be able to manage event budgets, resources, and event logistics.
- Event organizers should be able to communicate with event attendees through the system.
- Event organizers should be able to view event metrics and data such as registration numbers and attendance rates.
#### 3)Event Search and Registration:
- Students should be able to search and browse events by date, category, or keywords.
- Students should be able to register for events through the system.
- Students should be able to receive event notifications and reminders.
- Students should be able to provide feedback on events and suggest new event ideas.
#### 4)Administrative Approval and Management:
- Administrative staff should be able to view and manage all events on campus.
- Administrative staff should be able to approve event requests and manage event budgets.
- Administrative staff should be able to view event metrics and data such as registration numbers and attendance rates.
- Administrative staff should be able to enforce university policies and regulations related to events.
#### 5)Event Space and Resource Management:
- Facilities management staff should be able to view event schedules and event space availability.
- Facilities management staff should be able to coordinate with event organizers on event setup and cleanup.
- Facilities management staff should be able to manage event resources such as audiovisual equipment, tables, chairs, and decorations.
#### 6)Technical Support and Maintenance:
- IT staff should be able to manage the technical infrastructure of the event management system.
- IT staff should be able to provide technical support to users of the system.
- IT staff should be able to ensure that the system is secure and that user data is protected.
- IT staff should be able to monitor the system for performance issues and resolve them in a timely manner.
#### 7)Reporting and Analytics:
- The system should be able to generate reports and analytics on event metrics such as attendance rates and registration numbers.
- The system should be able to provide data visualization tools to help users understand event data and trends.
- The system should be able to integrate with other university systems to provide a comprehensive view of university events and activities.

## Interview with stalkholder
Before going for an interview with your stakeholders for developing an event management system, here are some steps you may want to take:

- Gather information about the stakeholders: Learn as much as you can about the stakeholders and their needs. This will help you prepare for the interview and tailor your responses to their specific requirements.

- Research the university's event management processes: Familiarize yourself with the university's current event management processes and systems. This will help you understand the stakeholders' needs and how you can contribute to the development of the system.

- Prepare a list of questions: Prepare a list of questions to ask the stakeholders during the interview. This will help you gather information and ensure that you fully understand their requirements.

- Review your qualifications: Review your qualifications and experience, and think about how they relate to the requirements of the position. Be prepared to discuss your relevant skills and experience during the interview.

- Prepare a portfolio or samples of your work: If you have previous experience developing event management systems, prepare a portfolio or samples of your work to demonstrate your skills and experience.

- Prepare a presentation: Consider preparing a presentation to demonstrate your understanding of the stakeholders' needs and how you propose to address them. This will help you showcase your skills and expertise, and provide a visual representation of your proposed system.

- Practice your communication skills: Communication is an important skill for any developer, so practice presenting your ideas clearly and concisely. Be prepared to explain complex technical concepts in a way that non-technical stakeholders can understand.

Here are some questions you can ask your stakeholders for developing an event management system for the university:

- What are the current challenges you face in managing events at the university?

- What features and functionalities do you need in the event management system to make your work easier?

- What is the expected number of users who will use the system, and what roles will they have?

- How do you currently track attendance and manage registration for events, and what improvements do you want to see in the new system?

- What types of events do you currently manage, and what new types of events do you want the system to support?

- How do you currently market and promote events, and what features do you need in the new system to improve your marketing efforts?

- What is the budget for the event management system, and what are the cost-saving measures that can be implemented?

- What is the timeline for the development and deployment of the event management system, and what are the critical milestones?

- What data do you need to collect and analyze for reporting purposes, and what reports and analytics do you want to see in the system?

- What are your security requirements, and what measures do you want to implement to ensure data privacy and protection?

During the interview with your stakeholders for developing an event management system, here are some things you can do:

- Listen carefully: Listen carefully to the stakeholders' requirements, concerns, and suggestions. Make sure you understand their needs before proposing solutions.

- Ask questions: Ask questions to clarify requirements, identify potential issues, and gather more information. This will help you design a system that meets the stakeholders' needs.

- Explain your approach: Explain your approach to developing the event management system, including how you plan to gather requirements, design the system, test it, and deploy it.

- Demonstrate your knowledge: Demonstrate your knowledge of event management systems and your technical expertise. Explain how your experience and skills can benefit the stakeholders.

- Be flexible: Be open to suggestions and feedback from the stakeholders. Adjust your approach and proposals based on their input.

- Provide examples: Provide examples of your previous work and experience that are relevant to the development of the event management system.

- Address concerns: Address any concerns or questions the stakeholders may have. Explain how you plan to address any issues that may arise during the development process.

- Follow up: Follow up with the stakeholders after the interview to provide additional information or answer any questions they may have.
## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/software-engineering/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://komarev.com/ghpvc/?username=drshahizan&label=Views&color=0e75b6&style=flat)
![](https://hit.yhype.me/github/profile?user_id=81284918)




