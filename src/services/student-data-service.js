import { Student } from "../classes/student.js";
import { DataError } from "./data-error.js";

export class StudentDataService {
  constructor() {
    this.students = [];
    this.errors = [];
  }

  loadData(student) {
    for (let data of student) {
      if (this.StudentData(data)) {
            let student = this.loadStudent(data);
            if (student) this.students.push(student);
          } else {
            let e = new DataError("Invalid data type", data);
            this.errors.push(e);
          }
    }
  }

  loadStudent(data) {
    try {
      let student = new Student(data.id, data.firstName, data.lastName, data.studentId, data.email, data.createdDate);
      student.id = data.id;
      student.firstName = data.firstName;
      student.lastName = data.lastName;
      student.studentId = data.studentId;
      student.email = data.email;
      student.createdDate = data.createdDate;
      return student;
    } catch (e) {
      this.errors.push(new DataError("error loading student", data));
    }
    return null;
  }

}
