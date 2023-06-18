import React, { FC } from 'react';
import githubIcon from "../assets/icon/github.png"
import logo from "../assets/logo.png"
import arrowDown from "../assets/icon/arrow-down.png"
import arrowUp from "../assets/icon/arrow-up.png"
import { theme } from '../store/theme';

interface HeaderProps {
  settingsVision: boolean,
  setSettingsVision: (status: boolean) => void,
}

const Header: FC<HeaderProps> = ({
  settingsVision,
  setSettingsVision,
}) => {
  return (
    <header className={theme.whiteTheme ? 'header white-theme' : 'header'}>
      <div className="container">
        <div className="header__inner">
          <div className={'header__logo'}>
            <img className={'logo'} src={logo} alt="chess logo" />
            <div className="header__logo-text">
              <h2 className={'header__title'}>Chess</h2>
              <a className={'creator'} target="_blank" rel="noreferrer" href={'https://github.com/Vadym-Prydatok/react-ts-chess'}>
                <span className={'creator__text'}>by Vadym Prydatok</span>
                <img className={'creator__img'} src={githubIcon} alt="github" />
                <label id="switch" className="switch">
                  <input 
                    type="checkbox" 
                    id="slider"
                    checked={theme.whiteTheme}
                    onChange={() => theme.setWhiteTheme(!theme.whiteTheme)}
                  />
                    <span className="slider round"></span>
                </label>
              </a>
            </div>
          </div>
          {settingsVision
            ? <div onClick={() => setSettingsVision(!settingsVision)} className='settings-open-btn'>
              <span>Hide settings</span>
              <img src={arrowUp} alt="arrowUp" />
            </div>
            : <div onClick={() => setSettingsVision(!settingsVision)} className='settings-close-btn'>
              <span>Show settings</span>
              <img src={arrowDown} alt="arrowDown" />
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;