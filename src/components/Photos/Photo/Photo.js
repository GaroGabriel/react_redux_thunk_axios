import React from 'react';
import './Photo.scss'
const Photo = ({photo}) => {

    return (
        <div  className='photo'>
            <h5 className='photo__title'>{photo.title}</h5>
            <img
                src={photo.thumbnailUrl}
                className='photo_img'
                alt={photo.title}/>
        </div>
    );
};

export default Photo;
