---
layout: post
title: "AutoLISP: script #1"
date: 2016-12-23 23:00
categories: [productivity]
tags: [AutoCAD, AutoLISP, performance, script]
feature-img: assets/img/posts/
---
AutoLISP has become an essential tool in my job. Small scripts like the one I want to share with you now make me the life easier and help to ensure the things are done right (and way much faster). These scripts can also be used as many times as you need, so is worth it to invest some more time in them.

**Case**: I had to process hundreds of <del>cheeky</del> polylines which were supposed to be closed, but they weren't. Instead, the first and the last vertexes of every polyline had the same coordinates.

In order not have duplicated vertexes, I needed to remove manually the first (or last) vertex and then close the polyline. I was not going to repeat that process manually, **no way**.

**Solution**:

https://gist.github.com/dtgoitia/09015eda906cc376794c125300030561

Enjoy!