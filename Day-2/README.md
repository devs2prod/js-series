# Output Methods and Properties:
    JS is client-side scripting Lang in which various properties and methods are used to render the output onto the browser.

### window.alert("Message") or alert("Message") 
    it pops the message box in the browser and it will not allow you to perform any other task until you confirm it.
        
### confirm("Message") 
    similar to the alert() function, it returns true and false on confirming the message.
    alert() and confirm() will not allow any markup to format the message.
        
### document.write() 
    print the output on the same page but on a new screen. the output is temporary and it cleaned up when you reload the page.
    Using document.write() after an HTML document is loaded, will delete all existing HTML and there data. Use document.write() for only testing.
        
### console.log() 
    it is an output function used in js to print the output in the browser console for the debugger, press the F12 key.
    
### innerHTML property 
    it can present text, it also allows various formats for the text by using markup or formatting functions.
    
### innerText property 
    similar to innerHTML, but doesn’t allow formatting.
    
### window.print() 
    print the content of the current window.
    JavaScript does not have any print object or print methods, the only exception is that you can call the window.print() method


---

# JS -> Html Element

### By using BOM & DOM hierarchy
In this HTML elements are referred by an array reference method.

### By using the name attribute
JS can refer by using the name Attr, but can’t access the child elements.

### By using the id Attr
referring to the HTML elements using the document.getElementById() function.

### By using the Tag Name
referring the Html Elements using the document.getElementByTagName() function

### By using the Class Name
JS can refer to HTML elements using the document.getElementByClassName() funtion.

### By using the Common Ref Name
JS can refer to Html elements using the document.getElementByName() function.
