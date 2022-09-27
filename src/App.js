import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  // const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const fetchCallBackUseEffect = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        users = [
          {
            "id": 1,
            "name": "Ali Haydar YILDIRIM",
            "username": "AHY",
            "email": "bensizinbabanızım@gmail.com",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },
          {
            "id": 2,
            "name": "Kadriye YILDIRIM",
            "username": "Cullucuk",
            "email": "anamanamgaripanam@ökkeşler.com",
            "address": {
              "street": "Victor Plains",
              "suite": "Suite 879",
              "city": "Wisokyburgh",
              "zipcode": "90566-7771",
              "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
              }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
              "name": "Deckow-Crist",
              "catchPhrase": "Proactive didactic contingency",
              "bs": "synergize scalable supply-chains"
            }
          },
          {
            "id": 3,
            "name": "Hacer YILDIRIM",
            "username": "Hacerbal",
            "email": "senbunuseviyontaman@yesenia.net",
            "address": {
              "street": "Douglas Extension",
              "suite": "Suite 847",
              "city": "McKenziehaven",
              "zipcode": "59590-4157",
              "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
              }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
              "name": "Romaguera-Jacobson",
              "catchPhrase": "Face to face bifurcated interface",
              "bs": "e-enable strategic applications"
            }
          },
          {
            "id": 4,
            "name": "Gülbettin YILDIRIM",
            "username": "Uzunico",
            "email": "gomserim@gmail.com",
            "address": {
              "street": "Hoeger Mall",
              "suite": "Apt. 692",
              "city": "South Elvis",
              "zipcode": "53919-4257",
              "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
              }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
              "name": "Robel-Corkery",
              "catchPhrase": "Multi-tiered zero tolerance productivity",
              "bs": "transition cutting-edge web services"
            }
          },
          {
            "id": 5,
            "name": "Üsame YILDIRIM",
            "username": "Orangutan Beyni",
            "email": "benaskerdeyken@tsk.ca",
            "address": {
              "street": "Skiles Walks",
              "suite": "Suite 351",
              "city": "Roscoeview",
              "zipcode": "33263",
              "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
              }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
              "name": "Keebler LLC",
              "catchPhrase": "User-centric fault-tolerant solution",
              "bs": "revolutionize end-to-end systems"
            }
          },
          {
            "id": 6,
            "name": "Mahmut Ubeyde YILDIRIM",
            "username": "Leopoldo_Corkery",
            "email": "kedilerefısıldayankovboy@maraşlım.info",
            "address": {
              "street": "Norberto Crossing",
              "suite": "Apt. 950",
              "city": "South Christy",
              "zipcode": "23505-1337",
              "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
              }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
              "name": "Considine-Lockman",
              "catchPhrase": "Synchronised bottom-line interface",
              "bs": "e-enable innovative applications"
            }
          },
          {
            "id": 7,
            "name": "Ayşe Zeynep YILDIRIM",
            "username": "Elwyn.Skiles",
            "email": "pambıkayşe@gazili.biz",
            "address": {
              "street": "Rex Trail",
              "suite": "Suite 280",
              "city": "Howemouth",
              "zipcode": "58804-1099",
              "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
              }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
              "name": "Johns Group",
              "catchPhrase": "Configurable multimedia task-force",
              "bs": "generate enterprise e-tailers"
            }
          },
          {
            "id": 8,
            "name": "Talha Baturalp YILDIRIM",
            "username": "Maxime_Nienow",
            "email": "ergenius_46@akıltreni.me",
            "address": {
              "street": "Ellsworth Summit",
              "suite": "Suite 729",
              "city": "Aliyaview",
              "zipcode": "45169",
              "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
              }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
              "name": "Abernathy Group",
              "catchPhrase": "Implemented secondary concept",
              "bs": "e-enable extensible e-tailers"
            }
          },
          {
            "id": 9,
            "name": "Jülide YILDIRIM",
            "username": "KEDİ",
            "email": "balkondanatladım@kedi.io",
            "address": {
              "street": "Dayna Park",
              "suite": "Suite 449",
              "city": "Bartholomebury",
              "zipcode": "76495-3109",
              "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
              }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
              "name": "Yost and Sons",
              "catchPhrase": "Switchable contextually-based project",
              "bs": "aggregate real-time technologies"
            }
          },
          {
            "id": 10,
            "name": "Marussia YILDIRIM",
            "username": "Moriah.Stanton",
            "email": "tekirimben@karina.biz",
            "address": {
              "street": "Kattie Turnpike",
              "suite": "Suite 198",
              "city": "Lebsackbury",
              "zipcode": "31428-2261",
              "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
              }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
              "name": "Hoeger LLC",
              "catchPhrase": "Centralized empowering task-force",
              "bs": "target end-to-end models"
            }
          }
        ];
        return setMonsters(users)
      })
  };

  const filteredMonstersCallBackUseEffect = () => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters)
  }



  useEffect(fetchCallBackUseEffect, []);
  useEffect(filteredMonstersCallBackUseEffect, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // const onTitleChange = (event) => {
  //   const searchFieldString = event.target.value;
  //   setTitle(searchFieldString);
  // };



  return (
    <div className="App" >
      <h1 className='app-title'>YILDIRIM RESIDENCE</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      {/* <br />
      <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placeholder='set title'
      /> */}
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

/*
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users };
      }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })

  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App" >
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}
*/
export default App;
