import {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../screens/NotRegister.css'

const NotRegister = (props) => {
    const {username} = useParams()
    const navigate = useNavigate();

    const goToReg = () => {
      navigate('/register')
    }
    const goToLog = () => {
      navigate('/login')
    }

    const checkRegister = () => {
      if (props.currAccount){
        navigate(`/newsletter/${props.currAccount}`)
      }
    }

    useEffect( () => {
      checkRegister()
    }, [])

    return (
        <div>
            <h2 className="wantToSee">If you want to see our monthly newsletter, please sign up or login</h2>
            <button class="button" onClick={goToReg}>Register</button>
            <button class="button" onClick={goToLog}>Login</button>
          <div className="not">
          <h4>NEWSLETTER</h4>
        <Container className="main">
        <Row className="row">
          <Col className="col1"><img src="/images/masionJar.jpg" id="masionJar" alt="masionJar"/></Col>
          <Col className="col2"><span style={{fontFamily: 'Georgia', color: 'gray', textAlign: 'center', fontSize: '50px', lineHeight: '65px'}}>Thank you
          <span style={{ color: 'white' , fontSize: '65px'}}> {username}</span> for registering.</span><br/>
          <p className="here">Here is April's Newsletter!</p>
          <p style={{textAlign: 'left', lineHeight: '20px', marginLeft: '10px', marginRight: '10px', color: 'darkgray'}}>
          <br/><span className="title">Cocktails: </span> The word “cocktail” was first printed in a New York newspaper in 1806 called “The Balance and Columbian Repository”. Cocktails can have a little as two ingredients to as complex as over seven ingredients. Cocktails have evolved overtime, there are classics like Martinis and Old Fashioned. Now anyone can create their own unique cocktails with the right ingredients and taste buds.
<br/><br/><span className="title">Wine: </span> There are different variations of wine such as red, white, rose, plum, and ice. The production process involves fermenting grapes and aging the liquid that is produced. The wine gets most of its flavour from the surrounding of its field. Wineries can be found all over the world. Choosing the right wine depends on what you are eating, it is usually paired with food. Wine can also be great for social gatherings.
<br/><br/><span className="title">Non-Alcoholic Drinks: </span> What’s great about non-alcoholic drinks are that it’s so diverse, ranging from fresh juices and smoothies, teas, coffees, sodas and so much more. Non-alcoholic can be made with natural or artificial flavors, some drinks can benefit your health whiles others may not. The aroma of the drink really depends on what region of the world you are in.</p></Col>
        </Row>
        <Row className="row2">
        <Col className="col3"><span className="tequilaTitle">Tequila Sunrise <br/><br/>Ingredients:
        <br/>2 ounces blanco tequila<br/>4 ounces orange juice, freshly squeezed<br/>1/4 ounce grenadine<br/>Garnish: orange slice & cherry<br/><br/>
        Instructions:<br/>1. Grab a chilled glass filled with ice, add tequila then orange juices
        <br/>2. Top the drink with grenadine, which will sink to the bottom of the glass
        <br/>3. Garnish with an orange slice and a cherry</span>
        <img src="/images/tequilaSunrise.jpg" id="tequilaSunrise" alt="tequilaSunrise"/></Col>
        </Row>
      </Container> 
      </div>
      </div>
    )
}
export default NotRegister