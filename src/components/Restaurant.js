import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import Reservation from './Reservation';

@inject("GeneralStore", "RestaurantStore")

@observer
class Restaurant extends Component{
    addRes = () => {
        this.props.RestaurantStore.addRes( this.props.GeneralStore.name,this.props.GeneralStore.numPeople)
    }

    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>{this.props.RestaurantStore.restPopulation} of people in restaurant</div>
                <div>{this.props.RestaurantStore.completedTables} of completed tables</div>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button> 
                <div className = "reservations">
                {this.props.RestaurantStore.reservations.map(r => <Reservation res={r}/>)}
                </div>
            </div>
        )
    }
}

export default Restaurant