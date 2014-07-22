<?php if (validation_errors()) : ?>
<div class="alert alert-block alert-error fade in ">
  <a class="close" data-dismiss="alert">&times;</a>
  <h4 class="alert-heading">Please fix the following errors :</h4>
 <?php echo validation_errors(); ?>
</div>
<?php endif; ?>
<?php // Change the css classes to suit your needs
if( isset($trip) ) {
    $trip = (array)$trip;
}
$id = isset($trip['id']) ? $trip['id'] : '';
?>
<div class="admin-box">
    <h3>Edit Trip</h3>
    
    <?php echo form_open($this->uri->uri_string(), 'class="form-horizontal"'); ?>
    <fieldset>
        <!-- Title -->
        <div class="control-group <?php echo form_error('title') ? 'error' : ''; ?>">
            <?php echo form_label('Title'. lang('bf_form_label_required'), 'title', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="title" type="text" name="title" maxlength="255" value="<?php echo set_value('title', isset($trip['title']) ? $trip['title'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('title'); ?></span>
            </div>
        </div>
                    
        <!-- Slug -->
        <div class="control-group <?php echo form_error('slug') ? 'error' : '' ?>">
            <?php echo form_label('Slug'. lang('bf_form_label_required'), 'slug', array('class' => "control-label") ); ?>
            <div class="controls">
                <input id="slug" type="text" name="slug" value="<?php echo set_value('slug', isset($trip['slug']) ? $trip['slug'] : ''); ?>" />
                <span class="help-inline"><?php echo form_error('slug'); ?></span>
            </div>
        </div>
        
        <!-- Owner -->
        <div class="control-group <?php echo form_error('owner') ? 'error' : '' ?>">
            <?php echo form_label('Owner'. lang('bf_form_label_required'), 'owner', array('class' => "control-label") ); ?>
            <div class="controls">
                <select id="owner" type="text" name="owner[]" class"multi-select chosen-select" multiple>
                    <?php 
                        if(isset($owner) && !empty($owner)) {
                            foreach($owner as $key => $result){
                                echo '<option value="'.$result->id.'">'.$result->display_name.'</option>';
                            }
                        }
                    ?>
                </select>
                <span class="help-inline"><?php echo form_error('owner'); ?></span>
            </div>
        </div>

        <!-- invitation -->
        <div class="control-group <?php echo form_error('invitation') ? 'error' : '' ?>">
            <?php echo form_label('invitation'. lang('bf_form_label_required'), 'invitation', array('class' => "control-label") ); ?>
            <div class="controls">
                <select id="invitation" type="text" name="invitation[]" class"multi-select chosen-select" multiple>
                    <option value="1">JEPRI TORANG SINAGA</option>
                    <option value="2">MAULANA</option>
                </select>
                <span class="help-inline"><?php echo form_error('invitation'); ?></span>
            </div>
        </div>
        
        <!-- Description -->
        <div class="control-group <?php echo form_error('description') ? 'error' : ''; ?>">
            <?php echo form_label('Description'. lang('bf_form_label_required'), 'description', array('class' => "control-label") ); ?>
            <div class='controls'>
                <?php 
                    echo form_textarea( array( 
                                                'name'  => 'description', 
                                                'id'    => 'description', 
                                                'rows'  => '5', 
                                                'cols'  => '80', 
                                                'class' => 'wysiwyg-advanced', 
                                                'value' => set_value('description', isset($trip['description']) ? $trip['description'] : '') 
                                                ) 
                                        )
                ?>
                <span class="help-inline"><?php echo form_error('description'); ?></span>
            </div>
        </div>
        
        <!-- Image -->
    	<div class="control-group <?php echo form_error('image_id') ? 'error' : '' ?>">
    		<?php echo form_label('Image'. lang('bf_form_label_required'), '', array('class' => "control-label") ); ?>
    		<div class="controls">
    			<span id="span_image_id"> 
    				<input type="hidden" id="image_id" name="image_id" value="<?php echo isset($trip['image_id']) ? $trip['image_id'] : ''; ?>" />
    				<img width="200" src="<?php echo isset($trip['image_id']) && !empty($trip['image_id']) ? site_url('files/thumb/'.$trip['image_id'].'/200/fit') : img_path().'no_image.jpg'; ?>" />
    			</span>
    		</div>
    		<br />
    		<div class="controls">
    			<a href="<?php echo site_url(SITE_AREA.'/content/files/fileman/image/?target=image_id'); ?>" class="btn btn-success btn-upload-iframe" data-target="image_id">Add Image</a>
    			<a href="#" id="delete-button" class="btn btn-danger delete-image" rel="<?php echo $trip['id']; ?>">Remove Image</a>		
    			<?php if (form_error('image_id')) echo '<span class="help-inline">'. form_error('image_id') .'</span>'; ?>					
    		</div>
    	</div>
        
        <input id="author_id" type="hidden" name="author_id" maxlength="11" value="<?php echo set_value('author_id', isset($trip['author_id']) ? $trip['author_id'] : ''); ?>"  />



        <div class="form-actions">
            <br/>
            <input type="submit" name="submit" class="btn btn-primary" value="Edit trip" />
            or <?php echo anchor(SITE_AREA .'/content/trip', lang('trip_cancel'), 'class="btn btn-warning"'); ?>
            

    <?php if ($this->auth->has_permission('trip.Content.Delete')) : ?>

            or <a class="btn btn-danger" id="delete-me" href="<?php echo site_url(SITE_AREA .'/content/trip/delete/'. $id);?>" onclick="return confirm('<?php echo lang('trip_delete_confirm'); ?>')" name="delete-me">
            <i class="icon-trash icon-white">&nbsp;</i>&nbsp;<?php echo lang('trip_delete_record'); ?>
            </a>

    <?php endif; ?>


        </div>
    </fieldset>
    <?php echo form_close(); ?>


</div>

<!-- javascript for delete gallery -->
<script>
    var URL_IMAGE   = '<?php echo site_url(SITE_AREA ."/content/trip/delete_image") ?>' ;
</script>