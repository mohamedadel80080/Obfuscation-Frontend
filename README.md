# Disable ‘Inspect Element’ And ‘View Page Source’
### Step 1 – Disabling Mouse Right Click On Website

        document.addEventListener('contextmenu', function(e){
	    e.preventDefault();
	    });
you can show an alert

   

     document.addEventListener('contextmenu', function(e){
    alert("Sorry, right click is disabled to prevent leakage of 			confidential functions");
    e.preventDefault();
    });

  ### Step 2 – Disabling Shortcut key combination that allows inspecting elements


There are few shortcuts available to use the ‘**inspect element**‘ or ‘**view page-source**‘ option. Such As:

-   “Ctrl+Shift+I” for ‘**Inspect Element**‘
-   “Ctrl+Shift+J” for ‘**Inspect Element**‘ Console panel
-   “Ctrl+Shift+C” for ‘**Inspect Element**‘ Elements panel
-   “Ctrl+S” for Saving Website as  **HTML file**
-   “Ctrl+U” for ‘**View Source Code**‘




code

    document.onkeydown = function(e) {
      if(event.keyCode == 123) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
      }
        if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
         return false;
      }

    }

mord tools
https://closure-compiler.appspot.com/home
