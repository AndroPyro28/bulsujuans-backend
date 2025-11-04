-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2025 at 11:23 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bulsujuans`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `id` varchar(191) NOT NULL,
  `code` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `desc` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `access`
--

INSERT INTO `access` (`id`, `code`, `name`, `desc`, `createdAt`, `updatedAt`, `deleted_at`) VALUES
('cmhkf8bgu0004waycw3fg1slq', 'users:view_list', 'View List Users', 'Allow user to view list users', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgu0005wayc9lmbhcbw', 'users:view_detail', 'View Detail Users', 'Allow user to view detail users', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgu0006wayc9itvws90', 'users:create', 'Create Users', 'Allow user to create users', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgu0007wayckqtlreu1', 'users:edit', 'Edit Users', 'Allow user to edit users', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgu0008wayc7ygro46v', 'users:delete', 'Delete Users', 'Allow user to delete users', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgu0009waycwuggyd6u', 'users:export_file', 'Export File Users', 'Allow user to export file users', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgu000awaych0rqi5el', 'roles:view_list', 'View List Roles', 'Allow user to view list roles', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000bwaycg2cpslwn', 'roles:view_detail', 'View Detail Roles', 'Allow user to view detail roles', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000cwaycr02p6146', 'roles:create', 'Create Roles', 'Allow user to create roles', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000dwaycmaiu6vgs', 'roles:edit', 'Edit Roles', 'Allow user to edit roles', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000ewayc63uwodki', 'roles:delete', 'Delete Roles', 'Allow user to delete roles', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000fwayc22gbs7wv', 'roles:export_file', 'Export File Roles', 'Allow user to export file roles', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000gwayctu3kvy32', 'access:view_list', 'View List Access', 'Allow user to view list access', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000hwaycbwld559e', 'access:view_detail', 'View Detail Access', 'Allow user to view detail access', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000iwayczw3petkk', 'access:create', 'Create Access', 'Allow user to create access', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000jwayclk5et2xp', 'access:edit', 'Edit Access', 'Allow user to edit access', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000kwaycho6s3x2f', 'access:delete', 'Delete Access', 'Allow user to delete access', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000lwaycqjx0kxkl', 'access:export_file', 'Export File Access', 'Allow user to export file access', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000mwayc0r4t5e42', 'offices:view_list', 'View List Offices', 'Allow user to view list offices', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000nwaycbl5lavwk', 'offices:view_detail', 'View Detail Offices', 'Allow user to view detail offices', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000owayc54x6781g', 'offices:create', 'Create Offices', 'Allow user to create offices', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000pwaycvrkrse3r', 'offices:edit', 'Edit Offices', 'Allow user to edit offices', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000qwaycn1rndgd7', 'offices:delete', 'Delete Offices', 'Allow user to delete offices', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000rwaych92dniru', 'offices:export_file', 'Export File Offices', 'Allow user to export file offices', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000swaycv3ah2ebb', 'profile:view_profile', 'View Profile Profile', 'Allow user to view profile profile', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000twayc2cia3wip', 'profile:edit_profile', 'Edit Profile Profile', 'Allow user to edit profile profile', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000uwayco5qovzxr', 'profile:change_password', 'Change Password Profile', 'Allow user to change password profile', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000vwaycgfv8f5u7', 'complaint:view_list', 'View List Complaint', 'Allow user to view list complaint', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000wwayc6el1pbl9', 'complaint:view_detail', 'View Detail Complaint', 'Allow user to view detail complaint', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000xwaycn6430ylm', 'complaint:create', 'Create Complaint', 'Allow user to create complaint', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000ywaycbjk9kmnh', 'complaint:edit', 'Edit Complaint', 'Allow user to edit complaint', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv000zwayc2pkxv7ir', 'complaint:delete', 'Delete Complaint', 'Allow user to delete complaint', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0010wayc5uthuvfy', 'tickets:view_list', 'View List Tickets', 'Allow user to view list tickets', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0011waycf5nv2tln', 'tickets:view_detail', 'View Detail Tickets', 'Allow user to view detail tickets', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0012waycd2mdrjql', 'tickets:edit', 'Edit Tickets', 'Allow user to edit tickets', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0013wayc0bv9ljo6', 'tickets:delete', 'Delete Tickets', 'Allow user to delete tickets', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0014waycaar4dpl5', 'tickets:export_file', 'Export File Tickets', 'Allow user to export file tickets', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0015waycpuinr2xo', 'services:view_list', 'View List Services', 'Allow user to view list services', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0016waych6a6ju78', 'services:view_detail', 'View Detail Services', 'Allow user to view detail services', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0017waycrjryn676', 'services:create', 'Create Services', 'Allow user to create services', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0018wayc5d33i322', 'services:edit', 'Edit Services', 'Allow user to edit services', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv0019wayc5n0l1gmu', 'services:delete', 'Delete Services', 'Allow user to delete services', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001awaycscgqp9sy', 'news:view_list', 'View List News', 'Allow user to view list news', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001bwayc3iit1828', 'news:view_detail', 'View Detail News', 'Allow user to view detail news', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001cwaycmxlsy3xk', 'news:create', 'Create News', 'Allow user to create news', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001dwaycg2yy72wd', 'news:edit', 'Edit News', 'Allow user to edit news', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001ewaycv8zf0bty', 'news:delete', 'Delete News', 'Allow user to delete news', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001fwayc5i2hxp28', 'emergency:view_list', 'View List Emergency', 'Allow user to view list emergency', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001gwaycndnq3ilh', 'emergency:view_detail', 'View Detail Emergency', 'Allow user to view detail emergency', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001hwayc8amupkhr', 'emergency:create', 'Create Emergency', 'Allow user to create emergency', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001iwaycpj5u8myi', 'emergency:edit', 'Edit Emergency', 'Allow user to edit emergency', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL),
('cmhkf8bgv001jwaycmaery3wi', 'emergency:delete', 'Delete Emergency', 'Allow user to delete emergency', '2025-11-04 10:23:35.695', '2025-11-04 10:23:35.695', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `contact_number` varchar(191) NOT NULL,
  `alternate_contact_number` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `incident_detail` varchar(191) NOT NULL,
  `date_of_incident` datetime(3) NOT NULL,
  `complaint_status` enum('PENDING','ACCEPTED','ONGOING','REJECTED','COMPLETED') NOT NULL DEFAULT 'PENDING',
  `complaint_type` enum('HARASSMENT','SUICIDE_OR_SELF_INJURY','VIOLENCE_OR_DANGEROUS_ORGANIZATIONS','NUDITY_OR_SEXUAL_ACTIVITY','SELLING_OR_PROMOTING_OF_RESTRICTED_ITEMS','SCAM_OR_FRAUD','OTHER') NOT NULL DEFAULT 'OTHER',
  `complainant_id` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `credential`
--

CREATE TABLE `credential` (
  `id` varchar(191) NOT NULL,
  `student_id` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `access_token` longtext NOT NULL,
  `refresh_token` longtext NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `credential`
--

INSERT INTO `credential` (`id`, `student_id`, `email`, `access_token`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
('cmhkf8bv6001kwaycvp9ie997', NULL, 'jhondeldelconacaranay@gmail.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv7001lwayc7kfhpope', '1001', 'student1@example.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv7001mwaycboq6jrox', NULL, 'Menandroeugenio1028@gmail.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv8001nwayca0d7by4o', NULL, 'nonteacher@example.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv8001owaycgbwwqb3p', NULL, 'teacher4@example.com', '', '', '2025-11-04 10:23:36.211', '2025-11-04 10:23:36.211'),
('cmhkf8bv8001pwayc5ikcureh', NULL, 'teacher6@example.com', '', '', '2025-11-04 10:23:36.211', '2025-11-04 10:23:36.211'),
('cmhkf8bv8001qwaycxjgw7dd5', NULL, 'teacher5@example.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv8001rwayc8uke73ge', NULL, 'teacher1@example.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv8001swayc17ui1utg', NULL, 'teacher@example.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv8001twaychiocqnfg', NULL, 'teacher2@example.com', '', '', '2025-11-04 10:23:36.210', '2025-11-04 10:23:36.210'),
('cmhkf8bv8001uwaycpwy3j4vn', '1002', 'student2@example.com', '', '', '2025-11-04 10:23:36.211', '2025-11-04 10:23:36.211'),
('cmhkf8bvs001vwayc19t415da', NULL, 'teacher3@example.com', '', '', '2025-11-04 10:23:36.211', '2025-11-04 10:23:36.211');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` varchar(191) NOT NULL,
  `public_url` text NOT NULL,
  `public_id` text NOT NULL,
  `complaint_id` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE `office` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `desc` varchar(191) DEFAULT NULL,
  `type` enum('GUIDANCE','HEALTH_SERVICES','SECURITY','DISCIPLINE','STUDENT_AFFAIRS','FINANCE','ADMINISTRATIVE') NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `office`
