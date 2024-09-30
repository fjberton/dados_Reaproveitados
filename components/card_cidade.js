import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 

const card_cidade = (nome, estado, uf)=>{
    return(
        <View style={card}>
            <Text style={styles.cidade}>{nome}</Text> 
           <> - </> 
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
     width:'100%',
     padding:10,
     flexDirection: 'row',
     justifyContent: 'space-between',
     backgroundColor: '#444',
    },
    cidade: {
        fontSize: 18,
        color: '#ff0b0b',
        fontWeight: '600' ,
    },
    uf: {
        fontSize: 18,
        color: '#0b12ff',
        fontWeight: '900' ,
    },
});