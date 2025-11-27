-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 27, 2025 at 06:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `13thvapourlounge2025`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `option_type` text NOT NULL,
  `total` decimal(10,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `product_id`, `quantity`, `option_type`, `total`, `created_at`, `updated_at`) VALUES
(32, 2, 36, 3, '{\"sd\":\"sadas\"}', 6099.00, '2025-11-26 00:17:36', '2025-11-26 00:17:36');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_07_09_013725_create_personal_access_tokens_table', 1),
(5, '2025_09_25_035158_create_products_table', 1),
(6, '2025_09_25_053737_create_product_descriptions_table', 1),
(7, '2025_09_25_053838_create_product_options_table', 1),
(8, '2025_10_16_122852_create_product_categories_table', 1),
(14, '2025_11_06_013058_create_carts_table', 2),
(15, '2025_11_25_041321_create_addresses_table', 2),
(21, '2025_11_25_041321_create_orders_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `street_name` varchar(255) NOT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  `town` varchar(255) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `note` text DEFAULT NULL,
  `delivery_type` enum('cod','walk-in') NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `status` enum('pending','preparing','completed','cancelled','failed') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `product_id`, `first_name`, `last_name`, `company_name`, `street_name`, `apartment`, `town`, `zip_code`, `contact_number`, `email`, `note`, `delivery_type`, `total`, `status`, `created_at`, `updated_at`) VALUES
