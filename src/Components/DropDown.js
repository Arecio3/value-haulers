import React, { useState } from "react";
import styled from 'styled-components'
import { BsGlobe } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { useTranslation } from 'react-i18next';
import i18n  from "../i18n";
import { MDBIcon } from 'mdb-react-ui-kit';

function DropDown() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const { t } = useTranslation()

  return (
    <DropDownMenu>
     {open ? <BiExit onClick={handleClick} /> : <BsGlobe onClick={handleClick}/>}
      <div className={open ? 'lang-menu' : 'lang-menu-closed'}>
        <div className="selected-lang" onClick={() => i18n.changeLanguage('en')}><MDBIcon flag='us'/> {t('English')}</div>
        <div className="selected-lang"onClick={() => i18n.changeLanguage('es')}><MDBIcon flag='cu'/> {t('Spanish')}</div>
      </div>
    </DropDownMenu>
  );
}

export default DropDown;


const DropDownMenu = styled.menu`
    cursor: pointer;
    .lang-menu {
        display: contents;
      }
      .lang-menu-closed {
        display: none;
      }
      
      .selected-lang {
        padding: 3px;
        margin: 3px;
        font-size: 12px;
      }
      @media screen and (max-width: 480px) {
        position: absolute;
        top: 6px;
        right: 85px;
        font-size: 28px;
      }

`