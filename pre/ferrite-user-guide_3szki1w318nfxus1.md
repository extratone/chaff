# Ferrite User Guide









Ferrite User’s Guide

  
[http://service.wooji-juice.com/ferrite/user-guide/ferrite-user-guide-2.4.2.html#chap_automation](http://service.wooji-juice.com/ferrite/user-guide/ferrite-user-guide-2.4.2.html#chap_automation)  




        

    


# Ferrite

# 
Recording Studio



version 2.4.2


Welcome to Ferrite, a professional audio recording &amp; editing tool designed for journalism, podcasting, audiobook production and other voice-oriented work.

Ferrite offers tools for two main tasks: recording audio, and creating edits or finished pieces. Ferrite makes it quick and easy to collect together interviews, narration, music and other audio, and then later put them together into a project or package.

1.  
Recording

2.  
The Library

3.  
Audio Info and Preproduction

4.  
Project Info

5.  
Overview

6.  
Tracks

7.  
Basic Edits

8.  
Advanced Edits

9.  
Editing Menu

10.  
Effects

11.  
Automation

12.  
MP3 Chapters

13.  
Compression and Sharing

14.  
Long Recordings

15.  
Transferring Audio to a Computer

16.  
Viewing History

17.  
Archives

18.  
Templates

19.  
Presets

20.  
Tagging

21.  
Drag And Drop

22.  
Accessibility: VoiceOver

23.  
Shortcuts, Gestures and Keyboard Commands

24.  
Settings

25.  
Bluetooth

26.  
Audio Unit Extensions

27.  
What’s New in Ferrite 2


## Recording

When you open up Ferrite, the top of the screen is taken up with the recording controls.




**Note:** Due to iOS privacy protections, you need to give Ferrite permission to access to your microphone before you can use the recording controls.




Once you’ve taken care of that, you’ll see:

*   A large microphone button, to start or stop recording
*   A description of the device that will be used for recording (e.g. iPad Microphone)
*   A display, wrapped around the microphone button, that shows the loudness of the sound currently being picked up by the microphone.

If you have headphones plugged in, you’ll also see a small 

Headphones

 button. Tap this to turn “monitoring” on or off. When monitoring is on, everything that’s picked up by the microphone will be sent to the headphones so you can listen to it.




**Note:** This is unavailable when using the device’s built-in speaker, because the sound would be picked up again by the mic, causing a feedback loop and a nasty squealing sound.




The recording panel is slightly different depending on the version of iOS you are using — if you are using iOS 13 or later, more features are available, along with a more modern design.

### In iOS 13 or later:

If you’re using a single mono microphone, you will see a “rainbow” over the microphone button that represents the sound it is picking up. If you have a stereo source connected, or an interface that supports multiple channels, the display is broken down into sections, one for each channel. The free version is limited to 1 or 2 channels (mono/stereo), but the Pro version supports more — see the 
Pro recording features section
 for details.

Channel input displays are 0&nbsp;dB peak meters, meaning that if the meter fills up, you’ve maxxed out the input, causing clipping. The entire section will light up red if this happens, and glow for a few seconds afterwards. You ideally want the loudest sounds to light up everything except the outer ring, to get the highest quality recording.

A common technique is to try and get typical voice levels to be in the bright green region (if you have “differentiate without colour” enabled in the iOS settings, this region is solid, while the ones around it are dotted) as this gives a nice, loud, clear recording, while still having a bit of “headroom” so that sounds that are a little louder don’t clip.

### In iOS 12 or earlier:

If you’re using a single mono microphone, you will see rings around the microphone button to represent the sound it is picking up. If you have two microphones connected (or another stereo source) these will split into two “fans”, representing the left and right input levels.

These are 0&nbsp;dB peak meters, meaning that if the meter fills up, you’ve maxxed out the input, causing clipping. The outer ring will light up red if this happens, and glow for a few seconds afterwards. You ideally want the loudest sounds to light up everything except the outer ring, to get the highest quality recording.

When you tap to start a recording, a timer will appear, showing how long you’ve been recording for. If you tap the recording button again, recording will stop. Ferrite will store your recording in the 
The Library
, and reset, ready for the next recording.




**Tip:** You can change this behaviour in the 
Settings
 if you prefer, so tapping the recording button will pause recording, and another tap will resume it again, as many times as you like. In this mode, a “checkmark” (iOS 12) or “Save” (iOS 13) button appears whenever your recording is paused. Tap it when you want to finish and save your recording.






**Note:** Whichever recording mode you choose, your recording is always being saved continuously to your device’s permanent storage. So if, for example, your device runs out of batteries and shuts off during a recording, everything up to that point will still have been saved. When you recharge, restart the device, and open Ferrite back up again, it will find the recording and ask if you want to finish processing it.




    When you finish a recording, it will appear at the top of the Library (by default, it’s sorted by time and date, with the most recent items at the top). You can give it a useful name by tapping the 
Info
 button.

During recordings, a “bookmark” button also appears. When you tap this, Ferrite makes a note of the time in the recording, and you can list and jump back to these bookmarks later, while listening to or editing the recording. You might use this to mark moments where you need to go back and make changes — perhaps to edit out a mistake or some background noise that interrupted the recording — or you might use it to remember where the highlights are.

A bookmark is also added automatically each time you pause and resume recording, so you can quickly find those points for editing.

### Ferrite&nbsp;2&nbsp;Pro recording features

*   Additional recording features are only available to customers who have purchased the Ferrite 2 Pro upgrade and using iOS 13 or later

Ferrite can record up to 8 channels, if you are using the Pro version. Podcasts, radio, audiobooks etc are typically mono or stereo (1 or 2 channels) only, so the additional channels won’t be played back unless you select or split them in the 
Audio Info Channel Selection controls
.

If you have an audio interface with lots of inputs, but you’ve only connected mics to some of them, you can switch off the channels you’re not using. This saves space in the recording file, but the feature isn’t enabled by default (to avoid accidentally switching off a channel you wanted to record). You can enable it in the Recording 
Settings
.

Once enabled, double-tap on a channel to toggle it on or off. You can change this as much as you like before you start recording, or after you stop, but not during a recording.




**Note:** Some file formats can only store 1-2 channels. If you have more inputs connected than your chosen file format supports, the additional channels will be marked unavailable with a “warning triangle”. Tap the triangle for more info.




Depending on how many inputs your audio interface has, it might be tedious to turn them on or off one-by-one. If you hold down on a channel, a menu pops up where you can switch all the channels on/off. Ferrite can also auto-detect channels: it will switch them on/off depending on which ones have sound coming through them. This normally matches the channels that have microphones connected, but depending on your interface, you may need to ensure the input gain is all the way down for unused channels.

When using headphones to monitor multiple channels at once, Ferrite spreads them across the stereo field. If you’re making a stereo recording, this matches your recording, but if you’re recording two or more people with one mic each, it can sometimes be distracting. Ferrite&nbsp;2&nbsp;Pro users can adjust this, either reducing the stereo spread (making it sound more like the people are standing in front of you, and slightly to the sides, instead of talking directly into your left/right ears) or mixing them down to mono. The monitoring settings don’t affect the stereo mix of the recording itself, just what you hear while monitoring. You can change the stereo spread in the 
Settings
, or by holding down the headphones button until the menu appears.

## The Library

The Library is where all your recordings and projects are kept. You can also add other audio to your Library, by tapping the 

Tools

 button in the top-right of the screen. Pick “Import Audio” from the tools menu to browse your device‘s Music Library — or other sources — for audio files to add to your collection.

Everything in the Library is either an Audio file, a Project, a Template, or an Archive.



Audio file




A recording made in Ferrite, or recordings, music or other audio imported from elsewhere.




Project




A document you create by combining one or more Audio files, arranging them and applying changes to them to make a finished product or package (e.g. a radio programme, podcast, audiobook, or whatever else you have in mind).




Template




Allows you to quickly create new Projects that are already set up, ready to start work on a new episode of a show.




Archive




A way to “tidy up” after finishing a project, by moving the project and all its audio into a single file. They’re described in detail in the 
Archives
 chapter — you probably don’t need to worry about them for now.








**Note:** Projects do not **contain** any audio — that’s all still preserved in the original recordings, so you can change your mind, compare your edited versions to the originals, or even re-use the same audio in multiple projects without wasting space on your device. This means If you delete a recording used by a project, the recording will be **removed from the project**.




You can preview any item in your Library by tapping the 

Play

 button to its left. While previewing audio, a bar appears, with a marker showing your position within the file. Tap the bar or drag the marker to jump to a different time. While listening to the audio, you can tap the Play button again to pause the preview, or hold the Play button down to stop and close the preview. Or, it will close itself, if you preview a different item.

You can tap any item in your Library to show more commands for that item:





Edit






Opens the project editor to edit the item.

*   If the item is a project, it will be opened for editing.
*   If the item is a piece of audio, a new project will be created. The audio is added to it, then the new project is opened for editing. When you return to the Library you’ll see the new project has appeared at the top.





Info






Opens a panel of information about the item, some of which you can edit (for example, to rename the item). See 
Audio Info and Preproduction
 and 
Project Info
.






Share






Allows you to export the item, sending it to a person (e.g. by email), or social network, or to another app or file storage service (e.g. iCloud or Dropbox). You can also duplicate projects from here, and other tasks.






Delete






Permanently removes the item from your device.




**Warning:** You cannot recover an item once you have deleted it! Projects are gone forever, and if the item was a piece of audio, any projects that made use of it will now simply have silence where that audio used to be.








### Selecting More Than One Item At Once

You can select several projects or audio files to be deleted or shared in a single action. You can also select several audio files to be gathered together and edited in a single new project.

    Tap the 

Select

 button in the top-left of the Library. You can now tap items in the Library to select or deselect them. You can then tap the 

Edit

, 

Share

 or 

Delete

 buttons that appear in the toolbar, to apply the command to each selected item.




**Note:** When sharing, Ferrite will make all the files you select available to the sharing services, but many sharing services only support a single file at a time. The exact list of sharing services available depends on the other apps you have installed on your device. You may need to tap the 

More…

 button in the sharing panel to enable the sharing services you want.




### Filtering the Library

Over time, the Library may fill up with lots of audio and projects. You can keep things manageable and find items quickly by filtering. There are three ways to filter: By type, by tag, or by typing some text into the search box. You can combine these, to quickly pick out exactly the items you want.

At the very top of the screen, you can tap the 

Library

 title to pop up options for filtering by type. This will hide some of the items in your list. The filtering options are:



Entire Library




This is the default, showing everything in the Library.




Original Audio Only




This shows audio that you’ve recorded or imported into Ferrite. It doesn’t show any projects.




Projects Only




This only shows projects you’ve created, hiding all audio.




Projects &amp; Unused Audio




The power-user’s favourite. This shows all your projects, and all the other audio that hasn’t yet been used in a project. Audio disappears from this list as it gets used, “hiding inside” the projects that use it. You’ll still see the audio in your projects when you view a project’s info, or by changing to a different filter.




Archives Only




If you have 
Archived
 old projects, this will show only those Archives still on your device.






At the the top of the Library, above the recording controls, is the 

Search

 box. Often, it’s tucked up out of sight, but you can reveal it by pulling the Library downwards with your finger. Typing into the box filters the Library, showing only the items whose names contain the text you’ve typed.

If you’ve applied any tags to items in your Library, then a 

Tag

 button will show up at the far right of the Search box. Tap this to show (or hide) all the tags you’ve used. Tap tags to select/deselect them. If you have any tags selected, only items with those tags will be shown. More detail can be found in the 
Tagging
 chapter of this guide.

The Library is normally sorted by the date the items were last edited, latest first. This keeps the items you’ve used most recently at the top of the list for quick access. You can change the order, to sort by when the item was created, or alphabetically by name, or by duration, by tapping the Sort Button. The Sort Button is next to the Search box, and its icon changes to show the current sorting:

*    A calendar when sorting by date
*    A-to-Z when sorting by name
*    A clock when sorting by duration

## Audio Info and Preproduction

For detailed info about an audio file, tap to select it, then tap the 

Info

 button. This will pop up a panel showing technical information about your audio, including the duration, time of recording, the amount of space the recording is using on your device, the format &amp; quality it is stored in, and more.

It also will tell you how many projects (if any) use the item — tap the number to list those projects (you can then tap a project to return to the Library, with that project selected). If you delete the audio, those projects will be changed, as the audio will be removed from them.




**Note:** There may be a second section in this list. If so, it shows projects which don’t _currently_ use this audio, but did in the past.

The audio was removed from these projects, so deleting the audio won’t affect them in their current form — but if you were to open any of those projects, then tap 

Undo

 far enough to try to restore the audio to it, it won’t work: the audio clips do reappear in the project timeline, but they are blank with a warning ⚠️ icon on them, and will be silent when you play the project.




You can rename a piece of audio by tapping its name in the Audio Info panel.

You can also “tag” audio from here — see the 
Tagging
 chapter for more information on this.

If you have added bookmarks to the recording, these will also be listed here. Tap a bookmark to select it and jump the preview to that moment in the recording. Tap the selected bookmark again to edit the text. To remove a bookmark you no longer need, swipe the bookmark to the left, then tap the delete button that appears.

You can add new bookmarks in this panel as well. Just tap the 

Bookmark

 button in the Audio Info title bar, and the current position in the preview will be bookmarked.

When browsing the Library, any audio with bookmarks will have a small bookmark icon next to it, by the duration/date information.

### Preproduction

*   Preproduction is only available to customers who have purchased the Ferrite 2 Pro upgrade

Most kinds of editing are performed in the Project Editor and can be adjusted live. But there are also a few features that help you prepare an audio file for editing, before you begin. These features are filed under “Preproduction”.

Many audio files don’t need preproduction, so initially it will be switched off. If you tap on the Preproduction section of the Audio Info panel, you can set it up for that audio file.

Using Preproduction, you can apply:



Auto Levelling




Like the 
Final Mix
 feature, this will smooth out the volume levels of the audio. This can help when editing very quiet audio, as it improves the quality of the previews. It can also be useful if you simply want to smooth the levels of a single audio clip instead of an entire project, or want control over the Final Mix while still taking advantage of Auto Levelling.




Noise Reduction




If you have a recording with “hiss” or similar noise in it, this may be able to remove it. It will identify pieces of the audio that are supposed to be silent (but have noise in them), analyse them to develop a “fingerprint” of the noise, then use that fingerprint to identify and attempt to remove it from the entire audio clip. Noise Reduction cannot reduce all kinds of noise, but it can help with relatively consistent sources of noise.




Boost Quiet Audio




This is only available when Noise Reduction is enabled, as it changes the way Noise Reduction works. It adds an extra boost to the levels before Noise Reduction is applied. This is because without it, if you have audio that has noise you want to remove, but the audio you want to keep is also very quiet, Noise Reduction may have difficulty telling them apart.






When you change Preproduction settings, all projects that use the audio file will be affected by your changes. The original audio file is not modified though — Preproduction creates additional audio data as needed. If you turn Preproduction back off, your original audio will be used unchanged.

Preproduction requires additional space to store processed audio. When Preproduction is enabled for an audio file, the amount of space used is shown in the Preproduction section of the Audio Info panel.

### Channel Selection

*   Channel Selection is only available to customers who have purchased the Ferrite 2 Pro upgrade

Ferrite edits projects in either mono (1 channel) or stereo (2 channels, left and right). If you make or import recordings with three or more channels, Channel Selection helps you deal with those recordings.

If you use an audio file that has three or more channels, Ferrite will use the first two channels as a stereo pair. In the Audio Info screen, next to the format, this will be shown by the message “Using Channels 1 and 2”. If you want to change this, tap on it to show the Channel Selection panel.

This lists all the channels, whether in use or not. Each has a Play/Pause/Stop button (the same as in the Audio Library) allowing you to listen to each channel and figure out which is which.

On the right-hand side it will show if the channel is being used as a single mono channel, or as the left or right channel of a stereo pair, or not used at all.

Tap on a channel to toggle it on or off. You must always have one channel selected. You can’t turn on more than two channels, but you can split them off into a separate clip in the Audio Library so you can edit them independently. You can do this by tapping “Split Unused” or by dragging-and-dropping channels from the Use Channels section to the Make New Files section.




**Note:** If you have Preproduction enabled when you split channels into new files, your Preproduction settings will be applied to them as they are split off.

Alternatively, you can split off the channels before applying Preproduction, allowing you to pick different Preproduction settings for each channel.




## Project Info

Projects also have an 

Info

 screen. From here, you can see which audio recordings they use, the duration and so on. You can also set the information that will be included in the project if you export it to an audio file, such as the project’s name, the creator’s name, the genre to file it under, copyright info, cover artwork and notes/lyrics.

Just tap the entry and type in the appropriate info. Some items also have a button that will help fill in the info more quickly. For example, you can pick a name out of your Contacts list, import a photo from your Photo Library to use as cover art, fill in copyright info automatically, or pick a genre from a list.

If the project was created from a 
template
, that template’s name will be shown, and you can tap on the button to navigate to it.

*   Templates, and customised project export filenames and file formats are only available to customers who have purchased the Ferrite 2 Pro upgrade

You can set an export name for the project. This is the filename that will be used when you send the project audio to another app. Although some apps will ignore it, many will use it as the name to save the audio with. If you don’t fill it in, it defaults to the same as the title. Note that the extension is always set automatically to match your chosen Sharing Format.

    Typically, the 
Sharing Format is chosen in the settings
 where you can set it up once, and then it will be used for all projects. However, if a project has different requirements, you can override it here in the Project Info screen.

    Just like with audio, you can tag your projects to quickly find them later (see the 
Tagging
 section).

    To remove cover art, hold your finger down on the image until Ferrite asks you to confirm its deletion.

    In the Pro version, the top-left corner of the Project Info panel has a 

Tools

 button. This provides quick access to some common Ferrite&nbsp;2&nbsp;Pro project tools. These tools are also available from the Share Sheet, and include features such as making 
Templates
 or 
Archives
 from the project.

# Editing

## Editing Overview

The usual way to create a project is to either:

*   Tap on a piece of audio in the Library, then tap 

Edit

, or,
*   Tap 

Select

 in the Library, pick several pieces of audio, then tap 

Edit

 in the toolbar.

Either way, a new project will be created, and it will contain the audio you selected. You can add more later (see 
Editing Tracks
 below).




**Note:** To continue editing a project later, you can tap on it, then tap 

Edit

, just like for audio.

If you tap on the _original_ audio and tap its  

Edit

 button again, you will instead create a new, separate project based on the same original audio.




The main editing screen consists of:

*   The Time Bar along the top of the screen: This acts like a “ruler” that marks off minutes and seconds, instead of inches or centimetres. As well as helping you see where you are in the project, there’s also a triangular marker, the “Play Head”, which shows where playback will start from next. You can drag the Play Head to move it, or tap to jump it to a new position.
*   The tracks: below the Time Bar are the tracks. Each track is a container, into which you can place clips of audio. Each track can be playing one clip of audio at any given moment, and the sound of all the tracks is mixed together to make the Final Mix, the result of your project. How you organise your tracks is up to you, but you might choose to use one for background music, another for field-recorded interviews, and another for studio voice-over, for example. Clips of audio are placed on the tracks and can be moved around to position them earlier or later in the mix, trimmed shorter, and so on.
*   Below the tracks is the 
Final Mix
 bar, for settings that affect the whole project, after the tracks have been mixed together.
*   Below the Final Mix bar, an 

+
 Add
 button allows you to add new tracks.
*   The 

Import

 button is also there, and pops open your Library. Tapping a piece of audio will add it to the project.
*   At the bottom of the screen is the toolbar.

The toolbar contains the following controls:





Document Save






Closes your project and returns to the Library.

Although this is called “Save”, in Ferrite your project is _always_ saved, automatically. For example, if you run out of battery while editing, everything you’ve done up to that point is still saved.

You can also hold it down for about a second to enter 
History







Undo

  


Redo






These let you change your mind about edits you’ve made. In Ferrite, as long as you haven’t deleted the recordings from your Library, you can always undo your edits&nbsp;– all the way back to the creation of the project if you wish! In fact, in Ferrite, Undo &amp; Redo continue to work even if you’ve closed the project, quit the app, and switched your device off and back on again




00:00:00




The Time Display indicates the “current” time — that is, the time the Play Head is positioned at. Below it is a bar, like a progress bar, showing how far through the project the Play Head is, relative to the complete length of the project. You can drag left or right anywhere on the Time Display to rapidly move the Play Head through the project. Tap the Time Display for the Time Display Options menu (see 
Navigation
 below).






Rewind






Jumps the Play Head backwards in time. See Navigation for more.






Play

  


Pause






Starts or stops playback, at the Play Head’s current position.






Fast Forward






Jumps the Play Head forwards in time. See 
Navigation
 for more.






### On Smaller Screens

If there isn’t room for all the controls (mainly on the iPhone in “portrait” orientation), some of them will be combined to save space. Undo and Redo can be combined, and so can Rewind and Fast Forward. When this happens:

*   The button will show the Undo or Rewind option as normal, but the Redo or Fast Forward option will be shown smaller &amp; faintly
*   Tapping the button will Undo or Rewind
*   Holding the button will “unfold” the two buttons into a popup
*   When the popup is shown, you can keep tapping the buttons and it won’t fold away, so you can Undo/Redo or Rewind/Fast Forward as many steps as you like without having to unfold it again
*   Tap the 

X

 to close the popup



**Tip:** If you place your finger on the combined button, and swipe upwards, towards where the Redo or Fast Forward button will appear, it will activate that command without unfolding.




### Navigation

When you first open a project, the entire duration is shown. To see and work with your audio in more detail, you can zoom in, using the standard iOS “Pinch to Zoom” gesture. You can pan around by swiping/dragging the project, just as you would pan a zoomed-in photo or web page.

If you play back your project while zoomed in, Ferrite normally follows along with the Play Head, panning to keep it in view. You can turn this off by tapping the Time Display, which pops up a menu with a 
Follow Along
 switch. From here, you can also zoom in on the selection (if you have a clip or clips selected), zoom back out to the whole project, or jump to the Play Head.

The 

Rewind

 and 

Fast Forward

 buttons jump the Play Head by moving it to where an audio clip starts or ends. Each tap finds the next start/end in that direction. If your recordings contain bookmarks, it will find those, too: Bookmarks are shown as small dots in the Time Bar. When the Play Head is stopped at one, a small extract of the bookmark’s text is also shown.

You can also hold the buttons down, to jump quickly to the very beginning or end of the project.

## Editing Tracks

There are some controls that affect an entire track. These controls live on a sheet of glass at the left-hand side of the track, and can be folded out of the way to make more room for editing (on iPhone, where the screen is smaller, they are automatically folded in Portrait view). To unfold them, swipe your finger out from the very edge of the screen. You will see:



Tools Button




Opens the Track Tools Menu. This contains more track commands, including those to turn Automation and Effects on or off, and is described in more detail below.




Play / Mute / Solo Button




A “speaker” icon. If the track is muted, it will have an X next to it. If soloed, it will have a star next to it. Tap to change modes.






Play



The track plays normally, as long as no tracks have been soloed.






Mute



The track is always silent. Muted tracks are shown grayed out.






Solo



The soloed track will play, but all other tracks will be silenced (unless they are also soloed). Silenced tracks show their audio clips grayed out.











Track Volume




A dial that sets the loudness of the track.




Track Pan




A dial that adjusts the stereo position of the track, pushing it toward the left or right speakers.




VU Meters




These display the audio volume levels, for the track’s left and right channels. They’re measured in decibels, relative to the maximum level that can be played without “clipping”. They show the output level —&nbsp;the volume level after all the effects, panning and the track volume control have been applied.






The Track Tools menu lets you:

*   Play, Mute or Solo a track
*   Specify 
Ducking
 for a track
*   Edit the 
Track Effects

*   Add 
Automation
 to the track
*   Select all the audio on a track
*   Delete a track you no longer need. Remember, deleting a track only removes its audio clips from the project. No audio is deleted from your device when you do this.
*   Open the Ducking Settings (these apply to the entire project)
*   Show or hide all the Automation tracks.
*   Change the order that tracks appear in (this has no effect on the resulting audio, it’s just so you can keep your projects organised if you wish).

### Ducking

Ducking is where the volume of some audio is automatically lowered whenever another piece of audio is playing, so as not to interfere with it. For example, you might want some background music to be “ducked down” behind a voice-over. A track can either be:



Duck King




When a track is a Duck King it will always play at its regular volume, and other tracks will “duck under” it. You might set this on the voice-over, for example.




Duck




When a track is Ducked, it will turn its volume down automatically when a Duck King track is playing. It will turn itself back up again when the Duck King is quiet. You might set this on the background music.




Duck Off




When a track is told to Duck Off, it doesn’t participate in ducking at all. It won’t turn its volume down, and it won’t cause other tracks to turn theirs down either.






If you open the Ducking Settings panel, you can adjust the ducker’s sensitivity, speed and strength. The 
Threshold
 is the loudness the Duck King must be below, to be considered silent. The 
Speed
 is how quickly you want to the other tracks to turn themselves down when the Duck King starts playing, or back up when it stops. The 
Strength
 controls how much the other tracks turn themselves down by. The Ducking Settings affect ducking across the whole project.

### Final Mix

Each track in your project is mixed together to produce the finished result. The Final Mix bar represents this mixed-together audio — the left and right VU Meters on the bar measure the final volume of your mix: the audio as it will be shared/exported.

You can also add 
Automation
 and 
Effects
 to the Final Mix, just like you can for tracks. For example, if you want to fade the entire project in/out at the beginning/end, setting up Volume Automation on the Final Mix is usually easier than adding it to each individual track. Tap the 

Final Mix

 button to open the Final Mix Tools menu.

### Post Production

*   Post Production is only available to customers who have purchased the Pro upgrade

The Final Mix menu is also home to Post Production commands: these are powerful commands that take too long to apply “live” — you can’t hear them while you’re editing your project, but they can be applied when it’s finished and you share it.



Auto Levelling




This command will analyse your completed project and automatically adjust volume levels to try and keep them smooth and even. Quieter sections will be turned up, louder sections will be turned down, and “clipping” will be avoided — it’s like a smart compressor, normaliser and peak limiter all in one.






Post Production is also where you can create 
MP3 Chapters
.

## Basic Edits

Audio clips are shown as blocks, placed on the tracks, with a picture of their audio waveform on them.

You can select any clip of audio by tapping on it. If you’ve added more audio, you can tap a different clip to change the selection, or tap some empty space to clear the selection.

Selected clips can be moved simply by dragging them around with your finger. You can drag them left or right to move them earlier or later in the project timeline, or you can drag them up and down to move them from one track to another.

You can split the audio into separate pieces simply by swiping your finger from the top of the selected clip, to the bottom, at the position where you want to the split to occur. Like cutting a loaf of bread with a knife, or opening the zipper on a jacket, swiping downwards across the clip separates it into two pieces.

To join clips together, push them against each other, then swipe upwards — just like cutting, but in the other direction.




**Tip:** If you find these gestures tricky, you can also split and join clips using the 
Editing Menu
. It’s worth practicing the gestures, though, as they’re real time-savers!




If you need greater accuracy while making cuts, you may find it helpful to zoom in on your project — the closer you’re zoomed in, the easier it is to make precise edits because everything is larger relative to your finger.

Another way to get greater accuracy is to move the Play Head to the position you want the cut or join to occur. The Play Head has a line extending down across your project: when you swipe your finger along this line, Ferrite understands that you want to cut precisely at the Play Head even if your finger wobbles a bit.

### More Editing

You can drag the edges of a clip to shorten or lengthen it. Dragging the clip to be shorter (from either end) trims unwanted audio from the clip, but the audio isn’t permanently destroyed (audio is never permanently destroyed in Ferrite unless you delete the audio from the Library). If you drag the clip back out again, it “uncovers” the hidden audio.

This works even if you delete a piece of audio from inside a clip — for example, by swiping twice, to split the audio into three clips, then deleting the middle clip. You can restore it by extending either of the outer two pieces to fill the gap.

(Of course, if you made a mistake in deleting a clip, you would normally just tap 

Undo

 to restore it. But if you’ve made other changes since, and later decide you want to restore some of the audio you removed earlier, you can do that just by dragging the edges.)

## Advanced Edits

You can easily make clips fade in or out: When a clip is selected, you’ll see a couple of handles with “ramps” inside them, sat at the top of the clip. Drag these to adjust the duration of the fade: the handle marks the point at which the clip will be at its full volume (whatever you’ve set with the Track Volume dial).

You can also crossfade between pieces of audio. A track can mostly play only one piece of audio at once —&nbsp;if you need two pieces to play at the same time, you should place one of the pieces on a separate track. But, if you drag a piece of audio so that it overlaps another piece, Ferrite will create a crossfade between them.

It will show the crossfade using shaded areas, similar to the fade in/out at the edges of a clip. The crossfade’s duration is set by how much the clips overlap.

If you position a piece so that it’s _completely_ contained within another piece (instead of just partially overlapping it), Ferrite will crossfade to it at the start, and crossfade back at the end. The timing of the crossfade is controlled by the usual fade in/fade out controls on the “inner” clip.




**Tip:** This can be useful for “bleeping out” words. If you keep a bleep sound effect in your Library (or a cartoon sound effect, or whatever you prefer), then you can just drop it in on top of the word(s) you want to remove.




    If you already have two pieces of audio overlapping, and try to drag a third so that it overlaps both of them, the clip you are dragging will light up red and turn ghostly, showing that Ferrite will not let you drop it there. When you let go, the clip will scoot back to its original position.

## Editing Menu

If you tap on a selected clip, a menu will pop up, with a number of additional commands:



Cut




Copy the audio clip to the Pasteboard, then Delete it.




Copy




Copy the audio clip to the Pasteboard.




**Note:** Clips copied this way can’t be pasted into other apps. To send audio to another app, pick an item in the Library, and tap Share.  






Paste




Paste audio clips that you previously Cut or Copied. This will not appear if the Pasteboard is empty, or if pasting it at this location would cause too many pieces of audio to overlap.




Delete




Remove the selected clips from the project.

(Remember, the audio files themselves are not permanently removed)




Split




Split the selected audio clip into two pieces, the same as swiping down across the clip. You can use this to split several clips at the same time (see 
Multiple Selections
).




Join




Join the selected audio clips together, the same as swiping up across the join between them. They must be pushed up against each other first.




Zoom




Zoom the display in or out until the selection fills the screen.




Import…




Opens a browser showing your Library. You can pick an audio item to be added to the project; it will be inserted at the selected track and time.




Strip Silence…




Remove silent sections from the selected audio.




Tighten…




Pack together audio clips to tighten up the timing of tracks.

(not available in free version)




Share…




Share either a single audio file created using all the selected clips, or a zip file containing an audio file for each selected clip. This includes the results of effects and automation.

(not available in free version)






As well as tapping on selected clips, you can also tap on the empty space of a track to pop open the menu. If you had a clip selected already, this will deselect it, but otherwise, the menu will appear, showing the commands that work even without a clip selected (“Paste” and “Import…”).

### Strip Silence

The “Strip Silence…” command slices out silent (or nearly-silent) parts of an audio clip. If you’re familiar with a “noise gate”, it’s similar, but the quiet portions are removed from the project altogether, not just silenced.

Strip Silence splits a single clip up into several clips, one for each continuous section of sound. For example, if you have a recording of someone “speaking… with… long… pauses… between… each… word… like… Shatner… or… Walken…” then apply Strip Silence to it, you will end up with one clip for each word, with empty space in the project where the pauses used to be.

When you select the command, the Strip Silence control panel appears at the bottom of the screen. As you adjust the controls, blue shading will mark the regions that will be cut out (for very long pieces of audio, the Strip Silence command may take a little time to update when you change the controls. You’ll see a progress bar below them while this happens).

There are three Strip Silence controls:



Threshold




Sections of audio are only removed if they’re quieter than this level.




Edge Fade




With this switched off, you’ll get hard cuts between the sound and silent sections. Increase the fading, and the Strip Silence command will fade in just before the start of each piece of audio, then fade out when it returns to silence.




Minimum Silence




This is the minimum duration of silence between two sections of audio. If you’re working with very long audio, you should probably turn this up so your timeline doesn’t resemble the aftermath of a hailstorm. This can be particularly useful for projects such as interviews, if you have a separate recording for each participant.






Once you tap the Done button to confirm the command, the sections marked in blue are deleted from the timeline. Note that the audio left behind is not moved to fill the gaps — the timing of your project is unchanged. You can use the 
Tighten Audio
 command afterwards if you want to “ripple” all the deleted sections.




**Tip:** Like all edits in Ferrite, Strip Silence is non-destructive: the silent parts of the audio are removed from the project, but they are not removed from your device, and can be restored either by tapping Undo, by dragging the edges of the pieces to “uncover” more of the audio, or even simply adding the audio back into the project.






**Note:** While the panel is open, you can zoom in and out of your project, pan around, and listen to it, but you can’t make edits until you either confirm or cancel the Strip Silence command.




### Tighten Audio

*   The Tighten command is only available to paying customers

After using the Strip Silence command, or after some manual editing, you might have a bunch of clips with gaps between them. The Tighten command takes those gaps out so that the clips are pushed against each other.

Select two or more clips, and pick Tighten… from the menu. The Tighten control panel appears at the bottom of the screen, and the selected audio clips will move to their new positions.



Amount




Controls how much Tightening is applied. At zero, there’s no change from the original clip positions, but as you turn it up, the clips are pulled towards each other.




Minimum Silence




This is the minimum duration of silence between two audio clips. At zero, clips will be pushed right up against each other, but this can sound unnatural, since people usually need to take a moment to breathe between sentences.

Turning this up will set a minimum gap between clips. This affects only clips that are Tightened: clips that were already closer than this, will not be pushed apart.






You can select clips across multiple tracks — even the whole project, if you like. When you Tighten clips across tracks, they move with each other, so that if, for example, you have an interview with two people, one on each track, their questions and answers won’t get out of order.

    If you have 
Automation
 Control Points selected as well as audio, then when you tighten the audio, those Control Points will be moved to match the audio they were lined up with.




**Note:** While the panel is open, you can zoom in and out of your project, pan around, and listen to it, but you can’t make edits until you either confirm or cancel the Tighten command.




### Ripple Insert And Delete

When you delete a clip, you’ll see some blue shading in the area where the clip used to be, and you’ll be offered the choice to “Ripple” the delete. If you Ripple a delete, it means that any audio after it in the track will slide along by the length of the audio you just removed. So for example, if you did this:

*   Opened a project with a single 10-second clip of audio at the start of the project
*   Split the clip at 3 seconds into the project (you’ll now have two clips, one directly after the other: a 3 second clip, then a 7 second clip.)
*   Selected the first clip, and deleted it

…then if you _don’t_ Ripple, you’ll have a project with 3 seconds of empty space at the start, and then the rest of the clip. If you wanted to insert a different piece of audio there, this is probably what you want.

But, if you tap Ripple, the second clip (7 seconds) will slide to the beginning of the project, with no gap. This is probably what you want, if you just wanted to trim off some unnecessary audio from the start of the clip.

The Ripple Menu also offers an “All Tracks” option which applies the same ripple across every track, not just the one you deleted from.

If you don’t want to Ripple, just tap anywhere else to dismiss the Ripple menu.

(If you _never_ want to Ripple, you can turn the feature off entirely in Ferrite’s 
Settings
.)

Whenever you import or paste audio, you’ll be offered the choice to “Ripple” it too. This is similar to Ripple Delete, but in the other direction: any audio in the track after the piece you added, will be moved along to make room for it.

Just like with Ripple Delete, you have the choice to Ripple Insert on one track or all tracks, and the feature can be turned off entirely in the Settings.

### Multiple Selections

You can select more than one clip at once. If you do, you can edit all the selected clips in one go:

*   You can cut, copy or delete all the selected clips
*   You can move the selected clips around the project
*   If you make a split using the editing menu, it will extend across the entire selection at that point in time, so you can cut several tracks at once, at exactly the same spot.

You can’t crop/uncrop, or fade in/out multiple clips at once.

To select multiple clips:

*   Hold your finger down on a clip, as though you were going to drag it. But don’t move it yet.
*   While holding it, tap another clip. It will be added to the selection
*   If you tap an already-selected clip, it will be removed from the selection.

It can often be convenient to select everything past a certain point on a track. You can do this by selecting a clip, then double-tapping on it: all of the clips after it on the same track will be added to the selection. Triple-tap, and it will extend this across _all_ tracks in the project.

    You can also select all the clips on a single track from the Track Tools menu. And there’s a short-cut for adding clips to the selection, using some “optional extra” 
Two Finger Editing Gestures
 or the 
Apple Pencil™
.

## Effects

*   Effects are only available to customers who have purchased the Pro upgrade

From the Track Tools menu, you can add effects to your tracks. Effects change the way a track sounds when it’s played back. Because they’re only applied at the moment the sound is sent to the speakers (or exported), you can adjust them as often as you like.

    When you open the Effects submenu, you’ll see a list of the effects available (also shown below). Tap one to add it to the track. To remove it, or change the order in which the effects are applied, tap the 

Edit

 button.

Once you’ve added an effect, tap it again to open its settings. The settings depend on the effect, but are usually dials that control how strongly the effect should be applied, how quickly the effect should respond to changes in your audio, and so on.

    You can also 
Automate
 effect settings. If you’ve automated a setting, its dial will be disabled.



Compressor




A dynamic range compressor. A sort of souped-up automatic gain control, it makes quiet sounds louder, and loud sounds quieter.




Equaliser




A sophisticated multi-band equaliser and visualiser. Allows you to view and shape the frequency bands of your audio. 
See below
 for more information on this effect.




High Pass Filter




Cuts off any sounds below a certain frequency. Can give the sound a tinny, telephone-like quality. Can also remove some kinds of low-pitched rumble.




Low Pass Filter




Cuts off any sounds above a certain frequency. Can give a muffled or distant quality to sound, or remove some kinds of high-pitched noise.




Mid-Side Decode




Some high-end field recorders have a “Mid-Side Stereo Recording” feature. Instead of recording separate left and right channels, they record a “middle” channel and a “side” channel. If you play back audio recorded using this encoding in an app that expects regular stereo audio, it can sound strange. This effect decodes Mid-Side recordings into regular stereo for use in Ferrite. You can set the amount of stereo spread, making the result sound “wide” or “narrow”. You also need to tell it which channel is the “side” channel — this information should be in the user guide for your field recorder.

If you use Mid-Side Decode, you should **always place it first** (at the top) of the effects for a particular track, and you should only place Mid-Side clips on that track.




Noise Gate




Cuts off any sounds below a loudness threshold. Often used when you’ve recorded someone speaking but have background noise — it can’t remove the noise while they’re talking, but at least in the pauses, the noise will be silenced.




Warm Amplifier




A warm, resonant amplifier which can add “presence” or “richness” to a track.






You may also see additional effects. These are not part of Ferrite, but are “plugins” that can be used with it. See 
Audio Unit Extensions
 for more on this.

### Equaliser

The equaliser effect boosts or reduces audio according to frequency. It’s very customisable — you can add up to 8 “bands”, each of which can boost or reduce a different range of frequencies by a different amount.

You control the equaliser using a graph that both shows the bands you have added, and (optionally) the frequencies of the audio as it plays. A sliding control below the graph allows you to switch the visualiser off, set it to show the frequencies of the original audio before the equaliser affects it, or the frequencies of the audio after the equaliser has boosted or reduced the audio.

On the graph are a dashed line marking “0&nbsp;dB” (the point at which audio is neither boosted nor reduced), and a series of circles, one for each band you have added. Bands come in different types — an icon inside the circle shows what type it is.

*   Tap the 

+
 Add
 button to add a new band.
*   Tap a band to select it.
*   The frequency (and the gain and bandwidth, where supported) for the currently selected band are shown at the top of the equaliser control panel.
*   Tap the selected band to delete it or change its type. The types are:


Off




Set this type to temporarily switch a band off without deleting it.




Parametric




A flexible general-purpose type that boosts or reduces audio frequencies close to the band frequency.




Low Pass




Allows audio through if it’s lower-frequency than the band frequency, blocks audio if it’s higher frequency. (Available in regular and resonant variations.)




High Pass




Allows audio through if it’s higher-frequency than the band frequency, blocks audio if it’s lower frequency. (Available in regular and resonant variations.)




Band Pass




Allows frequencies through only if they are close to the band frequency.




Notch Cut




Removes frequencies if they are close to the band frequency.




Low Shelf




Boost or reduce frequencies lower than the band frequency. (Available in regular and resonant variations.)




High Shelf




Boost or reduce frequencies higher than the band frequency. (Available in regular and resonant variations.)






*   Drag the band left or right to adjust the frequency the band affects.
*   Drag the band up or down to increase or decrease the gain. (Not all types support gain control. Parametric and Shelf types do, the others always remove as much of the blocked frequencies as they are able).
*   Pinch/unpinch the band to increase or decrease the bandwidth. The wider the bandwidth, the wider the range of frequencies are affected. (Not all types support bandwidth control. Parametric, Band Pass and Notch Cut do; the others only support bandwidth in the Resonant variations.).

Each band has a letter associated with it (A thru H). If you automate EQ parameters, you can use this to make sure you are automating the right bands. When an EQ parameter is automated, you won’t be able to edit it in the EQ control panel — it will instead track the automation during playback.

## Automation

*   Automation is only available to customers who have purchased the Pro upgrade

    The volume and panning of a track, and the settings of 
Effects
 you have added, can be set to automatically change over time.

For something like a simple fade in/fade out, it’s usually easier to just use the fade handles on an audio clip. Automation is useful when you need complex or precise control, or to affect the Final Mix.

Tap the 

Tools Menu

 button for the track you want to automate (or tap the Final Mix), then tap Automation to see the list of things that can be automated. For a new track, this will be Volume and Pan, but if you’ve added effects to your track, their settings will appear here too.

Pick the setting you want to automate — for example, “Track Panning”. This will create a new Automation Track and attach it to the bottom of the regular audio track (it will also disable the dial you would usually use to control the setting, since the Automation Track is in charge of that now).

You can stack up a whole list of automation tracks if you like. When you scroll through them, the audio track they are attached to will “stick” when it hits the top of the screen, so you can always see how the automation lines up with the audio. (From the Track Tools menu you can also hide all the automation tracks, to tidy up your screen.)

Each automation track controls one setting, and displays a graph of how that setting changes over time. If you have the glass side panel showing, it contains an extra dial to assist in editing the automation.

### Editing Automation Tracks

Automation is controlled using “Control Points”. Control Points are dots on the graph that you can move around. They record the value of the setting at a moment in time, e.g. “at 5 seconds from the start, the volume should be 100%”.

In between Control Points, Ferrite automatically slides the control to the new position, so it’s easy to create smooth fades, pans and other effects. You can change how it does this in the 
Settings
: the default behaviour is to create a smooth curve that flows through all the points, but if you prefer, you can switch to using straight lines.

There are three different ways to edit Automation: 
Play Head &amp; Dial
, 
Live Recording
, and 
Graph Editing
. You can use whichever you prefer, or a combination.

### Play Head 
&amp;
 Dial

You can move the Play Head to a particular time, then adjust the side panel dial for an automation track. If the Play Head is pointing to a Control Point when you adjust the dial, that Point will be adjusted. If not, a new Control Point will be added first, then adjusted.

### Live Recording

You can press 

Play

, and while listening to your project, adjust the side panel dial. Your changes are recorded live, as a series of new Control Points, added to (or replacing) the existing ones.

Control Points are only created as needed, so if, for example, there’s a long section where you want the setting to stay unchanged, it will simply mark the beginning and end of that section with the same value.

### Graph Editing

You can adjust the graph in the timeline directly, by tapping, holding and dragging:



Tap




Create a Control Point. The Control Point will always start on the graph line, even if you tap above/below the line.




Hold




See the exact value of the Control Point under your finger.

If you hold between two Control Points, it will show the values for both.

#### With the value(s) showing:




Drag Point Left/Right




Move the point earlier/later in the timeline.

To delete a point, drag it until it “bumps into” another Control Point.




Drag Point Up/Down




Adjust the value of the point(s).








**Tip:** When editing the graph, you don’t need to tap/drag exactly on the line or Control Point itself (since the line/point might be right on the top or bottom edge of the track, that could be awkward). It’s usually easiest to tap/drag in the vertical centre of the track.




### Selecting Automation

You can select several automation Control Points at once, and move them all in a block. There are several ways to do this, and you can select automation and audio at the same time, so that they all move together:



Fingers/Pencil




The 
two-finger swipe
 and 
Apple Pencil™
 editing gestures can also work with automation Control Points, allowing you to quickly select or delete a bunch of them at once. You can adjust this behaviour in the 
Settings
, if you prefer to select audio across multiple tracks without selecting any automation in between.




The “Select Automation (Toggle)” command




Found in the 
Shortcut Bar
 or the 
keyboard shortcuts
, this adds to the selection any Control Points contained within the time range of the selected audio clips. If all the Control Points that can be selected, already are, then it removes them from the selection, to leave only the audio selected.




Automatically Select




You can enable this in the 
Settings
. Then, whenever you use commands like Select All, Select All Following etc to select multiple pieces of audio at once, Ferrite will also select matching automation Control Points (e.g. all the Control Points in the case of Select All, or all the Control Points from the selected audio onwards the case of Select All Following). Note: this setting doesn’t affect what happens when you just tap on a single piece of audio to select it.






The main use for this is sliding audio and automation left or right along the timeline, so they stay in sync. But, if you select several Control Points on a single automation track, you can also move them all up or down at once.




**Note:** You can’t drag automation from track to track, so when you have Control Points selected, you can’t move the selection to a different track — remove the Control Points from the selection first.




### Removing Automation

If you open the Track Tools Menu and pick Automation, you can simply tap on an automated setting to remove the automation. This will hide the automation track from the screen and switch off the automation, returning to manual control for that setting.

Your automation isn’t deleted, though: it’s kept in case you need it again later. if you change your mind and turn automation back on for that setting, Ferrite will ask you if you wish to restore it. If you’re not sure, restore the automation and see if it’s what you want — you can always Undo if it isn’t.

## MP3 Chapters

*   Chapter editing is only available to customers who have purchased the Pro upgrade



**Note:** Chapters will be included when you export an .MP3 or .WAV file, but not other audio file formats.

.WAV file markers do not support features like images, links or hiding — Ferrite will add a “marker” at start of each chapter, containing the title.

However, if you export your project as a video, in Ferrite&nbsp;2&nbsp;Pro, chapter images can be used to make a slideshow.

You can also share chapter information as .TXT or .JSON files from the project Share Sheet.        




Chapters are markers that you can place into projects at particular moments in time. While you _can_ use them to quickly jump around a project while editing it, they are designed to be included in the final .MP3 file when you export it, typically for use in podcasts. Many podcast players allow listeners to skip straight to the start of a chapter, and some can display custom artwork for each chapter, or allow a chapter to contain a link to a website.

To edit chapters, open the 
Final Mix
 menu and tap “Edit MP3 Chapters” (you can also use the Shortcut Bar if you have that enabled). A panel slides over the editing area containing a list of chapters — initially, this will be blank.

While the Chapters panel is open, you can’t edit your project, but you can still move the Play Head, use the Play/Pause, Rewind/Forward and Undo/Redo controls, and pan/zoom around. Tap outside of the panel to dismiss it.    

    On iPhone — or on an iPad if you have used split-screen multitasking to reduce the screen space available to Ferrite — the Chapter panel will fill the screen. Play/pause and navigation controls will appear at the bottom of the panel so you can listen to and move around your project.    

Tap the 

+
 Add
 button at the top of the Chapter panel to add a new chapter. The chapter will start at the Play Head’s current position, and continue either to the start of the next chapter, or the end of the project.

Tap the chapter to jump the Play Head to the start of that chapter.

Tap the chapter’s 

Info

 button to edit its name, to add artwork or a link, or to move or delete the chapter.

You can also swipe on a chapter in the list to quickly move it to the Play Head or delete it.

    On iPad, you can also create or update chapters by 
dragging and dropping
 text, links or images from other apps.    

You can save chapter 
Presets
 for re-use later — great for ad breaks or recurring segments in a show. These will include the title, link and artwork if present. You can create a bookmark the usual way, tap to edit it, then use the presets button to select the preset, but there’s also a shortcut: If you hold down the 

+
 Add Chapter
 button instead of tapping it, the presets list will appear and you can select a preset chapter to create at the Play Head.

### “Hidden” Chapters

In the Chapter Info screen, you can set whether chapters appear in the Table of Contents. Normally, you want this to be on (the default), so listeners can skip straight to the chapter from the contents page. However, if you leave a chapter out of the contents, but give it artwork, well-behaved podcast players will still show the artwork at the relevant time. This can be useful if you want to create slideshows, add images relevant to the discussion, etc without cluttering up the table of contents.

### Link To Audio

Chapters are normally locked to the timeline, meaning they only move if you move them yourself, but at the top of the chapter list is a switch you can flip to “Link to Audio”.

When this is set, chapter markers will be automatically moved when you 
Tighten Audio
, or 
Ripple Insert or Ripple Delete
 audio earlier than the chapter in the timeline.

Chapter markers will also be dragged when you move audio by hand, if the selection overlaps the chapter marker.

# Additional Information

## Compression and Sharing

There are many different formats for storing digital audio, each with their own advantages and disadvantages. Ferrite will import audio clips in many of the common ones so you can use them in your projects.

When it comes to recording audio, or sharing projects, you have a choice of formats, depending on your needs. These choices are separate — you can record in one format, and share in another, if you wish.

### Recording Original Audio

When you record in Ferrite, your audio is compressed. Ferrite supports two different kinds of compression for recordings. You can select which in the 
Settings
:



Lossy (AAC .m4a)




This is the default. It retains a high quality of audio while using less storage space. The recordings are stored as MPEG-4 Audio using Advanced Audio Coding, a widely supported format — it’s commonly used when you purchase or stream high-quality commercial music.

Although the quality is very good, and most people cannot tell the difference, it is not perfect: some information is lost when using this type of compression.




Lossless (ALAC .caf)




If you need the best quality possible, this stores the audio perfectly. When you play it back, the audio signal is an exact, bit-for-bit match for what was recorded, but will also use more storage space. It’s not supported by as many other apps, but because it’s lossless, if you need to convert it for use in another app, that can be done without additional loss of quality.








**Note:** This only affects the way that recordings are _stored_. Selecting perfect lossless compression does not guarantee perfect audio quality: it means that the audio is a perfect reproduction of what was received by Ferrite, which depends on many factors outside our control, such as your choice of microphone.

For example, if your original audio has hiss or other noise, picking Lossless just means that Ferrite will perfectly preserve that hiss or noise for you!

Choosing a compression type only applies to recordings. If you import audio from your Music Library or another source, that audio is kept unchanged. For example, an imported .mp3 file is still kept in .mp3 format.




### Sharing Original Audio

When you export a recording — post it on a social networking site, send it to someone, or save it to a file storage service — Ferrite checks to see what format it is in.

If the audio is already appropriately compressed — if it was recorded in Lossy AAC/.M4A format, or is an imported file that was already in that format, or a similar one — Ferrite will simply share the file as-is: it will not degrade the quality by decompressing it and recompressing it again. Otherwise Ferrite will export it in the Sharing Format chosen in the 
Settings
 — this defaults to Lossy AAC/.M4A format. This is to save space, time and bandwidth, and because it’s widely supported by other services.

If you have audio that you _do_ wish to share in its original format regardless of the Settings — for example, if you want to save the recording to Dropbox for someone else to edit, and don’t mind the larger file size — you can. After you tap Share, look for the “Original File” option. When you tap this, the Share panel will briefly close and reopen: now select the service you want to export to, and the original file will be shared, unaltered.




**Warning:** Remember that lossless audio can be much larger, use a lot of storage space, and if you’re sending the audio over a cellular connection, it may take a long time to share, and use a lot of mobile data. Be certain this is what you want!




### Sharing Projects

*   Exporting projects in Lossless or Wave format, as separate tracks (“stems”), as videos, or adjusting settings bitrates or mono conversion, are  only available to paying customers

When you export a project, Ferrite will normally use Lossy AAC/.M4A compression for the same reasons of space, time and bandwidth as before. In the 
Settings
 you can instead change your Sharing Format to Lossy (.MP3), Lossless (ALAC .CAF), and you can also pick Uncompressed Wave (PCM .WAV) format. Wave files are not compressed at all, and so they take up the most space. However, almost every other audio app will understand them, so they are popular for this reason despite their huge file sizes.

When you select a sharing format in the Settings, you can also customise the options for it. For lossless formats, you can choose to automatically convert to mono on export by tapping the Mono/Stereo indicator. For Lossy AAC/.M4A compression, you can also pick a bitrate, and for .MP3 files you can either pick a Constant Bit Rate (CBR), or pick a Variable Bit Rate (VBR) quality. In most cases, you want to export in the highest quality possible, but if you’re creating a podcast or another file that lots of people are going to download, you might want to make a trade off, and share using a lower quality that’s smaller and faster to download.

Exporting a project using Lossless or Wave format can be particularly useful if you don’t want to upload the audio file immediately, but instead want to send it to another app for further processing first.




**Note:** When exporting MP3s for podcasting production, we recommend the use of CBR files, as some podcast players get confused by VBR MP3 files.




### Other Features in the Sharing Panel

    Another way to share projects is to save them as videos — this can be useful for sharing to social networks. When you share a project, you will see a “Video” option in the sharing panel. If you tap this, Ferrite will create a video from your project, which you save to your Camera Roll or share. Note that Ferrite is not a video editor — it will use a still image for the video. If you have added cover art to your project, this will be used, otherwise the Ferrite icon will be used.

The Convert to Mono command can be used on both projects, and on stereo recordings. There are two different ways to do this, and Ferrite will ask you which you want:



Split to Separate Tracks




The left and right channels will be written to separate mono files. This is useful for interviews where the interviewer, and interviewee, are miked up separately and recorded to differt channels — you can split the recording, import the resulting audio into separate tracks, and edit them independently.




Merge to One Mono Track




The left and right channels will be combined and written to a single mono file. This is useful if you’re going to be broadcasting in mono.






You can also share projects as separate tracks (commonly known as “stems”). You might do this if you wanted to finish editing on a desktop computer, for example. It creates a lossless .WAV file (for maximum quality &amp; compatibility) for each track, and packs them into a .zip file for sharing.

## Long Recordings

Ferrite doesn’t have an upper limit on the duration of a recording (in the paid version — if you have not paid, you are limited to one hour per recording).

Of course, your device is not infinite, and will eventually run out of space, and recording files can get very large, even with lossy compression.

Ferrite does not mind if recordings get very large, but other apps might, if you try to send large recordings to them. Therefore, Ferrite takes the following steps:

*   If a recording gets above around 500MB in size, it is automatically split into parts. Each 500MB part is recorded into a separate file. The exact recording time this corresponds to, depends on your recording source (eg mono/stereo), compression (lossy/lossless) as well as the content of the audio. A lossless stereo recording can reach around 45-50 minutes before needing to start a second part. Mono recordings, or using lossy-compression, can extend the duration much further before this happens.
*   Inside Ferrite, all the parts are still treated as a single audio clip in your library, joined together. It can still be edited as a single audio clip, and the parts will fit together seamlessly without any “cut”, “pop” or “click” where they join.
*   The only difference within Ferrite itself is that a tiny “multi part recording” icon appears next to them in the Library, by the duration/date information (right alongside where the bookmark icon appears).
*   The files are split so that if you want to copy the files to your computer directly 
via a USB/Lightning cable
, you can. iTunes sometimes refuses to copy very large files, so by keeping each piece below 500MB we hope to avoid this problem (obviously, we can’t guarantee the correct functioning of other apps, we can only make sure our own behaves as politely as possible!)
*   When you share a recording (eg by email, sending to another app, iCloud, Dropbox), Ferrite will try joining the pieces.

The overall effect is that you shouldn’t need to worry about the size/length of a recording, or how many parts it needs to be in — it should all just work, seamlessly — unless you need to share uncompressed audio with other apps.




**Note:** In order to keep the app fast to use, Ferrite needs to do some “pre-processing” of a file before it can be edited. Normally this happens while the recording is being made, so there is no delay. But if you import an audio file from elsewhere, then this will happen when you first edit it. The larger the file, the longer this will take — on older devices, perhaps a second of processing per minute of audio. It’s much faster on modern devices.

You can still work with a project while this processing is happening, but the visuals for that file will be “blanked out” until it has finished.

This usually only needs to happen once per file, but if you lose your device and have to restore from a backup, the files will need to be re-processed (hopefully that isn’t something you have to worry about!)




## Transferring Audio to a Computer

As well as using the built-in import and export commands, you can copy audio in and out of Ferrite by connecting your device to a computer and using Finder (on Apple Macs running macOS 10.15 “Catalina” or later) or iTunes (on PCs, or Macs running older versions of macOS). This can be useful if you have very large files to transfer, as it’s usually faster.

You do this using an Apple feature called App File Sharing. Apple [provide details on how to use it](http://service.wooji-juice.com/common/app-file-sharing.html) on their support site.

This Apple feature will show all the files from 
The Library
 and you can copy them to your computer’s desktop. You can also copy new audio files in to Ferrite to use them in your projects.

    Ferrite stores audio in special folders. This is so that it can save additional information alongside the audio file, such as your bookmarks. When you copy an audio file in to the Library, Ferrite will automatically move it into the right folder once it has finished copying.

If you want to copy an audio file back to the computer, you can, but you’ll need to copy the right folder. The folder will be named the same as the original audio file, but with an extension added. For example, “My Recording.wav” will be stored in a folder named “My Recording.wav.ferrite-audio”.

When you copy this to a computer, you can open it up and you will find the original audio file (e.g. “My Recording.wav”) preserved safely inside. If you’re using an Apple Mac, you may find that the Finder treats the folder as a single file — if this happens, Ctrl+Click (or right-click) on it and pick “Show Package Contents”. This will open the folder so you can access the files inside.

## Viewing History

If you have a project open and hold down the 

Done

 button in the toolbar, you will enter History. This lets you view earlier versions of your project — like a “Super Undo/Redo”. When you enter History, the editing area floats away a little, and you can’t make changes to the project. You can still pan around, zoom in and out, undo and redo, move the Play Head around, and of course listen to your project.

You’ll also see the History Line. This represents the time you’ve been working on your project. You should see a highlighted circle with a date and time above it. This is the Current Version being shown in the editor. If you tap Undo or Redo, you’ll see it move back and forwards along the History Line, and the date and time updates to reflect when that version was made. You can also drag the Current Version marker, or tap anywhere in the History Line to jump straight to the nearest version.

For example, if you started your project last week, made some changes today, but aren’t sure if you like the new version or the old version better? Enter History, drag the Current Version marker until it shows last week’s date, and tap Play to listen to the older version. Jump back and forward comparing them, and decide which you prefer.

When you’re finished with History, just tap the Done button again and everything will be restored to normal. If you do this while an old version is selected, it will ask you if you want to go back to the most recent version (your latest changes), or if you want to Undo all the way back to the version you’ve selected.




**Warning:** Remember that if you Undo, then make changes, your new changes overwrite the old ones, so you can no longer Redo to get them back. With regular Undo/Redo, this is pretty much always what you want. With History’s “Super Undo”, you should be more careful as you could lose quite a bit of work this way. It’s safe to look through History as much as you like, but you should only “Super Undo” if you’re sure you don’t want to keep the changes you’ve made since then.






**Tip:** You can make a copy of a project by selecting it in the Library, tapping the 

Share

 button, then picking 

Duplicate

. Since projects never change the original audio recordings they use, it doesn’t need to copy them, only the project itself, so this is fast and doesn’t take up much space.

The duplicate retains the entire History of the project, up to the point where you made the copy. After that point, they are now independent and you can edit or undo/redo changes to one, without affecting the other. This is another good way to try out changes that you’re not sure about.




## Archives

*   Project archives are only available to paying customers

When you’ve finished your project and exported it as an audio file, what then? You can leave the project (and the audio files it uses) in your Library, but eventually you may want to reclaim the storage space they take up. On the other hand, if you delete them, it will make it difficult, if not impossible, to make new versions of your project later.

This is where Archiving comes in. Ferrite can create an Archive: a “.zip” file that contains a project and all of the audio files it uses. You can move this archive off your device — perhaps 
onto a desktop computer
, or saving it to a cloud storage service like Dropbox. Once the Archive is safely backed up somewhere, you can delete the files from your device, and get your storage space back.

Then, if you ever do need to make a new version of the project in future, you can simply import the Archive back into Ferrite (using iTunes App File Sharing, or Ferrite’s Import Audio command) and unpack it. This will restore the audio files, and the project (including its full 
editing history
) for you to edit.

To make an Archive, tap on a project, tap 

Share

, then tap the 

Make Archive

 icon in the sharing panel. Ferrite will take the project, and all of the audio files it uses, and pack them into a single Archive file which will then appear in your Library.

    You can select it like any other item in your Library. Unlike an audio clip or project, you can’t listen to it or edit it, but you can get info about it, share it, or delete it, as you would for any other Library item. Instead of an 

Edit

 button, there’s a button to 

Unpack Archive

, restoring the contents to your Library.

If you open the 

Info

 panel for an Archive, it will list the contents. You can select and unpack individual items, for example, if you only want to restore one audio clip from an Archive.




**Note:** Archive files can be very large. Although the Archives are compressed (losslessly), because Ferrite already compresses audio, they will typically still take up about the same amount of space as the originals. So you will need at least that much space free to make an Archive — making it better not to wait until your device is full before making Archives out of old projects!

For safety, we recommend checking to make sure your Archives have been backed up securely to another location before you delete your files or Archives from your device.




### Quickly Sharing Archives

As a shortcut, if you have a project on one device and want to send it to another — as a project, not an audio file — you can use the 

Share Archive

 command. This will make a temporary archive of the selected project, re-open the sharing panel so you can share it, then remove the temporary archive (your project is not affected).

## Templates

*   Project Templates are only available to customers who have purchased the Ferrite 2 Pro upgrade

If you produce a podcast, or something else where you regularly create projects that are part of a series, season, or show with a particular format, Project Templates can save you time.

If you create a template for that show, then when you’re ready to make a new episode, a single tap will make the project for you automatically, set up just the way you want it. You can also store 
Presets
 in a template, for convenient access while editing projects made from that template.

A template is similar to a project. In fact, you start by making an example project to show Ferrite what it should look like, then convert it into a template. To convert a project into a template, open the 

Project Info

 panel for it, tap the 

Tools

 button in the top-left corner of the panel, and pick 

Make Template

.

Alternatively, select the project, tap the 

Share

 button, then tap 

Make Template

 in the Share Sheet.

Usually, you would want your templates to contain only the elements that are constant from episode to episode — the theme tune, for example, along with the settings like the cover art, author, copyright notices, etc. You can edit templates after you create them, so a good way to start is to take the most recent episode of your show, make a template from it, open the template up (by selecting it and using the 

Edit

 button, same as you would for a project), then delete anything you won’t be reusing.

Next, open up the 

Template Info

 editing panel. This is similar to the Project Info panel, but with some extra features.

The Template Title at the top of the page is the name used for the template when it’s shown in the Library, but all the other info will be used to fill in the details of a new project, when you create one from this template.

### Creating New Episodes

When you look at a template in the Library, in place of the 

Play

 button you’ll instead find a 

New Episode

 button. Tap this to create a new episode from that template. It will contain any tracks, audio, automation, effects, chapters and other settings stored in the template.

    You can also have audio files inserted into a project when you create it: tap the 

Select

 button first, then select the audio files you want to insert, then tap the 

New Episode

 button.

The audio files you selected will be inserted into the project in the order that you selected them. Each audio file is placed on a separate track. If your template contained blank tracks, these will be used. If there aren’t any blank tracks (or they run out), new tracks will be created, until you reach the track limit for the project. Additional audio files beyond this point will be ignored.




**Note:** For a track to be considered “blank”, it mustn’t have any audio clips on it. But it _can_ have effects or automation applied, so you can build templates with your tracks set up the way you want them, and have audio dropped straight in to them when you create a new episode.




### Placeholders

In the Template Info panel, when you edit the episode title, subtitle, filename, link, copyright notice or notes, you can fill in Placeholders. These are markers that indicate where different information will be filled in later for each episode — for example the episode number or the air date.

When you create a template from a project, Ferrite will look at the title of the original project, and try to spot the episode number and date, if present, and put Placeholders there for you automatically. If it guesses wrong, you can add, remove or change Placeholders to customise them to your taste.

You should see buttons for them at the top of the on-screen keyboard (or the bottom of the screen, if you have a hardware keyboard connected). Tap these to add a Placeholder at the cursor. The Placeholder shows what type it is, then an example of the text that will be filled in. This example will be replaced by the real episode number, air date or other info when you create each episode.

You can tap on the Placeholder to change which type it is. If you tap on the example text, you can change the way it will be presented (for example, the format of the date, the number of digits in the episode number, or whether other text is converted to upper or lower case, or left alone). You can delete Placeholders the same way you would delete any other text in the text field.

When you create a new project (episode) from the template, it will ask you to fill in the information used by the Placeholders. It will only ask you for information that’s actually used, and it will only ask you once no matter how many times the info is used in the template. Depending on how you format your episodes, this means you may be able to fill out most episode info automatically.

There are three Custom Placeholders — these are short pieces of text you can use for anything you like. For example, if you produce an interview show, you might decide to use one of the Custom Placeholders for the guest’s name, and then fill it into the title, show notes, etc. You can also paste in the contents of the clipboard, if it contains text when the episode is created (otherwise, the Clipboard placeholder will be skipped).

## Presets

*   Presets are only available to customers who have purchased the Ferrite 2 Pro upgrade

Presets allow you to save the settings for various Ferrite features, such as 
Ducking
, 
Strip Silence
, 
Tighten Audio
, 
Effects
 and 
MP3 Chapters
.

You can create multiple presets for each feature and give them names, then load them back in later for quick re-use.

Each of these features has a 

Folder

 button — tap this to open the Presets browser for that feature. This lists the available presets, and an 

+
 Add
 button to save a new preset.

You’ll be prompted for a name for the preset. If you’re signed in to iCloud and Ferrite has permission to access it, you can also choose to save the preset to iCloud Drive so that it will be available on other devices.

Or, if you’re editing a project that was 
created from a Template
, you can instead choose to save the preset into the Template.

If you do this, the preset will only appear in other projects created from the same Template, and will be shown at the top of the list for quick access — handy for chapters used in a particular podcast, or effects you always use in a particular show.

To remove a preset you no longer want, swipe across it from right-to-left to reveal the 

Delete

 button. This also reveals a 

Folder

 button which allows you to rename a preset, or move it (e.g. from inside a Template to On My iPad).




**Note:** Ferrite supports “plug-in” effects in the form of 
Audio Unit Extensions
 (AUX). Ferrite&nbsp;2&nbsp;Pro can save presets for AUX effects, providing they support it — AUX effects are not part of Ferrite, and some AUX effects might only support built-in presets that are part of the effect itself, or may ignore custom presets.




## Tagging

Tagging is a way to organise your Library. It works by attaching one or more “tags” to recordings, imported audio or projects. Tags are just short text labels — the text can be whatever you like (including emoji!). When you want to find something again, you can ask Ferrite to hide everything in the Library that _doesn’t_ match certain tags. How you use this feature is up to you, but some suggestions:

*   You could tag audio according to what kind of content it is: music, interviews, voice-overs, adverts, special effects
*   You could tag audio and projects according to the project they belong to, for example, a particular radio show or podcast, or specific episodes
*   You could tag recordings with the names of people who appear in them
*   You could tag items with their status, such as “work in progress”, “finished”, “broadcast”
*   You could tag different “takes” of a recording with which ones you like the most or least.

You can associate more than one tag with an item, and you can search for more than one tag at a time — this will only show items with _all_ the tags. So you can quickly find (for example), all the interviews, that have been finished, featuring Alice and Bob.

Whenever you are viewing the info for an item in the Library, there will be a section for editing tags. First, it will list the tags that apply to the item (if any). Simply tap one to remove it from the item.

Next, there is a space for you to type in new tags. If you have a lot of tags, you can also use this to locate a tag quickly — as you start to type, it will only show tags matching what you’ve typed so far. When you tap the Return key on the keyboard, the tag will be attached to the item (unless the item already had that tag, in which case it will be removed).

Finally, there will be a list of all the tags that are not currently attached to the item, but are used on other items in your Library. You can simply tap one to also apply it to this item.

Searching for items using tags is easy: in the 

Search

 box at the top of the Library, tap the 

Tag

 button (it’s only shown when you have applied tags to items) and it will show all the tags used anywhere in your library. Tap a tag to add/remove it from the search list. Items will only be shown in the library if they have those tags attached.

### Colours

*   Assigning colours to tags is  only available to paying customers

    You can also assign colours to tags in the 
Settings
. The “Tags &amp; Colours” section shows a list of all the tags, with a colour next to each one, or a dotted empty circle if no colour is assigned. Hold your finger on the circle/colour to pop open the colour selector, then drag to adjust. Or, with the colours open, slide your finger to the right to remove the colour from that tag.

You can also tap the Edit button to change the order of tags: since an item can have many tags assigned to it, sometimes Ferrite has to choose which colours are the most important, and it uses this list to decide — you can move important items up, and unimportant ones down.

You can also set where the tag’s colours are shown: in the Library, during editing, or both. If enabled, then:

*   In the Library, the four most important colours will be used, shown as stripes down the left-hand edge of the item.
*   While editing, the most important colour is used to tint the audio clip.

## Drag And Drop




**Note:** Due to iOS limitations, system-wide Drag and Drop is currently only available on iPad.




You’ve always been able to move audio clips around inside your projects using Drag and Drop, and still can. But since iOS 11, Drag and Drop was expanded across the system, allowing you to drag many kinds of things, not just within an app, but from one app to another. Ferrite Drag and Drop features include:

### Library (Drop)

*   You can drop files — audio, project archives, etc — into the Library to import them into Ferrite. If you drop several at once, they will all be selected, ready to create a new project from them.
*   You can drop an image onto a project to set it as cover art.

### Library (Drag)

*   All types of Library item — audio, projects and archives — can be dragged out to another app, to save/export them there.
*   Archives are always copied as .zip files.
*   In the free version of Ferrite (or if you haven’t changed the settings) audio and projects are copied as Lossy (AAC .m4a) files.
*   In the paid version of Ferrite, audio and projects are copied using the 
sharing format
 you have selected in the Settings, as long as the app you’re dropping it in accepts that format. Otherwise, Ferrite will use the highest-quality format accepted by the destination app.

### Project Editing

*   You can drop audio into the project editing area to simultaneously import it into your Ferrite Library and insert it into the project.
*   If you tap Import to show the Audio Library, you can also drag audio from the Library straight into the editing area.
*   Drop audio into a track to insert it at a particular spot on that track. If you dragged multiple files, they will be inserted one after another.
*   Drop audio into the area below the tracks to create a new track for the audio. If you dragged multiple files, they will either get a track each, or they can be pushed together onto one track, by dragging them close to the existing tracks.
*   You can drop a project into another project (but not into itself). Whenever you do this, the dragged project is “bounced” to a new audio file in your Library (in your chosen Sharing Format), and that audio file will be included in the target project.

### Project Info

*   You can drop text, links and images into the appropriate sections of the Project Info view.

### MP3 Chapters

*   You can create a new chapter — or update an existing one — by dropping text, links or images onto the Time Bar along the top of the screen.
*   You can also update a chapter in the Chapter List by dropping text, links or images onto it.
*   You can also drop text, links or images into the appropriate sections of the Chapter Details view.

## Accessibility: VoiceOver




**Note:** Accessibility features have changed in Ferrite&nbsp;2. Navigating around tracks should now be faster and easier.




Ferrite has extensive support for VoiceOver, Apple’s technology for asssisting users by speaking the screen contents out loud.

Much of the application, including the Library, recording, importing, exporting, project info and audio info screens, work pretty much the same way as the non-VoiceOver interface, but using the standard VoiceOver gestures to navigate, activate and cancel but with the same structure and features.

A small change in the Library is that audio, projects etc. do not use the toolbar when VoiceOver is active. Instead, after selecting an item, you can swipe up or down to pick a toolbar command (Edit, Info, Share, Delete), then double-tap to activate it.

The Editing screen is the most complex part of the application, and this is where the majority of the differences are in the VoiceOver interface. The same screen elements are used, but with VoiceOver adaptations. Here’s a list of the elements you’ll find in the VoiceOver interface, in the order they appear, along with how they have been adapted:

1.  The Ruler: Speaks the time range that is currently on-screen. Swiping up or down zooms the time range in or out. When you adjust other elements (e.g. the Play Head, or moving, fading or cropping audio clips), the rate of adjustment depends on the zoom level: the more zoomed you are, the finer control you will have, while if you are zoomed out, then you can make larger changes more quickly.
2.  The Play Head: Speaks the current time where playback will resume. With VoiceOver, this is also used as the time at which many editing commands are carried out. Swiping up or down adjusts the time. Double-tap to jump to a specific time by dialing in the hours, minutes, seconds and hundredths of a second.
3.  The Selection (optional): If you have any audio clips selected, then the next item represents the selection as a whole. Double tap to open the standard selection menu with Cut, Copy, Delete etc. Or swipe up or down to select additional commands, allowing you to move the selection earlier or later in the timeline, or clear (deselect) the selection.
4.  Next, each track is listed in turn. If you have automation tracks, they will also be in this list, placed after the audio track they belong to.
5.  Audio Tracks speak their position in the list, the number of clips that are currently on-screen, and the total number of clips on that audio track. They also mention if they are soloed or muted. Audio Tracks can have a lot of items on them, so you can use the “Tracks” Rotor to skip directly to the start of each track.
6.  Audio Track Items:
7.  The Track Tools button: Opens the 
standard menu of commands
 for the track.
8.  Volume and Pan controls: These can be adjusted by swiping up or down. They will not be available if they have been automated — in this case, use the Automation Track to control them instead.
9.  Edit Point: Opens a menu of commands that apply to this track at the Play Head position, for example, splitting an audio clip into two parts. The commands available depend on context, for example, if the Play Head is not positioned inside an audio clip, you won’t be able to split.
10.  Audio Clips: The rest of the track consists of the Audio Clips contained within the screen range, as described by the ruler. Double tap to add or remove a clip from the selection. Swipe up or down to choose a command to apply to the clip. Most commands require the clip to be selected first. Audio Clip editing is described in more detail below.

Automation Tracks: Automation Tracks speak the track and parameter they control, along with the number of 
Control Points
 currently on-screen. Next, there will be an item to insert a new Control Point into the track. This creates a new Control Point at the Play Head position, so it only appears if the Play Head is on-screen and not already pointing at a Control Point. Finally, there will be the on-screen control points.

Swiping up or down adjusts the Control Point’s value. Double-tap, and instead, swiping up and down will select different commands. You can delete the Point (as long as it isn’t the last one on the track — a track must always have at least one Control Point), return to editing its value, or edit its time, swiping to nudge it along the timeline.



Final Mix: Placed below all the audio tracks. Double-tap to open the 
Final Mix
 menu. Final Mix Automation tracks will be placed after it, these work the same way as other automation tracks. If you’re editing a 
template
 this menu will be renamed Template to match, but it works the same way.


At the end are the standard button commands: Add New Track, Import Audio, and the toolbar buttons.




### Editing Audio Clips with VoiceOver

When you have an audio clip selected, and focused by VoiceOver, you can swipe up or down to select an action: Move, Crop Start, Crop End, Fade In, Fade Out, and Menu.

Double-tap to activate a command. In the case of Menu, this opens the regular editing menu. The others are special.

When you select Move, Crop Start, Crop End, Fade In, or Fade Out, they will also speak the relevant information: the duration of the fade in or out, the amount of cropping applied to the beginning or end, or the position of the clip on the timeline. Double-tap to put the clip into the selected editing mode. Double-tap again to return to the list of commands. When an editing mode is selected, swipe up or down to adjust the amount of cropping or fading, or to move the selection.

### Input Level Monitoring with VoiceOver

You can enable audio feedback on the current recording levels, providing you have headphones connected (otherwise the feedback could itself be picked up by the microphone). Activate the input source (e.g. iPad Microphone) to toggle this feature on or off.

When enabled, if your recording level is too high and the recording gets clipped, a half-second chime will sound at 880hz (an A in octave 5). For other levels, short tones will sound in different octaves, representing different decibel ranges: -3dB to 0dB is 440hz, -6dB to -3dB is 220hz, -9dB to -6dB is 110hz. Below that, no tone is sounded. The feedback only plays when the level crosses the threshold, not continuously. You can also use up/down swipe gestures to select Clipping Only mode, which only plays feedback when audio clips, not when other thresholds are crossed. And of course, you can simply enable headphone monitoring and listen to the audio yourself if you prefer!

### Other VoiceOver Editing Features

You can use the “Magic Tap” gesture (a two-finger double-tap) to start or stop playback.

You can also use the “On Pause:” Custom Rotor to change what happens when you stop playback. The default mode, “Stop”, simply stops playback as you would expect. The other mode, “Rewind” will reset the Play Head to the position it was at, before you started playing audio. This can be useful if you started playback so you could hear where the Play Head was positioned, and want it to go back there.

    If you have a Bluetooth keyboard attached, you can also use the 
⌥ alt
 
Space Bar
 shortcut to pause-and-rewind. More on keyboard shortcuts is available in the chapter 
Shortcuts, Gestures and Keyboard Commands
.

### VoiceOver Settings

You can slightly customise the way Ferrite speaks times and durations. Normally, it adjusts the amount of detail according to the zoom level, to match the amount of detail you can edit at that zoom level. For example, when zoomed out to a range of one hour, it doesn’t normally bother announcing the number of seconds and milliseconds. However, if you prefer to always have times spoken in full, you can enable this in the Settings. Then, Ferrite will read down to the millisecond level regardless of zoom. It will still skip unnecessary parts, for example, if your project is only 15 minutes long, it will not prefix every timestamp with “zero hours”, or if you line something up exactly at the start of a minute, it will not speak “zero seconds zero milliseconds”.

## Shortcuts, Gestures and Keyboard Commands

Ferrite is optimised for multitouch control (and you can enable and customise 
additional editing gestures
 too), but you can also enable an on-screen 
Shortcut Bar
 that provides quick access to editing commands.

If you have an external keyboard connected, many commands are also available as keyboard shortcuts.




**Note:** These are the default keyboard shortcuts. If you are using a paid version of Ferrite, you can pick alternative schemes — these are designed to be familiar to users of popular desktop audio editing apps, where possible (other apps may not support the same features as Ferrite, or their keys may not be available on all keyboards, so these schemes are approximations).

You can also customise a scheme by tapping a command in the list, then pressing the key combination you want to use. Some key combinations are reserved by iOS for its own use, so you may not be able to use them.

To change or customise the scheme, or see a complete list of the keys for each scheme, visit the 
Settings
 and pick “Keyboard Shortcuts”.




### Library







↑
 &nbsp; 
↓




Select previous/next item in the Library







⌘ cmd
 
A




Show All items in the Library, if some have been hidden







⌘ cmd
 
Delete




Delete the selected item







⌘ cmd
 
E




Share (Export) the selected item







⌘ cmd
 
F




Select the Search text box (Find)







⌘ cmd
 
⌥ alt
 
F




Show the Filter menu







⌘ cmd
 
I




Show Info for the selected item







⌘ cmd
 
⌥ alt
 
I




Import Audio







⌘ cmd
 
N




Create a new episode from a Template







⌘ cmd
 
O




Edit (Open) the selected item







⌘ cmd
 
R




Start/stop recording







⌘ cmd
 
S




Enter/leave Select mode







⌘ cmd
 
T




Show the Tools Menu







⌘ cmd
 
U




Unpack a selected archive









### Navigating Projects







←
  

→




Rewind/Fast Forward a short distance — the amount depends on how zoomed in you are







⌥ alt
 
←
  

⌥ alt
 
→




Step the Play Head backwards/forwards by the smallest amount visible (for the current zoom)







⌘ cmd
 
←
  

⌘ cmd
 
→




Jump the Play Head backwards/forwards to the next audio clip or bookmark, the same as the Rewind/Fast Forward buttons on the toolbar







⌘ cmd
 
⌥ alt
 
←
  

⌘ cmd
 
⌥ alt
 
→




Jump the Play Head to the beginning or end of the project







⌘ cmd
 
J




Jump the Play Head to a specific time







Enter




Zoom in on the selection







⌘ cmd
 
Enter




Zoom out to the project’s duration







+




Zoom in on the Play Head by one step







−




Zoom out from the Play Head by one step







Tab




Jump to the Play Head







Space
  

⌥ alt
 
Space




Play/pause

Holding Alt when pausing will return the Play Head to its previous position









### Editing Projects







⌘ cmd
 
S




Close the project and return to the Library







⌘ cmd
 
I




Pop open the Library to import audio into the project







⌘ cmd
 
Z
  

⌘ cmd
 
⇧ shift
 
Z




Undo/Redo







⌘ cmd
 
⌥ alt
 
Z




Enter/Leave History







⌘ cmd
 
A




Select All audio clips







⌘ cmd
 
D




Deselect All audio clips







⌘ cmd
 
F




Select All audio clips following the currently-selected one, on all tracks







⌘ cmd
 
⌥ alt
 
F




Select All audio clips following the currently-selected one, same track only







\




Toggle automation nodes in or out of the selection







⌘ cmd
 
T




Split the selected audio clips at the Play Head position







⌘ cmd
 
X




Cut the selection to the pasteboard







⌘ cmd
 
C




Copy the selection to the pasteboard







/




Move the selection to start at the Play Head position







⇧ shift
 
←
  

⇧ shift
 
→




Move the selected audio clips a short distance







⇧ shift
 
⌥ alt
 
←
  

⇧ shift
 
⌥ alt
 
→




Move the selected audio clips by the smallest amount visible (for the current zoom)







[
 &nbsp; 
]




Crop the beginning (
[
) or end (
]
) of the selected audio to the Play Head. If the Play Head is outside the selection, it will instead get uncropped, either to the Play Head, or until reaching the original start/end of the audio, whichever comes first.







⌥ alt
 
[
  

⌥ alt
 
]




Ripple Delete from the beginning (
[
) or end (
]
) of the selected audio to the Play Head.







⌘ cmd
 
⇧ shift
 
X




Crop any audio clips that overlap the selection (removing crossfades)







⌘ cmd
 
E




Open the Selection “Share…” menu (Export Selection)







⌘ cmd
 
⇧ shift
 
E




Share all the selected clips as a single audio file







⌘ cmd
 
⇧ shift
 
⌥ alt
 
E




Export all the selected clips as separate files









### The Shortcut Bar

    The Shortcut Bar provides quick access to common commands. These commands are all available in other ways, so the Shortcut Bar is switched off by default, but you can enable it from the 
Settings
, or by tapping the Time Display and enabling it from the pop-up menu there.

From the Time Display options menu, you can also customise the Shortcut Bar. This opens a panel containing all the Shortcut Bar commands, and you can drag the ones you want into the Shortcut Bar, or drag ones you don’t want out of the bar. The bar has three areas you can drop commands onto, allowing you to group commands on the left, in the centre, or on the right, in the order you prefer.

### Editing Gestures

If you like, you can enable some shortcut gestures in the 
Settings
 to speed up editing, based around using two fingers at a time on the screen. When enabled, you can:



Tap with Two Fingers




You can choose what this does:

*   Start playing/pause playback
*   Zoom in to selection/zoom out to entire project



Drag from Left to Right with Two Fingers




Drag out a selection range. All the audio clips inside the range will be selected. The selection isn’t emptied first, so you can repeat the gesture to add more clips from another location. Or tap on the background first to clear the selection, if that’s what you need.




Drag from Right to Left with Two Fingers




Drag out a selection range to be immediately deleted. After the audio clips inside the range are removed, you’ll be given the chance to 
Ripple the delete
 as usual (unless you’ve disabled Ripple in the 
Settings
.






If you forget the gestures, just place two fingers on the screen. A circular pop-up menu will appear, centred on your fingers — as you slide your fingers left or right, Select or Delete mode will be activated as you pass over the appropriate icon, and you can just keep on sliding your fingers to drag out the time range.

In all cases, your fingers need to be fairly close together and move together — at least at first — so that you don’t zoom in or out instead.

### Audio Snapping Selections

    If you two-finger drag to select or delete, but the entire range is inside one audio clip, Ferrite will “snap” your selection to the edges of the sound. So for example, if you drag across a sentence, it will “shrink to fit” neatly around the sentence, cut the audio at both edges, and select or delete that sentence. Drag inside the sentence, and it will expand to select all of it. To avoid confusion, the amount of detail Ferrite will consider when snapping, depends on how zoomed in you are — it will ignore gaps in the sound too small for you to see, so you can use the zoom level to control the behaviour.

### Apple Pencil™

If you have an Apple Pencil paired with your device, you can use it for editing. Normally, the Pencil is treated exactly the same as a finger, so you can use Pencil or fingers and switch between them as you wish.

    Ferrite also has a custom Pencil Editing mode — you can find this in the Gestures &amp; Pencil section of the 
Settings
. When you switch this on, the Pencil is used for editing — slicing, moving, cropping and fading audio — while fingers are used for zooming in and out, and moving your viewpoint around the project.




**Note:** This setting only affects how audio clip editing and automation editing work. It does not affect other aspects of the user interface, such as buttons, dials, and lists — you can still use your fingers and your Pencil interchangeably outside of the audio editing area.

If your Pencil becomes unpaired, or if you haven’t used it recently, Ferrite will temporarily ignore this setting, allowing you to use fingers to edit as normal. The next time you tap the screen with the Pencil, your Pencil preferences are automatically restored.




With Pencil Editing on, you can also enable some gestures that can help speed up editing. These work similarly to the 
Two Finger Editing Gestures
: you can enable swiping across audio with the Pencil to select or delete multiple clips, or to pick out time ranges within a clip. Because the Pencil is much more precise than using two fingers on the screen, edits using the Pencil don’t snap to audio, they slice exactly where you place the pencil tip.

If you only enable one of the gestures, it doesn’t matter which direction you swipe, your chosen action will be performed.

If you enable both Select and Delete gestures, you swipe from left-to-right to select things, and swipe from right-to-left to delete things.

#### Apple Pencil Double-Tap

Newer models of Apple Pencil support double-tapping on the side of the pencil to trigger a shortcut. If you have one of these Pencils, and have enabled the gesture in the system settings, you can set the action you want Ferrite to perform:



Zoom




Toggles between zooming in to the current selection, or zooming out to the entire document.




Play / Pause




Starts or stops playback.




Pencil / Finger




Toggles Pencil Editing on or off — in other words, switches between the Pencil using the special Pencil-editing gestures, or behaving the same way finger-touches do.




Custom




You can pick any 
keyboard shortcut







You can also switch this off if you don’t want Pencil double-taps to do anything in Ferrite.

## Settings

*   Settings marked 
Pro
 are only available to customers who have purchased the Ferrite 2 Pro upgrade

Some settings are only available if you are using iOS 13/iPad OS 13 or later.

### Recording Settings



Recording Format




Sets how Ferrite stores the recordings you make. See the section on 
Compression and Sharing
 for more information about this.




Stopping Recording




You can choose how Ferrite behaves when you tap to stop recording. Normally, your recording is immediately added to the Library. You can choose instead for the recording to be paused. You can then continue recording by tapping the record button again, and repeat this as often as you like.

Each time you continue, a Bookmark is added to the recording where you resumed. When your recording is finally complete, you can tap the “checkmark” (iOS 12) or “Save” (iOS 13) button to confirm that you’re done, and the recording is added to your Library.




Large Recording Level Control 
Pro





Most of the time, you want to set the input level before you start a recording, and leave it where it is for the duration. However, some people prefer to “ride the levels” — continuously adjust the input level during a recording, usually with headphones on to monitor the results. If this is how you roll, enabling this will add a large slider to the screen during recordings, for controlling the recording level. You can place it on either side of the screen. Note: if you’re recording through a device that doesn’t support input gain control, this slider will not appear.




Layout (iPad Only) 
Pro





When you start a recording, the recording controls usually take over the whole screen (“Full Screen” mode). If you prefer, you can select “Compact” mode, which leaves the rest of the screen available for use. “Automatic” switches between Full Screen and Compact depending on which window you are in: the window that started the recording uses Full Screen mode, but if you open additional windows, they will use Compact mode.




Headphone Monitoring 
Pro





When using headphones to monitor during a recording, Ferrite normally reproduces stereo audio the same way it would be played back, with the left channel in the left ear, and the right channel in the right ear. For stereo recordings, this is what you want, but if you’re recording two mono mics (for example, one for the host, one for a guest), it can be distracting to have one voice in each ear.

Select “Mono” and when you monitor stereo recordings, they will be mixed down to mono before being sent to the headphones (the recording itself would still be stereo, unaffected by this setting). Select “Stereo (Reduced)” to play in stereo, but with the panning moved in towards the centre for a more natural sound, where you can still hear the stereo separation but it isn’t as extreme. Select “Stereo (Full)” to return to normal operation.




**Tip:** You can quickly access this setting from the recording screen by holding down the headphones monitoring button.






Allow Channels To Be Switched Off 
Pro





If you want to be able to permanently omit channels from a recording, switch this on. See the 
Pro Recording
 section for information on using this feature.




Calibration 
Pro





This changes the way the recording level meters work. In “Classic” mode, they display linear dB meters peaking at 0&nbsp;db. In “Non-Linear” mode, the display is adjusted slightly to provide more detail in the “sweet spot” between -﻿3&nbsp;dB and -﻿6&nbsp;dB.






### Editing Settings



Ripple Insert / Delete




If you never want Ferrite to ask you if you want to 
Ripple Insert And Delete
, you can switch off that feature here.




Overlapping Audio




When two pieces of audio are overlapped on a track, Ferrite will crossfade between them. If you prefer, you can change this so that Ferrite will crop the audio underneath, so that the piece you are moving “replaces” the audio you drop it onto.




After Splitting Audio




When you have audio selected, and split it in two (either using the menu or gesture), the pieces normally all stay selected. If you prefer, you can change this to clear the selection, or keep selected only the pieces before the split, or after the split. Depending on how you prefer to edit audio, this can speed up your editing.




**Note:** Ferrite will do the crop in two steps, first moving and crossfading as normal, then applying the crop. In this way, if you mostly want to crop, but occasionally need a crossfade, you can simply tap Undo once after the crop to restore the fade. Also, if you have two pieces of audio that are already crossfaded, if you select them both and move them together, Ferrite will preserve the fade.






Allow Volume to Go Over Maximum




The volume controls on tracks are normally limited to the range 0%&nbsp;→&nbsp;100% (-﻿∞&nbsp;dB&nbsp;→&nbsp;0&nbsp;dB), where the maximum is the original recorded audio at its loudest without clipping. If you enable this setting, you can “overdrive” the track gain, so you can make the audio louder than it originally was.

However, where the audio was already at maximum volume, you’ll have now driven it past the maximum and this will be clipped. This can sound really bad, which is why the option is off by default. The “danger area” of the dial is marked in red; you can go right up to the edge of this area safely (the dial will “click into place” at the maximum safe level) without fear of clipping, but if you go into this area, you may clip.

You _can_ avoid the clipping if you’ve cut out the loud parts of the audio, or faded them, or applied some other effect to reduce the volume — so you can enable this setting if you know what you’re doing!




Automation




Opens the panel for customising how automation is edited 
described below





Show Shortcut Bar




Lets you switch the customisable 
Shortcut Bar
 on or off.




Keyboard Shortcuts




Lets you view and edit the current set of 
Keyboard Shortcuts
 including searching, switching to alternate schemes, or customising your own scheme.






### Gestures, Pencil 
&amp;
 3D Touch



Gestures (or Gestures and Pencil)




Opens the panel for configuring gestures and (where supported) 3D Touch and Apple Pencil.




Two Finger Gestures




These optional shortcut gestures are described in the 
Editing Gestures
 section of the 
Shortcuts, Gestures and Keyboard Commands
 chapter of the guide. Tap to configure the gestures you want to use.




3D Touch




Only available on devices that support 3D Touch, these settings enable you to turn off some or all of Ferrite’s 3D Touch responses, if you find yourself triggering them by accident:



Use to Prevent Snapping




When dragging an audio clip, if Ferrite snaps your changes to a neighbouring clip, and you’re trying to make fine edits, you can press more firmly to disable this feature. It will stay disabled until you let go of the clip, or move it away from the position it’s snapping to. (On devices without 3D Touch, you can instead zoom in using the usual Pinch To Zoom gestures to get finer control).




Use for Shortcuts




In various places in Ferrite there are buttons which have extra features if held down for a while. Usually the command is “the same, only more”. For example, tapping Rewind moves the Play Head back one clip, holding it moves the Play Head all the way to the start. With 3D Touch you can activate the secondary command by pressing the button firmly.








Pencil Editing




Only available when an Apple Pencil is paired, this allows you to switch 
custom Apple Pencil support
 on or off, and customise additional Pencil editing gestures.






### Other Settings



Sharing Format 
Pro





This sets how Ferrite shared audio with other apps. See the section on 
Compression and Sharing
 for more information about this.




Tags &amp; Colours 
Pro





Allows you to assign colours to tags, and control where those colours appear. See the 
Tagging
 chapter for more details.






### Automation Settings 
Pro


Here, you can set whether 
Automation
 uses continuous curves or straight lines.

You can also customise whether automation Control Points are included when you perform certain editing actions on the audio clips they’re lined up with:



Automatically Select




Controls whether automation gets included when you use commands like Select All On Track or Select All Following to select multiple pieces of audio at once. Note: this setting doesn’t affect what happens when you just tap on a single piece of audio to select it.




Drag Select/Delete With Audio




Controls whether automation gets included when you use either the 
Apple Pencil™
 or 
Two Finger Editing Gestures
 to select or delete audio clips, and then extend the drag across automation tracks as well.




**Note:** Even when this is switched off, you can still drag to select/delete automation, providing you start dragging from the automation track itself, instead of an audio track.






Include in Ripple Insert/Delete




Controls whether automation gets moved when you Ripple an insert or delete on an audio track.






All these settings have three options:



Never




Switches them off entirely.




When Shown




Switches them on or off to match the current Show Automation setting.




Always




Affects automation even when it’s hidden.






## Bluetooth

When you pair Bluetooth speakers or headphones with your device, they can use several different methods to send audio back and forth. Some methods offer good audio quality, but don’t support microphone input. Others support microphone input, but are designed for telephone calls only, so the quality is poor.Ferrite is an app for _both_ recording _and_ playback, but since Bluetooth on iOS doesn’t support high-quality audio and microphone input at the same time, there are some things you need to be aware of if you want to use it.

### Latency

The first thing to note is that there can be a small delay (“latency”) while your device converts the audio into a format that Bluetooth headphones/speakers can understand, transmits it wirelessly to them, and then they decode it again. The amount of delay can depend on the kind of headphones/speakers you are using, and applies to all audio, from any app on your device.

When you’re just listening to music, it isn’t that noticeable since it’s typically just when you start/stop listening that you might experience a small delay. But it can be more annoying while editing, because you are likely to be jumping around a lot and needing to make fine adjustments. Unfortunately this is another problem of the Bluetooth standard outside of our control.

If you wish to use Bluetooth anyway, please read on:

As long as your speakers/headphones support the high-quality “A2DP” Bluetooth standard, you can use them with Ferrite **for listening only**. You don’t need to set any options in Ferrite, they should just work.

You won’t be able to record from them — even if they have a microphone. But you can record through another microphone, such as one connected via wires such as USB or Lightning.

## Audio Unit Extensions




**Note:** This feature requires a compatible device, and is still “experimental”. We’re releasing it so that the developers of Audio Unit Extensions can test their extensions for compatibility with Ferrite. If you find it useful, please go ahead and use it, but be aware that there are some known issues.




On compatible devices, when you open the Effects list, in either the Track menu or the Final Mix menu, you will see more than just the effects built in to Ferrite, you will also see “Audio Units” and “Audio Unit Extensions”.

Audio Units are similar to the built-in effects, but they are supplied by iOS itself. Audio Unit Extensions are supplied by **other apps** on your device. When you install compatible apps, their Audio Unit Extensions will appear in the Effect list in Ferrite, extending its power. If you remove those apps, the Extensions will also be removed from Ferrite.

Because these other apps are not made by Wooji Juice and may not even have been written when Ferrite was released, we can’t guarantee compatibility. When you add one to a track or the Final Mix, then tap on it to open the controls, **the controls that appear are supplied by the Audio Unit Extension**, not Ferrite. You should check the app that the Extension came from (or the website of that app’s developer) for instructions on how to use them.

Audio Unit Extensions mostly work the same way as built-in effects. You can add them to tracks and the Final Mix, adjust their settings, undo changes that you don’t like, and even automate their settings (providing the developer of the Audio Unit Extension hasn’t disabled this).




**Known Issues with Audio Unit Extensions:**

*   When you open an Audio Unit Extension’s settings panel and make changes, although you will hear the changes in the sound right away, those changes won’t get passed back to Ferrite until you tap Done. This means that the changes won’t be saved until that time, and Undo/Redo will apply to all changes made while the panel was open. This is due to a limitation of the Audio Unit Extension system in iOS.
*   For the same reason, you can’t live-record automation using the Audio Unit Extension’s own controls. You _can_ live-record automation using the dial supplied by Ferrite in the sidebar of the automation track, however.
*   Changes made using automation may not show up in the Audio Unit Extension’s controls. This is due to a bug in the iOS Audio Unit Extension system which we hope Apple will fix.
*   Some Audio Unit Extensions have presets. If you select a preset, you will hear the changes, but they may not show up in the controls. Again, this is due to a bug in the iOS Audio Unit Extension system. Preset changes should get saved, though, and support Undo/Redo.




## What’s New in Ferrite 2

Just updated to Ferrite 2? Welcome! We’ve cleaned and polished lots of things, but you can find them in the same places as before, so you should feel right at home.




**If you bought the Ferrite&nbsp;1 Pro upgrade, don’t worry — it still works with Ferrite&nbsp;2, with all the features you paid for.** If you’d like to upgrade to Ferrite&nbsp;2&nbsp;Pro, there are a bunch of new features: Multichannel Recording, Preproduction, Channels, Templates, the Equaliser, and improvements to Presets. Accessibility is also improved, and there are some other smaller improvements too.




### New: Multichannel Recording

**(Multichannel recording requires iOS 13 or later.)**

Ferrite 2.4 supports recording up to 8 channels at once. You can also switch off channels you don’t need, and change the way stereo and multichannel recordings are monitored through headphones.

### New: Preproduction and Channels

Ferrite&nbsp;2 introduces a new suite of tools for getting audio ready before you start using it in a project. Preproduction can be found in the 
Audio Info
 panel for an audio file.

Preproduction tools include:



Channel Selection




Ferrite&nbsp;1 supported mono or stereo audio files. Ferrite&nbsp;2&nbsp;Pro can also read tracks with three or more channels. Since podcasts and radio are themselves still only mono or stereo, Ferrite will use up to two channels at a time. But you can now pick which ones, allowing you to switch off unwanted channels, swap left and right channels, and so on.




Channel Splitting




Additional channels can be split out into new files, so if you have (for example) a 4-channel audio file, each representing a different person’s mic, you can use Channel Selection to pick the one to use for that Audio Library item, and split the other three out into new audio files, allowing all four to be independently edited in a project.




Auto Levelling




Ferrite&nbsp;1 supported Auto Levelling of projects during export. In Ferrite&nbsp;2&nbsp;Pro this is also available in Preproduction, to smooth out a recording’s levels before you begin editing.




Noise Reduction




Automatically analyses a recording to attempt to find and eliminate background noise. Not all noise can be removed, but background noise like the “hiss” commonly found in recordings can often be reduced.






Read more about 
Channel Selection and Splitting
 or 
Preproduction


### New: Templates

Project Templates speed up your work by automating some repetitive tasks. When you’re working on a project that’s part of a podcast or regular series, you’ll often add the same theme tune, dial in the same settings, fill in the same project details, and so on. Templates take care of this for you.

Templates start with an example project — for example, the most recent episode of your podcast. You can then turn it into a Template, and remove any elements that don’t belong (e.g. the conversation from that podcast), keeping the stuff that’s consistent from episode to episode (cover art, theme tune, etc).

You can set up Placeholders, so that the title, show notes, links, etc can have the date, episode number and certain other details automatically filled in for each episode. With a tap on the Template, a new blank episode can be put together — with everything set up, ready to go. You can also optionally pick some audio files to be included in the new project.

    
Read more about Templates


### Enhanced: Presets

In Ferrite&nbsp;1 Pro, you can save your preferred settings for tools like Strip Silence or Ducking into a library and recall them later. Ferrite&nbsp;2&nbsp;Pro adds several enhancements:

*   Presets can be stored in Templates for easy access within any project made from that template.
*   Or you can store Presets in iCloud, so they will sync between devices.
*   Or if you store Presets on your device, they’ll now appear in the Documents folder in iTunes for easy backup.
*   You can now rename your Presets, and move them from place to place (on your device, in iCloud, inside a Template).
*   And more features now support Presets, including Chapters and many third-party Audio Unit Extension (AUX) effects.

### New: Equaliser

Ferrite&nbsp;2&nbsp;Pro includes a new built-in effect, the Equaliser. This is a powerful multi-band (up to 8) fully customisable EQ unit, supporting visual editing, automation, and a live graphic visualiser during playback.

    
Read more about the Equaliser


### Other Improvements


Projects
 can now have an export filename. We can’t force other apps to use it, but Ferrite will suggest it when converting projects to audio files and sending them to other apps — it’s particularly useful if you’re sending a file to a cloud storage service, or uploading a finished episode to a podcast host for publication. If you don’t set the export filename, it defaults to the same as in Ferrite&nbsp;1: using the title of the project.

You can set the export filename for 
Templates
 too, and they supports Placeholders, so the filename can be automatically updated with the episode number or air date of an episode.

Both Templates and Projects can also set a custom file format to use when sharing audio. If you don’t set this, it defaults to using the one in the 
Settings
, so you only need to change it if you want a custom format per project, podcast, etc.

Individual 
MP3 Chapters
 can now be “hidden” — these are left out of the Table of Contents, but well-behaved podcast players will still display their artwork (and may caption it with the chapter title). Or, if you export your project as a video file, images from the chapter artwork will now be used there too. These tools allow you to create a slideshow to accompany your audio. Chapters can also be included in .WAV files (although this format only supports titles — not links, images or hidden chapters).

### VoiceOver Enhancements




**Note:** These VoiceOver enhancements are available to all VoiceOver users, whether or not they purchase the Ferrite&nbsp;2&nbsp;Pro upgrade.




The VoiceOver accessibility interface to Ferrite has been updated to take advantage of new iOS accessibility technologies that weren’t available when Ferrite&nbsp;1 was created. A track can contain many items, which could take a long time to navigate past. So, in Ferrite&nbsp;1, tracks could be “folded” or “unfolded” to hide or reveal their items. This allowed you to quickly skip past tracks, but could be confusing and introduce extra steps in the process.

In Ferrite&nbsp;2, tracks are always “unfolded” to reveal all of their items, but a new “Custom Rotor” allows you to skip from track to track with a single swipe. This should be faster to use as well as easier to understand and navigate.

You can also now change the behaviour when you pause playback, using another Custom Rotor, to choose whether or not to automatically rewind to where playback started.

    
Read more about VoiceOver Accessibility in Ferrite&nbsp;2





  





[𝗗𝗮𝘃𝗶𝗱 𝗕𝗹𝘂𝗲](https://davidblue.wtf/db.vcf)




