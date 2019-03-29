One of my earliest Javascript projects, this came about as a response to the constant "lorem ipsum..." I was seeing, and my wish to:
1. have something more unique to fill in my paragraphs with, and
2. learn about Javascript arrays and DOM manipulation.

The program automatically fills in any elements tagged with the ".randomText" class, using the number currently in the element's text as a guide for how much text to fill in.  So for example:

\<p class="randomText">42\</p>

would be filled with 42 random words.  The words are chosen from an array which I made up during slow moments in class, and are biased toward the shorter words from that list.
