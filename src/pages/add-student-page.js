import { application } from "../app.js";
import { Student } from "../classes/student.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";
import { Text } from "../ui/text.js";

export class AddStudentPage extends Page {
  constructor() {
    super("Add New Student");
  }

  createElement() {
    super.createElement();

    let firstName = new Text("txtFirstName", "First Name");
    firstName.appendToElement(this.element);
    
    let lastName = new Text("txtLastName", "Last Name");
    lastName.appendToElement(this.element);

    let studentId = new Text("txtStudentId", "Student Id");
    studentId.appendToElement(this.element);
    
    let email = new Text("txtEmail", "Email");
    email.appendToElement(this.element);

    let btn = new Button("Save");
    btn.appendToElement(this.element);
    btn.element.click(() =>
      this.saveStudent(
        "",
        firstName.getValue(),
        lastName.getValue(),
        studentId.getValue(),
        email.getValue()
      )
    );
  }

  getElementString() {
    return '<div style="margin:20px;"><h3>New Student</h3></div>';
  }

  saveStudent(id, firstName, lastName, studentId, email) {
    let student = new Student(id, firstName, lastName, studentId, email);
    console.log(student);
    application
      .postData("https://ip-uacs.herokuapp.com/api/student", student)
      .then((result) => {
        console.log(result);
      });
  }
}
