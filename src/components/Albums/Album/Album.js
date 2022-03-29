import React from 'react';
import './Album.scss'
const Album = ({album}) => {
    return (
        <div  className='album'>
            <h3 className='album__title'>{album.title}</h3>

        </div>
    );
};

export default Album;
