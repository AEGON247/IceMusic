function myData() {
  retrun;
}

function show() {
  document.getElementById('anotherFunction').classList.toggle('Active');
}

let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
  {
    name: "I Found A Girl",
    artist: "The VAMPPS",
    image: "https://tse1.mm.bing.net/th?id=OIP.5JurnNF6zi__XmVt3OcCUQHaHa&pid=Api&P=0&w=300&h=300",
    path: "Songs/Vamps - I Found A Girl.mp3",
  },

  {
    name: "Alors On Danse",
    artist: "Stromae",
    image: "https://i1.sndcdn.com/artworks-000295341642-6efsgq-t500x500.jpg",
    path: "Songs/Stromae-Alors-on-danse.mp3",
  },

  {
    name: "Havanna -feat. Camilla Cabaello",
    artist: "Camila Cabello",
    image: "https://i.scdn.co/image/ab67706c0000bebb94c99a7eac8f7bea6170c011",
    path: "https://ia801000.us.archive.org/34/items/camilacabellofeat.youngthughavana/Camila_Cabello_feat._Young_Thug_-_Havana.mp3",
  },

  {
    name: "Faded",
    artist: "Alan Walker",
    image: "https://i.scdn.co/image/ab67616d0000b2735f48f77f2084b493367d720a",
    path: "https://ia801007.us.archive.org/30/items/Alan-Walker/Alan%20Walker%20-%20Faded.mp3",
  },

  {
    name: "12 Going Nowhere",
    artist: "Camila Cabello",
    image: "https://i.scdn.co/image/ab67616d0000b2734aaae42021eebabd4a4bc8e2",
    path: "https://ia801000.us.archive.org/34/items/camilacabellofeat.youngthughavana/12-Going-Nowhere.m4a",
  },

  {
    name: "Ocean Eyes",
    artist: "Billie Eillish",
    image: "https://i.scdn.co/image/ab67616d0000b2734fa6e8cf1621db66f4372483",
    path: "https://ia801000.us.archive.org/34/items/camilacabellofeat.youngthughavana/Billie%20Eilish%20-%20Ocean%20Eyes%20%28That%20Loud%20%20Neblo%20Remix%29.mp3",
  },

  {
    name: "Only Told The Moon",
    artist: "Camila Cabello",
    image: "https://i.scdn.co/image/ab67616d0000b2737093d787a31a8d33d5ef8abc",
    path: "https://ia801000.us.archive.org/34/items/camilacabellofeat.youngthughavana/Camila%20Cabello%20%20Only%20Told%20the%20Moon%20%28Lyrics%29.mp3",
  },

  {
    name: "Don't Say You Love Me",
    artist: "Fifth Harmony",
    image: "https://i.scdn.co/image/ab67706c0000bebbfc234e69cab4bedcda114e16",
    path: "https://ia801000.us.archive.org/34/items/camilacabellofeat.youngthughavana/Dont%20Say%20You%20Love%20Me%20-%20Fifth%20Harmony%20%28Lyrics%29.mp3",
  },

  {
    name: "In The Dark",
    artist: "Camila Cabello",
    image: "https://yt3.ggpht.com/a/AGF-l78a6KuYKZ3v_JSIal_q2qUQuVZodDt1glc44w=s900-mo-c-c0xffffffff-rj-k-no",
    path: "https://ia801000.us.archive.org/34/items/camilacabellofeat.youngthughavana/Camila%20Cabello%20-%20In%20the%20Dark%20%28Audio%29.mp3",
  },

  {
    name: "Moonlight",
    artist: "Ariana Grande",
    image: "https://i.scdn.co/image/ab67706c0000da840e150e00a6972cfc08024c43",
    path: "https://ia801909.us.archive.org/21/items/ariana_grande_music/01%20Moonlight.mp3",
  },

  {
    name: "Energy",
    artist: "Alan Walker",
    image: "https://i.scdn.co/image/70a4d41c1e3f663becd299f269ea02e5df01ccb3",
    path: "https://ia801007.us.archive.org/30/items/Alan-Walker/Alan%20Walker%20-%20Energy.mp3",
  },

  {
    name: "Dangerous Woman",
    artist: "Ariana Grande",
    image: "https://i.scdn.co/image/2fd1b3eed010b657939c7d5e8e9cd79141346cbc",
    path: "https://ia801909.us.archive.org/21/items/ariana_grande_music/01%20Moonlight.mp3",
  },

  {
    name: "Attention",
    artist: "Charlie Puth",
    image: "https://i.scdn.co/image/6265da980122bf65c65414fc9745097cd743cf35",
    path: "https://ia801608.us.archive.org/19/items/CharliePuth-Attention_894/CharliePuth-Attention.ogg",
  },

  {
    name: "One Last Time",
    artist: "Ariana Grande",
    image: "https://i.scdn.co/image/ab67616d0000b27303b96a5223d2f9487d86d2cd",
    path:"https://ia801909.us.archive.org/21/items/ariana_grande_music/01%20Moonlight.mp3",
  },

  {
    name: "Alone",
    artist: "Alan Walker",
    image: "https://i.scdn.co/image/c903b69c7c123786eb658afbbacbeb0a61fc108f",
    path: "https://ia601007.us.archive.org/30/items/Alan-Walker/Alan%20Walker%20-%20Alone.mp3",
  },

  {
    name: "Wake Me Up",
    artist: "Ed Sheeran",
    image: "https://i.scdn.co/image/b68b39fdc2409d0f526ad48775ddcd93ff496cda",
    path: "https://ia903109.us.archive.org/25/items/edsheeranmakeitrainsonsofanarchytheme/Ed%20Sheeran%20-%20Wake%20me%20up.mp3",
  },

  {
    name: "Diamond Heart (feat. Sophia Somajo)",
    artist: "Alan Walker",
    image: "https://www.jonicaradio.it/wp-content/uploads/2018/11/alanwalker-diamondhearts_cover.jpg",
    path: "https://ia801007.us.archive.org/30/items/Alan-Walker/Alan%20Walker%20-%20Diamond%20Heart%20%28feat.%20Sophia%20Somajo%29.mp3",
  },

  {
    name: "Stitches",
    artist: "Shawn Mendes (delux)",
    image: "https://i.scdn.co/image/8f0e2c4b3c87f144fbbd33e622526259c11a3c64",
    path: "https://ia800705.us.archive.org/19/items/ShawnMendesStitchesOfficialVideo_201901/Shawn%20Mendes%20-%20Stitches%20%28Official%20Video%29.mp3",
  },

  {
    name: "Love Story",
    artist: "Taylor Swift",
    image: "https://i.scdn.co/image/ab67616d0000b273d92026947b3335de1328a11d",
    path: "https://ia903109.us.archive.org/19/items/taylorswift20062019vorbis320/Love%20Story%20%28AUS%20-%20EU%20CD%20single%29/Taylor%20Swift%20-%20Love%20Story.mp3",
  },

  {
    name: "I See Fire",
    artist: "Ed Sheeran",
    image: "https://tse3.mm.bing.net/th?id=OIP.UYapML_LseZ2kjki3yf_HgHaHa&pid=Api&P=0&w=300&h=300",
    path: "https://ia803109.us.archive.org/25/items/edsheeranmakeitrainsonsofanarchytheme/Ed%20Sheeran%20-%20I%20See%20Fire%20%28Music%20Video%29.mp3",
  },

  {
    name: "Our Song",
    artist: "Taylor Swift",
    image: "https://i.etsystatic.com/16373842/r/il/8b75fc/2624000591/il_794xN.2624000591_iccr.jpg",
    path: "https://ia803109.us.archive.org/19/items/taylorswift20062019vorbis320/Taylor%20Swift/Taylor%20Swift%20-%20Our%20song.mp3",
  },

  {
    name: "Leave Me Lonely (feat. Macy Gray)",
    artist: "Ariana Grande",
    image: "https://i.scdn.co/image/ab67616d0000b273fed9f2af7d6370fcca4929cb",
    path: "https://ia801909.us.archive.org/21/items/ariana_grande_music/08%20Leave%20Me%20Lonely%20%28feat.%20Macy%20Gray%29.mp3",
  },

  {
    name: "Hands On Me (feat. A$AP Ferg)",
    artist: "Ariana Grande",
    image: "https://i.scdn.co/image/ab67616d0000b27323547f853afb00887651e3a7",
    path: "https://ia801909.us.archive.org/21/items/ariana_grande_music/11%20Hands%20On%20Me%20%28feat.%20A%24AP%20Ferg%29.mp3",
  },

  {
    name: "Blank Space",
    artist: "Taylor Swift",
    image: "https://i.scdn.co/image/274a80f31ba247066bb97d946250943fd0809718",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/003%20Tailor%20Swift%20-%20Blank%20Space.mp3",
  },

  {
    name: "Back To December",
    artist: "Taylor Swift",
    image: "http://lh5.ggpht.com/-xLhcTgr66V8/VGJyXK8mYwI/AAAAAAAAMM8/Bb4CwMRpkNs/s72-c/Taylor-Swift-1989-album-cover.jpg?imgmax=800",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/008%20Taylor%20Swift%20-%20Back%20To%20December.mp3",
  },

  {
    name: "Love Me Like You Do",
    artist: "Ellie Goulding",
    image: "https://i.scdn.co/image/ab67616d0000b273f846f25700f9beaef34d8a4c",
    path:"https://ia601004.us.archive.org/3/items/003tailorswiftblankspace_201910/018%20Ellie%20Goulding%20-%20Love%20Me%20Like%20You%20Do.mp3",
  },

  {
    name: "Castle On The Hill",
    artist: "Ed Sheeran",
    image: "https://i.scdn.co/image/ab67616d0000b2730a9374b55bb7d74eecacf2d3",
    path: "https://ia801907.us.archive.org/2/items/ed-sheeran-saphire-love/Ed%20Sheeran%20-%20Castle%20On%20The%20Hill.mp3",
  },

  {
    name: "Titanium",
    artist: "David Guetta",
    image: "http://1.bp.blogspot.com/-xX7kOYLsKbM/TkAY0lEw0MI/AAAAAAAAATQ/4IaMEcZUdNw/s1600/00-david_guetta_and_sia_-_titanium-web-2011-cover-zzzz.jpg",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/017%20David%20Guetta%20-%20Titanium%20ft.%20Sia.mp3",
  },

  {
    name: "Bad Blood",
    artist: "Taylor Swift",
    image: "https://cnet1.cbsistatic.com/img/Zr_GFiXresJGyhyGVzBmYDBAQ1A=/644x0/2015/05/21/f96adfe8-cf90-4b29-a7a9-e6448c55d61a/taylor-swift-bad-blood.jpg",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/014%20Tailor%20Swift%20-%20Bad%20Blood.mp3",
  },

  {
    name: "Love Yourself",
    artist: "Justin Bieber",
    image: "https://i.scdn.co/image/8b47495ce0c4a341f7196f70bcf4361e6257c1a0",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/020%20Justin%20Bieber%20-%20Love%20Yourself.mp3",
  },

  {
    name: "All Of Me",
    artist: "John Legend",
    image: "https://i.scdn.co/image/ab67616d0000b2735f35f92a2996d19c0e9574d5",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/030%20John%20Legend%20%20-%20All%20Of%20Me.mp3",
  },

  {
    name: "Galway Girl", 
    artist: "Ed Sheeran",
    image: "https://i.pinimg.com/474x/73/6b/ea/736bea93a89fba9865883abf65892f77.jpg",
    path: "https://ia801907.us.archive.org/2/items/ed-sheeran-saphire-love/Ed%20Sheeran%20-%20Galway%20Girl.mp3",
  },

  {
    name: "Shape Of You",
    artist: "Ed Sheeran",
    image: "https://i.pinimg.com/474x/73/6b/ea/736bea93a89fba9865883abf65892f77.jpg",
    path: "https://ia801907.us.archive.org/2/items/ed-sheeran-saphire-love/Ed%20Sheeran%20-%20Shape%20of%20You.mp3",
  },

  {
    name: "Wellerman",
    artist: "Nathan Evans",
    image: "https://i.scdn.co/image/ab67616d0000b273b55f1a2f0299d6525c6ac99e",
    path: "https://ia601809.us.archive.org/1/items/nathan-evans-wellerman-sea-shanty/Nathan%20Evans%20-%20Wellerman%20%28Sea%20Shanty%29.mp3",
  },

  {
    name: "I Don't Care",
    artist: "Ed Sheeran & Justin Bieber",
    image: "https://i.scdn.co/image/e6a08e84fa0838f58b340e0d0e7e27213459d661",
    path: "https://ia801907.us.archive.org/2/items/ed-sheeran-saphire-love/Ed%20Sheeran%20%26%20Justin%20Bieber%20-%20I%20Don%27t%20Care.mp3",
  },

  {
    name: "All Of The Stars",
    artist: "Ed Sheeran",
    image: "https://images.genius.com/ba2149c9490ff055eed7ac79e0bb11a4.1000x1000x1.jpg",
    path: "https://ia801907.us.archive.org/2/items/ed-sheeran-saphire-love/Ed%20Sheeran%20-%20All%20Of%20The%20Stars.mp3",
  },

  {
    name: "22",
    artist: "Taylor Swift",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d4/Taylor_Swift_-_22.png",
    path: "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/004%20Taylor%20Swift%20-%2022.mp3",
  },

];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
