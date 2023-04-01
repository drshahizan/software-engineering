<!---
Module 4 : Requirements Engineering
Group: Beta 
1. MUHAMMAD ARIFF DANISH BIN HASHNAN , A22EC0204
2. MUHAMMAD IMAN FIRDAUS BIN BAHARUDDIN , A22EC0216
3. MUHAMMAD SAFWAN BIN MOHD AZMI , A22EC0221
4. 
-->

# Module 4 : Requirements Engineering 
Lecturer notes click [here](https://drive.google.com/drive/folders/1fFqVSa7WdQ2Uet0UdvbQcALUVcqme6gw) ⬅️



|  | Contents |
|--|--|
| 1 |  Type of requirements |
| 2 |  Functional and non-funtional requirements  |
| 3 |  Requirements specification |
| 4 |  Requirement engineering process |



## Objectives 💡
 - [ ] To differentiate users and system requirements
 - [ ] To understand functional requirements (FR) and non-
functional requirements (NFR)
 - [ ] To know diverse techniques to write requirements
specification
 - [ ] To understand the main requirements engineering
activities that are elicitation, analysis and validation

## Recap: Requirements Engineering
![enter image description here](https://static.javatpoint.com/tutorial/software-engineering/images/requirement-engineering.jpg)

## Type of Requirements 🗒️
### What is a requirement ?
 - [ ] Requirement engineering is a process that involves eliciting, analyzing, specifying, validating, and managing the requirements for a software system or product. It is a systematic approach that ensures that the stakeholders' needs and expectations are clearly understood and documented, and that the resulting system or product meets those needs.
 - [ ] Requirement engineering involves identifying and documenting the functional and non-functional requirements for the software system or product, as well as any constraints that may impact the development or operation of the system. This process is typically iterative, with requirements being refined and updated throughout the software development lifecycle.
 - [ ] The objective of requirement engineering is to ensure that the resulting system or product meets the needs and expectations of the stakeholders, is of high quality, and is delivered on time and within budget. It also involves managing the requirements throughout the development process, ensuring that they remain consistent and that any changes are properly tracked and managed.
 - [ ] Effective requirement engineering is critical to the success of a software development project, as it helps to ensure that the final product meets the needs and expectations of the stakeholders, is delivered on time and within budget, and is of high quality.


### User Requirements VS System Requirements 

|  **User Requirements**| **System Requirements** |
|--|--|
| Use case diagrams, constraints and operational statements of the user's language of services to depict. | Descriptions of systems functions, operational constraints and structured documents that defines how and what to implement
| **Examples :** Management Usage, Customer Usage, Developers, Third Party Usage  | **Examples :** System Users, Developers, System Architecture, Network System Models, Functional Models|



## Functional and Non-funtional Requirements ⚙️
|**Functional**|**Non-Functional Requirements**|
|--|--|
|**Statements of services** the system should provide, how the system should **react** to particular inputs and how the system should behave in particular situations|**Constraints on the services** or functions offered by the system such as timing constraints, constraints on the development process, standards, etc.|
|May state what the system should not do|Often apply to the system as a whole rather than individual features or services|

-Besides FR and NFR, there are **domain requirements**
 Constraints on the system from the domain of operation

## Functional Requirement

• Describe functionality or system services

• Depend on the type of software, expected users and
the type of system where the software is used

• Functional **user requirements** may be high-level
statements of what the system should do

• Functional **system requirements** should describe the
system services in detail

## Functional Requirements for the MHC-PMS

• A user **shall** be able to search the appointments lists
for all clinics

• The system **shall** generate each day, for each clinic, a list of patients who are expected to attend appointments that day

• Each staff member using the system **shall** be uniquely identified by his or her 8-digit employee number Requirements Imprecision

• Problems arise when requirements are not precisely stated

• Ambiguous requirements may be interpreted in different ways by developers and users

• Consider the term ‘search’ in requirement 1:

– User intention: search for a patient name across all appointments in all clinics

– Developer interpretation: Search for a patient name in an individual clinic. User chooses clinic then search.

ex:A user shall be able to search the appointments lists for all clinicsA user shall be able to search the appointments lists for all clinics


## Requirements Specification 📖
### Software Requirements Document
The software requirements document is a statement of what the system developers need to do. It should include what the user wants and what the system needs. It's not a design document and should focus on what the system should do, not how it should do it
### Agile Methods and Requirements
Agile methods suggest that creating a requirements document is not useful as the requirements keep changing frequently, making the document outdated. Instead, methods like XP use incremental requirements engineering and represent requirements as user stories. While this approach works well for business systems, it can be challenging for critical systems or projects developed by multiple teams that require a lot of pre-delivery analysis.
### Requirements Specification
1-User requirements should be easy to understand for people without technical knowledge.

2-System requirements are more detailed and technical.

3-Complete requirements are important, especially if they are part of a system development contract
### Ways of Writing a System Requirements Specification
Identify the purpose of the system - What is the system supposed to do?

Define the features and functions - What specific features should be included? What functions should the system perform?

List the hardware and software requirements - What operating systems and other software are required for the system to operate? What hardware is necessary?

Determine performance expectations - What performance metrics should be met by the system?

Define user roles and permissions - Who will be using the system and what are their access levels?

Establish security requirements - What security measures should be implemented to protect the system and its data?

Define data requirements - What data will be used and how will it be stored, processed and shared?

List any external interfaces - What external systems or services will the system interact with?

Include any relevant regulations or standards - Are there any specific regulations or industry standards that must be followed?

Provide clear and concise documentation - Ensure that the specification is easy to understand and use as a reference for the development team
### Requirements and Design
Requirements tell us what the system should do, while design describes how it will achieve this goal. However, in reality, requirements and design are closely related. The system's architecture is designed to meet the requirements, and other systems may generate design requirements. Non-functional requirements may also dictate the use of a specific architecture, which could be a regulatory requirement. Therefore, requirements and design are not completely separable in practice
### Natural Language Specification
Requirements are statements written in regular language and sometimes supported by visual aids like diagrams or tables. They are used to express what a project needs to achieve. Natural language is preferred as it is easy to understand and universally accessible. This allows users and customers to comprehend the requirements
### Guidelines for Writing Requirements
1-Create a standardized format for requirements and use it consistently.

2-Use language consistently.

3-Use "shall" for mandatory requirements and "should" for desirable requirements.

4-Highlight important parts of the requirement.

5-Avoid computer jargon.

6-Include an explanation for why a requirement is necessary.
### Problems With Natural Language
#### • Not clear

It's hard to be precise without making the document hard to read.
#### • Confusing requirements

The functional and non-functional requirements are often mixed up.
#### • Combined requirements

Multiple requirements may be expressed together.
### Example of Requirements for the Insulin Pump Software System
1-The system must accurately calculate and deliver insulin doses based on the user's blood glucose levels and other input parameters.

2-The system must have a user-friendly interface that allows the user to easily input and adjust their insulin dosing regimen.

3-The system must be able to communicate with compatible glucose monitoring devices and other healthcare providers as needed.

4-The system must have built-in safety features to prevent over-dosing or under-dosing of insulin.

5-The system must be able to provide alerts and notifications to the user and/or healthcare providers in the event of any issues or concerns.

6-The system must be reliable and consistent in its operation, with minimal downtime or malfunctions.

7-The system must be secure and protect the user's personal and medical information.

8-The system must be easily updatable and maintainable over time to ensure continued optimal performance.
### Structured Specifications
"Writing requirements in a standardized way with limited freedom is a useful approach for some types of requirements, like those for embedded control systems, but can be too rigid for business system requirements."
### A Structured Specification of a Requirements for an Insulin Pump
### Form-Based Specifications
Function/Entity: A specific task or process that takes inputs and produces outputs.

Inputs: Data or information that is provided to the function/entity as its input. Inputs can come from various sources such as user input, database, sensors, or other functions/entities.

Outputs: The result or outcome produced by the function/entity after processing its inputs. Outputs can be sent to various destinations such as a display, database, or another function/entity.

Computation Information: Information required to perform the computation within the function/entity, such as algorithms, formulas, or rules. Other entities used may refer to other functions or entities that the current function/entity relies on to perform its task.

Action: The specific task that the function/entity is designed to perform on the inputs to produce the outputs. The action can be a simple or complex process depending on the function/entity's purpose.

Pre-conditions: The required conditions that must be met before the function/entity can execute properly. These can include specific inputs or settings that must be in place before the function/entity can start its process.

Post-conditions: The expected results or conditions that should be met after the function/entity completes its task. These can include the output produced, changes made to the system or environment, or other effects.

Side-effects: Any additional outcomes or changes that occur as a result of executing the function/entity. These can include changes to the system or environment, resource usage, or other effects that may impact other functions or entities
### Template for Writing Functional Requirements
### Templated for Writing Non-Functional Requirements
### Tabular Specification
### Tabular Specification of Computation for an Insulin Pump
## Requirement Engineering Process 🏗️ 





