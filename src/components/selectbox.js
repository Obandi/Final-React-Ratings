import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {selectRating} from '../actions/index'

const SelectField = (props) => {
      return (
        <span>
        <form>
          <select id={props.id}>
            <option selected disabled>Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="reset" value="reset"/>
          <span>
            {"Total Rating: " + props.total}
            {"Rating Average is: " + props.average}
          </span>
        </form>
        </span>
      );
    }
  export default SelectField;
