import { application } from "../app.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";
import { Image } from "../ui/image.js";

export class HomePage extends Page {
  constructor() {
    super("Home");
  }

  createElement() {
    super.createElement();

    let styleString =
      "width: 300px; height: 80px; font-size: 26px; margin: 10px;";
    let b = new Button("View Students");
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute("Students"));

    let b2 = new Button("Convert C To F");
    b2.setStyleString(styleString);
    b2.appendToElement(this.element);
    b2.element.click(() => application.activateRoute("ConvertC"));
   
    let b3 = new Button("Convert F To C");
    b3.setStyleString(styleString);
    b3.appendToElement(this.element);
    b3.element.click(() => application.activateRoute("ConvertF"));

  }

  getElementString() {
    return '<div style="text-align: center;"></div>';
  }
}
