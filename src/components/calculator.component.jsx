import React, { Component } from "react";
import "./calculator.component.css";
import CalculatorUtils from "../utils/calculator.utils";

/**
 * This class is performing the presentation logic of the calculator component.
 * @author Yuxuan Du
 */
class Calculator extends Component {
  firstNumber;
  secondNumber;
  operator;
  fullInput;

  constructor() {
    super();
  }

  state = {
    displayInput: "",
    displayResult: "0",
    isError: false
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-4" />
          <div className="col-xs-4">
            <div>
              <input
                type="text"
                className="form-control"
                value={this.state.displayInput}
                disabled
              />
              <input
                type="text"
                className="form-control"
                value={this.state.displayResult}
                disabled
              />
            </div>
            <br />
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-xs-6">
                  <button
                    className="btn btn-default btn-ac btn-block"
                    onClick={() => this.onAcClicked()}
                    id="key"
                  >
                    AC
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-primary btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onOperatorClicked("^")}
                  >
                    ^
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-primary btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onOperatorClicked("√")}
                  >
                    √
                  </button>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(7)}
                  >
                    7
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(8)}
                  >
                    8
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(9)}
                  >
                    9
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-primary btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onOperatorClicked("/")}
                  >
                    ÷
                  </button>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(4)}
                  >
                    4
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(5)}
                  >
                    5
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(6)}
                  >
                    6
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-primary btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onOperatorClicked("*")}
                  >
                    x
                  </button>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(1)}
                  >
                    1
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(2)}
                  >
                    2
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(3)}
                  >
                    3
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-primary btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onOperatorClicked("-")}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onDotClicked()}
                  >
                    .
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onNumberClicked(0)}
                  >
                    0
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-default btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onEqualClicked()}
                  >
                    =
                  </button>
                </div>
                <div className="col-xs-3">
                  <button
                    className="btn btn-primary btn-block"
                    id="key"
                    disabled={this.state.isError}
                    onClick={() => this.onOperatorClicked("+")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4" />
        </div>
      </React.Fragment>
    );
  }

  /**
   * This method is called when any number key is clicked.
   * @param num is the number clicked by the user
   */
  onNumberClicked = num => {
    if (this.state.displayInput !== "0") {
      this.setState({ displayInput: (this.state.displayInput += "" + num) });
    } else {
      if (num !== 0) {
        this.setState({ displayInput: "" + num });
      }
    }
  };

  /**
   * This method is called when any operater such as "+", "-", "*", "/" is clicked
   * @param operator is the operater clicked by the user
   */
  onOperatorClicked = operator => {
    if (this.firstNumber == null) {
      // In the normal situation, get the first number after any operator is clicked.
      this.firstNumber = +this.state.displayInput;
    } else if (
      this.operator != null &&
      this.secondNumber == null &&
      this.state.displayInput !== ""
    ) {
      // calculate the previouse result at first if operator is existed.
      this.secondNumber = +this.state.displayInput;
      console.log("this is fired");
      this.firstNumber = this.calculateResult();
      if (this.firstNumber != null) {
        this.setState({ displayResult: this.firstNumber });
      } else {
        this.setState({ displayResult: "Error", isError: true });
      }
      this.secondNumber = null;
    }
    this.setState({ displayInput: "" });
    this.operator = operator;

    // this.setState({ displayInput: "" });
    if (this.operator === "√") {
      this.onEqualClicked();
    }
  };

  /**
   * This method is called when '=' is clicked.
   */
  onEqualClicked = () => {
    if (this.operator != null && this.firstNumber != null) {
      if (this.operator !== "√") {
        this.secondNumber = +this.state.displayInput;
      }
      const rawResult = this.calculateResult();
      if (rawResult != null) {
        let resultDisplay = "" + this.calculateResult();
        this.formatFullInput();
        this.setState({ displayResult: resultDisplay });
        this.firstNumber = rawResult;
        this.secondNumber = null;
        this.operator = null;
        this.setState({ displayInput: this.fullInput });
      } else {
        this.setState({ isError: true, displayResult: "Error!" });
      }
    }
  };

  /**
   * This method is called when '.' is clicked
   */
  onDotClicked = () => {
    if (this.state.displayInput.search(/\./) === -1) {
      // Check if a dot is existed already
      if (this.state.displayInput === "") {
        this.setState({ displayInput: "0." });
      } else {
        let inputDisplay = this.state.displayInput + ".";
        this.setState({ displayInput: inputDisplay });
      }
    }
  };

  /**
   * When button 'AC' is clicked, this method is invoked.
   */
  onAcClicked() {
    this.setState({
      displayInput: "",
      displayResult: 0,
      isError: false
    });
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = null;
    this.fullInput = "";
  }

  /**
   * Format the input so that use can see the full input on the input screen
   */
  formatFullInput() {
    if (this.fullInput == null) this.fullInput = "";
    if (this.operator === "√") {
      this.fullInput = "" + this.operator + this.firstNumber;
    } else {
      this.fullInput =
        "" + this.firstNumber + this.operator + this.secondNumber;
    }
  }

  /**
   * Calculate the result of user's inputs.
   */
  calculateResult() {
    switch (this.operator) {
      case "+":
        return CalculatorUtils.add(this.firstNumber, this.secondNumber);
      case "-":
        return CalculatorUtils.minus(this.firstNumber, this.secondNumber);
      case "*":
        return CalculatorUtils.multiply(this.firstNumber, this.secondNumber);
      case "/":
        return CalculatorUtils.divide(this.firstNumber, this.secondNumber);
      case "√":
        return CalculatorUtils.squareRoot(this.firstNumber);
      case "^":
        return CalculatorUtils.power(this.firstNumber, this.secondNumber);
      default:
        return null;
    }
  }
}

export default Calculator;
