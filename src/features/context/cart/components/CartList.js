/* eslint-disable no-unused-vars */
import _ from 'lodash';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { CustomButton } from '../../../commons/components';

const customStyles = {
  containerRow: {
    flex: 2,
    flexDirection: 'row'
  },
  input: {
    width: 60,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  inputIOS: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 4,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    width: 60,
    textAlign: 'center'
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'eggplant',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  containerPicker: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
};

const CartList = ({ cart, currentCartDetail, setCurrentCartDetail, setCart, products, getCartCount, getCartTotal }) => {
  const [init, setInit] = useState(false);
  const [listProducts, setListProduct] = useState([]);
  const [errors, setErrors] = useState({});

  const uniqueID = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();

  useEffect(() => {
    if (!init) {
      setCurrentCartDetail({ id: '', title: '', cant: '0', price: '0.0', pid: '' });
      setCart([{ ...currentCartDetail, id: uniqueID() }]);
      const cpyProducts = products.map(item => ({ label: item.title, value: item.id }));
      setListProduct(cpyProducts);
      setInit(true);
    }
  }, [setCart, cart, init, products, setCurrentCartDetail, currentCartDetail]);

  const handlerAddToCart = item => () => {
    if (item.cant === '0' || item.pid === '') {
      setErrors({ notSelected: 'No ha seleccionado el item o la cantidad!' });
    } else setCart([...cart, { currentCartDetail, id: uniqueID() }]);
  };

  const pickerRef = useRef(null);

  const handlerOnValueChange = (value, item) => {
    const sid = _.get(item, 'id', '');
    const pfind = _.find(products, ({ id: value }));
    const productSelected = { ...pfind, id: sid, pid: value };
    const cpyCart = [...cart];
    const oIndex = _.findIndex(cpyCart, { id: sid });
    cpyCart[oIndex] = productSelected;
    setCart(cpyCart);
  };

  const handlerInput = (text, item, field) => {
    const cpyItem = { ...item };
    cpyItem[field] = text;
    const cpyCart = [...cart];
    const oIndex = _.findIndex(cpyCart, { id: item.id });
    cpyCart[oIndex] = cpyItem;
    setCart(cpyCart);
  };


  const isLast = item => (cart.length - 1) === _.findIndex(cart, { id: item.id });

  const handlerDisabled = (item) => {
    if (!isLast(item)) return true;
    return !(parseInt(item.cant, 10) >= 1) || (item.pid === '');
  };

  const customRenderItem = ({ item }) => {
    const placeholder = { label: 'Select a product...', value: null, color: '#9EA0A4' };
    return (
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#e3e3e3' }} key={item.id}>
        <View style={customStyles.containerRow}>
          <View style={customStyles.containerPicker}>
            <RNPickerSelect
              style={customStyles.inputIOS}
              placeholder={placeholder}
              items={listProducts}
              onValueChange={value => handlerOnValueChange(value, item)}
              onUpArrow={() => { pickerRef.current.focus(); }}
              onDownArrow={() => { pickerRef.current.togglePicker(); }}
              value={item.pid}
              ref={pickerRef}
            />
          </View>
          <TextInput
            placeholder="0"
            value={(item.cant) ? item.cant.toString() : '0'}
            style={customStyles.input}
            onChangeText={(text) => { handlerInput(text, item, 'cant'); }}
          />
          <TextInput
            readOnly
            placeholder="0"
            style={customStyles.input}
            value={(item.price) ? item.price.toString() : '0.0'}
          />
          <View style={{ flex: 2 }}>
            <CustomButton disabled={handlerDisabled(item)} label="+" onPressButtonCustom={handlerAddToCart(item)} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <FlatList
        renderItem={customRenderItem}
        data={cart}
        ListFooterComponent={(
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ flex: 2 }}>{' '}</Text>
            <Text style={{ width: 60, padding: 10, textAlign: 'center' }}>{getCartCount()}</Text>
            <Text style={{ width: 60, padding: 10, textAlign: 'center' }}>{getCartTotal()}</Text>
            <Text style={{ flex: 1 }}>{' '}</Text>
          </View>
				)}
      />
      { errors && errors.notSelected && <View style={{ flex: 1 }}><Text style={{ color: 'red' }}>{ errors.notSelected }</Text></View> }
    </View>
  );
};

CartList.propTypes = {
  products: PropTypes.array
};

CartList.defaultProps = {
  products: []
};

export default CartList;
