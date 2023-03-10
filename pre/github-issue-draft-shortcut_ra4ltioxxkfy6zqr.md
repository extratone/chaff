# GitHub Issue ⇨ Draft Shortcut
Updated `10062022-140612`

- [GitHub Issue](https://github.com/extratone/i/issues/272)
- [**RoutineHub Page**](https://routinehub.co/shortcut/13090)
- [David Blue’s RoutineHub Library](drafts://open?uuid=CA94DF33-CAB9-40A0-836E-806225D5B600)
- [iCloud Share Link](https://www.icloud.com/shortcuts/fdcbfb02bd4a4e44b6735c4af8baf721)
- [iCloud Share LinkDEP](https://www.icloud.com/shortcuts/9f350a1462f8480e8de6de715c44134d)
- [Showcuts](https://showcuts.app/share/view/fdcbfb02bd4a4e44b6735c4af8baf721)
- [HTML Source Render](https://davidblue.wtf/issuedraft/source)
- [Jellycuts Gist](https://gist.github.com/extratone/b13a061aa6e82c7228e0127717b84054)
- [Example Gist](https://gist.github.com/fc3d8eb9cd91b4c5a9a36527559fffcf)
- [Example WTF Page](https://davidblue.wtf/drafts/9414E08A-6DCB-433E-B9C0-3548951A58FF.html)
- [Working Copy](working-copy://open?repo=i&path=shortcuts&mode=content)
- [Source Repo File](https://github.com/extratone/i/blob/main/shortcuts/Drafts/GitHubIssue-Draft.shortcut)
- [WTF](https://davidblue.wtf/drafts/33B35B71-7213-4048-B782-9C31F971CEC4.html)
- [WTF Shortlink](https://davidblue.wtf/issuedraft) - `https://davidblue.wtf/issuedraft`
- [MicroBlog](https://dieselgoth.micro.blog/2022/10/06/github-issue-draft.html)
- [Things](things:///show?id=78jHaim916vjkKb1RwBN8N)


---

## Documentation 

- [GitHub REST API - Get An Issue](https://docs.github.com/en/rest/issues/issues#get-an-issue)
- [GitHub REST API - List Issue Comments](https://docs.github.com/en/rest/issues/comments#list-issue-comments)
- [Creating a GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

## Social

<script async="" src="https://telegram.org/js/telegram-widget.js?1" data-telegram-post="extratone/12946" data-width="100%"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">well folks... <br><br>I finally did it. it took me a whole day (lol,) but I have finally created a reliable way to retrieve *all* contents of <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@GitHub</a> Issues in a single markdown document for <a href="https://twitter.com/draftsapp?ref_src=twsrc%5Etfw">@draftsapp</a>. <a href="https://t.co/AF1n6HHo1H">https://t.co/AF1n6HHo1H</a> <a href="https://t.co/bU197FccAv">pic.twitter.com/bU197FccAv</a></p>&mdash; 𝗗 𝗔 𝗩 𝗢 𝗗 (@NeoYokel) <a href="https://twitter.com/NeoYokel/status/1578097230527221760?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

well folks... 

I finally did it. it took me a whole day (lol,) but I have finally created a reliable way to retrieve *all* contents of @GitHub Issues in a single markdown document for @drafts app. https://routinehub.co/shortcut/13090

- [Twitter Thread](https://twitter.com/NeoYokel/status/1578097230527221760)
- [Telegram](https://t.me/extratone/12946)
- [r/Shortcuts](https://reddit.com/r/shortcuts/comments/xxdf9r/save_the_op_and_all_comments_from_a_github_issue/)
- [r/Shortcuts Discord](https://discord.com/channels/491379054331559936/491381649528061962/1027659592223707166)
- [Shortcuts User Group Discord](https://discord.com/channels/551914015131959308/551915117781188623/1027659528910680126)

pretty happy with this one! it's certainly going to make *me* very happy lol. I hope some of y'all might find it useful.

https://routinehub.co/shortcut/13090

https://davidblue.wtf/issuedraft

---

### Setup Steps

1. Provide a GitHub Personal Access Token. (Required)
2. Set any additional Drafts tags you'd like included beyond the issue's current labels. (Optional.)

## Retrieve and concatenate GitHub Issue contents and comments into a single draft.

See: [**The Full Documentation**](https://davidblue.wtf/issuedraft) 

[![GitHubImage-Draft Source Render](https://user-images.githubusercontent.com/43663476/194393714-12912a27-3f5e-4384-a2cb-3fed9754bcda.png)](https://davidblue.wtf/issuedraft/source)

This shortcut is yet another near-direct publication of one I made specifically for my own use cases. It uses [GitHub's REST API](https://docs.github.com/en/rest/issues) to gather an Issue's content - of the original post as well as all of the comments - into a single markdown document, formatted very specifically for my own use. Out of the box, it's designed to store said document in [Drafts](https://apps.apple.com/us/app/drafts/id1236254471), but even the most novice Shortcuts users should find pointing it to any other destination with markdown/plain text support very simple. (If you need help, please don't hesitate to contact me via any of the sources at the bottom of this page.)

### Setup

Upon installation, you'll be asked to provide:

1. A [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) (create one directly with [this link](https://github.com/settings/tokens/new).) This is absolutely required.
2. Any additional [tags](https://docs.getdrafts.com/docs/drafts/tagging.html) you'd like attached to the resulting draft *beyond the Issue's labels* (which are attached as tags by default.) These are optional.

The shortcut is configured by default to receive Issue URLs from the [Share Sheet](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/activity-views/) and/or the system clipboard. Theoretically, it should remain unaffected if one should accidentally pass an Issue *Comment* URL (ex: `https://github.com/mastodon/joinmastodon/issues/148#issuecomment-1114188033`) instead of the Issue URL (ex: `https://github.com/mastodon/joinmastodon/issues/148`,) as the [Get Item from List](https://matthewcassinelli.com/actions/get-item-from-list/) actions which parse out the specifying information seek by index from the root.

### Format

With Shortcuts variables wrapped in `}{`:

```
# "{title}" - {owner}/{repo}
Updated `{updated}`
Created `{created}`

- [**Issue**]({link})
- @[{username}](https://github.com/{username})
- [Repository](https://github.com/{owner}/{repo})
- [Maintainer/Org](https://github.com/{owner})

---

{body}

{commentContent1}
 *{ref1}*

---
{commentContent2}
 *{ref2}*

---
{commentContent3}
 *{ref3}*

---
```

Below is actual demonstrative shortcut output from [this Issue](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10) as input. You might also inspect the color-encoded markdown via [this Gist](https://gist.github.com/fc3d8eb9cd91b4c5a9a36527559fffcf.js) and/or see how the result looks when [rendered as a web page](https://davidblue.wtf/drafts/9414E08A-6DCB-433E-B9C0-3548951A58FF.html) using my custom Drafts HTML template.

<script src="https://gist.github.com/fc3d8eb9cd91b4c5a9a36527559fffcf.js"></script>

```md
# "Screen Time for Family Members" - FifiTheBulldog/ios-settings-urls
Updated `03302021-144840`
Created `03302021-085525`

- [**Issue**](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10)
- @[bcmitri](https://github.com/bcmitri)
- [Repository](https://github.com/txt/ios-settings-urls)
- [Maintainer/Org](https://github.com/FifiTheBulldog)

---

Is there any way to get to the "Screen Time → See All Activity" screen for family members?  I see them listed on the screen below, but haven't been able to guess a path value that works.
What’s the exact path to get to a family member’s See All Activity screen manually? I know how to get to See All Activity for my own device, but I don’t have an iCloud family that I can test with.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810311207)‑[FifiTheBulldog](https://github.com/FifiTheBulldog)*

---
That's the part I'm struggling with.  I had assumed / hoped that the See All Activity part would be easy once I could get to the Family Member view.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810319059)‑[bcmitri](https://github.com/bcmitri)*

---
I meant, what’s the series of taps to get there? Ignoring the search for a URL for a moment.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810320251)‑[FifiTheBulldog](https://github.com/FifiTheBulldog)*

---
Oh...  It’s just the name of my family member from the main Screen Time view.

![796139E3-AAD1-45DC-B4D2-0C20EC7B0254](https://user-images.githubusercontent.com/53234043/113008892-d65f2100-914d-11eb-9a31-85e29ff3da4a.jpeg)

 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810324148)‑[bcmitri](https://github.com/bcmitri)*

---
What if you URL encode the family member’s name exactly as it appears on screen there, and then use that as the path?
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810326062)‑[FifiTheBulldog](https://github.com/FifiTheBulldog)*

---
To encode the name as a url, I assume I just replace the space with a %20.  Is that right?  If so, I've tried that, and it just brings me to the main Screen Time view.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810331841)‑[bcmitri](https://github.com/bcmitri)*

---
Sounds about right, assuming there’s no other characters that would need to be percent encoded.

Are there any other identifiers that could possibly be used as paths? I’m at a loss.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810518796)‑[FifiTheBulldog](https://github.com/FifiTheBulldog)*

---
Really, there's just the screen that you see above.  Clicking my family member's name brings me to the main Screen Time view for that family member.

No worries if you don't know the answer.  I just thought I'd ask.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810531554)‑[bcmitri](https://github.com/bcmitri)*

---
Hmm, all right. I’ll leave this issue open and hope that it gets an answer someday, since this would be a particularly useful one.
 *[※](https://github.com/FifiTheBulldog/ios-settings-urls/issues/10#issuecomment-810532584)‑[FifiTheBulldog](https://github.com/FifiTheBulldog)*

---
```

And... for the sake of thoroughness... Here's how the same example looks *in the Drafts app*:

![iPhone 12 Pro Max Example Frame](https://user-images.githubusercontent.com/43663476/194389887-949a32fc-1021-4d54-b180-d00671f4ea54.png)

![iPad Pro Example Frame](https://user-images.githubusercontent.com/43663476/194389614-52cbd6b3-2f42-4bb9-893a-4d64f537da04.png)

[![Showcuts](https://user-images.githubusercontent.com/43663476/194391434-e47c3547-5200-48f8-8114-4df0cfda63ed.png)](https://showcuts.app/share/view/fdcbfb02bd4a4e44b6735c4af8baf721)