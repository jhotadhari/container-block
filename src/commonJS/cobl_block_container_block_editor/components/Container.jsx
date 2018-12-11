/**
 * External dependencies
 */
import extender from 'object-extender';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;
const {
	InnerBlocks,
} = wp.editor;

/**
 * Internal dependencies
 */
import rgbaToCssProp	from '../rgbaToCssProp';

class Container extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	getContainerStyle() {
		const { alignment, settings } = this.props;
		return {
			...( undefined !== alignment && { textAlign: alignment } ),
			...( true === settings.backgroundColor.apply && { backgroundColor: rgbaToCssProp( settings.backgroundColor ) } ),
			...( true === settings.padding.left.apply && { paddingLeft: settings.padding.left.value + ( 'percent' === settings.padding.left.unit ? '%' : settings.padding.left.unit ) } ),
			...( true === settings.padding.right.apply && { paddingRight: settings.padding.right.value + ( 'percent' === settings.padding.right.unit ? '%' : settings.padding.right.unit ) } ),
			...( true === settings.padding.top.apply && { paddingTop: settings.padding.top.value + ( 'percent' === settings.padding.top.unit ? '%' : settings.padding.top.unit ) } ),
			...( true === settings.padding.bottom.apply && { paddingBottom: settings.padding.bottom.value + ( 'percent' === settings.padding.bottom.unit ? '%' : settings.padding.bottom.unit ) } ),
			...( true === settings.margin.top.apply && { marginTop: settings.margin.top.value + ( 'percent' === settings.margin.top.unit ? '%' : settings.margin.top.unit ) } ),
			...( true === settings.margin.bottom.apply && { marginBottom: settings.margin.bottom.value + ( 'percent' === settings.margin.bottom.unit ? '%' : settings.margin.bottom.unit ) } ),
		};
	}

	getContainerInsideStyle() {
		const { settings } = this.props;
		return {
			margin: '0 auto',
			...( true === settings.maxWidth.apply && { maxWidth: settings.maxWidth.value + ( 'percent' === settings.maxWidth.unit ? '%' : settings.maxWidth.unit ) } ),
		};
	}

	render() {

		const {
			alignment,
			settings,
			className,
			setAttributes,
		} = this.props;

		return <>
			<div
				className={ className }
				style={ this.getContainerStyle() }
			>
				<div
					className={ className + '-inside' }
					style={ this.getContainerInsideStyle() }
				>
					{ setAttributes &&
						<InnerBlocks
							template={ [
								[ 'core/paragraph', {} ],
							] }
						/>
					}
					{ ! setAttributes &&
						<InnerBlocks.Content />
					}
				</div>
			</div>
		</>;

	}
}

export default Container;
