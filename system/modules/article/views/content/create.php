<?php if (validation_errors()) : ?>
<div class="alert alert-block alert-error fade in ">
  <a class="close" data-dismiss="alert">&times;</a>
  <h4 class="alert-heading">Please fix the following errors :</h4>
 <?php echo validation_errors(); ?>
</div>
<?php endif; ?>
<?php // Change the css classes to suit your needs
if( isset($article) ) {
    $article = (array)$article;
}
$id = isset($article['id']) ? $article['id'] : '';
?>
<div class="admin-box">
    <h3>Create Article</h3>
    
    <?php echo form_open($this->uri->uri_string(), 'class="form-horizontal"'); ?>
    <fieldset>
        <!-- Title -->
        <div class="control-group <?php echo form_error('title') ? 'error' : ''; ?>">
            <?php echo form_label('Title'. lang('bf_form_label_required'), 'title', array('class' => "control-label") ); ?>
            <div class='controls'>
                <input id="title" type="text" name="title" maxlength="255" value="<?php echo set_value('title', isset($article['title']) ? $article['title'] : ''); ?>"  />
                <span class="help-inline"><?php echo form_error('title'); ?></span>
            </div>
        </div>
                    
        <!-- Slug -->
        <div class="control-group <?php echo form_error('slug') ? 'error' : '' ?>">
            <?php echo form_label('Slug'. lang('bf_form_label_required'), 'slug', array('class' => "control-label") ); ?>
            <div class="controls">
                <input id="slug" type="text" name="slug" value="<?php echo set_value('slug', isset($article['slug']) ? $article['slug'] : ''); ?>" />
                <span class="help-inline"><?php echo form_error('slug'); ?></span>
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
                                                'value' => set_value('description', isset($article['description']) ? $article['description'] : '') 
                                                ) 
                                        )
                ?>
                <span class="help-inline"><?php echo form_error('description'); ?></span>
            </div>
        </div>
        
        <!-- Image -->
    	<div class="control-group <?php echo form_error('image_id') ? 'error' : '' ?>">
    		<?php echo form_label('Image'. lang('bf_form_label_required'), 'image', array('class' => "control-label") ); ?>
    		<div class="controls">
    			<span id="span_image_id"> 
    				<input type="hidden" id="image_id" name="image_id" value="<?php echo isset($article['image_id']) ? $article['image_id'] : ''; ?>" />
    				<img width="200" src="<?php echo isset($article['image_id']) && !empty($article['image_id']) ? site_url('files/thumb/'.$article['image_id'].'/200/fit') : img_path().'no_image.jpg'; ?>" />
    			</span>
    		</div>
    		<br />
    		<div class="controls">
    			<a href="<?php echo site_url(SITE_AREA.'/content/files/fileman/image/?target=image_id'); ?>" class="btn btn-success btn-upload-iframe" data-target="image_id">Add Image</a>
    			<a href="#" class="btn btn-danger" id="remove_image_id">Remove Image</a>		
    			<?php if (form_error('image_id')) echo '<span class="help-inline">'. form_error('image_id') .'</span>'; ?>					
    		</div>
    	</div>
        
        <input id="author_id" type="hidden" name="author_id" maxlength="11" value="<?php echo $this->auth->user_id(); ?>"  />



        <div class="form-actions">
            <br/>
            <input type="submit" name="submit" class="btn btn-primary" value="Create Article" />
            or <?php echo anchor(SITE_AREA .'/content/article', lang('article_cancel'), 'class="btn btn-warning"'); ?>
            
        </div>
    </fieldset>
    <?php echo form_close(); ?>


</div>
