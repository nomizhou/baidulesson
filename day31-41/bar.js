function histogram(){
	var svg = document.getElementById('sv');
	var polyline = document.createElementNS('http://www.w3.org/2000/svg','polyline');
	polyline.setAttribute('points','0,0 0,300 500,300');
	polyline.setAttribute('style',"fill:white;stroke:black;stroke-width:2");
	svg.appendChild(polyline);

	for(var i = 0;i<12;i++){
		var rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
		var h = sourceData[0].sale[i];
		var x= 20+40*i;
		var y = 300-h;
		rect.setAttribute('width','20');
		rect.setAttribute('height',h);
		rect.setAttribute('x',x);
		rect.setAttribute('y',y);
		rect.setAttribute('style','fill:yellow');
		svg.appendChild(rect);
	};
};

// histogram();