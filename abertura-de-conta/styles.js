import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 20,
    fontFamily: "Verdana",
    alignSelf: 'center',
    color: '#333',
    textTransform: 'uppercase',
  },
  texto: {
    paddingTop: 5,
    paddingLeft: 30,
    paddingBottom: 15,
    fontSize: 15,
    fontFamily: "Verdana",
    color: '#555',
  },
  input: {
    height: 40,
    width: 320,
    borderBottomWidth: 2,
    borderBottomColor: '#222',
    fontSize: 20,
    fontFamily: "Verdana",
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  selecao: {
    height: 40,
    fontSize: 15,
    fontFamily: "Verdana",
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#333',
  },
  switc: {
    marginLeft: 10,
  },
   confirmar: {
    backgroundColor: 'darkblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    width: 300,
    marginLeft: 125,
    marginBottom: 10
  },
   confirmarText: {

    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',

  },
});

export { styles };