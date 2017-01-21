import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect} from 'react-redux';
import {changeSelection} from  './../AC/filters'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    handleChange = selected => this.props.changeSelection(selected.map((option) => {
        console.log('---', option);
        return option.value;
    }));

    render() {
        const {articles, selected} = this.props;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <Select options={options}
                        value={selected}
                        onChange={this.handleChange}
                        multi={true}
                />
            </div>
        )
    }

}

export default connect ( state => ({
    selected: state.filters.selected,
    articles: state.articles
}), {changeSelection})(SelectFilter);

