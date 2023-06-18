import React, {FC, useState} from 'react';
import ButtonSquare from "./UI/ButtonSquare";
import InputSquare from "./UI/InputSquare";
import ButtonToggle from "./UI/ButtonToggle";
import ExclamationMark from "./UI/ExclamationMark";

interface SettingsProps {
  setSettings: (time: number, hints: boolean) => void
  hintsVision: boolean
}

const Settings: FC<SettingsProps> = ({setSettings, hintsVision}) => {
  const [time, setTime] = useState('10')
  const [hints, setHints] = useState(hintsVision)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    let newValue = e.target.value
    if(!Number.isNaN(+newValue) && +newValue < 1000){
      setTime(newValue)
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>){
    if(+time < 1){
      setTime('10')
    }
  }

  function handleSave(){
    setSettings(+time, hints)
  }

  return (
    <div className={'settings'}>
      <div className="container">
        <div className="settings__inner">
          <div className="settings__times">
            <h4>Time limit: </h4>
            <InputSquare
              type='text'
              onBlur={handleBlur}
              onChange={handleChange}
              value={time}
            />
            <h4>min</h4>
          </div>
          <div className="settings__tips-vision">
            <h4>Show possible moves:</h4>
            <ButtonToggle
              status={hints}
              handleFirst={() => setHints(true)}
              handleSecond={() => setHints(false)}
            />
          </div>
          <div className="save-settings">
            <ButtonSquare
              onClick={handleSave}
              children='Save settings'
            />
          </div>
          <div className="warning">
            <ExclamationMark tagName='h6' text='Changing settings restarts the game'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;