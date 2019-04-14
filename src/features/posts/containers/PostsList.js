import React, { memo, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { CustomButton, CustomHeader } from '../../commons/components';
import ItemList from '../components/ItemList';
import getPosts from '../services/getPosts';

const PostsList = ({ navigation }) => {
  const fetchPosts = async () => setPosts(await getPosts());
  const [posts, setPosts] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (!fetched) {
      fetchPosts();
      setFetched(true);
    }
    // return () => setPosts([])
  }, [fetched]);

  const handlerBack = () => navigation.navigate('Home');
  const renderList = ({ item }) => (
    <ItemList
      key={item.id}
      id={item.id}
      title={item.title}
      completed={item.completed}
    />
  );

  const customKeyExtractor = item => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Lista de Post" />
      <View style={{ flex: 10, borderWidth: 1 }}>
        { posts.length > 0 && (
        <FlatList
          ListHeaderComponent={(
            <ItemList
              isHeader
              key="Header"
              id="Id"
              title="Title"
              completed="Done"
            />
			)}
          renderItem={renderList}
          data={posts}
          keyExtractor={customKeyExtractor}
        />
        )}
      </View>
      <CustomButton label="Regresar" onPressButtonCustom={handlerBack} />
    </View>
  );
};

export default memo(PostsList);
