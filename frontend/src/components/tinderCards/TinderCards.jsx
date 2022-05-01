import React, {useState, useEffect} from 'react'
import './tinderCards.css'
import TinderCard from "react-tinder-card"
import axios from '../../axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          const req = await axios.get('api/cards');
          setPeople(req.data.data);
      }
      fetchData();
    }, [])
    

    // functions
    const swiped = (direction, nameToDelete) => {
        console.log(`Removing ${nameToDelete}`);
    }
    const outOfFrame = (name) => {
        console.log(`${name} left the screen`);
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {people.map((person)=>
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.imgUrl})`}} className="card">
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards
