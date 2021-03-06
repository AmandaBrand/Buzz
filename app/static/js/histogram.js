// for the histogram that displays on the discover page

$(function() {

	citieslist.forEach(function(city) {

		$.getJSON( "static/json/" + city + "_media_values.json", function( data ) {
			
			$.each( data, function( i, keyword ) {
		        
		        if ( i === 5 ) {
			        $('#terms' + city.replace(/ /g,"_")).append("</div></li>");
			        return false;
		    	}
		    	
		    	else {
		    		valadd = keyword.value * 20;
		    		val = 20 + valadd;
		    		key = keyword.label;

		    		if (val < 92) {
		    			$('#terms' + city.replace(/ /g,"_")).append("<li><div class='inner'><span class='pre'><div class='count'>"+Math.round(val)+"</div></span><div class='bar' style='width:"+val+"%'><p class='text2'>" + key + "</p></div>");
		    		}
		    		
		    		else if (val >= 92) {
		    			$('#terms' + city.replace(/ /g,"_")).append("<li><div class='inner'><span class='pre'><div class='count'>"+Math.round(val)+"</div></span><div class='bar' style='width: 92%;'><p class='text2'>" + key + "</p></div>");
		    		}
		    	}
		    });
		});
	});
});
	/*var sampledata = {
		"Rihanna": "85",
		"Macklemore": "75",
		"One Direction": "58",
		"Skrillex": "36",
		"Avicii": "29"
	};

	$.each(sampledata, function(key, val) {
		$('.terms').append("<li><div class='inner'><span class='pre'><div class='count'>"+val+"</div></span><div class='bar' style='width:"+val+"%'><p class='text2'>" + key + "</p></div></div></li>");
	}); 

	$("<br/>").insertAfter('.bar');
});
});*/