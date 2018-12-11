/**
 * External dependencies
 */
import extender from 'object-extender';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
} = wp.editor;

/**
 * Internal dependencies
 */
import getDefault 				from './cobl_block_container_block_editor/getDefault';
import parseSerialized			from './cobl_block_container_block_editor/parseSerialized';
import Inspector				from './cobl_block_container_block_editor/components/Inspector.jsx';
import Container				from './cobl_block_container_block_editor/components/Container.jsx';

registerBlockType( 'cobl/container-block', {
	title: __( 'Container Block', 'cobl' ),

	icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>,	// https://material.io/tools/icons/?icon=crop_din&style=baseline

	category: 'common',

	description: __( 'Wrap several blocks in a container.', 'cobl' ),

	supports: {
		html: true,
		align: true,
		align: [
			'center',
			'wide',
			'full',
		],
	},

    attributes: {
        alignment: {
            type: 'string',
        },
        align: {
        	type: 'string',
        	default: 'none',
        },
		settings: {
			type: 'string',
			default: null,
		},
		settings: {
			type: 'string',
			default:  JSON.stringify( getDefault( 'settings', {} ) ),
		},
    },

    edit( { className, attributes, setAttributes } ) {

    	const {
    		alignment,
    		align,
    	} = attributes;

    	const classNameSorted = className.split( ' ' ).sort( ( a, b ) => {
			if ( 'wp-block-cobl-container-block' === a ) return 1;
			if ( 'wp-block-cobl-container-block' === b ) return -1;
			return 0;
    	} ).join( ' ' );

    	const settings = extender.merge( getDefault( 'settings', {} ), parseSerialized( attributes.settings ) );

        return <>

			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ newVal => setAttributes( { alignment: newVal } ) }
				/>
			</BlockControls>

			<InspectorControls>
				<Inspector
					setAttributes={ setAttributes }
					settings={ settings }
				/>
			</InspectorControls>

			<Container
				alignment={ alignment }
				settings={ settings }
				className={ classNameSorted }
				setAttributes={ setAttributes }
			/>

        </>;
    },


    save( { attributes } ) {

    	const {
    		alignment,
    		align,
    		className,
    	} = attributes;

    	const settings = extender.merge( getDefault( 'settings', {} ), parseSerialized( attributes.settings ) );

    	const classNameSorted = [
    		className,
    		'align' + align,
    		'wp-block-cobl-container-block',
    	].join( ' ' );

		return <>
			<Container
				alignment={ alignment }
				settings={ settings }
				className={ classNameSorted }
			/>
		</>;
    }

});
