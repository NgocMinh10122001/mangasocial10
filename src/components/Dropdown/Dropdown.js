import React, { useState, useEffect, useRef } from "react";
import styles from "./Dropdown.module.scss";
import { CiSearch } from "react-icons/ci";
import platform from "platform";
import axios from "axios";
import "../../assets/scss/_dropdown.scss";
import { useDispatch, useSelector } from "react-redux";
// import { IoLogoAndroid } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import JP from "country-flag-icons/react/3x2/JP";
import US from "country-flag-icons/react/3x2/US";
import VN from "country-flag-icons/react/3x2/VN";
import AC from "country-flag-icons/react/3x2/AC";
import IC from "country-flag-icons/react/3x2/IC";
import EU from "country-flag-icons/react/3x2/EU";
import XK from "country-flag-icons/react/3x2/XK";
import RU from "country-flag-icons/react/3x2/RU";
import FR from "country-flag-icons/react/3x2/FR";
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiSettingsFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={'styles.dropdown '+ ' hidden max-[1800px]:block'} ref={dropdownRef}>
      <button className={styles.dropdown__toggle} onClick={toggleDropdown}>
        <FiAlignJustify/>
      </button>
      {isOpen && (
        <div className={styles.dropdown__menu}>
          <div className={styles.dropdown__item}>
            Item 1
          </div>
          <div className={styles.dropdown__item}>
            Item 2
          </div>
          <div className={styles.dropdown__item}>
            Item 3
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
