jquery-enhanced-contains is a simple project, 
which aims to enhance :contains pseudos selector in jQuery to support regular expression

usage:

You can include it directly after jQuery library
<code>
<script type="text/javascript" src="/path/to/jquery-enhanced-contains.js"></script>
</code>

or copy the code to ur page.

examples:
<pre>
1. select simple text:
   $("div:contains('keyword')")
2. select a case insensetive word
   $("div:contains('/\bkeyword\b/i')")
</pre>
   
You might notice that the only difference is you quote the regular expression.
