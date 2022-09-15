const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout title="Home">
      <section className="carousel">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x500.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1200x500.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1200x500.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="latestNews">
        <div className="container">
          <h2 className="newsHeader">Latest news</h2>

          {/* long news tile here */}
          <div className="row">

            <div className="card news-tiles long-news-tile col col-12">
              <img src="https://via.placeholder.com/1200x250.png" className="card-img" alt="news" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
            {/* short tiles here */}
            <div className="card news-tiles short-news-tile col col-6">
              <img src="https://via.placeholder.com/1200x250.png" className="card-img" alt="news" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit shorter.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
            {/* short tiles here */}
            <div className="card news-tiles long-news-tile col col-6">
              <img src="https://via.placeholder.com/1200x250.png" className="card-img" alt="news" />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>

        </div>

      </section>

      <div className="quick-donation container">
        <h2>Quick Donation</h2>

        <div className="container">
          <form action="" method="post">

            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" checked />
            <label className="btn btn-outline-success m-1" htmlFor="option1">£15</label>

            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
            <label className="btn btn-outline-success m-1" htmlFor="option2">£25</label>

            <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
            <label className="btn btn-outline-success m-1" htmlFor="option3">£30</label>

            <h5 className="d-block">Other amount:</h5>
            <div className="input-group mb-3 other-amount">

              <span className="input-group-text bg-success text-light border rounded" id="basic-addon1">£</span>
              <input type="number" className="form-control" placeholder="amount" aria-label="amount" aria-describedby="basic-addon1" />
            </div>
            <button className="btn btn-lg btn-success" type="submit">Donate</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
