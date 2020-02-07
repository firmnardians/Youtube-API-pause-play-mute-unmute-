
  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {

    player = new YT.Player('app', {
        height: '360',
        width: '640',
        videoId: 'fa5p19APgd8',
    events:{
        'onReady': onPlayerReady
    },
    playerVars: {
        autoplay: 0,        // Auto-play the video on load
        controls: 1,        // Show pause/play buttons in player
        showinfo: 1,        // Hide the video title
        modestbranding: 1,  // Hide the Youtube Logo
        loop: 1,            // Run the video in a loop
        fs: 0,              // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3,  // Hide the Video Annotations
        autohide: 0,         // Hide video controls when playing
        mute: 0,
      },
    });

  }

  function onPlayerReady(event){
      let playBtn = document.getElementById('play-button');
      playBtn.addEventListener('click', function(){
          player.playVideo();
      })
      let stopBtn = document.getElementById('stop-button');
      stopBtn.addEventListener('click', function(){
          player.pauseVideo();
      })
      let muteBtn = document.getElementById('mute-button');
      muteBtn.addEventListener('click', function(){
        player.mute();
      })
      let unmuteBtn = document.getElementById('unmute-button');
      unmuteBtn.addEventListener('click', function(){
        player.unMute();
      })
  }