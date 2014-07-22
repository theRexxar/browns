<div class="admin-box">
	<h3>Trip List</h3>
	<?php echo form_open($this->uri->uri_string()); ?>
		<table class="table table-striped">
			<thead>
				<tr>
					<?php if ($this->auth->has_permission('News.Content.Delete') && isset($records) && is_array($records) && count($records)) : ?>
					<th class="column-check"><input class="check-all" type="checkbox" /></th>
					<?php endif;?>
					
		            <th width="10%">Image</th>
            		<th width="20%">Title</th>
            		<th width="30%">Description</th>
					<th width="10%">Posted By</th>
            		<th width="15%">Created</th>
            		<th width="15%"></th>
				</tr>
			</thead>
			<?php if (isset($records) && is_array($records) && count($records)) : ?>
			<tfoot>
				<?php if ($this->auth->has_permission('News.Content.Delete')) : ?>
				<tr>
					<td colspan="8">
						<?php echo lang('bf_with_selected') ?>
						<input type="submit" name="delete" id="delete-me" class="btn btn-danger" value="<?php echo lang('bf_action_delete') ?>" onclick="return confirm('<?php echo lang('news_delete_confirm'); ?>')">
					</td>
				</tr>
				<?php endif;?>
			</tfoot>
			<?php endif; ?>
			<tbody>
			<?php if (isset($records) && is_array($records) && count($records)) : ?>
			<?php foreach ($records as $key=>$record) : ?>
				<tr>
					<?php if ($this->auth->has_permission('News.Content.Delete')) : ?>
					<td><input type="checkbox" name="checked[]" value="<?php echo $record->id ?>" /></td>
					<?php endif;?>
					
                    <td>
                        <img src="<?php echo base_url().'files/large/'.$record->image_id.'/200/200' ?>" />
                        <?php if(isset($image[$record->id]) && ! empty($image[$record->id])) : ?>
                        <!--<br />
                        <center>                        
                            <a href="#show-gallery" id="gallery-popup-<?php echo $key; ?>" class="popup-gallery">
                                View Gallery
                            </a>
                        </center>-->
                        <?php endif; ?>                   
                    </td>
				    <td><?php echo $record->title?></td>
    				<td>
                        <?php 
    						$description = strip_tags($record->description);
    						echo ( strlen($description) > 200 ) ? substr($description,0,198) . '..' : $description;                        
    					?>
                    </td>
                    <td><?php echo $record->admin_name?></td>
    				<td><?php echo date('d M Y - H:i:s',strtotime($record->created_on));?></td>
                    <td class="actions">
    					<?php if (has_permission('News.Content.Edit')): ?>
    					<?php 
    						echo anchor(SITE_AREA . '/content/news/edit/' . $record->id, 
    												'<i class="icon-edit icon-white"></i> <span>Edit</span>', 
    												array('class' => 'btn btn-warning edit edit_file')
										);
    					?>
    					<?php endif; ?>
    					<?php if (has_permission('News.Content.Delete')): ?>
    					<?php 
							echo anchor(SITE_AREA . '/content/news/delete/' . $record->id, 
													'<i class="icon-trash icon-white"></i> <span>Delete</span>', 
													array('class' => 'btn btn-danger confirm', "onclick" => "return confirm('".lang("news_delete_confirm")."')")
                                        ); 
    					?>
    					<?php endif; ?>
    				</td>
                </tr>
                
                <?php if(isset($image[$record->id]) && ! empty($image[$record->id])) : ?>
                <div id="overlay" class="gallery_overlay"></div>
                
                <?php 
                    if(count($image[$record->id]) == 1)
                    {
                        $class = "gallery_popup1";
                    }
                    elseif(count($image[$record->id]) == 2)
                    {
                        $class = "gallery_popup2";
                    }
                    else
                    {
                        $class = "gallery_popup3";
                    }
                ?>
                <!--<div id="gallery-popup-<?php echo $key; ?>" class="<?php echo $class; ?> gallery-popup">
                    <a href="#close-gallery" id="close-gallery" class="closed" title="Close"></a>
                        <ul class="popup-ul">
                        <?php $i=0; foreach($image[$record->id] AS $image_list[$record->id]) : $i++; ?>
                            <li class="popup-li">
                                <img src="<?php echo base_url().'files/large/'.$image_list[$record->id]->file_id.'/200' ?>" />
                            </li>
                        <?php endforeach; ?>
                        </ul>
                </div>-->   
                <?php endif; ?>                                              
			<?php endforeach; ?>
			<?php else: ?>
				<tr>
					<td colspan="6">No records found that match your selection.</td>
				</tr>
			<?php endif; ?>
			</tbody>
		</table>
	<?php echo form_close(); ?>
    
    <?php echo $this->pagination->create_links(); ?>
</div>