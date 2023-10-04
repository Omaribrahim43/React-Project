import React from 'react'

const Category = () => {
	return (
		<div className="container section">
			<div className="row">
				<div className="col-sm-12" id="afterHeader">
					<h2>New in</h2>
					<div className="movie-slide col-md-4">
						<div className="movie-poster">
							<a href="#">
								<img src="http://via.placeholder.com/265x340.jpg" alt="Movie title" />
							</a>
						</div>
						<h4 className="no-underline">Action</h4>
						<button className='btn btn-primary'>View More</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Category