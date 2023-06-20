1. **Admitting a Patient:**
   - Actors: Hospital Staff (Admissions)
   - Preconditions: Staff has logged into the system, patient information is available.
   - Main Flow:
     1. Staff selects the "Admissions" function in the system.
     2. Staff enters patient information, such as personal details, medical history, and insurance information.
     3. System validates and saves the patient information.
     4. Staff receives an acknowledgment of successful admission.
   - Postconditions: Patient information is updated in the system, and the patient is officially admitted to the hospital.

2. **Scheduling an Appointment:**
   - Actors: Hospital Staff (Appointment Scheduler)
   - Preconditions: Staff has logged into the system, patient information is available.
   - Main Flow:
     1. Staff selects the "Appointments" function in the system.
     2. Staff checks the availability of doctors and schedules an appointment based on patient preferences and doctor availability.
     3. System validates the appointment request and updates the schedule.
     4. Staff confirms the appointment and provides the patient with the details.
   - Postconditions: The appointment is scheduled, and the patient receives confirmation of the appointment.

3. **Managing Medical Records:**
   - Actors: Hospital Staff (Medical Records)
   - Preconditions: Staff has logged into the system, patient information is available.
   - Main Flow:
     1. Staff selects the "Medical Records" function in the system.
     2. Staff searches for the patient's medical records using their unique identifier (e.g., patient ID or name).
     3. System retrieves and displays the patient's medical history, test results, diagnoses, and treatment details.
     4. Staff can update the medical records by adding new information or modifying existing data.
     5. System saves the changes and provides an acknowledgment of successful record update.
   - Postconditions: The patient's medical records are updated and accessible for future reference.

4. **Generating a Bill:**
   - Actors: Hospital Staff (Billing)
   - Preconditions: Staff has logged into the system, patient information is available, services have been provided.
   - Main Flow:
     1. Staff selects the "Billing" function in the system.
     2. Staff retrieves the patient's medical records and treatment details.
     3. Staff selects the appropriate billing codes and enters any additional charges or discounts.
     4. System calculates the total bill amount based on the provided information.
     5. Staff reviews the generated bill and provides it to the patient for payment.
   - Postconditions: A bill is generated for the services provided, and the patient can proceed with the payment.

