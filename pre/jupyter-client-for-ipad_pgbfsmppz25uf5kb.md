# Jupyter client for iPad









Jupyter client for iPad - Alex Staravoitau’s Blog

  
[https://navoshta.com/juno/](https://navoshta.com/juno/)  




        

    


# Jupyter client for iPad

## I have been a huge fan of Jupyter for a while now, and most importantly of the flexibility it is offering: I strongly believe that the fact that you only need a screen and network connection to get access to pretty much unlimited computational resources has enormous potential.


February 10, 2018



That’s why I thought that Jupyter is really missing a proper client iPad application with a native iOS interface, that would let you connect to a remote backend and work with Jupyter on your iPad — and finally, after months of making and beta testing my app **Juno Connect** has made it to the AppStore!

**Juno Connect** is a Jupyter Notebook client for iPad, which allows you to connect to an arbitrary remote Jupyter Notebook server, and do pretty much everything you do in desktop Jupyter on your iPad. It supports hardware keyboard, code completion driven by your server’s kernel and has a beautiful touch friendly interface, that feels much more natural than trying to access Jupyter through your iPad’s Safari browser. Actually, some reviews suggest it’s easier to work with Jupyter in **Juno Connect** rather than on desktop! 😉

# Jupyter

I did cover Jupyter in my posts already, it’s an [interactive cloud computing environment](https://jupyter.org), where you can combine code execution, Markdown, LaTeX, plots and rich media. It supports over 40 programming languages (including Python, R, Julia and Scala) and most big data and machine learning tools.

Now, the most beautiful part is that code execution is separated from the development environment, which means that whenever you hit “Run” the hardware that actually executes your code and delivers the output can be anywhere where it can be reachable with a networking interface. Essentially, this means that with Juno Connect you can use your iPad to run code on a superpower computing cluster somewhere on another continent, and still receive output and feedback (including code completion suggestions!) in realtime. How awesome is that?

![image-center](https://navoshta.com/images/posts/juno/screenshot_h_01@2x.png)

I did realise, however, that Jupyter may not be the most user-friendly tool to work with, so I tried to make sure that Juno Connect provides the easiest entry point to using Jupyter with two things: backend integrations and bundled introductory notebooks.

# Backends

Jupyter can sometimes be tricky to setup for remote access. There are plenty of tutorials out there (including [mine](https://juno.sh/ssl-self-signed-cert/) about configuring SSL), but some of them require additional knowledge of networking, command line interfaces and Unix systems. Luckily, there are cloud computing services that eliminate this by providing you a remote Jupyter Notebook environment out of the box, such as [Azure Notebooks](https://notebooks.azure.com) and [CoCalc](https://cocalc.com/). Both have free tiers, although CoCalc also offers paid plans with less restricted access and better hardware.

What you get is a virtual server running Jupyter Notebook that you can access from anywhere in browser — or in Juno Connect as well! You can simply log in with your Microsoft or CoCalc account and access all your projects/libraries, and work with all your notebooks using Juno’s interface. It’s easier to think of it as a special preconfigured server that simply provides a computational backend for Juno Connect.

![image-center](https://navoshta.com/images/posts/juno/screenshot_h_02@2x.png)

# Bundled Notebooks

Even setting up an account with cloud computing service and trying to understand how Jupyter works can be a significant time investment for users not familiar with it. That’s why I have included a set of introductory notebooks that are available and runnable as soon as you download the app. They have plenty of sample code snippets and generated output (including stunning retina graphics), showing some of the amazing things you can do with Jupyter. Those notebooks are launched on temporary servers individually for each user, so any changes you make in these introductory notebooks will only appear for you, and will only persist until your server is restarted due to inactivity.

Under the hood Juno Connect uses [Binder](https://mybinder.org) to launch these notebooks, Binder is a service that turns any GitHub repo into a collection of interactive notebooks by launching a temporary server for it. It works amazingly well, and I am planning to introduce a better integration with it in Juno Connect, essentially allowing users to launch any GitHub repo as a server right in the app.

![image-center](https://navoshta.com/images/posts/juno/screenshot_h_06@2x.png)

# Interface

I have spent quite some time trying to make the user interface touch- and iPad-friendly. I believe users have certain expectations in terms of UI when working with an iPad app, and writing code is something that hasn’t been tackled too often in other apps up until this point. So this has been quite a challenge, but I’m pretty happy with how it turned out eventually. It did take a couple of iterations (and a lot of feedback), but at least when it comes to notebook editing, the experience is much better now! What in my opinion makes Juno’s interface stand out is how it managed to declutter navigation panel using context actions and menus.




       [![image](https://navoshta.com/images/posts/juno/screenshot_v_01.png)] (//navoshta.com/images/posts/juno/screenshot_v_01.png)

       [![image](https://navoshta.com/images/posts/juno/screenshot_v_02.png)] (//navoshta.com/images/posts/juno/screenshot_v_02.png)

       [![image](https://navoshta.com/images/posts/juno/screenshot_v_05.png)] (//navoshta.com/images/posts/juno/screenshot_v_05.png)

       [![image](https://navoshta.com/images/posts/juno/screenshot_v_06.png)] (//navoshta.com/images/posts/juno/screenshot_v_06.png)

       [![image](https://navoshta.com/images/posts/juno/screenshot_v_08.png)] (//navoshta.com/images/posts/juno/screenshot_v_08.png)

       [![image](https://navoshta.com/images/posts/juno/screenshot_v_09.png)] (//navoshta.com/images/posts/juno/screenshot_v_09.png)




I would like to take this opportunity to thank all beta testers (more than 1200 of them!) who helped testing it and shared their feedback. Thank you once again, and I hope you will enjoy all the new things planned for **Juno Connect** in the coming year! Stay tuned. 😉

[![image](https://navoshta.com/images/posts/juno/download_black.svg)](https://itunes.apple.com/app/juno-jupyter-notebook-client/id1315744137)

      


  





[𝗗𝗮𝘃𝗶𝗱 𝗕𝗹𝘂𝗲](https://davidblue.wtf/db.vcf)




