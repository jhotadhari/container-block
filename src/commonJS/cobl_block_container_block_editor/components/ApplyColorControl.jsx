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
const { __ } = wp.i18n;
const {
    BaseControl,
    ToggleControl,
} = wp.components;

/**
 * Internal dependencies
 */
import ColorPaletteAlphaControl			from './ColorPaletteAlphaControl.jsx';
import ApplyBaseControl					from './ApplyBaseControl.jsx';

class ApplyColorControl extends ApplyBaseControl {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			setAttributes,
			settings,
			label,
			settingsKeyPath,
		} = this.props;

		return <>

			<BaseControl
				className={ 'cobl-columns-field' }
			>

				<BaseControl>
					<ToggleControl
						label={ label }
						checked={ get( settings, [...settingsKeyPath,'apply'] ) }
						onChange={ ( newVal ) => this.setSettings( 'apply', newVal ) }
					/>
				</BaseControl>

				{ get( settings, [...settingsKeyPath,'apply'] ) && <>
					<ColorPaletteAlphaControl
						value={ get( settings, settingsKeyPath ) }
						className={ 'no-clear cobl-columns-field-no-margin' }
						onChange={ ( newVal ) => this.setSettings( null, newVal ) }
					/>
				</> }

			</BaseControl>

		</>;



	}

}

export default ApplyColorControl;
