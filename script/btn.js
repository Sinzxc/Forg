const mainBtn=document.querySelector("#main-btn");
const scorePlace=document.querySelector("#score");
const LS=localStorage;
score=0;
mainBtn.addEventListener('click', () => {
    console.log("тЫК");
   score++;
   scorePlace.innerHTML=score;
   LS.setItem("Score",score);
});

if(LS.getItem("Score")){
    score=LS.getItem("Score");
    scorePlace.innerHTML=score;
}
