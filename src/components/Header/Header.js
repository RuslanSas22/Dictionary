import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import './Header.css'
import categories from '../../data/category'

const Header = ({category,setCategory,word,setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:'#fff',
            },
          mode: 'dark',
        },
      });

    const handleChange=(language)=>{
        setCategory(language);
        setWord("")
    }
  
    return (
    <div className='header'>
        <span className='title'>{word?word:'My Dictionary'}</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField 
                className='search' 
                label="Search a Word" 
                variant="standard" 
                value={word}
                onChange={(e)=>setWord(e.target.value)}
                />
                <TextField
                className='select'
                select
                label="Language"
                value={category}
                onChange={(e)=>handleChange(e.target.value)} 
                helperText="Please select your language"
                >

                    {categories.map((item)=>(
                        <MenuItem key={item.label} value={item.label}>{item.value}</MenuItem>
                    ))}
                </TextField>

            </ThemeProvider>
        </div>
    </div>
  )
}

export default Header