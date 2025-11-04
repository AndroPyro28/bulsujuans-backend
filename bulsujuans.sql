-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2025 at 09:55 AM
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
('cmhbnt0ix0004wa6cbunnt3nf', 'users:view_list', 'View List Users', 'Allow user to view list users', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0ix0005wa6c5ru9kwg4', 'users:view_detail', 'View Detail Users', 'Allow user to view detail users', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0ix0006wa6cr0pec55f', 'users:create', 'Create Users', 'Allow user to create users', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0ix0007wa6c0ytzye1g', 'users:edit', 'Edit Users', 'Allow user to edit users', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0ix0008wa6cps1b8h08', 'users:delete', 'Delete Users', 'Allow user to delete users', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0ix0009wa6cfzogrxeb', 'users:export_file', 'Export File Users', 'Allow user to export file users', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0ix000awa6cvllz58k1', 'roles:view_list', 'View List Roles', 'Allow user to view list roles', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000bwa6codkhkbta', 'roles:view_detail', 'View Detail Roles', 'Allow user to view detail roles', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000cwa6cdxthljev', 'roles:create', 'Create Roles', 'Allow user to create roles', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000dwa6chbsgjew7', 'roles:edit', 'Edit Roles', 'Allow user to edit roles', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000ewa6ctovqo62v', 'roles:delete', 'Delete Roles', 'Allow user to delete roles', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000fwa6cr21lh3y3', 'roles:export_file', 'Export File Roles', 'Allow user to export file roles', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000gwa6cftfgwzhs', 'access:view_list', 'View List Access', 'Allow user to view list access', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000hwa6cfc969rqt', 'access:view_detail', 'View Detail Access', 'Allow user to view detail access', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000iwa6c2jnbdzgh', 'access:create', 'Create Access', 'Allow user to create access', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000jwa6czheqa72j', 'access:edit', 'Edit Access', 'Allow user to edit access', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000kwa6couan4jmw', 'access:delete', 'Delete Access', 'Allow user to delete access', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000lwa6cwx8levc6', 'access:export_file', 'Export File Access', 'Allow user to export file access', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000mwa6co75d9dxe', 'offices:view_list', 'View List Offices', 'Allow user to view list offices', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000nwa6c8nkplros', 'offices:view_detail', 'View Detail Offices', 'Allow user to view detail offices', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000owa6c3nv5warr', 'offices:create', 'Create Offices', 'Allow user to create offices', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000pwa6cvyfqgi6b', 'offices:edit', 'Edit Offices', 'Allow user to edit offices', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000qwa6c9pja4xnj', 'offices:delete', 'Delete Offices', 'Allow user to delete offices', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000rwa6cdjfdbjlq', 'offices:export_file', 'Export File Offices', 'Allow user to export file offices', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000swa6cy6fm1q4e', 'profile:view_profile', 'View Profile Profile', 'Allow user to view profile profile', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000twa6cfxkakh7q', 'profile:edit_profile', 'Edit Profile Profile', 'Allow user to edit profile profile', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000uwa6chj1lxse4', 'profile:change_password', 'Change Password Profile', 'Allow user to change password profile', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000vwa6czbl424c2', 'complaint:view_list', 'View List Complaint', 'Allow user to view list complaint', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000wwa6c3dabt3km', 'complaint:view_detail', 'View Detail Complaint', 'Allow user to view detail complaint', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000xwa6cszxxpjmc', 'complaint:create', 'Create Complaint', 'Allow user to create complaint', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000ywa6c2onrlof0', 'complaint:edit', 'Edit Complaint', 'Allow user to edit complaint', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy000zwa6ckymcg0ml', 'complaint:delete', 'Delete Complaint', 'Allow user to delete complaint', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0010wa6ct9cr7n25', 'tickets:view_list', 'View List Tickets', 'Allow user to view list tickets', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0011wa6cwxgke4il', 'tickets:view_detail', 'View Detail Tickets', 'Allow user to view detail tickets', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0012wa6ccou51a83', 'tickets:edit', 'Edit Tickets', 'Allow user to edit tickets', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0013wa6cub8druoo', 'tickets:delete', 'Delete Tickets', 'Allow user to delete tickets', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0014wa6cl0bhhsb0', 'tickets:export_file', 'Export File Tickets', 'Allow user to export file tickets', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0015wa6c0xsdj55b', 'services:view_list', 'View List Services', 'Allow user to view list services', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0016wa6ciyg73moq', 'services:view_detail', 'View Detail Services', 'Allow user to view detail services', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0017wa6chn7uwpke', 'services:create', 'Create Services', 'Allow user to create services', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0018wa6creehph0i', 'services:edit', 'Edit Services', 'Allow user to edit services', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy0019wa6cae1fowdi', 'services:delete', 'Delete Services', 'Allow user to delete services', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001awa6cpqe1gmoi', 'news:view_list', 'View List News', 'Allow user to view list news', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001bwa6ck6pc3zqc', 'news:view_detail', 'View Detail News', 'Allow user to view detail news', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001cwa6ctkzqisfv', 'news:create', 'Create News', 'Allow user to create news', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001dwa6cr1osa812', 'news:edit', 'Edit News', 'Allow user to edit news', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001ewa6cvz512h4m', 'news:delete', 'Delete News', 'Allow user to delete news', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001fwa6cigkbtq5y', 'emergency:view_list', 'View List Emergency', 'Allow user to view list emergency', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001gwa6cjk1dp7xu', 'emergency:view_detail', 'View Detail Emergency', 'Allow user to view detail emergency', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001hwa6cacdsiwf1', 'emergency:create', 'Create Emergency', 'Allow user to create emergency', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001iwa6c98jqhtj0', 'emergency:edit', 'Edit Emergency', 'Allow user to edit emergency', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL),
('cmhbnt0iy001jwa6cxry2lyj3', 'emergency:delete', 'Delete Emergency', 'Allow user to delete emergency', '2025-10-29 07:13:42.634', '2025-10-29 07:13:42.634', NULL);

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

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`id`, `name`, `contact_number`, `alternate_contact_number`, `email`, `incident_detail`, `date_of_incident`, `complaint_status`, `complaint_type`, `complainant_id`, `createdAt`, `updatedAt`, `deleted_at`) VALUES
('cmhbo0f6f0001war0ogkwvn05', 'ella', '555232322', '223232221', 'ella@gmail.com', 'hala', '2025-10-28 20:20:00.000', 'PENDING', 'VIOLENCE_OR_DANGEROUS_ORGANIZATIONS', 'cmhbnt14v0020wa6c3ply47qw', '2025-10-29 07:19:28.215', '2025-10-29 07:19:28.215', NULL),
('cmhbojvxh0005war0xb00thq9', 'andro', '9561289642', '33222222', 'menandroeugenio1028@gmail.com', 'asdasdasdasdads', '2025-10-28 20:35:00.000', 'PENDING', 'SCAM_OR_FRAUD', 'cmhbnt14v0020wa6c3ply47qw', '2025-10-29 07:34:36.390', '2025-10-29 07:34:36.390', NULL),
('cmhbowed60001waq8q3wuched', 'sample nam', '55523232', '23213123123', 'menandroeugenio1028@gmail.com', 'asdasdasdasd', '2025-10-29 07:49:00.000', 'ACCEPTED', 'SCAM_OR_FRAUD', 'cmhbnt14v0020wa6c3ply47qw', '2025-10-29 07:44:20.154', '2025-10-29 07:50:08.811', NULL);

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
('cmhbnt0z1001kwa6cis6txgio', NULL, 'Menandroeugenio1028@gmail.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z2001lwa6cs9gventy', NULL, 'jhondeldelconacaranay@gmail.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z2001mwa6cpvpkaxln', '1002', 'Menandroeugenio1028+student@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWhibnQxNHYwMDIwd2E2YzNwbHk0N3F3IiwiZW1haWwiOiJNZW5hbmRyb2V1Z2VuaW8xMDI4K3N0dWRlbnRAZ21haWwuY29tIiwiaWF0IjoxNzYxNzI0MjExLCJleHAiOjE3NjE4MTA2MTF9.hyn2UcZbGmk0p_GfRwVvXgFqKQEG_dyhRSv3d7CzV6I', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWhibnQxNHYwMDIwd2E2YzNwbHk0N3F3IiwiZW1haWwiOiJNZW5hbmRyb2V1Z2VuaW8xMDI4K3N0dWRlbnRAZ21haWwuY29tIiwiaWF0IjoxNzYxNzI0MjExLCJleHAiOjE3NjIzMjkwMTF9.9YfSk50VrBil0vr1lCDuO_lhmFYOCOWlnocv2JSCwE8', '2025-10-29 07:13:43.214', '2025-10-29 07:50:11.387'),
('cmhbnt0z3001nwa6cfmb0f5pz', NULL, 'teacher1@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001owa6cqy956mjx', NULL, 'teacher@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001pwa6cux01ogm9', '1001', 'student1@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001qwa6ce115d813', NULL, 'teacher2@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001rwa6cedwkltm9', NULL, 'teacher4@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001swa6ccrgo002l', NULL, 'teacher5@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001twa6c0pg89ds0', NULL, 'teacher3@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0z3001uwa6cx9v8zj38', NULL, 'teacher6@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214'),
('cmhbnt0zr001vwa6c46yj79zr', NULL, 'nonteacher@example.com', '', '', '2025-10-29 07:13:43.214', '2025-10-29 07:13:43.214');

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
('cmhbnt1910028wa6c2innu6hp', 'Guidance Office', 'Handles cases involving bullying, discrimination, and harassment to ensure student welfare and mental well-being.', 'GUIDANCE', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL),
('cmhbnt1910029wa6c8uilovg1', 'Health Services Office', 'Provides immediate mental health support, counseling, and intervention for students showing signs of distress or self-harm.', 'HEALTH_SERVICES', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL),
('cmhbnt191002awa6cxshtm7cu', 'Security Office', 'Ensures campus safety by addressing threats, violence, and activities related to dangerous organizations.', 'SECURITY', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL),
('cmhbnt191002bwa6cw9xk7jad', 'Discipline Office', 'Oversees violations involving sexual misconduct and indecent behavior to uphold moral and disciplinary standards.', 'DISCIPLINE', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL),
('cmhbnt191002cwa6cc92814p0', 'Student Affairs Office', 'Investigates incidents involving the sale or promotion of prohibited goods such as drugs, alcohol, or contraband.', 'STUDENT_AFFAIRS', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL),
('cmhbnt191002dwa6czr66cr6n', 'Finance Office', 'Handles reports of financial scams, fraudulent transactions, and misuse of funds related to school activities.', 'FINANCE', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL),
('cmhbnt191002ewa6cuo58jel0', 'Administrative Office', 'Manages general complaints that do not fall under specific categories, ensuring proper redirection and resolution.', 'ADMINISTRATIVE', '2025-10-29 07:13:43.573', '2025-10-29 07:13:43.573', NULL);

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
('cmhbnt0h60000wa6cromfnv9m', 'admin', 'Admin', '2025-10-29 07:13:42.570', '2025-10-29 07:13:42.570', NULL),
('cmhbnt0h60001wa6cefvzzzwh', 'students', 'Students', '2025-10-29 07:13:42.570', '2025-10-29 07:13:42.570', NULL),
('cmhbnt0h60002wa6c4az4742a', 'teaching staff', 'Teaching Staff', '2025-10-29 07:13:42.570', '2025-10-29 07:13:42.570', NULL),
('cmhbnt0h60003wa6cox5wny8h', 'non-teaching staff', 'Non-teaching Staff', '2025-10-29 07:13:42.570', '2025-10-29 07:13:42.570', NULL);

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

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `title`, `description`, `status`, `complaint_id`, `assigned_office_id`, `createdAt`, `updatedAt`, `deleted_at`) VALUES
('cmhbo0f7z0003war0t1ggfeld', 'Complaint #cmhbo0f6f0001war0ogkwvn05 - Status: PENDING', 'hala', 'OPEN', 'cmhbo0f6f0001war0ogkwvn05', NULL, '2025-10-29 07:19:28.271', '2025-10-29 07:19:28.271', NULL),
('cmhbojvzr0007war0ozqr10m6', 'Complaint #cmhbojvxh0005war0xb00thq9 - Status: PENDING', 'asdasdasdasdads', 'OPEN', 'cmhbojvxh0005war0xb00thq9', NULL, '2025-10-29 07:34:36.472', '2025-10-29 07:34:36.472', NULL),
('cmhboweex0003waq8yg2qwxy9', 'Complaint #cmhbowed60001waq8q3wuched - Status: PENDING', 'asdasdasdasd', 'OPEN', 'cmhbowed60001waq8q3wuched', NULL, '2025-10-29 07:44:20.217', '2025-10-29 07:44:20.217', NULL);

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
('cmhbnt143001wwa6cp0h95nvy', 'jhondeldelconacaranay@gmail.com', 'Johndel', 'Delicona', 'Caranay', NULL, 'cmhbnt0h60000wa6cromfnv9m', 'cmhbnt0z2001lwa6cs9gventy', NULL, '2025-10-29 07:13:43.395', '2025-10-29 07:13:43.395'),
('cmhbnt14t001xwa6c9rfb8jub', 'teacher1@example.com', 'Lance', 'Rey', 'Domingo', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001nwa6cfmb0f5pz', NULL, '2025-10-29 07:13:43.421', '2025-10-29 07:13:43.421'),
('cmhbnt14u001ywa6czkbmflxw', 'teacher6@example.com', 'Nathan', 'Kyle', 'Fernandez', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001uwa6cx9v8zj38', NULL, '2025-10-29 07:13:43.422', '2025-10-29 07:13:43.422'),
('cmhbnt14v001zwa6cgwsx39sz', 'teacher2@example.com', 'Carl', 'John', 'Villanueva', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001qwa6ce115d813', NULL, '2025-10-29 07:13:43.423', '2025-10-29 07:13:43.423'),
('cmhbnt14v0020wa6c3ply47qw', 'Menandroeugenio1028+student@gmail.com', 'Diana', 'Rose', 'Reyes', '1002', 'cmhbnt0h60001wa6cefvzzzwh', 'cmhbnt0z2001mwa6cpvpkaxln', NULL, '2025-10-29 07:13:43.424', '2025-10-29 07:14:16.736'),
('cmhbnt14w0021wa6ci5ysdw3j', 'Menandroeugenio1028@gmail.com', 'Menandro', 'Santos', 'Eugenio', NULL, 'cmhbnt0h60000wa6cromfnv9m', 'cmhbnt0z1001kwa6cis6txgio', NULL, '2025-10-29 07:13:43.424', '2025-10-29 07:13:43.424'),
('cmhbnt14x0022wa6cr2p0ethv', 'student1@example.com', 'Lara', 'Mae', 'Cruz', '1001', 'cmhbnt0h60001wa6cefvzzzwh', 'cmhbnt0z3001pwa6cux01ogm9', NULL, '2025-10-29 07:13:43.425', '2025-10-29 07:13:43.425'),
('cmhbnt15z0023wa6cygp0k4b4', 'nonteacher@example.com', 'Ella', 'Grace', 'Mendoza', NULL, 'cmhbnt0h60003wa6cox5wny8h', 'cmhbnt0zr001vwa6c46yj79zr', NULL, '2025-10-29 07:13:43.463', '2025-10-29 07:13:43.463'),
('cmhbnt15z0024wa6crnpoogoo', 'teacher4@example.com', 'Jacob', 'Luis', 'Garcia', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001rwa6cedwkltm9', NULL, '2025-10-29 07:13:43.464', '2025-10-29 07:13:43.464'),
('cmhbnt1600025wa6ct5b7z94r', 'teacher5@example.com', 'Adrian', 'Paul', 'Ramos', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001swa6ccrgo002l', NULL, '2025-10-29 07:13:43.464', '2025-10-29 07:13:43.464'),
('cmhbnt1600026wa6cdtklsuoj', 'teacher3@example.com', 'Ethan', 'James', 'Delos Santos', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001twa6c0pg89ds0', NULL, '2025-10-29 07:13:43.465', '2025-10-29 07:13:43.465'),
('cmhbnt1720027wa6ctfz4r7jq', 'teacher@example.com', 'Mark', 'Anthony', 'Santos', NULL, 'cmhbnt0h60002wa6c4az4742a', 'cmhbnt0z3001owa6cqy956mjx', NULL, '2025-10-29 07:13:43.502', '2025-10-29 07:13:43.502');

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
('cmhbnt0ix0004wa6cbunnt3nf', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0ix0005wa6c5ru9kwg4', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0ix0006wa6cr0pec55f', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0ix0007wa6c0ytzye1g', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0ix0008wa6cps1b8h08', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0ix0009wa6cfzogrxeb', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0ix000awa6cvllz58k1', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000bwa6codkhkbta', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000cwa6cdxthljev', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000dwa6chbsgjew7', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000ewa6ctovqo62v', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000fwa6cr21lh3y3', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000gwa6cftfgwzhs', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000hwa6cfc969rqt', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000iwa6c2jnbdzgh', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000jwa6czheqa72j', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000kwa6couan4jmw', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000lwa6cwx8levc6', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000mwa6co75d9dxe', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000nwa6c8nkplros', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000owa6c3nv5warr', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000pwa6cvyfqgi6b', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000qwa6c9pja4xnj', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000rwa6cdjfdbjlq', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000swa6cy6fm1q4e', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000swa6cy6fm1q4e', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000swa6cy6fm1q4e', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy000swa6cy6fm1q4e', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy000twa6cfxkakh7q', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000twa6cfxkakh7q', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000twa6cfxkakh7q', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy000twa6cfxkakh7q', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy000uwa6chj1lxse4', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000uwa6chj1lxse4', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000uwa6chj1lxse4', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy000uwa6chj1lxse4', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy000vwa6czbl424c2', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000vwa6czbl424c2', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000wwa6c3dabt3km', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000wwa6c3dabt3km', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000xwa6cszxxpjmc', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000xwa6cszxxpjmc', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000ywa6c2onrlof0', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000ywa6c2onrlof0', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy000zwa6ckymcg0ml', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy000zwa6ckymcg0ml', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy0010wa6ct9cr7n25', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0010wa6ct9cr7n25', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0010wa6ct9cr7n25', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0011wa6cwxgke4il', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0011wa6cwxgke4il', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0011wa6cwxgke4il', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0012wa6ccou51a83', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0012wa6ccou51a83', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0012wa6ccou51a83', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0013wa6cub8druoo', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0013wa6cub8druoo', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0013wa6cub8druoo', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0014wa6cl0bhhsb0', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0014wa6cl0bhhsb0', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0014wa6cl0bhhsb0', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0015wa6c0xsdj55b', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0015wa6c0xsdj55b', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy0015wa6c0xsdj55b', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0015wa6c0xsdj55b', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0016wa6ciyg73moq', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0016wa6ciyg73moq', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy0016wa6ciyg73moq', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0016wa6ciyg73moq', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy0017wa6chn7uwpke', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0017wa6chn7uwpke', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0018wa6creehph0i', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0018wa6creehph0i', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy0019wa6cae1fowdi', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy0019wa6cae1fowdi', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001awa6cpqe1gmoi', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001awa6cpqe1gmoi', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy001awa6cpqe1gmoi', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001awa6cpqe1gmoi', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy001bwa6ck6pc3zqc', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001bwa6ck6pc3zqc', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy001bwa6ck6pc3zqc', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001bwa6ck6pc3zqc', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy001cwa6ctkzqisfv', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001cwa6ctkzqisfv', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001dwa6cr1osa812', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001dwa6cr1osa812', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001ewa6cvz512h4m', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001ewa6cvz512h4m', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001fwa6cigkbtq5y', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001fwa6cigkbtq5y', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy001fwa6cigkbtq5y', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001fwa6cigkbtq5y', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy001gwa6cjk1dp7xu', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001gwa6cjk1dp7xu', 'cmhbnt0h60001wa6cefvzzzwh'),
('cmhbnt0iy001gwa6cjk1dp7xu', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001gwa6cjk1dp7xu', 'cmhbnt0h60003wa6cox5wny8h'),
('cmhbnt0iy001hwa6cacdsiwf1', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001hwa6cacdsiwf1', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001iwa6c98jqhtj0', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001iwa6c98jqhtj0', 'cmhbnt0h60002wa6c4az4742a'),
('cmhbnt0iy001jwa6cxry2lyj3', 'cmhbnt0h60000wa6cromfnv9m'),
('cmhbnt0iy001jwa6cxry2lyj3', 'cmhbnt0h60002wa6c4az4742a');

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
