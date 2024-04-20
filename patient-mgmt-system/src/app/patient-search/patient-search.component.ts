import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-patient-search',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './patient-search.component.html',
  styleUrl: './patient-search.component.css'
})
export class PatientSearchComponent {

  patientName:string="";
  patientDob:string="";
  patientSex:string="";
  patientResidence:string="";
  patientMRN:string="";
  patientID:string="";
  patientSSN:string="";
  patientPhone:string="";
  patientEmail:string="";
  Hospital:string="";
  Dept:string="";
  Physician:string="";
  Conditions:string="";


  patients = [
    {
      "Name": "Ashley Citarella",
      "profilePic":"../assets/images/female_headshot.png",
      "DOB": "1990-01-01",
      "Sex": "Female",
      "Residence": "New York",
      "MRN": "YTK12345678",
      "IDNumber": "NHL12345678",
      "Last4DigitsSSN": "0000",
      "PhoneNumber": "(000)-000-0000",
      "EmailAddress": "ashley.c@email.com",
      "Hospital": "Massachusettes Medical Group",
      "Dept": "Department of Cardiology",
      "Physician": "Dr. Beth Smith",
      "Conditions": "COPD, CHF, Diabetes (Type II)",
      "NextAppointment": "9:00 am"
    },
    {
      "Name":"Albert Johnson",
       "profilePic":"../assets/images/male_headshot.png",
      "DOB": "1985-05-15",
      "Sex": "Male",
      "Residence": "Los Angeles",
      "MRN": "YTK12343675",
      "IDNumber": "NHL12345678",
      "Last4DigitsSSN": "1111",
      "PhoneNumber": "(111)-111-1111",
      "EmailAddress": "albert.john@email.com",
      "Hospital": "Massachusettes Medical Group",
      "Dept": "Department of Cardiology",
      "Physician": "Dr. Beth Smith",
      "Conditions": "CHF",
      "NextAppointment": "10:00 am"
    },
    {
      "Name": "Leslie Isabelle Wang",
      "profilePic":"../assets/images/female_headshot.png",
      "DOB": "1978-09-30",
      "Sex": "Female",
      "Residence": "Chicago",
      "MRN": "YTK12343675",
      "IDNumber": "NHL12345678",
      "Last4DigitsSSN": "2222",
      "PhoneNumber": "(222)-222-2222",
      "EmailAddress": "leslie.i@email.com",
      "Hospital": "Massachusettes Medical Group",
      "Dept": "Department of Cardiology",
      "Physician": "Dr. Beth Smith",
      "Conditions": "CHF",
      "NextAppointment": "11:00 am"
    },
    {
      "Name": "Adela Basic",
      "profilePic":"../assets/images/female_headshot.png",
      "DOB": "1990-01-01",
      "Sex": "Female",
      "Residence": "New York",
      "MRN": "YTK12343675",
      "IDNumber": "NHL12345678",
      "Last4DigitsSSN": "3333",
      "PhoneNumber": "(333)-333-3333",
      "EmailAddress": "adela.basic@email.com",
      "Hospital": "Massachusettes Medical Group",
      "Dept": "Department of Cardiology",
      "Physician": "Dr. Beth Smith",
      "Conditions": "CHF",
      "NextAppointment": "1:30 pm"
    },
    {
      "Name":"Reza Saatchi",
       "profilePic":"../assets/images/male_headshot.png",
      "DOB": "1985-05-15",
      "Sex": "Male",
      "Residence": "Los Angeles",
      "MRN": "YTK12343675",
      "IDNumber": "NHL12345678",
      "Last4DigitsSSN": "4444",
      "PhoneNumber": "(444)-444-4444",
      "EmailAddress": "reza.s@email.com",
      "Hospital": "Massachusettes Medical Group",
      "Dept": "Department of Cardiology",
      "Physician": "Dr. Beth Smith",
      "Conditions": "CHF",
      "NextAppointment": "2:30 pm"
    },
    {
      "Name": "Arjun Chandrasekar",
      "profilePic":"../assets/images/male_headshot.png",
      "DOB": "1978-09-30",
      "Sex": "Male",
      "Residence": "Chicago",
      "MRN": "YTK12343675",
      "IDNumber": "NHL12345678",
      "Last4DigitsSSN": "5555",
      "PhoneNumber": "(555)-555-5555",
      "EmailAddress": "arjun.c@gmail.com",
      "Hospital": "Massachusettes Medical Group",
      "Dept": "Department of Cardiology",
      "Physician": "Dr. Beth Smith",
      "Conditions": "CHF",
      "NextAppointment": "3:30 pm"
    }
  ]
  

}
