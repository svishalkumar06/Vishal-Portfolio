const Typewriter = function(txtElements, words, wait = 3000){
    this.txtElements= txtElements;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseFloat(wait,10);
    this.type();
    this.isDelete = false;
}
Typewriter.prototype.type = function(){
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    console.log(this.words[current]);
    if(this.isDelete){
        this.txt = fullTxt.substring(0,this.txt.length - 1);
    }else{
        this.txt = fullTxt.substring(0,this.txt.length + 1);
    }
    this.txtElements.innerHTML = this.txt;

    let typeSpeed=300;
    if(this.isDelete){
        typeSpeed /= 2;
    }
    if(!this.isDelete && this.txt == fullTxt){
        this.isDelete = true;
        typeSpeed = this.wait;
    }else if(this.isDelete && this.txt == ''){
        this.wordIndex++;
        this.isDelete = false;
        typeSpeed == 500; 
    }
    console.log(this.txt);
    
    setTimeout(()=> this.type(),typeSpeed);
}

document.addEventListener('DOMContentLoaded',init);
function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new Typewriter(txtElement, words,wait);


}