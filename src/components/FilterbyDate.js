import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from "react-day-picker";
import moment from 'moment';
import css from "react-day-picker/lib/style.css";


class FilterByDate extends Component  {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
        from: null,
        to: null,
    };

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }
    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                <DayPicker
                    numberOfMonths={1}
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                    />
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
            </div>
        );
    }
}

export default FilterByDate;