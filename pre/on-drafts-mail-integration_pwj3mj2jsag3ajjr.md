# On Drafts' Mail Integration







Updated `09082022-093318`  

- [GitHub Issue](https://github.com/extratone/drafts/issues/88)  
- [WTF](https://davidblue.wtf/drafts/359A8D7E-40AA-4B44-A861-1C5EC1C3B957.html)  
- [Local](shareddocuments:///private/var/mobile/Library/Mobile%20Documents/com~apple~CloudDocs/Written/359A8D7E-40AA-4B44-A861-1C5EC1C3B957.md)  
- [Directory Example](https://directory.getdrafts.com/a/1wR)  
- [Documentation](https://docs.getdrafts.com/docs/actions/steps/system#mail)  
- [Template Gist](https://gist.github.com/extratone/8cc2cd8cc7b8e95a80f9e60b5fe71bd4)  
- [Sending Mail with Drafts - Integration Guides - Drafts Community](https://forums.getdrafts.com/t/sending-mail-with-drafts/3597)  
- [Sending Mail with Drafts](drafts://open?uuid=03B85CC3-501F-42DB-AD82-112C9DD713E8)  
- [Spark Mail Example](https://app.sparkmailapp.com/web-share/GFZ2OLZskkVOrDVslliHP_H7lalF_81dS00IvpJv)  
- [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail)  
- [On Drafts and Obsidian](drafts://open?uuid=56EED87E-678E-4248-8E94-31650615C69A)  
- [Imgur Video](https://imgur.com/gallery/INqF20r)  
- [ ] Publishing with email-to-publish urls. ([WordPress](https://wordpress.com/support/post-by-email/))  

---  

![Send2Self Example in Mail](https://user-images.githubusercontent.com/43663476/189065881-56ddbc72-f397-4fe3-be57-e409668427fe.png)  

One of Drafts' most immediately apparent advantages as a *native* iOS/iPadOS/macOS application is readily found in [its integration with Mail](https://docs.getdrafts.com/docs/actions/steps/system#mail). Though I've personally managed to almost escape my twenties having yet to endure an email-heavy job, I still find the practice of sending topical/sacred information to myself to be the upmost reliable and direct means of retrieving it.  

As I've configured it, within Drafts on any of its 3 platforms, all I need do is press `^M` to have the text of the current Draft sent instantly to an iCloud Mail alias I use for such things.   

&lt;video controls&gt;  
&nbsp; &lt;source src="https://user-images.githubusercontent.com/43663476/189148302-688897be-b837-4f94-b5ea-c89972516c5a.MOV"&gt;  
&lt;/video&gt;  

If I were sending to more folks than just myself on a regular basis, I'd definitely make use of Drafts' [Mail Action Wizard](https://tools.getdrafts.com/wizards/mail) to help simplify and solidify the process of creating a dedicated action, which almost certainly *would not* have the `Send in Background` toggle selected, as demonstrated, for the sake of giving myself a preview of outbound messages to... important folks.  

## Format  

The parameters of [the Mail action step](https://docs.getdrafts.com/docs/actions/steps/system#mail) can be filled with any combination of items from [the original Drafts template tags array](https://docs.getdrafts.com/docs/actions/templates/drafts-templates) *or* from the relatively new set of mustache   

&lt;script src="https://gist.github.com/extratone/8cc2cd8cc7b8e95a80f9e60b5fe71bd4.js"&gt;&lt;/script&gt;  

```  
[title]  
`[tags]` -- [latitude]∆[longitude]-`[date|%m%d%Y-%H%M%S]`  
- [[safe_title]]([permalink])  

---  

[body]  
```  

The current version of [my personal Send-to-Self action](https://directory.getdrafts.com/a/1wR) sent [this example result](https://app.sparkmailapp.com/web-share/GFZ2OLZskkVOrDVslliHP_H7lalF_81dS00IvpJv) using the above format.    

If you'd like, you can wrap the [body] tag (or any part of the message, actually) in `%%` and select the `Send as HTML` toggle to have the result rendered as HTML. (See [this example](https://app.sparkmailapp.com/web-share/elWlx8eNRiw1nWICBT5p7eGcTs5XZsFO6-JuM1n1).)  

For more details, see the official [**'Sending Mail with Drafts' Integration Guide**](https://forums.getdrafts.com/t/sending-mail-with-drafts/3597).  

&lt;a href="https://apps.apple.com/us/app/drafts/id1236254471?itsct=apps_box_badge&amp;amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;"&gt;&lt;img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;amp;releaseDate=1524355200&amp;h=4a8f5f772921b2fda80a2fd1f5255752" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"&gt;&lt;/a&gt;
  





[𝗗𝗮𝘃𝗶𝗱 𝗕𝗹𝘂𝗲](https://davidblue.wtf/db.vcf)




