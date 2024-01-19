import React, { useState } from 'react'
import './Movie.css'
// import { Button } from 'bootstrap'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Movie() {
    const [movie, setmovie] = useState([])
    const[show,setshow]=useState(null)
    
    const apifetch = async () => {
        if (movie == '') {
            setshow()
        }
        const result = await fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`)
            .then(result => result.json())
            .then((data) => {
                const cinema = {
                    Title: `${data.Title}`,
                    Year: `${data.Year}`,
                    Poster: `${data.Poster}`,
                    Genre: `${data.Genre}`,
                    Rated: `${data.Rated}`,
                    Released: `${data.Released}`,
                    Actors: `${data.Actors}`,
                    Plot: `${data.Plot}`,
                    Value: `${data.Value}`,
                    Ratings:`${data.Ratings}`
                }
                setshow(cinema)
            })
            .catch((error) => {
                console.error(error);
              });
            console.log(result);
    }

  return (
      <div className='App'>
          <div className="container">
          <h1>Movie Search</h1>
          {/* <input type="text" onChange={(e)=>setmovie(e.target.value)} placeholder='Movie Name'/> <br /><br />
         <Button onClick={()=>apifetch()} variant="primary">search</Button>{' '} */}
         <div className="form">
          <form >
            <div className="input">
          <TextField id="outlined-basic" className='field' label="Movie Name"  onChange={(e)=>setmovie(e.target.value)} variant="outlined" /> <br />
            </div>
          </form>
              </div>
              <div className="button">
         <Button variant="contained" color="warning" onClick={(e)=>apifetch()}>Search</Button>
              </div> <br />
              <div className="output">
                  {show && (
                      <div className="movie">
                          
                          <table>
                             
                              <tr>
                                  <td colSpan={2}> <h2 style={{ textAlign: 'center' }}>{show.Title} ({show.Year})</h2></td>
                              </tr>
                              <tr>
                                  <td style={{width:'500px',alignItems:'center'}}>
                                      <img src={show.Poster} alt="" style={{borderRadius:'8%'}} width={'300px'} height={'400px'} />
                                      
                                  </td>
                                  <td colSpan={2} style={{ alignItems:'center',justifyContent:'between',padding:'10px',paddingLeft:'15px'}} >
                                      <p>{show.Rated}</p>
                                      <p> <b> Stars : </b>{show.Actors}</p>
                                      <p> <b> Genre : </b>{show.Genre} </p>
                                      <p><b>Release Date : </b>{show.Released} </p>
                                      <p>{show.Plot}</p>
                                  </td>
                              </tr>
                          </table>
                            <br />
                      </div>
                  )
                      
                  }
                 
              </div>
          </div>

    </div>
  )
}

export default Movie