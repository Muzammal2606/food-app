import React from 'react';
import { AppBar,Toolbar,Typography ,Button} from '@material-ui/core';
// import { Link } from 'react-router-dom';



import './Header.css'



export default function Header() {

    return (
        <>
        <div style={{backgroundColor:'#b5c6c9'}}>
            <AppBar position='static' className='appbar'>
                <Toolbar>
                    <Typography className="logoo" variant='h4'>Food Club</Typography>
                    <Typography className="find raise" variant='h6'>Find Food</Typography>
                    <Typography className="res raise" variant='h6'>Find Resturent</Typography>
                    <Typography className="loc raise" variant='h6'>Become a Saller</Typography>
                    <Button className='in'>Sign in</Button>
                    <Button className='up'>Sign up</Button>   
                </Toolbar>
            </AppBar>
           
         </div>
            

        
        </>
    )
}
