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

  
You may want to prevent others from inspecting your website, view source codes, or confidential functions to secure your website or prevent others from duplication your website. And it matters a lot when you spend a lot of time and hard work.  
So, in this article, we won’t disable the right click but also all those shortcuts that allow a person to inspect your website.  
**Disclaimer:** Inspect element will only be disabled on those pages/posts where the codes are present. That’s why we  **recommend**  you to implement the codes inside your header or somewhere that appears on all pages/posts. Try to avoid using the codes inside your Footer because codes in footers will load after all other contents are loaded, and until the load of the codes, the inspect element won’t be disabled.  
So, let’s jump inside!



Now follow the next step.

### Step 2 – Disabling Shortcut key combination that allows inspecting elements



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
