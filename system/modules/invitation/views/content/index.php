<div class="admin-box">
	<h3>Trip List</h3>
	<?php echo form_open($this->uri->uri_string()); ?>
		<table class="table table-striped">
			<thead>
				<tr>
					<?php if ($this->auth->has_permission('Trip.Content.Delete') && isset($records) && is_array($records) && count($records)) : ?>
					<th class="column-check"><input class="check-all" type="checkbox" /></th>
					<?php endif;?>
					
		            <th width="15%">Image</th>
            		<th width="10%">Name</th>
            		<th width="10%">Nickname</th>
					<th width="10%">Facebook</th>
					<th width="10%">Twitter</th>
					<th width="10%">Instagram</th>
					<th width="10%">Description</th>
            		<th width="15%"></th>
				</tr>
			</thead>
			<?php if (isset($records) && is_array($records) && count($records)) : ?>
			<tfoot>
				<?php if ($this->auth->has_permission('Trip.Content.Delete')) : ?>
				<tr>
					<td colspan="8">
						<?php echo lang('bf_with_selected') ?>
						<input type="submit" name="delete" id="delete-me" class="btn btn-danger" value="<?php echo lang('bf_action_delete') ?>" onclick="return confirm('<?php echo lang('trip_delete_confirm'); ?>')">
					</td>
				</tr>
				<?php endif;?>
			</tfoot>
			<?php endif; ?>
			<tbody>
			<?php if (isset($records) && is_array($records) && count($records)) : ?>
			<?php foreach ($records as $record) : ?>
				<tr>
					<?php if ($this->auth->has_permission('Trip.Content.Delete')) : ?>
					<td><input type="checkbox" name="checked[]" value="<?php echo $record->id ?>" /></td>
					<?php endif;?>
    			
                    <td><img src="<?php echo base_url().'files/large/'.$record->image_id.'/200/200' ?>" /></td>
    				<td><?php echo $record->name?></td>
    				<td><?php echo $record->nickname?></td>
    				<td><a target="_blank" href="<?php echo $record->facebook?>"><?php echo $record->facebook?></a></td>
    				<td><a target="_blank" href="<?php echo $record->twitter?>"><?php echo $record->twitter?></a></td>
    				<td><a target="_blank" href="<?php echo $record->instagram?>"><?php echo $record->instagram?></a></td>
    				<td>
                        <?php 
    						$description = strip_tags($record->description);
    						echo ( strlen($description) > 200 ) ? substr($description,0,198) . '..' : $description;                        
    					?>
                    </td>
                    <td class="actions">
    					<?php if (has_permission('Trip.Content.Edit')): ?>
    					<?php 
    						echo anchor(SITE_AREA . '/content/invitation/edit/' . $record->id, 
    												'<i class="icon-edit icon-white"></i> <span>Edit</span>', 
    												array('class' => 'btn btn-warning edit edit_file')
										);
    					?>
    					<?php endif; ?>
    					<?php if (has_permission('Invitation.Content.Delete')): ?>
    					<?php 
							echo anchor(SITE_AREA . '/content/invitation/delete/' . $record->id, 
													'<i class="icon-trash icon-white"></i> <span>Delete</span>', 
													array('class' => 'btn btn-danger confirm', "onclick" => "return confirm('".lang("trip_delete_confirm")."')")
                                        ); 
    					?>
    					<?php endif; ?>
    				</td>
				</tr>
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