import React from 'react'

const Reviews = () => {
  return (
    <>
			<div class="container section single-movie">
				<div class="row">
					<div class="col-sm-7">
						<h2>Comments</h2>
						<div class="comments">
							<div class="row">
								<div class="col-sm-2">
									<img src="images/avatar.png" class="Luke Barrett" />
								</div>
								<div class="col-sm-9">
									<span class="date">February 2, at 2:34pm</span>
									<h4 class="no-underline">Luke Barrett</h4>
									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-2">
									<img src="images/avatar.png" class="Keith Cox" />
								</div>
								<div class="col-sm-9">
									<span class="date">February 2, at 2:34pm</span>
									<h4 class="no-underline">Keith Cox</h4>
									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-2">
									<img src="images/avatar.png" class="Gabriel Norris" />
								</div>
								<div class="col-sm-9">
									<span class="date">February 2, at 2:34pm</span>
									<h4 class="no-underline">Gabriel Norris</h4>
									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-2">
									<img src="images/avatar.png" class="Luke Barrett" />
								</div>
								<div class="col-sm-9">
									<span class="date">February 2, at 2:34pm</span>
									<h4 class="no-underline">Luke Barrett</h4>
									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-2">
									<img src="images/avatar.png" class="Gabriel Norris" />
								</div>
								<div class="col-sm-9">
									<span class="date">February 2, at 2:34pm</span>
									<h4 class="no-underline">Gabriel Norris</h4>
									<p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4 col-sm-push-1">
						<h2>Leave a comment</h2>
						<form>
							<div class="form-group">
								<label>Name *</label>
								<input type="text" />
							</div>
							<div class="form-group">
								<label>Email *</label>
								<input type="email" />
							</div>
							<div class="form-group">
								<label>Website</label>
								<input type="text" />
							</div>
							<div class="form-group">
								<label>Comments *</label>
								<textarea rows="5"></textarea>
							</div>
							<div class="form-group right-align">
								<button class="btn btn-ghost">Post comment</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			
			<div class="section small-padding border-top">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 cta">
							<p>Need help? Contact our support team on</p>
							<p class="gradient-text">0330 123 4567</p>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default Reviews