--

INSERT INTO `office` (`id`, `name`, `desc`, `type`, `createdAt`, `updatedAt`, `deleted_at`) VALUES
('cmhkf8c5f0028waycrcu89heq', 'Guidance Office', 'Handles cases involving bullying, discrimination, and harassment to ensure student welfare and mental well-being.', 'GUIDANCE', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL),
('cmhkf8c5f0029waycrhgsnh64', 'Health Services Office', 'Provides immediate mental health support, counseling, and intervention for students showing signs of distress or self-harm.', 'HEALTH_SERVICES', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL),
('cmhkf8c5f002awayc020upn1e', 'Security Office', 'Ensures campus safety by addressing threats, violence, and activities related to dangerous organizations.', 'SECURITY', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL),
('cmhkf8c5f002bwayczrrpil5j', 'Discipline Office', 'Oversees violations involving sexual misconduct and indecent behavior to uphold moral and disciplinary standards.', 'DISCIPLINE', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL),
('cmhkf8c5f002cwayc6sbivc5x', 'Student Affairs Office', 'Investigates incidents involving the sale or promotion of prohibited goods such as drugs, alcohol, or contraband.', 'STUDENT_AFFAIRS', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL),
('cmhkf8c5f002dwaycvfz8ds6l', 'Finance Office', 'Handles reports of financial scams, fraudulent transactions, and misuse of funds related to school activities.', 'FINANCE', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL),
('cmhkf8c5f002ewayclvedrz6o', 'Administrative Office', 'Manages general complaints that do not fall under specific categories, ensuring proper redirection and resolution.', 'ADMINISTRATIVE', '2025-11-04 10:23:36.580', '2025-11-04 10:23:36.580', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `desc` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`, `desc`, `createdAt`, `updatedAt`, `deleted_at`) VALUES
('cmhkf8bdl0000waycjnmxoz6a', 'admin', 'Admin', '2025-11-04 10:23:35.575', '2025-11-04 10:23:35.575', NULL),
('cmhkf8bdl0001wayc06fhdoq1', 'students', 'Students', '2025-11-04 10:23:35.575', '2025-11-04 10:23:35.575', NULL),
('cmhkf8bdl0002wayc5muc6qhq', 'teaching staff', 'Teaching Staff', '2025-11-04 10:23:35.575', '2025-11-04 10:23:35.575', NULL),
('cmhkf8bdl0003wayc4lwyi6yo', 'non-teaching staff', 'Non-teaching Staff', '2025-11-04 10:23:35.575', '2025-11-04 10:23:35.575', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `status` enum('OPEN','IN_PROGRESS','RESOLVED','CLOSED','CANCELLED') NOT NULL DEFAULT 'OPEN',
  `complaint_id` varchar(191) DEFAULT NULL,
  `assigned_office_id` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `first_name` varchar(191) DEFAULT NULL,
  `middle_name` varchar(191) DEFAULT NULL,
  `last_name` varchar(191) DEFAULT NULL,
  `student_id` varchar(191) DEFAULT NULL,
  `role_id` varchar(191) DEFAULT NULL,
  `credential_id` varchar(191) NOT NULL,
  `office_id` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `first_name`, `middle_name`, `last_name`, `student_id`, `role_id`, `credential_id`, `office_id`, `createdAt`, `updatedAt`) VALUES
('cmhkf8c0y001wwaycpx5pq5w5', 'teacher@example.com', 'Mark', 'Anthony', 'Santos', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bv8001swayc17ui1utg', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y001xwayclw3hi3uv', 'student1@example.com', 'Lara', 'Mae', 'Cruz', '1001', 'cmhkf8bdl0001wayc06fhdoq1', 'cmhkf8bv7001lwayc7kfhpope', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y001ywaycxu3yg7kr', 'teacher3@example.com', 'Ethan', 'James', 'Delos Santos', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bvs001vwayc19t415da', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y001zwayccsj7ojeo', 'teacher6@example.com', 'Nathan', 'Kyle', 'Fernandez', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bv8001pwayc5ikcureh', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0020wayc02s3kpln', 'nonteacher@example.com', 'Ella', 'Grace', 'Mendoza', NULL, 'cmhkf8bdl0003wayc4lwyi6yo', 'cmhkf8bv8001nwayca0d7by4o', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0021waycv6av3lly', 'Menandroeugenio1028@gmail.com', 'Menandro', 'Santos', 'Eugenio', NULL, 'cmhkf8bdl0000waycjnmxoz6a', 'cmhkf8bv7001mwaycboq6jrox', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0022wayc9wefahhl', 'teacher1@example.com', 'Lance', 'Rey', 'Domingo', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bv8001rwayc8uke73ge', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0023waycqt3vuxcn', 'teacher2@example.com', 'Carl', 'John', 'Villanueva', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bv8001twaychiocqnfg', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0024waycx3wjttkh', 'student2@example.com', 'Diana', 'Rose', 'Reyes', '1002', 'cmhkf8bdl0001wayc06fhdoq1', 'cmhkf8bv8001uwaycpwy3j4vn', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0025waycudrd9kle', 'teacher5@example.com', 'Adrian', 'Paul', 'Ramos', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bv8001qwaycxjgw7dd5', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0026waycpq43wg0g', 'jhondeldelconacaranay@gmail.com', 'Johndel', 'Delicona', 'Caranay', NULL, 'cmhkf8bdl0000waycjnmxoz6a', 'cmhkf8bv6001kwaycvp9ie997', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418'),
('cmhkf8c0y0027wayc2yidemvc', 'teacher4@example.com', 'Jacob', 'Luis', 'Garcia', NULL, 'cmhkf8bdl0002wayc5muc6qhq', 'cmhkf8bv8001owaycgbwwqb3p', NULL, '2025-11-04 10:23:36.418', '2025-11-04 10:23:36.418');

-- --------------------------------------------------------

--
-- Table structure for table `_AccessToRole`
--

CREATE TABLE `_AccessToRole` (
  `A` varchar(191) NOT NULL,
  `B` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_AccessToRole`
--

INSERT INTO `_AccessToRole` (`A`, `B`) VALUES
('cmhkf8bgu0004waycw3fg1slq', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgu0005wayc9lmbhcbw', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgu0006wayc9itvws90', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgu0007wayckqtlreu1', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgu0008wayc7ygro46v', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgu0009waycwuggyd6u', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgu000awaych0rqi5el', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000bwaycg2cpslwn', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000cwaycr02p6146', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000dwaycmaiu6vgs', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000ewayc63uwodki', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000fwayc22gbs7wv', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000gwayctu3kvy32', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000hwaycbwld559e', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000iwayczw3petkk', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000jwayclk5et2xp', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000kwaycho6s3x2f', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000lwaycqjx0kxkl', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000mwayc0r4t5e42', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000nwaycbl5lavwk', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000owayc54x6781g', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000pwaycvrkrse3r', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000qwaycn1rndgd7', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000rwaych92dniru', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000swaycv3ah2ebb', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000swaycv3ah2ebb', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000swaycv3ah2ebb', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv000swaycv3ah2ebb', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv000twayc2cia3wip', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000twayc2cia3wip', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000twayc2cia3wip', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv000twayc2cia3wip', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv000uwayco5qovzxr', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000uwayco5qovzxr', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000uwayco5qovzxr', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv000uwayco5qovzxr', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv000vwaycgfv8f5u7', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000vwaycgfv8f5u7', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000wwayc6el1pbl9', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000wwayc6el1pbl9', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000xwaycn6430ylm', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000xwaycn6430ylm', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000ywaycbjk9kmnh', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000ywaycbjk9kmnh', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv000zwayc2pkxv7ir', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv000zwayc2pkxv7ir', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv0010wayc5uthuvfy', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0010wayc5uthuvfy', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0010wayc5uthuvfy', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0011waycf5nv2tln', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0011waycf5nv2tln', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0011waycf5nv2tln', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0012waycd2mdrjql', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0012waycd2mdrjql', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0012waycd2mdrjql', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0013wayc0bv9ljo6', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0013wayc0bv9ljo6', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0013wayc0bv9ljo6', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0014waycaar4dpl5', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0014waycaar4dpl5', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0014waycaar4dpl5', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0015waycpuinr2xo', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0015waycpuinr2xo', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv0015waycpuinr2xo', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0015waycpuinr2xo', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0016waych6a6ju78', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0016waych6a6ju78', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv0016waych6a6ju78', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0016waych6a6ju78', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv0017waycrjryn676', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0017waycrjryn676', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0018wayc5d33i322', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0018wayc5d33i322', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv0019wayc5n0l1gmu', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv0019wayc5n0l1gmu', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001awaycscgqp9sy', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001awaycscgqp9sy', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv001awaycscgqp9sy', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001awaycscgqp9sy', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv001bwayc3iit1828', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001bwayc3iit1828', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv001bwayc3iit1828', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001bwayc3iit1828', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv001cwaycmxlsy3xk', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001cwaycmxlsy3xk', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001dwaycg2yy72wd', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001dwaycg2yy72wd', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001ewaycv8zf0bty', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001ewaycv8zf0bty', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001fwayc5i2hxp28', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001fwayc5i2hxp28', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv001fwayc5i2hxp28', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001fwayc5i2hxp28', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv001gwaycndnq3ilh', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001gwaycndnq3ilh', 'cmhkf8bdl0001wayc06fhdoq1'),
('cmhkf8bgv001gwaycndnq3ilh', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001gwaycndnq3ilh', 'cmhkf8bdl0003wayc4lwyi6yo'),
('cmhkf8bgv001hwayc8amupkhr', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001hwayc8amupkhr', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001iwaycpj5u8myi', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001iwaycpj5u8myi', 'cmhkf8bdl0002wayc5muc6qhq'),
('cmhkf8bgv001jwaycmaery3wi', 'cmhkf8bdl0000waycjnmxoz6a'),
('cmhkf8bgv001jwaycmaery3wi', 'cmhkf8bdl0002wayc5muc6qhq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access`
--
ALTER TABLE `access`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Access_code_key` (`code`),
  ADD KEY `Access_code_idx` (`code`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Complaint_name_complaint_type_idx` (`name`,`complaint_type`),
  ADD KEY `Complaint_complainant_id_fkey` (`complainant_id`);

--
-- Indexes for table `credential`
--
ALTER TABLE `credential`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Credential_email_key` (`email`),
  ADD UNIQUE KEY `Credential_student_id_key` (`student_id`),
  ADD KEY `Credential_student_id_email_idx` (`student_id`,`email`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Documents_complaint_id_idx` (`complaint_id`);

--
-- Indexes for table `office`
--
ALTER TABLE `office`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Office_name_key` (`name`),
  ADD KEY `Office_name_idx` (`name`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_name_key` (`name`),
  ADD KEY `Role_name_idx` (`name`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Ticket_complaint_id_key` (`complaint_id`),
  ADD KEY `Ticket_status_idx` (`status`),
  ADD KEY `Ticket_assigned_office_id_fkey` (`assigned_office_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD UNIQUE KEY `User_credential_id_key` (`credential_id`),
  ADD UNIQUE KEY `User_student_id_key` (`student_id`),
  ADD KEY `User_email_student_id_idx` (`email`,`student_id`),
  ADD KEY `User_role_id_fkey` (`role_id`),
  ADD KEY `User_office_id_fkey` (`office_id`);

--
-- Indexes for table `_AccessToRole`
--
ALTER TABLE `_AccessToRole`
  ADD UNIQUE KEY `_AccessToRole_AB_unique` (`A`,`B`),
  ADD KEY `_AccessToRole_B_index` (`B`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `complaint`
--
ALTER TABLE `complaint`
  ADD CONSTRAINT `Complaint_complainant_id_fkey` FOREIGN KEY (`complainant_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `Documents_complaint_id_fkey` FOREIGN KEY (`complaint_id`) REFERENCES `complaint` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `Ticket_assigned_office_id_fkey` FOREIGN KEY (`assigned_office_id`) REFERENCES `office` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Ticket_complaint_id_fkey` FOREIGN KEY (`complaint_id`) REFERENCES `complaint` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_credential_id_fkey` FOREIGN KEY (`credential_id`) REFERENCES `credential` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `User_office_id_fkey` FOREIGN KEY (`office_id`) REFERENCES `office` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `User_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `_AccessToRole`
--
ALTER TABLE `_AccessToRole`
  ADD CONSTRAINT `_AccessToRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `access` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AccessToRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
