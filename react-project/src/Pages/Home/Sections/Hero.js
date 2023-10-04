import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <a href="#afterHeader" className="anchor">
        <img
          src="assets/images/scroll-arrow.svg"
          alt="Scroll down"
          className="scroll"
        />
      </a>

      <div className="container">
        <ol className="carousel-indicators">
          <li data-target="#hero" data-slide-to="0" className="active"></li>
          <li data-target="#hero" data-slide-to="1"></li>
          <li data-target="#hero" data-slide-to="2"></li>
        </ol>
      </div>

      <div className="carousel-inner">
        <div
          className="item active"
          style={{
            backgroundimage: 'url("http://via.placeholder.com/1140x665")',
          }}
        >
          <div className="container">
            <div
              className="row blurb scrollme animateme"
              data-when="exit"
              data-from="0"
              data-to="1"
              data-opacity="0"
              data-translatey="100"
            >
              <div className="col-md-9">
                <span className="title">Action, Adventure, Fantasy</span>
                <h1>End of the World: Part II</h1>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum.
                </p>
                <div className="buttons">
                  <span className="certificate">PG</span>
                  <a
                    href="https://youtu.be/ScMzIvxBSi4"
                    data-vbtype="video"
                    className="venobox btn btn-default"
                  >
                    <i className="material-icons">play_arrow</i>
                    <span>Play trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: 'url("http://via.placeholder.com/1140x665")',
          }}
        >
          <div className="container">
            <div
              className="row blurb scrollme animateme"
              data-when="exit"
              data-from="0"
              data-to="1"
              data-opacity="0"
              data-translatey="100"
            >
              <div className="col-md-9">
                <span className="title">Action, Adventure, Fantasy</span>
                <h1>End of the World: Part II</h1>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum.
                </p>
                <div className="buttons">
                  <span className="certificate">15</span>
                  <a
                    href="https://youtu.be/ScMzIvxBSi4"
                    data-vbtype="video"
                    className="venobox btn btn-default"
                  >
                    <i className="material-icons">play_arrow</i>
                    <span>Play trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundimage: 'url("http://via.placeholder.com/1140x665")',
          }}
        >
          <div className="container">
            <div
              className="row blurb scrollme animateme"
              data-when="exit"
              data-from="0"
              data-to="1"
              data-opacity="0"
              data-translatey="100"
            >
              <div className="col-md-9">
                <span className="title">Action, Adventure, Fantasy</span>
                <h1>End of the World: Part II</h1>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum.
                </p>
                <div className="buttons">
                  <span className="certificate">PG</span>
                  <a
                    href="https://youtu.be/ScMzIvxBSi4"
                    data-vbtype="video"
                    className="venobox btn btn-default"
                  >
                    <i className="material-icons">play_arrow</i>
                    <span>Play trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
