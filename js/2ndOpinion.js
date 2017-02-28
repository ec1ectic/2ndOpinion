$(document).ready(function(){
    $("#submit").hide();
    $("#file").hide();
    $('#Question').keyup(function(){
        if($(this).val().length > 20)
	        {
			    $("#submit").show();
			    $("#file").show();
	        }
        else
	        {
			    $("#submit").hide();
			    $("#file").hide();
	        }
    })
});

$('form.ajax').on('submit', function(){

	var that = $(this),
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};

	that.find('[name]').each(function(index, value){
		var that = $(this),
			name = that.attr('name'),
			value = that.val();

		data[name] = value;
	});
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response){
			console.log(response);
			var response = JSON.parse(response);										

			if (response.Status == "Success")
			{
				$("#quoteButton, #success").toggle();
			}
			else
			{
				$("#quoteButton, #error").toggle();
					
					$(document).click(function() {
     					$("#error, #quoteButton").toggle();
						});
			}
		}
	});
	return false;
});