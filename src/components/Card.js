import React, {Component} from 'react';
 
const Card = ({id, name, username, email, url}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={`photo of ${name} chillin`} src={`https://robohash.org/${username}?200x200`} />
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
                <a href={url}> {name} link</a>
                <p>study smoothie coming soon</p>
            </div>
        </div>
    );

}

export default Card;