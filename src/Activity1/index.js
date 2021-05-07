import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'

import state from '../sample_data/state';

//*Step 1: 
  //*Use Axios to fetch data from API
    //https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest

//*Step 2: 
  //* 1) Show population on right hand side of list
  //* 2) Add Capital to list
  // 3) Break List Items into separate component

  export default class Activity extends Component {
  
  render() {
    return (
      <div>
        <ListGroup>
          {state.data.map((item,key)=>{
            return(
              <ListGroup.Item key={key}>
                  {item.State}
              </ListGroup.Item>
            )
          })}      
        </ListGroup>
      </div>
    )
  }
}
