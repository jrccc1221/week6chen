btnSaveSig.onclick = function() {
  if(sigDone_signaturePad.isEmpty()) {
    NSB.MsgBox("No signature entered");
    return;
  }

 //Get the image in a string which can be saved.
 var imageStr = sigDone_signaturePad.toDataURL("image/png");

 //display the string in an Image control.
  imgSig.src = imageStr;
};

btnNewSig.onclick = function() {
  sigDone_signaturePad.clear();
};