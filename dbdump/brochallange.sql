-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 08, 2013 at 12:36 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `andhika_bonfire_v061`
--

-- --------------------------------------------------------

--
-- Table structure for table `an_activities`
--

DROP TABLE IF EXISTS `an_activities`;
CREATE TABLE IF NOT EXISTS `an_activities` (
  `activity_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL DEFAULT '0',
  `activity` varchar(255) NOT NULL,
  `module` varchar(255) NOT NULL,
  `created_on` datetime NOT NULL,
  `deleted` tinyint(12) NOT NULL DEFAULT '0',
  PRIMARY KEY (`activity_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=33 ;

--
-- Dumping data for table `an_activities`
--

INSERT INTO `an_activities` (`activity_id`, `user_id`, `activity`, `module`, `created_on`, `deleted`) VALUES
(1, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 14:53:14', 0),
(2, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 15:09:39', 0),
(3, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 15:11:06', 0),
(4, 1, 'App settings saved from: 127.0.0.1', 'core', '2012-11-20 15:13:29', 0),
(5, 1, 'App settings saved from: 127.0.0.1', 'core', '2012-11-20 15:13:35', 0),
(6, 1, 'modified user: Andhika Novandi Patria', 'users', '2012-11-20 15:17:45', 0),
(7, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 15:32:25', 0),
(8, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 15:34:09', 0),
(9, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 16:04:26', 0),
(10, 1, 'Migrate Type: files_ to Version: 1 from: 127.0.0.1', 'migrations', '2012-11-20 16:10:27', 0),
(11, 1, 'Migrate Type: files_ to Version: 2 from: 127.0.0.1', 'migrations', '2012-11-20 16:10:32', 0),
(12, 1, 'Upload File: 1 : 127.0.0.1', 'files', '2012-11-20 16:16:31', 0),
(13, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 16:18:03', 0),
(14, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-20 16:54:29', 0),
(15, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-21 11:57:13', 0),
(16, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-28 15:37:50', 0),
(17, 1, 'Migrate Type: article_ to Version: 1 from: 127.0.0.1', 'migrations', '2012-11-28 15:40:51', 0),
(18, 1, 'Migrate Type: article_ to Version: 2 from: 127.0.0.1', 'migrations', '2012-11-28 15:40:56', 0),
(19, 1, 'Created record with ID: 1 : 127.0.0.1', 'article', '2012-11-28 15:53:07', 0),
(20, 1, 'Deleted record with ID: 1 : 127.0.0.1', 'article', '2012-11-28 16:22:20', 0),
(21, 1, 'Updated record with ID: 1 : 127.0.0.1', 'article', '2012-11-28 16:24:06', 0),
(22, 1, 'Migrate Type: news_ to Version: 1 from: 127.0.0.1', 'migrations', '2012-11-28 16:26:50', 0),
(23, 1, 'Migrate Type: news_ to Version: 2 from: 127.0.0.1', 'migrations', '2012-11-28 16:26:56', 0),
(24, 1, 'Migrate Type: news_ to Version: 3 from: 127.0.0.1', 'migrations', '2012-11-28 16:27:02', 0),
(25, 1, 'Created record with ID: 1 : 127.0.0.1', 'news', '2012-11-28 16:37:30', 0),
(26, 1, 'Updated record with ID: 1 : 127.0.0.1', 'news', '2012-11-28 16:38:50', 0),
(27, 1, 'Upload File: 3 : 127.0.0.1', 'files', '2012-11-28 16:39:20', 0),
(28, 1, 'logged in from: 127.0.0.1', 'users', '2012-11-28 16:44:52', 0),
(29, 1, 'Updated record with ID: 1 : 127.0.0.1', 'news', '2012-11-28 16:47:59', 0),
(30, 1, 'logged in from: 127.0.0.1', 'users', '2013-01-08 12:34:03', 0),
(31, 1, 'created a new User: Administrator', 'users', '2013-01-08 12:34:36', 0),
(32, 1, 'modified user: Administrator', 'users', '2013-01-08 12:34:46', 0);

-- --------------------------------------------------------

--
-- Table structure for table `an_article`
--

DROP TABLE IF EXISTS `an_article`;
CREATE TABLE IF NOT EXISTS `an_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `author_id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `an_article`
--

INSERT INTO `an_article` (`id`, `title`, `description`, `author_id`, `image_id`, `slug`, `deleted`, `created_on`, `modified_on`) VALUES
(1, 'Article 1', '<p>\r\n	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nunc id nunc blandit tempus. Duis malesuada enim in sem porttitor et tempus eros convallis. Maecenas vel diam a nulla aliquet varius a ac felis. Sed eget mi nisi. Etiam et odio ac risus suscipit euismod vel sollicitudin lacus. Cras posuere, magna at posuere pellentesque, neque massa viverra libero, eu euismod est odio et ligula. Quisque vitae dignissim elit. Suspendisse potenti. Aliquam ipsum lorem, vehicula congue hendrerit vitae, pulvinar non erat. Vivamus venenatis lobortis est, ut pharetra nisl malesuada id. Sed sed ipsum sed nunc eleifend fermentum. Morbi in nisl tortor. Aliquam erat volutpat. Sed sed eleifend mi. Nulla vel dolor id dolor feugiat tincidunt.</p>\r\n', 1, 1, 'article-1', 0, '2012-11-28 15:53:07', '2012-11-28 16:24:06');

-- --------------------------------------------------------

--
-- Table structure for table `an_email_queue`
--

DROP TABLE IF EXISTS `an_email_queue`;
CREATE TABLE IF NOT EXISTS `an_email_queue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `to_email` varchar(128) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `alt_message` text,
  `max_attempts` int(11) NOT NULL DEFAULT '3',
  `attempts` int(11) NOT NULL DEFAULT '0',
  `success` tinyint(1) NOT NULL DEFAULT '0',
  `date_published` datetime DEFAULT NULL,
  `last_attempt` datetime DEFAULT NULL,
  `date_sent` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `an_file`
--

DROP TABLE IF EXISTS `an_file`;
CREATE TABLE IF NOT EXISTS `an_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `folder_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '1',
  `type` enum('a','v','d','i','o') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `extension` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `width` int(5) DEFAULT NULL,
  `height` int(5) DEFAULT NULL,
  `filesize` int(11) NOT NULL DEFAULT '0',
  `date_added` int(11) NOT NULL DEFAULT '0',
  `sort` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `an_file`
--

INSERT INTO `an_file` (`id`, `folder_id`, `user_id`, `type`, `name`, `filename`, `description`, `extension`, `mimetype`, `width`, `height`, `filesize`, `date_added`, `sort`) VALUES
(1, 1, 1, 'i', 'lipsum.jpg', '1353402991_235dc1360015219742bea74f8ceb89af.jpg', '', '.jpg', 'image/jpeg', 503, 350, 53, 1353402991, 0),
(2, 1, 1, 'i', '800x600.gif', '800x600.gif', '', '.gif', 'image/gif', 800, 600, 4, 0, 0),
(3, 1, 1, 'i', '640x480.gif', '1354095560_de440ba77ce1f31d344427645dd82c27.gif', '', '.gif', 'image/gif', 640, 480, 3, 1354095560, 0);

-- --------------------------------------------------------

--
-- Table structure for table `an_file_folders`
--

DROP TABLE IF EXISTS `an_file_folders`;
CREATE TABLE IF NOT EXISTS `an_file_folders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT '0',
  `slug` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `date_added` int(11) NOT NULL,
  `sort` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `an_file_folders`
--

INSERT INTO `an_file_folders` (`id`, `parent_id`, `slug`, `name`, `date_added`, `sort`) VALUES
(1, 0, 'default', 'Default Folder', 1353302632, 0);

-- --------------------------------------------------------

--
-- Table structure for table `an_login_attempts`
--

DROP TABLE IF EXISTS `an_login_attempts`;
CREATE TABLE IF NOT EXISTS `an_login_attempts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(40) NOT NULL,
  `login` varchar(50) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `an_news`
--

DROP TABLE IF EXISTS `an_news`;
CREATE TABLE IF NOT EXISTS `an_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `author_id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `modified_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `an_news`
--

INSERT INTO `an_news` (`id`, `title`, `description`, `author_id`, `image_id`, `slug`, `deleted`, `created_on`, `modified_on`) VALUES
(1, 'News 1', '<p>\r\n	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nunc id nunc blandit tempus. Duis malesuada enim in sem porttitor et tempus eros convallis. Maecenas vel diam a nulla aliquet varius a ac felis. Sed eget mi nisi. Etiam et odio ac risus suscipit euismod vel sollicitudin lacus. Cras posuere, magna at posuere pellentesque, neque massa viverra libero, eu euismod est odio et ligula. Quisque vitae dignissim elit. Suspendisse potenti. Aliquam ipsum lorem, vehicula congue hendrerit vitae, pulvinar non erat. Vivamus venenatis lobortis est, ut pharetra nisl malesuada id. Sed sed ipsum sed nunc eleifend fermentum. Morbi in nisl tortor. Aliquam erat volutpat. Sed sed eleifend mi. Nulla vel dolor id dolor feugiat tincidunt.</p>', 1, 3, 'news-1', 0, '2012-11-28 16:37:29', '2012-11-28 16:47:59');

-- --------------------------------------------------------

--
-- Table structure for table `an_news_gallery`
--

DROP TABLE IF EXISTS `an_news_gallery`;
CREATE TABLE IF NOT EXISTS `an_news_gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `an_news_gallery`
--

INSERT INTO `an_news_gallery` (`id`, `news_id`, `file_id`) VALUES
(2, 1, 2),
(3, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `an_permissions`
--

DROP TABLE IF EXISTS `an_permissions`;
CREATE TABLE IF NOT EXISTS `an_permissions` (
  `permission_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `status` enum('active','inactive','deleted') DEFAULT 'active',
  PRIMARY KEY (`permission_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=64 ;

--
-- Dumping data for table `an_permissions`
--

INSERT INTO `an_permissions` (`permission_id`, `name`, `description`, `status`) VALUES
(1, 'Site.Signin.Allow', 'Allow users to login to the site', 'active'),
(2, 'Site.Content.View', 'Allow users to view the Content Context', 'active'),
(3, 'Site.Reports.View', 'Allow users to view the Reports Context', 'active'),
(4, 'Site.Settings.View', 'Allow users to view the Settings Context', 'active'),
(5, 'Site.Developer.View', 'Allow users to view the Developer Context', 'active'),
(6, 'Bonfire.Roles.Manage', 'Allow users to manage the user Roles', 'active'),
(7, 'Bonfire.Users.Manage', 'Allow users to manage the site Users', 'active'),
(8, 'Bonfire.Users.View', 'Allow users access to the User Settings', 'active'),
(9, 'Bonfire.Users.Add', 'Allow users to add new Users', 'active'),
(10, 'Bonfire.Database.Manage', 'Allow users to manage the Database settings', 'active'),
(11, 'Bonfire.Emailer.Manage', 'Allow users to manage the Emailer settings', 'active'),
(12, 'Bonfire.Logs.View', 'Allow users access to the Log details', 'active'),
(13, 'Bonfire.Logs.Manage', 'Allow users to manage the Log files', 'active'),
(14, 'Bonfire.Emailer.View', 'Allow users access to the Emailer settings', 'active'),
(15, 'Site.Signin.Offline', 'Allow users to login to the site when the site is offline', 'active'),
(16, 'Bonfire.Permissions.View', 'Allow access to view the Permissions menu unders Settings Context', 'active'),
(17, 'Bonfire.Permissions.Manage', 'Allow access to manage the Permissions in the system', 'active'),
(18, 'Bonfire.Roles.Delete', 'Allow users to delete user Roles', 'active'),
(19, 'Bonfire.Modules.Add', 'Allow creation of modules with the builder.', 'active'),
(20, 'Bonfire.Modules.Delete', 'Allow deletion of modules.', 'active'),
(21, 'Permissions.Administrator.Manage', 'To manage the access control permissions for the Administrator role.', 'active'),
(22, 'Permissions.Editor.Manage', 'To manage the access control permissions for the Editor role.', 'active'),
(24, 'Permissions.User.Manage', 'To manage the access control permissions for the User role.', 'active'),
(25, 'Permissions.Developer.Manage', 'To manage the access control permissions for the Developer role.', 'active'),
(27, 'Activities.Own.View', 'To view the users own activity logs', 'active'),
(28, 'Activities.Own.Delete', 'To delete the users own activity logs', 'active'),
(29, 'Activities.User.View', 'To view the user activity logs', 'active'),
(30, 'Activities.User.Delete', 'To delete the user activity logs, except own', 'active'),
(31, 'Activities.Module.View', 'To view the module activity logs', 'active'),
(32, 'Activities.Module.Delete', 'To delete the module activity logs', 'active'),
(33, 'Activities.Date.View', 'To view the users own activity logs', 'active'),
(34, 'Activities.Date.Delete', 'To delete the dated activity logs', 'active'),
(35, 'Bonfire.UI.Manage', 'Manage the Bonfire UI settings', 'active'),
(36, 'Bonfire.Settings.View', 'To view the site settings page.', 'active'),
(37, 'Bonfire.Settings.Manage', 'To manage the site settings.', 'active'),
(38, 'Bonfire.Activities.View', 'To view the Activities menu.', 'active'),
(39, 'Bonfire.Database.View', 'To view the Database menu.', 'active'),
(40, 'Bonfire.Migrations.View', 'To view the Migrations menu.', 'active'),
(41, 'Bonfire.Builder.View', 'To view the Modulebuilder menu.', 'active'),
(42, 'Bonfire.Roles.View', 'To view the Roles menu.', 'active'),
(43, 'Bonfire.Sysinfo.View', 'To view the System Information page.', 'active'),
(44, 'Bonfire.Translate.Manage', 'To manage the Language Translation.', 'active'),
(45, 'Bonfire.Translate.View', 'To view the Language Translate menu.', 'active'),
(46, 'Bonfire.UI.View', 'To view the UI/Keyboard Shortcut menu.', 'active'),
(47, 'Bonfire.Update.Manage', 'To manage the Bonfire Update.', 'active'),
(48, 'Bonfire.Update.View', 'To view the Developer Update menu.', 'active'),
(49, 'Bonfire.Profiler.View', 'To view the Console Profiler Bar.', 'active'),
(50, 'Bonfire.Roles.Add', 'To add New Roles', 'active'),
(51, 'Files.Content.View', '', 'active'),
(52, 'Files.Content.Create', '', 'active'),
(53, 'Files.Content.Edit', '', 'active'),
(54, 'Files.Content.Delete', '', 'active'),
(55, 'Files.Content.Download', '', 'active'),
(56, 'Article.Content.View', '', 'active'),
(57, 'Article.Content.Create', '', 'active'),
(58, 'Article.Content.Edit', '', 'active'),
(59, 'Article.Content.Delete', '', 'active'),
(60, 'News.Content.View', '', 'active'),
(61, 'News.Content.Create', '', 'active'),
(62, 'News.Content.Edit', '', 'active'),
(63, 'News.Content.Delete', '', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `an_roles`
--

DROP TABLE IF EXISTS `an_roles`;
CREATE TABLE IF NOT EXISTS `an_roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(60) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `default` tinyint(1) NOT NULL DEFAULT '0',
  `can_delete` tinyint(1) NOT NULL DEFAULT '1',
  `login_destination` varchar(255) NOT NULL DEFAULT '/',
  `deleted` int(1) NOT NULL DEFAULT '0',
  `default_context` varchar(255) NOT NULL DEFAULT 'content',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `an_roles`
--

INSERT INTO `an_roles` (`role_id`, `role_name`, `description`, `default`, `can_delete`, `login_destination`, `deleted`, `default_context`) VALUES
(1, 'Administrator', 'Has full control over every aspect of the site.', 0, 0, 'admin/content', 0, 'content'),
(2, 'Editor', 'Can handle day-to-day management, but does not have full power.', 0, 1, '', 0, 'content'),
(4, 'User', 'This is the default user with access to login.', 1, 0, '', 0, 'content'),
(6, 'Developer', 'Developers typically are the only ones that can access the developer tools. Otherwise identical to Administrators, at least until the site is handed off.', 0, 1, '', 0, 'content');

-- --------------------------------------------------------

--
-- Table structure for table `an_role_permissions`
--

DROP TABLE IF EXISTS `an_role_permissions`;
CREATE TABLE IF NOT EXISTS `an_role_permissions` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `an_role_permissions`
--

INSERT INTO `an_role_permissions` (`role_id`, `permission_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(1, 21),
(1, 22),
(1, 24),
(1, 25),
(1, 27),
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(1, 32),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(1, 37),
(1, 38),
(1, 39),
(1, 40),
(1, 41),
(1, 42),
(1, 43),
(1, 44),
(1, 45),
(1, 46),
(1, 47),
(1, 48),
(1, 49),
(1, 50),
(1, 51),
(1, 52),
(1, 53),
(1, 54),
(1, 55),
(1, 56),
(1, 57),
(1, 58),
(1, 59),
(1, 60),
(1, 61),
(1, 62),
(1, 63),
(2, 1),
(2, 2),
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(4, 1),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(6, 49);

-- --------------------------------------------------------

--
-- Table structure for table `an_schema_version`
--

DROP TABLE IF EXISTS `an_schema_version`;
CREATE TABLE IF NOT EXISTS `an_schema_version` (
  `type` varchar(40) NOT NULL,
  `version` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `an_schema_version`
--

INSERT INTO `an_schema_version` (`type`, `version`) VALUES
('app_', 0),
('article_', 2),
('core', 34),
('files_', 2),
('news_', 3);

-- --------------------------------------------------------

--
-- Table structure for table `an_sessions`
--

DROP TABLE IF EXISTS `an_sessions`;
CREATE TABLE IF NOT EXISTS `an_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `an_settings`
--

DROP TABLE IF EXISTS `an_settings`;
CREATE TABLE IF NOT EXISTS `an_settings` (
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `module` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `unique - name` (`name`),
  KEY `index - name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `an_settings`
--

INSERT INTO `an_settings` (`name`, `module`, `value`) VALUES
('auth.allow_name_change', 'core', '1'),
('auth.allow_register', 'core', '0'),
('auth.allow_remember', 'core', '1'),
('auth.do_login_redirect', 'core', '1'),
('auth.login_type', 'core', 'both'),
('auth.name_change_frequency', 'core', '1'),
('auth.name_change_limit', 'core', '1'),
('auth.password_force_mixed_case', 'core', '0'),
('auth.password_force_numbers', 'core', '0'),
('auth.password_force_symbols', 'core', '0'),
('auth.password_min_length', 'core', '8'),
('auth.password_show_labels', 'core', '0'),
('auth.remember_length', 'core', '1209600'),
('auth.use_extended_profile', 'core', '0'),
('auth.use_usernames', 'core', '1'),
('auth.user_activation_method', 'core', '0'),
('form_save', 'core.ui', 'ctrl+s/⌘+s'),
('goto_content', 'core.ui', 'alt+c'),
('mailpath', 'email', '/usr/sbin/sendmail'),
('mailtype', 'email', 'text'),
('protocol', 'email', 'mail'),
('sender_email', 'email', 'andhikanovandi@gmail.com'),
('site.languages', 'core', 'a:3:{i:0;s:7:"english";i:1;s:7:"persian";i:2;s:10:"portuguese";}'),
('site.list_limit', 'core', '25'),
('site.show_front_profiler', 'core', '0'),
('site.show_profiler', 'core', '1'),
('site.status', 'core', '1'),
('site.system_email', 'core', 'andhikanovandi@gmail.com'),
('site.title', 'core', 'Andhika Bonfire V 0.6.1'),
('smtp_host', 'email', ''),
('smtp_pass', 'email', ''),
('smtp_port', 'email', ''),
('smtp_timeout', 'email', ''),
('smtp_user', 'email', ''),
('updates.bleeding_edge', 'core', '1'),
('updates.do_check', 'core', '1');

-- --------------------------------------------------------

--
-- Table structure for table `an_users`
--

DROP TABLE IF EXISTS `an_users`;
CREATE TABLE IF NOT EXISTS `an_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL DEFAULT '4',
  `email` varchar(120) NOT NULL,
  `username` varchar(30) NOT NULL DEFAULT '',
  `password_hash` varchar(40) NOT NULL,
  `reset_hash` varchar(40) DEFAULT NULL,
  `salt` varchar(7) NOT NULL,
  `last_login` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `last_ip` varchar(40) NOT NULL DEFAULT '',
  `created_on` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `banned` tinyint(1) NOT NULL DEFAULT '0',
  `ban_message` varchar(255) DEFAULT NULL,
  `reset_by` int(10) DEFAULT NULL,
  `display_name` varchar(255) DEFAULT '',
  `display_name_changed` date DEFAULT NULL,
  `timezone` char(4) NOT NULL DEFAULT 'UM6',
  `language` varchar(20) NOT NULL DEFAULT 'english',
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `activate_hash` varchar(40) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `an_users`
--

INSERT INTO `an_users` (`id`, `role_id`, `email`, `username`, `password_hash`, `reset_hash`, `salt`, `last_login`, `last_ip`, `created_on`, `deleted`, `banned`, `ban_message`, `reset_by`, `display_name`, `display_name_changed`, `timezone`, `language`, `active`, `activate_hash`) VALUES
(1, 1, 'andhikanovandi@gmail.com', 'andhika', '1eb4a78be531775ca56a5dfbe37733d01df8c477', NULL, '2pnluoI', '2013-01-08 12:34:03', '127.0.0.1', '0000-00-00 00:00:00', 0, 0, NULL, NULL, 'Andhika Novandi Patria', NULL, 'UP7', 'english', 1, ''),
(2, 2, 'admin@bonfire.com', 'admin', '5a9476d8af6496cb825dcf7de722bfaeeb5111ae', NULL, 'cfRh82B', '0000-00-00 00:00:00', '', '2013-01-08 12:34:36', 0, 0, NULL, NULL, 'Administrator', NULL, 'UP7', 'english', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `an_user_cookies`
--

DROP TABLE IF EXISTS `an_user_cookies`;
CREATE TABLE IF NOT EXISTS `an_user_cookies` (
  `user_id` bigint(20) NOT NULL,
  `token` varchar(128) NOT NULL,
  `created_on` datetime NOT NULL,
  KEY `token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `an_user_cookies`
--

INSERT INTO `an_user_cookies` (`user_id`, `token`, `created_on`) VALUES
(1, 'mTt20qQ0iButItREitqpre79qzQRCElxUMWCG3pxY4MMOIzGias0xbCIXWlOXgh4cQn5S17YZouUVARzKf4lcxSKE1cBwxRIfQMDrKbPT4S4bk8rZjxIPTCOMhSMmcIy', '2012-11-20 14:53:14'),
(1, 'j7fmEj3RsKHEzlbjCWSpKymY84xwsdVIRusmKnejdb8iucnQVMSFeUYOSGJPJRWjKffn9dReu28tOE8kSGPYqR9CPEpC2jfbY0SO421jGbyZTQofIqnvxCXqulfbEH5f', '2012-11-20 15:09:39');

-- --------------------------------------------------------

--
-- Table structure for table `an_user_meta`
--

DROP TABLE IF EXISTS `an_user_meta`;
CREATE TABLE IF NOT EXISTS `an_user_meta` (
  `meta_id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(20) unsigned NOT NULL DEFAULT '0',
  `meta_key` varchar(255) NOT NULL DEFAULT '',
  `meta_value` text,
  PRIMARY KEY (`meta_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `an_user_meta`
--

INSERT INTO `an_user_meta` (`meta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'state', 'SC'),
(2, 1, 'country', 'US'),
(3, 1, 'type', 'small'),
(4, 2, 'state', 'SC'),
(5, 2, 'country', 'US'),
(6, 2, 'type', 'small');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
