import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import './Newsletter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Newsletter = (props) => {
    const {username} = useParams()

    const navigate = useNavigate();

    return (
        <div>
          <h4>NEWSLETTER</h4>
        <div className="main">
        <Container>
        <Row className="row">
          <Col className="col1"><img src="/images/masionJar.jpg" id="masionJar" alt="masionJar"/></Col>
          <Col className="col2"><span style={{fontFamily: 'Georgia', color: 'darkgray', textAlign: 'center', fontSize: '50px', lineHeight: '65px'}}>Thank you,
          <span style={{ color: 'white' , fontSize: '50px'}}> {username}</span> for registering.</span><br/>
          <p className="here">Here is April's Newsletter!</p>
          <p style={{textAlign: 'left', lineHeight: '20px', marginLeft: '10px', marginRight: '10px', color: 'rgb(209, 209, 209)'}}>
          <br/><span className="title">Cocktails: </span> Cocktails can have a little as two ingredients to as complex as over seven ingredients. Cocktails have evolved over time; there are classics you might know of such as Martinis and Old Fashioned. Now anyone can create their own unique cocktails with the right ingredients and taste buds. <br/>
          <br/><br/><span className="title" >Wine: </span> There are different variations of wine such as red, white, rose, plum, and ice. The production process involves fermenting grapes and aging the liquid that is produced. The wine gets most of its flavour from the surrounding of its field. Wineries can be found all over the world. Choosing the right wine depends on what you are eating, it is usually paired with food. Wine can also be great for social gatherings. <br/>
          <br/><br/><span className="title" >Non-Alcoholic Drinks: </span> What’s great about non-alcoholic drinks is that it’s so diverse, ranging from fresh juices and smoothies, teas, coffees, sodas and so much more. Non-alcoholic can be made with natural or artificial flavors, and some drinks can benefit your health while others may not. The aroma of the drink really depends on what region of the world you are in.</p></Col>
      </Row>
      <Row className="row2">
        <Col className="col3" style={{height: 'auto'}}>
          <div className='fullRecipe2'>
            <div>
              <div className='recipeTitle2' style={{height: 'auto'}}>
                  <h1 style={{display:'inline', color: '#306075', 'font-weight':'500'}}>{props.randomDrink.strDrink},&nbsp;</h1>   
                  <h3 style={{display:'inline'}}>{props.randomDrink.strCategory}</h3>
              </div>
              <div className='recipeIngre2'>
                <h2>Ingredients</h2>
                <p style={{'font-size': '19px'}}>
                  <div style={{display:'grid', 'grid-template-columns':'40% 40%', gap: '10%', 'margin-left': '5%'}}>
                        <div style={{padding: 'auto 10px'}}>
                            <span>{props.randomDrink.strIngredient1}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure1}</span><br/>
                            <span>{props.randomDrink.strIngredient2}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure2}</span><br/>
                            <span>{props.randomDrink.strIngredient3}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure3}</span><br/>
                            <span>{props.randomDrink.strIngredient4}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure4}</span><br/>
                            <span>{props.randomDrink.strIngredient5}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure5}</span><br/>
                            <span>{props.randomDrink.strIngredient6}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure6}</span><br/>
                            <span>{props.randomDrink.strIngredient7}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure7}</span><br/>
                          </div>
                          <div>
                            <span>{props.randomDrink.strIngredient8}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure8}</span><br/>
                            <span>{props.randomDrink.strIngredient9}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure9}</span><br/>
                            <span>{props.randomDrink.strIngredient10}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure10}</span><br/>
                            <span>{props.randomDrink.strIngredient11}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure11}</span><br/>
                            <span>{props.randomDrink.strIngredient12}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure12}</span><br/>
                            <span>{props.randomDrink.strIngredient13}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure13}</span><br/>
                            <span>{props.randomDrink.strIngredient14}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure14}</span><br/>
                            <span>{props.randomDrink.strIngredient15}</span><span style={{'display':'float', 'float':'right'}}>{props.randomDrink.strMeasure15}</span>
                        </div>
                    </div>
                  </p>
              </div>
              <div className='2recipeInstr' style={{'margin-top': '10px','margin-right': '30px'}}>
                  <h2>Instructions</h2>
                  <p style={{'font-size': '19px'}}>{props.randomDrink.strInstructions}</p>
              </div>
              
            </div>
              <div><h1 style={{'text-align':'center', color: '#306075', 'padding-top': '10px', 'font-weight': '500'}}>Drink of the Month!</h1><img src={props.randomDrink.strDrinkThumb} style={{width: '100%'}}/></div>
             
          </div>
        </Col>
        </Row>
      </Container> 
      </div>
      </div>
    )
}
export default Newsletter