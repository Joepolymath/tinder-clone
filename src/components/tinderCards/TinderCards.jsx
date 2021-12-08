import React, {useState} from 'react'
import './tinderCards.css'
import TinderCard from "react-tinder-card"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Joshua Ajagbe",
            url: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/257372081_4574482252666042_6130924132145239511_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEc4TecVapeZbZexurj1_StbpouA1mH5M9umi4DWYfkz9xp1ENkWU3jHPFgTDh1lrEzOWjVl_-XdU9_eYL_IzpI&_nc_ohc=4Gpb1iYHN80AX-_UETF&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=e406c84b5e6f43652d977283de061e23&oe=61B4B245"
        },
        {
            name: "Joshua Ajagbe",
            url: "https://scontent.fabv2-2.fna.fbcdn.net/v/t1.6435-9/128744147_3577962548984689_4581502833551902025_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEhtbOCO-smS90IICdH0aw5kygwLUi_SqGTKDAtSL9KoSjjlqlFVpd_GoQhKNbbw_ekF7lYnRqefiOZ2GTgnpE_&_nc_ohc=MYr8529zLb0AX8WMNZY&_nc_ht=scontent.fabv2-2.fna&oh=a1c3d8bbd0c31d634d716a0eb41f5318&oe=61D66F04"
        },
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
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
