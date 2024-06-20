import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product from '../domain/Product';
import ProductItem from '../../../components/ProductItem';
import useApi from '../../../core/hooks/useApi';
import HttpMethod from '../../../core/hooks/useApi/httpMethod.enum';
import HttpStatus from '../../../core/hooks/useApi/httpStatus.enum';
import { ActivityIndicator } from 'react-native-paper';
import CountryItemResponse from '../domain/CountryApiResponse';
import Button from '../../../components/Button';
import Endpoints from '../data/endpoints';

const ProductList = () => {
  
  const api = useApi<CountryItemResponse[]>(
    Endpoints.all,
    HttpMethod.GET
  )

  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    const response = await api.callApi();

    if (response.status == HttpStatus.SUCCESS) {
      const list: Product[] = [];
 
      response.data?.forEach(i => {
        const rndInt = Math.random() * 3

        list.push({
          id: rndInt,
          name: i.name.common,
          photo: i.flags.png
        }); 
      });

      setProducts(list);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (api.loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Buscando dados</Text>
        <ActivityIndicator style={styles.paddingContainer} size="large" />
      </View>
    );
  }

  if (api.error != null) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.paddingContainer}>Ops! Ocorreu um problema ao buscar dados.</Text>
        <Button title='Tentar novamente' onPress={() => fetchData()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Product }) => <ProductItem item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    backgroundColor: '#e3e1e1'
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  },
  loadingContainer: { 
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
   },
   paddingContainer: { 
    padding: 14
   }
});

export default ProductList;
