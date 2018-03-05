---
layout: post
title:  "AutoLISP: scripting in AutoCAD"
date: 2017-04-18 13:00
categories: [brainstorming]
tags: [AutoCAD, AutoLISP, how to, python, script]
feature-img: assets/img/posts/2017-04-15-acad-python.png
---
### Start-point

This has been achieved using AutoCAD 2017 and Python 3.5.


### Python

First, I wrote a python script which will throw a pop up with a dumb message.

```python
import ctypes
msg = "it's alive!"
ctypes.windll.user32.MessageBoxW(0, msg, "TEST POP UP", 1)
```

The aim of this script is to check if AutoCAD is really executing the script. Thus, I need something that shows me it’s working. If I wouldn’t add this pop up (which waits for my input) the python shell would close so fast I would not feel any difference.

Save the script. I saved my file at C:/alive.py.

After testing the python script from Windows shell (cmd.exe) to ensure it does what I aimed, I jumped to AutoCAD.

### AutoCAD

First I tried to open the python shell from AutoCAD. This is possible using the command start and typing the path of python shell executable `C:\Users\<yourUsername>\AppData\Local\Programs\Python\Python35-32\python.exe`. Hit ENTER and voilà! You are inside a python shell.

And finally I executed the python script from AutoCAD using the following AutoLISP lines:

```lisp
(setq
  python "C:/Users/<yourUsername>/AppData/Local/Programs/Python/Python35-32/python.exe"
  pyscript "C:/alive.py"
)
(startapp python pyscript)
```
and once more… bingo! I triggered my first python script from AutoCAD!


### Why?

This little test has its origin in my tiredness. I’m bored of being let down constantly by `(startapp)` AutoLISP function. This function is supposed to trigger an external app accepting some arguments, such us open windows explorer in a specific directory, etc. The problem is that I am not able to make it work as I want. So I thought, “hey, python might be able to accomplish this dumb task with its eyes closed, let’s give it a try, if this works it will open me a whole new world of toys!”. And it has done it, indeed.

Happy coding!