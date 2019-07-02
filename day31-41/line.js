function lineChart(arr){
	var cv= document.getElementById('cv');
	var canCon = cv.getContext('2d');
	canCon.beginPath();
	canCon.moveTo(0,0);
	canCon.lineTo(0,300);
	canCon.lineTo(500,300);
	canCon.stroke();

	for(i = 0; i<12; i++){
		max(str);
		if(num<=50){var h=h*6;};
		if(num<=380){var h=h*0.7;};
		if(num<=710){var h=h*0.4;};
		canCon.beginPath();
		var y= 300-h;
		var x=20+40*i;
		canCon.arc(x,y,2.5,0,Math.PI*2);
		canCon.fill();
	};

	for(i = 0; i<12; i++){
		canCon.beginPath();
		max(str);
		if(num<=50){var h=h*6;};
		if(num<=380){var h=h*0.7;};
		if(num<=710){var h=h*0.4;};
		var y= 300-h;
		var x=20+40*i;
		canCon.lineTo(x,y);
		canCon.stroke();
	};
};

var trs = document.getElementById('table-wrapper');
trs.onmouseover = function (ev){
	var str= [];
	var trs = ev.target;
	var tr = trs.getElementsByTagName('tr');
	for(var n=2;n<=13;n++){
		str.push(tr[n]);
	};
	return str;
	lineChart(str);
};

function max(arr){
	var num =arr[0];
	for(var n=0; n< arr.lenght ; n++){
		if(num<arr[n]){
			num = arr[n];
		}
	}
	return num;
};

