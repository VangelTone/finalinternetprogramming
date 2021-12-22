import { application } from "../app.js";
import { Page } from "../framework/page.js";
import { Button } from "../ui/button.js";
import { Number } from "../ui/number.js";

export class ConvertCPage extends Page {
  constructor() {
    super("Convert C to F");
  }

  createElement() {
    super.createElement();

    let Celsius = new Number("txtCelsius", "Celsius");
    Celsius.appendToElement(this.element);

    let btn = new Button("Convert");
    btn.appendToElement(this.element);
    btn.element.click(() =>
      this.convertC()
    );
  }

  getElementString() {
    return '<div style="margin:20px;"><h3>Convert From C to F</h3></div>';
  }

  convertC() {
    application
      .postData("https://ip-uacs.herokuapp.com/api/Convert/ToFahrenheit/"+document.getElementById("txtCelsius").value, true)
      .then((result) => {
        console.log(result);
      });
  }
}
