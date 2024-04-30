-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 30 avr. 2024 à 16:16
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `reactads`
--

-- --------------------------------------------------------

--
-- Structure de la table `ads`
--

CREATE TABLE `ads` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `CategoryID` bigint(20) UNSIGNED NOT NULL,
  `Condition` varchar(255) NOT NULL,
  `Puissance` varchar(255) NOT NULL,
  `TypeCar` varchar(255) NOT NULL,
  `Model` varchar(255) NOT NULL,
  `UserID` bigint(20) UNSIGNED NOT NULL,
  `Price` decimal(10,2) NOT NULL,
  `TypePrice` varchar(255) NOT NULL,
  `City` varchar(100) NOT NULL,
  `Location` varchar(400) NOT NULL,
  `status` enum('pending','approved','rejected','sold') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ads`
--

INSERT INTO `ads` (`id`, `Title`, `Description`, `CategoryID`, `Condition`, `Puissance`, `TypeCar`, `Model`, `UserID`, `Price`, `TypePrice`, `City`, `Location`, `status`, `created_at`, `updated_at`) VALUES
(1, 'MERCEDES', 'On a testé et approuvé : le désinfectant virucide ProTech Monte-Carlo pour habitacle automobile et autres surfaces du quotidien (poignées, smartphones, claviers, bureaux, etc), tout droit venu des spécialistes du detailing à Monaco ! Prix : 9,95€ (100ml) et 15,95€ (500ml).', 1, 'New', '8 CV', 'Hybride', '2024', 3, 60000.00, 'Dollar', 'Safi', 'safi , matar 37 block', 'approved', '2024-04-24 11:59:21', '2024-04-24 12:29:45'),
(2, 'pc portable i7 7750K', 'cpu : i7 9577k\r\nRam : 16go', 2, 'Used', 'undefined', 'undefined', 'undefined', 3, 10000.00, 'Dollar', 'Casablanca', 'casablanca ain sebaa', 'approved', '2024-04-24 12:08:49', '2024-04-24 12:29:42'),
(3, 'Audi', 'Audi', 1, 'Used', '12 CV', 'Diesel', '2020', 6, 90000.00, 'Dollar', 'Casablanca', 'casablanca hay mohammadi', 'approved', '2024-04-24 12:24:57', '2024-04-24 12:29:39'),
(4, 'dacia duster', 'dacia-duster-', 1, 'Used', '12 CV', 'Diesel', '2020', 6, 30000.00, 'Euro', 'Agadir', 'agadir or', 'approved', '2024-04-24 12:26:53', '2024-04-24 12:29:36'),
(5, 'TOYOTA', 'TOYOTA', 1, 'New', '5 CV', 'Diesel', '2024', 5, 16000.00, 'Dollar', 'Rabat', 'rabattt', 'approved', '2024-04-24 12:28:53', '2024-04-24 12:29:33'),
(6, 'VOLKSWAGEN', 'VOLKSWAGEN G502', 1, 'Used', '12 CV', 'Diesel', '2020', 5, 13200.00, 'Dollar', 'Casablanca', 'Casablanca hay salam', 'approved', '2024-04-25 06:59:13', '2024-04-25 06:59:13'),
(7, 'watches  men', 'watches for men', 8, 'New', 'undefined', 'undefined', 'undefined', 5, 700.00, 'Dollar', 'El Jadida', 'jadida saa', 'sold', '2024-04-25 07:59:16', '2024-04-25 10:21:15'),
(8, 'watches  women', 'watches for women', 8, 'New', 'undefined', 'undefined', 'undefined', 3, 1000.00, 'Dollar', 'El Jadida', 'jadiad', 'approved', '2024-04-25 08:01:19', '2024-04-25 08:02:10'),
(9, 'fashion nova men', 'fashion nova men fashion nova men', 4, 'Used', 'undefined', 'undefined', 'undefined', 3, 150.00, 'Dollar', 'Safi', 'safi al matar', 'sold', '2024-04-25 08:22:59', '2024-04-25 09:59:38'),
(10, 'Excepturi repudianda', 'Cupiditate officia r', 11, 'Used', 'undefined', 'undefined', 'undefined', 3, 849.00, 'Rupee', 'Casablanca', 'm', 'sold', '2024-04-25 09:49:01', '2024-04-29 20:51:46'),
(11, 'iPhone 15 Pro', 'iPhone 15 Pro', 2, 'New', 'undefined', 'undefined', 'undefined', 6, 9000.00, 'Dollar', 'Agadir', 'agadir', 'approved', '2024-04-25 11:58:21', '2024-04-25 12:03:15'),
(12, 'Tempor beatae dolore', 'In ut voluptatibus q', 13, 'Used', 'undefined', 'undefined', 'undefined', 6, 23.00, 'Euro', 'Casablanca', 'islammmmmmmmm', 'sold', '2024-04-28 12:11:19', '2024-04-29 17:26:02'),
(13, 'Dolores fugiat non', 'Hic autem dolore do', 1, 'Used', '8 CV', 'Essence', '2000', 7, 989.00, 'Dollar', 'Casablanca', 'kjhgfd', 'sold', '2024-04-29 07:18:23', '2024-04-29 07:20:12');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(100) NOT NULL,
  `icon` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `Name`, `icon`, `created_at`, `updated_at`) VALUES
(1, 'Vehicle', 'public/photos/car.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(2, 'Electronics', 'public/photos/controller.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(3, 'Furnitures', 'public/photos/furniture.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(4, 'Fashion', 'public/photos/tshirt.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(5, 'Health & Beauty', 'public/photos/hospital.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(6, 'Gadgets', 'public/photos/controller.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(7, 'Backpacks', 'public/photos/travel.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(8, 'Watches', 'public/photos/watch.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(9, 'Jobs', 'public/photos/jobs.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(10, 'Real Estate', 'public/photos/real-estate.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(11, 'Education', 'public/photos/education.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(12, 'Matrimony', 'public/photos/matrimony.svg', '2024-04-24 11:55:15', '2024-04-24 11:55:15'),
(13, 'good', 'public/photos/nFHblMtjrXXzJQzNSZjZVsToM9qMJyfAZBkiqBFm.jpg', '2024-04-28 11:59:40', '2024-04-29 17:19:26');

-- --------------------------------------------------------

--
-- Structure de la table `chats`
--

CREATE TABLE `chats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from_id` bigint(20) UNSIGNED NOT NULL,
  `to_id` bigint(20) UNSIGNED NOT NULL,
  `message` text NOT NULL,
  `opened` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `chats`
--

INSERT INTO `chats` (`id`, `from_id`, `to_id`, `message`, `opened`, `created_at`, `updated_at`) VALUES
(1, 3, 6, 'hello', 0, '2024-04-24 13:14:32', '2024-04-24 13:14:32'),
(2, 6, 3, 'hi', 0, '2024-04-24 13:17:06', '2024-04-24 13:17:06'),
(3, 3, 6, 'hello', 0, '2024-04-25 09:50:56', '2024-04-25 09:50:56'),
(4, 3, 6, 'jh', 0, '2024-04-25 09:51:36', '2024-04-25 09:51:36'),
(6, 6, 5, 'hello', 0, '2024-04-28 11:16:02', '2024-04-28 11:16:02'),
(7, 6, 5, 'im user', 0, '2024-04-28 11:16:12', '2024-04-28 11:16:12'),
(8, 7, 3, 'hi', 0, '2024-04-28 22:48:03', '2024-04-28 22:48:03'),
(9, 7, 6, 'hi', 0, '2024-04-29 07:13:29', '2024-04-29 07:13:29'),
(10, 3, 6, 'r', 0, '2024-04-29 17:55:11', '2024-04-29 17:55:11'),
(11, 3, 7, 'ed', 0, '2024-04-29 17:55:39', '2024-04-29 17:55:39'),
(12, 3, 7, '\'r', 0, '2024-04-29 17:55:50', '2024-04-29 17:55:50'),
(13, 3, 7, 'ref', 0, '2024-04-29 17:55:59', '2024-04-29 17:55:59'),
(14, 3, 6, 'fgg', 0, '2024-04-29 17:56:15', '2024-04-29 17:56:15'),
(15, 3, 7, 'fv', 0, '2024-04-29 17:56:30', '2024-04-29 17:56:30'),
(16, 3, 7, 'er', 0, '2024-04-29 18:01:15', '2024-04-29 18:01:15');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `OwnerID` bigint(20) UNSIGNED NOT NULL,
  `UserID` bigint(20) UNSIGNED NOT NULL,
  `AdID` bigint(20) UNSIGNED NOT NULL,
  `CommentText` text DEFAULT NULL,
  `reating` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `OwnerID`, `UserID`, `AdID`, `CommentText`, `reating`, `created_at`, `updated_at`) VALUES
(1, 3, 6, 9, 'bad', 3, '2024-04-25 09:59:34', '2024-04-29 20:55:03'),
(2, 6, 3, 11, NULL, NULL, '2024-04-25 19:24:59', '2024-04-25 19:24:59'),
(3, 6, 3, 11, NULL, NULL, '2024-04-25 19:25:08', '2024-04-25 19:25:08'),
(4, 6, 3, 11, NULL, NULL, '2024-04-25 19:25:17', '2024-04-25 19:25:17'),
(5, 7, 6, 13, NULL, NULL, '2024-04-29 07:20:07', '2024-04-29 07:20:07'),
(6, 6, 5, 12, 'goodd', 4, '2024-04-29 17:25:59', '2024-04-29 17:27:36'),
(7, 3, 7, 10, NULL, NULL, '2024-04-29 20:51:39', '2024-04-29 20:51:39'),
(8, 3, 6, 10, 'ggg', 5, '2024-04-29 20:51:43', '2024-04-29 20:53:11');

-- --------------------------------------------------------

--
-- Structure de la table `conversations`
--

CREATE TABLE `conversations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_1` bigint(20) UNSIGNED NOT NULL,
  `user_2` bigint(20) UNSIGNED NOT NULL,
  `AD_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `conversations`
