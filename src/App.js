import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet} from 'react-native';

import ParImpar from './components/ParImpar';
//import Diferenciar from './components/Diferenciar';
//import ContadorV2 from './components/contador/ContadorV2';
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador';
//import Botao from './components/Botao';
//import Titulo from './components/Titulo';
//import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompoPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';



export default () => (
    <SafeAreaView style={style.App}>

        <ParImpar num={3}/>
        {/*<Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={5}/>
        <Contador />
        <Botao />
        <Titulo principal="Cadastro" 
            secundario="Tela de Cadastro"/>
         <Aleatorio min={5} max={100}/>
        <MinMax min={3} max={20}/>
        <MinMax min={3} max={20}/>
        <CompoPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />  */}
    </SafeAreaView>
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