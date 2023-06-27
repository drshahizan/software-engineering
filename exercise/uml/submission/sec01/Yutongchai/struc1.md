## Set:1

**Name:CHAI YU TONG**

**Matrix No:A22EC0145**

**Section:01**

## Answer
1. The most suitable fostware process model in developing the proposed online tour reservation system for Citra's travel agency is Agile Scrum Model. It is because agile scrum follows an iterative and incremental approach, allowing the development team to deliver working software in short iterations or sprints. This aligns well with the project's requirement to provide online reservation functionality and tours information to clients. Hence the system can be developed in increments, starting with essential features and then adding more functionality in subsequent sprints.
2. Functional requirements
   a. *User Registration*
      The system should allow prospective clients to register as users, providing necessary personal information and creating a login ID and password.
   b. *Tour Registration*
      Registered users should be able to make tour reservations online, selecting their desired tour, specifying the number of participants, and providing relevant details like dates, preferences, and any special requirements.
   c. *Reservation Cancellation*
      Users should have the ability to cancel their previously made reservations, ensuring a seamless and straightforward process.
   Non-functional requirements
   a. *Security*
      The system should ensure the confidentiality and integrity of user data, including login credentials and personal information.
   b. *Performance*
      The system should be able to handle a significant number of concurrent users, providing a responsive and efficient user experience even during peak hours.

3.
### Scenario: Make a tour reservation
| Column | Description |
|-----------------------------|----------------------------------|
| **Pre-conditions:**         |- The client has registered as a user on the online tour reservation system |
|        |- The client has logged in using their credential |
| **Normal Event(s):**        |- The client searches for available tours based on their preferences, such as destination, dates, or activities. |
|                             |- The system displays a list of suitable tours along with relevant information like itinerary, pricing, and availability. |
|                             |- The client selects a specific tour from the list. |
|                             |- The system prompts the client to enter their ID and password for verification. |
| **Abnormal Event(s):**      |- The client's login credentials are incorrect or invalid. |
|                             |- The selected tour is no longer available or fully booked. |
|                             |- The client's payment is declined or encounters an error during the transaction. |
| **Post-conditions:**        |- The client receives the email receipt confirming their tour reservation.  |
|                             |- The system updates the tour's availability and reservation status accordingly.  |

4. Suitable actors:
   - Client
   - Clerk
   - Manager
     
   Use case:
   a. Register as User
   b. Make Tour Reservation
   c. Cancel Reservation
   d. View Tours Information
   e. Send Enquiries  

6. Classes for Domain Model:
   a. User
   b. Tour
   c. Reservation
   d. Payment
   5. EmailNotification
      
8. Sequence diagram for Cancel Reservation scenario:
   Client          System
  |                 |
  |    Enter ID     |
  |   and Password  |
  |---------------> |
  |                 |
  |  Validate User  |
  |   Information   |
  | <---------------|
  |                 |
  | Display Reservations |
  | <---------------|
  |                 |
  | Choose Reservation   |
  |   for Cancellation   |
  |---------------> |
  |                 |
  | Update Customer Info |
  |   (Cancellation)     |
  |---------------> |
  |                 |
  |   Display Updated   |
  |    Information      |
  | <---------------|

10. activity diagram for Reserve a Tour: 

   
    
