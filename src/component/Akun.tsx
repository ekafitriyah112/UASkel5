import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Akun = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#000000" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Ayo Cari Jaketnya......."
                    placeholderTextColor="#000000"
                />
            </View>

            <View style={styles.productContainer}>
                <Image source={require('../img/2.png')} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Nama Barang</Text>
                    <Text style={styles.productDescription}>Deskripsi Barang</Text>
                </View>
            </View>
            <View style={styles.productContainer}>
                <Image source={require('../img/2.png')} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Nama Barang</Text>
                    <Text style={styles.productDescription}>Deskripsi Barang</Text>
                </View>
            </View>
            <View style={styles.productContainer}>
                <Image source={require('../img/2.png')} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Nama Barang</Text>
                    <Text style={styles.productDescription}>Deskripsi Barang</Text>
                </View>
            </View>
            <View style={styles.productContainer}>
                <Image source={require('../img/2.png')} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Nama Barang</Text>
                    <Text style={styles.productDescription}>Deskripsi Barang</Text>
                </View>
            </View>
            <View style={styles.productContainer}>
                <Image source={require('../img/2.png')} style={styles.productImage} resizeMode="cover" />
                <View style={styles.productInfo}>
                    <Text style={styles.productName}>Nama Barang</Text>
                    <Text style={styles.productDescription}>Deskripsi Barang</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F6F9',
        padding: 16,
    },
    searchContainer: {
        width: '100%',
        height: 49,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4CB9E7',
        borderRadius: 5,
        padding: 5,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 12,
        color: '#000000',
    },
    productContainer: {
        backgroundColor: '#4CB9E7',
        width: '100%',
        height: 175,
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    productImage: {
        width: 100,
        height: '100%',
        borderRadius: 5,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default Akun;