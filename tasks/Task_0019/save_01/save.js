jQuery(document).ready(function(){
	jQuery( "#save-stay" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save" );
	});
	jQuery( "#save-text" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save" );
	});
	jQuery( "#save-close" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save and Close" );
	});
	jQuery( "#save-new" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save and New" );
	});
	jQuery( "#save-as-copy" ).mouseenter(function() {
		jQuery( "#save-text" ).text( "Save as a Copy" );
	});
	jQuery( "#save-btn" ).mouseleave(function() {
		jQuery( "#save-text" ).text( "Save" );
	});
});