import React, { Component } from 'react'; 

import EvenAndOdd from './components/Topic/EvenAndOdd'
import FilterObject from './components/Topic/FilterObject'
import FilterString from './components/Topic/FilterString'
import Palindrome from './components/Topic/Palindrome'
import Sum from './components/Topic/Sum'

class TopicBrowser extends Component {
    render() {
        return (
        <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
        </div>
    )
    }
}
export default TopicBrowser;
    
