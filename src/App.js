import React from 'react';
import { View, StatusBar, Platform, StyleSheet} from 'react-native';

import Botao from './components/Botao';
//import Titulo from './components/Titulo';
//import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompoPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';



export default () => (
    <View style={style.App}>

        <Botao />
        {/* <Titulo principal="Cadastro" 
            secundario="Tela de Cadastro"/>
         <Aleatorio min={5} max={100}/>
        <MinMax min={3} max={20}/>
        <MinMax min={3} max={20}/>
        <CompoPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />  */}
    </View>
);

const style = StyleSheet.create({
    App: {
        flex: 1, 
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})