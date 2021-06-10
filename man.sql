-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2021 at 12:43 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `man`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'Ahmed', 'm06ahmed');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `kind` varchar(255) NOT NULL,
  `messa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `notif_teacher`
--

CREATE TABLE `notif_teacher` (
  `id` int(255) NOT NULL,
  `subjects` varchar(255) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `messagee` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `registeration`
--

CREATE TABLE `registeration` (
  `id` int(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registeration`
--

INSERT INTO `registeration` (`id`, `fname`, `lname`, `birthdate`, `telephone`, `email`, `message`) VALUES
(1, 'asd', 'asfsac', '2002-08-24', '21321', 'asyd12@asdasd', 'asdasc'),
(2, 'asfc', 'awdq', '2000-06-09', '132332', 'as@ewr', 'asfvc');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pass` varchar(1000) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `subjects` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `startingtime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `username`, `pass`, `fname`, `lname`, `email`, `telephone`, `national_id`, `subjects`, `birthdate`, `startingtime`) VALUES
(1, 'ahmed', 'as', 'ahmed', 'saeed', 'asyd12855@gmail.com', '+44158673', '23435465432', 'ara , eng , jap', '2021-06-06', '2021-06-30'),
(2, 'rewan', 'wdefw', 'rewan', 'saeed', 'asyd12855@gmail.com', '+44158673', '12323113', 'ara , eng , fra', '2000-06-09', '2021-06-09');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(255) NOT NULL,
  `valuesubject` varchar(255) NOT NULL,
  `subjects` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `valuesubject`, `subjects`) VALUES
(1, 'ara', 'arabic'),
(2, 'eng', 'english'),
(3, 'jap', 'japanese'),
(4, 'fra', 'france');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pass` varchar(1000) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `subjects` varchar(255) NOT NULL,
  `startingtime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `username`, `pass`, `fname`, `lname`, `email`, `telephone`, `national_id`, `subjects`, `startingtime`) VALUES
(1, 'teacher1', 'm06ahmed', 'Ahmed', 'Saeed', 'asyd12855@gmail.com', '+201144158673', '123432342134', 'ara , eng , jap', '2021-06-05');

-- --------------------------------------------------------

--
-- Table structure for table `upload_pdf`
--

CREATE TABLE `upload_pdf` (
  `id` int(255) NOT NULL,
  `pdf_name` varchar(255) NOT NULL,
  `national_id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `subjects` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload_pdf`
--

INSERT INTO `upload_pdf` (`id`, `pdf_name`, `national_id`, `subjects`) VALUES
(1, 'Lecture 1 - Electrostatics.pdf', '123432342134', 'jap');

-- --------------------------------------------------------

--
-- Table structure for table `upload_videos_mp4`
--

CREATE TABLE `upload_videos_mp4` (
  `id` int(255) NOT NULL,
  `video_name` varchar(255) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `subjects` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload_videos_mp4`
--

INSERT INTO `upload_videos_mp4` (`id`, `video_name`, `national_id`, `subjects`) VALUES
(1, 'lect-1_yNgH9dOx.mp4', '123432342134', 'eng');

-- --------------------------------------------------------

--
-- Table structure for table `upload_videos_url`
--

CREATE TABLE `upload_videos_url` (
  `id` int(255) NOT NULL,
  `video_url` varchar(255) NOT NULL,
  `national_id` varchar(255) NOT NULL,
  `subjects` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upload_videos_url`
--

INSERT INTO `upload_videos_url` (`id`, `video_url`, `national_id`, `subjects`) VALUES
(1, 'https://www.youtube.com/watch?v=eewc_fjV8HU', '123432342134', 'ara');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notif_teacher`
--
ALTER TABLE `notif_teacher`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registeration`
--
ALTER TABLE `registeration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload_pdf`
--
ALTER TABLE `upload_pdf`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload_videos_mp4`
--
ALTER TABLE `upload_videos_mp4`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upload_videos_url`
--
ALTER TABLE `upload_videos_url`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notif_teacher`
--
ALTER TABLE `notif_teacher`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `registeration`
--
ALTER TABLE `registeration`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `upload_pdf`
--
ALTER TABLE `upload_pdf`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `upload_videos_mp4`
--
ALTER TABLE `upload_videos_mp4`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `upload_videos_url`
--
ALTER TABLE `upload_videos_url`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
