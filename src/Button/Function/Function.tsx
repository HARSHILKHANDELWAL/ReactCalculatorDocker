import * as React from 'react';
import ButtonView from '../ButtonView';
import { functionBttns } from '../../Calculator/CalculatorModel';
import "./Function.css"
export interface IFunctionProps {
  buttons: { type: string, value: string }[];
  onClick: (button:any) => void;
}

export default class Function extends React.Component<IFunctionProps,ButtonView> {
  public render() {
    const  buttons  = functionBttns;
    return (
   
           <div className='funSection'>
        {buttons.map((button, index) => (
        
        <ButtonView key={index} button={button}value={button.value} onClick={()=>this.props.onClick(button)} id={"funButton-"+button.value}/>
        // <ButtonView key={index} button={button}value={button.value} onClick={this.props.onClick} id={"funButton-"+button.value}/>

        ))}
      </div>
    
    );
  }
}
