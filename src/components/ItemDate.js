import './ItemDate.css';

function ItemDate (props){

const day =props.day;
const month = props.month;
const year =props.year;

    return(
        <div className='colour-design-back'>
            <p>{day}</p>
            <p>{month}</p>
            <p>{year}</p>
        </div>
    )
}

export default ItemDate ;