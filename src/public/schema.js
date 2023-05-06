export const sql = `
# EMS MySQL Manager 2.6.0.1
# ---------------------------------------
# Host     : localhost
# Port     : 3306
# Database : openpay


SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS openpay;

CREATE DATABASE openpay;

USE openpay;

#
# Structure for the 'afxfilter' table : 
#

DROP TABLE IF EXISTS afxfilter;

CREATE TABLE afxfilter (
  kodfilter bigint(20) NOT NULL default '0',
  descfilter varchar(50) NOT NULL default '',
  tablename varchar(50) NOT NULL default '',
  UNIQUE KEY afxfilter_x (kodfilter)
) TYPE=InnoDB;

#
# Structure for the 'afxfilterd' table : 
#

DROP TABLE IF EXISTS afxfilterd;

CREATE TABLE afxfilterd (
  kodfilterd bigint(20) NOT NULL default '0',
  kodfilter bigint(20) NOT NULL default '0',
  pedio varchar(50) NOT NULL default '',
  telestis varchar(20) NOT NULL default '',
  timi varchar(50) NOT NULL default '',
  joint varchar(10) default NULL,
  PRIMARY KEY  (kodfilterd),
  KEY kodfilter (kodfilter),
  CONSTRAINT 0_15 FOREIGN KEY (kodfilter) REFERENCES afxfilter (kodfilter) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'afxinfo' table : 
#

DROP TABLE IF EXISTS afxinfo;

CREATE TABLE afxinfo (
  dbver varchar(10) default NULL
) TYPE=InnoDB;

#
# Structure for the 'afxkeygen' table : 
#

DROP TABLE IF EXISTS afxkeygen;

CREATE TABLE afxkeygen (
  tblname varchar(50) NOT NULL default '',
  lastid bigint(20) default '0',
  PRIMARY KEY  (tblname),
  KEY lastid (lastid)
) TYPE=InnoDB;

#
# Structure for the 'afxoperators' table : 
#

DROP TABLE IF EXISTS afxoperators;

CREATE TABLE afxoperators (
  operatorname varchar(50) NOT NULL default '',
  operator varchar(50) NOT NULL default '',
  orderno tinyint(4) default NULL,
  PRIMARY KEY  (operatorname),
  UNIQUE KEY afxoperators_x (operatorname)
) TYPE=InnoDB;

#
# Structure for the 'afxptoseis' table : 
#

DROP TABLE IF EXISTS afxptoseis;

CREATE TABLE afxptoseis (
  onom varchar(50) NOT NULL default '',
  gen varchar(50) default NULL,
  ait varchar(50) default NULL,
  PRIMARY KEY  (onom)
) TYPE=InnoDB;

#
# Structure for the 'afxtable' table : 
#

DROP TABLE IF EXISTS afxtable;

CREATE TABLE afxtable (
  tablename varchar(50) NOT NULL default '',
  tabledesc varchar(50) NOT NULL default '',
  PRIMARY KEY  (tablename),
  UNIQUE KEY afxtable_x (tablename)
) TYPE=InnoDB;

#
# Structure for the 'afxtablefields' table : 
#

DROP TABLE IF EXISTS afxtablefields;

CREATE TABLE afxtablefields (
  tablename varchar(50) NOT NULL default '',
  fieldname varchar(70) NOT NULL default '',
  fielddesc varchar(70) NOT NULL default '',
  sorting tinyint(1) default NULL,
  fieldtype varchar(15) NOT NULL default '',
  orderno bigint(20) default NULL,
  PRIMARY KEY  (tablename,fieldname),
  KEY tablename (tablename),
  CONSTRAINT 0_22 FOREIGN KEY (tablename) REFERENCES afxtable (tablename) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'afxtranslate' table : 
#

DROP TABLE IF EXISTS afxtranslate;

CREATE TABLE afxtranslate (
  id bigint(20) NOT NULL default '0',
  el varchar(255) default NULL,
  uk varchar(255) default NULL,
  PRIMARY KEY  (id)
) TYPE=InnoDB;

#
# Structure for the 'misth_zpxrisi' table : 
#

DROP TABLE IF EXISTS misth_zpxrisi;

CREATE TABLE misth_zpxrisi (
  kodxrisi varchar(4) NOT NULL default '',
  descxrisi varchar(50) NOT NULL default '',
  startdate date NOT NULL default '0000-00-00',
  enddate date NOT NULL default '0000-00-00',
  maskposo varchar(50) default '###,##0.00',
  maskposot varchar(50) default '###,##0.00',
  maskdate varchar(50) default 'dd/mm/yyyy',
  eteria varchar(100) default '',
  eteriadesc varchar(100) default '',
  address varchar(100) default '',
  tk varchar(15) default '',
  city varchar(50) default '',
  phone varchar(100) default '',
  fax varchar(100) default '',
  maskdate_e varchar(50) default 'dd/mm/yyyy',
  maskposo_e varchar(50) default '###,##0.00',
  maskposot_e varchar(50) default '###,##0.00',
  afm varchar(20) default '',
  doy varchar(100) default '',
  round int(11) default '2',
  prn_logo1 varchar(100) default NULL,
  prn_logo2 varchar(100) default NULL,
  prn_logo3 varchar(100) default NULL,
  prn_logo4 varchar(100) default NULL,
  prn_logo5 varchar(100) default NULL,
  prn_sign1_prosf varchar(100) default NULL,
  prn_sign1_name varchar(100) default NULL,
  prn_sign2_prosf varchar(100) default NULL,
  prn_sign2_name varchar(100) default NULL,
  prn_sign3_prosf varchar(100) default NULL,
  prn_sign3_name varchar(100) default NULL,
  prn_notes1 longtext,
  prn_notes2 longtext,
  prn_notes3 longtext,
  PRIMARY KEY  (kodxrisi)
) TYPE=InnoDB;

#
# Structure for the 'misth_zpperiod' table : 
#

DROP TABLE IF EXISTS misth_zpperiod;

CREATE TABLE misth_zpperiod (
  kodperiod char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descperiod varchar(50) NOT NULL default '',
  orderno int(11) default NULL,
  PRIMARY KEY  (kodperiod,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_26 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpkat' table : 
#

DROP TABLE IF EXISTS misth_zpkat;

CREATE TABLE misth_zpkat (
  kodkat char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  desckat varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodkat,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_28 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_final' table : 
#

DROP TABLE IF EXISTS misth_final;

CREATE TABLE misth_final (
  kodfinal bigint(20) NOT NULL default '0',
  kodxrisi varchar(4) NOT NULL default '',
  descfinal varchar(100) NOT NULL default '',
  title longtext,
  datefinal date NOT NULL default '0000-00-00',
  kodkat char(2) default NULL,
  kodperiod char(2) default NULL,
  aa bigint(20) default NULL,
  PRIMARY KEY  (kodfinal,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY datefinal (datefinal),
  KEY kodkat (kodkat,kodxrisi),
  KEY kodperiod (kodperiod,kodxrisi),
  CONSTRAINT 0_30 FOREIGN KEY (kodperiod, kodxrisi) REFERENCES misth_zpperiod (kodperiod, kodxrisi) ON UPDATE CASCADE,
  CONSTRAINT 0_31 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_32 FOREIGN KEY (kodkat, kodxrisi) REFERENCES misth_zpkat (kodkat, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zptmima' table : 
#

DROP TABLE IF EXISTS misth_zptmima;

CREATE TABLE misth_zptmima (
  kodtmima char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  desctmima varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodtmima,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_34 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpidikot' table : 
#

DROP TABLE IF EXISTS misth_zpidikot;

CREATE TABLE misth_zpidikot (
  kodidikot char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descidikot varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodidikot,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_36 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpthesi' table : 
#

DROP TABLE IF EXISTS misth_zpthesi;

CREATE TABLE misth_zpthesi (
  kodthesi char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descthesi varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodthesi,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_38 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zptamio' table : 
#

DROP TABLE IF EXISTS misth_zptamio;

CREATE TABLE misth_zptamio (
  kodtamio char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  desctamio varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodtamio,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY kodxrisi_2 (kodxrisi,kodtamio),
  CONSTRAINT 0_40 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpoikog' table : 
#

DROP TABLE IF EXISTS misth_zpoikog;

CREATE TABLE misth_zpoikog (
  kodoikog char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descoikog varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodoikog,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_42 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_ypal' table : 
#

DROP TABLE IF EXISTS misth_ypal;

CREATE TABLE misth_ypal (
  kodypal bigint(20) NOT NULL default '0',
  kodxrisi varchar(4) NOT NULL default '',
  surname varchar(70) NOT NULL default '',
  name varchar(30) default '',
  fathername varchar(30) default '',
  adt varchar(10) default '',
  mitroo varchar(20) default '',
  afm varchar(10) default '',
  doy varchar(50) default '',
  kodtitlos char(2) default '',
  birthdate date default '0000-00-00',
  homephone varchar(50) default '',
  mobilphone varchar(50) default '',
  sex char(1) default '',
  spouse varchar(100) default '',
  childs int(11) default '0',
  prostmeli int(11) default '0',
  city varchar(50) default '',
  area varchar(50) default '',
  address varchar(100) default '',
  tk varchar(10) default '',
  email varchar(100) default '',
  kodtmima char(2) default '',
  kodidikot char(2) default '',
  jobtitle varchar(100) default '',
  hireddate date default '0000-00-00',
  rehireddate date default '0000-00-00',
  termdate date default '0000-00-00',
  termreason varchar(100) default '',
  jobphone varchar(50) default '',
  intphone varchar(20) default '',
  klimakio int(11) default '0',
  bathmos char(1) default '',
  klados varchar(10) default '',
  bank varchar(100) default '',
  bankno varchar(50) default '',
  exeldate date default '0000-00-00',
  kodthesi char(2) default '',
  kodoikog char(2) default '',
  kodtamio char(2) default NULL,
  mothername varchar(30) default NULL,
  newexeldate date default NULL,
  PRIMARY KEY  (kodypal,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY kodtitlos (kodtitlos,kodxrisi),
  KEY kodtmima (kodtmima,kodxrisi),
  KEY kodidikot (kodidikot,kodxrisi),
  KEY kodthesi (kodthesi,kodxrisi),
  KEY kodoikog (kodoikog,kodxrisi),
  KEY surname (surname,kodxrisi),
  KEY adt (adt,kodxrisi),
  KEY mitroo (mitroo,kodxrisi),
  KEY afm (afm,kodxrisi),
  KEY sex (sex,kodxrisi),
  KEY kodtamio (kodtamio,kodxrisi),
  CONSTRAINT 0_44 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_45 FOREIGN KEY (kodtmima, kodxrisi) REFERENCES misth_zptmima (kodtmima, kodxrisi) ON UPDATE CASCADE,
  CONSTRAINT 0_46 FOREIGN KEY (kodidikot, kodxrisi) REFERENCES misth_zpidikot (kodidikot, kodxrisi) ON UPDATE CASCADE,
  CONSTRAINT 0_47 FOREIGN KEY (kodthesi, kodxrisi) REFERENCES misth_zpthesi (kodthesi, kodxrisi) ON UPDATE CASCADE,
  CONSTRAINT 0_48 FOREIGN KEY (kodtamio, kodxrisi) REFERENCES misth_zptamio (kodtamio, kodxrisi) ON UPDATE CASCADE,
  CONSTRAINT 0_49 FOREIGN KEY (kodoikog, kodxrisi) REFERENCES misth_zpoikog (kodoikog, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_final_ypal' table : 
#

DROP TABLE IF EXISTS misth_final_ypal;

CREATE TABLE misth_final_ypal (
  kodfinal bigint(20) NOT NULL default '0',
  kodypal bigint(20) NOT NULL default '0',
  kodxrisi varchar(4) NOT NULL default '',
  plirdate date default NULL,
  PRIMARY KEY  (kodfinal,kodypal,kodxrisi),
  KEY kodfinal (kodfinal,kodxrisi),
  KEY kodypal (kodypal,kodxrisi),
  CONSTRAINT 0_51 FOREIGN KEY (kodfinal, kodxrisi) REFERENCES misth_final (kodfinal, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_52 FOREIGN KEY (kodypal, kodxrisi) REFERENCES misth_ypal (kodypal, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpepidom' table : 
#

DROP TABLE IF EXISTS misth_zpepidom;

CREATE TABLE misth_zpepidom (
  kodepidom varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descepidom varchar(50) NOT NULL default '',
  hasforo int(11) default '0',
  expr longtext,
  isasf int(11) default '0',
  autoforos int(11) default '0',
  hasasf int(11) default '0',
  PRIMARY KEY  (kodepidom,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY hasasf (hasasf,kodxrisi),
  KEY hasforo (hasforo,kodxrisi),
  KEY isasf (isasf,kodxrisi),
  KEY autoforos (autoforos,kodxrisi),
  CONSTRAINT 0_54 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_final_ypal_epidom' table : 
#

DROP TABLE IF EXISTS misth_final_ypal_epidom;

CREATE TABLE misth_final_ypal_epidom (
  kodfinal bigint(20) NOT NULL default '0',
  kodypal bigint(20) NOT NULL default '0',
  kodepidom varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  poso double(15,3) default NULL,
  aa int(11) default NULL,
  notes longtext,
  PRIMARY KEY  (kodfinal,kodypal,kodepidom,kodxrisi),
  KEY kodfinal (kodfinal,kodypal,kodxrisi),
  KEY kodepidom (kodepidom,kodxrisi),
  CONSTRAINT 0_56 FOREIGN KEY (kodfinal, kodypal, kodxrisi) REFERENCES misth_final_ypal (kodfinal, kodypal, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_57 FOREIGN KEY (kodepidom, kodxrisi) REFERENCES misth_zpepidom (kodepidom, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpkrat' table : 
#

DROP TABLE IF EXISTS misth_zpkrat;

CREATE TABLE misth_zpkrat (
  kodkrat varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  desckrat varchar(50) NOT NULL default '',
  isforos int(11) default '0',
  isasf int(11) default '0',
  isautoforos int(11) default '0',
  PRIMARY KEY  (kodkrat,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY isforos (isforos,kodxrisi),
  KEY isasf (isasf,kodxrisi),
  KEY isautoforos (isautoforos,kodxrisi),
  CONSTRAINT 0_59 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_kratapod' table : 
#

DROP TABLE IF EXISTS misth_kratapod;

CREATE TABLE misth_kratapod (
  kodkratapod bigint(20) NOT NULL auto_increment,
  kodxrisi varchar(4) NOT NULL default '',
  desckratapod varchar(100) NOT NULL default '',
  apoddate date NOT NULL default '0000-00-00',
  PRIMARY KEY  (kodkratapod),
  KEY kodxrisi (kodxrisi),
  KEY apoddate (apoddate,kodxrisi),
  CONSTRAINT 0_61 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_final_ypal_krat' table : 
#

DROP TABLE IF EXISTS misth_final_ypal_krat;

CREATE TABLE misth_final_ypal_krat (
  kodfinal bigint(20) NOT NULL default '0',
  kodypal bigint(20) NOT NULL default '0',
  kodkrat varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  poso double(15,3) default NULL,
  aa int(11) default NULL,
  notes longtext,
  kodkratapod bigint(20) default NULL,
  PRIMARY KEY  (kodfinal,kodypal,kodkrat,kodxrisi),
  KEY kodfinal (kodfinal,kodypal,kodxrisi),
  KEY kodkrat (kodkrat,kodxrisi),
  KEY kodkratapod (kodkratapod),
  CONSTRAINT 0_63 FOREIGN KEY (kodfinal, kodypal, kodxrisi) REFERENCES misth_final_ypal (kodfinal, kodypal, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_64 FOREIGN KEY (kodkrat, kodxrisi) REFERENCES misth_zpkrat (kodkrat, kodxrisi) ON UPDATE CASCADE,
  CONSTRAINT 0_65 FOREIGN KEY (kodkratapod) REFERENCES misth_kratapod (kodkratapod) ON DELETE SET NULL ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_fylo' table : 
#

DROP TABLE IF EXISTS misth_fylo;

CREATE TABLE misth_fylo (
  kodfylo varchar(4) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descfylo varchar(50) NOT NULL default '',
  PRIMARY KEY  (kodfylo,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_67 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_fylo_epidom' table : 
#

DROP TABLE IF EXISTS misth_fylo_epidom;

CREATE TABLE misth_fylo_epidom (
  kodfylo varchar(4) NOT NULL default '',
  kodepidom varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  expr longtext,
  aa int(11) default NULL,
  notes longtext,
  PRIMARY KEY  (kodfylo,kodepidom,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY kodfylo (kodfylo,kodxrisi),
  KEY kodepidom (kodepidom,kodxrisi),
  KEY aa (aa),
  CONSTRAINT 0_69 FOREIGN KEY (kodfylo, kodxrisi) REFERENCES misth_fylo (kodfylo, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_70 FOREIGN KEY (kodepidom, kodxrisi) REFERENCES misth_zpepidom (kodepidom, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_fylo_krat' table : 
#

DROP TABLE IF EXISTS misth_fylo_krat;

CREATE TABLE misth_fylo_krat (
  kodfylo varchar(4) NOT NULL default '',
  kodkrat varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  expr longtext,
  aa int(11) default NULL,
  notes longtext,
  PRIMARY KEY  (kodfylo,kodkrat,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY kodfylo (kodfylo,kodxrisi),
  KEY kodkrat (kodkrat,kodxrisi),
  KEY aa (aa),
  CONSTRAINT 0_72 FOREIGN KEY (kodfylo, kodxrisi) REFERENCES misth_fylo (kodfylo, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_73 FOREIGN KEY (kodkrat, kodxrisi) REFERENCES misth_zpkrat (kodkrat, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_fylo_ypal' table : 
#

DROP TABLE IF EXISTS misth_fylo_ypal;

CREATE TABLE misth_fylo_ypal (
  kodfylo varchar(4) NOT NULL default '',
  kodypal bigint(20) NOT NULL default '0',
  kodxrisi varchar(4) NOT NULL default '',
  PRIMARY KEY  (kodfylo,kodypal,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY kodfylo (kodfylo,kodxrisi),
  KEY kodypal (kodypal,kodxrisi),
  CONSTRAINT 0_75 FOREIGN KEY (kodfylo, kodxrisi) REFERENCES misth_fylo (kodfylo, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_76 FOREIGN KEY (kodypal, kodxrisi) REFERENCES misth_ypal (kodypal, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_report' table : 
#

DROP TABLE IF EXISTS misth_report;

CREATE TABLE misth_report (
  kodreport char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descreport varchar(100) NOT NULL default '',
  subtitle longtext,
  print_margin_top int(11) default NULL,
  print_margin_bottom int(11) default NULL,
  print_margin_left int(11) default NULL,
  print_margin_right int(11) default NULL,
  print_orientation int(11) default NULL,
  print_paper_size int(11) default NULL,
  print_scale int(11) default NULL,
  prn_notes1 longtext,
  prn_notes2 longtext,
  PRIMARY KEY  (kodreport,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_78 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_report_cols' table : 
#

DROP TABLE IF EXISTS misth_report_cols;

CREATE TABLE misth_report_cols (
  kodcol int(11) NOT NULL default '0',
  kodreport char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  expr longtext,
  header_text varchar(50) default NULL,
  width int(11) default NULL,
  aa int(11) default NULL,
  PRIMARY KEY  (kodcol,kodreport,kodxrisi),
  KEY kodreport (kodreport,kodxrisi),
  CONSTRAINT 0_80 FOREIGN KEY (kodreport, kodxrisi) REFERENCES misth_report (kodreport, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_report_ypal' table : 
#

DROP TABLE IF EXISTS misth_report_ypal;

CREATE TABLE misth_report_ypal (
  kodreport char(2) NOT NULL default '',
  kodypal bigint(20) NOT NULL default '0',
  kodxrisi varchar(4) NOT NULL default '',
  PRIMARY KEY  (kodreport,kodypal,kodxrisi),
  KEY kodreport (kodreport,kodxrisi),
  KEY kodypal (kodypal,kodxrisi),
  CONSTRAINT 0_82 FOREIGN KEY (kodreport, kodxrisi) REFERENCES misth_report (kodreport, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_83 FOREIGN KEY (kodypal, kodxrisi) REFERENCES misth_ypal (kodypal, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpyvar' table : 
#

DROP TABLE IF EXISTS misth_zpyvar;

CREATE TABLE misth_zpyvar (
  kodyvar varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descyvar varchar(50) NOT NULL default '',
  expr longtext,
  PRIMARY KEY  (kodyvar,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_85 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_ypal_yvar' table : 
#

DROP TABLE IF EXISTS misth_ypal_yvar;

CREATE TABLE misth_ypal_yvar (
  kodypal bigint(20) NOT NULL default '0',
  kodyvar varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  expr longtext,
  aa int(11) default '0',
  PRIMARY KEY  (kodypal,kodyvar,kodxrisi),
  KEY kodxrisi (kodxrisi),
  KEY kodypal (kodypal,kodxrisi),
  KEY kodyvar (kodyvar,kodxrisi),
  KEY aa (aa),
  CONSTRAINT 0_87 FOREIGN KEY (kodypal, kodxrisi) REFERENCES misth_ypal (kodypal, kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT 0_88 FOREIGN KEY (kodyvar, kodxrisi) REFERENCES misth_zpyvar (kodyvar, kodxrisi) ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zpstath' table : 
#

DROP TABLE IF EXISTS misth_zpstath;

CREATE TABLE misth_zpstath (
  kodstath varchar(20) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  descstath varchar(50) NOT NULL default '',
  poso double(15,3) default NULL,
  PRIMARY KEY  (kodstath,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_90 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;

#
# Structure for the 'misth_zptitlos' table : 
#

DROP TABLE IF EXISTS misth_zptitlos;

CREATE TABLE misth_zptitlos (
  kodtitlos char(2) NOT NULL default '',
  kodxrisi varchar(4) NOT NULL default '',
  desctitlos varchar(10) NOT NULL default '',
  PRIMARY KEY  (kodtitlos,kodxrisi),
  KEY kodxrisi (kodxrisi),
  CONSTRAINT 0_92 FOREIGN KEY (kodxrisi) REFERENCES misth_zpxrisi (kodxrisi) ON DELETE CASCADE ON UPDATE CASCADE
) TYPE=InnoDB;`