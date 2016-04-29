<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends Front_Controller {
	
	function __construct()
	{
		parent::__construct();
	}
	
	public function index()
	{	
		$vars = array();
		$vars['page'] = 'home';
		Template::set('data', $vars);
        Template::set('toolbar_title', "Home");
        Template::set_view('front_page/index');
		Template::render();
	}

	public function products()
	{
		$vars = array();
		$vars['page'] = 'products';
		Template::set('data', $vars);
        Template::set('toolbar_title', "Products");
        Template::set_view('front_page/product');
		Template::render();	
	}

	public function our_philosophy()
	{
		$vars = array();
		$vars['page'] = 'our-philosophy';
		Template::set('data', $vars);
        Template::set('toolbar_title', "Our Philosophy");
        Template::set_view('front_page/our_philosophy');
		Template::render();	
	}

	public function products_detail($products)
	{
		$vars = array();
		if(isset($products) && !empty($products)) {

			if ($products == 'private') {
				$vars['page'] = 'products-detail ~ Private Residence';
				Template::set('data', $vars);
		        Template::set('toolbar_title', "Private Residence");
		        Template::set_view('front_page/product_detail_private_residences');		
			} elseif ($products == 'business') {
				$vars['page'] = 'products-detail ~ Business venues';
				Template::set('data', $vars);
		        Template::set('toolbar_title', "Business venues");
		        Template::set_view('front_page/product_detail_business_venues');		
			} else {
				$vars['page'] = 'products-detail ~ Other Creations';
				Template::set('data', $vars);
		        Template::set('toolbar_title', "Other Creations");
		        Template::set_view('front_page/product_detail_other_creations');	
			}
		}
		Template::render();	
	}

	public function contact()
	{
		$vars = array();
		$vars['page'] = 'contact';
		Template::set('data', $vars);
        Template::set('toolbar_title', "Contact Us");
        Template::set_view('front_page/contact');
		Template::render();	
	}

	public function sendEmail() 
	{
		$this->load->library('email');

		$param = $this->input->get(NULL,TRUE);

		$name     = isset($param['name']) ? $param['name'] : NULL;
		$email    = isset($param['email']) ? $param['email'] : NULL;
		$messages = isset($param['messages']) ? $param['messages'] : NULL;

		if ($name != '') {
			$subject = 'Inquiry from '. $name . ' brownsfurniture.com' ;
		} else {
			$subject = 'Inquiry from brownsfurniture.com' ;
		}

		$this->email->from('your@example.com', 'Your Name');
		$this->email->to('info@brownsfurniture.com'); 

		$this->email->subject($subject);
		$this->email->message($messages);	

		$this->email->send();

		redirect(site_url('contact'));
	}
}
/* End of file home.php */
/* Location: ./modules/home/controllers/home.php */