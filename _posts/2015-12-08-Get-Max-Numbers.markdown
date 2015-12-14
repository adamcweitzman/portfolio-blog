---
layout: post
title:  "Get Max Numbers"
date:   2015-12-08 16:35:34 -0600
categories: jekyll update
blog: true
description: Just stumbled across this in my site. Needed to sort pages starting with the maximum number in an array... 
---
Just stumbled across this in my site. Needed to sort pages starting with the maximum number in an array:

{% highlight javascript %}
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);
#=> maxInNumbers prints 122205 and minInNumbers prints -85411
{% endhighlight %}

Pretty nifty!

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
