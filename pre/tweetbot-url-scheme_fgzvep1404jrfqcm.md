# Tweetbot URL Scheme

*11-05-2022 19:15* 

- [Source](https://tapbots.net/tweetbot3/support/url-schemes/)
- [Gist 1](https://gist.github.com/extratone/2902e4615afd47d5746dca34e8be362b)
- [Gist 2](https://gist.github.com/extratone/87eadaf96d13b7bef8eaa2565414d257)

> The argument callback_url is an URL encoded URL that will be opened in Safari once the Post view closes.
## Supported Tweetbot 3 URL Schemes

-   tweetbot://<screenname>/timeline
-   tweetbot://<screenname>/mentions
-   tweetbot://<screenname>/retweets
-   tweetbot://<screenname>/direct\_messages
-   tweetbot://<screenname>/lists
-   tweetbot://<screenname>/favorites
-   tweetbot://<screenname>/search
-   tweetbot://<screenname>/search?query=<text>
-   tweetbot://<screenname>/status/<tweet\_id>
-   tweetbot://<screenname>/user\_profile/<profile\_screenname>
-   tweetbot://<screenname>/post
-   tweetbot://<screenname>/post?text=<text>
-   tweetbot://<screenname>/post?text=<text>&callback\_url=<url>&in\_reply\_to\_status\_id=<tweet\_id>
-   tweetbot://<screenname>/search?query=<text>&callback\_url=<url>
-   tweetbot://<screenname>/status/<tweet\_id>?callback\_url=<url>
-   tweetbot://<screenname>/user\_profile/<screenname|user\_id>?callback\_url=<url>
-   tweetbot://<screenname>/follow/<screenname|user\_id>
-   tweetbot://<screenname>/unfollow/<screenname|user\_id>
-   tweetbot://<screenname>/favorite/<tweet\_id>
-   tweetbot://<screenname>/unfavorite/<tweet\_id>
-   tweetbot://<screenname>/retweet/<tweet\_id>
-   tweetbot://<screenname>/list/<list\_id>?callback\_url=<url>

The argument callback\_url is an URL encoded URL that will be opened in Safari once the Post view closes.