// Batch Resize to Art Bounds
// Version 1.1
// by Michael Prewitt, michaelprewitt.com

// INSTALLATION:
// Install in /Applicatons/[Illustrator folder]/Presets/en_US/Scripts

// DESCRIPTION:
// Prompts user for a folder, and gets all the *.ai files inside of it.
// Resizes the artboard of all the files to the size of the art bounds.
// Note: Files with multiple artboards will have the first artboard resized to encompass the art bounds from all artboards.

// SOURCES:
// https://forums.adobe.com/thread/287731 
// https://forums.adobe.com/thread/939710
// https://forums.adobe.com/thread/1084760

sourceFolder = Folder.selectDialog();
// filesToProcess = sourceFolder.getFiles("*.ai");
var TypeList = prompt("Enter file types to act on","ai,eps,pdf","File Types");    
var reg = new RegExp("\.(" + TypeList.replace(/,/g, '|') + ")$", 'i');    
var filesToProcess = sourceFolder.getFiles(reg)   

var myBorder = -1;
var myBorderInput = -1;

while (myBorder < 0 || myBorder > 100 || isNaN(myBorder) ) {
	myBorderInput = prompt("Size of padding around image, in points (0-100)","20","Padding Size");
	myBorder = parseInt(myBorderInput);
}

// Create progress bar
var win = new Window("palette", "ProgressBar", [300, 150, 750, 280]);   
win.pnl = win.add("panel", [10, 10, 440, 120], "Script Progress");  
win.pnl.progBar = win.pnl.add("progressbar", [20, 35, 410, 60], 0, 100);  
win.pnl.progBarLabel = win.pnl.add("statictext", [20, 20, 320, 35], "0%");  
win.pnl.fileLabel = win.pnl.add("statictext", [20, 65, 410, 80], "File processed: none");  
win.show();

// Increment through the files
for (i=0; i < filesToProcess.length; i++) {

	app.open(filesToProcess[i]);

	var doc = app.activeDocument;
	var myVisibleBounds = doc.visibleBounds; // Rect, which is an array;

	myVisibleBounds[0] -= myBorder; // left coordinate (use negative values to add artboard)
	myVisibleBounds[1] += myBorder; // top coordinate
	myVisibleBounds[2] += myBorder; // right coordinate
	myVisibleBounds[3] -= myBorder; // bottom coordinate (use negative values to add artboard)

	doc.artboards[0].artboardRect = myVisibleBounds;

	// Update open file info
    win.pnl.fileLabel.text = "File: " + doc.name;
    // win.pnl.fileLabel = "File: " + doc.path; // Show full path
    win.update();

	// Save
	var mySaveOptions = new IllustratorSaveOptions();
	mySaveOptions.pdfCompatible = true;
	doc.saveAs(filesToProcess[i],mySaveOptions);

	doc.close();

	// Update progress bar	
	win.pnl.progBar.value = parseInt( (i/filesToProcess.length)*100 );
    win.pnl.progBarLabel.text = win.pnl.progBar.value+"%";
    win.update();
}

win.pnl.progBar.value = 100;
win.pnl.progBarLabel.text = win.pnl.progBar.value+"%";
win.update();
alert('Done!');

// Close progress bar
win.close();
