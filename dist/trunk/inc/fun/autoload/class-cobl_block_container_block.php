<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Cobl_Block_Container_block {

	protected static $instance = null;
	protected $namspace = 'cobl/container-block';

	protected $handles = array(
		'editor' => 'cobl_block_container_block_editor',
		'frontend' => 'cobl_block_container_block_frontend',
	);

	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
			self::$instance->hooks();
		}

		return self::$instance;
	}

	protected function __construct() {
		// ... silence
	}

	public function hooks() {
		add_action( 'init', array( $this, 'register_block' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ) );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_frontend_assets' ) );
	}

	public function register_block() {
		if ( function_exists( 'register_block_type' ) ) {
			register_block_type( $this->namspace, array(
				'editor_script' => $this->get_handle( 'editor' ),
				'editor_style' => $this->get_handle( 'editor' ),
				'style' => $this->get_handle( 'frontend' ),
				// 'script' => $this->get_handle( 'frontend' ),
				'render_callback' => array( $this, 'render' ),
			) );
		}
	}

	protected function get_handle( $key ){
		$handles = $this->handles;
		if ( array_key_exists( $key, $handles ) ){
			return $handles[$key];
		}
	}

	// protected function get_localize_data(){
	// 	$localize_data = array();
	// 	return $localize_data;
	// }

	public function enqueue_frontend_assets() {

		// check if we are on frontend
		if ( is_admin() )
			return;

		$handle = $this->get_handle( 'frontend' );

		wp_enqueue_style(
			$handle,
			Cobl_Container_block::plugin_dir_url() . '/css/' . $handle . '.min.css',
			array( 'wp-blocks' ),
			filemtime( Cobl_Container_block::plugin_dir_path() . 'css/' . $handle . '.min.css' )
		);
	}

	public function enqueue_editor_assets() {
		$handle = $this->get_handle( 'editor' );		// returns 'cobl_block_container_block_editor'

		wp_register_script(
			$handle,
			Cobl_Container_block::plugin_dir_url() . '/js/' . $handle . '.min.js',
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
				'wp-edit-post',
			),
			filemtime( Cobl_Container_block::plugin_dir_path() . 'js/' . $handle . '.min.js' )
		);

		// wp_localize_script( $handle, 'coblData', $this->get_localize_data() );

		wp_set_script_translations( $handle, 'cobl', Cobl_Container_block::plugin_dir_path() . 'languages' );

		wp_enqueue_script( $handle );

		wp_enqueue_style(
			$handle,
			Cobl_Container_block::plugin_dir_url() . '/css/' . $handle . '.min.css',
			array( 'wp-edit-blocks' ),
			filemtime( Cobl_Container_block::plugin_dir_path() . 'css/' . $handle . '.min.css' )
		);
	}

}

function cobl_block_container_block_init() {
	return Cobl_Block_Container_block::get_instance();
}

cobl_block_container_block_init();

?>