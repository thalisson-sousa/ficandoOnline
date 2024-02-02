import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { salvarRepositoriosUsuario, deletarRepositoriosUsuario } from '../../servicos/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.created_at);

    async function salvar() {
        const resultado = await salvarRepositoriosUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )

        if(resultado === "Sucesso"){
            Alert.alert("Repositorio Atualizado!")
            navigation.goBack()
        } else {
            Alert.alert("Erro ao atualizar repositorio!")
        }
    }

    async function deletar() {
        const resultado = await deletarRepositoriosUsuario(route.params.item.id)

        if(resultado === "Sucesso"){
            Alert.alert("Repositorio Deletado!")
            navigation.goBack()
        } else {
            Alert.alert("Erro ao deletar repositorio!")
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
                onPress={deletar}
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
