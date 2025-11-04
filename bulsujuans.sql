-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2025 at 11:02 AM
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
('cmhkeftro0004waas1gxo2j1r', 'users:view_list', 'View List Users', 'Allow user to view list users', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0005waass21b1q79', 'users:view_detail', 'View Detail Users', 'Allow user to view detail users', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0006waas51g4m73k', 'users:create', 'Create Users', 'Allow user to create users', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0007waasu9z47h7a', 'users:edit', 'Edit Users', 'Allow user to edit users', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0008waas1zq2yru1', 'users:delete', 'Delete Users', 'Allow user to delete users', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0009waassazqotx5', 'users:export_file', 'Export File Users', 'Allow user to export file users', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000awaasu3t31m0m', 'roles:view_list', 'View List Roles', 'Allow user to view list roles', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000bwaaslvb1d8in', 'roles:view_detail', 'View Detail Roles', 'Allow user to view detail roles', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000cwaaspup4fxx9', 'roles:create', 'Create Roles', 'Allow user to create roles', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000dwaas9g9zsw9t', 'roles:edit', 'Edit Roles', 'Allow user to edit roles', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000ewaas0xg8p1ty', 'roles:delete', 'Delete Roles', 'Allow user to delete roles', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000fwaas8p7tnl5b', 'roles:export_file', 'Export File Roles', 'Allow user to export file roles', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000gwaasn19jyh8v', 'access:view_list', 'View List Access', 'Allow user to view list access', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000hwaassjc98gv4', 'access:view_detail', 'View Detail Access', 'Allow user to view detail access', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000iwaast5sualy2', 'access:create', 'Create Access', 'Allow user to create access', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000jwaasqgo8emf1', 'access:edit', 'Edit Access', 'Allow user to edit access', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000kwaasfu046mgr', 'access:delete', 'Delete Access', 'Allow user to delete access', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000lwaasjh2i6ocu', 'access:export_file', 'Export File Access', 'Allow user to export file access', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000mwaas65s36wei', 'offices:view_list', 'View List Offices', 'Allow user to view list offices', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000nwaas5ufh3h6g', 'offices:view_detail', 'View Detail Offices', 'Allow user to view detail offices', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000owaassupuued1', 'offices:create', 'Create Offices', 'Allow user to create offices', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000pwaasseaheylz', 'offices:edit', 'Edit Offices', 'Allow user to edit offices', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000qwaas2lyb49dk', 'offices:delete', 'Delete Offices', 'Allow user to delete offices', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000rwaasyas8urv4', 'offices:export_file', 'Export File Offices', 'Allow user to export file offices', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000swaaswlbf7nfa', 'profile:view_profile', 'View Profile Profile', 'Allow user to view profile profile', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000twaasczry6jl1', 'profile:edit_profile', 'Edit Profile Profile', 'Allow user to edit profile profile', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000uwaas5hrp7ocb', 'profile:change_password', 'Change Password Profile', 'Allow user to change password profile', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000vwaasq0t5gjz6', 'complaint:view_list', 'View List Complaint', 'Allow user to view list complaint', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000wwaaszxa927vl', 'complaint:view_detail', 'View Detail Complaint', 'Allow user to view detail complaint', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000xwaascvxjjvxr', 'complaint:create', 'Create Complaint', 'Allow user to create complaint', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000ywaasonu8mc3e', 'complaint:edit', 'Edit Complaint', 'Allow user to edit complaint', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro000zwaasfpill7hm', 'complaint:delete', 'Delete Complaint', 'Allow user to delete complaint', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0010waasn5mttal3', 'tickets:view_list', 'View List Tickets', 'Allow user to view list tickets', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0011waasat35pvwp', 'tickets:view_detail', 'View Detail Tickets', 'Allow user to view detail tickets', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0012waasvkimselk', 'tickets:edit', 'Edit Tickets', 'Allow user to edit tickets', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0013waas8obnz310', 'tickets:delete', 'Delete Tickets', 'Allow user to delete tickets', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0014waase9g31nqh', 'tickets:export_file', 'Export File Tickets', 'Allow user to export file tickets', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0015waasit1wzaan', 'services:view_list', 'View List Services', 'Allow user to view list services', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0016waasif4tio58', 'services:view_detail', 'View Detail Services', 'Allow user to view detail services', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0017waasxpsejlz8', 'services:create', 'Create Services', 'Allow user to create services', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0018waasjnlwb515', 'services:edit', 'Edit Services', 'Allow user to edit services', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro0019waas7d63qrxr', 'services:delete', 'Delete Services', 'Allow user to delete services', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001awaas1qu2ooem', 'news:view_list', 'View List News', 'Allow user to view list news', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001bwaasyo17oqtb', 'news:view_detail', 'View Detail News', 'Allow user to view detail news', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001cwaasrcwq5o6v', 'news:create', 'Create News', 'Allow user to create news', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001dwaaste52u1gv', 'news:edit', 'Edit News', 'Allow user to edit news', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001ewaas957c4lco', 'news:delete', 'Delete News', 'Allow user to delete news', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001fwaashceffo6h', 'emergency:view_list', 'View List Emergency', 'Allow user to view list emergency', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001gwaasxqim1p83', 'emergency:view_detail', 'View Detail Emergency', 'Allow user to view detail emergency', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001hwaas05556f73', 'emergency:create', 'Create Emergency', 'Allow user to create emergency', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001iwaas233n8h3a', 'emergency:edit', 'Edit Emergency', 'Allow user to edit emergency', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL),
('cmhkeftro001jwaasdtgxb9i8', 'emergency:delete', 'Delete Emergency', 'Allow user to delete emergency', '2025-11-04 10:01:26.388', '2025-11-04 10:01:26.388', NULL);

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
('cmhkefu2c001kwaaspa4ai4ul', NULL, 'Menandroeugenio1028@gmail.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2d001lwaas54ntkwpf', NULL, 'jhondeldelconacaranay@gmail.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2d001mwaasnp8gxm35', NULL, 'teacher@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001nwaasl4ol8omh', NULL, 'teacher4@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001owaasinih9847', '1001', 'student1@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001pwaasshnl9m83', NULL, 'teacher1@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001qwaasyas0klad', NULL, 'teacher3@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001rwaas9av7qhh2', NULL, 'nonteacher@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001swaasadcisg2f', NULL, 'teacher2@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001twaasi8lrujly', '1002', 'student2@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001uwaasbxxvmtnb', NULL, 'teacher5@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773'),
('cmhkefu2e001vwaasho66qrfp', NULL, 'teacher6@example.com', '', '', '2025-11-04 10:01:26.773', '2025-11-04 10:01:26.773');

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
('cmhkefu9v0028waas6nu9qlo2', 'Guidance Office', 'Handles cases involving bullying, discrimination, and harassment to ensure student welfare and mental well-being.', 'GUIDANCE', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL),
('cmhkefu9v0029waaszxbcapeg', 'Health Services Office', 'Provides immediate mental health support, counseling, and intervention for students showing signs of distress or self-harm.', 'HEALTH_SERVICES', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL),
('cmhkefu9v002awaas6m8k8z82', 'Security Office', 'Ensures campus safety by addressing threats, violence, and activities related to dangerous organizations.', 'SECURITY', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL),
('cmhkefu9v002bwaaslsvu1f5w', 'Discipline Office', 'Oversees violations involving sexual misconduct and indecent behavior to uphold moral and disciplinary standards.', 'DISCIPLINE', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL),
('cmhkefu9v002cwaasm8x7sz9k', 'Student Affairs Office', 'Investigates incidents involving the sale or promotion of prohibited goods such as drugs, alcohol, or contraband.', 'STUDENT_AFFAIRS', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL),
('cmhkefu9v002dwaasoohmishr', 'Finance Office', 'Handles reports of financial scams, fraudulent transactions, and misuse of funds related to school activities.', 'FINANCE', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL),
('cmhkefu9v002ewaasrgk7wsvj', 'Administrative Office', 'Manages general complaints that do not fall under specific categories, ensuring proper redirection and resolution.', 'ADMINISTRATIVE', '2025-11-04 10:01:27.043', '2025-11-04 10:01:27.043', NULL);

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
('cmhkeftpk0000waas7z3modfu', 'admin', 'Admin', '2025-11-04 10:01:26.313', '2025-11-04 10:01:26.313', NULL),
('cmhkeftpk0001waasee2ov0wv', 'students', 'Students', '2025-11-04 10:01:26.313', '2025-11-04 10:01:26.313', NULL),
('cmhkeftpk0002waasy7wizj9h', 'teaching staff', 'Teaching Staff', '2025-11-04 10:01:26.313', '2025-11-04 10:01:26.313', NULL),
('cmhkeftpk0003waastddj9433', 'non-teaching staff', 'Non-teaching Staff', '2025-11-04 10:01:26.313', '2025-11-04 10:01:26.313', NULL);

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
('cmhkefu4u001wwaas12klkfqs', 'nonteacher@example.com', 'Ella', 'Grace', 'Mendoza', NULL, 'cmhkeftpk0003waastddj9433', 'cmhkefu2e001rwaas9av7qhh2', NULL, '2025-11-04 10:01:26.862', '2025-11-04 10:01:26.862'),
('cmhkefu4u001xwaas1xt11kq4', 'teacher@example.com', 'Mark', 'Anthony', 'Santos', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2d001mwaasnp8gxm35', NULL, '2025-11-04 10:01:26.862', '2025-11-04 10:01:26.862'),
('cmhkefu5o001ywaasvob75tb8', 'jhondeldelconacaranay@gmail.com', 'Johndel', 'Delicona', 'Caranay', NULL, 'cmhkeftpk0000waas7z3modfu', 'cmhkefu2d001lwaas54ntkwpf', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5o001zwaaskltscs15', 'student2@example.com', 'Diana', 'Rose', 'Reyes', '1002', 'cmhkeftpk0001waasee2ov0wv', 'cmhkefu2e001twaasi8lrujly', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5p0020waas1g01rzxp', 'teacher2@example.com', 'Carl', 'John', 'Villanueva', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2e001swaasadcisg2f', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5p0021waas31w0ei5q', 'teacher5@example.com', 'Adrian', 'Paul', 'Ramos', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2e001uwaasbxxvmtnb', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5p0022waaskmiwblcs', 'teacher4@example.com', 'Jacob', 'Luis', 'Garcia', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2e001nwaasl4ol8omh', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5p0023waasua49lcrv', 'teacher3@example.com', 'Ethan', 'James', 'Delos Santos', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2e001qwaasyas0klad', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5p0024waas09dv5756', 'teacher6@example.com', 'Nathan', 'Kyle', 'Fernandez', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2e001vwaasho66qrfp', NULL, '2025-11-04 10:01:26.893', '2025-11-04 10:01:26.893'),
('cmhkefu5p0025waaszcf7ermu', 'Menandroeugenio1028@gmail.com', 'Menandro', 'Santos', 'Eugenio', NULL, 'cmhkeftpk0000waas7z3modfu', 'cmhkefu2c001kwaaspa4ai4ul', NULL, '2025-11-04 10:01:26.894', '2025-11-04 10:01:26.894'),
('cmhkefu5p0026waas1aajvqlh', 'student1@example.com', 'Lara', 'Mae', 'Cruz', '1001', 'cmhkeftpk0001waasee2ov0wv', 'cmhkefu2e001owaasinih9847', NULL, '2025-11-04 10:01:26.894', '2025-11-04 10:01:26.894'),
('cmhkefu5q0027waastyjkbqe8', 'teacher1@example.com', 'Lance', 'Rey', 'Domingo', NULL, 'cmhkeftpk0002waasy7wizj9h', 'cmhkefu2e001pwaasshnl9m83', NULL, '2025-11-04 10:01:26.894', '2025-11-04 10:01:26.894');

-- --------------------------------------------------------

--
-- Table structure for table `_accesstorole`
--

CREATE TABLE `_accesstorole` (
  `A` varchar(191) NOT NULL,
  `B` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_accesstorole`
--

INSERT INTO `_accesstorole` (`A`, `B`) VALUES
('cmhkeftro0004waas1gxo2j1r', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0005waass21b1q79', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0006waas51g4m73k', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0007waasu9z47h7a', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0008waas1zq2yru1', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0009waassazqotx5', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000awaasu3t31m0m', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000bwaaslvb1d8in', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000cwaaspup4fxx9', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000dwaas9g9zsw9t', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000ewaas0xg8p1ty', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000fwaas8p7tnl5b', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000gwaasn19jyh8v', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000hwaassjc98gv4', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000iwaast5sualy2', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000jwaasqgo8emf1', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000kwaasfu046mgr', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000lwaasjh2i6ocu', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000mwaas65s36wei', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000nwaas5ufh3h6g', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000owaassupuued1', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000pwaasseaheylz', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000qwaas2lyb49dk', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000rwaasyas8urv4', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000swaaswlbf7nfa', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000swaaswlbf7nfa', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000swaaswlbf7nfa', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro000swaaswlbf7nfa', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro000twaasczry6jl1', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000twaasczry6jl1', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000twaasczry6jl1', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro000twaasczry6jl1', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro000uwaas5hrp7ocb', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000uwaas5hrp7ocb', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000uwaas5hrp7ocb', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro000uwaas5hrp7ocb', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro000vwaasq0t5gjz6', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000vwaasq0t5gjz6', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000wwaaszxa927vl', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000wwaaszxa927vl', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000xwaascvxjjvxr', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000xwaascvxjjvxr', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000ywaasonu8mc3e', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000ywaasonu8mc3e', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro000zwaasfpill7hm', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro000zwaasfpill7hm', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro0010waasn5mttal3', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0010waasn5mttal3', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0010waasn5mttal3', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0011waasat35pvwp', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0011waasat35pvwp', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0011waasat35pvwp', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0012waasvkimselk', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0012waasvkimselk', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0012waasvkimselk', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0013waas8obnz310', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0013waas8obnz310', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0013waas8obnz310', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0014waase9g31nqh', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0014waase9g31nqh', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0014waase9g31nqh', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0015waasit1wzaan', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0015waasit1wzaan', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro0015waasit1wzaan', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0015waasit1wzaan', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0016waasif4tio58', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0016waasif4tio58', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro0016waasif4tio58', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0016waasif4tio58', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro0017waasxpsejlz8', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0017waasxpsejlz8', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0018waasjnlwb515', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0018waasjnlwb515', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro0019waas7d63qrxr', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro0019waas7d63qrxr', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001awaas1qu2ooem', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001awaas1qu2ooem', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro001awaas1qu2ooem', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001awaas1qu2ooem', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro001bwaasyo17oqtb', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001bwaasyo17oqtb', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro001bwaasyo17oqtb', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001bwaasyo17oqtb', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro001cwaasrcwq5o6v', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001cwaasrcwq5o6v', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001dwaaste52u1gv', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001dwaaste52u1gv', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001ewaas957c4lco', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001ewaas957c4lco', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001fwaashceffo6h', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001fwaashceffo6h', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro001fwaashceffo6h', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001fwaashceffo6h', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro001gwaasxqim1p83', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001gwaasxqim1p83', 'cmhkeftpk0001waasee2ov0wv'),
('cmhkeftro001gwaasxqim1p83', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001gwaasxqim1p83', 'cmhkeftpk0003waastddj9433'),
('cmhkeftro001hwaas05556f73', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001hwaas05556f73', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001iwaas233n8h3a', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001iwaas233n8h3a', 'cmhkeftpk0002waasy7wizj9h'),
('cmhkeftro001jwaasdtgxb9i8', 'cmhkeftpk0000waas7z3modfu'),
('cmhkeftro001jwaasdtgxb9i8', 'cmhkeftpk0002waasy7wizj9h');

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
-- Indexes for table `_accesstorole`
--
ALTER TABLE `_accesstorole`
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
-- Constraints for table `_accesstorole`
--
ALTER TABLE `_accesstorole`
  ADD CONSTRAINT `_AccessToRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `access` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AccessToRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
