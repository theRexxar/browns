<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Invitation_model extends BF_Model {

	protected $table          = "invitation";
	protected $key            = "id";
	protected $soft_deletes   = true;
	protected $date_format    = "datetime";
	protected $set_created    = true;
	protected $set_modified   = true;
	protected $created_field  = "created_on";
	protected $modified_field = "modified_on";
    
        
    public function find_all()
	{
        $this->db->where('deleted', '0');        
        return parent::find_all();
	}
}
