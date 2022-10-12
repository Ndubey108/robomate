import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions'; 

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    } 
}

class App extends Component { 

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render() {
        const { searchField , onSearchChange , robots , isPending } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
         
            return isPending ? 
            <h1>Loading...</h1> : 
            (
                <div className='tc'>
                   <h1 className='inline'>ROBOMATE</h1>
                    <SearchBox SearchChange={onSearchChange}/>
                      <hr/>
                        <ErrorBoundary>
                       { filteredRobots.length===0?(<h3 className='center '>No search result Found</h3>): <CardList robots= {filteredRobots}/>}
                     
                        </ErrorBoundary>
                    
                </div>
            );
        } 
    }

export default connect(mapStateToProps , mapDispatchToProps)(App);