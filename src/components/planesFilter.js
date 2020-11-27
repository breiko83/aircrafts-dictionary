import React from 'react'
import {connect} from 'react-redux'
import {sortByPassengers, sortBySpeed, sortByRange} from '../actions/filters'


const PlanesFilters = (props) => (
  <select value={props.filters.sortBy} onChange={
    (e) => {
      if (e.target.value === 'passengers') {
        props.dispatch(sortByPassengers())
      }else if (e.target.value === 'speed') {
        props.dispatch(sortBySpeed())
      }else if (e.target.value === 'range') {
        props.dispatch(sortByRange())
      }
    }
  }>    
    <option value="speed">Speed</option>
    <option value="passengers">Passengers</option>
    <option value="range">Range</option>
  </select>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(PlanesFilters)