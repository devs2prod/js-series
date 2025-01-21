# Datatype
    Datatype determines the type of value that can be stored in a reference
    * JS references are implicitly typed their datatype will be determined according to value.
    * JavaScript has Dynamic Types

## Primitive Datatype: Memory Allocation in Stack
    → it is stored in the memory stack, by LIFO and created at compile time.
    → they fixed value, and the range of value changes according to the standardization.
    → if it is assigned to another value, then the same value will be stored.

### Number:
    - used to specify signed or unsigned integers. double (64-bit floating point)
    - All JavaScript numbers are stored as decimal numbers (floating point).
    - it can be with or without a decimal point and sometimes, an exponent number.
    - Floating point arithmetic is not always 100% accurate

    💡 NAN (Not A Number) 
        NaN is a JavaScript-reserved word indicating that a number is not a legal number. 
        NaN is a number; typeof NaN returns the number
    
    💡Infinity 
        Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
        Infinity is a number; typeof Infinity returns number.
        - Hexadecimal - starting with 0x or 0X 
        - Octal Number - starting with 0o or 0O 
        - Binary Number - starting with 0b or 0B
    
    ○ parseInt("Number", baseOfNumber) - to convert string(starting with number type value) to integer number. 
    ○ parseFloat() - to convert string(starting with number type value) to Floating number.
    ○ isFinite() - Determines whether the passed value is a finite number. 
    ○ isInteger() - Determines whether the passed value is an integer. 
    ○ isNaN() - Determines whether the passed value is NaN. More robust version of the original global isNaN(). 
    ○ isSafeInteger() - Determines whether the provided value is a number that is a safe integer.  
    ○ toString() - convert decimal number to numbers with base 2 to base 36. (Ex: let myNumber = 32; myNumber.toString(32) )
    
### BigInt
    → It is used to store big integer values.
    💡 Create BigInt, Append n to the end of an integer, or call BigInt()
    → typeof a BigInt is "bigint".
    → All operators can be used on BigInt, except >>> (Unsigned Right Shift)
    → BigInt can not have decimals.
    → BigInt can also be written in hexadecimal, octal, or binary notation

### String:
    → sequence of characters enclosed with single quotes ('), double quotes ("), or backticks (```).
    → JavaScript counts positions from zero.
    → single quotes must be used for substrings.
    → JavaScript strings can have numeric content.
    → Strings are immutable; Strings cannot be changed, only replaced.
    → to extract characters from a string
        ○ charAt(*index*)
        ○ charCodeAt(*index*)
        ○ stringName[index]

| Escape sequence	| Prints  |
|-------------------|---------|
| \'                |	'  |
| \"                |	"  |
| \\                |	\  |
| \b                |	Backspace  |
| \f                |	Form Feed  |
| \n                |	New Line  |
| \r                |	Carriage Return  |
| \t                |	Horizontal Tabulator  |
| \v                |	Vertical Tabulator  |

    If a JavaScript statement does not fit on one line, the best place to break it is after an \\ operator. A safer way to break up a string, is to use string addition (+) You cannot break up a code line with a backslash.
    
    💡 Strings declared using backticks are a special kind of string called a template literal.

### Boolean:
    → Booleans are often used in conditional testing.
    → it stores either true or false.
    → Everything is true
    → Empty value is false ( 0, -0, “ ”, undefined, null, false, NaN )
    → syntax using new Keyword

### null:
    → it specifies that a reference is not created dynamically.
    → keyword null is returned when a reference is not created, which is used to check true or false.
    if a value isn’t specified in any reference then it’s verified by using an empty “ ”. if a reference is not defined you can verify by using null. it is not same as NULL or Null

### undefined
    → An empty value has nothing to do with undefined.
    → if the value isn’t defined to any reference then it will return undefined.
    → it is used to verify whether a value is defined for any reference.

### Symbol
    → A data type whose instances are unique and immutable.


## Non-primitive Datatype: Memory Allocation in Heap
    → it stores in heap memory at different locations, due to which they do not have any fixed value.
    → the value varies according to browser memory.

### Array:
    ⇒ it reduces overhead and complexity, by storing values in sequential order. ⇒ JavaScript Array indexes are 0-based: they start at 0.
    ⇒ JS array size can be changed dynamically, they are defined by using the “[ ]” or Array() constructor.
        Syntax: const *array_name* = [*item1*, *item2*, ...];//direct Declaration const *array_name =* new *Array(item1, item2, ...);*//using New Keyword const *array_name = Array(item1, item2, ...);*//without using New Keyword
    => by storing multiple values under the reference of a single name.
    • Const Array: Declaring array with const keyword. 
        → Reassigning array is not allowed, but elements can be reassigned. 
        → it must be initialized when it is declared. 
        → An array declared in a block is not the same as an array declared outside the block
    • Sparse Array: Array with empty slots but not equivalent to slots with undefined. 
        → In some operations, empty slots behave as if they are filled with undefined. But in others, thay are skipped.
    • Multidimensional Array: Array containing another array as a element. 
    ⇒ We can use the array to store the property like object.

    💡 const arr = Array(42); //creates an array with no elements and arr.length set to 42.
            arr["length"] == arr.length 
    => If you supply a non-integer value to the array operator, a property will be created in the object representing the array, instead of an array element.

### Object:
    Refer to the object Day.

### Regular Expression:
    syntax: /*pattern*/*modifier(s)*;
    → it is used to validate the format of input value by using the match(reg) function, which returns Boolean true if the value matches the regular expression.
    → it is a group of metacharacters and quantifiers enclosed in “/ /”.

|  Meta Character |	Description  |
|-----------------|--------------|
|  [ A-Z ]        |	only uppercase character  |
|  [ a-z ]	| only Lowercase character  |
|  [ a-z A-Z ] or [ a-z ] | both character  |
|  [ 0-9 ] |	only numeric  |
|  [ 0-9 A-Z a-z ] |	alphanumeric  |
|  [ m, a, y ] |	only fixed character  |
|  [^ m, a, y ]	|except for this fixed character.  |
|  ( x	y )  |
|  \+ \- \. \@ \# \& | any individual special character  |
|  [ !@#$%^&* ] |	all specified special character  |
|  \^ |	starts with  |
|  $ |	ends with  |
|  ( ?=*[ A-Z ])	| at least 1 uppercase character  |
|  ( ?=*[ 0-9 ])	| at least 1 numeric character  |
|  ( ?=*[ !@#$% ])	| at least 1 special character  |
|  x(?=y)	| Matches "x" only if "x" is followed by "y".  |
|  x(?!y)	| Matches "x" only if "x" is not followed by "y".  |
|  (?<=y)x	| Matches "x" only if "x" is preceded by "y”  |
|  (?<!y)x	| Matches "x" only if "x" is not preceded by "y”  |
|  (?<name>pattern)	| named capturing group  |
|  ( )	| specific name capturing group  |

| Modifier |	Description |
|----------|----------------|code
| i |	Perform case-insensitive matching |
| g |	Perform a global match (find all matches rather than stopping after the first match) |
| m |	Perform multiline matching |
