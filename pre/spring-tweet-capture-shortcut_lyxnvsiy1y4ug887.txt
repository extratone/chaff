# Spring Tweet Capture Shortcut

Updated `11072022-144814`

- [GitHub Issue](https://github.com/extratone/i/issues/284)
- [**RoutineHub Page**](https://routinehub.co/shortcut/13334)
- [Example Output Gist](https://gist.github.com/extratone/28a4a0060886436420ece95ac8670972)
- [Shared Example Apple Note](https://www.icloud.com/notes/06d0m6YPYgqMC2z4nanNguUuQ)
- [David Blue’s RoutineHub Library](drafts://open?uuid=CA94DF33-CAB9-40A0-836E-806225D5B600)
- [iCloud Share Link](https://www.icloud.com/shortcuts/09224e868bd249b69a887b96eed1d78a)
- [Working Copy](working-copy://open?repo=i&path=shortcuts&mode=content)
- [Source Repo File](https://github.com/extratone/i/blob/main/shortcuts/SpringTweetCapture.shortcut)
- [Ulysses](ulysses://x-callback-url/open?id=_gZJh0DqIf7_futTS9wUZg)
- [Chaff](https://chaff.writeas.com/spring-tweet-capture-shortcut/edit)
- [WTF](https://davidblue.wtf/drafts/98C2D48D-1E17-4D85-97E4-9348692EE603.html)
- [WTF Shortlink](https://davidblue.wtf/springtweetcapture) - `https://davidblue.wtf/springtweetcapture`
- [Things](things:///show?id=GeWhBEqtXZZ7KGQ6HxYxU5)

---

## Social 

- [Handset Magazine](https://handsetmag.wordpress.com/2022/11/06/spring-tweet-capture-siri-shortcut/)

---

## Detailed/customizable Tweet data retrieval/archiving with Spring for Twitter's actions.

As configured at install, this shortcut saves all available data from [Spring for Twitter](https://apps.apple.com/us/app/spring-for-twitter/id1508706541)'s `Get Tweet` action in three separate locations:

[![Custom Dictionary Default Layout](https://user-images.githubusercontent.com/43663476/200196589-1b56e4b3-2936-4635-a311-ffb2f97c372f.png)](https://davidblue.wtf/springtweetcapture/source)

1. The formatted (HTML-ish) content of the Tweet + its author's @, time of publication, and public URL are appended to a file at the root of one's iCloud Drive folder called, simply, `tweets.txt`.
2. A custom dictionary of all available parameters (formatted in the order you see in the screenshot embedded above) is stored in [Data Jar](https://apps.apple.com/us/app/data-jar/id1453273600) by **Tweet ID** at a key path chosen at installation.
3. Formatted text along with the plain JSON text of the dictionary is stored in [a new note](https://www.icloud.com/notes/06d0m6YPYgqMC2z4nanNguUuQ) in Apple Notes, in a folder specified at install. (You can leave that selection blank to store new notes in your default Apple Notes folder.)


[![Spring Tweet Capture Shortcut Results](https://user-images.githubusercontent.com/43663476/200196105-75efc1dc-3a80-4981-b784-e4821acf2d72.png)](https://www.icloud.com/notes/06d0m6YPYgqMC2z4nanNguUuQ)

See example results in the form of [**this shared Apple Note**](https://www.icloud.com/notes/06d0m6YPYgqMC2z4nanNguUuQ) and/or [**this GitHub Gist**](https://gist.github.com/extratone/28a4a0060886436420ece95ac8670972).

<script src="https://gist.github.com/extratone/28a4a0060886436420ece95ac8670972.js"></script>