---
layout: post
title:  "Taming the Data Beast"
date:   2015-12-17 16:35:34 -0600
categories: jekyll update
blog: true
description: I was recently asked to parse a large amount of data into a MongoDB Database. And By large I mean 5GB, which is about 4950MB too large to open without crashing excel...
---

I was recently asked to parse a large amount of data into a MongoDB Database. And By large I mean 5GB, which is about 4950MB too large to open without crashing excel. So whoa, quite a challenge, how do I get this humongous CSV file (comma, seperated, values) into Mongo? first step: I wanted to get familiar with the dataset. Here's a really helpful command:

{% highlight javascript %}
split -l 200 example.csv
{% endhighlight %}

Where example.csv is the file to be split and 200 is the number of lines that one file will contain. Here's another:

{% highlight javascript %}
wc -l example.csv
{% endhighlight %}

This command counts the number of lines per file. For example, my 5GB file contained almost 5,000,000 lines when I ran wc -l on it!

Using the split command, I split the giant file, which I named "bigfile.csv" out of fear and admiration of its bigness.

After running:
{% highlight javascript %}
split -l 47000 example.csv
{% endhighlight %}

I got 100 files that I could open in excel to check the data out. One at a time of course. Each file was approximately 48MB, don't exactly know how that math checks out...but...I opened the file to check for coulumns I wanted to chop, and guess what? There's a command line algorithm:

{% highlight javascript %}
cut -d , -f 2,4,5,6 example.csv > cutcolumns.csv
{% endhighlight %}

Where -d tells the cut command that the lines are seperated by commas hence (CSV - comma, seperated, values)

In my file of medical data I wanted only the addresses and credentials of healthcare providers returned with the goal of getting the location of registered US MD's.

I applied the command on the "bigfile.csv" and saved every address to a seperate file on the other side of the carrot so I had one long list of addresses and credentials.

Still to big to open in excel, so I ran:

{% highlight javascript %}
ls -lh
{% endhighlight %}

which gave me the size of the file, which was about 200MB...so I ran split again to chop that into 4 smaller files.

To end this story: After installing a node package called "csvtojson" I ran it through each of my files with:

{% highlight javascript %}
csvtojson [parse]  ~/desktop/medical_data_headers/location_files/xad_reformated.csv > converted.json
{% endhighlight %}

I ran that on all four files and then....last chapter here, ran mongoimport on all 4 converted json files like so:

{% highlight javascript %}
mongoimport -h ds033145.mongolab.com:33145 -d medical_data -c medical_data -u medical_data -p medical_data --file converted2.json --jsonArray
{% endhighlight %}

And now I have my beautiful JSON data in MongoDB ready to use and abuse. No backend server code in python or js minus the converter package. Power from the bash shell!