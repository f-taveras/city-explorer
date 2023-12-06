import { If, Then, Else, When } from 'react-if'

const API_KEY = import.meta.env.VITE_API_KEY;

function Map(props) {


    // https://maps.locationiq.com/v3/staticmap?key=<YOUR_ACCESS_TOKEN>&center=<latitude>,<longitude>&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>

    return (
        <When condition={props.latitude && props.longitude}>

            <figure>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`} width="500" alt="A map" />
            </figure>
            <div></div>
        </When>
    )
}

export default Map;