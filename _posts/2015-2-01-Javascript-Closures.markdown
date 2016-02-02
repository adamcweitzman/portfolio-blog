---
layout: post
title:  "Javascript Closures: A Rambling"
date:   2015-02-01 16:35:34 -0600
categories: jekyll update
blog: true
position: 1
description: I get on my high horse and try and explain Javascript Closures, a vexing topic and a frequent question of interviewers.
---
In all my interviews for front-end programming work I've been asked to define a Javascript Closure...it's an easy question to ask but a difficult one to answer. And I've given all kinds of muddled responses that sound like lines from a Dr. Seuss Book. In response I've heard equally confusing answers from interviewers. So does anyone know what the true nature of a closure is?

As Einstein says "If you can't explain it simply, you don't understand it well enough." 

So here is my attempt to explain something to myself...simply.

Let's start with a nested function:

{% highlight javascript %}
var whatAmI = "I'm a GLOBAL VARIABLE, duh";
function closure () {
	var whatamI = "Obviously I'm a LOCAL VARIABLE adam you stupid monkey";

	function inner() {
		return whatAmI;
	}

	return inner();
}

var result = closure();
console.log(result);
{% endhighlight %}


Here's the question...which version of the variable whatAmI will JS return? If you plug it into a repl, you get:

{% highlight bash %}
"Obviously I'm a LOCAL VARIABLE adam you stupid monkey"
{% endhighlight %}

Why? Because Javascript always finds the variable from the closest enclosing funtion. It's a rule. So when we run closure() the local variable gets returned because the function inner() is being called in scope. Ok so here's where things go to crazy town, take this code snippet for example:
{% highlight javascript %}
var whatAmI = "I'm a GLOBAL VARIABLE, duh";
function closure () {
	var whatamI = "Obviously I'm a LOCAL VARIABLE adam you stupid monkey";

	function inner() {
		return whatAmI;
	}

	return inner;
}

var innerFunction = closure();
var result = innerfunction();
console.log(result);
{% endhighlight %}

We only changed one thing. Now instead of returning the value of the inner function. We return a reference to the inner function, it hasn't been called yet. Lets walk through what's happening in lexical scope as if we were a browser.

<ol>
<li>I see the variable whatAmI is set as "I'm a GLOBAL VARIABLE, duh"</li>
<li>I'm going to skip over the closure function, I don't read that yet. I see the variable innerFunction contains the value of the closure function. I'm going to go find out what that is.</li>
<li>Ok cool, I can see that the value of the closure function is stored in innerFunction, what's the value of closure()? O i can see it's: {% highlight javascript %}
function inner() {
	return whatAmI;
};
{% endhighlight %}</li>
<li>Ok now I'm reading the result variable as the value of the executed inner function</li>
<li>Now I console.log(result){% highlight javascript %}
"Obviously I'm a LOCAL VARIABLE adam you stupid monkey"
{% endhighlight %}
</li>
</ol>

What! How can this be! If we called the function in the global scope, wouldn't it be referencing the global variabe!?!? No it's not, beceause there is another rule of javascript that seems to be unspoken, here it is: it's the holy grail of closures!

<h1>When a function is defined in javascript it comes with a referencing function environment</h1>

So wherever that function is defined, it shares all the variables with the function it is defined in. So...ya? 


