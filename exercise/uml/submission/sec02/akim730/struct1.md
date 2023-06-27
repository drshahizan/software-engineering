## Set: 1

**Name: Muhammad Daniel Hakim bin Syahrulnizam**

**Matrix No: A22EC0207**

**Section: 02**

## Answer
1. Agile software development model.
   - Iterative and Incremental Development: The Agile model promotes iterative and incremental development, which allows for regular feedback and involvement of stakeholders throughout the development process.
   - Flexibility and Adaptability: The Agile model is highly flexible and adaptable to changing requirements, which is essential in a dynamic industry like travel and tourism.
   - Customer Collaboration: The Agile model emphasizes close collaboration between the development team and stakeholders, including clients and managers.
   - Early and Regular Delivery of Value: The Agile model promotes the early and regular delivery of working software, usually in short iterations called sprints.

2. Functional requirements & Non-Functional Requirements
   
 Functional requirements
- User Registration and Authentication:
The system should allow users (clients) to register and create an account.
The system should authenticate and verify user credentials during login to ensure secure access.

- Tour Information Display:
The system should provide an interface for users to view information about available tours.
The tour information should include details such as tour destinations, itineraries, duration, pricing, and availability.

- Reservation Management:
The system should allow registered users to make tour reservations.
Users should be able to select a preferred tour, specify the number of participants, and choose desired dates.
The system should validate reservation requests and check for availability before confirming the reservation.

Non-Functional Requirements:
- Security:
The system should implement robust security measures to protect user data, including personal information and payment details.
It should utilize encryption and secure communication protocols to ensure confidentiality and integrity.

- Performance:
The system should be capable of handling multiple concurrent users and high traffic.
It should provide fast response times for searching tours, making reservations, and retrieving tour information.
3. ### Scenario: Make a tour reservation
| Column | Description |
|-----------------------------|----------------------------------|
| **Pre-conditions:**         |- The client has registered an account and is logged into the system.  |
|                             |- The client has reviewed the available tour options. |
|                             |- The client has the necessary payment information ready. |
|                             |  |
| **Normal Event(s):**        |- The client selects a preferred tour from the available options. |
|                             |- The client specifies the number of participants for the tour.  |
|                             |- The client chooses the desired dates for the tour. |
|                             |- The client provides the required payment information. |
| **Abnormal Event(s):**      |-  The selected tour is no longer available due to full capacity |
|                             |-  The payment transaction fails due to an invalid credit card.  |
|                             |- The client encounters a system error during the reservation process  |
|                             |  |
| **Post-conditions:**        |- The system confirms the tour reservation for the client. |
|                             |- The client receives a reservation confirmation with details of the tour. |
