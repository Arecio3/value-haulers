import React, { useState } from "react";
import styled from 'styled-components'
import { BsGlobe } from "react-icons/bs";
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
      <BsGlobe onClick={handleClick} />
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
        transition: all 3s ease-in-out;
    }
    .lang-menu-closed {
        display: none;
    }
`