import React from 'react';
import './Photos.scss'

import Photo from "./Photo/Photo";

const Photos = ({photos}) => {
    return (
        <div className='photos'>
            {photos.map(photo => {
                return (
                    <Photo
                        photo={photo}
                        key={photo.id}
                    />
                )
            })
            }
        </div>
    );
};

export default Photos;
