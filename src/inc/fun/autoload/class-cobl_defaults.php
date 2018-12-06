<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Cobl_defaults {


	protected $defaults = array();

	public function add_default( $arr ){
		$defaults = $this->defaults;
		$this->defaults = array_merge( $defaults , $arr);
	}
	
	public function get_default( $key ){
		if ( array_key_exists($key, $this->defaults) ){
			return $this->defaults[$key];

		}
			return null;
	}


}

function cobl_init_defaults(){
	global $cobl_defaults;
	
	$cobl_defaults = new Cobl_defaults();
	
	// $defaults = array(
	// 	// silence ...
	// );
	
	// $cobl_defaults->add_default( $defaults );	
}
add_action( 'admin_init', 'cobl_init_defaults', 1 );
add_action( 'init', 'cobl_init_defaults', 1 );



?>