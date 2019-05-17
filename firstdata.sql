-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2019 at 06:34 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `firstdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `act_type`
--

CREATE TABLE IF NOT EXISTS `act_type` (
  `act_type_id` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `act_type_name` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `act_type_des` varchar(500) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `act_type`
--

INSERT INTO `act_type` (`act_type_id`, `act_type_name`, `act_type_des`) VALUES
('01', 'การบำเพ็ญประโยชน์ต่อชุมชนและสังคม', 'เกณฑ์การสำเร็จการศึกษาตามหลักสูตรโรงเรียนจุฬาภรณราชวิทยาลัย ปทุมธานี กำหนดว่านักเรียนต้องบำเพ็ญประโยชน์ต่อชุมชนและสังคมอย่างน้อย 15 ชั่วโมง ในช่วง เวลา 1 ปี'),
('02', 'การบำเพ็ญประโยชน์ต่อโรงเรียน', 'เกณฑ์การสำเร็จการศึกษาตามหลักสูตรโรงเรียนมหิดลวิทยานุสรณ์ กำหนดว่า นักเรียนต้องบำเพ็ญประโยชน์ต่อโรงเรียนอย่างน้อย 20 ชั่วโมง ในช่วงเวลา 1 ปี'),
('03', 'การอ่านหนังสือ', 'เกณฑ์การสำเร็จการศึกษาตามหลักสูตรโรงเรียนมหิดลวิทยานุสรณ์ กำหนดว่านักเรียนต้องอ่านหนังสือตามรายการที่โรงเรียนกำหนดให้อย่างน้อย 10 เรื่อง/ปีการศึกษา'),
('04', 'การเข้าค่ายวิชาการ', 'เกณฑ์การสำเร็จการศึกษาตามหลักสูตรโรงเรียนมหิดลวิทยานุสรณ์ กำหนดว่านักเรียนต้องเข้าร่วมกิจกรรมพัฒนาผู้เรียนที่หลากหลายตามความถนัดและความสนใจ กิจกรรมพัฒนาผู้เรียนอย่างหนึ่งซึ่งโรงเรียนกำหนด เป็นเกณฑ์ขั้นต่ำ คือ นักเรียนต้องเข้าค่ายวิชาการอย่างน้อย 1 ครั้ง ในช่วงเวลา 1 ปี โดยโรงเรียนจัดให้'),
('05', 'การเข้าค่ายปฏิบัติธรรม', ''),
('06', 'การศึกษาดูงานด้านคณิตศาสตร์ วิทยาศาสตร์และเทคโนโลยี', ''),
('07', 'การศึกษาดูงานด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและโบราณคดี', ''),
('08', 'การฟังบรรยายด้านวิทยาศาสตร์ และเทคโนโลยี', ''),
('09', 'การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์', ''),
('10', 'การฟังบรรยายด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและดนตรี', ''),
('11', 'การเข้าร่วมกิจกรรมชุมนุม', ''),
('12', 'การออกกำลังกายและการเล่นกีฬา', ''),
('13', 'การเข้าร่วมกิจกรรมพบพ่อครู/แม่ครู', '');

-- --------------------------------------------------------

--
-- Table structure for table `dormitory`
--

CREATE TABLE IF NOT EXISTS `dormitory` (
  `dorm_id` int(2) NOT NULL,
  `dorm_name` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `flag` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `dormitory`
--

INSERT INTO `dormitory` (`dorm_id`, `dorm_name`, `flag`) VALUES
(0, 'ไม่ระบุ', 0),
(1, 'หอนิลปัทม์', 0),
(2, 'หอโกเมน', 0),
(3, 'หอบัวชมพู', 0),
(4, 'หอบุษกร', 0),
(5, 'หอเหลือง', 0),
(6, 'หอน้ำตาล', 0);

-- --------------------------------------------------------

--
-- Table structure for table `std_activity`
--

CREATE TABLE IF NOT EXISTS `std_activity` (
`act_id` int(11) NOT NULL,
  `act_type` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `act_type_name` char(250) COLLATE utf8_unicode_ci NOT NULL,
  `std_ID` char(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `act_date` date NOT NULL,
  `act_head` varchar(500) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `act_print` varchar(500) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `act_hours` char(6) COLLATE utf8_unicode_ci NOT NULL,
  `act_places` char(250) COLLATE utf8_unicode_ci NOT NULL,
  `act_details` varchar(5000) COLLATE utf8_unicode_ci NOT NULL,
  `act_feels` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `act_time_starts` time NOT NULL,
  `act_time_ends` time NOT NULL,
  `std_firstname` char(100) CHARACTER SET utf8 COLLATE utf8_croatian_ci DEFAULT NULL,
  `std_lastname` char(100) CHARACTER SET utf8 COLLATE utf8_croatian_ci DEFAULT NULL,
  `std_classroom` char(3) CHARACTER SET utf8 COLLATE utf8_croatian_ci DEFAULT NULL,
  `std_number` int(2) DEFAULT NULL,
  `std_dormitory` char(50) CHARACTER SET utf8 COLLATE utf8_croatian_ci DEFAULT NULL,
  `act_advices` varchar(500) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'ไม่มีความคิดเห็น',
  `act_tch_id` char(13) COLLATE utf8_unicode_ci NOT NULL,
  `tch_firstname` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tch_lastname` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `act_advices_date` date NOT NULL,
  `act_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `act_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `flag` int(1) NOT NULL,
  `btn_press` char(5) COLLATE utf8_unicode_ci NOT NULL,
  `phone_id` char(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=69 ;

--
-- Dumping data for table `std_activity`
--

INSERT INTO `std_activity` (`act_id`, `act_type`, `act_type_name`, `std_ID`, `act_date`, `act_head`, `act_print`, `act_hours`, `act_places`, `act_details`, `act_feels`, `act_time_starts`, `act_time_ends`, `std_firstname`, `std_lastname`, `std_classroom`, `std_number`, `std_dormitory`, `act_advices`, `act_tch_id`, `tch_firstname`, `tch_lastname`, `act_advices_date`, `act_updated`, `act_created`, `flag`, `btn_press`, `phone_id`) VALUES
(21, '02', '', '04475', '2018-04-06', '', '', '2', 'โรงเรียน', 'ช่วยอาจารย์', 'ดีใจ', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', '', '1234567890123', 'Teerakarn', 'Pakorn Sanso', '2018-04-27', '2018-04-29 09:51:02', '2018-04-27 02:50:38', 3, '', NULL),
(22, '06', '', '04475', '2018-06-15', 'นวัตกรรม', '', '', 'ไบเทค', 'มีนวัตกรรมมากมาย', 'ดีมากๆ', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '1234567890123', 'Teerakarn', 'Pakorn Sanso', '2018-04-27', '2018-04-29 09:51:47', '2018-04-27 08:17:26', 3, '', NULL),
(23, '02', '', '04481', '2018-08-11', '', '', '1', 'โรงเรียน', 'เก็บขยะ', 'ดีใจมาก', '00:00:00', '00:00:00', 'อัชฌาบดินทร์', 'สินธุรงค์', '4/2', 10, 'นิลปัทม์', 'ผ่านแล้ว', '1234567890124', 'จุฑารัตน์', 'ใจงาม', '2018-05-02', '2018-05-02 01:59:53', '2018-04-28 02:37:55', 3, '', NULL),
(25, '01', '', '04475', '2018-06-10', '', '', '1', 'บ้าน', 'เมื่อวันที่ 27 เม.ย. ที่กระทรวงการท่องเที่ยวและกีฬา นายวีระศักดิ์ โควสุรัตน์ รัฐมนตรีว่าการกระทรวงการท่องเที่ยวและกีฬา เป็นประธานการประชุมติดตามความคืบหน้าการเตรียมความพร้อมการแข่งขันรถจักรยานยนต์ทางเรียบชิงแชมป์โลก สนามที่ 15 "โมโตจีพี 2018" ที่จังหวัดบุรีรัมย์\n\nนายตนัยศิริ ชาญวิทยารมณ์ กรรมการผู้อำนวยการ บริษัท บุรีรัมย์ ยูไนเต็ด อินเตอร์เนชั่นแนล เซอร์กิต จำกัด แจ้งที่ประชุมว่า ตามที่ ประเทศไทย ได้รับสิทธิ์เป็นเจ้าภาพจัดการแข่งขันรถจักรยานต์ชิงแชมป์โลก โมโตจีพี ซึ่งประเทศไทยเป็นสนามที่ 15 ของรายการ วันที่ 5-7 ต.ค. 2561\n\nในส่วนของการเตรียมความพร้อมของสนามช้าง อินเตอร์เนชั่นแนล เซอร์กิต และการจัดการแข่งขัน ได้มีการปรับสนามตามข้อกำหนดของสมาพันธ์จักรยานยนต์ นานาชาติ (เอฟไอเอ็ม) ไว้พร้อมหมดแล้ว โดยนักแข่งที่เข้าร่วม จะเดินทางถึงบุรีรัมย์ตั้งแต่ วันที่ 3 ต.ค. ขณะที่กิจกรรมในช่วงวันที่ 5-7 ต.ค. ทางสนามฯ ได้จัดกิจกรรมเสริมเพิ่มเติ่มบริเวณ HOT ZONE อาทิ คอนเสิร์ตบอดี้สแลม, การแข่งขันมวยไทยไฟท์, คอนเสิร์ต BNK48, บูธไทยแลนด์พาวิลเลี่ยน, Steet Food, ร้านค้าผลิตภัณฑ์โอทอป และกิจกรรมอื่นๆอีกมากมาย\n\nนายอนุสรณ์ แก้วกังวาล ผู้ว่าราชการจังหวัดบุรีรัมย์ รายงานความเตรียมความพร้อมของจังหวัด โดยขณะนี้ได้เตรียมที่พักสำรองไว้เพิ่มเติม ซึ่งขณะนี้โรงแรมในจังหวัดและจังหวัดใกล้เคียงไม่เพียงพอต่อการรองรับผู้ที่จะเดินทางมาร่วมชมการแข่งขัน ทางจังหวัดได้เตรียมพื้นที่บุรีรัมย์แคมป์ ซึ่งรองรับได้อีกราว 7,000 คน\n\nนอกจากนี้ยังเตรียมรถรับส่งตามจุดสำคัญๆทั้งในเมืองและนอกเมือง อีก 6 เส้นทางเพื่อรับส่งมายังจุดต้อนรับ เพื่อบริหารการจราจรในบริเวณสนามไม่ให้กระจุกตัว และเร่งปรับปรุงสถานีขนส่ง และสร้างชานชลาชั่วคราวใกล้สนามฯเพื่อรองรับประชาชนที่ใช้บริการทางบกเพื่อมาชมการแข่งขัน ส่วนสนามบินมีการขยายรันเวย์ และสร้างอาคารที่พักผู้โดยสารเพิ่มเติ่ม เพื่อรองรับในการใช้เป็นสนามบินศุลกากรและยกระดับเป็นสนามบินนานาชาติต่อไปในอนาคต\n\nทั้งนี้ สำหรับน้องๆวง BNK48 เคยขึ้นทำการแสดงในช่วงพักของฟุตบอลชิงถ้วยพระราชทาน หรือ คิงส์คัพ 2018 เมื่อเดือนมีนาคมที่ผ่านมา', 'ดี', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '1234567890124', 'จุฑารัตน์', 'ใจงาม', '2018-04-30', '2018-04-30 01:26:11', '2018-04-28 11:33:12', 3, '', NULL),
(29, '02', '', '04475', '2018-04-08', '', '', '1', 'โรงเรียน', 'ขขขขขขขขขขขขขขขขขขขข', 'ดดดดดดดดดดดดดดดดดดดดดดด', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '1234567890123', 'ธีระกาญจน์', 'ปกรณ์ สันโส', '2018-04-28', '2018-04-29 08:35:41', '2018-04-28 12:25:34', 3, '', NULL),
(42, '04', '', '04475', '0000-00-00', 'วิทยาศาสตร์พาเพลิน', '', '', 'โรงเรียน', 'ทดลองสนุกมาก', 'สนุกมากกกก', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2018-04-29 08:36:16', '2018-04-28 13:14:42', 0, '', NULL),
(43, '03', '', '04754', '2018-00-00', 'พี่นนคนหล่อ', 'เปตองแลนด์', '1', 'เปตอง จำกัด', 'วิธีติ่งพี่นนที่ถูกต้อง', 'สนุกมาก', '00:00:00', '00:00:00', 'พิทวัส', 'อร่ามรัศมีกุล', '4/6', 7, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '1234567890124', 'จุฑารัตน์', 'ใจงาม', '2018-05-01', '2018-05-01 07:45:42', '2018-04-30 17:13:34', 3, '', NULL),
(44, '06', '', '04754', '2018-07-08', 'นวัตกรรม', '', '', 'ไบเทค', 'นวัตกรรมใหม่ๆมากมาย', 'สนุกมาก', '00:00:00', '00:00:00', 'พิทวัส', 'อร่ามรัศมีกุล', '4/6', 7, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2018-05-01 07:47:36', '2018-05-01 07:47:36', 0, '', NULL),
(45, '01', '', '04754', '2018-05-04', '', '', '1', 'บ้านนอก', 'ช่วยเหลือคนยากจน', 'ดีใจที่ได้ทำ', '00:00:00', '00:00:00', 'พิทวัส', 'อร่ามรัศมีกุล', '4/6', 7, 'นิลปัทม์', 'ดีๆ', '1234567890124', 'จุฑารัตน์', 'ใจงาม', '2018-05-02', '2018-05-02 01:49:45', '2018-05-01 08:07:19', 3, '', NULL),
(46, '02', '', '04475', '2018-05-06', '', '', '1', 'โรงเรียน', 'ทำความสะอาด', 'ดี', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ดีมากๆ', '1234567890123', 'ธีระกาญจน์', 'ปกรณ์ สันโส', '2018-05-02', '2018-05-02 01:05:50', '2018-05-02 01:03:19', 3, '', NULL),
(47, '01', '', '04475', '2018-05-07', '', '', '1', 'กกกกกกกกกกกกกกกกก', 'กกกกกกกกกกกกกกก', 'กกกกกกกกกกกกกก', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ทดสอบระบบ test test', '1234567890123', 'ธีระกาญจน์', 'ปกรณ์ สันโส', '2018-05-02', '2018-05-02 01:37:47', '2018-05-02 01:36:13', 3, '', NULL),
(48, '12', '', '04475', '2018-05-14', '', '', '1.20', '', 'แบตมินตัน', '', '16:00:00', '17:20:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '1234567890123', 'ธีระกาญจน์', 'ปกรณ์ สันโส', '2018-05-09', '2018-05-09 11:49:14', '2018-05-02 04:22:08', 3, '', NULL),
(51, '02', 'การบำเพ็ญประโยชน์ต่อโรงเรียน', '04475', '2018-03-06', '', '', '1', 'โรงเรียน', 'บลาๆๆๆ', 'ดีๆ', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '4/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '1234567890123', 'ธีระกาญจน์', 'ปกรณ์ สันโส', '0000-00-00', '2018-05-09 07:02:11', '2018-05-09 07:01:56', 1, '', 'ZY322D3C38'),
(52, '01', 'การบำเพ็ญประโยชน์ต่อชุมชนและสังคม', '', '2019-04-24', '', '', '1', 'aaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'ccccccccccccccccccccccccccccccccccccccc', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-04-24 10:37:45', '2019-04-24 10:37:45', 0, '', ''),
(53, '01', 'การบำเพ็ญประโยชน์ต่อชุมชนและสังคม', '', '2019-04-24', '', '', '1', 'pppppppppp', 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', 'qqqqqqqqqqq', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-04-24 13:29:38', '2019-04-24 13:29:38', 0, '', ''),
(54, '01', 'การบำเพ็ญประโยชน์ต่อชุมชนและสังคม', '', '2019-04-24', '', '', '2', 'eeeeeeeeeeeeeeeeeeeeeee', 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-04-24 13:30:40', '2019-04-24 13:30:40', 0, '', ''),
(55, '01', 'การบำเพ็ญประโยชน์ต่อชุมชนและสังคม', '', '2019-05-13', '', '', '1', 'ssssssssss', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeee', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:05:50', '2019-05-13 03:05:50', 0, '', ''),
(56, '02', 'การบำเพ็ญประโยชน์ต่อโรงเรียน', '', '2019-05-13', '', '', '1', 'uuuuuuuuuuuuuuuuu', 'ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:06:15', '2019-05-13 03:06:15', 0, '', ''),
(57, '03', 'การอ่านหนังสือ', '', '0000-00-00', '', '', '', '', 'ทำไงกูจะสวยแบบคนอื่นได้', 'กูสวย', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:14:11', '2019-05-13 03:14:11', 0, '', ''),
(58, '04', 'การเข้าค่ายวิชาการ', '', '0000-00-00', 'ฟฟฟฟฟฟฟ', '', '', 'กกกกกกกกกกกกกกกกกกกกกก', 'มมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม', 'ออออออออออออออออออออออออออออออ', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:46:53', '2019-05-13 03:46:53', 0, '', ''),
(59, '05', 'การเข้าค่ายปฏิบัติธรรม', '04475', '0000-00-00', 'aaaaaaaaaaaaaaaaa', '', '', 'mmmmmmmmmmmmmmmmmmmmm', 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:51:05', '2019-05-13 03:51:05', 0, '', ''),
(60, '06', 'การศึกษาดูงานด้านคณิตศาสตร์ วิทยาศาสตร์และเทคโนโลยี', '04475', '0000-00-00', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', '', '', 'dddddddddddddddddddd', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:51:38', '2019-05-13 03:51:38', 0, '', ''),
(61, '07', 'การศึกษาดูงานด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและโบราณคดี', '04475', '2019-05-13', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', '', '', 'aaaaaaaaaaaaaaaaaaaa', 'ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc', 'ooooooooooooooooooooooooooooooooooooooooooo', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:52:42', '2019-05-13 03:52:42', 0, '', ''),
(62, '08', 'การฟังบรรยายด้านวิทยาศาสตร์ และเทคโนโลยี', '04475', '2019-05-13', 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', '', '', '', 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:53:23', '2019-05-13 03:53:23', 0, '', ''),
(63, '09', 'การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์', '04475', '2019-05-13', 'eeeeeeeeeeeeeeeeeeeee', '', '', '', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'gggggggggggggggggggggggggggggggg', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:55:06', '2019-05-13 03:55:06', 0, '', ''),
(64, '10', 'การฟังบรรยายด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและดนตรี', '04475', '2019-05-13', 'tttttttttttttttttttttttttttttttttttt', '', '', '', 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:55:36', '2019-05-13 03:55:36', 0, '', ''),
(65, '', '', '', '0000-00-00', '', '', '', '', '', '', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 03:57:36', '2019-05-13 03:57:36', 0, '', ''),
(66, '', '', '', '0000-00-00', '', '', '', '', '', '', '00:00:00', '00:00:00', '', '', '', 0, '', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 04:10:14', '2019-05-13 04:10:14', 0, '', ''),
(67, '11', 'การเข้าร่วมกิจกรรมชุมนุม', '04475', '2019-05-13', 'aaaaaaaaaaaaaaaaaaaaaaaa', '', '1', 'ชุมนุมวิชาการ', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'cccccccccccccccccccccccccccccccccccccccccccccc', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 07:05:50', '2019-05-13 07:05:50', 0, '', ''),
(68, '13', 'การเข้าร่วมกิจกรรมพบพ่อครู/แม่ครู', '04475', '2019-05-13', 'aaaaaaaaaaaaaaaaaa', '', '', '', '', '', '00:00:00', '00:00:00', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'นิลปัทม์', 'ไม่มีความคิดเห็น', '', NULL, NULL, '0000-00-00', '2019-05-13 07:06:26', '2019-05-13 07:06:26', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `std_register`
--

CREATE TABLE IF NOT EXISTS `std_register` (
`user_id` int(4) NOT NULL,
  `std_ID` char(5) COLLATE utf8_unicode_ci NOT NULL,
  `std_idcard` char(13) COLLATE utf8_unicode_ci NOT NULL,
  `std_username` char(100) CHARACTER SET utf8 COLLATE utf8_croatian_ci NOT NULL,
  `std_password` char(100) COLLATE utf8_unicode_ci NOT NULL,
  `std_firstname` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `std_lastname` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `std_classroom` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `std_number` int(2) NOT NULL,
  `std_email` char(200) COLLATE utf8_unicode_ci NOT NULL,
  `std_dormitory` char(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `std_point` int(3) NOT NULL,
  `img_path` char(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `flag` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `std_register`
--

INSERT INTO `std_register` (`user_id`, `std_ID`, `std_idcard`, `std_username`, `std_password`, `std_firstname`, `std_lastname`, `std_classroom`, `std_number`, `std_email`, `std_dormitory`, `std_point`, `img_path`, `flag`) VALUES
(2, '04481', '1129901706032', 'a.s', '2', 'อัชฌาบดินทร์', 'สินธุรงค์', '4/2', 10, 'audcha@gmail.com', 'นิลปัทม์', 0, './assets/imgs/04481.jpg', 0),
(3, '04754', '1129901706033', 'p.a', '3', 'พิทวัส', 'อร่ามรัศมีกุล', '4/6', 7, 'phitthawat@gmail.com', 'นิลปัทม์', 0, './assets/imgs/04754.jpg', 0),
(4, '04475', '1129901706031', 'c.s', '1', 'ชยางกูร', 'สอนเสนา', '5/2', 4, 'tsunavasabi@gmail.com', 'นิลปัทม์', 0, '0447526231355_2053692411519483_4737504229089801474_n.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tch_register`
--

CREATE TABLE IF NOT EXISTS `tch_register` (
`user_id` int(11) NOT NULL,
  `tch_username` char(20) COLLATE utf8_unicode_ci NOT NULL,
  `tch_password` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tch_firstname` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_lastname` char(50) COLLATE utf8_unicode_ci NOT NULL,
  `tch_idcard` char(13) COLLATE utf8_unicode_ci NOT NULL,
  `tch_img` char(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `flag` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tch_register`
--

INSERT INTO `tch_register` (`user_id`, `tch_username`, `tch_password`, `tch_firstname`, `tch_lastname`, `tch_idcard`, `tch_img`, `flag`) VALUES
(1, 'teerakarn.p', '123456', 'ธีระกาญจน์', 'ปกรณ์ สันโส', '1234567890123', './assets/imgs/teerakarn.jpg', 2),
(2, 'chutharat.c', '123456', 'จุฑารัตน์', 'ใจงาม', '1234567890124', './assets/imgs/chutharat.jpg', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `act_type`
--
ALTER TABLE `act_type`
 ADD PRIMARY KEY (`act_type_id`), ADD KEY `act_type_id` (`act_type_id`), ADD KEY `act_type_id_2` (`act_type_id`), ADD KEY `act_type_id_3` (`act_type_id`);

--
-- Indexes for table `dormitory`
--
ALTER TABLE `dormitory`
 ADD KEY `dorm_id` (`dorm_id`);

--
-- Indexes for table `std_activity`
--
ALTER TABLE `std_activity`
 ADD PRIMARY KEY (`act_id`);

--
-- Indexes for table `std_register`
--
ALTER TABLE `std_register`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `std_idcard_3` (`std_idcard`), ADD KEY `std_idcard` (`std_idcard`), ADD KEY `std_idcard_2` (`std_idcard`), ADD FULLTEXT KEY `std_firstname` (`std_firstname`,`std_lastname`,`std_classroom`);

--
-- Indexes for table `tch_register`
--
ALTER TABLE `tch_register`
 ADD PRIMARY KEY (`user_id`), ADD KEY `tch_idcard` (`tch_idcard`), ADD KEY `tch_idcard_2` (`tch_idcard`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `std_activity`
--
ALTER TABLE `std_activity`
MODIFY `act_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT for table `std_register`
--
ALTER TABLE `std_register`
MODIFY `user_id` int(4) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tch_register`
--
ALTER TABLE `tch_register`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
