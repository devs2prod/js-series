# Types of Scripting:

# Inline Scripting: 
JS functions are defined in HTML elements so that they are individual and accessible only to those specified elements.

# Embed Scripting: 
JS functions are defined within the page by `<script>` tag. They are accessible to other elements of the webpage, but not to other webpage. Specify the type and language if you are using `<script>` tag in `<head>` tag and `<body>` tag.

#### 💡 Strict Mode Of JS:
    The “use script"; keyword is used to overcome browser incompatibility. The "use strict"; directive is only recognized at the beginning of a script or a function. 
    
#### Rules of Strict Mode:
        • Using a variable(or object), without declaring it, is not allowed.
        • Deleting a variable (or object) is not allowed
        • Deleting a function is not permitted.
        • Duplicating a parameter name is not allowed
        • Octal numeric literals are not allowed
        • Octal escape characters are not allowed:
        • Writing to a read-only property is not permitted:
        • Writing to a get-only property is not permitted:
        • Deleting an undeletable property is not permitted:
        • The word eval cannot be used as a variable:
        • The word arguments cannot be used as a variable:
        • The with statement is not allowed
        • Using this in strict mode returns undefined

# External Scripting: 
JS functions are defined within the external file (extension is .js). functions are accessible on any webpage.
`<script src="myScript.js"></script>` , you can place it in `<head>` tag or `<body>` tag.


#### 💡 defer vs. async vs. normal parsing script
- defer in `<script>` tag: it is useful if your scripts depend on the DOM being in place
-  async in `<script>` tag: it is useful when the scripts in the page run independently from each other and depend on no other script on the page.

<img src="readm.png" width="50%"/>



---
# Js Comment
    Code after double slashes // (single line comment) or between /* and */ (multi line comment) is treated as a comment.
    can’t nest the block comments.