import {useEffect, useState} from 'react'
import {Pagination, Card, Button, Collapse} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../screens/Recipes.css'

const Recipes = (props) => {
    const [pageData, setPageData] = useState([])
    var allData = props.recipes.drinks
    var numDrinks = props.recipes.drinks.length
    var numPerPage = 3
    const [currPage, setCurrPage] = useState(1)
    const [loaded, setLoaded] = useState(false)
    const [open, setOpen] = useState(false)
    const [openRecipe, setOpenRecipe] = useState({})

    const formatPageData = () => {
        let tempData = []
        for (let i = 0; i < numDrinks; i+=numPerPage) {
            tempData = [...tempData, allData.slice(i, (i + numPerPage))]
        }
        setPageData(tempData)
        console.log(tempData)
    }

    const fetchIngreDrink = (id) => {
        let url="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
        
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => setOpenRecipe(json.drinks[0]))
            .catch((reason) => {
                console.log(reason)}
        )
    }

    useEffect( () => {
        formatPageData()
        setLoaded(true)
    }, [])

    return(
        <div>
            {/* {
                <span>
                    {pageData.map( (page) => (
                        page.map( (recipe) => (
                            <span>{recipe.idDrink}.{recipe.strDrink}<br/></span>
                        ))
                    ))}
                </span>
            } */}
            <span>
                {   
                    loaded ? (
                        <div>
                            <Pagination style={{padding:'15px 15px 0', 'justify-content':'center'}}>
                            {pageData.map( (_,i) => (
                                <Pagination.Item onClick={() => {setCurrPage(i+1)}} key={i+1} active={currPage===i+1}>{i+1}</Pagination.Item>
                            ))}
                            </Pagination>

                            <div className='card-container' style={ {display:'grid', 'grid-template-columns': '28% 28% 28%', 'justify-content': 'center'} }>
                                {pageData[currPage-1].map( (recipe) => (
                                    // <span>{recipe.idDrink}.{recipe.strDrink}<br/></span>
                                    <Card style={ {margin:'10px 15px', 'box-shadow': '0px 0px 40px 20px rgba(255, 255, 255, 0.55)'} }>
                                        <Card.Img variant="top" src={recipe.strDrinkThumb} />
                                        <Card.Body>
                                        <Card.Title>{recipe.strDrink}</Card.Title>
                                        <Card.Text style={ {'font-size':'16px'} }>
                                            {recipe.strCategory}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={ {'font-size':'16px'} }>
                                        <small className="text-muted" >
                                            <Button variant="outline-secondary" size="sm" className="w-100" onClick={() => {
                                                if (!openRecipe){
                                                    setOpen(!open)
                                                }
                                                else if (!open){
                                                    setOpen(!open)
                                                }
                                                if (props.searchType==='name'){
                                                    setOpenRecipe(recipe)
                                                }
                                                else{fetchIngreDrink(recipe.idDrink)}
                                            }}>See Full Recipe</Button>
                                        </small>
                                        </Card.Footer>
                                    </Card>
                                ))}
                            </div>

                            <Collapse in={open}>
                                <div className='fullRecipe'>
                                    <div className='recipeTitle'>
                                        <h1>{openRecipe.strDrink}</h1>   
                                        <h3>{openRecipe.strCategory}</h3>
                                    </div>
                                    <div className='recipeImg'>
                                        <img src={openRecipe.strDrinkThumb} style={{width: '100%'}}/>
                                    </div>
                                    <div className='recipeIngre' style={{'margin-left': ' 30px'}}>
                                        <h2>Ingredients</h2>
                                        <p style={{'font-size': '19px'}}>
                                            <div style={{display:'grid', 'grid-template-columns':'40% 40%', gap: '10%', 'margin-left': '5%'}}>
                                                <div style={{padding: 'auto 10px'}}>
                                                    <br/>
                                                    <span style={{'text-align': 'left'}}>{openRecipe.strIngredient1}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure1}</span><br/>
                                                    <span>{openRecipe.strIngredient2}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure2}</span><br/>
                                                    <span>{openRecipe.strIngredient3}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure3}</span><br/>
                                                    <span>{openRecipe.strIngredient4}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure4}</span><br/>
                                                    <span>{openRecipe.strIngredient5}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure5}</span><br/>
                                                    <span>{openRecipe.strIngredient6}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure6}</span><br/>
                                                    <span>{openRecipe.strIngredient7}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure7}</span><br/>
                                                </div>
                                                <div>
                                                    <br/>
                                                    <span>{openRecipe.strIngredient8}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure8}</span><br/>
                                                    <span>{openRecipe.strIngredient9}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure9}</span><br/>
                                                    <span>{openRecipe.strIngredient10}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure10}</span><br/>
                                                    <span>{openRecipe.strIngredient11}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure11}</span><br/>
                                                    <span>{openRecipe.strIngredient12}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure12}</span><br/>
                                                    <span>{openRecipe.strIngredient13}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure13}</span><br/>
                                                    <span>{openRecipe.strIngredient14}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure14}</span><br/>
                                                    <span>{openRecipe.strIngredient15}</span><span style={{'display':'float', 'float':'right'}}>{openRecipe.strMeasure15}</span>
                                                </div>
                                            </div>
                                            
                                        </p>
                                    </div>
                                    <div className='recipeInstr' style={{'margin-top': '10px'}}>
                                        <h2>Instructions</h2>
                                        <p style={{'font-size': '19px'}}>{openRecipe.strInstructions}</p>
                                    </div>
                                </div>
                            </Collapse>

                        </div>

                    ) : (<span></span>)
                }
            </span>

        </div>
    )
}

export default Recipes