import React from 'react';
import './Albums.scss'

import Album from "./Album/Album";

const Albums = ({albums}) => {

    return (
        <div className='albums'>
            {albums.map(album => {
                return (
                    <Album
                        album={album}
                        key={album.id}
                    />
                )
            })
            }
        </div>
    );
};

export default Albums;
