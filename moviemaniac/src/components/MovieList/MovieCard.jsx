import React from 'react'
import './MovieCard.css'
import Star from '../../assets/star.png'
const MovieCard = () => {
  return (
    <a href='' className='movie_card'>
        <img 
        alt='movie poster'
        className='movie_poster'
        src='https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png'
        />

        <div className="movie_details">
            <h3 className="movie_details_heading">Movie Name</h3>
            <div className="align_center movie_date_rate">
                <p> 10-20-2020</p>
                <p>8.0 <img src={Star} alt="" className="card_emoji" /></p>
            </div>
            <p className="movie_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>


    </a>

  )
}

export default MovieCard