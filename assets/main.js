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
            name: "Tình Đầu",
            author: ["Tăng Duy Tân"],
            path: "./assets/songs/song33.mp3",
            image: "./assets/img/song33.jpg"
        },
        {
            name: "Muộn Rồi Mà Sao Còn",
            author: ["Sơn Tùng M-TP"],
            path: "./assets/songs/song32.mp3",
            image: "./assets/img/song32.jpg"
        },
        {
            name: "Sài Gòn Hôm Nay Mưa",
            author: ["JSOL, Hoàng Duyên"],
            path: "./assets/songs/song31.mp3",
            image: "./assets/img/song31.jpg"
        },
        {
            name: "Có Chàng Trai Viết Lên Cây",
            author: ["Phan Mạnh Quỳnh"],
            path: "./assets/songs/song30.mp3",
            image: "./assets/img/song30.jpg"
        },
        {
            name: "Bước Qua Mùa Cô Đơn",
            author: ["Vũ"],
            path: "./assets/songs/song29.mp3",
            image: "./assets/img/song29.jpg"
        },
        {
            name: "VÌ MỘT CÂU NÓI",
            author: ["HOÀNG DŨNG, MÀU NƯỚC BAND"],
            path: "./assets/songs/song28.mp3",
            image: "./assets/img/song28.jpg"
        },
        {
            name: "THẰNG ĐIÊN",
            author: ["JUSTATEE x PHƯƠNG LY "],
            path: "./assets/songs/song27.mp3",
            image: "./assets/img/song27.jpg"
        },
        {
            name: "Tôi Đã Quên Thật Rồi",
            author: ["Isaac"],
            path: "./assets/songs/song26.mp3",
            image: "./assets/img/song26.jpg"
        },
        {
            name: "曾經你說",
            author: ["趙乃吉"],
            path: "./assets/songs/song24.mp3",
            image: "./assets/img/song24.jpg"
        },
        {
            name: "飞鸟和蝉",
            author: ["任然 "],
            path: "./assets/songs/song25.mp3",
            image: "./assets/img/song25.jpg"
        },
        {
            name: "SAY GOODBYE",
            author: ["Soobin Hoàng Sơn"],
            path: "./assets/songs/song22.mp3",
            image: "./assets/img/song22.jpg"
        },
        {
            name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
            author: ["Da LAB ft. Tóc Tiên"],
            path: "./assets/songs/song23.mp3",
            image: "./assets/img/song23.jpg"
        },
        {
            name: "Nàng Thơ",
            author: ["Hoàng Dũng"],
            path: "./assets/songs/song1.mp3",
            image: "./assets/img/song1.jpg"
        },
        {
            name: "Nửa Thập Kỷ",
            author: ["Hoàng Dũng"],
            path: "./assets/songs/song2.mp3",
            image: "./assets/img/song2.jpg"
        },
        {
            name: "沦陷",
            author: ["王靖雯不胖"],
            path: "./assets/songs/song3.mp3",
            image: "./assets/img/song3.jpg"
        },
        {
            name: "后继者",
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
            name: "Và Thế Là Hết",
            author: ["Chillies"],
            path: "./assets/songs/song6.mp3",
            image: "./assets/img/song6.jpg"
        },
        {
            name: "Anh Đã Quen Với Cô Đơn",
            author: ["Soobin Hoàng Sơn"],
            path: "./assets/songs/song7.mp3",
            image: "./assets/img/song7.jpg"
        },
        {
            name: "CÓ AI THƯƠNG EM NHƯ ANH (#CATENA)",
            author: ["Tóc Tiên ft. Touliver"],
            path: "./assets/songs/song8.mp3",
            image: "./assets/img/song8.jpg"
        },
        {
            name: "嚣张",
            author: ["En"],
            path: "./assets/songs/song9.mp3",
            image: "./assets/img/song9.jpg"
        },
        {
            name: "藍",
            author: ["石白其"],
            path: "./assets/songs/song10.mp3",
            image: "./assets/img/song10.jpg"
        },
        {
            name: "Em Không Là Duy Nhất",
            author: ["Tóc Tiên"],
            path: "./assets/songs/song11.mp3",
            image: "./assets/img/song11.jpg"
        },
        {
            name: "3 1 0 7",
            author: ["W/n x Duongg x Nâu"],
            path: "./assets/songs/song12.mp3",
            image: "./assets/img/song12.jpg"
        },
        {
            name: "3107-2",
            author: ["DuongG x NÂU x W/N"],
            path: "./assets/songs/song13.mp3",
            image: "./assets/img/song13.jpg"
        },
        {
            name: "Hongkong1",
            author: ["Nguyễn Trọng Tài", "San Ji", "Double X"],
            path: "./assets/songs/song14.mp3",
            image: "./assets/img/song14.jpg"
        },
        {
            name: "3107-3",
            author: ["W/n ft. Nâu, Duongg, Titie"],
            path: "./assets/songs/song15.mp3",
            image: "./assets/img/song15.jpg"
        },
        {
            name: "遗憾也值得",
            author: ["王靖雯不胖"],
            path: "./assets/songs/song16.mp3",
            image: "./assets/img/song16.jpg"
        },
        {
            name: "善变",
            author: ["王靖雯不胖"],
            path: "./assets/songs/song17.mp3",
            image: "./assets/img/song17.jpg"
        },
        {
            name: "SAU NÀY HÃY GẶP LẠI NHAU KHI HOA NỞ",
            author: ["NGUYÊN HÀ"],
            path: "./assets/songs/song18.mp3",
            image: "./assets/img/song18.jpg"
        },
        {
            name: "Như Mùa Tuyết Đầu Tiên (I Will Go To You Like The First Snow)",
            author: ["Văn Mai Hương LIVE"],
            path: "./assets/songs/song19.mp3",
            image: "./assets/img/song19.jpg"
        },
        {
            name: "Có Hẹn Với Thanh Xuân",
            author: ["Monstar"],
            path: "./assets/songs/song20.mp3",
            image: "./assets/img/song20.jpg"
        },
        {
            name: "Vết Mưa",
            author: ["Vũ Cát Tường"],
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


       //Xử lý bật tắt volume
       volumeBtn.onclick = function() {
           barVolume.classList.toggle('volume-on');
       }

       //Xử lý thay đổi chế độ màn hình
       modeBtn.onclick = function() {
           modeBtn.classList.toggle('icon-change');
           player.classList.toggle('player-change');
       }

       //Xử lý điều chỉnh âm thanh
        audio.volume = 1;
        volumeMain.value = audio.volume * 100;

        volumeMain.oninput = function() {
            audio.volume = volumeMain.value / 100;
        }

       //Xử lý CD quay / dừng
       const cdThumbAnimation = cdThumb.animate([
           {transform : 'rotate(360deg)'}
       ], {
           duration : 10000, //10 second
           iterations : Infinity
       })
       cdThumbAnimation.pause();
   
 
       //Xử lý phóng to / thu nhỏ CD
       document.onscroll = function() {
           const scrollTop = window.scrollY || document.documentElement.scrollTop;
           const newBackgroundCdWidth = backgroundCdWidth - scrollTop;
           const newBackgroundCdHeight = backgroundCdHeight - scrollTop;
           const newCdWidth = cdWidth - scrollTop;
        
           //Xử lý scroll cho background CD
           backgroundCD.style.width = newBackgroundCdWidth > 0 ? newBackgroundCdWidth + 'px' : 0;
           backgroundCD.style.height = newBackgroundCdHeight > 0 ? newBackgroundCdHeight + 'px' : 0;
           backgroundCD.style.opacity = newBackgroundCdWidth / backgroundCdWidth;

           cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
           cd.style.opacity = newCdWidth / cdWidth;

       }

       //Xử lý khi click play
       playBtn.onclick = function() {
           if(_this.isPlaying) {
              audio.pause();
           }else {
              audio.play();
           }
           
       }

       //Khi song được play
       audio.onplay = function() {
           _this.isPlaying = true;
           player.classList.add('playing');
           cdThumbAnimation.play();
       }

       //Khi song bị pause
       audio.onpause = function() {
          _this.isPlaying = false;
          player.classList.remove('playing');
          cdThumbAnimation.pause();
       }

       //Khi tiến độ bài hát thay đổi
       audio.ontimeupdate = function() {
           if(audio.duration) {
               const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
               if(_this.isTimeUpdate) {
                 progress.value = progressPercent;
               }
           }
       }

       //Xử lý khi tua bài hát
       progress.oninput = function(e) {
           const seekTime = audio.duration / 100 * e.target.value;
           if(_this.isTimeUpdate) {
              audio.currentTime = seekTime;
           }
       }

       //fix lỗi khi tua bài hát
       const isTouch = 'touchstart' || 'mousedown';
       progress.addEventListener(isTouch, function() {
          !(_this.isTimeUpdate);
       })

       //Khi next bài hát
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

       //Khi prev bài hát
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

       //Khi random bài hát
       randomBtn.onclick = function(e) {
           _this.isRandom = !_this.isRandom;
           _this.setConfig('isRandom', _this.isRandom)
           this.classList.toggle('active', _this.isRandom);
       }

       //Khi repeat bài hát
       repeatBtn.onclick = function() {
           _this.isRepeat = !_this.isRepeat;
           _this.setConfig('isRepeat', _this.isRepeat)
           this.classList.toggle('active', _this.isRepeat);
       } 

       //Xử lý next bài hát khi audio ended
       audio.onended = function () {
           if(_this.isRepeat) {
               audio.play();
           }else {
              nextBtn.click();
           }
           
       }
       
       //Lắng nghe hành vi click vào playlist
       playList.onclick = function(e) {
          const clickSong = e.target.closest('.song:not(.active)');
          const clickOption = e.target.closest('.option');
          if(clickSong || !clickOption) {
             //Xử lý khi click vào bài hát
             if(clickSong) {
                _this.currentIndex = Number(clickSong.dataset.index)
                _this.loadCurrentSong();
                _this.render();
                audio.play();
             }

             //Xử lý khi click vào option
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
       //Gán cấu hình từ config vào ứng dụng
       this.loadConfig();

       //Định nghĩa các thuộc tính cho object
       this.defineProperties()

       //Lắng nghe và xử lý các sự kiện
       this.handleEvent();

       //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
       this.loadCurrentSong();

       //Render playlist
       this.render();

       //Hiển thị trạng thái ban đầu của button repeat & random
       randomBtn.classList.toggle('active', this.isRandom);
       repeatBtn.classList.toggle('active', this.isRepeat);
    }
}

app.start()
