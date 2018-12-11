/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

const getInspectorOptions = ( key, args ) => {
	let options = [];
	switch( key ) {
		case 'units':
			options = [
				{ label: 'px', value: 'px' },
				{ label: '%', value: 'percent' },
			];
			break;
	}
	return applyFilters( 'cobl/Inspector/options/' + key, options );
}

export default getInspectorOptions;