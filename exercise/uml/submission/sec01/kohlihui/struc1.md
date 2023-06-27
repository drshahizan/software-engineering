## Set 1:

**Name: Koh Li Hui**

**Matrix No: A22EC0059**

**Section: 01**

## Answer
1. The most suitable software process model in developing the proposed online tour reservation system for Citra’s travel agency is Agile software development model. In the travel industry, clients requirements and market trends can change rapidly. With Agile's flexibility and adaptive nature, the system will be well-suited on accommodating changes and incorporating new features or functionalities as they emerge.

2. #### Functional requirements:
   1.  User Registration and Authentication. The system should have a secure authentication mechanism to verify user identities and ensure data privacy.
   2.  Tour Booking and Management. The system should allow users to manage their bookings, including canceling or modifying reservations.
   3.  Payment Processing. Users should be able to make payments for tour reservations, and the system should provide confirmation and receipts through the users' email.
   #### Non-Functional requirements
   1. Security. The system should employ strong security measures to protect user personal data and financial transactions.
   2. Performance. The system should be able to handle multiple concurrent user requests without any significant delay.

3. ### Scenario: Make a tour reservation
| Column | Description |
|-----------------------------|----------------------------------|
| **Pre-conditions:**         |- Users must log in the system |
|                             |- The system should have a list of available tours with relevant information such as dates, destinations, and available seats.  |
| **Normal Event(s):**        |-  The user selects the desired tour from the available options. |
|                             |- The user provides necessary information for the reservation, such as the number of passengers and contact information. |
|                             |- The system confirms the reservation and provides a booking reference or confirmation number. |
|                             |- The user proceeds with the payment process to secure the reservation.  |
|                             |- The system generates a confirmation email or receipt with the reservation details. |
| **Abnormal Event(s):**      |- The users select the seats or packages which were already booked by other users. |
|                             |- The user encounters an issue during the payment process, such as declined credit card, transaction timeout, or technical errors with the payment gateway. |
|                             |- The system may experience technical issues or undergo maintenance in the reservation process.  |
| **Post-conditions:**        |- The user is successfully making a tour reservation. |
|                             |- The system updates the availability of seats/packages for the booked tour. |

4. <img alt="struc_uc" src=https://github.com/drshahizan/software-engineering/blob/main/exercise/uml/submission/sec01/kohlihui/struc1_uc.png?raw=true>
