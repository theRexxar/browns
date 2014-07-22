<ul class="nav nav-pills">
	<li <?php echo $this->uri->segment(4) == '' ? 'class="active"' : '' ?>>
		<a href="<?php echo site_url(SITE_AREA .'/content/trip') ?>" id="list"><?php echo lang('trip_list'); ?></a>
	</li>
	<?php if ($this->auth->has_permission('Trip.Content.Create')) : ?>
	<li <?php echo $this->uri->segment(4) == 'create' ? 'class="active"' : '' ?> >
		<a href="<?php echo site_url(SITE_AREA .'/content/trip/create') ?>" id="create_new"><?php echo lang('trip_new'); ?></a>
	</li>
	<?php endif; ?>
</ul>