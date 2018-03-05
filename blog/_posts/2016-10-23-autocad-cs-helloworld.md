---
layout: post
title:  AutoCAD C# 'HelloWorld'
date: 2016-10-23 20:29
categories: [productivity]
tags: [AutoCAD, C#, how to]
feature-img: assets/img/posts/2016-10-22-acad-vs.png
---
Are you a newbie looking for a start point to get started in C# for AutoCAD? Take a look to this post then. As mentioned in <a href="https://davidtorralbablog.wordpress.com/2016/10/22/autocad-net-api-the-next-step-towards-efficiency/">my previous post</a>, I did my first <i>C#</i> written HelloWorld within <i>AutoCAD 2017</i> with <i>Visual Studio 2015</i>. Here what I did:


### STEP 0: prerequisites

For this process I have installed the following:

* AutoCAD 2017
* Visual Studio 2015
* AutoCAD ObjectARX SDK

Now on I will assume you have already downloaded and installed them.


### STEP 1: create a new project

On <i>Start Page</i> tab, select <i>New Project...</i>

<img class="  wp-image-456 aligncenter" src="https://davidtorralbablog.files.wordpress.com/2016/10/2016-10-22-09_27_33-start-page-microsoft-visual-studio1.png" alt="2016-10-22-09_27_33-start-page-microsoft-visual-studio" width="343" height="294" />

Select the template for an <i>AutoCAD</i> <i>C#</i> project at: <i>Installed</i> &gt; <i>Templates</i> &gt;<i> Visual C#</i> &gt;<i> Autodesk</i>

<img class="  wp-image-475 aligncenter" src="https://davidtorralbablog.files.wordpress.com/2016/10/2016-10-22-09_29_57-new-project_edit.png" alt="2016-10-22-09_29_57-new-project_edit" width="647" height="116" />

Note you will have some default values at <i>Name</i> and <i>Solution name</i> fields (bottom of the window). Override the <i>Name</i> field with any name you want to give to this project, any name is valid. <i>Solution name</i> field will fill up automatically too when you write on <i>Name</i> field. Hit <i>OK</i>.

As shown below, we need to tell to <i>Visual Studio</i> where to find <i>AcMgd.dll</i> library and <i>acad.exe</i> executable:
<ul>
	<li><i>AcMgd.dll</i>: it is wherever you have downloaded the <i>ObjectARX SDK</i>.</li>
	<li><i>acad.exe</i>: if you have use default installation directory, it should be at <i>C:\Program Files\Autodesk\AutoCAD 2017</i>.</li>
</ul>
<img class="aligncenter  wp-image-499" src="https://davidtorralbablog.files.wordpress.com/2016/10/2016-10-22-09_38_01-autocad-net-wizard-configurator_edit4.png" alt="2016-10-22-09_38_01-autocad-net-wizard-configurator_edit" width="549" height="604" />

Hit <i>OK</i> to create your project.


### STEP 2: insert our code

At the <i>Solution Explorer</i> tab, find <i>myCommand.cs</i> file and click on it.
