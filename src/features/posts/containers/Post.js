import React, {
  memo, useState, useRef, useEffect
} from 'react';
import FormPost from '../components/FormPost';

const Post = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const titleRef = useRef(null);

  const handleRefEvent = () => {
    // console.log('execute handleRefEvent');
    titleRef.current.focus();
  };

  const handleBack = () => navigation.navigate('Home');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ title, description });
  }, [title, description]);

  return (
    <>
      <FormPost
        titleFormRef={titleRef}
        title={title}
        description={description}
        setDescription={setDescription}
        setTitle={setTitle}
        handleRefEvent={handleRefEvent}
        handleBack={handleBack}
      />
    </>
  );
};

export default memo(Post);
