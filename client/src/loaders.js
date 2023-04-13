import { useNavigate, useParams, json, defer } from 'react-router-dom';

export const userLoader = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch('/api/user/' + id);
        const user = await res.json()
        // console.log('loader:', user)
        return user
    } catch (err) {
        return {username: 'Bilbo Baggins', trips: [{date: Date.now(), tripName: 'There and Back again'}, {date: Date.now(), tripName: 'The Lord of the Rings'}]}
    }
}

export const tripLoader = async ({ params }) => {
    const { trip_id } = params
    try {
        console.log(trip_id)
        const res = await fetch('/api/trip/' + trip_id);
        const trip = await res.json()
        console.lot(trip)
       return trip;
    } catch (err) {
        return null
    }
}