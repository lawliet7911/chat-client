/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50554
Source Host           : localhost:3306
Source Database       : chatroom

Target Server Type    : MYSQL
Target Server Version : 50554
File Encoding         : 65001

Date: 2017-08-24 23:58:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS `tb_user`;
CREATE TABLE `tb_user` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `username` varchar(255) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `nickname` varchar(25) DEFAULT NULL,
  `sex` int(1) NOT NULL DEFAULT '0' COMMENT '0女 1男',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_user
-- ----------------------------
INSERT INTO `tb_user` VALUES ('377a0efd88e111e7b92b00ff2a03e460', 'lawliet', '1', '', '0');
