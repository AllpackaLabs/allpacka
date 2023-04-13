import { useNavigate, useParams, json } from 'react-router-dom';

export const userLoader = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch('/api/user/' + id);
        const user = json({ res })
        console.log('loader:', user)
       return user;
    } catch (err) {
        // return err
        return {username: 'Bilbo Baggins', trips: [{date: Date.now(), tripName: 'There and Back again'}, {date: Date.now(), tripName: 'The Lord of the Rings'}]}
    }
}

export const tripLoader = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch('/api/trip/' + id);
        // console.log(res)
        const trip = json({ res })
       return trip;
    } catch (err) {
        console.log('loader: ',res)
        return null
    }
}