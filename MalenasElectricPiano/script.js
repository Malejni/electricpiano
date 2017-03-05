
$(document).ready( function() {
    
    // Controls the button for the c note
    var cNote = document.getElementById('cAudio');
    
        $('#c').mouseover(function(){
            cNote.currentTime = 0;
            cNote.play();
    });
    
    // Controls the button for the d note
    var dNote = document.getElementById('dAudio');
    
        $('#d').mouseover(function(){
            dNote.currentTime = 0;
            dNote.play();
    });
    
    // Controls the button for the e note
    var eNote = document.getElementById('eAudio');
    
        $('#e').mouseover(function(){
            eNote.currentTime = 0;
            eNote.play();
    });
 
    // Controls the button for the f note
    var fNote = document.getElementById('fAudio');
    
        $('#f').mouseover(function(){
            fNote.currentTime = 0;
            fNote.play();
    });
    
    // Controls the button for the g note
    var gNote = document.getElementById('gAudio');
    
        $('#g').mouseover(function(){
            gNote.currentTime = 0;
            gNote.play();
    });
    
    // Controls the button for the a note
    var aNote = document.getElementById('aAudio');
    
        $('#a').mouseover(function(){
            aNote.currentTime = 0;
            aNote.play();
    });
    
    // Controls the button for the b note
    var bNote = document.getElementById('bAudio');
    
        $('#b').mouseover(function(){
            bNote.currentTime = 0;
            bNote.play();
    });
    
});