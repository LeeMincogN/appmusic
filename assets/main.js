const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'My music'

const playList = $('.playlist');
const backgroundCD = $('.background-img-song');
const cd = $('.cd');
const heading = $('h2');
const cdThumb = $('.cd-thumb');
const audio =   $('#audio') ;
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const volumeBtn = $('.volume-song');
const barVolume = $('.bar-input');
const volumeMain = $('#bar-input-main');
const modeBtn = $('.background-on');


const app = {
    currentIndex: 0,
    oldIndexRandom : [],
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isTimeUpdate: true,
    isVolume: true,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs : [
        {
            name: "Love Me Like You Do",
            author: ["Ellie Goulding"],
            path: "./assets/songs/song34.mp3",
            image: "./assets/img/song34.jpg"
        },
        {
            name: "Why Not Me",
            author: ["Enrique Iglesias"],
            path: "./assets/songs/song35.mp3",
            image: "./assets/img/song35.jpg"
        },
        {
            name: "We Don't Talk Anymore",
            author: ["Charlie Puth ft. Selena Gomez"],
            path: "./assets/songs/song36.mp3",
            image: "./assets/img/song36.jpg"
        },
        {
            name: "Shape Of You",
            author: ["Ed Sheeran"],
            path: "./assets/songs/song37.mp3",
            image: "./assets/img/song37.jpg"
        },
        {
            name: "2002",
            author: ["Anne-Marie"],
            path: "./assets/songs/song38.mp3",
            image: "./assets/img/song38.jpg"
        },
        {
            name: "Leyla",
            author: ["Mesto"],
            path: "./assets/songs/song39.mp3",
            image: "./assets/img/song39.jpg"
        },
        {
            name: "Play Date",
            author: ["Melanie Martinez"],
            path: "./assets/songs/song40.mp3",
            image: "./assets/img/song40.jpg"
        },
        {
            name: "I'm Not Her",
            author: ["Clara Mae"],
            path: "./assets/songs/song41.mp3",
            image: "./assets/img/song41.jpg"
        },
        {
            name: "T??nh ?????u",
            author: ["T??ng Duy T??n"],
            path: "./assets/songs/song33.mp3",
            image: "./assets/img/song33.jpg"
        },
        {
            name: "Mu???n R???i M?? Sao C??n",
            author: ["S??n T??ng M-TP"],
            path: "./assets/songs/song32.mp3",
            image: "./assets/img/song32.jpg"
        },
        {
            name: "S??i G??n H??m Nay M??a",
            author: ["JSOL, Ho??ng Duy??n"],
            path: "./assets/songs/song31.mp3",
            image: "./assets/img/song31.jpg"
        },
        {
            name: "C?? Ch??ng Trai Vi???t L??n C??y",
            author: ["Phan M???nh Qu???nh"],
            path: "./assets/songs/song30.mp3",
            image: "./assets/img/song30.jpg"
        },
        {
            name: "B?????c Qua M??a C?? ????n",
            author: ["V??"],
            path: "./assets/songs/song29.mp3",
            image: "./assets/img/song29.jpg"
        },
        {
            name: "V?? M???T C??U N??I",
            author: ["HO??NG D??NG, M??U N?????C BAND"],
            path: "./assets/songs/song28.mp3",
            image: "./assets/img/song28.jpg"
        },
        {
            name: "TH???NG ??I??N",
            author: ["JUSTATEE x PH????NG LY "],
            path: "./assets/songs/song27.mp3",
            image: "./assets/img/song27.jpg"
        },
        {
            name: "T??i ???? Qu??n Th???t R???i",
            author: ["Isaac"],
            path: "./assets/songs/song26.mp3",
            image: "./assets/img/song26.jpg"
        },
        {
            name: "????????????",
            author: ["?????????"],
            path: "./assets/songs/song24.mp3",
            image: "./assets/img/song24.jpg"
        },
        {
            name: "????????????",
            author: ["?????? "],
            path: "./assets/songs/song25.mp3",
            image: "./assets/img/song25.jpg"
        },
        {
            name: "SAY GOODBYE",
            author: ["Soobin Ho??ng S??n"],
            path: "./assets/songs/song22.mp3",
            image: "./assets/img/song22.jpg"
        },
        {
            name: "N?????c M???t Em Lau B???ng T??nh Y??u M???i",
            author: ["Da LAB ft. T??c Ti??n"],
            path: "./assets/songs/song23.mp3",
            image: "./assets/img/song23.jpg"
        },
        {
            name: "N??ng Th??",
            author: ["Ho??ng D??ng"],
            path: "./assets/songs/song1.mp3",
            image: "./assets/img/song1.jpg"
        },
        {
            name: "N???a Th???p K???",
            author: ["Ho??ng D??ng"],
            path: "./assets/songs/song2.mp3",
            image: "./assets/img/song2.jpg"
        },
        {
            name: "??????",
            author: ["???????????????"],
            path: "./assets/songs/song3.mp3",
            image: "./assets/img/song3.jpg"
        },
        {
            name: "?????????",
            author: ["Ren Ran"],
            path: "./assets/songs/song4.mp3",
            image: "./assets/img/song4.jpg"
        },
        {
            name: "Mascara",
            author: ["Chillies"],
            path: "./assets/songs/song5.mp3",
            image: "./assets/img/song5.jpg"
        },
        {
            name: "V?? Th??? L?? H???t",
            author: ["Chillies"],
            path: "./assets/songs/song6.mp3",
            image: "./assets/img/song6.jpg"
        },
        {
            name: "Anh ???? Quen V???i C?? ????n",
            author: ["Soobin Ho??ng S??n"],
            path: "./assets/songs/song7.mp3",
            image: "./assets/img/song7.jpg"
        },
        {
            name: "C?? AI TH????NG EM NH?? ANH (#CATENA)",
            author: ["T??c Ti??n ft. Touliver"],
            path: "./assets/songs/song8.mp3",
            image: "./assets/img/song8.jpg"
        },
        {
            name: "??????",
            author: ["En"],
            path: "./assets/songs/song9.mp3",
            image: "./assets/img/song9.jpg"
        },
        {
            name: "???",
            author: ["?????????"],
            path: "./assets/songs/song10.mp3",
            image: "./assets/img/song10.jpg"
        },
        {
            name: "Em Kh??ng L?? Duy Nh???t",
            author: ["T??c Ti??n"],
            path: "./assets/songs/song11.mp3",
            image: "./assets/img/song11.jpg"
        },
        {
            name: "3 1 0 7",
            author: ["W/n x Duongg x N??u"],
            path: "./assets/songs/song12.mp3",
            image: "./assets/img/song12.jpg"
        },
        {
            name: "3107-2",
            author: ["DuongG x N??U x W/N"],
            path: "./assets/songs/song13.mp3",
            image: "./assets/img/song13.jpg"
        },
        {
            name: "Hongkong1",
            author: ["Nguy???n Tr???ng T??i", "San Ji", "Double X"],
            path: "./assets/songs/song14.mp3",
            image: "./assets/img/song14.jpg"
        },
        {
            name: "3107-3",
            author: ["W/n ft. N??u, Duongg, Titie"],
            path: "./assets/songs/song15.mp3",
            image: "./assets/img/song15.jpg"
        },
        {
            name: "???????????????",
            author: ["???????????????"],
            path: "./assets/songs/song16.mp3",
            image: "./assets/img/song16.jpg"
        },
        {
            name: "??????",
            author: ["???????????????"],
            path: "./assets/songs/song17.mp3",
            image: "./assets/img/song17.jpg"
        },
        {
            name: "SAU N??Y H??Y G???P L???I NHAU KHI HOA N???",
            author: ["NGUY??N H??"],
            path: "./assets/songs/song18.mp3",
            image: "./assets/img/song18.jpg"
        },
        {
            name: "Nh?? M??a Tuy???t ?????u Ti??n (I Will Go To You Like The First Snow)",
            author: ["V??n Mai H????ng LIVE"],
            path: "./assets/songs/song19.mp3",
            image: "./assets/img/song19.jpg"
        },
        {
            name: "C?? H???n V???i Thanh Xu??n",
            author: ["Monstar"],
            path: "./assets/songs/song20.mp3",
            image: "./assets/img/song20.jpg"
        },
        {
            name: "V???t M??a",
            author: ["V?? C??t T?????ng"],
            path: "./assets/songs/song21.mp3",
            image: "./assets/img/song21.jpg"
        },

    ],

    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    
    render: function() {
        const html = this.songs.map((song, index)=> {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}"  data-index = "${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.author}</p>
                    </div>
                    <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
            </div>
            `;

        });
        playList.innerHTML = html.join('');
    },

    defineProperties: function() {
      Object.defineProperty(this, "currentSong", {
        get: function() {                                   
            return this.songs[this.currentIndex];
        }
      });
    },



    handleEvent: function() {
       const _this = this;
       
       const backgroundCdWidth = backgroundCD.offsetWidth;
       const backgroundCdHeight = backgroundCD.offsetHeight;
       const cdWidth = cd.offsetWidth;


       //X??? l?? b???t t???t volume
       volumeBtn.onclick = function() {
           barVolume.classList.toggle('volume-on');
       }

       //X??? l?? thay ?????i ch??? ????? m??n h??nh
       modeBtn.onclick = function() {
           modeBtn.classList.toggle('icon-change');
           player.classList.toggle('player-change');
       }

       //X??? l?? ??i???u ch???nh ??m thanh
        audio.volume = 1;
        volumeMain.value = audio.volume * 100;

        volumeMain.oninput = function() {
            audio.volume = volumeMain.value / 100;
        }

       //X??? l?? CD quay / d???ng
       const cdThumbAnimation = cdThumb.animate([
           {transform : 'rotate(360deg)'}
       ], {
           duration : 10000, //10 second
           iterations : Infinity
       })
       cdThumbAnimation.pause();
   
 
       //X??? l?? ph??ng to / thu nh??? CD
       document.onscroll = function() {
           const scrollTop = window.scrollY || document.documentElement.scrollTop;
           const newBackgroundCdWidth = backgroundCdWidth - scrollTop;
           const newBackgroundCdHeight = backgroundCdHeight - scrollTop;
           const newCdWidth = cdWidth - scrollTop;
        
           //X??? l?? scroll cho background CD
           backgroundCD.style.width = newBackgroundCdWidth > 0 ? newBackgroundCdWidth + 'px' : 0;
           backgroundCD.style.height = newBackgroundCdHeight > 0 ? newBackgroundCdHeight + 'px' : 0;
           backgroundCD.style.opacity = newBackgroundCdWidth / backgroundCdWidth;

           cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
           cd.style.opacity = newCdWidth / cdWidth;

       }

       //X??? l?? khi click play
       playBtn.onclick = function() {
           if(_this.isPlaying) {
              audio.pause();
           }else {
              audio.play();
           }
           
       }

       //Khi song ???????c play
       audio.onplay = function() {
           _this.isPlaying = true;
           player.classList.add('playing');
           cdThumbAnimation.play();
       }

       //Khi song b??? pause
       audio.onpause = function() {
          _this.isPlaying = false;
          player.classList.remove('playing');
          cdThumbAnimation.pause();
       }

       //Khi ti???n ????? b??i h??t thay ?????i
       audio.ontimeupdate = function() {
           if(audio.duration) {
               const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
               if(_this.isTimeUpdate) {
                 progress.value = progressPercent;
               }
           }
       }

       //X??? l?? khi tua b??i h??t
       progress.oninput = function(e) {
           const seekTime = audio.duration / 100 * e.target.value;
           if(_this.isTimeUpdate) {
              audio.currentTime = seekTime;
           }
       }

       //fix l???i khi tua b??i h??t
       const isTouch = 'touchstart' || 'mousedown';
       progress.addEventListener(isTouch, function() {
          !(_this.isTimeUpdate);
       })

       //Khi next b??i h??t
       nextBtn.onclick = function() {
           if(_this.isRandom) {
              _this.playRandomSong();
           }else {
              _this.nextSong();
           }
         
           audio.play();
           _this.render();
           _this.scrollToActiveSong();
       }

       //Khi prev b??i h??t
       prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong();
            }else {
                _this.prevSong();
            }
           
            audio.play();
            _this.render();
            _this.scrollToActiveSong();


       }

       //Khi random b??i h??t
       randomBtn.onclick = function(e) {
           _this.isRandom = !_this.isRandom;
           _this.setConfig('isRandom', _this.isRandom)
           this.classList.toggle('active', _this.isRandom);
       }

       //Khi repeat b??i h??t
       repeatBtn.onclick = function() {
           _this.isRepeat = !_this.isRepeat;
           _this.setConfig('isRepeat', _this.isRepeat)
           this.classList.toggle('active', _this.isRepeat);
       } 

       //X??? l?? next b??i h??t khi audio ended
       audio.onended = function () {
           if(_this.isRepeat) {
               audio.play();
           }else {
              nextBtn.click();
           }
           
       }
       
       //L???ng nghe h??nh vi click v??o playlist
       playList.onclick = function(e) {
          const clickSong = e.target.closest('.song:not(.active)');
          const clickOption = e.target.closest('.option');
          if(clickSong || !clickOption) {
             //X??? l?? khi click v??o b??i h??t
             if(clickSong) {
                _this.currentIndex = Number(clickSong.dataset.index)
                _this.loadCurrentSong();
                _this.render();
                audio.play();
             }

             //X??? l?? khi click v??o option
             if(clickOption) {
                 
             } 
          }
       }
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            const getActiveSong = $('.song.active').scrollIntoView({
               behavior: 'smooth',
               block: 'center'
            })
        },100)
    },

    loadCurrentSong: function() {

       heading.textContent = this.currentSong.name;
       cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
       audio.src = this.currentSong.path;

    },

    loadConfig: function() {
       this.isRandom = this.config.isRandom;
       this.isRepeat = this.config.isRepeat;
    },

    prevSong: function () {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }

        this.loadCurrentSong();
    },

    nextSong: function () {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }

        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex;
        this.oldIndexRandom.push(this.currentIndex);
        if(this.oldIndexRandom.length === this.songs.length) {
            this.oldIndexRandom = [];
        }
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(this.oldIndexRandom.includes(newIndex))

        this.currentIndex = newIndex;
        this.loadCurrentSong();

    },

    start : function() {
       //G??n c???u h??nh t??? config v??o ???ng d???ng
       this.loadConfig();

       //?????nh ngh??a c??c thu???c t??nh cho object
       this.defineProperties()

       //L???ng nghe v?? x??? l?? c??c s??? ki???n
       this.handleEvent();

       //T???i th??ng tin b??i h??t ?????u ti??n v??o UI khi ch???y ???ng d???ng
       this.loadCurrentSong();

       //Render playlist
       this.render();

       //Hi???n th??? tr???ng th??i ban ?????u c???a button repeat & random
       randomBtn.classList.toggle('active', this.isRandom);
       repeatBtn.classList.toggle('active', this.isRepeat);
    }
}

app.start()
