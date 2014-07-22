<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class article extends Front_Controller {

	//--------------------------------------------------------------------


	public function __construct()
	{
		parent::__construct();

		$this->load->library('form_validation');
		$this->load->model('article_model', null, true);
		$this->lang->load('article');
		
			Assets::add_js(Template::theme_url('js/editors/ckeditor/ckeditor.js'));
	}

	//--------------------------------------------------------------------



	/*
		Method: index()

		Displays a list of form data.
	*/
	public function index()
	{

		$records = $this->article_model->find_all();

		Template::set('records', $records);
		Template::render();
	}

	//--------------------------------------------------------------------




}