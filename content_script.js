
	( async function () {

		function wait ( time ) {

		    return new Promise( function ( resolve ) {

		        setTimeout( resolve, time );

		    });

		};

		function wait_for ( selector ) {

		    return new Promise( function ( resolve ) {

		        var interval = setInterval( () => {

		        	var element = document.querySelector( selector );

		        	if ( element ) {

		        		clearInterval( interval );
		        		resolve( element );

		        	};

		        }, 200 );

		    });

		};

		await wait_for( "span.Di" );

		location.hash = "#inbox/p2";

		await wait( 50 );

		location.hash = "#settings/general";

		await wait( 50 );

		var select = await wait_for( "select.rA" );

		var option = document.createElement( "option" );
		option.value = "200";
		option.innerText = "200";

		select.prepend( option );

		option.selected = true;
		select.value = 200;

		select.dispatchEvent( new Event( "change" ) );

		await wait( 50 );

		document.querySelector( "button[guidedhelpid='save_changes_button']" ).click();

		await wait( 50 );

		var button = await wait_for( "button[name='ok']" );
		button.click();

		location.hash = "#inbox";
		await wait( 50 );

		var button = await wait_for( "button[name='ok']" );
		button.click();

	} () );
