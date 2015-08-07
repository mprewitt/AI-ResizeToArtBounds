// Resize to Art Bounds
// Version 1.11
// by Michael Prewitt, michaelprewitt.com

// INSTALLATION:
// Install in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts

// DESCRIPTION:
// Resizes the artboard of the open document to the size of the art bounds.
// Note: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.

// SOURCES:
// https://forums.adobe.com/thread/287731 
// https://forums.adobe.com/thread/939710

// ---------------------------------------

// Make sure we have an open document, or else open one
if( app.documents.length == 0 ) {
	fileToProcess = File.openDialog();
	app.open(fileToProcess);
}

// Select margin size; default to 20
var myBorder = -1;
var myBorderInput = -1;
while (myBorder < 0 || myBorder > 100 || isNaN(myBorder) ) {
	myBorderInput = prompt("Size of padding around image, in points (0-100)","20","Padding Size");
	myBorder = parseInt(myBorderInput);
}

// Main
var doc = app.activeDocument;

var myVisibleBounds = doc.visibleBounds; // Rect, which is an array;

myVisibleBounds[0] -= myBorder; // left coordinate (use negative values to add artboard)
myVisibleBounds[1] += myBorder; // top coordinate
myVisibleBounds[2] += myBorder; // right coordinate
myVisibleBounds[3] -= myBorder; // bottom coordinate (use negative values to add artboard)

doc.artboards[0].artboardRect = myVisibleBounds;
