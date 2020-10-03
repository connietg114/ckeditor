import React, { useRef } from 'react';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
 
export class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);}
  render() {
    return (
      <div>
          {this.props.content}
      </div>
    );
  }
}
 
export default class Example extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


      return (
        <div>
            <ComponentToPrint ref={el => (this.componentRef = el)} content={this.props.text} />
          <ReactToPrint content={() => this.componentRef}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <button onClick={handlePrint}>Print this out!</button>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
         
        </div>
      );
    }
  }