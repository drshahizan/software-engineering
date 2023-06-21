## Use Case Description: MSO Hospital Management System 

| Use case: Patient Admission   |
| ----------------------------- |
| ID: UC001                     |
| Actors:<br>1.Front Desk Staff<br>2.System |
| Preconditions:                |
| Flow of events:<br> 1. Staff enter patient's name. <br>2. Staff enter patient's IC number.<br>3. Staff enter patient insurance information.<br>4. System validates patient insurance information.<br>4.1 If validation is successful.<br>4.1.1 System generates unique patient ID<br>4.1.2 System generates admission record.<br>4.1.3 Front desk staff assign a room to the patient.<br>4.1.4 Front desk staff update patient's status as "Admitted".<br>4.1.5 System updates availability of beds.<br>4.1.6 Front desk staff provides the patient with necessary forms and instructions<br>4.1.7 Relevant departments will be notified of the new admission.|
| Postconditions:<br> 1. Availability of beds is updated.<br>2. Patient status is updated as "Admitted".|
