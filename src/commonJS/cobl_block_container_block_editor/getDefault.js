/**
 * WordPress dependencies
 */
const { applyFilters } = wp.hooks;

const getDefault = ( key, args ) => {

	switch( key ){

		case 'settings':
			return applyFilters( 'cobl.default.settings', {
				// alignment,


				backgroundColor: {
					apply: false,
					r: '255',
					g: '185',
					b: '0',
					a: '0.5',
				},

				maxWidth: {
					apply: true,
					value: 90,
					unit: 'percent',			// px || percent
				},

				padding: {
					top: {
						apply: false,
						value: 0,
						unit: 'percent',			// px || percent
					},
					bottom: {
						apply: false,
						value:  0,
						unit: 'percent',			// px || percent
					},
					left: {
						apply: false,
						value:  0,
						unit: 'percent',			// px || percent
					},
					right: {
						apply: false,
						value:  0,
						unit: 'percent',			// px || percent
					},
				},

				margin: {
					top: {
						apply: false,
						value:  0,
						unit: 'percent',			// px || percent
					},
					bottom: {
						apply: false,
						value:  0,
						unit: 'percent',			// px || percent
					},
				},


			}, args );

	}
};

export default getDefault;
