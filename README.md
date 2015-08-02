# AI-ResizeToArtBounds

What It Does
===

This is a script for Adobe Illustrator to resizes the artboard of the open document to the size of the art bounds. There is also a version that prompts for a folder, and resizes the artboards for all Illustrator *.ai files in that folder.

Why Do It?
===

The purpose of the script is to fix the common problem affecting many Adobe Illustrator files where the artboard is much larger than the art. This causes the preview to be tiny in applications and operating systems that base their prevew on the artboard size.

How to Install
===

Download the scripts "BatchResizeToArtBounds.js" and "ResizeToArtBounds.js". In Mac OS X, you would save them in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts. I believe they can also be used in the Windows version, but I don't know the location and I haven't tested them in Windows.

How to Use
===

**DISCLAIMER: I am a hobbiest, not a professional programmer. While I have tested these scripts on my own system, and am confident they work as described, there is always a chance of a bug.** Please test before using on important files, and be sure you have backups in case something goes wrong.

The scripts should appear in the Adobe Illustrator scripts menu after installation, File menu > Scripts. 

The Batch version prompts for a folder of \*.ai files, and will convert them all. **WARNING: It will run through all files without prompting and without a progress bar. If you have lots of files, it could take a while.**

The other version is meant to be run on the active document.

**IMPORTANT NOTE: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.**

Example
===

Mac OS X preview of AI image **before** artboard resize
![OS X preview of AI image before artboard resize](http://cl.ly/image/153x1w3H3c19/Screen%20Shot%202015-08-01%20at%208.34.40%20PM.png)

Mac OS X preview of AI image **after** artboard resize
![OS X preview of AI image after artboard resize](http://cl.ly/image/2W460L462L0K/Screen%20Shot%202015-08-01%20at%208.38.24%20PM.png)

