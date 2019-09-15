-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 14, 2019 at 10:13 AM
-- Server version: 10.2.23-MariaDB-log
-- PHP Version: 7.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zp11489_sama`
--

-- --------------------------------------------------------

--
-- Table structure for table `std_register`
--

CREATE TABLE `std_register` (
  `user_id` int(4) NOT NULL,
  `std_ID` char(5) COLLATE utf8_unicode_ci NOT NULL,
  `std_username` char(100) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `std_password` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `std_firstname` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `std_lastname` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `std_classroom` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `std_number` int(2) NOT NULL,
  `std_dormitory` char(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `std_point` int(3) DEFAULT NULL,
  `img_path` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `flag` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `std_register`
--

INSERT INTO `std_register` (`user_id`, `std_ID`, `std_username`, `std_password`, `std_firstname`, `std_lastname`, `std_classroom`, `std_number`, `std_dormitory`, `std_point`, `img_path`, `flag`) VALUES
(1, '04147', '624101', '37908014', 'นินนาท', 'แววอาราม', '4/1', 1, 'ม่วง', NULL, NULL, 0),
(2, '04166', '624102', '95643128', 'พัสนัย', 'สูตรอุดม', '4/1', 2, 'ม่วง', NULL, NULL, 0),
(3, '04175', '624103', '19273895', 'ศุภณัฏฐ์', 'วชิรานุภาพ', '4/1', 3, 'เขียว', NULL, NULL, 0),
(4, '04189', '624104', '80741095', 'ปกรณ์', 'ทุมดี', '4/1', 4, 'ม่วง', NULL, NULL, 0),
(5, '04218', '624105', '46072293', 'เอกฤกษ์', 'เผ่าชู', '4/1', 5, 'ม่วง', NULL, NULL, 0),
(6, '04881', '624106', '97612608', 'กฤษณชัย', 'สินพิศาลกิจ', '4/1', 6, 'เขียว', NULL, NULL, 0),
(7, '04882', '624107', '69377851', 'ชยพัทธ์', 'บรรเทิงสุข', '4/1', 7, 'ม่วง', NULL, NULL, 0),
(8, '04883', '624108', '10539687', 'พุฒิพงศ์', 'จันทร์ขำ', '4/1', 8, 'ม่วง', NULL, NULL, 0),
(9, '04884', '624109', '17098438', 'รชต', 'อนันต์', '4/1', 9, 'เขียว', NULL, NULL, 0),
(10, '04885', '624110', '29457701', 'ศิวานนท์', 'ไตรรัตนะ', '4/1', 10, 'ม่วง', NULL, NULL, 0),
(11, '04886', '624111', '2379542', 'สัณหกร', 'เต็มกาญจน์', '4/1', 11, 'เขียว', NULL, NULL, 0),
(12, '04887', '624112', '1322758', 'เสฏฐนันท์', 'จันทรา', '4/1', 12, 'เขียว', NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `std_register`
--
ALTER TABLE `std_register`
  ADD PRIMARY KEY (`user_id`);
ALTER TABLE `std_register` ADD FULLTEXT KEY `std_firstname` (`std_firstname`,`std_lastname`,`std_classroom`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `std_register`
--
ALTER TABLE `std_register`
  MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
