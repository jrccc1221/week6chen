chkToDo.onchange=function(){
  NSB.MsgBox('You have finished this task.');
}

dtiToDoDate.onvalueChanged = function(e) {
  NSB.MsgBox("New date for your to do list is "  +  e.args.date);
};

hbrToDo.onclick = function(s) {
  if(typeof(s) == "object") {
    return
    } else {
        switch(s) {
            case "Signature Varification":
                hbrToDo.hide()
                ChangeForm(newControls2)
                break
        }
    }
}