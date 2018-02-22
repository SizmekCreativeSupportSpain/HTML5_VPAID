var PRIMARY_VIDEO_ID = 1;
var DESIGN_MODE_VIDEO_URL = "AdditionalAssets/mainVideo.mp4";
var CLOSE_BTN_ID = "closeBtn";
var SKIP_BTN_ID = "skipBtn";
var audioButton,controlButton,clickButton;
var paused = true;

(function()
{
    EBModulesToLoad = ["Video"];
    var base  = location.protocol === "https:" ? "https://secure-" : "http://";
    var path  = base + "ds.serving-sys.com/BurstingScript/";
    var head  = document.getElementsByTagName("head")[0];
    var files = ["EBLoader", "EBVPAID"];
    var count = 0;

    for (var i=0; i<files.length; i++)
    {
        var script    = document.createElement("script");
        script.src    = path + files[i] + ".js";
        script.onload = onLoaded;
        head.appendChild(script);
    }

    function onLoaded()
    {
        if(++count < files.length)
        {
            return;
        }

        if(document.readyState !== "complete")
        {
            window.addEventListener("load", onLoaded);
            return;
        }

        if(!EB.isInitialized())
        {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, onLoaded);
            return;
        }

        var config =
        {
            primaryVideoId     : window.PRIMARY_VIDEO_ID,
            designModeVideoUrl : window.DESIGN_MODE_VIDEO_URL,
            closeButton        : document.getElementById(window.CLOSE_BTN_ID),
            skipButton         : document.getElementById(window.SKIP_BTN_ID)
        };

        VPAID.configure(config);
        if(initCreative) initCreative();
    }
})();

function initCreative()
{
    initButtons();
    addVideoEvents();
    setAudioImage();
    VPAID.disableAutoClose();

    var rnd = Math.floor(Math.random()*900000) + 100000;
    var img = new Image();
    img.src = 'https://bs.serving-sys.com/Serving/adServer.bs?cn=display&c=19&pli=1074204689&adid=1074740805&ord='+rnd;
}

function initButtons()
{
    controlButton = document.getElementById("controlButton");
    controlButton.addEventListener("click", togglePlayback);

    audioButton = document.getElementById("audioButton");
    audioButton.addEventListener("click", toggleAudio);

    clickButton = document.getElementById("clickButton");
    clickButton.addEventListener("click", onClickThrough);
}

function addVideoEvents()
{
    var events =
    [
        "ended",     "pause",   "play",           "volumechange",
        "abort",     "canplay", "canplaythrough", "durationchange",
        "emptied",   "error",   "loadeddata",     "loadedmetadata",
        "loadstart", "playing", "progress",       "ratechange",
        "seeked",    "stalled", "suspend",        "timeupdate",
        "waiting"
    ];

    for (var i=0; i<events.length; i++)
    {
        var event = events[i];
        VPAID.addEventListener(event, onVideoEvent);
    }
}

function onVideoEvent(event)
{
    switch(event.type)
    {
        case "ended" :
            //EB.automaticEventCounter('videoEnd1');
            setTimeout(function(){
                VPAID.closeAd();
            },1000);
            break;
        case "pause" :
            paused = true;
            controlButton.style.backgroundImage = "url(images/play.png)";
            break;
        case "play" :
            paused = false;
            controlButton.style.backgroundImage = "url(images/pause.png)";
            break;
        case "volumechange":
            setAudioImage();
            break;
    }
}

function toggleAudio()
{
    VPAID.muted = !VPAID.muted;
}

function togglePlayback()
{
    if(paused){
        VPAID.play();
    }else{
        VPAID.pause();
    }
}

function setAudioImage(){
    if(VPAID.muted){
        audioButton.style.backgroundImage = "url(images/audioOff.png)";
    }else{
        audioButton.style.backgroundImage = "url(images/audioOn.png)";
    }
}

function handleControlsButtonClick() {
    if(paused){
        VPAID.play();
    }else{
        VPAID.pause();
    }
}

function onClickThrough(event)
{
    EB.clickthrough();
}

