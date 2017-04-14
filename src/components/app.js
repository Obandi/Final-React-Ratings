import React from 'react';
import RatingWidget from '../containers/rating-widget';
import SelectField from './selectbox'


export default class App extends React.Component {

  render(){
    return (
    	<div>
    		<h1>Ratings Widget</h1>
	      <RatingWidget/>
      </div>
    )
  }
}
