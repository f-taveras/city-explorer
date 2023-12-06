import {useState} from 'react'
function cityForm(props){
    
    
    const [city,setCity] = useState('');
    const [showHeading,setShowHeading] = useState(false)
    function handleChange(e){
        setShowHeading(false)
        setCity(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        setShowHeading(true);
        props.handleChangeCity(city);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label >
                <span>Please input a city</span>
                <input onChange={handleChange} placeholder="Type city" />
            </label>
            {
                showHeading && props.city && <h2>Information about {props.city} bellow</h2>
            }
            
            
        </form>
    )
}

export default cityForm;