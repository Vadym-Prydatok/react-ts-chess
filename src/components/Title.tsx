import React, {FC} from 'react';
import {Colors} from "../models/Colors";
import ExclamationMark from "./UI/ExclamationMark";
import {Player} from "../models/Player";

interface TitleProps{
  currentPlayer: Player | null
  winner: Player | null
}

const Title: FC<TitleProps> = ({currentPlayer, winner}) => {

  const titlePlayer = currentPlayer?.color === Colors.WHITE
    ? <ExclamationMark tagName={'h1'} text={'White to move'}/>
    : <ExclamationMark tagName={'h1'} text={'Black to move'}/>

  const titleWinner = winner?.color === Colors.WHITE
    ? <ExclamationMark tagName={'h1'} text={'White won'}/>
    : <ExclamationMark tagName={'h1'} text={'Black won'}/>

  const title = winner
    ? titleWinner
    : titlePlayer

  return title
};

export default Title;