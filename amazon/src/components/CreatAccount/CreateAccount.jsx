import React from 'react'
import styles from './CreateAccount.module.css';
import logo from '../images/amazonLogo.png';
import { Link } from 'react-router-dom';
const CreateAccount = () => {
 
    const saveSubmitData=(e)=>{
    e.preventDefault();
    console.log("submit data is saved");
    }
    return (
    <div className={styles.mainDiv}>
        <div><img src={logo} alt="amazon logo"/></div>
        <div className={styles.loginForm}>
        <p style={{'margin-top':'-2px', 'fontSize':'xx-large'}}>Create Account</p>
        <form className={styles.form} onSubmit={saveSubmitData}>
            <lable>Your name</lable>
            <br/>
            <input className="inputData" placeholder='First and Last name'/>
            <br/>
            <br/>
            <lable>Mobile number</lable>
            <br/>
            <input className="inputData" placeholder='Moblie number'/>
            <br/>
            <br/>
            <lable>Email(optional)</lable>
            <br/>
            <input className="inputData" placeholder=''/>
            <br/>
            <br/>
            <lable>Password</lable>
            <br/>
            <input className="inputData" placeholder='At least 6 characters'/>
            <br/>
            <br/>
            <Link to='home'><button>Continue</button></Link>
        </form>
        <p style={{'color':'blue'}}>Need help?</p>
        <hr style={{'color':'grey' , 'width': '93%', 'margin-left': '-2px'}}/>
        <h5>Buying for Work?</h5>
        <p style={{'color':'blue', 'marginBottom':'25px'}}>Shop on Amazon Business</p>
        <p style={{'color':'black'}}>Already have an account?<span style={{'color':'blue'}}><Link to='login'>signin</Link></span></p>
        </div>
    </div>
    )
}
export default CreateAccount