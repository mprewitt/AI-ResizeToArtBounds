// Resize to Art Bounds
// Version 1.1
// by Michael Prewitt, michaelprewitt.com

// INSTALLATION:
// Install in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts

// DESCRIPTION:
// Resizes the artboard of the open document to the size of the art bounds.
// Note: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.

// SOURCES:
// https://forums.adobe.com/thread/287731 
// https://forums.adobe.com/thread/939710

// Make sure we have an open document, or else open one
if( app.documents.length == 0 ) {
	fileToProcess = File.openDialog();
	app.open(fileToProcess);
}

var doc = app.activeDocument;

var myBorder = 20; // Set to width of border desired, in points
var myVisibleBounds = doc.visibleBounds; // Rect, which is an array;

myVisibleBounds[0] -= myBorder; // left coordinate (use negative values to add artboard)
myVisibleBounds[1] += myBorder; // top coordinate
myVisibleBounds[2] += myBorder; // right coordinate
myVisibleBounds[3] -= myBorder; // bottom coordinate (use negative values to add artboard)

doc.artboards[0].artboardRect = myVisibleBounds;
