<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class content extends Admin_Controller {

	//--------------------------------------------------------------------


	public function __construct()
	{
		parent::__construct();

		$this->auth->restrict('Article.Content.View');
		$this->load->model('article_model', null, true);
		$this->lang->load('article');
		
		Template::set_block('sub_nav', 'content/_sub_nav');
	}

	//--------------------------------------------------------------------



	/*
		Method: index()

		Displays a list of form data.
	*/
	public function index()
	{

		// Deleting anything?
		if ($action = $this->input->post('delete'))
		{
			if ($action == 'Delete')
			{
				$checked = $this->input->post('checked');

				if (is_array($checked) && count($checked))
				{
					$result = FALSE;
					foreach ($checked as $pid)
					{
						$result = $this->article_model->delete($pid);
					}

					if ($result)
					{
						Template::set_message(count($checked) .' '. lang('article_delete_success'), 'success');
					}
					else
					{
						Template::set_message(lang('article_delete_failure') . $this->article_model->error, 'error');
					}
				}
				else
				{
					Template::set_message(lang('article_delete_error') . $this->article_model->error, 'error');
				}
			}
		}
        
        $offset = $this->uri->segment(5);

		$records = $this->article_model->limit($this->limit, $offset)->find_all();
        
        // Pagination
		$this->load->library('pagination');

		$total_news = $this->article_model->count_all();

		$this->pager['base_url'] = site_url(SITE_AREA .'/content/article/index');
		$this->pager['total_rows'] = $total_news;
		$this->pager['per_page'] = $this->limit;
		$this->pager['uri_segment']	= 5;

		$this->pagination->initialize($this->pager);

		Template::set('records', $records);
		Template::set('toolbar_title', 'Manage Article');
		Template::render();
	}

	//--------------------------------------------------------------------



	/*
		Method: create()

		Creates a Article object.
	*/
	public function create()
	{
		$this->auth->restrict('Article.Content.Create');

		if ($this->input->post('submit'))
		{
			if ($insert_id = $this->save_article())
			{
				// Log the activity
				$this->activity_model->log_activity($this->current_user->id, lang('article_act_create_record').': ' . $insert_id . ' : ' . $this->input->ip_address(), 'article');

				Template::set_message(lang('article_create_success'), 'success');
				Template::redirect(SITE_AREA .'/content/article');
			}
			else
			{
				Template::set_message(lang('article_create_failure') . $this->article_model->error, 'error');
			}
		}
		Assets::add_module_js('article', 'article.js');
        
        Assets::add_css(array	(
														Template::theme_url('css/jquery.ui.datepicker.css'),
														Template::theme_url('css/jquery-iframedialog.css'),
														Template::theme_url('css/jquery/jquery.plugin.chosen.css'),
														Template::theme_url('css/jquery/jquery.tagsinput.css'),
													),
										'screen');
                                        									
		Assets::add_module_css('article', 'article.css');
        
        Assets::add_js(	array	(
														Template::theme_url('js/jquery-ui-1.8.13.min.js'),
														Template::theme_url('js/jquery-iframedialog.js'),
														Template::theme_url('js/admin.js'),
														Template::theme_url('js/jquery/jquery.plugin.chosen.js'),
														Template::theme_url('js/jquery/jquery.plugin.livequery.js'),
														Template::theme_url('js/jquery/jquery.tagsinput.min.js'),
														Template::theme_url('js/editors/ckeditor/ckeditor.js'),
														Template::theme_url('js/editors/ckeditor/adapters/jquery.js'),
														Template::theme_url('js/my_wysiwyg.js'),
													),
										'external',
										true
									);
        
        Assets::add_js($this->load->view('content/form_js', null, true), 'inline'); 

		Template::set('toolbar_title', lang('article_create') . ' Article');
		Template::render();
	}

	//--------------------------------------------------------------------



	/*
		Method: edit()

		Allows editing of Article data.
	*/
	public function edit()
	{
		$this->auth->restrict('Article.Content.Edit');

		$id = $this->uri->segment(5);

		if (empty($id))
		{
			Template::set_message(lang('article_invalid_id'), 'error');
			redirect(SITE_AREA .'/content/article');
		}

		if ($this->input->post('submit'))
		{
			if ($this->save_article('update', $id))
			{
				// Log the activity
				$this->activity_model->log_activity($this->current_user->id, lang('article_act_edit_record').': ' . $id . ' : ' . $this->input->ip_address(), 'article');

				Template::set_message(lang('article_edit_success'), 'success');
                redirect(SITE_AREA .'/content/article');
			}
			else
			{
				Template::set_message(lang('article_edit_failure') . $this->article_model->error, 'error');
			}
		}

		Template::set('article', $this->article_model->find($id));
        
		Assets::add_module_js('article', 'article.js');
        
        Assets::add_css(array	(
														Template::theme_url('css/jquery.ui.datepicker.css'),
														Template::theme_url('css/jquery-iframedialog.css'),
														Template::theme_url('css/jquery/jquery.plugin.chosen.css'),
														Template::theme_url('css/jquery/jquery.tagsinput.css'),
													),
										'screen');
                                        									
		Assets::add_module_css('article', 'article.css');
        
        Assets::add_js(	array	(
														Template::theme_url('js/jquery-ui-1.8.13.min.js'),
														Template::theme_url('js/jquery-iframedialog.js'),
														Template::theme_url('js/admin.js'),
														Template::theme_url('js/jquery/jquery.plugin.chosen.js'),
														Template::theme_url('js/jquery/jquery.plugin.livequery.js'),
														Template::theme_url('js/jquery/jquery.tagsinput.min.js'),
														Template::theme_url('js/editors/ckeditor/ckeditor.js'),
														Template::theme_url('js/editors/ckeditor/adapters/jquery.js'),
														Template::theme_url('js/my_wysiwyg.js'),
													),
										'external',
										true
									);
        
        Assets::add_js($this->load->view('content/form_js', null, true), 'inline'); 

		Template::set('toolbar_title', lang('article_edit') . ' Article');
		Template::render();
	}

	//--------------------------------------------------------------------



	/*
		Method: delete()

		Allows deleting of Article data.
	*/
	public function delete()
	{
		$this->auth->restrict('Article.Content.Delete');

		$id = $this->uri->segment(5);

		if (!empty($id))
		{

			if ($this->article_model->delete($id))
			{
				// Log the activity
				$this->activity_model->log_activity($this->current_user->id, lang('article_act_delete_record').': ' . $id . ' : ' . $this->input->ip_address(), 'article');

				Template::set_message(lang('article_delete_success'), 'success');
			} else
			{
				Template::set_message(lang('article_delete_failure') . $this->article_model->error, 'error');
			}
		}

		redirect(SITE_AREA .'/content/article');
	}

	//--------------------------------------------------------------------

	/*
		Method: delete_image()
		
		Allows deleting of News image data.
	*/
	public function delete_image($article_id=NULL) 
	{  
        $this->output->enable_profiler(false);
        
		if (!empty($article_id))
		{	
            if($this->article_model->update_where('article.id', $article_id, array('article.image_id' => NULL)))
            {
                $return['success'] = 1;
            }
            else
            {
                $return['success'] = 0;
            }
            echo json_encode($return);
		}
        
	}
	
	//--------------------------------------------------------------------

	/**
	 * Callback method that checks the title of an post
	 * @access public
	 * @param string title The Title to check
	 * @return bool
	 */
	public function _check_title($title, $id = null)
	{
		$this->form_validation->set_message('_check_title', sprintf('Title already exist', 'Title'));
		return $this->article_model->check_exists('title', $title, $id);
	}
	
	/**
	 * Callback method that checks the slug of an post
	 * @access public
	 * @param string slug The Slug to check
	 * @return bool
	 */
	public function _check_slug($slug, $id = null)
	{
		$this->form_validation->set_message('_check_slug', sprintf('Slug already exist', 'Slug'));
		return $this->article_model->check_exists('slug', $slug, $id);
	}

	//--------------------------------------------------------------------


	//--------------------------------------------------------------------
	// !PRIVATE METHODS
	//--------------------------------------------------------------------

	/*
		Method: save_article()

		Does the actual validation and saving of form data.

		Parameters:
			$type	- Either "insert" or "update"
			$id		- The ID of the record to update. Not needed for inserts.

		Returns:
			An INT id for successful inserts. If updating, returns TRUE on success.
			Otherwise, returns FALSE.
	*/
	private function save_article($type='insert', $id=0)
	{
		if ($type == 'update') {
			$_POST['id'] = $id;
		}

		
		$this->form_validation->set_rules('title','Title','required|trim|xss_clean|max_length[255]|callback__check_title['.$id.']');
		$this->form_validation->set_rules('slug', 'Slug', 'required|trim|xss_clean|max_length[255]|alpha_dot_dash|callback__check_slug['.$id.']');
		$this->form_validation->set_rules('image_id','Image','required|trim');
        
        $this->form_validation->set_error_delimiters('<p>', '</p>');

		if ($this->form_validation->run() === FALSE)
		{
			return FALSE;
		}

		// make sure we only pass in the fields we want
		
		$data = array();
		$data['title']                = $this->input->post('title');
		$data['description']          = $this->input->post('description');
		$data['author_id']            = $this->input->post('author_id');
		$data['image_id']             = $this->input->post('image_id');
		$data['slug']             	  = $this->input->post('slug');

		if ($type == 'insert')
		{
			$id = $this->article_model->insert($data);

			if (is_numeric($id))
			{
				$return = $id;
			} 
            else
			{
				$return = FALSE;
			}
		}
		else if ($type == 'update')
		{
			$return = $this->article_model->update($id, $data);
		}

		return $return;
	}

	//--------------------------------------------------------------------



}