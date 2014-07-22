<ul class="nav nav-pills">
	<li <?php echo $this->uri->segment(4) == '' ? 'class="active"' : '' ?>>
		<a href="<?php echo site_url(SITE_AREA .'/content/article') ?>" id="list"><?php echo lang('article_list'); ?></a>
	</li>
	<?php if ($this->auth->has_permission('Article.Content.Create')) : ?>
	<li <?php echo $this->uri->segment(4) == 'create' ? 'class="active"' : '' ?> >
		<a href="<?php echo site_url(SITE_AREA .'/content/article/create') ?>" id="create_new"><?php echo lang('article_new'); ?></a>
	</li>
	<?php endif; ?>
</ul>