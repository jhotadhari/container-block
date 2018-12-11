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
    PanelBody,
    SelectControl,
    TextControl,
    BaseControl,
    ToggleControl,
} = wp.components;

/**
 * Internal dependencies
 */
import ApplyValueUnitControl	from './ApplyValueUnitControl.jsx';
import ApplyColorControl		from './ApplyColorControl.jsx';

const Inspector = ({
	setAttributes,
	settings,
}) => <>

	<PanelBody
		initialOpen={ true }
		title={ '' }
	>
		<ApplyValueUnitControl
			label={ __( 'Max Width', 'cobl' ) }
			settingsKeyPath={ ['maxWidth'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

		<ApplyColorControl
			label={ __( 'Background Color', 'cobl' ) }
			settingsKeyPath={ ['backgroundColor'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

	</PanelBody>

	<PanelBody
		initialOpen={ true }
		title={ __( 'Padding', 'cobl' ) }
	>

		<ApplyValueUnitControl
			label={ __( 'Top', 'cobl' ) }
			settingsKeyPath={ ['padding','top'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

		<ApplyValueUnitControl
			label={ __( 'Left', 'cobl' ) }
			settingsKeyPath={ ['padding','left'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

		<ApplyValueUnitControl
			label={ __( 'Right', 'cobl' ) }
			settingsKeyPath={ ['padding','right'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

		<ApplyValueUnitControl
			label={ __( 'Bottom', 'cobl' ) }
			settingsKeyPath={ ['padding','bottom'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

	</PanelBody>


	<PanelBody
		initialOpen={ true }
		title={ __( 'Margin', 'cobl' ) }
	>

		<ApplyValueUnitControl
			label={ __( 'Top', 'cobl' ) }
			settingsKeyPath={ ['margin','top'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

		<ApplyValueUnitControl
			label={ __( 'Bottom', 'cobl' ) }
			settingsKeyPath={ ['margin','bottom'] }
			setAttributes={ setAttributes }
			settings={ settings }
		/>

	</PanelBody>


</>;

export default Inspector;
