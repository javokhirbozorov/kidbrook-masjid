const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <!-- CSS only --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        {/* <!-- JavaScript Bundle with Popper --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />

        {/* custom */}
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/miniPlayerStyle.css" />
        <script defer src="js/client.js" />

        <title>{title}</title>
      </head>
      <body>
        {/* nav */}
        <header>
          <nav className="navbar navbar-dark bg-success navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Kidbrook Masjid</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">Posts</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Donations
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/">Donation</a></li>
                      <li><a className="dropdown-item" href="/">Another Donation</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                  </li>
                </ul>

              </div>
            </div>

            <div className="timetable">
              <div className="date">
                Date:
                {' '}
                <span className="hijri-date">Hijri Date</span>
              </div>
              <ul className="prayer-begins">
                <li className="tableTitle">
                  <h6>-------</h6>
                  <div className="begins">Begins:</div>
                  <div className="jamaah">Jamaah:</div>
                </li>
                <li className="fajr">
                  <h6>Fajr</h6>
                  <div className="fajr-time">00:00</div>
                  <div className="fajr-jamat-time">00:00</div>
                </li>
                <li className="sunrise">
                  <h6>Sunrise</h6>
                  <div className="sunrise-time">00:00</div>

                </li>
                <li className="dhuhr">
                  <h6>Dhuhr</h6>
                  <div className="dhuhr-time">00:00</div>
                  <div className="dhuhr-jamat-time">00:00</div>
                </li>
                <li className="asr">
                  <h6>Asr</h6>
                  <div className="asr-time">00:00</div>
                  <div className="asr-jamat-time">00:00</div>
                </li>
                <li className="magrib">
                  <h6>Magrib</h6>
                  <div className="magrib-time">00:00</div>
                  <div className="magrib-jamat-time">00:00</div>
                </li>
                <li className="isha">
                  <h6>Isha</h6>
                  <div className="isha-time">00:00</div>
                  <div className="isha-jamat-time">00:00</div>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>
        {/*
HTML SCSS JSResult Skip Results Iframe
EDIT ON */}
        <section className="quran-player">
          <div className="player">
            <audio id="myAudio">
              {' '}
              <track kind="captions" />
              <source src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/2.mp3" id="audioSrc" type="audio/mpeg" />
            </audio>
            <div id="info" className="info">
              <span className="artist">Flume</span>
              <span className="name">Say it</span>
              <div className="progress-bar">
                <div className="bar" />
              </div>
            </div>
            <div id="control-panel" className="control-panel">
              <div className="album-art" />
              <div className="controls">
                <div className="prev" />
                <div id="play" className="play" />
                <div className="next" />
              </div>
            </div>
          </div>
        </section>

      </body>
    </html>
  );
}

module.exports = Layout;
