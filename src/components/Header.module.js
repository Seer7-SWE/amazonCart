const styles = {
  header: {
    backgroundColor: '#232f3e',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
  },
  cartIcon: {
    position: 'relative',
    marginLeft: '10px',
  },
  cartLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  cartCount: {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: '#ff9900',
    borderRadius: '50%',
    padding: '2px 5px',
    fontSize: '12px',
    color: '#000',
  },

  register: {
  display: 'flex',
  flex-direction: 'column',
  width: '300px',
  margin: 'auto',
  gap: '10px',
  padding: '20px',
  border: '1px solid #ccc',
  border-radius: '10px',
  input: {
  padding: '8px',
  fontSize: '16px',
},
  button: {
  padding: '10px',
  font-size: '16px',
  background-color: '#ff9900',
  color: 'white',
  border: 'none',
  border-radius: '5px',
},
},

};

export default styles;
