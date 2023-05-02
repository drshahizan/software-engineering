#  Proposal 

## Student Health and Wellness Management System


### Prepared by: Group Software
  1. Lee Yik Hong A21BE0376
  2. Koh Su Xuan A22EC0060
  3. Ong Yi Yan A22EC0101
  4. Tang Yan Qing A22EC0109
  5. Goh Jiale A22EA0043

### Table of Contents
- [Table of Contents](#table-of-contents)
- [Executive Summary](#1-executive-summary)
- [Background](#2-background)
- [Objectives](#3-objectives)
- [Scope](#4-scope)
- [Software Process Model](#5-software-process-model)
- [Budget](#6-budget)
- [System Architecture](#7-system-architecture)
- [Risks Assessment](#8-risks-assessment)
- [Resources](#9-resources)
- [Technical Specifications](#10-technical-specifications)
- [Timeline and Deliverables](#11-timeline-and-deliverables)
- [Conclusion](#12-conclusion)
  
### 1. Executive Summary
The Student Health and Wellness website is a software engineering course project aimed at improving the health and well-being of university students, in cooperation with Pusat Kesihatan University (PKU). The website will provide students with access to a wide range of resources and tools that will help them manage their physical, mental, and emotional health.

The website will be developed using the latest software engineering techniques, and will feature a user-friendly interface that is easy to navigate. Students will be able to access the website from any device, including desktop computers, laptops, tablets, and smartphones. The website will be designed with accessibility in mind, ensuring that all students can access and use the site.

The Student Health and Wellness website will feature a range of resources, including articles, videos, and podcasts, that cover a variety of topics related to health and wellness. These resources will be developed in collaboration with PKU, ensuring that they are accurate, up-to-date, and relevant to the needs of university students.

Overall, the Student Health and Wellness website is an innovative project that has the potential to make a real difference in the lives of university students. By providing students with access to accurate information and resources, and by offering tools and services to help them manage their health and wellness, the website will help students achieve their full potential and lead happy, healthy lives.


### 2. Background:
- Process slow and walk in and far for some students.
- More efficient if can pre-booking and can manage more time.
- Pre-online consultation and safe time
- Can give more health information to students and increase health awareness.

### 3. Objectives:
- The objectives section should clearly state the goals and objectives of the software project. It should describe the intended outcomes of the software and how it will address the problem it aims to solve. 
- Objectives should be specific, measurable, achievable, relevant, and time-bound (SMART).

### 4. Scope: 
The Student Health and Wellness Management System proposed in this project will be limited to the development, implementation, and maintenance of the software application. The scope of the project does not include any hardware or infrastructure upgrades or any changes to existing policies or procedures.  
  
The boundaries of the project will be defined by the following:  
- The Student Health and Wellness Management System will be designed to integrate seamlessly with the existing student information system, and the development team will work closely with the system's administrators to ensure compatibility.  
- The proposed system will only include features related to student health and wellness, including health tracking, online chat with PKU, SOS, making appointments, and health tips. Any additional features requested by stakeholders will be considered out of scope and require further analysis.  
- The system's security and privacy features will be designed to comply with all relevant laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA) and the General Data Protection Regulation (GDPR).  
  
Overall, the proposed Student Health and Wellness Management System's scope is defined by the project's boundaries, limitations, and constraints, and it will be developed and implemented in a manner that ensures compliance with all relevant laws, regulations, and policies.

### 5. Software Process Model:
This section describe the ideal software process model for this system development. The write-up must consist of:
- Explanation of the goal of the software process model.
- Choose the ideal software process model and give justification.
- The illustration of chosen software process model that relates to your project and shows every phase involved in the chosen software process model
- Describe detailed activities that are relevant to every phase of the software process model (you may use a Gantt chart or any suitable project management tool). Determine the suitable duration for every phase and assign the person in charge. Also, propose the appropriate deliverables/products/outputs for every phase. 
- It should also describe the testing methodologies, project management practices, and quality assurance processes.

### 6. Budget:
- Hardware
- Testing
- Contingency
- Personnel
- Software

### 7. System Architecture:
#### Presentation Layer:
-User interface design (HTML, CSS, JavaScript) <br>
-Content management system (CMS) for managing website content<br>
-Accessibility features to ensure the website is accessible to users with disabilities<br>
-Responsive design for optimal display on various devices and screen sizes<br>
#### Application Layer:
-Web server (e.g. Apache, Nginx)<br>
-Web application framework (e.g. Django, Ruby on Rails)<br>
-Business logic and data processing code<br>
-Integration with external services (e.g. appointment scheduling, health records)<br>

#### Data Layer:
-Relational database management system (e.g. MySQL, PostgreSQL)<br>
-Data schema design and management<br>
-Data access layer (e.g. Object Relational Mapping)<br>
#### Security Layer:
-SSL/TLS encryption<br>
-User authentication and authorization mechanisms (e.g. OAuth2, LDAP)<br>
-Access control and permission management<br>
-Logging and monitoring for detecting and responding to security incidents<br>



### 8. Risks Assessment:
In general, every project can be influenced by a risk so they required a special assessment procedure of the potential risks that could lead to the project's failure or loss if they occur. To develop a student health and wellness management system, the possible risks are: 
1. Data breaches: The website may contain sensitive information, such as student health records, which could be targeted by hackers. This could result in the theft of personal information and medical histories, leading to identity theft and other forms of fraud.

2. Denial of service(DoS) attacks: A malicious user or group may attempt to overload the website with traffic, causing it to crash or become inaccessible. This could disrupt the availability of critical health services and information.

3. Malware infections: The website may be infected with malware, which could spread to users' computers and compromise their security. This could result in the theft of personal information or control of the user's device.

4. Insecure coding practices: If the website is not developed using secure coding practices, vulnerabilities could be introduced into the code that could be exploited by attackers.

5. Insider threats: Employees or contractors with access to the website's systems may intentionally or accidentally cause security breaches or data leaks.

To mitigate these risks, a few steps can be taken: 
1. Implement Robust Security Measures: This include the use of SSL certificates, two-factor authentication, encryption and frequent website security updates. It is crucial to constantly evaluate the website's security to find any weaknesses.

2. Deploy Web Application Firewall (WAF): A WAF can assist in removing harmful traffic from a network before it reaches a server. It can identify and prevent requests intended to launch denial-of-service (DoS) attacks, such as SYN and ICMP floods.

3. Update software and plugin: It is crucial to keep software and plugins used by the website up-to-date, including the operating system, web server software, content management system and any third-party plugins because malware can take advantage of weaknesses created by outdated software. 

4. Follow secure coding guidelines: To make sure that the website is designed with secure coding practises in mind, follow known secure coding guidelines such as the OWASP Top Ten or CERT Secure Coding Standards. These guidelines should cover aspects like input validation, authentication, access control, and data encryption.

5. Implement strict access controls: It is important to set up strict access restrictions and allow only those people who truly require access to sensitive information to perform their jobs. Access control lists, role-based access controls, and user authentication can help with this.

### 9. Resources:
- Provide a detailed breakdown of the resources required for the proposed project, including staff, equipment, software, and other expenses.

### 10. Technical Specifications:
- Platform : Web-based application
- Language : PHP (backend), HTML, CSS, and JavaScript (frontend)
- Database : MySQL
- Software : Bootstrap Studio
- Authentication : User authentication and authorization
- Security: SSL encryption and data encryption at rest  
  - Modules: Student registration  
  - Health assessment and history  
  - Medical record keeping  
  - Appointment scheduling  
  - Prescription and medication management  
  - Billing and invoicing  
  - Reporting and analytic  
- Integration: Integration with the university's student information system and electronic health record system
- Accessibility: Section 508 compliance
- Scalability: Ability to handle large volumes of data and users
- Support: 24/7 technical support and maintenance
- Deployment: Cloud-based deployment with automatic scaling and redundancy
- Compatibility: Cross-browser compatibility with major web browsers.

### 11. Timeline and Deliverables: 
<img src="https://user-images.githubusercontent.com/128119778/235573097-59816732-16ae-4c72-9160-243694795b03.jpeg">

- Week 4-6 : `Project Planning`
- Week 6-8 : `Requirements Gathering`
- Week 8-10 : `Preparing Requirement Document`
- Week 10-13 : `System Development`
- Week 10-12 : `System Debugging`
- Week 10-14 : `System Documentation`
- Week 15 : `Project Demonstration`
- Week 13-16 : `System Maintanance`

### 12. Conclusion:
- Simplify and streamline PKU processing time for students and administrators.
- Provide easy access to medical resources, health tracking tools, and health tips and advice.
- Enable students to communicate with medical professionals, receive medical advice, and make appointments for medical services.
- Provide a quick and easy way for students to call for emergency assistance in case of a medical emergency.
- Collect and analyze data on student health trends, allowing PKU to better understand the health needs of the student population and provide targeted interventions.
- Ensure compliance with all relevant laws, regulations, and policies, including HIPAA and GDPR, while maintaining a secure and user-friendly platform.


