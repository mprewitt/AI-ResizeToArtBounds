# AI-ResizeToArtBounds

What It Does
===

This is a script for Adobe Illustrator. The purpose of the script is to fix the common problem affecting many Adobe Illustrator files where the artboard is much larger than the art. This causes the preview to be tiny in applications and operating systems that base their prevew on the artboard size. See "before and after" example images below.

The script **ResizeToArtBounds** resizes the artboard of the open document to the size of the art bounds. There is also a second script, **BatchResizeToArtBounds**, that prompts for a folder, and resizes the artboards for all Illustrator *.ai files in that folder.

How to Install
===

Download the scripts "BatchResizeToArtBounds.js" and "ResizeToArtBounds.js". In Mac OS X, you would save them in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts. I believe they can also be used in the Windows version, but I don't know the location and I haven't tested them in Windows.

How to Use
===

**DISCLAIMER: I wrote this script as a hobbiest. While I have tested these scripts on my own system, and am confident they work as described, there is always a chance of a bug.** Please test before using on important files, and be sure you have backups in case something goes wrong. The scripts come with NO WARRANTIES and no promise of technical support.

The scripts should appear in the Adobe Illustrator scripts menu after installation, under File menu > Scripts. 

The Batch version prompts for a folder of \*.ai files, and will convert them all. **WARNING: It will run through all files without prompting and without a progress bar. If you have lots of files, it could take a while.** Note that the conversion process saves back to the same files, _overwriting them_.

The other version is meant to be run on the active document.

**IMPORTANT NOTE: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.** Because this script is especially intended for fixing old stock images and other assets from back in the day when artboard size didn't seem to matter — which were mostly created prior to the multiple artboard feature — it shouldn't be a big problem. But you should be aware of it.

Example
===

Mac OS X preview of AI image **before** artboard resize
![OS X preview of AI image before artboard resize](http://cl.ly/image/153x1w3H3c19/Screen%20Shot%202015-08-01%20at%208.34.40%20PM.png)

Mac OS X preview of AI image **after** artboard resize
![OS X preview of AI image after artboard resize](http://cl.ly/image/2W460L462L0K/Screen%20Shot%202015-08-01%20at%208.38.24%20PM.png)

