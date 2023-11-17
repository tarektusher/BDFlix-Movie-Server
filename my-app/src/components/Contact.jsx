
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Contact() {
    const [userinfo, setUserInfo] = useState({
        firstname : '',
        lastname : '',
        email : '',
        Phone : 0,
        message : ''
    });
    const handleFirstNameChange=(e)=>{
        setUserInfo ({
            firstname : e.target.value,
            lastname : userinfo.lastname,
            email : userinfo.email,
            phone : userinfo.Phone,
            message : userinfo.message
        })
    }
    const handleLastNameChange=(e)=>{
        setUserInfo ({
            firstname : userinfo.firstname,
            lastname : e.target.value,
            email : e.target.value,
            phone : userinfo.Phone,
            message : userinfo.message
        })
    }
    const handleEmailChange=(e)=>{
        setUserInfo ({
            firstname : userinfo.firstname,
            lastname : userinfo.lastname,
            email : e.target.value,
            phone : userinfo.Phone,
            message : userinfo.message
        })
    }
    const handlePhoneNumberChange=(e)=>{
        setUserInfo ({
            firstname : userinfo.firstname,
            lastname : userinfo.lastname,
            email : userinfo.email,
            phone : e.target.value,
            message : userinfo.message
        })
    }
    const handleMessageChange=(e)=>{
        setUserInfo ({
            firstname : userinfo.firstname,
            lastname : userinfo.lastname,
            email : userinfo.email,
            phone : userinfo.Phone,
            message :e.target.value
        })
    }
    const getFormValue =(e)=>{
        e.preventDefault();
        alert('::: Form Submitted :::');
        console.log(userinfo);
    }

  return (
    <Box sx={{background : '#2C3952'}} id = "contact">
      <Grid sx={{paddingTop : '2vw'}}>
        <Typography variant='h4' sx={{background : "#2E3B55", width :'20vw', textAlign : 'center', borderRadius : '4px', padding : '4px', marginLeft : '40vw', color : 'white'}}>
        Contact Us
       </Typography></Grid>
      <Grid sx={{paddingBottom : '2vw', marginTop : '2vh'}}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form onSubmit={(e)=>getFormValue(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth onChange={(e) => handleFirstNameChange(e)} required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth onChange={(e) => handleLastNameChange(e)} required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth onChange={(e) => handleEmailChange(e)} required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth onChange={(e) => handlePhoneNumberChange(e)} required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth onChange={(e) => handleMessageChange(e)} required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth >Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  )
}

export default Contact