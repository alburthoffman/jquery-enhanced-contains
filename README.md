jquery-enhanced-contains is a simple project, 
which aims to enhance :contains pseudos selector in jQuery to support regular expression

usage:<br/>

You can include it directly after jQuery library<br/>
<code>
&lt;script type="text/javascript" src="/path/to/jquery-enhanced-contains.js"&gt;&lt;/script&gt;
</code>

or copy the code to ur page.

examples:<br/>
1. select simple text:<br/>
   <pre>$("div:contains('keyword')")</pre><br/>
1. select a case insensetive word<br/>
   <pre>$("div:contains('/\bkeyword\b/i')")</pre>
   
You might notice that the only difference is you quote the regular expression.
