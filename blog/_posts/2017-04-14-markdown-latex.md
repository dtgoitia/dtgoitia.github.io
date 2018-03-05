---
layout: post
title: How to write math in atom
date: 2017-04-14 12:25
categories: [productivity]
tags: [atom, how to, latex, markdown, performance]
feature-img: assets/img/posts/2017-04-14 - markdown-latex
---
I find quite often I want to write few mathematical expressions, but diving into LaTeX might sound a bit overwhelming. As we say in Spanish, it's like _hunting flies with cannons_...

I describe below an open source solution which I believe will be really helpful for you.



## Installation

You will need to

1. Install the latest _atom_ version from <a href="https://atom.io/">official website</a>.
2. Open _atom_ and go to _Settings_ (`Ctrl + ,`) > _Install_.
3. Install `markdown-preview-enhanced` package.
4. Disable `markdown-preview` package. This package is installed by default after installing _atom_.



## How to use it

### Render in real time

The point of using this package is the possibility to render **in real time** _TeX_ expressions together with _markdown_. To do so:

1. Go to _Settings_ (`Ctrl + ,`) > _Packages_.
2. Look for `markdown-preview-enhanced` package.
3. Click the button _Settings_.
4. Scroll down and check the box _Live Update_.



## Writing

We are ready to write, we need to enable the _Preview_ pane. Otherwise, you will just see your markdown code, instead of the render.

You can do this in three different ways:
* **Shortcut**: hit `Ctrl + Shift + M`.
* **Command palette**:
  1. Hit `Ctrl + Shift + P` to open the _Command Palette_.
 	2. Type `Markdown Preview Enhanced: Toggle` and hit `ENTER`.
* **Right click menu**: right click over the text of a markdown file and select the option `Toggle markdown-preview-enhanced`.



## Examples

### Inline

**Code**:
```
This is an inline formula. $e^{\pi i - 1} = 0$. Do you like it?
```

**Output**:
> This is an inline formula. $e^{\pi i - 1} = 0$. Do you like it?

### Block

**Code**:
```
$$ a_0 + \dfrac{1}{a_1 + \dfrac{1}{a_2 + \dfrac{1}{a_3 + \dfrac{1}{...}}}} $$
```

**Output**:

> This is a block latex formula, see below:
$$
a_0 + \dfrac{1}{a_1 + \dfrac{1}{a_2 + \dfrac{1}{a_3 + \dfrac{1}{...}}}}
$$



## More stuff

### Math Rendering Option
This option can be found in the package settings.

Change the _Math Rendering Option_ to `MathJax`.

The package sets `KaTeX` by default. However, I found this package didn't support `\dfrac` (and it sucks to use `\frac` for big fractions as they look pretty poor... ¬¬).



### Exporting to PDF

To export your document to a PDF:

1. Right click on the preview pane.
2. Select `Export to Disk`.
3. Select `PDF`.
4. Choose your settings and hit `Export`.



## References

You can check the <a href="https://atom.io/packages/markdown-preview-enhanced">official repository</a> of this package in GitHub for further information. There are much more things this package can do apart from rendering _LaTeX_.