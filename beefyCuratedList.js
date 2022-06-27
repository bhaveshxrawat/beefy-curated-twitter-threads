//tooltip
$('.trigger-btn').tooltip({
    trigger: 'click',
  });
  
  function setTooltip(message) {
    $('.trigger-btn').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip(btn) {
    setTimeout(function() {
      $('.trigger-btn').tooltip('hide');
    }, 1000);
  }

var clipboard = new ClipboardJS('.trigger-btn');

clipboard.on('success', function(e) {
    setTooltip('Sent to your Clipboard!');
    hideTooltip();

    e.clearSelection();
});

clipboard.on('error', function(e) {
   setTooltip('Failed!');
   hideTooltip();
 
});
