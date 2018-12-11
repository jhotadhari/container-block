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
    SelectControl,
    TextControl,
    BaseControl,
    ToggleControl,
} = wp.components;

/**
 * Internal dependencies
 */
import getInspectorOptions				from '../getInspectorOptions';
import ApplyBaseControl					from './ApplyBaseControl.jsx';

class ApplyValueUnitControl extends ApplyBaseControl {

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

			<ToggleControl
				label={ label }
				checked={ get( settings, [...settingsKeyPath,'apply'] ) }
				onChange={ ( newVal ) => this.setSettings( 'apply', newVal ) }
			/>

			{ get( settings, [...settingsKeyPath,'apply'] ) && <>

				<BaseControl
					className={ 'cobl-columns-field' }
				>
					<TextControl
						value={ get( settings, [...settingsKeyPath,'value'] ) }
						type={ 'number' }
						onChange={ ( newVal ) => this.setSettings( 'value', newVal ) }
					/>

					<SelectControl
						value={ get( settings, [...settingsKeyPath,'unit'] ) }
						className={ 'cobl-columns-field-30 cobl-columns-field-no-margin' }
						options={ getInspectorOptions( 'units' ) }
						onChange={ ( newVal ) => this.setSettings( 'unit', newVal ) }
					/>

				</BaseControl>
			</> }

		</>;

	}

}

export default ApplyValueUnitControl;
