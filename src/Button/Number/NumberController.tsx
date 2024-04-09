import * as React from 'react';
import { numericalBttns } from '../../Calculator/CalculatorModel';
import ButtonView from '../ButtonView';
import  "./Number.css";


export interface INumberControllerProps {
    buttons: { type: string, value: string }[];
  onClick: (button:any) => void;

}

export default class NumberController extends React.Component<INumberControllerProps> {
  public render() {
    const  buttons  = numericalBttns;
    return (
        <div className='numSection'>
        {buttons.map((button, index) => (
        //   <NumberView key={index} value={button.value} />
        <ButtonView button={button}  id={"numButton-"+button.value} key={index} value={button.value} onClick={()=>this.props.onClick(button)}/>

        ))}
      </div>
    );
  }
}
