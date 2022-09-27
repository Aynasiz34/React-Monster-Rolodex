import './card-list.css'
import Card from "../card/card";


const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {

            return (
                <Card key={monster.id} monster={monster} />
            )
        })}
    </div>
)

export default CardList