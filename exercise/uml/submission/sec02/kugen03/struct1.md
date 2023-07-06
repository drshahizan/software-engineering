## Set:1

**Name:KUGEN A/L KALIDAS**

**Matrix No:A22EC0178**

**Section:02**

## Answer

1.Agile model. Through this model, the system can undergo incremental development as this model priotizes collaboration, responsiveness and flexibity in developipng the system. Agile model focuses on delivering working software in short iterations, with involving user feedback and collaboration between development team.

2.Functional Requirements:

i.User Registration: The system should allow prospective clients to register and create an account to access the online reservation functionality.<br>
ii.Tour Reservation: Registered clients should be able to view available tours, select a tour, provide necessary details, and make a reservation.<br>
iii.Reservation Management: The system should provide the clerk with the ability to confirm, process, and manage tour reservations made by clients.

Non-Functional Requirements:

i.Security: The system should ensure secure access and protection of client information, including login credentials and personal data.<br>
ii.Performance: The system should be responsive and able to handle multiple concurrent users, ensuring quick response times and smooth user experience.<br>

3.### Scenario: Make a tour reservation
| Column | Description |
|-----------------------------|----------------------------------|
| **Pre-conditions:**         |- Logged into the system |
|        |-Client is registered to the system  |
|        |- Client has selectted desired tour loccation from the available options |                            
| **Normal Event(s):**        |-Client selects the tour reservation option  |
|                             |-Client provides necessary information such as number of participants, desired date andadditional requirements  |
|                             |-System confirms the availability of the tour and displays the summary  |
|                             |- Client confirms the reservation and proceeds to the payment |
| **Abnormal Event(s):**      |-Selected tour destination is fully booked or unavailable  |
|                             |- Failure in payment due to technical issues   |                          
| **Post-conditions:**        |-Reservation is confirmed by the system  |
|                             |- client receives a confirmation email through e-mail containing payment receipt and tour details |

4.Actors are the client, cler and the manager. Five use cases involved is register as client, view available tour information, cancel reservation, manage tour and client information as well as manage tour reservations.

5.5 suitable classes for domain model are client, clerk, manager, reservation and tour.