--

INSERT INTO `conversations` (`id`, `user_1`, `user_2`, `AD_id`, `created_at`, `updated_at`) VALUES
(1, 3, 6, 4, '2024-04-24 13:14:32', '2024-04-24 13:14:32'),
(2, 6, 5, 6, '2024-04-28 11:16:02', '2024-04-28 11:16:02'),
(3, 7, 3, 10, '2024-04-28 22:48:03', '2024-04-28 22:48:03'),
(4, 7, 6, 4, '2024-04-29 07:13:29', '2024-04-29 07:13:29');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
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
-- Structure de la table `favorites`
--

CREATE TABLE `favorites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `UserID` bigint(20) UNSIGNED NOT NULL,
  `AdID` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `favorites`
--

INSERT INTO `favorites` (`id`, `UserID`, `AdID`, `created_at`, `updated_at`) VALUES
(3, 3, 4, '2024-04-24 13:02:46', '2024-04-24 13:02:46'),
(8, 5, 6, '2024-04-25 10:23:52', '2024-04-25 10:23:52'),
(9, 6, 11, '2024-04-25 20:41:53', '2024-04-25 20:41:53'),
(10, 6, 8, '2024-04-25 20:44:57', '2024-04-25 20:44:57'),
(11, 6, 2, '2024-04-28 11:04:41', '2024-04-28 11:04:41'),
(16, 7, 10, '2024-04-28 22:47:16', '2024-04-28 22:47:16'),
(20, 3, 8, '2024-04-29 17:07:50', '2024-04-29 17:07:50'),
(21, 5, 5, '2024-04-29 17:33:27', '2024-04-29 17:33:27'),
(22, 5, 11, '2024-04-29 17:33:49', '2024-04-29 17:33:49');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `AdID` bigint(20) UNSIGNED NOT NULL,
  `ImageURL` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `AdID`, `ImageURL`, `created_at`, `updated_at`) VALUES
(1, 1, 'public/Ads/KyAhjfaTPqaKCsM21L9vbDDVoiWFxF5PHv2cGGUx.jpg', '2024-04-24 11:59:22', '2024-04-24 11:59:22'),
(2, 1, 'public/Ads/ABil1PvWDBwxRc2sIXbGm2HxeNOjNuwjRIzW9Y1h.jpg', '2024-04-24 11:59:22', '2024-04-24 11:59:22'),
(3, 1, 'public/Ads/VImS5CBXBSIUiRWhjqRSEpfJinkYn5iaIwnicrLr.jpg', '2024-04-24 11:59:22', '2024-04-24 11:59:22'),
(4, 1, 'public/Ads/o9TU0EyWwq49PjLO7UVfaZpitUVk6Ggr3TPw1x1b.jpg', '2024-04-24 11:59:22', '2024-04-24 11:59:22'),
(5, 2, 'public/Ads/QLveOZ2EvHpQyfHWZ5PS9qDKUc4MpneyFQJ5OYK9.jpg', '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(6, 2, 'public/Ads/XiPncs7WDkvdP6BzRtVxW5pFmYa0KRsOiOcrYjsV.jpg', '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(7, 2, 'public/Ads/TTNslndXIBy1tNAol6wpNQhmO7O9pBf4akr462fO.jpg', '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(8, 2, 'public/Ads/I8TYEOq8eFZElwEwZzZm3S93UgdNiu5BqhP0Y5pj.jpg', '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(9, 2, 'public/Ads/eRWq2ZNTlTfptpaxzxUwWKkwYODa06q7Jo6k0Y2Z.jpg', '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(10, 2, 'public/Ads/UYzkMTU8AZkkfXQPBNfFnUsap6C85bv63iUyrb6A.jpg', '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(11, 3, 'public/Ads/XRuTgr0o0LqzsYytWppHnCO8BcqdbvoYmnkqx5uf.jpg', '2024-04-24 12:24:57', '2024-04-24 12:24:57'),
(12, 3, 'public/Ads/g8NxrJGEmmjNxk0T3eNliEac0v5ci6GBfmxeJkC4.jpg', '2024-04-24 12:24:57', '2024-04-24 12:24:57'),
(13, 3, 'public/Ads/ysF3WL8OnzcR4VvB64LsROMiRnzDbOGEguKQJ06Y.jpg', '2024-04-24 12:24:57', '2024-04-24 12:24:57'),
(14, 3, 'public/Ads/rlngl4VWyz0Yc4kvSWTh3ZqyJyp989G3vn2vibFN.jpg', '2024-04-24 12:24:57', '2024-04-24 12:24:57'),
(15, 3, 'public/Ads/ytkDi1r3Nl44cA6qmrkAEftz83aoS4R1xCez4mYe.jpg', '2024-04-24 12:24:57', '2024-04-24 12:24:57'),
(16, 4, 'public/Ads/Lw3NPFIyKB9Jnci1eDyEqrNPOhknbbRJbW9W5ChA.jpg', '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(17, 4, 'public/Ads/gwNltS5RN8fK9efTb2THFs6oLBlIqyjkz7HuG8e4.jpg', '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(18, 4, 'public/Ads/N33iasM6oRYNqz9up3sWJ9m9w0Rfpz5kCCHMPSw3.jpg', '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(19, 4, 'public/Ads/0632DMUBu3RJjJOy78W0fakMYEsDWlVyLWNMIDyO.jpg', '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(20, 4, 'public/Ads/5n0pul1LNFNapAmhzB2n8alUTL3v2gojqKloUGpP.jpg', '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(21, 4, 'public/Ads/nJ0sogITNYPsO7seFoYlDeWQk7Vt9TFKOIi10aSj.jpg', '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(22, 5, 'public/Ads/BHjW5rwC74y87GJIF785zPGidaVNeBKKiGo1cNkz.jpg', '2024-04-24 12:28:53', '2024-04-24 12:28:53'),
(23, 5, 'public/Ads/cnPnKLJNOmgtyBafTDLEMVSPpO37isj2Pr5w1AKF.jpg', '2024-04-24 12:28:53', '2024-04-24 12:28:53'),
(24, 5, 'public/Ads/4ZvdPeHLnv6ISZ8uJyCiUpDC6bssaxXejtkZsrGs.jpg', '2024-04-24 12:28:53', '2024-04-24 12:28:53'),
(25, 5, 'public/Ads/LF0mec1vCIeHdcBByO270p8ogPLv9MyDc6P5xrJJ.jpg', '2024-04-24 12:28:53', '2024-04-24 12:28:53'),
(26, 5, 'public/Ads/0Bj1qDz6uUh7Wid6XExpBrj83kbOgAwaOaqNpO9n.jpg', '2024-04-24 12:28:54', '2024-04-24 12:28:54'),
(27, 6, 'public/Ads/ejxibwY0XHJOQvU5X3iY9eJkRhuAp7JNjRwtA98l.jpg', '2024-04-25 06:59:14', '2024-04-25 06:59:14'),
(28, 6, 'public/Ads/JTrOxdZporvyXtA42jJfXDCIkEk6xM4foeYLagsi.jpg', '2024-04-25 06:59:14', '2024-04-25 06:59:14'),
(29, 6, 'public/Ads/8ddr6cpOEN3F5U6HfM765zo8Fuce2p6uAnMInrnV.jpg', '2024-04-25 06:59:14', '2024-04-25 06:59:14'),
(30, 6, 'public/Ads/rYvCpPVKRd0aBd3FYZXF5zLrUHqoPY9om3IAXWjb.jpg', '2024-04-25 06:59:14', '2024-04-25 06:59:14'),
(31, 6, 'public/Ads/CCR6fsyZ8HwTgA7cl77MNmzRLN6hT9SvwPYFeJoI.jpg', '2024-04-25 06:59:14', '2024-04-25 06:59:14'),
(32, 7, 'public/Ads/CGX8YBPY6urRX5GDk4kwlNx3HQNVggURJx3uf6QJ.webp', '2024-04-25 07:59:16', '2024-04-25 07:59:16'),
(33, 7, 'public/Ads/rp2YCAPUz43zZXhnExdfWttcykeqSCLpdp7lMASG.webp', '2024-04-25 07:59:16', '2024-04-25 07:59:16'),
(34, 7, 'public/Ads/dJGYZppSJywqzbmPJ7NfBkWpC1Kzwse3j4Z35QmQ.webp', '2024-04-25 07:59:16', '2024-04-25 07:59:16'),
(35, 7, 'public/Ads/fYvkpEYv479QF1EvSu9hD0pUyTahdISA1YMQcIAi.webp', '2024-04-25 07:59:16', '2024-04-25 07:59:16'),
(36, 7, 'public/Ads/gjdKYqsbrgGHhEcHoQkmS4NS6ZT0nUr3BzjH3UEG.webp', '2024-04-25 07:59:16', '2024-04-25 07:59:16'),
(37, 8, 'public/Ads/DQd1dKMpEQ72arWMvTkKSkwcbfa8ARrC6MGQ8R5X.webp', '2024-04-25 08:01:19', '2024-04-25 08:01:19'),
(38, 8, 'public/Ads/xmEzCLYAaQEMn0w9pPezHM4HrgSn5NodvT7S4eMV.webp', '2024-04-25 08:01:19', '2024-04-25 08:01:19'),
(39, 8, 'public/Ads/CKcMsR6fA2E1NlPuP36XV8I5z0WoQbp4ab788ija.webp', '2024-04-25 08:01:19', '2024-04-25 08:01:19'),
(40, 8, 'public/Ads/nTWnA2QotgKBJ3BCvbvXueZnEb6XHJ5e2GyFQfv7.webp', '2024-04-25 08:01:20', '2024-04-25 08:01:20'),
(41, 9, 'public/Ads/HKIX63quRqKul9SLttJvgOBZAREtij88zhyQ8Vn4.jpg', '2024-04-25 08:22:59', '2024-04-25 08:22:59'),
(42, 9, 'public/Ads/umuxX7UAfxhrsldQ8VEyz81CxibnxpCwwPADPAlH.jpg', '2024-04-25 08:22:59', '2024-04-25 08:22:59'),
(43, 9, 'public/Ads/v8NtDFddym3Kb13K3w37hnjetYkVYOat1w4jE0wp.jpg', '2024-04-25 08:22:59', '2024-04-25 08:22:59'),
(44, 10, 'public/Ads/1zxr04tApc0Tzj05SlttRMy6yWgpyxQ6zE4gaTs4.jpg', '2024-04-25 09:49:01', '2024-04-25 09:49:01'),
(45, 11, 'public/Ads/JBFEf5ECNlc4x1tm4eXav78gyYteW1HhkCRbGl9b.jpg', '2024-04-25 11:58:21', '2024-04-25 11:58:21'),
(46, 11, 'public/Ads/ncd7Sm6EaR23sNHJjXl47EqWCg9jRLr4usBSWxas.jpg', '2024-04-25 11:58:21', '2024-04-25 11:58:21'),
(47, 11, 'public/Ads/KeaAGypw99T312fiBIuymrqVQLlywLdscFTbWQIy.jpg', '2024-04-25 11:58:21', '2024-04-25 11:58:21'),
(48, 12, 'public/Ads/Mf6wnYfUaVCi8K5UfBOv05Utg9muwN8nwBqBxmPZ.jpg', '2024-04-28 12:11:19', '2024-04-28 12:11:19'),
(49, 13, 'public/Ads/eMH9rMVB6aUQnBbKdkRSiJ375NCxW7OYJSAsCM6n.jpg', '2024-04-29 07:18:23', '2024-04-29 07:18:23'),
(50, 13, 'public/Ads/3ZHCcXtZXnfFH2SY3X52CjlHWnWU2cqkfcaNZ87e.jpg', '2024-04-29 07:18:23', '2024-04-29 07:18:23'),
(51, 13, 'public/Ads/00xRtEX0GSRWBLzU5xLayjpdY2HweJQ7t23f6dxh.jpg', '2024-04-29 07:18:23', '2024-04-29 07:18:23');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_19_142043_create_categories_table', 1),
(6, '2024_03_19_142044_create_ads_table', 1),
(7, '2024_03_19_142045_create_tags_table', 1),
(8, '2024_03_19_142046_create_ad_tags_table', 1),
(9, '2024_03_19_142047_create_images_table', 1),
(10, '2024_03_19_142048_create_favorites_table', 1),
(11, '2024_03_19_142049_create_comments_table', 1),
(12, '2024_03_19_142050_create_ad_views_table', 1),
(13, '2024_04_06_101331_create_notifications_table', 1),
(14, '2024_04_07_110505_create_messages_conversations_table', 1),
(15, '2024_04_07_110509_create_chats_table', 1),
(16, '2024_04_09_115215_add_image_to_users_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `type`, `message`, `is_read`, `created_at`, `updated_at`) VALUES
(1, 3, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-24 11:59:21', '2024-04-24 11:59:21'),
(2, 3, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-24 12:08:49', '2024-04-24 12:08:49'),
(3, 6, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-24 12:24:57', '2024-04-24 12:24:57'),
(4, 6, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-24 12:26:53', '2024-04-24 12:26:53'),
(5, 5, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-24 12:28:53', '2024-04-24 12:28:53'),
(6, 5, 'info', 'Your ad has been displayed.', 0, '2024-04-24 12:29:33', '2024-04-24 12:29:33'),
(7, 6, 'info', 'Your ad has been displayed.', 0, '2024-04-24 12:29:36', '2024-04-24 12:29:36'),
(8, 6, 'info', 'Your ad has been displayed.', 0, '2024-04-24 12:29:39', '2024-04-24 12:29:39'),
(9, 3, 'info', 'Your ad has been displayed.', 0, '2024-04-24 12:29:42', '2024-04-24 12:29:42'),
(10, 3, 'info', 'Your ad has been displayed.', 0, '2024-04-24 12:29:45', '2024-04-24 12:29:45'),
(11, 5, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-25 06:59:13', '2024-04-25 06:59:13'),
(13, 3, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-25 08:01:19', '2024-04-25 08:01:19'),
(14, 3, 'info', 'Your ad has been displayed.', 0, '2024-04-25 08:02:10', '2024-04-25 08:02:10'),
(15, 5, 'info', 'Your ad has been displayed.', 0, '2024-04-25 08:02:12', '2024-04-25 08:02:12'),
(16, 3, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-25 08:22:59', '2024-04-25 08:22:59'),
(17, 3, 'info', 'Your ad has been displayed.', 0, '2024-04-25 08:23:09', '2024-04-25 08:23:09'),
(18, 3, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-25 09:49:01', '2024-04-25 09:49:01'),
(21, 5, 'info', 'Your ad (watches  men) has been deleted.', 0, '2024-04-25 10:21:15', '2024-04-25 10:21:15'),
(22, 6, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-25 11:58:21', '2024-04-25 11:58:21'),
(23, 6, 'info', 'Your ad has been displayed.', 0, '2024-04-25 12:03:15', '2024-04-25 12:03:15'),
(24, 3, 'info', 'Your ad has been displayed.', 0, '2024-04-25 12:03:22', '2024-04-25 12:03:22'),
(28, 6, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-28 12:11:19', '2024-04-28 12:11:19'),
(29, 7, 'info', 'Your ad has been saved. You must wait for the admin to accept your Ad.', 0, '2024-04-29 07:18:23', '2024-04-29 07:18:23'),
(30, 7, 'info', 'Your ad (Dolores fugiat non) has been updated.', 0, '2024-04-29 07:18:42', '2024-04-29 07:18:42'),
(31, 6, 'info', 'Now you can add reating and Comment.', 5, '2024-04-29 07:20:07', '2024-04-29 07:20:07'),
(34, 6, 'info', 'Your ad (Tempor beatae dolore) has been deleted.', 0, '2024-04-29 17:26:02', '2024-04-29 17:26:02'),
(35, 7, 'info', 'Now you can add rating and comment.', 7, '2024-04-29 20:51:39', '2024-04-29 20:51:39'),
(37, 3, 'info', 'Your ad (Excepturi repudianda) has been deleted.', 0, '2024-04-29 20:51:46', '2024-04-29 20:51:46');

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 3, 'kamal-AuthToken', '573f9c8f0acec0011b18dc730932e489131f081a511a34209ee553108584e4d7', '[\"*\"]', '2024-04-24 12:08:55', NULL, '2024-04-24 11:56:49', '2024-04-24 12:08:55'),
(2, 'App\\Models\\User', 4, 'islam-AuthToken', 'abbb90ff2e984d3bf24292d79b33d6a6bdf4dc3a5dbd2858485ed9336d4295a8', '[\"*\"]', '2024-04-24 12:15:31', NULL, '2024-04-24 12:09:41', '2024-04-24 12:15:31'),
(3, 'App\\Models\\User', 5, 'Rim-AuthToken', '79b535612814d130cd91f1627218cf6e3fc61251afa9ac5bd24ed3e48d737abd', '[\"*\"]', '2024-04-24 12:16:15', NULL, '2024-04-24 12:16:05', '2024-04-24 12:16:15'),
(4, 'App\\Models\\User', 6, 'karim-AuthToken', '8a9a6d195e74d999563aec183b143b729911f249cce55ba8123ead24d5262f4c', '[\"*\"]', '2024-04-24 12:26:52', NULL, '2024-04-24 12:22:00', '2024-04-24 12:26:52'),
(5, 'App\\Models\\User', 5, 'Rim-AuthToken', 'e0dd8683c8864b74515eac275512c59f372ce58091c44503af71c15174096b14', '[\"*\"]', '2024-04-24 12:28:53', NULL, '2024-04-24 12:27:11', '2024-04-24 12:28:53'),
(6, 'App\\Models\\User', 1, 'admin-AuthToken', '764155bee1bff41740934185ec4c844d290586454048ddbc23a91b669895d902', '[\"*\"]', '2024-04-24 12:29:46', NULL, '2024-04-24 12:29:14', '2024-04-24 12:29:46'),
(7, 'App\\Models\\User', 3, 'kamal-AuthToken', '81b040d8193a6a9f853f40c706ee4aa3e68f32a8d50f189367aa09252c5d9574', '[\"*\"]', '2024-04-25 06:56:10', NULL, '2024-04-24 12:29:55', '2024-04-25 06:56:10'),
(8, 'App\\Models\\User', 6, 'karim-AuthToken', '01c4f4e7776021e4572855032550daea0f5733fd50c393055262d2f50eedb47b', '[\"*\"]', '2024-04-24 13:54:37', NULL, '2024-04-24 13:15:42', '2024-04-24 13:54:37'),
(9, 'App\\Models\\User', 5, 'Rim-AuthToken', '35f21c45757f63c795d4182aee0c14529e053ddb4d3ad6bd758b1c1c21722096', '[\"*\"]', '2024-04-25 07:59:38', NULL, '2024-04-25 06:57:23', '2024-04-25 07:59:38'),
(10, 'App\\Models\\User', 3, 'kamal-AuthToken', 'cdf98949c268d9f86d04c949579d62432af09764649d2ad91969f52964139b57', '[\"*\"]', '2024-04-25 09:59:48', NULL, '2024-04-25 07:59:46', '2024-04-25 09:59:48'),
(11, 'App\\Models\\User', 1, 'admin-AuthToken', '3803bd06bfe3727d081635f39c8c4739e7bfb9ba9a90ec7d1f33b9d416cb50e2', '[\"*\"]', '2024-04-25 08:23:15', NULL, '2024-04-25 08:01:46', '2024-04-25 08:23:15'),
(12, 'App\\Models\\User', 6, 'karim-AuthToken', 'e72ccb8fc153a67bddbc21c6c6e6258021883c46ec683afe2142809bf83ff7bf', '[\"*\"]', '2024-04-28 20:36:33', NULL, '2024-04-25 10:00:01', '2024-04-28 20:36:33'),
(13, 'App\\Models\\User', 5, 'Rim-AuthToken', '134b697711ba2e469de8ee31a79d970ce266d1469c244fc01690d1a3463f38a1', '[\"*\"]', '2024-04-25 10:06:22', NULL, '2024-04-25 10:02:05', '2024-04-25 10:06:22'),
(14, 'App\\Models\\User', 5, 'Rim-AuthToken', '6f660897cbf07f52d3acc24bd101abf72f81698e2253f57cfce7e48d137f5f78', '[\"*\"]', '2024-04-25 11:55:37', NULL, '2024-04-25 10:09:02', '2024-04-25 11:55:37'),
(15, 'App\\Models\\User', 1, 'admin-AuthToken', '5e56b82afdfdaf3ce3eb74aea2cb7906fee424f857962fdcae881f843e9c0f0c', '[\"*\"]', '2024-04-25 12:04:15', NULL, '2024-04-25 12:03:08', '2024-04-25 12:04:15'),
(16, 'App\\Models\\User', 1, 'admin-AuthToken', '1deb863416421452aa7c4019e109828a93869af64a24f9f6f8b2f4a19b91dd60', '[\"*\"]', '2024-04-28 12:02:37', NULL, '2024-04-28 11:58:49', '2024-04-28 12:02:37'),
(17, 'App\\Models\\User', 7, 'Dolor reiciendis con-AuthToken', '09fb4be7384413b24678a12a055b0877ba06fbe0648e83f508989feb36e453fa', '[\"*\"]', '2024-04-29 16:34:09', NULL, '2024-04-28 21:18:05', '2024-04-29 16:34:09'),
(18, 'App\\Models\\User', 1, 'admin-AuthToken', '91d3e0c010c56ab6c8c79c3eded2f452e95f89dba679acfb0e83d07b0c39b1b3', '[\"*\"]', '2024-04-29 17:02:18', NULL, '2024-04-29 16:59:55', '2024-04-29 17:02:18'),
(19, 'App\\Models\\User', 3, 'kamal-AuthToken', 'c75782092759134003894feb68fa6d75b999a4174f4917b5962a17e3e3c2898e', '[\"*\"]', '2024-04-29 17:14:37', NULL, '2024-04-29 17:07:09', '2024-04-29 17:14:37'),
(20, 'App\\Models\\User', 1, 'admin-AuthToken', '8a192bfc43668fd08509ee70127ce3d1256e2d8c2fb33780b0c872cc72dbca9c', '[\"*\"]', '2024-04-29 17:19:47', NULL, '2024-04-29 17:16:01', '2024-04-29 17:19:47'),
(21, 'App\\Models\\User', 3, 'kamal-AuthToken', 'aa02852750fb1658650ec1778ae19b2aabf29e22b1f70dc3e1271827ee8ce293', '[\"*\"]', '2024-04-29 17:24:20', NULL, '2024-04-29 17:23:54', '2024-04-29 17:24:20'),
(22, 'App\\Models\\User', 6, 'karim-AuthToken', '1c4d64897cd10edf91f69e744e03eb4ddcf63c420365e86b269a272de870dcfd', '[\"*\"]', '2024-04-29 17:26:04', NULL, '2024-04-29 17:24:36', '2024-04-29 17:26:04'),
(23, 'App\\Models\\User', 5, 'Rim-AuthToken', '9df0e85bda6945d16b9a055dc1e909056dacc9a501a333c4c45b5e1156364247', '[\"*\"]', '2024-04-29 17:47:52', NULL, '2024-04-29 17:26:16', '2024-04-29 17:47:52'),
(24, 'App\\Models\\User', 1, 'admin-AuthToken', '167a435d582e1846e6b403526a080389d45520435ca8a84b2e5b9449412763b2', '[\"*\"]', '2024-04-29 17:49:45', NULL, '2024-04-29 17:48:05', '2024-04-29 17:49:45'),
(25, 'App\\Models\\User', 1, 'admin-AuthToken', 'a579415d8d0f23fe298436e0116d006c1dae13cb00b6b85d07e1a891ed6e1cc1', '[\"*\"]', '2024-04-29 17:53:58', NULL, '2024-04-29 17:50:56', '2024-04-29 17:53:58'),
(26, 'App\\Models\\User', 3, 'kamal-AuthToken', 'ba03de0129cf2852c17e71fdb849a26ff0bdd5e70f8fc0f08536938af36d9d32', '[\"*\"]', '2024-04-29 20:51:48', NULL, '2024-04-29 17:54:25', '2024-04-29 20:51:48'),
(27, 'App\\Models\\User', 6, 'karim-AuthToken', '483946ab977e945de6d67e939dfdc7d91628198abd841383d6a7455ac1bfa6ed', '[\"*\"]', '2024-04-30 13:12:30', NULL, '2024-04-29 20:52:02', '2024-04-30 13:12:30');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `Status` bigint(20) NOT NULL DEFAULT 1,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `Status`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`, `image`) VALUES
(1, 'admin', 'admin@gmail.com', 669474622, 1, 'admin', '2024-04-24 11:55:15', '$2y$10$8/6iKMigu/RvHw9dGiSJWuw69MBICHiGWgyii1o2fOGEfZ1TIsHQS', 'e0sbM1M9aj', '2024-04-24 11:55:15', '2024-04-24 11:55:15', NULL, NULL),
(2, 'user', 'user@gmail.com', 669474622, 1, 'user', '2024-04-24 11:55:15', '$2y$10$GYrH.nAMRmbdzx1xKSrz9u/q2bwlFZP0CFUpGJ4rBL/DZFloh2HgW', 'P4CJF0LRe0', '2024-04-24 11:55:15', '2024-04-24 11:55:15', NULL, NULL),
(3, 'kamal', 'kamal@gmail.com', 6674714653, 1, 'user', NULL, '$2y$10$5g4gsJjywhzNABxLipJuWOg4FQY3E279VlWoK9vUbkLxbst/aloMq', NULL, '2024-04-24 11:56:49', '2024-04-24 12:05:29', NULL, '1713963929.jpg'),
(4, 'islam', 'islam@gmail.com', 7669474632, 1, 'user', NULL, '$2y$10$kcnxkWZJG4KvoR7GU.ALX.ULmFA8k/s0LbuQM/OcwMwka1OEKkCQa', NULL, '2024-04-24 12:09:41', '2024-04-24 12:09:41', NULL, 'profile-icon.jpg'),
(5, 'Rim', 'Rim@gmail.com', 2634159873, 1, 'user', NULL, '$2y$10$vziSRjxlImrTacPGpyeTzemZLp8M6F4oZVwDGv/sipswyK5eSF50i', NULL, '2024-04-24 12:16:05', '2024-04-24 12:16:05', NULL, 'profile-icon.jpg'),
(6, 'karim', 'karim@gmail.com', 36251478000, 1, 'user', NULL, '$2y$10$27vkBGB.k2vuTsGFfaq92.fGMgPhuKOSOZH1M9v0alc0N6//z5hTq', NULL, '2024-04-24 12:21:59', '2024-04-29 17:02:09', NULL, '1713964919.jpg'),
(7, 'Dolor reiciendis con', 'rynymoxi@mailinator.com', 212669474623, 1, 'user', NULL, '$2y$10$qMt3cvMuOMZckv9DDMejEOw0qUVp3ETnFyrCx/AfNpeUcdetK7VEC', NULL, '2024-04-28 21:18:05', '2024-04-29 17:02:13', NULL, '1714342685.jpeg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ads_categoryid_foreign` (`CategoryID`),
  ADD KEY `ads_userid_foreign` (`UserID`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chats_from_id_foreign` (`from_id`),
  ADD KEY `chats_to_id_foreign` (`to_id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_ownerid_foreign` (`OwnerID`),
  ADD KEY `comments_userid_foreign` (`UserID`),
  ADD KEY `comments_adid_foreign` (`AdID`);

--
-- Index pour la table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conversations_user_1_foreign` (`user_1`),
  ADD KEY `conversations_user_2_foreign` (`user_2`),
  ADD KEY `conversations_ad_id_foreign` (`AD_id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `favorites_userid_foreign` (`UserID`),
  ADD KEY `favorites_adid_foreign` (`AdID`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_adid_foreign` (`AdID`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_foreign` (`user_id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `ads`
--
ALTER TABLE `ads`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `conversations`
--
ALTER TABLE `conversations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `ads`
--
ALTER TABLE `ads`
  ADD CONSTRAINT `ads_categoryid_foreign` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `ads_userid_foreign` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_from_id_foreign` FOREIGN KEY (`from_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `chats_to_id_foreign` FOREIGN KEY (`to_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_adid_foreign` FOREIGN KEY (`AdID`) REFERENCES `ads` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_ownerid_foreign` FOREIGN KEY (`OwnerID`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_userid_foreign` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `conversations`
--
ALTER TABLE `conversations`
  ADD CONSTRAINT `conversations_ad_id_foreign` FOREIGN KEY (`AD_id`) REFERENCES `ads` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `conversations_user_1_foreign` FOREIGN KEY (`user_1`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `conversations_user_2_foreign` FOREIGN KEY (`user_2`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_adid_foreign` FOREIGN KEY (`AdID`) REFERENCES `ads` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `favorites_userid_foreign` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_adid_foreign` FOREIGN KEY (`AdID`) REFERENCES `ads` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
