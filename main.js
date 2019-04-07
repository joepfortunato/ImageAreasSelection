$(document).ready(function () {
  $("#imagePreview").css('display', 'none');
  
	//Image select and preview
	$("#imgInp").change(function() {
      readURL(this);
	  $(this).remove();
	  $("#image-label").text("Selected Image");
    });
	
	$("#btn").click(function(){
       var areas = $('.photo').selectAreas('areas');
			displayAreas(areas);
    });
	
	function readURL(input) {
    	
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
		let imageElement = $("#imagePreview");
		imageElement.css('display', 'block');	
		imageElement.attr('src', e.target.result);
		  			triggerImageSelection();
		}
		reader.readAsDataURL(input.files[0]);
	  }
	}

	function triggerImageSelection(){
	  $('#imagePreview').selectAreas({
        allowMove: true 
       });
	}
	
           
    function displayAreas (areas) {
		var text = "";
			$.each(areas, function (id, area) {
				text += areaToString(area);
			});
			output(text);
		};
			
	function output (text) {
		$('.foo').html(text);
	}
			
	function areaToString (area) {
		return (typeof area.id === "undefined" ? "" 
											   : ("Image " + area.id + ": ")) + area.x + ':' + area.y  + ' ' + area.width + 'x' + area.height + '<br />'
	}

	
			
});