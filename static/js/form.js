function descriptiveFunctionName() {

  $('#form2').on('submit', function(event) {
  console.log("form 2 executed") ;
    $.ajax({
      data : {
        content : $('#content').val(),
          topic_2 : $('#topic_2 option:selected').val()
      },
      type : 'POST',
      url : '/publisher'
    })
    .done(function(data) {

      if (data.error) {
        $('#errorAlert').text(data.error).show();
        $('#successAlert').hide();
      }
      else {
        $('#successAlert').text(data.content).show();
        $('#errorAlert').hide();
      }

    });

    event.preventDefault();

  });
}
var id = -1;
function anotherDescriptiveFunctionName() {

  $('#form1').on('submit', function(event) {
  console.log("form1 executed") ;
		$.ajax({
			data : {
                search_text: $('#search_text').val()
			},
			type : 'POST',
			url : '/selectsearch'
		})
		.done(function(data) {
			
			
			console.log(data);
			var obj = JSON.stringify(data);
			console.log(obj);
			$.each(obj.GetDataResult, function (i, value) {
                    console.log(value.text_en[0]);
                })
			for (var i = 0; i < obj.length; i++) {
				console.log(obj[i])
				$("#tweet_text").append(obj[i].text_en);
				$("#tweet_text").load(obj[i].text_en);
			
		}
        
		});

		event.preventDefault();

	});
}

$(document).ready(function() {
    descriptiveFunctionName();
    anotherDescriptiveFunctionName();
});
