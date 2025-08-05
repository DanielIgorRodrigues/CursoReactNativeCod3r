import React from "react";
import { Text } from "react-native";

import Estilo from "./estilo";

export default function Comp() {
    return <Text style={Estilo.fontGrande}>Comp #Oficial</Text>
}

export function Comp1() {
    return <Text style={Estilo.fontMedia}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Estilo.fontPequena}> Comp #02</Text>
}