import { useState } from 'react'
import {
  Grid,
  Button
} from "semantic-ui-react";



function App() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1336/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      }),
    })

    const data = await response.json()

    if(data.admin){
      alert('Login Successful')
      window.location.href = '/dashboard'
    } else {
      alert('Please check your Email or Password ')
    }
  }

  
  
  return (
    <Grid textAlign="center" style={ { display: 'flex',
    justifyContent:'center',
    alignItems:'center', 
    height: '90vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
  <div style={{   margin: 'auto'}}>
    
    <img src="https://i.imgur.com/kI8pQ2D.png"  alt="LOGIN-LOGO" width="300" height="300" />

    <form onSubmit={loginUser} >

      <input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
      style={{
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid',
        borderRadius: '0%',
        marginLeft: '-30px'}}
        />
      <br/>

      <input 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      placeholder="Password"
      style={{
        width: '100%',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid',
        borderRadius: '0%',
        marginLeft: '-30px'}}
        />
      <br/>
      <Button style={{ backgroundColor: ' #e7e7e7', border: '2px solid ', fontSize: '35px', borderRadius: '20%', marginLeft: '90px'}}
              type="submit" >
              Login
            </Button>
      
      <span className="form-input-login"  >
                   <p><small>You cant Log In ? Please contact the maneger!</small></p>
            </span>


    </form>
  </div>





  </Grid.Column>
    </Grid>

    )   
}

export default App;
