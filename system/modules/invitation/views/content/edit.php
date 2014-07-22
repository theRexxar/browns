<?php if (validation_errors()) : ?>
<div class="alert alert-block alert-error fade in ">
  <a class="close" data-dismiss="alert">&times;</a>
  <h4 class="alert-heading">Please fix the following errors :</h4>
 <?php echo validation_errors(); ?>
</div>
<?php endif; ?>
<?php // Change the css classes to suit your needs
if( isset($invitation) ) {
    $invitation = (array)$invitation;
}
$id = isset($invitation['id']) ? $invitation['id'] : '';
?>
<div class="admin-box">
    <h3>Edit Invitation</h3>
    
    <?php echo form_open($this->uri->uri_string(), 'class="form-horizontal"'); ?>
    <fieldset>
        <!-- Title -->
        <div class="control-group <?php echo form_error('name') ? 'error' : ''; ?>">
            <?php echo form_label('Name'. lang('bf_form_label_required'), 'name', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="name" type="text" name="name" maxlength="255" value="<?php echo set_value('name', isset($invitation['name']) ? $invitation['name'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('name'); ?></span>
            </div>
        </div>
                    
        <!-- Slug -->
        <div class="control-group <?php echo form_error('slug') ? 'error' : '' ?>">
            <?php echo form_label('Slug'. lang('bf_form_label_required'), 'slug', array('class' => "control-label") ); ?>
            <div class="controls">
                <input id="slug" type="text" name="slug" value="<?php echo set_value('slug', isset($invitation['slug']) ? $invitation['slug'] : ''); ?>" />
                <span class="help-inline"><?php echo form_error('slug'); ?></span>
            </div>
        </div>

        <!-- Nickname -->
        <div class="control-group <?php echo form_error('nickname') ? 'error' : ''; ?>">
            <?php echo form_label('Nickname'. lang('bf_form_label_required'), 'nickname', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="nickname" type="text" name="nickname" maxlength="255" value="<?php echo set_value('nickname', isset($invitation['nickname']) ? $invitation['nickname'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('nickname'); ?></span>
            </div>
        </div>

        <!-- facebook -->
        <div class="control-group <?php echo form_error('facebook') ? 'error' : ''; ?>">
            <?php echo form_label('Facebook url'. lang('bf_form_label_required'), 'facebook', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="facebook" type="text" name="facebook" maxlength="255" value="<?php echo set_value('facebook', isset($invitation['facebook']) ? $invitation['facebook'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('facebook'); ?></span>
            </div>
        </div>

        <!-- instagram -->
        <div class="control-group <?php echo form_error('instagram') ? 'error' : ''; ?>">
            <?php echo form_label('Instagram url'. lang('bf_form_label_required'), 'instagram', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="instagram" type="text" name="instagram" maxlength="255" value="<?php echo set_value('instagram', isset($invitation['instagram']) ? $invitation['instagram'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('instagram'); ?></span>
            </div>
        </div>


        <!-- twitter -->
        <div class="control-group <?php echo form_error('twitter') ? 'error' : ''; ?>">
            <?php echo form_label('Twitter url'. lang('bf_form_label_required'), 'twitter', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="twitter" type="text" name="twitter" maxlength="255" value="<?php echo set_value('twitter', isset($invitation['twitter']) ? $invitation['twitter'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('twitter'); ?></span>
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
                                                'value' => set_value('description', isset($invitation['description']) ? $invitation['description'] : '') 
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
    				<input type="hidden" id="image_id" name="image_id" value="<?php echo isset($invitation['image_id']) ? $invitation['image_id'] : ''; ?>" />
    				<img width="200" src="<?php echo isset($invitation['image_id']) && !empty($invitation['image_id']) ? site_url('files/thumb/'.$invitation['image_id'].'/200/fit') : img_path().'no_image.jpg'; ?>" />
    			</span>
    		</div>
    		<br />
    		<div class="controls">
    			<a href="<?php echo site_url(SITE_AREA.'/content/files/fileman/image/?target=image_id'); ?>" class="btn btn-success btn-upload-iframe" data-target="image_id">Add Image</a>
    			<a href="#" id="delete-button" class="btn btn-danger delete-image" rel="<?php echo $invitation['id']; ?>">Remove Image</a>		
    			<?php if (form_error('image_id')) echo '<span class="help-inline">'. form_error('image_id') .'</span>'; ?>					
    		</div>
    	</div>
        
        <input id="author_id" type="hidden" name="author_id" maxlength="11" value="<?php echo set_value('author_id', isset($invitation['author_id']) ? $invitation['author_id'] : ''); ?>"  />



        <div class="form-actions">
            <br/>
            <input type="submit" name="submit" class="btn btn-primary" value="Edit invitation" />
            or <?php echo anchor(SITE_AREA .'/content/invitation', lang('invitation_cancel'), 'class="btn btn-warning"'); ?>
            

    <?php if ($this->auth->has_permission('invitation.Content.Delete')) : ?>

            or <a class="btn btn-danger" id="delete-me" href="<?php echo site_url(SITE_AREA .'/content/invitation/delete/'. $id);?>" onclick="return confirm('<?php echo lang('invitation_delete_confirm'); ?>')" name="delete-me">
            <i class="icon-trash icon-white">&nbsp;</i>&nbsp;<?php echo lang('invitation_delete_record'); ?>
            </a>

    <?php endif; ?>


        </div>
    </fieldset>
    <?php echo form_close(); ?>


</div>

<!-- javascript for delete gallery -->
<script>
    var URL_IMAGE   = '<?php echo site_url(SITE_AREA ."/content/invitation/delete_image") ?>' ;
</script>