const styles = {
  input: {
    flex: 1,
    borderColor: '#e3e3e3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  containerInputs: {
    flex: 1,
    alignSelf: 'stretch'
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  acceptButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  boxAcceptButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10
  }
};

const {
  input, container, containerInputs, containerButton, acceptButton, boxAcceptButton
} = styles;

export {
  input,
  container,
  containerButton,
  containerInputs,
  acceptButton,
  boxAcceptButton
};
