import React from 'react'
import logo from '../images/amazonLogo.png';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
const Login = () => {

  const saveSubmitData=(e)=>{
    e.preventDefault();
    console.log("submit data is saved");
  }
  return (
    <div className={styles.mainDiv}>
      <div><img src={logo} alt="amazon logo"/></div>
      <div className={styles.loginForm}>
        <p style={{'margin-top':'-2px', 'fontSize':'xx-large'}}>Sign in</p>
        <form className={styles.form} onSubmit={saveSubmitData}>
          <lable>Email or mobile phone number</lable>
          <br/>
          <input className="inputData" placeholder=''/>
          <br/>
          <br/>
          <Link to='/'><button>Continue</button></Link>
        </form>
        <p>By Continuing, You agree to Amazon's <span style={{'color':'blue'}}>Condition of Use</span> and <span style={{'color':'blue'}}>Privacy Policy</span></p>
        <p style={{'color':'blue'}}>Need help?</p>
        <hr style={{'color':'grey' , 'width': '93%', 'margin-left': '-2px'}}/>
        <h5>Buying for Work?</h5>
        <p>Shop on Amazon Business</p>
      </div>
      <div className={styles.createDiv}>
        <div className={styles.newAmazon}>
          <hr/>
          <p>New to Amazon?</p>
          <hr/>
        </div>
        <Link to='/signup'><button>Create your Amazon account</button></Link>
      </div>
    </div>
  )
}

export default Login
