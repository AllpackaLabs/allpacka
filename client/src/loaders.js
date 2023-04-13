import { useNavigate, useParams, json } from 'react-router-dom';

// These Loaders are used to get the trip and user
// data before rendering their respective home pages

export const userLoader = async ({ params }) => {
    const { id } = params
    try {
        const res = await fetch('/api/user/' + id);
        const user = json({ res })
        console.log('loader:', user)
       return user;
    } catch (err) {
        return null
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
        return null
    }
}