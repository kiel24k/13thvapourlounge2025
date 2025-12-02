-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Dec 02, 2025 at 07:47 AM
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
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `first_name`, `last_name`, `company_name`, `street_name`, `apartment`, `town`, `zip_code`, `contact_number`, `email`, `note`, `created_at`, `updated_at`) VALUES
(1, 2, 'yftfg', 'hygy', 'fsdf', 'dsafasdf', 'sadfsad', 'fasdfs', 2131, '09193471522', 'user@gmail.com', NULL, '2025-11-28 14:45:26', '2025-11-28 14:45:26');

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
(58, 1, 40, 2, '{\"Smok Xpro Flavors | Devices\":\"Fresh Burst\"}', 720.00, '2025-12-01 10:20:29', '2025-12-01 10:20:29');

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
(26, '2025_11_25_041321_create_orders_table', 3),
(28, '2025_11_28_181927_create_addresses_table', 4),
(29, '2025_11_25_181927_create_addresses_table', 5),
(30, '2025_11_28_041321_create_orders_table', 5),
(32, '2025_12_01_184434_create_pos_orders_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `address_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `status` enum('pending','preparing','to-received','completed','cancelled','failed') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(30, 'App\\Models\\User', 2, 'token2', '129609d7b9f97944d1188e5b9496ed6ca71e170897e8877bd7d8d69017330d69', '[\"*\"]', '2025-11-26 02:21:46', NULL, '2025-11-25 16:18:54', '2025-11-26 02:21:46'),
(31, 'App\\Models\\User', 1, 'token1', '454967b56536109207ebfafd17f0050b7c16b99efbfed8ed8ad59ad0683cdcf2', '[\"*\"]', NULL, NULL, '2025-11-28 07:13:46', '2025-11-28 07:13:46'),
(32, 'App\\Models\\User', 1, 'token1', 'e95624f758430a7a467dcea9acb87ce02969518aaab889bfac278f32ab2138cc', '[\"*\"]', NULL, NULL, '2025-11-28 07:13:48', '2025-11-28 07:13:48'),
(33, 'App\\Models\\User', 2, 'token2', 'c528c11d5c659cd9002934e71ad519d537699c7bfe9e7c8bfad0899fa816336f', '[\"*\"]', '2025-11-28 17:19:44', NULL, '2025-11-28 08:55:22', '2025-11-28 17:19:44'),
(34, 'App\\Models\\User', 1, 'token1', 'f71f94c7f4d4ce182019fd0f75270071893ea9075ff82e77c460e573c98b9378', '[\"*\"]', NULL, NULL, '2025-11-30 09:04:35', '2025-11-30 09:04:35'),
(35, 'App\\Models\\User', 1, 'token1', '973cd34ff820134f063183c4b3284b3e7ac4123737145c23548259436160443b', '[\"*\"]', NULL, NULL, '2025-11-30 09:04:36', '2025-11-30 09:04:36'),
(36, 'App\\Models\\User', 2, 'token2', 'f4feb4b405db171661cd3cf7d9640d774096aab6c15582e61eae8db3a28634c5', '[\"*\"]', '2025-11-30 12:24:49', NULL, '2025-11-30 12:06:28', '2025-11-30 12:24:49'),
(37, 'App\\Models\\User', 1, 'token1', 'e62b957ed7e50686b93013f97302004ef626728bbd1f53fbbdc9231e6379c242', '[\"*\"]', '2025-12-01 10:20:30', NULL, '2025-11-30 12:23:49', '2025-12-01 10:20:30'),
(38, 'App\\Models\\User', 1, 'token1', '9357759366d9a79d26e360122adaf5d97f08e24008c4f1d325b9be2db0ce07df', '[\"*\"]', '2025-12-01 10:25:13', NULL, '2025-12-01 10:20:43', '2025-12-01 10:25:13');

-- --------------------------------------------------------

--
-- Table structure for table `pos_orders`
--

CREATE TABLE `pos_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `status` enum('on-hold','proceeded') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pos_orders`
--

INSERT INTO `pos_orders` (`id`, `product_id`, `customer_name`, `quantity`, `price`, `total`, `status`, `created_at`, `updated_at`) VALUES
(47, 42, 'Jonathan', '1', 1000, 1000, 'on-hold', '2025-12-01 14:11:21', '2025-12-01 14:11:21'),
(48, 39, 'Jonathan', '1', 350, 350, 'on-hold', '2025-12-01 14:11:21', '2025-12-01 14:11:21'),
(49, 39, 'Rhona', '1', 350, 350, 'on-hold', '2025-12-01 14:11:29', '2025-12-01 14:11:29'),
(50, 40, 'Rhonalyn', '1', 360, 360, 'on-hold', '2025-12-01 14:11:39', '2025-12-01 14:11:39'),
(51, 41, 'Rhonalyn', '1', 900, 900, 'on-hold', '2025-12-01 14:11:39', '2025-12-01 14:11:39'),
(52, 43, 'Rhonalyn', '1', 300, 300, 'on-hold', '2025-12-01 14:11:39', '2025-12-01 14:11:39'),
(53, 39, 'POS Guy', '1', 350, 350, 'proceeded', '2025-12-01 14:11:53', '2025-12-01 14:11:53'),
(54, 40, 'POS Guy', '1', 360, 360, 'proceeded', '2025-12-01 14:11:53', '2025-12-01 14:11:53'),
(55, 39, 'sige', '1', 350, 350, 'on-hold', '2025-12-01 14:35:58', '2025-12-01 14:35:58'),
(56, 40, 'sige', '1', 360, 360, 'on-hold', '2025-12-01 14:35:58', '2025-12-01 14:35:58'),
(57, 41, 'sige', '1', 900, 900, 'on-hold', '2025-12-01 14:35:58', '2025-12-01 14:35:58');

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
(39, 'compatible black', 'Aerogin Don Bars Disposable Vape – 9500 Puffs, Mesh Coil, Pre-filled Cartridge｜compatible black', 350.00, 20, '{\"description_body\":\"Battery & Charging: Long-lasting built-in battery with USB-C fast charging\",\"description_content\":[\"Puff Count: Up to 9500 puffs per device\",\"Coil Technology: Mesh Coil for smoother vapor and consistent flavor\",\"Nicotine Type: Freebase Nicotine formula for a satisfying throat hit\",\"Design: Portable, durable body with stylish metallic finish\",\"Flavors: Available in 10 signature flavor options\"],\"option_title\":[{\"title\":\"Flavor List\",\"labels\":[\"Blast bar\",\"Pink Kingdom - Straberry Milk\",\"Jolly Haze - Jolly Lychee\",\"Grand Slamma\",\"Punchy Chill\"]}],\"option\":[{\"title\":\"Flavor List\",\"labels\":[\"Blast bar\",\"Pink Kingdom - Straberry Milk\",\"Jolly Haze - Jolly Lychee\",\"Grand Slamma\",\"Punchy Chill\"]}]}', '[\"1764533080_aerogin-don-bars.png\"]', '2025-11-30 12:04:40', '2025-11-30 12:04:40'),
(40, 'Smok', 'Smok XPRO Prefilled Pod Kit – 15K Puffs, 10 Flavors | Mesh Coil | 3 Output Modes', 360.00, 10, '{\"description_body\":\"Discover the Smok XPRO Prefilled Pod Kit, featuring 15,000 puffs, mesh coil technology, 10ml prefilled pods, and Type-C rechargeable battery. Experience rich flavor, massive vapor, and authentic Smok performance in every puff.\",\"description_content\":[],\"option_title\":[{\"title\":\"Smok Xpro Flavors | Devices\",\"labels\":[\"Tropical forest\",\"Fresh Burst\",\"Blue Burst\"]}],\"option\":[{\"title\":\"Smok Xpro Flavors | Devices\",\"labels\":[\"Tropical forest\",\"Fresh Burst\",\"Blue Burst\"]}]}', '[\"1764533481_lost_vape_centaurus_b80_aio_kit_-_default.png\"]', '2025-11-30 12:11:21', '2025-11-30 12:11:21'),
(41, 'mosmo', 'Denkat Mosmo Stick (5PCS /PACK)', 900.00, 4, '{\"description_body\":\"The Denkat Mosmo Stick is a realistic-looking disposable vape with a shape and packaging perfectly similar to a cigarette, bringing the real feeling of smoking. Suitable for people who want to quit smoking or enjoy the pleasure of cigarettes. It comes with a 1ml e-liquid capacity with 20 mg of nicotine and a 1.8?? mesh coil that emits a rich vapor with each puff. The 150mAh battery can smoke more cigarettes than ordinary cigarettes and is easy to carry.\",\"description_content\":[\"E-liquid Capacity: 1ml\",\"Salt Nicotine: 20mg\",\"Battery Capacity:150mAh\",\"Resistance: 1.8\"],\"option_title\":[{\"title\":\"Flavors\",\"labels\":[\"Bubblegum\",\"Strong methalotic\",\"Lychee\",\"Sweet caramel RY4\"]}],\"option\":[{\"title\":\"Flavors\",\"labels\":[\"Bubblegum\",\"Strong methalotic\",\"Lychee\",\"Sweet caramel RY4\"]}]}', '[\"1764533608_fruitia_x_fifty_bar_20k_disposable_-_default.png\"]', '2025-11-30 12:13:28', '2025-11-30 12:13:28'),
(42, 'Disposable vape', 'FLAVA GEEKBAR 10000 Puffs Disposable Vape', 1000.00, 12, '{\"description_body\":\"FLAVA GEEKBAR 10000 Puffs Disposable Vape is one of the most representative vape products that Flava innovates and designs, bringing users the ultimate e-cigarette experience. The Flava Geekbar boasts a simple and atmospheric exterior design and a durable 650mAh battery with a large capacity of 10,000 puffs. Exploring the future of e-cigarettes with Flava Disposable Vape.\",\"description_content\":[\"10000 puffs\",\"650mAh Battery\",\"Adjustable airflow\",\"Battery indicator\",\"Mesh coil\"],\"option_title\":[{\"title\":\"Flavors\",\"labels\":[\"Blueberry\",\"Lemonade\",\"Yacult ace\",\"Ice cola\",\"MIxed Beries\"]}],\"option\":[{\"title\":\"Flavors\",\"labels\":[\"Blueberry\",\"Lemonade\",\"Yacult ace\",\"Ice cola\",\"MIxed Beries\"]}]}', '[\"1764533996_adjust_mysour_40k_disposable_-_default.png\"]', '2025-11-30 12:19:56', '2025-11-30 12:19:56'),
(43, 'Disposable vape', 'Aerogin Truez Prefilled Pod Vape Kit – 10ml E-Liquid, 600mAh |compatible black v1 |10 Flavors', 300.00, 9, '{\"description_body\":\"Battery & Charging: 600mAh rechargeable battery with USB-C fast charging\",\"description_content\":[\"E-Liquid Capacity: 10ml prefilled pods with 5% nicotine salt\",\"Coil Technology: Mesh Coil Technology for smooth vapor and strong flavor\",\"Design: Urban-inspired unibody design with premium PCTG material\",\"Compatibility: Prefilled pod system, battery sold separately\",\"Flavors: 10 bold flavor options\"],\"option_title\":[{\"title\":\"Aerogin Truez 10 Flavors\",\"labels\":[\"Black battery\",\"Fresh rad\",\"sunset vibes\",\"blue cypher\",\"purple haze\"]}],\"option\":[{\"title\":\"Aerogin Truez 10 Flavors\",\"labels\":[\"Black battery\",\"Fresh rad\",\"sunset vibes\",\"blue cypher\",\"purple haze\"]}]}', '[\"1764534129_fumi_24k_0_zero_nicotine_disposable_-_default.png\"]', '2025-11-30 12:22:09', '2025-11-30 12:22:09');

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
  `role` enum('admin','staff','customer') DEFAULT NULL,
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
(2, 'kielpogi', 'soryo', '09456023942', '2001-12-04', 'user@gmail.com', NULL, 'staff', NULL, '$2y$12$oeOYNNE5xHibC9NYnYV.muIyxGqR2Aj7O1Sc1SQs4hBKeA3r7G2Ui', NULL, '2025-11-05 16:24:42', '2025-11-05 16:24:42'),
(3, 'yuser1', 'fdsafasd', '09193471522', '2004-11-06', 'user2@gmail.com', NULL, 'staff', NULL, '$2y$12$3NAZuJfO6bkcz9D2CT0A3.DwpV4gjB3F5tPhEEKcZrYc8HRRXhrTK', NULL, '2025-11-05 20:22:51', '2025-11-05 20:22:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `addresses_user_id_foreign` (`user_id`);

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
  ADD KEY `orders_product_id_foreign` (`product_id`),
  ADD KEY `orders_address_id_foreign` (`address_id`);

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
-- Indexes for table `pos_orders`
--
ALTER TABLE `pos_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pos_orders_product_id_foreign` (`product_id`);

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
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `pos_orders`
--
ALTER TABLE `pos_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

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
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

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
  ADD CONSTRAINT `orders_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`),
  ADD CONSTRAINT `orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `pos_orders`
--
ALTER TABLE `pos_orders`
  ADD CONSTRAINT `pos_orders_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
