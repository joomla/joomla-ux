jQuery(document).ready(function(){
	jQuery( "#save-stay" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save" );
		jQuery( "#save-text" ).css({"background-color": "#5cb85c"});
		jQuery( "#save-text" ).attr("href", "#save");
	});
	jQuery( "#save-close" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save and Close" );
		jQuery( "#save-text" ).css({"background-color": "#2e872e"});
		jQuery( "#save-text" ).attr("href", "#save-and-close");
	});
	jQuery( "#save-new" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save and New" );
		jQuery( "#save-text" ).css({"background-color": "#106410"});
		jQuery( "#save-text" ).attr("href", "#save-and-new");
	});
	jQuery( "#save-as-copy" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save as a Copy" );
		jQuery( "#save-text" ).css({"background-color": "#014701"});
		jQuery( "#save-text" ).attr("href", "#save-as-a-copy");
	});
	jQuery( "#save-btn" ).mouseleave(function() {
		jQuery( "#save-text" ).text( "Save" );
		jQuery( "#save-text" ).css({"background-color": "#5cb85c"});
		jQuery( "#save-text" ).attr("href", "#save");
	});
});