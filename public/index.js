$(function(){
  var template = $('#template').html();
  var baseUrl = 'http://localhost:3000';

  $('article').each(function(index, example){
    // get example metadata, render template
    var $example = $(example),
        method = $example.data('method'),
        url = ($example.data('external') ? '' : baseUrl) + $example.data('url'),
        credentials = $example.data('credentials');
    $example.html(template);

    // fetch subnodes from newly templatized content, fill out
    var $h1 = $example.find('h2'),
        $pre = $example.find('pre'),
        $button = $example.find('button'),
        $result = $example.find('textarea'),
        $error = $example.find('p.error');
    $h1.text('Example #' + (index + 1) + ':');
    $pre.text(method + ' ' + url);

    // bind click event to actually fetch stuff from remote server
    $button.click(function(){
      $result.text('');
      $error.text('');
      $button.attr('disabled', 'disabled');
      $.ajax({
        url: url,
        method: method,
        xhrFields: {
          withCredentials: credentials ? true : false
        },
        headers: {
           "Authorization":"Bearer asdasdfasdfasdfasdf"
        },
        success: function(data, state, res){
          $button.removeAttr('disabled');
          $result.css('border-color', 'black');
          if(data){
            $result.text(JSON.stringify(data));
          }else{
            $result.text('STATUS CODE: ' + res.status);
          }
        },
        error: function(data, state){
          $button.removeAttr('disabled');
          $result.css('border-color', 'red');
          $error.text(state);
          console.log(data);
        }
      });
    });
  });
});
