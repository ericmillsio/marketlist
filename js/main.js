$(document).ready(function(){

	window.Stocks = new window.Stocker();

	$('.folder-list li').live('click', function() {
		var $that = $(this);
		$('.stock-list').animate({ height: 'toggle', opacity: 'toggle' }, 'fast', function() {
						$(this).html( Stocks.getFolder($that.text()).renderStocks() );
						$(this).animate( { height: 'toggle', opacity: 'toggle' }, 'fast' );
		});
	});

	$('.stock-list li .close').live('click', function() {
		$(this).parent().animate({ height: 'toggle', opacity: 'toggle' }, 'fast');
		Stocks.currFolder.removeTicker( $(this).parent().children('.quote').text() );
	});

	$('.stock-list li').live('click', function() {

	});

	$('.add-item').live('click', function() {
		var item = $('#new-item').val();
		if(!item) {
			return;
		}
		var ticker = Stocks.currFolder.addTicker(item);
		$('.stock-list').append(ticker.render());
		.animate( { height: 'toggle', opacity: 'toggle' }, 'fast' );
		//$('.close').first().parent().children('.quote').html()

	});

});

//emmet