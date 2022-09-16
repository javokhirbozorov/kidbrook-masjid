const fajr = document.querySelector('.fajr-time');
const fajrJamat = document.querySelector('.fajr-jamat-time');
const sunrise = document.querySelector('.sunrise-time');
const dhuhr = document.querySelector('.dhuhr-time');
const dhuhrJamat = document.querySelector('.dhuhr-jamat-time');
const asr = document.querySelector('.asr-time');
const asrJamat = document.querySelector('.asr-jamat-time');
const magrib = document.querySelector('.magrib-time');
const magribJamat = document.querySelector('.magrib-jamat-time');
const isha = document.querySelector('.isha-time');
const ishaJamat = document.querySelector('.isha-jamat-time');

const hijriDate = document.querySelector('.hijri-date');

const hijriDateApi = async () => {
  const rawData = await fetch('http://api.aladhan.com/v1/timingsByCity?city=London&country=uk');
  const response = await rawData.json();
  // console.log(response);
  const hijriDay = Number(response.data.date.hijri.day) + 1;

  const currentHijri = `${hijriDay} ${response.data.date.hijri.month.ar} (${response.data.date.hijri.month.en}) ${response.data.date.hijri.year}`;
  console.log(currentHijri);

  hijriDate.innerHTML = currentHijri;
};
// const Data = new Date();
// console.log(`${Data.getFullYear()}-${Data.getMonth()}-${Data.getDay()}`, '😁😁😁😁');

// returns current date

const d = new Date();
let month = `${d.getMonth() + 1}`;
let day = `${d.getDate()}`;
const year = d.getFullYear();

if (month.length < 2) { month = `0${month}`; }
if (day.length < 2) { day = `0${day}`; }

const currentDate = [year, month, day].join('-');
// console.log(currentDate);
const prayerTime = async () => {
  const rawData = await fetch('https://www.londonprayertimes.com/api/times/?format=json&key=b0a1b347-bccf-48ac-ac91-ff30b9b4a645&year=2022&month=september&24hours=true');
  const response = await rawData.json();
  const namazTime = response.times[currentDate];
  // console.log(namazTime);

  // adding real times to the DOM elements
  fajr.innerHTML = namazTime.fajr;
  fajrJamat.innerHTML = namazTime.fajr_jamat;

  sunrise.innerHTML = namazTime.sunrise;

  dhuhr.innerHTML = namazTime.dhuhr;
  dhuhrJamat.innerHTML = namazTime.dhuhr_jamat;

  asr.innerHTML = namazTime.asr;
  asrJamat.innerHTML = namazTime.asr_jamat;

  magrib.innerHTML = namazTime.magrib;
  magribJamat.innerHTML = namazTime.magrib_jamat;

  isha.innerHTML = namazTime.isha;
  ishaJamat.innerHTML = namazTime.isha_jamat;
};

hijriDateApi();
prayerTime();

// * Player here

// console.clear();

class musicPlayer {
  constructor() {
    this.play = this.play.bind(this);
    this.playBtn = document.getElementById('play');
    this.playBtn.addEventListener('click', this.play);
    this.controlPanel = document.getElementById('control-panel');
    this.infoBar = document.getElementById('info');
  }

  play() {
    const controlPanelObj = this.controlPanel;
    const infoBarObj = this.infoBar;
    Array.from(controlPanelObj.classList).find((element) => (element !== 'active' ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active')));

    Array.from(infoBarObj.classList).find((element) => (element !== 'active' ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active')));
  }
}

const newMusicplayer = new musicPlayer();

const getSurah = async () => {
  const response = await fetch('http://api.alquran.cloud/v1/surah/1/ar.alafasy');
  const res = await response.json();
  console.log(res);
  const ayah = res.data.ayahs[1].audio;
  const reciter = res.data.edition.englishName;
  const ayahName = res.data.englishName;

  const audio = document.querySelector('#myAudio');
  const playBtn = document.querySelector('#play');
  const audioSrc = document.querySelector('#audioSrc');
  const artist = document.querySelector('.artist');
  const name = document.querySelector('.name');
  let count = 0;

  const playPause = () => {
    if (count === 0) {
      count = 1;
      audio.play();
    } else {
      count = 0;
      audio.pause();
    }
  };

  const surahSrc = playBtn.addEventListener('click', () => {
    // console.log(audioSrc.attributes);
    // console.log(ayah);
    audioSrc.src = ayah;
    artist.innerHTML = reciter;
    name.innerHTML = ayahName;
    playPause();
    // playPause();
  });

  return res;
};
getSurah();
