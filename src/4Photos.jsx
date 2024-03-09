import { useEffect, useState } from 'react'
import './Photos.css'
import Photo from './Photo';

export default function Photos() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <div className='container'>
            <h3>Photos: {photos.length}</h3>
            {
                photos.map(photo => <Photo photo={photo}></Photo>)
            }
        </div>
    )
}