import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import BookCard from '../../components/BookCard';

const books = [
  {
    title: 'A Sentença do Mafioso',
    author: 'Mikaelly Silva',
    cat: 'Ação',
    cover: 'https://m.media-amazon.com/images/I/71GVKdhA8rL._SY425_.jpg',
    description:
      'Lorenzo Castellarri, membro de uma das maiores famílias criminosas da Itália, é conhecido por ser um mestiço e ser um...',
    lido: false,
  },
  {
    title: 'Die Hard',
    author: 'Roderick Thorp',
    cat: 'Ação',
    cover:
      'https://upload.wikimedia.org/wikipedia/pt/2/2a/Die_hard_poster_promocional.png',
    description:
      'Um policial de Nova York precisa salvar reféns de terroristas em um prédio durante as férias de Natal.',
    lido: false,
  },
  {
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    cat: 'Fantasia',
    cover:
      'https://www.vaughanpl.info/blog/wp-content/uploads/the-lord-of-the-rings-book-cover.jpg',
    description:
      'Um hobbit e seus companheiros partem em uma jornada épica para destruir um anel maligno e salvar o mundo da escuridão.',
    lido: true,
  },
  {
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    cat: 'Fantasia',
    cover:
      'https://m.media-amazon.com/images/I/61ATa0Pc4AL._AC_UF1000,1000_QL80_.jpg',
    description:
      'Um menino de outro planeta ensina lições importantes sobre a vida a um aviador perdido no deserto.',
    lido: true,
  },
  {
    title: 'O Diário de Bridget Jones',
    author: 'Helen Fielding',
    cat: 'Comédia',
    cover:
      'https://m.media-amazon.com/images/I/71k3B5G1OCL._AC_UF1000,1000_QL80_.jpg',
    description:
      'Uma jornalista solteirona tenta encontrar o amor e controlar seus hábitos impulsivos enquanto mantém um diário.',
    lido: false,
  },
  {
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    cat: 'Romance',
    cover:
      'https://m.media-amazon.com/images/I/71S3pgaEFDL._AC_UF1000,1000_QL80_.jpg',
    description:
      'Uma jovem inteligente e independente lida com questões de casamento, status social e preconceito na Inglaterra do século XIX.',
    lido: true,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    cat: 'Terror',
    cover:
      'https://m.media-amazon.com/images/I/816zVhF2wsL._AC_UF1000,1000_QL80_.jpg',
    description:
      'Um cientista louco cria um monstro e deve lidar com as consequências terríveis de suas ações.',
    lido: true,
  },
  {
    title: 'Psicose',
    author: 'Robert Bloch',
    cat: 'Terror',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvoWz1Wi1s2pJSCs7_V1PJLxb1CsH6iCMRIy1k5SMig&s',
    description:
      'Um homem com problemas mentais mata mulheres e mantém seus corpos em sua casa de motel.',
    lido: false,
  },
  {
    title: 'Guerra e Paz',
    author: 'Leo Tolstoy',
    cat: 'Guerra',
    cover:
      'https://www.livrarialoyola.com.br/resizer/view/600/600/true/false/451444.jpg',
    description:
      'Uma epopeia histórica que narra as vidas de cinco famílias russas durante as guerras napoleônicas.',
    lido: false,
  },
  {
    title: 'O Quarto do Príncipe',
    author: 'Irène Némirovsky',
    cat: 'Guerra',
    cover: 'https://via.placeholder.com/150',
    description:
      'Uma família judia é perseguida durante a ocupação nazista na França.',
    lido: false,
  },
  {
    title: 'O Mundo de A',
    author: 'Neal Stephenson',
    cat: 'Ficção Científica',
    cover: 'https://via.placeholder.com/150',
    description:
      'Um jovem hacker é recrutado para trabalhar em um projeto secreto que envolve a criação de um mundo virtual.',
    lido: false,
  },
  {
    title: 'Neuromante',
    author: 'William Gibson',
    cat: 'Ficção Científica',
    cover:
      'https://m.media-amazon.com/images/I/81N1TtCPxOL._AC_UF1000,1000_QL80_.jpg',
    description:
      'Um hacker despedido de seu emprego é contratado para realizar um trabalho perigoso em um mundo virtual.',
    lido: false,
  },
  {
    title: 'O Homem do Castelo Alto',
    author: 'Philip K. Dick',
    cat: 'Ficção Científica',
    cover:
      'https://m.media-amazon.com/images/I/71XIOHhYu4L._AC_UF1000,1000_QL80_.jpg',
    description:
      'Um homem descobre que sua vida é uma ilusão e que ele é um prisioneiro em um mundo virtual.',
    lido: false,
  },
  {
    title: 'O Jardim Secreto',
    author: 'Frances Hodgson Burnett',
    cat: 'Ficção Juvenil',
    cover:
      'https://m.media-amazon.com/images/I/91BLKhXhKnS._AC_UF1000,1000_QL80_.jpg',
    description:
      'Uma garota solitária descobre um jardim secreto e aprende sobre a amizade, a cura e a natureza.',
    lido: true,
  },
  {
    title: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
    author: 'C.S. Lewis',
    cat: 'Ficção Juvenil',
    cover:
      'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/59/44/20103781.jpg',
    description:
      'Quatro irmãos descobrem um mundo mágico onde enfrentam aventuras e desafios.',
    lido: true,
  },
  {
    title: 'Anne Frank: Diário de uma Garota',
    author: 'Anne Frank',
    cat: 'Documentário',
    cover:
      'https://m.media-amazon.com/images/I/61fJAMNt5LL._AC_UF1000,1000_QL80_.jpg',
    description:
      'O diário de uma garota judeu que se escondeu com sua família durante a ocupação nazista na Holanda.',
    lido: true,
  },
  {
    title: 'O Homem que Confundiu sua Mulher com um Chapéu',
    author: 'Oliver Sacks',
    cat: 'Documentário',
    cover:
      'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_d4c6588ab2da9db860c71f01a5728c5927fbda2c.jpg',
    description:
      'Um neurologista relata casos estranhos e fascinantes de pacientes com doenças neurológicas.',
    lido: false,
  },
  {
    title: 'O Mundo de Sofia',
    author: 'Jostein Gaarder',
    cat: 'Educação',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51CvnoLf37L.jpg',
    description:
      'Uma garota de 14 anos recebe lições de filosofia em forma de cartas de um misterioso professor.',
    lido: false,
  },
  {
    title: 'A História da Filosofia Ocidental',
    author: 'Bertrand Russell',
    cat: 'Educação',
    cover: 'https://m.media-amazon.com/images/I/4184JEvq-dL.jpg',
    description:
      'Uma história completa da filosofia ocidental, desde os antigos gregos até os filósofos modernos.',
    lido: false,
  },
  {
    title: 'O Alquimista',
    author: 'Paulo Coelho',
    cat: 'Auto-ajuda',
    cover:
      'https://i.pinimg.com/736x/3a/f7/e3/3af7e30d9c8a5cc01608f1dc06fa72e3.jpg',
    description:
      'Um jovem pastor de ovelhas segue seu sonho de encontrar um tesouro e aprende sobre a vida e a espiritualidade.',
    lido: false,
  },
  {
    title: 'O Poder do Ahora',
    author: 'Eckhart Tolle',
    cat: 'Auto-ajuda',
    cover: 'https://m.media-amazon.com/images/I/41ktoe-BzmL.jpg',
    description:
      'Um guia espiritual ensina como se livrar do sofrimento e encontrar a paz interior vivendo no presente.',
    lido: false,
  },
];