(23, 2, 36, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 12219.00, 'pending', NULL, NULL),
(24, 2, 24, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 12219.00, 'pending', NULL, NULL),
(25, 2, 27, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 63.00, 'pending', NULL, NULL),
(26, 2, 25, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 63.00, 'pending', NULL, NULL),
(27, 2, 25, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 84.00, 'pending', NULL, NULL),
(28, 2, 36, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 10211.00, 'pending', NULL, NULL),
(29, 2, 34, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 10211.00, 'pending', NULL, NULL),
(30, 2, 37, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 73.00, 'pending', NULL, NULL),
(31, 2, 34, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 73.00, 'pending', NULL, NULL),
(32, 2, 22, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 42.00, 'pending', NULL, NULL),
(33, 2, 27, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 84.00, 'pending', NULL, NULL),
(34, 2, 34, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 4012, '09193471522', 'admin@gmail.com', 'fsdafas', 'cod', 23.00, 'pending', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'token1', '6795f51f8ba6308a2f8d45e8ff7f7ffd296ae56354232930183515b2bcafaaaf', '[\"*\"]', NULL, NULL, '2025-10-21 22:45:54', '2025-10-21 22:45:54'),
(2, 'App\\Models\\User', 1, 'token1', '4e65faf94086ad7d686fa5c86b4781b8ca2771fd633f788a20a13077cdbbdfa3', '[\"*\"]', NULL, NULL, '2025-11-02 19:46:58', '2025-11-02 19:46:58'),
(3, 'App\\Models\\User', 2, 'token2', 'd4326680a254335e4f6eb2aee6baefa9f07fde36c1d1f12da58b7c599036214c', '[\"*\"]', NULL, NULL, '2025-11-05 16:24:58', '2025-11-05 16:24:58'),
(4, 'App\\Models\\User', 2, 'token2', '2738ae23ab530132b07e9012a281fcfaa9279408ef4fae748c83d0496c56b1bd', '[\"*\"]', NULL, NULL, '2025-11-05 16:25:22', '2025-11-05 16:25:22'),
(5, 'App\\Models\\User', 2, 'token2', '89871a96a3dc18d13dbedb10fa063fa7e685ece4375f2e5557619d0880d8f6cf', '[\"*\"]', NULL, NULL, '2025-11-05 16:25:47', '2025-11-05 16:25:47'),
(6, 'App\\Models\\User', 2, 'token2', '86621c140ba3aa9026ffb7966e666219a3d4cbb4cb6b36b0948355dd2de880c8', '[\"*\"]', NULL, NULL, '2025-11-05 16:26:12', '2025-11-05 16:26:12'),
(7, 'App\\Models\\User', 2, 'token2', '1f9345cc05b32c13bfd84dc97173a0aa6d6695563454e6e6d05cfaf14b5ef037', '[\"*\"]', NULL, NULL, '2025-11-05 16:44:48', '2025-11-05 16:44:48'),
(8, 'App\\Models\\User', 2, 'token2', 'eca042f9d4807bbd3ffb102e5999be72b92d8942121b53a132d230432967e920', '[\"*\"]', NULL, NULL, '2025-11-05 16:47:31', '2025-11-05 16:47:31'),
(9, 'App\\Models\\User', 2, 'token2', 'f01a1480f43c03f542d27210419daa5630e68ebd08010b5870da2560e3ac5e62', '[\"*\"]', NULL, NULL, '2025-11-05 16:48:09', '2025-11-05 16:48:09'),
(10, 'App\\Models\\User', 2, 'token2', '6f1aca7e3211e37d860b5880826d0139c849a10919466ac838d9ff876b1bf685', '[\"*\"]', NULL, NULL, '2025-11-05 16:49:00', '2025-11-05 16:49:00'),
(11, 'App\\Models\\User', 2, 'token2', '25012a1ce9a88abd7af1ab3a1ab6952d8b8f887358415890d4107d8d1d82db04', '[\"*\"]', NULL, NULL, '2025-11-05 16:50:21', '2025-11-05 16:50:21'),
(12, 'App\\Models\\User', 2, 'token2', '2eb2e3402d8876343501b450911ec8643d7b61205ad7c6f1bdefa65bdd6a3ad5', '[\"*\"]', NULL, NULL, '2025-11-05 17:14:12', '2025-11-05 17:14:12'),
(13, 'App\\Models\\User', 2, 'token2', 'ab9a5f3047e332f049e5c8681acbe39a5d70e136437744753e7cc856970954f4', '[\"*\"]', NULL, NULL, '2025-11-05 17:15:15', '2025-11-05 17:15:15'),
(14, 'App\\Models\\User', 2, 'token2', 'af0ff11c2f59de468c42fb2ff59d8d764f22b99ec8618bcf4ad82400bc00d409', '[\"*\"]', NULL, NULL, '2025-11-05 17:15:55', '2025-11-05 17:15:55'),
(15, 'App\\Models\\User', 2, 'token2', '44ace31aaa2209b694d3fca0622374bc07ee9a3e348dfd6ed5f18d92d0ff5462', '[\"*\"]', '2025-11-05 20:18:58', NULL, '2025-11-05 17:17:17', '2025-11-05 20:18:58'),
(16, 'App\\Models\\User', 1, 'token1', 'ac750659f689151c3148dc1942ac4b82fdaab635cf9ef4e64d90510d5182183d', '[\"*\"]', NULL, NULL, '2025-11-05 18:06:56', '2025-11-05 18:06:56'),
(17, 'App\\Models\\User', 3, 'token3', '21528ccf897a30ed777d5610b5ee12c8966bc7c242a9241cf08bd713574f9cf5', '[\"*\"]', NULL, NULL, '2025-11-05 20:23:04', '2025-11-05 20:23:04'),
(18, 'App\\Models\\User', 3, 'token3', '5b2ad9c0459fb24eba79214dbe7dae94952e0efa16b5453cd692eedc2b31de2b', '[\"*\"]', '2025-11-05 22:07:05', NULL, '2025-11-05 20:23:32', '2025-11-05 22:07:05'),
(19, 'App\\Models\\User', 3, 'token3', 'ca2df8723480c30726fe311e0d90c66b55f2c083f7034b684019249148823b22', '[\"*\"]', NULL, NULL, '2025-11-06 09:41:50', '2025-11-06 09:41:50'),
(20, 'App\\Models\\User', 3, 'token3', 'e39213b802bf0fd53adb46ad3792ad422371c3a5708c15df3ff5cc21346f1489', '[\"*\"]', '2025-11-06 13:46:37', NULL, '2025-11-06 09:41:52', '2025-11-06 13:46:37'),
(21, 'App\\Models\\User', 1, 'token1', '3700d8dd745d744ff5e2465d147629e51a6adeb244d3e83c77d8a8a9dcb58bb0', '[\"*\"]', NULL, NULL, '2025-11-24 09:55:23', '2025-11-24 09:55:23'),
(22, 'App\\Models\\User', 1, 'token1', '838a6a63ad8f97548386f53f962669881c4ebda892747d75fc9f33a4b0c0535d', '[\"*\"]', NULL, NULL, '2025-11-24 09:55:24', '2025-11-24 09:55:24'),
(23, 'App\\Models\\User', 2, 'token2', 'dc40c5eaa916d28ea336d86edaf039bc42c5bee371529ca4d82465e4e292f8f6', '[\"*\"]', '2025-11-24 11:35:57', NULL, '2025-11-24 09:59:32', '2025-11-24 11:35:57'),
(24, 'App\\Models\\User', 1, 'token1', '35adc3dcfb316992b13f29811c159ae111818fab670a2eed1f8cc8757aa0c404', '[\"*\"]', NULL, NULL, '2025-11-24 19:15:46', '2025-11-24 19:15:46'),
(25, 'App\\Models\\User', 1, 'token1', '1653cd0d161d16e3be95aeddfb07e92103ec0b4f4ad982d23d8118a2192b027e', '[\"*\"]', NULL, NULL, '2025-11-24 19:15:47', '2025-11-24 19:15:47'),
(26, 'App\\Models\\User', 2, 'token2', '449efdd5c0597f9b5818c34cd5ff93aa362020c91eb9d06626afcf650437d329', '[\"*\"]', '2025-11-24 21:07:08', NULL, '2025-11-24 19:16:22', '2025-11-24 21:07:08'),
(27, 'App\\Models\\User', 2, 'token2', '5aab96e7b909eacc44fbd546a697ff28c7b3a3854cf4e141d417240f228348c7', '[\"*\"]', '2025-11-24 22:37:24', NULL, '2025-11-24 21:07:20', '2025-11-24 22:37:24'),
(28, 'App\\Models\\User', 2, 'token2', 'f3d934ea1c6d75230432b2ac961228fa2f381030acb672d122a7e1a84c673804', '[\"*\"]', '2025-11-25 04:27:42', NULL, '2025-11-25 01:21:34', '2025-11-25 04:27:42'),
(29, 'App\\Models\\User', 2, 'token2', '58c9aac1eb7351171581b32aa13bbe47a49b47b0352dcf093b6b87bcc9857ae0', '[\"*\"]', NULL, NULL, '2025-11-25 16:18:52', '2025-11-25 16:18:52'),
(30, 'App\\Models\\User', 2, 'token2', '129609d7b9f97944d1188e5b9496ed6ca71e170897e8877bd7d8d69017330d69', '[\"*\"]', '2025-11-26 02:21:46', NULL, '2025-11-25 16:18:54', '2025-11-26 02:21:46');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_category` varchar(255) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(8,2) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `product_details` text NOT NULL,
  `image` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_category`, `product_name`, `product_price`, `product_quantity`, `product_details`, `image`, `created_at`, `updated_at`) VALUES
