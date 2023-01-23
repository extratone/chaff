// src: https://platform.twitter.com/widgets.js


/* Post Comments Section

Usage: 
- Edit the "commentsText" and "responsePostText" variables below to customize the content of the post comments section.
- To not display the post comments section on a specific post, type "nocomments" anywhere in the post.
- To not display the post comments section on a all posts, set the showPostCommentsSection variable to false.
*/

var showPostCommentsSection = true;

// Insert Post Comments Section on posts, but not on the homepage.

if (document.getElementById("post-body") && showPostCommentsSection)
{
	var content = document.getElementById("post-body").innerHTML;
	var result = /nocomments/i.test(content);

	if (result)
	{
		var newContent = content.replace(/nocomments/gi, "");
		document.getElementById("post-body").innerHTML = newContent;
	}
	else
	{
		var commentsText = '<h3>Comments</h3><br /><br /><p>Do you have questions, comments or concerns about this post? <a href="https://yourblog.com/comments">Get in touch</a> with me and we can talk about it.</p>';

		var responsePostText = '<p>Or, if you are a Write.as user, responses to this post are welcome on Read.Write.As using hashtag &#35;<a href="https://read.write.as/t/ResponseToMe">ResponseToMe</a>. <span style="font-style: italic;">- For more information on Write.as "Response Posts", see this <a href="https://discuss.write.as/t/response-posts-for-discussion-between-authors/1017">thread</a></span>.</p>';

		var postCommentsSection = '<br /><hr /><br /><div style="text-align: center; font-style: normal;">' + commentsText + '<br /><br />' + responsePostText + '</div>';

		document.getElementsByTagName("article")[0].insertAdjacentHTML('beforeend', postCommentsSection);
	}
}
else
{
	// Remove nocomments text from homepage if displayed as part of post preview.
	var bodyContent = document.getElementsByTagName("body")[0].innerHTML;
	var newBodyContent = bodyContent.replace(/nocomments/gi, "");
	document.body.innerHTML = newBodyContent;
}