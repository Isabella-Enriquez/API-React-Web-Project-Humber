import { useNavigate } from "react-router-dom"
import '../screens/Home.css'

const Home = () => {
    const navigate = useNavigate();

    const submit = () => {
        navigate('/search')
    }

    return (
        <div className="container1">
            <img src="../images/lemonWood.png" id="hot" alt="hot" />
            <div className="overlay-text">
                <p><span style={{fontSize: "30px", 'text-shadow': '3px 3px 4px  rgba(74, 39, 24)'}}><b style={{color:'teal'}}>Welcome to DRINKS101</b></span><br/><br/>
                This is where you will learn the beauty between art and science, your taste buds will thank you. Our website 
                will teach you how to make various unique drinks from all around the world. You will be exposed to drinks 
                that you probably never heard of before. Next time you have a gathering all your guest will be amazed with 
                your new creations. No need for any experiences as we will make it very simple for you to follow along and 
                recreate the different drinks. Once you have some experience you will be able to create your own drinks with 
                everything you have learned, using past creations as an inspiration.</p>  
            </div>
            <img src="../images/drink1.jpg" id="drink1" alt="drink1"/>
            <div class="overlay-text2">
                <p>Name a drink and we'll teach you how to make it</p>
                <button onClick={submit} class="homeButton">Click Here</button>
            </div>
            <img src="../images/drink2.jpg" id="drink2" alt="drink2"/>
            <div class="overlay-text3">
                <p>Learn how to create unique drinks with the ingredients you have at home</p>
                <button onClick={submit} class="homeButton2">Click Here</button>
            </div>
        </div>
    ) 

}
export default Home