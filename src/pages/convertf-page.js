import { application } from "../app.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";
import { Number } from "../ui/number.js";

export class ConvertFPage extends Page {
  constructor() {
    super("Convert C to F");
  }

  createElement() {
    super.createElement();

    let Fahrenheit = new Number("txtFahrenheit", "Farhenheit");
    Fahrenheit.appendToElement(this.element);

    let btn = new Button("Convert");
    btn.appendToElement(this.element);
    btn.element.click(() =>
      this.convertF()
    );
  }

  getElementString() {
    return '<div style="margin:20px;"><h3>Convert From F to C</h3></div>';
  }

  convertF() {
    application
      .postData("https://ip-uacs.herokuapp.com/api/Convert/ToCelsius/"+document.getElementById("txtFahrenheit").value, true)
      .then((result) => {
        console.log(result);
      });
  }
}
