import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
import '../screens/NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();

    const submit = () => {
        navigate('/')
    }

    return (
        <div>
            <h1 style={ {'font-family':"Georgia, 'Times New Roman', Times, serif",
            color: 'rgb(2, 148, 148)'} }>404 - Page Not Found</h1>
            <div style={ {display: 'grid', 'grid-template-columns': '50% 50%', margin:' 2% 5%'} }>
                
                <img src="../images/darkCocktail.png"/>
                <p className="notFoundMessage">The page you are looking for cannot be found. 
                    Please use one of our existing URLs or use the nagivation links found at the top of the page!
                    <br/><br/>
                    <span style={ {color: '#306075'} }>Click <Link to={navigate('/')} id='linkHome'>Here</Link> to 
                    return to Home</span></p>
            </div>
        </div>
    )
}
export default NotFound