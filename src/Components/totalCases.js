
import React, { Component } from "react";
import Axios from "axios";


export default class totalCases extends Component {
    constructor(props) {
        super(props);
    
        this.getData = this.getData.bind(this);
      }

      state = {
        death: "loading..."
      };

      componentDidMount() {
          this.getData();
      }

    render() {
        return (
            
        );
    }
}