const HandleBookPress = (book, nav) => {
  console.log(`Book "${book.title}" pressed!`);
  console.log({ book });
  nav.navigate('BookAp', { book });
};

const Header = ({ handleCategoryPress, searchBooks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    searchBooks(searchQuery);
  };

  const renderCategory = ({ item }) => (
    <Button title={item} onPress={() => handleCategoryPress(item)} />
  );

  return (
    <View style={styles.headerContainer}>
      <FlatList
        data={[
          '',
          'Ação',
          'Aventura',
          'Romance',
          'Terror',
          'Suspense',
          'Comédia',
          'Drama',
          'Ficção Científica',
          'Fantasia',
          'Documentário',
          'Animação',
          'Faroeste',
          'Guerra',
        ]}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search books..."
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');

  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleCategoryPress = (category) => {
    setCategory(category);
  };

  const handleSearch = (query) => {
    if (query) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );

      setCategory('');

      setFilteredBooks(filteredBooks);
    } else {
      setCategory('');

      setFilteredBooks(books);
    }
  };

  const filteredBooksByCategory =
    category === ''
      ? filteredBooks
      : filteredBooks.filter((book) => book.cat === category);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImg}
          source={require('../../img/banner1.jpg')}
        />
      </View>

      <Header
        handleCategoryPress={handleCategoryPress}
        searchBooks={handleSearch}
      />

      <View style={styles.productsContainer}>
        {filteredBooksByCategory.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onPress={() => HandleBookPress(book, navigation)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
