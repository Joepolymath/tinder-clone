import React, {useState} from 'react'
import './tinderCards.css'
import TinderCard from "react-tinder-card"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Joshua Ajagbe",
            url: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/p526x395/257372081_4574482252666042_6130924132145239511_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEc4TecVapeZbZexurj1_StbpouA1mH5M9umi4DWYfkz9xp1ENkWU3jHPFgTDh1lrEzOWjVl_-XdU9_eYL_IzpI&_nc_ohc=eSTo2AAyt-AAX9k5aO5&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AT9wtiAtVRNjqk4t-Ywz_d5BQ1wKb_-3GaOh52_CFbR1Bw&oe=61BEF928"
        },
        {
            name: "Jeff Bezos",
            url: "https://i.insider.com/6093e1f434af8d001859bbf5?width=1136&format=jpeg"
        },
        {
            name: "Elon Musk",
            url: "https://cdn.pixabay.com/photo/2021/03/09/23/49/elon-6083103__340.jpg"
        }
    ])

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
                        <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    )
}

export default TinderCards
