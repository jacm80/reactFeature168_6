import React, { useCallback, useContext, memo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { CustomButton } from '../../../commons/components';
import CartList from '../components/CartList';
import CartDetailsContext from '../context/CartDetails.context';

const Cart = ({ navigation }) => {
  const ctx = useContext(CartDetailsContext);
  return (
    <View style={{ flex: 1 }}>
      <CartList
        cart={ctx.cart}
        currentCartDetail={ctx.currentCartDetail}
        setCurrentCartDetail={ctx.setCurrentCartDetail}
        setCart={ctx.setCart}
        products={ctx.products}
        getCartCount={ctx.getCartCount}
        getCartTotal={ctx.getCartTotal}
      />
      <CustomButton label="Regresar" onPressButtonCustom={useCallback(() => { navigation.navigate('Home'); }, [navigation])} />
    </View>
  );
};

Cart.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default memo(Cart);
