import React from "react";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function additionData() {
  const answer = randomInteger(2, 101);
  const first = randomInteger(1, answer);

  return {
    expression: `${first} + ${answer - first}`,
    answer: answer
  };
}

export function subtractionData() {
  const first = randomInteger(2, 101);
  const second = randomInteger(1, first);

  return {
    expression: `${first} - ${second}`,
    answer: first - second
  };
}

export function multiplicationData() {
  const first = randomInteger(1, 11);
  const second = randomInteger(1, 11);

  return {
    expression: `${first} × ${second}`,
    answer: first * second
  };
}

export function divisionData() {
  const answer = randomInteger(1, 11);
  const divisor = randomInteger(1, 11);

  return {
    expression: `${answer * divisor} ÷ ${divisor}`,
    answer: answer
  };
}

export default class SimpleMath extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.dataFn(),
      input: "",
      checked: false
    };
  }

  onInputChange = (event) => {
    const value = event.target.value;
    if (/^[0-9]*$/.test(value)) {
      this.setState({ input: value });
    }
  }

  onCheckClick = () => {
    this.setState({ checked: true });
  }

  onSubmit = (event) => {
    if (this.state.input.length > 0) {
      this.setState({ checked: true });
    }
    event.preventDefault();
    return false;
  }

  onNext = () => {
    this.setState({
      data: this.props.dataFn(),
      input: "",
      checked: false
    });
  }

  render() {
    let answerSpace;
    let bottomSpace;
    let bottomerSpace;

    if (!this.state.checked) {
      answerSpace = (
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="simple-math-input"
            maxLength="3"
            inputMode="numeric"
            pattern="[0-9]*"
            autoFocus
            value={this.state.input}
            onChange={this.onInputChange}/>
        </form>
      );
      bottomSpace = null;
      bottomerSpace = (
        <button
          className="simple-math-button"
          disabled={this.state.input.length === 0}
          onClick={this.onCheckClick}>
          Check
        </button>
      );
    } else {
      bottomerSpace = (
        <button
          className="simple-math-button"
          onClick={this.onNext}>
          Next
        </button>
      );
      
      if (parseInt(this.state.input) === this.state.data.answer) {
        answerSpace = (
          <p className="simple-math-answer-correct">{this.state.input}</p>
        );
        bottomSpace = (
          <p className="simple-math-label-correct">Correct!</p>
        );
      } else {
        answerSpace = (
          <>
            <p className="simple-math-answer-wrong">{this.state.input}</p>
            <p className="simple-math-answer-correct">{this.state.data.answer}</p>
          </>
        );
        bottomSpace = (
          <p className="simple-math-label-wrong">Wrong!</p>
        );
      }
    }

    return (
        <div className="simple-math-container-vertical">
          <div className="simple-math-container-horizontal">
            <p className="simple-math-expr">{this.state.data.expression}{" = "}</p>
            {answerSpace}
          </div>
          {bottomSpace}
          {bottomerSpace}
        </div>
    );
  }
}
