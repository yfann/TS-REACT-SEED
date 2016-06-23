import * as React from 'react'
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class MateriaTest extends React.Component<any,{}>{
    render(){
        return (
            <MuiThemeProvider>
                <Slider/>
            </MuiThemeProvider>
        );
    }
}