jQuery(document).ready(function(){
	jQuery( "#save-text" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Publish" );
	});
	jQuery( "#save-stay" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Publish" );
		jQuery( "#save-text" ).css({"color": "#ffffff"});
		jQuery( "#save-stay" ).removeClass( "black" );
		jQuery( "#save-stay" ).addClass( "icon-white" );
		jQuery( "#save-close" ).removeClass( "black icon-white" );
		jQuery( "#save-stay i" ).css({"opacity": "1"});
		jQuery( "#save-close i" ).css({"opacity": "1"});
		jQuery( "#save-btn" ).css({"background": "#2d822d"});
		jQuery( "#save-stay" ).css({"background": "#2d822d"});
		jQuery( "#save-close" ).css({"background": "#999999"});
	});
	jQuery( "#save-close" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Unpublish" );
		jQuery( "#save-text" ).css({"color": "#ffffff"});
		jQuery( "#save-stay" ).addClass( "black" );
		jQuery( "#save-close" ).addClass( "icon-white" );
		jQuery( "#save-close" ).removeClass( "black" );
		jQuery( "#save-stay i" ).css({"opacity": "0.2"});
		jQuery( "#save-close i" ).css({"opacity": "1"});
		jQuery( "#save-btn" ).css({"background": "#921717"});
		jQuery( "#save-stay" ).css({"background": "transparent"});
		jQuery( "#save-close" ).css({"background": "#921717"});
	});
	jQuery( "#save-btn" ).mouseleave(function() {
		jQuery( "#save-text" ).text( "Publish" );
		jQuery( "#save-text" ).css({"color": "#000000"});
		jQuery( "#save-stay" ).removeClass( "black icon-white" );
		jQuery( "#save-close" ).removeClass( "black icon-white" );
		jQuery( "#save-stay i" ).css({"opacity": "1"});
		jQuery( "#save-close i" ).css({"opacity": "1"});
		jQuery( "#save-btn" ).css({"background": "#ffffff"});
		jQuery( "#save-stay" ).css({"background": "#dddddd"});
		jQuery( "#save-close" ).css({"background": "#999999"});
	});
});