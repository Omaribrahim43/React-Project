import React from 'react'

const Category = () => {
	return (
    <div className="container section">
    <div className="row">
      <div className="col-sm-12" id="afterHeader">
        <h2>Categories</h2>
        <div className="movie-slide col-md-4">
          <div className="movie-poster">
            <a href="#">
              <img
                src="https://i.pinimg.com/564x/00/07/e7/0007e75247cbfc10c5ba8a3b5dd0e488.jpg"
                alt="Movie title"
                style={{ height: '400px' }}
              />
            </a>
          </div>
          <h4 style={{ marginLeft: '10px' , marginTop:'10px', fontWeight:'bold'}} className="no-underline">Action movies</h4>
          <button className='btn btn-primary'>View More</button>
        </div>

        {/* Second category */}
        <div className="movie-slide col-md-4">
          <div className="movie-poster">
            <a href="#">
              <img
                src="https://i.pinimg.com/564x/26/01/c9/2601c9686cddb11bd97810637e6a4c01.jpg"
                alt="Movie title"
                style={{ height: '400px' }}
              />
            </a>
          </div>
          <h4 style={{ marginLeft: '10px' , marginTop:'10px', fontWeight:'bold'}} className="no-underline">Horror movies</h4>
          <button  className='btn btn-primary'>View More</button>
        </div>
        {/* third category */}
        <div className="movie-slide col-md-4">
          <div className="movie-poster">
            <a href="#">
              <img
                src="https://i.pinimg.com/564x/e0/cc/67/e0cc670c8b292b6eb77d406388d50835.jpg"
                alt="Movie title"
                style={{ height: '400px'}}
              />
            </a>
          </div>
          <h4 style={{ marginLeft: '5px' , marginTop:'10px', fontWeight:'bold'}} className="no-underline">Adventure movies</h4>
          <button className='btn btn-primary'>View More</button>
        </div>
      </div>
    </div>
  </div>
	)
}

export default Category