import React from 'react';
import Card from './Card';

const CardList = ( {courses}) => {
    // when doing loops in React, remember to give it a unique key
    return (
        <div>
        {/*     map is the loop */}
            {courses.map((course, i) =>{
        return  (
            <Card 
                key={i} 
                id={courses[i].id} 
                name={courses[i].name} 
                email={courses[i].email} 
                username={courses[i].username}
                url={courses[i].url}
            />
        );
    })}
        </div>
    )
}

export default CardList;