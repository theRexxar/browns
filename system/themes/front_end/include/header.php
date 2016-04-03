<header class="navbar navbar-default navbar-fixed-top <?php echo $this->uri->segment(1) == "home" || $this->uri->segment(1) == "" ? 'home-nav' : ''; ?>">
	<div class="container">
		<div class="row">
			<div class="navbar-header">
				<a href="<?php echo base_url();?>" title="Browns Furniture" alt="Home">
					<?php if($this->uri->segment(1) == "home" || $this->uri->segment(1) == "") : ?>
						<img src="<?php echo base_url();?>public/img/logo.png" alt="browns furniture">
					<?php else : ?>
						<img src="<?php echo base_url();?>public/img/logo-dark.png" alt="browns furniture">
					<?php endif; ?>
				</a>
			</div>
			<ul class="nav navbar-nav navbar-right">
				<li><a href="<?php echo base_url(); ?>home" class="<?php echo $this->uri->segment(1) == "home" || $this->uri->segment(1) == "" ? 'active' : ''; ?>">Welcome</a></li>
				<li><a href="<?php echo base_url(); ?>products" class="<?php echo $this->uri->segment(1) == "products" ? 'active' : ''; ?>">Products</a></li>
				<li><a href="<?php echo base_url(); ?>our-philosophy" class="<?php echo $this->uri->segment(1) == "our-philosophy" ? 'active' : ''; ?>">Our Philosophy</a></li>
				<li><a href="<?php echo base_url(); ?>contact" class="<?php echo $this->uri->segment(1) == "contact" ? 'active' : ''; ?>">Contact</a></li>
			</ul>
		</div>
	</div>
</header>