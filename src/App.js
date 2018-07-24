import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 08, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App container">
        <h1 className="title">GO SHORTY!! IT'S YO BIRTHDAY!!!</h1>
        <div className="rowm">
          <div className="col-md-6 offset-md-4">
            <Form inline>
              <FormControl
                className="Deadline-input"
                placeholder='Month 00, 0000'
                onChange={event => this.setState({newDeadline: event.target.value})}
              />
              <Button bsStyle="info" onClick={() => this.changeDeadline()}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
        <div className="date">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
      </div>
    )
  }
}

export default App;
