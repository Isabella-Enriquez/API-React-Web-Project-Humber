import { useState, useEffect } from "react"
import Recipes from "./Recipes"
import '../screens/Search.css'

const Search = () => {
    const [search, setSearch] = useState ('')
    const [radioValue, setRadioValue] = useState('')
    const [searchError, setSearchError] = useState('')
    const [recipeResponse, setRecipeResponse] = useState([])
    const [loaded, setLoaded] = useState(false)
    

    const checkSearch = () => {
        if (!search){
            setSearchError('Please enter something into the search bar.')
        }
        else if (!radioValue){
            setSearchError('Please select either Name or Ingredient.')
        }else{
            //uncomment to confirm radioValue has the correct value upon submission
            // setSearchError(`${radioValue}`)
            setSearchError('')
            //delete below line later: for testing purposes
            setSearchError('Loading...')
            fetchDrinks()
        }
    }

    const fetchDrinks = () => {
        if (radioValue==='ingredient'){
            var url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + search
            
        }else{
            var url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search
        }
        
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => formatDrinks(json))
            .catch((reason) => {
                //api link for ingredients does not return a json object when search results not found
                //so this check determines whether the response fails because of the search result
                if (reason instanceof SyntaxError){
                    setSearchError('No drinks found.')} 
                else{
                    console.log(reason)}
                })
    }

    const formatDrinks = (drinksJson) => {
        console.log(drinksJson)
        //delete below line later: for testing purposes (see loading... above)
        setSearchError('')
        //api link for names returns a json object with drinks:null when search results not found
        if (drinksJson.drinks == null){
            setSearchError('No drinks found.')
        }else{
            // line below for testing if response works
            // setSearchError(`${drinksJson.drinks[0].strDrink}`)
            setRecipeResponse(drinksJson)
            setLoaded(true)
            window.scrollTo({
                top: document.querySelector(".mainError").offsetTop,
                behavior: "smooth",
            })
        }
    }

    useEffect( () => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div>
            <h1 className="searchTitle">SEARCH DRINKS</h1>
            <div class="searching" style={ {display: 'block'} }>
                <div>
                    <label for="search"></label>
                    <input id="search" type="text" placeholder="Type here" value={search} 
                    onChange={(e)=> {setSearch(e.target.value)}}/>
                    <button class="searchButton" onClick={() => {checkSearch(); setLoaded(false); 
                    }}>Search</button>
                </div>
                <div>
                    {/* <label className='searchBy'>Search By:</label> */}
                    <div className="labelContainer">
                        <input type="radio"  name="options" onClick={(e) => {setRadioValue('name')}}/>
                        <label for='name'>Search by Name</label>
                        <input type="radio"  name="options" onClick={(e) => {setRadioValue('ingredient')}}/>
                        <label for='ingredient'>Search by Ingredient</label>
                    </div>
                </div>
                <div className='mainError' style={{height:'20px'}}>{searchError && <span style={{ color: 'orange', 'font-size': '20px' }}>{searchError}</span>}</div>

            </div>
            <img id='searchImg' src="/images/tequilaSunrise.jpg"/>
            <div className="loaded">
                {/* <img id='searchImg' src="/images/beachCocktails2.png"/> */}
                <span id='recipes-cont'>{loaded && <Recipes recipes={recipeResponse} searchType={radioValue}/>}</span>
            </div>
            <div style={{height:'680px'}}></div>
        </div>
    )
}
export default Search