// Batch Resize to Art Bounds

// INSTALLATION:
// Install in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts

// DESCRIPTION:
// Prompts user for a folder, and gets all the *.ai files inside of it.
// Resizes the artboard of all the files to the size of the art bounds.
// Note: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.

// SOURCES:
// https://forums.adobe.com/thread/287731 
// https://forums.adobe.com/thread/939710

sourceFolder = Folder.selectDialog();
filesToProcess = sourceFolder.getFiles("*.ai");

// Increment through the files
for (i=0; i < filesToProcess.length; i++) {

	app.open(filesToProcess[i]);

	var doc = app.activeDocument;
	var myBorder = 20; // Set to width of border desired, in points
	var myVisibleBounds = doc.visibleBounds; // Rect, which is an array;

	myVisibleBounds[0] -= myBorder; // left coordinate (use negative values to add artboard)
	myVisibleBounds[1] += myBorder; // top coordinate
	myVisibleBounds[2] += myBorder; // right coordinate
	myVisibleBounds[3] -= myBorder; // bottom coordinate (use negative values to add artboard)

	doc.artboards[0].artboardRect = myVisibleBounds;

	// Save
	var mySaveOptions = new IllustratorSaveOptions();
	mySaveOptions.pdfCompatible = true;
	doc.saveAs(filesToProcess[i],mySaveOptions);

	doc.close();
}
