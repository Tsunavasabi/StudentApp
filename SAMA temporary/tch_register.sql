-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2019 at 07:06 PM
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
-- Table structure for table `tch_register`
--

CREATE TABLE `tch_register` (
  `tch_username` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `tch_password` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `tch_firstname` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_lastname` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_email` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_phone` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tch_img` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `flag` int(11) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tch_register`
--

INSERT INTO `tch_register` (`user_id`, `tch_username`, `tch_password`, `tch_firstname`, `tch_lastname`, `tch_email`, `tch_phone`, `tch_img`, `flag`) VALUES
(1, 'wattana', 'watachiwa2525', 'วัฒนะ', 'รัมมะเอ็ด', 'wattanapccp@gmail.com', '0864068851', NULL, 2),
(2, 'freedomboy', '15022528', 'เจษฎา', 'สังข์ประเสริฐ', 'j.sungprasert@gmail.com', '0802605530', NULL, 2),
(3, 'Karnrapeenatchar', '0894223228', 'กานต์รพีณัชชาช์', 'ชัยปัญญา', 'Karnrapeenatchar2@hotmail.com', '0894223228', NULL, 2),
(4, 'Pannita', 'Psu5320', 'พัณณิตา', 'หนุนอนันต์', 'pcc2534@gmail.com', '0869641674', NULL, 2),
(5, 'sukanya', 'maplemaster', 'สุกัญญา', 'กล่อมเกลี้ยง', 'sukanya_maple@hotmail.com', '0899644285', NULL, 2),
(6, 'WannapornSuwiset', 'Praewohho19199', 'วรรณพร', 'สุวิเศษ', 'suwisetwannaporn@gmail.com', '0922742781', NULL, 2),
(7, 'chitpong', 'pai100435', 'ชิตพงษ์', 'เหนือเกาะหวาย', 'chitpong-pai@hotmail.com', '0896054019', NULL, 2),
(8, 'Warinat', 'Kem27092532', 'วารินาถ', 'โขพิมาย', 'kwarinat@gmail.com', '0634498951', NULL, 2),
(9, 'Srisunan', 'Sri6760', 'ศรีสุนันท์', 'ประดิษฐ์', 'srisunan2513@hotmail.com', '0817860951', NULL, 2),
(10, 'petcharee', 'petcharee7881', 'เพชรชรี', 'รักษาศรี', 'petcharee22@hotmail.com', '0818035891', NULL, 2),
(11, 'Waree', 'waree339', 'วารีย์', 'บุญลือ', 'wa.boonlue@gmail.com', '0818104911', NULL, 2),
(12, 'krupalin', 'krupalin123', 'ปาลิน', 'เห่งพุ่ม', 'krupalin.ch@gmail.com', '0922750401', NULL, 2),
(13, 'Khanitha', 'botan', 'ขนิษฐา', 'สิมมา', 'khanittha_simma@outlook.com', '0621245257', NULL, 2),
(14, 'Chaweewan', 'kruvee6518', 'ฉวีวรรณ', 'อรุณถาวรณ์', 'ajvee_math@hotmail.com', '0875145940', NULL, 2),
(15, 'suphananta', 'tong8565', 'ศุภนันทา', 'บัวรัตนกาญจน์', 'teacher_tong@hotmail.com', '0817309306', NULL, 2),
(16, 'Tussanee', '998877', 'ทัศนีย์', 'จันทิวาสน์', 'tussy4291@gmail.com', '0851694291', NULL, 2),
(17, 'Warangkhana.T', 'Maywarang16', 'วรางคณา', 'ธุภักดี', 'mayzaa7916@gmail.com', '0902498795', NULL, 2),
(18, 'jongrak', 'golf123', 'จงรักษ์', 'เนียมสวรรค์', 'jongrak.niamsawan@gmail.com', '0894618119', NULL, 2),
(19, 'Ticha', 'temo252', 'ทิชากร', 'สัตย์จริง', 'timsa2526@hotmail.com', '0860795386', NULL, 2),
(20, 'Sunan', 'Nnaann1379', 'สุนันท์', 'แสดขุนทด', 'su_nan_jung@hotmail.com', '0863699637', NULL, 2),
(21, 'Noppawun', 'Dang2504', 'นพวรรณ', 'จันตะคุ', 'krudang0443@gmail.com', '0890587772', NULL, 2),
(22, 'Pornpan.Nam', 'Nam1891', 'พรพรรณ', 'โฉมวงษ์', 'buu_np@hotmail.com', '0644191593', NULL, 2),
(23, 'Aumaimpccp', 'Qazwsxedc1234', 'กัญญาภัค', 'ชมภูคำ', 'aumaimpccp@gmail.com', '0946159164', NULL, 2),
(24, 'Nichakarn', 'nicha2555', 'ณิชต์ชกาญจน์', 'อุทุมสกุลรัตน์', 'nichakarn.tong@gmail.com', '0993515663', NULL, 2),
(25, 'Sunitda', 'pang8214', 'สุนิตดา', 'กล่อมแสง', 'pang.sunitda@gmail.com', '0819188214', NULL, 2),
(26, 'Taweeporn', 'Pla.2025', 'ทวีพร', 'ผดุงสงฆ์', 'pla.taweeporn@gmail.com', '0868283420', NULL, 2),
(27, 'NittayaJuy', 'NittayaJuy', 'นิตยา', 'จุ้ยเตย', 'nittayajuytoei@gmail.com', '0871084366', NULL, 2),
(28, 'Natita', 'Natita30', 'นทิตา', 'สุทะปัญญา', 'fannapa@gmail.com', '0923609175', NULL, 2),
(29, 'Ratchanee', 'Singhanam2525', 'รัชนี', 'สิงหะนาม', 'aj_berry@hotmail.com', '0892064703', NULL, 2),
(30, 'Jeeraporn', 'Jeeraporn99', 'จีรพร', 'ทองเวียง', 'jeeraporn@g.dlit.ac.th', '0819297209', NULL, 2),
(31, 'narongrit', '0848282526', 'ณรงค์ฤทธิ์', 'แมนสืบชาติ', 'narongritmsc@hotmail.com', '0848282526', NULL, 2),
(32, 'Sirichai', 'Siri2524', 'ศิริชัย', 'สงวนสิทธิอนันต์', 'sirinho.24@gmail.com', '0865562082', NULL, 2),
(33, 'Onanong', 'Onanong8', 'อรอนงค์', 'เอี่ยมมิ', 'onanonga2506@gmail.com', '0878328620', NULL, 2),
(34, 'JariyaWan', 'Jariya16', 'จริยา', 'วรรณทอง', 'jariya16062535@gmail.com', '0924789540', NULL, 2),
(35, 'KruAreerat', 'Doramon101', 'อารีรัตน์', 'แสงงาม', 'areeratsan430@gmail.com', '0914184959', NULL, 2),
(36, 'Uaiporn', 'nunid', 'อวยพร', 'ปรีชานุกูล', 'nunid2506@gmail.com', '0899815461', NULL, 2),
(37, 'nantiya', 'nantiya16', 'นันธิญา', 'อ้วนศรีเมือง', 'bum.nantiya@gmail.com', '0804025580', NULL, 2),
(38, 'Wanchana', 'Wanchana', 'วันชนะ', 'เกิดบัว', 'na_72010@hotmail.com', '0907989734', NULL, 2),
(39, 'THEERAPHAT', 'Thkongkulp', 'ธีรภัทร', 'คงกัลป์', 'theeraphatpccp@gmail.com', '0896978353', NULL, 2),
(40, 'Suphattakul.C', 'supcha0702', 'สุภัฏธกุล', 'ชนะภัย', 'suphatakul@gmail.com', '0964838067', NULL, 2),
(41, 'Chutharat', 'rubyruby', 'จุฑารัตน์', 'ใจงาม', 'cchutharat@hotmail.com', '0818293179', NULL, 2),
(42, 'Walaiphorn', 'Attasiri', 'วไลภรณ์', 'อรรถศิริ', 'Dang3000@hotmail.com', '0881079776', NULL, 2),
(43, 'WIPAPORN', 'WiWipapon55', 'วิภาพร', 'ฉัตรทอง', 'wipaporn.tumm@gmail.com', '0888284646', NULL, 2),
(44, 'pantita', 'nat123456', 'ปัณฑิตา', 'กรรณิการ์', 'nat_pantita@hotmail.com', '0875684592', NULL, 2),
(45, 'Kanjana', 'Kuasit', 'กาญจนา', 'กั้วสิทธิ์', 'kanjana.253939@gmail.com', '0989910392', NULL, 2),
(46, 'Apinya.M', '140789nowandforever', 'อภิญญา', 'หมื่นเพชร', 'fireofdream1989@gmail.com', '0941359729', NULL, 2),
(47, 'Supaluk', 'Preow2804', 'ศุภลักษณ์', 'ห้วยหงษ์ทอง', 'supaluk248@gmail.com', '0852647518', NULL, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tch_register`
--
ALTER TABLE `tch_register`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tch_register`
--
ALTER TABLE `tch_register`
  MODIFY `user_id` int(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
