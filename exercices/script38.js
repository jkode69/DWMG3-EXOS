function BoutonSuivant(){
    let AfficheDivJaune=document.getElementById("divJaune")
    let AfficheDivBleue=document.getElementById("divBleue")
    let AfficheDivRose=document.getElementById("divRose")
    if(AfficheDivJaune.style.display=='' ||AfficheDivJaune.style.display=="inherit"){

        AfficheDivBleue.classList.display="inherit"
        AfficheDivRose.classList.display="none"
        AfficheDivJaune.classList.display="none"

    }
    else if (AfficheDivBleue.classList.display=='inherit'){
        AfficheDivBleue.classList.display="none"
        AfficheDivRose.classList.display="inherit"
        AfficheDivJaune.classList.display="none"
    }
    else {
        AfficheDivBleue.classList.display="none"
        AfficheDivRose.classList.display="none"
        AfficheDivJaune.classList.display="inherit"
    }

}
