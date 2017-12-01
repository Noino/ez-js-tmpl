# ez-js-tmpl
Super simplistic javascript template engine

Prerequisite: jquery

Usage:

Template strings are embedded in to the html of the page.
They are wrapped in an element, really any will do.
The id of the wrapping element becomes the name of the template string
the first html comment should contain the actual template string.
```
<div id="output"></div>
<div id="hello" class=".tmpl">
<!-- Hello {w} -->
</div>
```


Then simply initiate and call from js
```
var Template = new EzJStmpl();
$('#output').html( Template('hello', {w:'World'}) );
```
