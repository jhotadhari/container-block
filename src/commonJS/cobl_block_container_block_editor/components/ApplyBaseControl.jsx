/**
 * External dependencies
 */
import {
	get,
	set,
} from 'lodash';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

class ApplyBaseControl extends Component {

	constructor( props ) {
		super( ...arguments );
		this.setSettings = this.setSettings.bind( this );
	}

	setSettings( key, newVal ) {
		const {
			setAttributes,
			settings,
			settingsKeyPath,
		} = this.props;

		const newSettings = { ...settings };

		if ( null === key && undefined !== newVal.rgb ) {
			set( newSettings, [...settingsKeyPath,'r'], newVal.rgb.r );
			set( newSettings, [...settingsKeyPath,'g'], newVal.rgb.g );
			set( newSettings, [...settingsKeyPath,'b'], newVal.rgb.b );
			set( newSettings, [...settingsKeyPath,'a'], newVal.rgb.a );
		} else {
			set( newSettings, [ ...settingsKeyPath, key ], newVal );
		}

		setAttributes( {
			settings: JSON.stringify( newSettings ),
		} );
	}
}

export default ApplyBaseControl;