(22, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 21.00, 23, '{\"description_body\":\"fdfadsafasd\",\"description_content\":[\"fsdfsdas\",\"fdsf\"],\"option_title\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}],\"option\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}]}', '[\"1762148916_090bd203-e522-48f1-a51e-ec5f2affb786.jpg\",\"1762148916_2f6d7753-a062-4fdf-af46-1be50f782104.jpg\"]', '2025-11-02 21:48:36', '2025-11-02 21:48:36'),
(23, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 21.00, 23, '{\"description_body\":\"fdfadsafasd\",\"description_content\":[\"fsdfsdas\",\"fdsf\"],\"option_title\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}],\"option\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}]}', '[\"1762148967_090bd203-e522-48f1-a51e-ec5f2affb786.jpg\",\"1762148967_2f6d7753-a062-4fdf-af46-1be50f782104.jpg\"]', '2025-11-02 21:49:27', '2025-11-02 21:49:27'),
(24, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 21.00, 23, '{\"description_body\":\"fdfadsafasd\",\"description_content\":[\"fsdfsdas\",\"fdsf\"],\"option_title\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}],\"option\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}]}', '[\"1762148969_090bd203-e522-48f1-a51e-ec5f2affb786.jpg\",\"1762148969_2f6d7753-a062-4fdf-af46-1be50f782104.jpg\"]', '2025-11-02 21:49:30', '2025-11-02 21:49:30'),
(25, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 21.00, 23, '{\"description_body\":\"fdfadsafasd\",\"description_content\":[\"fsdfsdas\",\"fdsf\"],\"option_title\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}],\"option\":[{\"title\":\"hahasdfdsdsf\",\"labels\":[\"dsf\"]}]}', '[\"1762149084_090bd203-e522-48f1-a51e-ec5f2affb786.jpg\",\"1762149084_2f6d7753-a062-4fdf-af46-1be50f782104.jpg\"]', '2025-11-02 21:51:24', '2025-11-02 21:51:24'),
(26, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"sdfsd\",\"description_content\":[\"212\"],\"option_title\":[{\"title\":\"fdsf\",\"labels\":[\"dsfds\"]}],\"option\":[{\"title\":\"fdsf\",\"labels\":[\"dsfds\"]}]}', '[\"1762149130_f87694d1-9dc7-4b0c-abf6-a862bc8b6743.jpg\"]', '2025-11-02 21:52:10', '2025-11-02 21:52:10'),
(27, 'fsdaf', 'Cholos Blend Salt Nic Vape Juice 20mL', 21.00, 20, '{\"description_body\":\"asdfasd\",\"description_content\":[\"fsdaf\"],\"option_title\":[{\"title\":\"fsdaffas\",\"labels\":[\"asdf\",\"dsad\"]}],\"option\":[{\"title\":\"fsdaffas\",\"labels\":[\"asdf\",\"dsad\"]}]}', '[\"1762149167_82867ce3-12e8-47d3-b1f1-c6b3f1319bda.jpg\"]', '2025-11-02 21:52:47', '2025-11-02 21:52:47'),
(28, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"dasd\",\"description_content\":[\"sad21\"],\"option_title\":[{\"title\":\"dsad\",\"labels\":[\"asd\"]}],\"option\":[{\"title\":\"dsad\",\"labels\":[\"asd\"]}]}', '[]', '2025-11-02 21:54:22', '2025-11-02 21:54:22'),
(29, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"dsa\",\"description_content\":[\"dasdsa\"],\"option_title\":[{\"title\":\"dsad\",\"labels\":[\"asd\"]}],\"option\":[{\"title\":\"dsad\",\"labels\":[\"asd\"]}]}', '[]', '2025-11-02 21:57:20', '2025-11-02 21:57:20'),
(30, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"dsad\",\"description_content\":[\"asda\"],\"option_title\":[{\"title\":\"das\",\"labels\":[\"asdsa\"]}],\"option\":[{\"title\":\"das\",\"labels\":[\"asdsa\"]}]}', '[]', '2025-11-02 21:57:48', '2025-11-02 21:57:48'),
(31, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"sdas\",\"description_content\":[\"dasd\"],\"option_title\":[{\"title\":\"dasd\",\"labels\":[\"sadas\"]}],\"option\":[{\"title\":\"dasd\",\"labels\":[\"sadas\"]}]}', '[\"1762149519_sakamoto days walppaper.jpeg\"]', '2025-11-02 21:58:39', '2025-11-02 21:58:39'),
(32, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"dsa\",\"description_content\":[\"dasd\"],\"option_title\":[{\"title\":\"dsad\",\"labels\":[\"asd\"]}],\"option\":[{\"title\":\"dsad\",\"labels\":[\"asd\"]}]}', '[\"1762149566_sakamoto days walppaper.jpeg\"]', '2025-11-02 21:59:26', '2025-11-02 21:59:26'),
(33, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"dsad\",\"description_content\":[\"sadsa\"],\"option_title\":[{\"title\":\"das\",\"labels\":[\"dsad\"]}],\"option\":[{\"title\":\"das\",\"labels\":[\"dsad\"]}]}', '[]', '2025-11-02 21:59:47', '2025-11-02 21:59:47'),
(34, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"dafas\",\"description_content\":[\"dsad\"],\"option_title\":[{\"title\":\"asdsa\",\"labels\":[\"dasd\"]}],\"option\":[{\"title\":\"asdsa\",\"labels\":[\"dasd\"]}]}', '[\"1762149664_2f6d7753-a062-4fdf-af46-1be50f782104.jpg\",\"1762149664_20468dec-0f62-401b-bcc8-d29a45d95f1b.jpg\"]', '2025-11-02 22:01:04', '2025-11-02 22:01:04'),
(35, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 23.00, 231, '{\"description_body\":\"fsadf\",\"description_content\":[\"fadf\"],\"option_title\":[{\"title\":\"fsdf\",\"labels\":[\"sdfs\"]},{\"title\":\"fsdf\",\"labels\":[\"sdf\"]}],\"option\":[{\"title\":\"fsdf\",\"labels\":[\"sdfs\"]},{\"title\":\"fsdf\",\"labels\":[\"sdf\"]}]}', '[\"1762149838_82867ce3-12e8-47d3-b1f1-c6b3f1319bda.jpg\"]', '2025-11-02 22:03:58', '2025-11-02 22:03:58'),
(36, 'fsdf', 'Cholos Blend Salt Nic Vape Juice 20mL', 2033.00, 231, '{\"description_body\":\"Cholos Blend satisfies your desires with our enormous variety of e-liquids,Cholos Blend from traditional tobacco and menthol to fruity and dessert-inspired blends.Providing options for all types of vapers. Whether you prefer a dense or PG balanced liquid, it will make your throat feel the ultimate enjoyment. Explore our wide range of liquid flavors to find your favorite. Each of our e-liquids is carefully crafted to ensure that the quality of the liquid will bring you immersive enjoyment\",\"description_content\":[\"Volume: 20mL\",\"Nicotine: 15MG / 25MG 50MG\",\"Type: Salt Nic E-Liquid\",\"Bottle Type: Gorilla Bottle\",\"Usage: Not for sub ohm use\"],\"option_title\":[{\"title\":\"sd\",\"labels\":[\"sadas\"]}],\"option\":[{\"title\":\"sd\",\"labels\":[\"sadas\"]}]}', '[\"1762150008_f87694d1-9dc7-4b0c-abf6-a862bc8b6743-removebg-preview.png\",\"1762150008_f87694d1-9dc7-4b0c-abf6-a862bc8b6743.jpg\",\"1762150008_mygradpic.jpg\",\"1762150008_1327505-final.png\",\"1762150008_gakudrawing.jpg\",\"1762150008_sakamoto days walppaper.jpeg\",\"1762150008_74a40b49-dd4c-49dc-bc13-0d96d51dc78b.jpg\",\"1762150008_d7c81f3d-d3a0-45ff-93a2-db07cfc20f16.jpg\"]', '2025-11-02 22:06:48', '2025-11-02 22:06:48'),
(37, 'sige ba', 'ututins', 2.00, 21, '{\"description_body\":\"dsadas\",\"description_content\":[\"dasd\",\"dsad\",\"fsadf\"],\"option_title\":[{\"title\":\"one\",\"labels\":[\"okay 1\"]},{\"title\":\"two\",\"labels\":[\"okay 2\"]},{\"title\":\"three\",\"labels\":[\"okay 3\"]}],\"option\":[{\"title\":\"one\",\"labels\":[\"okay 1\"]},{\"title\":\"two\",\"labels\":[\"okay 2\"]},{\"title\":\"three\",\"labels\":[\"okay 3\"]}]}', '[\"1762394875_WIN_20250125_15_02_05_Pro.jpg\"]', '2025-11-05 18:07:55', '2025-11-05 18:07:55'),
(38, 'haha', 'FSDF', 212.00, 21, '{\"description_body\":\"sdfsdf\",\"description_content\":[\"fsd\",\"fsdaf\"],\"option_title\":[{\"title\":\"two\",\"labels\":[\"thoo\"]},{\"title\":\"three\",\"labels\":[\"prrt\",\"okay\",\"flavor 1\"]},{\"title\":\"foru\",\"labels\":[\"foru1\",\"foru2\",\"foruethree\",\"freu 3\"]}],\"option\":[{\"title\":\"two\",\"labels\":[\"thoo\"]},{\"title\":\"three\",\"labels\":[\"prrt\",\"okay\",\"flavor 1\"]},{\"title\":\"foru\",\"labels\":[\"foru1\",\"foru2\",\"foruethree\",\"freu 3\"]}]}', '[\"1762396017_WIN_20250323_21_37_30_Pro.jpg\"]', '2025-11-05 18:26:57', '2025-11-05 18:26:57');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `category_name`, `category_description`, `created_at`, `updated_at`) VALUES
(1, 'sda', 'dasd', '2025-11-02 20:40:49', '2025-11-02 20:40:49');

-- --------------------------------------------------------

--
-- Table structure for table `product_descriptions`
--

CREATE TABLE `product_descriptions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description_body` varchar(255) NOT NULL,
  `description_content` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_descriptions`
--

INSERT INTO `product_descriptions` (`id`, `description_body`, `description_content`, `created_at`, `updated_at`) VALUES
(1, 'sdfsd', 'fsdf', NULL, NULL),
(2, 'sdfsd', 'sdfsd', NULL, NULL),
(3, 'sdfs', 'okay to', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_options`
--

CREATE TABLE `product_options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `option_title` varchar(255) NOT NULL,
  `option_label` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_options`
--

INSERT INTO `product_options` (`id`, `option_title`, `option_label`, `created_at`, `updated_at`) VALUES
(1, 'sdas', 'dsad', NULL, NULL),
(2, 'sdas', 'dsa', NULL, NULL),
(3, 'dsad', 'asd', NULL, NULL),
(4, 'dsad', 'dsa', NULL, NULL),
(5, 'dsad', 'dsa', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `contact_number` varchar(255) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role` enum('admin','sub_admin','customer') DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `contact_number`, `date_of_birth`, `email`, `image`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Kiel', 'Bermudez', '09193471522', '2001-10-04', 'admin@gmail.com', NULL, 'admin', NULL, '$2y$12$ESnZeixQDIX3zrRSiZPQ6e4JjqCfKVz96daVBOovofg1rod/I0gI6', NULL, '2025-10-21 22:45:37', '2025-10-21 22:45:37'),
(2, 'kielpogi', 'soryo', '09456023942', '2001-12-04', 'user@gmail.com', NULL, 'customer', NULL, '$2y$12$oeOYNNE5xHibC9NYnYV.muIyxGqR2Aj7O1Sc1SQs4hBKeA3r7G2Ui', NULL, '2025-11-05 16:24:42', '2025-11-05 16:24:42'),
(3, 'yuser1', 'fdsafasd', '09193471522', '2004-11-06', 'user2@gmail.com', NULL, 'customer', NULL, '$2y$12$3NAZuJfO6bkcz9D2CT0A3.DwpV4gjB3F5tPhEEKcZrYc8HRRXhrTK', NULL, '2025-11-05 20:22:51', '2025-11-05 20:22:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_product_id_foreign` (`product_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`),
  ADD KEY `orders_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_options`
--
ALTER TABLE `product_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_descriptions`
--
ALTER TABLE `product_descriptions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_options`
--
ALTER TABLE `product_options`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
