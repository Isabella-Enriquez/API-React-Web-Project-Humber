import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../screens/Register.css'

const Register = (props) => {

    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [age, setAge] = useState ('')
    const [email, setEmail] = useState ('')
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [password2, setPassword2] = useState ('')
    const [error, setError] = useState ('')

    const navigate = useNavigate()
    const submit = () => {
        if (!(firstName && lastName && age && email && username && password && password2)){
            setError("All boxes have to be filled out!")
        }else if (isNaN(parseInt(age)) || parseInt(age)<=0){
            setError("Age must be a number greater than 0.");
        }else if (props.accounts[username] !== undefined){
            setError("Your username is already taken. Please enter a different username.")
        }else if (!(password === password2)){
            setError("Passwords do not match.")
        }else{
            let newAccount = {}
            newAccount[username] = {'username':username, 'password':password}
            props.setAccounts({...props.accounts, ...newAccount})
            props.setCurrAccount(username)
            navigate(`/newsletter/${username}`)
        }
    }
    const clear = () =>{
        setFirstName('');
        setLastName('');
        setAge('');
        setEmail('');
        setUsername('');
        setPassword('');
        setPassword2('')
    };
    const login = () => {
        navigate(`/login`)
    }
    
    return (
        <div>
        <div class="grid-container">
        <div class="register">
            <div class="form">
            <p className="signupTitle">Sign up and receive fun and informative information every month!</p>

        <div class="name-inputs">
            <div class="input-group">
            <lable for="firstName">First Name: </lable><br/>
            <input id="firstName" type="text" value={firstName} 
            onChange={(e)=> {setFirstName(e.target.value)}}/>
            </div>
            <div class="input-group">
            <lable for="lastName">Last Name: </lable><br/>
            <input id="lastName" type="text" value={lastName} 
            onChange={(e)=> {setLastName(e.target.value)}}/>
            </div>
        </div>
        <div class="input-group2">
            <lable for="age">Age: </lable><br/>
            <input id="age" type="text" value={age} 
            onChange={(e)=> {setAge(e.target.value)}}/>
            <br/><br/>
            <lable for="email">Email: </lable><br/>
            <input id="email" type="text" value={email} 
            onChange={(e)=> {setEmail(e.target.value)}}/>
            <br/><br/>
            <lable for="username">Username: </lable><br/>
            <input id="username" type="text" value={username} 
            onChange={(e)=> {setUsername(e.target.value)}}/>
            <br/><br/>
            <lable for="password">Password: </lable><br/>
            <input id="password" type="password" value={password} 
            style={{width: '550px', height: '40px', textAlign: 'center'}}
            onChange={(e)=> {setPassword(e.target.value)}}/>
            <br/><br/>
            <lable for="password2">Re-Enter Password: </lable><br/>
            <input id="password2" type="password" value={password2} 
            style={{width: '550px', height: '40px', textAlign: 'center'}}
            onChange={(e)=> {setPassword2(e.target.value)}}/>
        </div>
            <br/>
            <button class="button" onClick={submit}><b>Register</b></button>
            <button class="button" onClick={clear}type="reset"><b>Clear</b></button>
            <div style={ {height: '50px'} }>
                {error && <p style={{ color: 'aqua' }}><b>{error}</b></p>}
                <br/>
            </div>
            <p> <b>Already have an account with us? </b> 
            <b><span className='login' onClick={login}>Login</span></b></p>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Register