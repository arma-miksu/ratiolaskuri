import React, { Component } from 'react';
import { Grid, Row, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class RatioCounter extends Component {
  static calculate(ratio, players) {
    const ratios = ratio.split(':').map(value => parseFloat(value));
    const divider = ratios.reduce((total, number) => total + number );
    return ratios
      .map(value => (players / divider) * value)
      .map(value => Math.round(value))
      .join(':');
  }
  constructor() {
    super();
    this.state = {
      result: '0:0',
      ratio: '',
      players: 0,
    };
  }
  setRatio(ratio) {
    this.setState({ ratio, result: RatioCounter.calculate(ratio, this.state.players) });
  }
  setPlayers(players) {
    this.setState({ players, result: RatioCounter.calculate(this.state.ratio, players) });
  }
  render() {
    return (
      <div className="App-ratiocounter">
        <Grid>
          <Form inline>
            <Row>
              <FormGroup bsSize={"large"} controlId={"ratio_x"}>
                <ControlLabel>Ratio</ControlLabel>
                <br/>
                <FormControl type={"text"} placeholder={"1:2"} onKeyUp={(e) => this.setRatio(e.target.value)} />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup bsSize={"large"} controlId={"sum"}>
                <ControlLabel>Pelaajamäärä</ControlLabel>
                <br/>
                <FormControl type={"number"} placeholder={"94"} onChange={(e) => this.setPlayers(e.target.value)} />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup bsSize={"large"} controlId={"result"}>
                <FormControl.Static>
                  <span className="result">{this.state.result}</span>
                </FormControl.Static>
              </FormGroup>
            </Row>
          </Form>
        </Grid>
      </div>
    );
  }
}

export default RatioCounter;
