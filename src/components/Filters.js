import React, { Component, PropTypes } from 'react'
import SelectFilter from './ArticlesSelect'
import DateRange from './DateRange'

class Filters extends Component {

    render() {
        return (
            <div>
                <SelectFilter/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters