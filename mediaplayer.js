let createAudio=document.createElement("audio");

let tracks=[
{
    url:"../media/[iSongs.info] 02 - Inthandham (1).mp3",
artist:"jhllkjsq'lkxj",
songName:"jwhcjhc",
albumart:"album1"
},


{
    url:"../media/[iSongs.info] 02 - Naa Madhi.mp3",
    artist:"jhllkjsq'lkxj",
    songName:"jwhcjhc",
    albumart:"album2"

},

{
    url:"../media/[iSongs.info] 02 - Krishna Trance.mp3",
    artist:"jhllkjsq'lkxj",
    songName:"jwhcjhc",
    albumart:"album3"
},
{
    url:"../media/[iSongs.info] 01 - Ra Ra Rakkammaa.mp3",
    artist:"jhllkjsq'lkxj",
    songName:"jwhcjhc",
    albumart:"album4"
},
{
    url:"../media/[iSongs.info] 02 - Ra Ra Reddy I Am Ready.mp3",
    artist:"jhllkjsq'lkxj",
    songName:"jwhcjhc",
    albumart:"album4"

},
{
    url:"../media/[iSongs.info] 05 - Aafat (Telugu).mp3",
    artist:"jhllkjsq'lkxj",
    songName:"jwhcjhc",
    albumart:"album4"

},
{
    url:"../media/[iSongs.info] 04 - Megham Karigena.mp3",
    artist:"jhllkjsq'lkxj",
    songName:"jwhcjhc",
    albumart:"album4"

},


];
let a=0;
let  playsong =()=>{
    createAudio.src=`${tracks[a].url}`;
    createAudio.play();
    console.log("playsong")
}
let pausesong=()=>{
createAudio.pause();
console.log("pausesong");
}
let next=()=>{
    a++;
    createAudio.src=`${tracks[a].url}`
playsong();

}

let prev=()=>{
    --a;
    createAudio.src=`${tracks[a].url}`
    playsong();
}