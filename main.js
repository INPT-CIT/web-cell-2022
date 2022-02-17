var counter =0;
function addToNotes() {
    const inp = document.getElementById("noteText");
    const notesList = document.getElementById("notesList");
    if(inp.value=="")   {
        alert("not possible, String is empty");
        return;
    }
    var li_note = `<li id="note${++counter}">${inp.value}    <button class='btn btn-sm btn-danger' onClick="deleteFromNotes(${counter})"> delete</button> </li>`;
    notesList.innerHTML += li_note;
    inp.value=""
}


function deleteFromNotes(id){
    const li_note = document.getElementById("note"+id);
    li_note.remove();



}