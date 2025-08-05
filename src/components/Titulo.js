import React, {Fragment} from "react";
import { View, Text } from "react-native";
import Estilo from "./estilo";

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.fontGrande}>{props.principal}</Text>
            <Text style={Estilo.fontMedia}>{props.secundario}</Text>
        </Fragment>
    )
}
