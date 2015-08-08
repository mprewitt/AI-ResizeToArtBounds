# AI-ResizeToArtBounds

What It Does
===

This is a script for Adobe Illustrator. The purpose of the script is to fix the common problem affecting many Adobe Illustrator files where the artboard is much larger than the art. This causes the preview to be tiny in applications and operating systems that base their prevew on the artboard size. See "before and after" example images below. 

The script **ResizeToArtBounds** resizes the artboard of the open document to the size of the artwork (technically, the "art bounds" plus some padding). There is also a second script, **BatchResizeToArtBounds**, that prompts for a folder, and resizes the artboards for all Illustrator files in that folder.

(The script can also fix the same problem in [other types of files opened in Adobe Illustrator](https://helpx.adobe.com/illustrator/kb/supported-file-formats-illustrator.html), such as EPS, SVG, WMF, etc. This is a new feature, so please use with caution.)

How to Install
===

**Download**
* Download the scripts "BatchResizeToArtBounds.js" and "ResizeToArtBounds.js". 

**Install**
* Mac OS X: Save them in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts.
* Windows: I believe they can also be used in the Windows version, but I don't know the install location and I haven't tested them in Windows.

How to Use
===

**DISCLAIMER: I wrote this script as a hobbiest. While I have tested these scripts on my own system, and am confident they work as described, there is always a chance of a bug.** Please test before using on important files, and be sure you have backups in case something goes wrong. The scripts come with NO WARRANTIES and no promise of technical support.

The scripts should appear in the Adobe Illustrator scripts menu after installation, under File menu > Scripts. 

The non-batch version is meant to be run on the active document. But it should prompt you to open a file if one is not open. The script lets you specify the margin for the artwork, in a range of 0-100 points.

The batch version prompts for a folder of Adobe Illustrator files, and will convert them all. There is a progress bar. **WARNING: It will run through all files without prompting. If you have lots of files, it could take a while.** Note that the conversion process saves *.ai files back to the same file document, _overwriting them_. Other file types are saved as *.ai instead of their native format.

**IMPORTANT NOTE: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.** Because this script is especially intended for fixing old stock images and other assets from back in the day when artboard size didn't seem to matter — which were mostly created prior to the multiple artboard feature — it shouldn't be a big problem. But you should be aware of it.

Example
===

Mac OS X preview of AI image **before** artboard resize
![OS X preview of AI image before artboard resize](http://cl.ly/image/153x1w3H3c19/Screen%20Shot%202015-08-01%20at%208.34.40%20PM.png)

Mac OS X preview of AI image **after** artboard resize
![OS X preview of AI image after artboard resize](http://cl.ly/image/2W460L462L0K/Screen%20Shot%202015-08-01%20at%208.38.24%20PM.png)

Version History
===

1.11 2015-08-07
* Minor bug fix

1.1 2015-08-06
* Progress bar
* Progress bar shows file name of current file
* Choose file types to process — updated files are currently saved as .ai regardless of source image type; no error checking on this, so be careful
* Choose how much margin/padding you want around the image

1.0 Initial release

