import * as React from 'react';
import { operationalBttns } from '../../Calculator/CalculatorModel';
import ButtonView from '../ButtonView';
import "./Operation.css"
export interface IOperationControllerProps {
    buttons: { type: string, value: string ,Symbol:string}[];

    onClick: (event:any) => void;
}

export default class OperationController extends React.Component<IOperationControllerProps> {
    public render() {
        const  buttons  = operationalBttns
        ;
        return (
            <div className='operaSection'>
            {buttons.map((button, index) => (
            //   <OperationView key={index} value={button.Symbol} />
          <ButtonView  button={button} id={"operaButton-"+button.value} key={index} value={button.Symbol}onClick={()=>this.props.onClick(button)}/>

            ))}
          </div>
        );
      }
}
