// all jQuery methods go here...


//Challenge 0
$(".dance-icon").hover(onHovered, notHovered);

function onHovered() {
	//runningman-icon.pgn --> runningman.giphy.gif
	//electroshuffle-let str = $(this)[0].src;
	//taketheL-icon.png --> taketheL-giphy.gif
	//$(this).substring(0,)
	let str = $(this)[0].src;
	let name = str.substring(0, str.length - 8);
	$(this)[0].src = name + "giphy.gif";
}

function notHovered() {
	let str = $(this)[0].src;
	let name = str.substring(0, str.length - 9);
	$(this)[0].src = name + "icon.png";
}