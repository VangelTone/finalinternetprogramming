import $ from "jquery";
import { ApplicationBase } from "./framework/application-base.js";
import { AddStudentPage } from "./pages/add-student-page.js";
import { StudentsPage } from "./pages/students-page.js";
import { HomePage } from "./pages/home-page.js";
import { StudentDataService } from "./services/student-data-service.js";
import { ConvertCPage} from "./pages/convertc-page.js";
import { ConvertFPage } from "./pages/convertf-page.js"

export class App extends ApplicationBase {
  constructor() {
    super("Internet Programming");
    this.dataService = new StudentDataService();
   
        let url = "https://ip-uacs.herokuapp.com/api/student";


    this.getData(url).then((student) => {
      this.dataService.loadData(student);
      
    });


    this.addRoute("Home", new HomePage(), true);
    this.addRoute("Students", new StudentsPage());
    this.addRoute("AddStudent", new AddStudentPage(), false, false);
    this.addRoute("ConvertC", new ConvertCPage());
    this.addRoute("ConvertF", new ConvertFPage());
  }
}

export let application = new App();
application.show($("body"));
