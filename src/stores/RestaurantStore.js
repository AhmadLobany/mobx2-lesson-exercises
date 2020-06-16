import { observable, computed, action } from  'mobx'
import {Reservation} from './ReservationStore'


export class RestaurantStore {
    @observable reservations = []
    @observable numTables = 10
    @computed get totalReservations() { //automatically calculates the total reservations
        return this.reservations.length
    }

    @computed get openTables() { //automatically caluclates the number of tables avalible, only when the state is affected
        let counter = 0
        this.reservations.forEach(r => r.seated ? counter ++: null)
        return (this.numTables - counter)
    }

    @computed get restPopulation() {
        let counter = 0
        this.reservations.forEach(r => (r.seated &&  !r.completed) ? counter += parseInt(r.numPeople,10): null)
        return  counter
    }

    @computed get completedTables() {
        let counter = 0
        this.reservations.forEach(r => r.completed ? counter ++: null)
        return  counter
    }

    @action addRes = (name, numPeople) => {
        this.reservations.push(new Reservation(name, numPeople))
    }
    @action seatRes = (id) => {
        this.reservations.forEach(r => r.id===id ? r.seated=true : null)
    }
    @action completeRes = (id) => {
        this.reservations.forEach(r => r.id===id ? r.completed=true : null)
    }
}