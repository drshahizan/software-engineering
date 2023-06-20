**Name: VINESH VIJAYAKUMAR**

**Matrix No:A22EC0290**

**Section:02**

***USE CASE DESCRIPTION***

**1. Use Case: Log into the System**
   - Actors: Hospital Staff
   - Preconditions: The Hospital Staff has access credentials for the system.
   - Main Flow of Events:
     1. The Hospital Staff initiates the system login process.
     2. The system presents a login screen.
     3. The Hospital Staff enters their username and password.
     4. The system validates the credentials.
     5. If the credentials are valid, the system grants access to the staff.
   - Postconditions: The Hospital Staff is logged into the Hospital Management System and can perform various functions based on their role.

**2. Use Case: Manage Admissions**
   - Actors: Hospital Staff
   - Preconditions: The Hospital Staff is logged into the system.
   - Main Flow of Events:
     1. The Hospital Staff selects the "Admissions" function in the system.
     2. The system presents an admissions form.
     3. The Hospital Staff enters the patient's personal and insurance information.
     4. The system validates the entered information.
     5. If the information is valid, the system generates a unique patient ID and admission record.
     6. The Hospital Staff assigns a room to the patient and updates their status as "Admitted" in the system.
     7. The system updates the patient's record and bed availability.
     8. The Hospital Staff provides necessary forms and instructions to the patient.
     9. The relevant departments are notified of the new admission.
   - Postconditions: The patient is admitted, their information is recorded in the system, and the relevant departments are informed.

**3. Use Case: Schedule Appointments**
   - Actors: Hospital Staff, Patients
   - Preconditions: The Hospital Staff is logged into the system.
   - Main Flow of Events:
     1. The Hospital Staff selects the "Appointments" function in the system.
     2. The system presents a list of available doctors and their schedules.
     3. The Hospital Staff confirms the patient's preferred doctor and appointment date.
     4. The system checks the doctor's availability for the selected date.
     5. If the time slot is available, the system schedules the appointment.
     6. The system generates a confirmation message with the appointment details.
     7. The Hospital Staff informs the patient about the scheduled appointment.
   - Postconditions: The patient has a scheduled appointment with the chosen doctor, and the Hospital Staff has informed the patient accordingly.

**4. Use Case: Manage Medical Records**
   - Actors: Hospital Staff
   - Preconditions: The Hospital Staff is logged into the system.
   - Main Flow of Events:
     1. The Hospital Staff selects the "Medical Records" function in the system.
     2. The system presents the patient's medical record.
     3. The Hospital Staff can access and update the patient's medical history, diagnosis, and treatment information.
     4. The Hospital Staff can input the latest observations, treatments, and request additional tests or procedures.
     5. The system saves the changes to the patient's record.
     6. The system generates notifications for relevant departments or specialists, if necessary.
   - Postconditions: The patient's medical record is updated, and relevant departments or specialists are notified as needed.

**5. Use Case: Create Bills**
   - Actors: Hospital Staff
   - Preconditions: The Hospital Staff is logged into the system.
   - Main Flow of Events:
     1. The Hospital Staff selects the "Billing" function in the system.
     2. The system retrieves the patient's medical treatment information.
