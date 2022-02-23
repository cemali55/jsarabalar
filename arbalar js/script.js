document.getElementById("lıstearabalar").addEventListener("change",yer)
let sonuc=document.getElementById("sonucBaslık")
function yer(){
sonuc.classList.remove("sup","mus","tf","mcG","normal")
let arabalar=document.getElementById("lıstearabalar").selectedIndex
if(arabalar==1){
    document.body.style.backgroundColor="orange"
    sonuc.innerHTML="japon tankı"
    sonuc.classList.add("sup")
    document.getElementById("logo").setAttribute("src","supra.jpg")
}
else if(arabalar==2){
    document.body.style.backgroundColor="grey" 
    sonuc.innerHTML="abd tankı misali"  
    sonuc.classList.add("mus") 
    document.getElementById("logo").setAttribute("src","mustang.jpg")
}
else if(arabalar==3){
    document.body.style.backgroundColor="red"
    sonuc.innerHTML="tofask" 
    sonuc.classList.add("tf") 
    document.getElementById("logo").setAttribute("src","tofaş.jpg") 
}
else if(arabalar==4){
    document.body.style.backgroundColor="white " 
    sonuc.innerHTML="asıl tank"
    sonuc.classList.add("mcG")
    document.getElementById("logo").setAttribute("src","mercedss.jpg") 
}
} 