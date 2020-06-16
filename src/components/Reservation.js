import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("RestaurantStore")
@observer
class Reservation extends Component{
    completeRes = () => {
        this.props.RestaurantStore.completeRes(this.props.res.id)
    }

    seatRes = () => {
        this.props.RestaurantStore.seatRes(this.props.res.id)
    }


    render () {
        const res = this.props.res;
        return (
            <div className={res.completed ? "conditional": null}>
                Name : {res.name} , 
                Num of People : {res.numPeople}
                <button onClick={this.completeRes}>complete reservation</button>
                <button onClick={this.seatRes}>seat reservation</button>
            </div>
        //render the reservation data here
        //make sure you store the ID somewhere so you can find the reservation
        //use the class "conditional" to conditionally render completed reservations
        //You should hav ea complete reservation button to complete the reservation
        )
    }
}

export default Reservation