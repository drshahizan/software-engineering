## Set: 1

**Name: Tiew Chuan Shen**

**Matrix No: A22EC0113**

**Section: 01**

## Answer
1) The most suitable software process model for developing the proposed online tour reservation system for Citra's travel agency would be the Agile software development model. Agile is a highly iterative and incremental approach that emphasizes flexibility, collaboration, and customer involvement throughout the development process. Here are the reasons for choosing Agile:

- Iterative and Incremental Development: The Agile model allows for the development of the system in small increments or iterations, which aligns well with the need to deliver working functionality early and continuously improve it based on user feedback. In the case of Citra's travel agency, it enables the agency to have an initial version of the system up and running quickly, allowing clients to start making reservations while additional features are added in subsequent iterations.

- Customer Collaboration: Agile promotes continuous customer involvement throughout the development process. This is important for Citra's travel agency as they need to gather requirements, feedback, and suggestions from clients to ensure that the system meets their needs and expectations. Regular interactions with clients can help validate the system's functionality, make necessary adjustments, and ensure a better user experience.

- Flexibility and Adaptability: Agile allows for flexibility and adaptability to changing requirements. In the travel industry, requirements can evolve due to market trends, client demands, or business strategies. Agile's iterative nature allows for frequent reviews and adjustments, ensuring that the system remains aligned with the agency's evolving needs.

- Time-to-Market: Agile's incremental delivery approach enables the agency to have a functional system early on, even if it lacks some advanced features. This can help Citra's travel agency to start offering online reservations quickly, gain a competitive edge, and generate revenue while continuously enhancing the system.

- Collaboration between Roles: Agile promotes collaboration and close interaction between different roles, such as the clerk, manager, and clients. This ensures effective communication, shared understanding of requirements, and efficient problem-solving during the development process.

2) Functional Requirements:
- User Registration: The system should allow clients to register and create an account to access the online reservation functionality.
- Tour Reservation: Clients should be able to search for available tours, select a tour, and make a reservation by providing necessary details such as tour dates, number of participants, and personal information.
- Reservation Cancellation: Clients should have the ability to cancel a previously made reservation through the system.

Non-Functional Requirements:
- Security: The system should ensure the confidentiality and integrity of client data, including personal information and payment details.
- Performance: The system should be able to handle a large number of concurrent users and process reservations in a timely manner, providing a responsive user experience.

3) Scenario: Make a tour reservation

Pre-conditions:
- The client has registered an account on the Citra Tours & Travel Agency's online reservation system.
- The client is logged in to their account.

Normal Event(s):
1. The client accesses the system and selects the "Make a Reservation" option.
2. The system presents the client with a search form to specify their tour preferences, such as destination, dates, and number of participants.
3. The client fills in the search form with their desired tour details and submits the request.
4. The system retrieves and displays a list of available tours matching the client's preferences.
5. The client reviews the tour options, including tour descriptions, itineraries, and prices.
6. The client selects a specific tour and clicks on the "Make Reservation" button.
7. The system prompts the client to provide additional information, such as participant details and any special requirements.
8. The client fills in the necessary details and confirms the reservation.
9. The system validates the information and checks the availability of the selected tour.
10. If the tour is available, the system confirms the reservation and generates a receipt containing payment and reservation details.
11. The system sends the receipt to the client's registered email address.

Abnormal Event(s):
- If the selected tour is not available or fully booked, the system notifies the client and suggests alternative options.
- If there is a technical issue or error during the reservation process, the system displays an error message and prompts the client to try again or contact support.

Post-conditions:
- The client receives a reservation confirmation email with the issued receipt.
- The reserved tour is marked as booked in the system, reducing the available capacity for future reservations.

4) Suitable actors and use cases:

Actors:
1. Client: The person who wishes to make a tour reservation through the online system.
2. Clerk: The agency staff responsible for managing reservation operations.
3. Manager: The agency manager who oversees the system and provides access credentials.

Use Cases:
1. Register Account: Allows the client to create a new account in the system.
2. Make Reservation: Enables the client to search for available tours and make a reservation.
3. Cancel Reservation: Allows the client to cancel a previously made reservation.
4. Manage Tours: Allows the clerk to add, delete, and update tour information in the system.
5. Process Reservations: Enables the clerk to confirm and process tour reservations made by clients.

5) Suitable classes for the domain model:

1. Client: Represents the client using the reservation system.
2. Clerk: Represents the agency staff responsible for managing reservations.
3. Tour: Represents a tour with information such as destination, dates, itinerary, and price.
4. Reservation: Represents a reservation made by a client for a specific tour.
5. System: Represents the reservation system itself, managing the overall functionality and interactions between clients, clerks, and tours.

6) Sequence diagram for the Cancel Reservation scenario:

```
Client          System           Clerk
  |                |               |
  |    Login       |               |
  |-------------->|               |
  |                |               |
  |                |  Display      |
  |                |  Reservations |
  |                |<--------------|
  |                |               |
  |   Cancel       |               |
  |   Reservation  |               |
  |-------------->|               |
  |                |               |
  |                |  Update       |
  |                |  Reservation  |
  |                |------------->|
  |                |               |
  |                |  Display      |
  |                |  Updated      |
  |                |  Information |
  |                |<--------------|
  |                |               |
```


## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/learn-php/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdrshahizan&labelColor=%23697689&countColor=%23555555&style=plastic)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fdrshahizan)
![](https://hit.yhype.me/github/profile?user_id=81284918)
