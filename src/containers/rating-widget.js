import React from 'react';
import { connect } from 'react-redux';
import NameField from '../components/namefield'
import StarField from '../components/starfield'
import SelectField from '../components/selectbox'
import {bindActionCreators} from 'redux'
import {selectRating} from '../actions/index'

class RatingWidget extends React.Component {

  renderRating() {
    for(let i = 0; i < this.props.ratings.length; i++){
      this.props.ratings[i].starbox = this.makeStars(this.props.ratings[i].rating, this.props.ratings[i].maxrating)
    }
  		return this.props.ratings.map((rating, index) => {
        let arrUid=rating.uid;

        return (
          <div key={rating.uid} onChange = {(e)=>this.props.selectRating(arrUid, e.target.value)}>
            <NameField names = {rating.name}/>
            <StarField stars = {rating.starbox} />
            <SelectField id ={index + 1} total = {rating.total} average = {rating.average}/>
          </div>
        )
      })
  	}

  makeStars(rating, numStars) {
    let starbox = [];
    let bstar = "../Images/unclicked.jpg";
    let fstar = "../Images/clicked.jpg";
    for (let i = 0; i <numStars; i++){
      starbox.push(<img src={i < rating ? fstar: bstar} data-key={(i+1)} width= "20" height= "20" key={i} />)
      }
    return starbox;
    }

  render() {
    return (
      <div>
      	{this.renderRating()}
      </div>
    )
  }
}

  function mapStateToProps(state) {
    return {
      ratings: state.ratings
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectRating:selectRating}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(RatingWidget)
