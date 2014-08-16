/**
 * @author : Jepri Torang Sinaga
 * @version : 1.0
 * @copyright : Jepri Torang Sinaga
 */

// start new apps
var apps = {
	popupContent : function(param) {
		$(param).click(function(){
			var _this = $(param);
			var _thisType = $(param).data("type");
			var _url = $(param).data("url");

			console.log(_url);
			$.colorbox({
				href   : _url,
				iframe : true, 
				width  : "80%", 
				height : "80%"
			});
			if(_thisType == "video") {
				$.colorbox({iframe :true, width:"80%", height:"80%"});
			} else {
				console.log('foto');
			}

			return false;
		})
	},
	init : function() {
		console.log('load');
		// call all function want to start at page load
		var Self = this;

		// Self.popupContent(".popup-content");
	}
}

$(function(){
	apps.init();

	var Page = (function() {
				
		var config = {
				$bookBlock : $( '#bb-bookblock' ),
				$navNext : $( '#bb-nav-next' ),
				$navPrev : $( '#bb-nav-prev' ),
				$navFirst : $( '#bb-nav-first' ),
				$navLast : $( '#bb-nav-last' )
			},
			init = function() {
				config.$bookBlock.bookblock( {
					speed : 1000,
					shadowSides : 0.8,
					shadowFlip : 0.4
				} );
				initEvents();
			},
			initEvents = function() {
				
				var $slides = config.$bookBlock.children();

				// add navigation events
				config.$navNext.on( 'click touchstart', function() {
					config.$bookBlock.bookblock( 'next' );
					return false;
				} );

				config.$navPrev.on( 'click touchstart', function() {
					config.$bookBlock.bookblock( 'prev' );
					return false;
				} );

				config.$navFirst.on( 'click touchstart', function() {
					config.$bookBlock.bookblock( 'first' );
					return false;
				} );

				config.$navLast.on( 'click touchstart', function() {
					config.$bookBlock.bookblock( 'last' );
					return false;
				} );
				
				// add swipe events
				$slides.on( {
					'swipeleft' : function( event ) {
						config.$bookBlock.bookblock( 'next' );
						return false;
					},
					'swiperight' : function( event ) {
						config.$bookBlock.bookblock( 'prev' );
						return false;
					}
				} );

				// add keyboard events
				$( document ).keydown( function(e) {
					var keyCode = e.keyCode || e.which,
						arrow = {
							left : 37,
							up : 38,
							right : 39,
							down : 40
						};

					switch (keyCode) {
						case arrow.left:
							config.$bookBlock.bookblock( 'prev' );
							break;
						case arrow.right:
							config.$bookBlock.bookblock( 'next' );
							break;
					}
				} );

				// apps.popupContent(".popup-content");
				$(".popup-content").colorbox({
					iframe : true, 
					width  : "80%", 
					height : "90%"
				});
			};

			return { init : init };

	})();

	Page.init();
})