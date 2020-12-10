function BoutonSuivant(){
    let AfficheDivJaune=document.getElementById("divJaune")
    let AfficheDivBleue=document.getElementById("divBleue")
    let AfficheDivRose=document.getElementById("divRose")
    if(AfficheDivJaune.style.display=='' ||AfficheDivJaune.style.display=="inherit"){

        AfficheDivBleue.style.display="inherit"
        AfficheDivRose.style.display="none"
        AfficheDivJaune.style.display="none"

    }
    else if (AfficheDivBleue.style.display=='inherit'){
        AfficheDivBleue.style.display="none"
        AfficheDivRose.style.display="inherit"
        AfficheDivJaune.style.display="none"
    }
    else {
        AfficheDivBleue.style.display="none"
        AfficheDivRose.style.display="none"
        AfficheDivJaune.style.display="inherit"
    }

}
