import  {
  Language,
  Movie,
  People,
  Commute,
  Star,
  Face,
  ArrowForward
} from '@material-ui/icons';


const IconMap = {
  people: Face,
  planets: Language,
  films: Movie,
  species: People,
  vehicles: Commute,
  starships: Star,
  default: ArrowForward
};

const ColumnMap = {
  people: [
    { key: 'name', label: 'Name', showAvatar: true },
    { key: 'gender', label: 'Gender' } ,
    { key: 'birth_year', label: 'Birth Year' },
    { key: 'eye_color', label: 'Eye Color' },
    { key: 'films', label: '# of Films' },
    { key: 'starships', label: '# of Starships' }
  ],
  planets: [
    { key: 'name', label: 'Name', showAvatar: true },
    { key: 'climate', label: 'Climate' } ,
    { key: 'gravity', label: 'Gravity' },
    { key: 'rotation_period', label: 'Rotation Period' },
    { key: 'orbital_period', label: 'Orbital Period' },
    { key: 'population', label: 'Population' }
  ],
  films: [
    { key: 'title', label: 'Name', showAvatar: true },
    { key: 'producer', label: 'Producer' } ,
    { key: 'director', label: 'Director' },
    { key: 'vehicles', label: '# of Vehicle' },
    { key: 'species', label: '# of Species' },
  ],
  species: [
    { key: 'name', label: 'Name', showAvatar: true },
    { key: 'classification', label: 'Classification' },
    { key: 'designation', label: 'Designation' },
    { key: 'language', label: 'Language' },
    { key: 'average_lifespan', label: 'Average Lifespan' },
  ],
  vehicles: [
    { key: 'name', label: 'Name', showAvatar: true },
    { key: 'model', label: 'Model' },
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'cost_in_credits', label: 'Cost In Credits' },
    { key: 'length', label: 'Length' },
  ],
  starships: [
    { key: 'name', label: 'Name', showAvatar: true },
    { key: 'hyperdrive_rating', label: 'Hyperdrive Rating' },
    { key: 'starship_class', label: 'Starship Class' },
    { key: 'cost_in_credits', label: 'Cost In Credits' },
    { key: 'crew', label: 'Crew' },
    { key: 'passengers', label: 'Passengers' },
  ],
};

const sortedArrayByKey = (arr, key, order) => {
  return arr.sort((a, b) => {
    let sortOrder = 1;
    if (order === 'desc') {
      sortOrder = -1;
    }
    if (a[key] > b[key]) {
      return 1 * sortOrder;
    } else if (a[key] < b[key]) {
      return -1 * sortOrder;
    }
    return 0 * sortOrder
  })
}

export {
  IconMap,
  ColumnMap,
  sortedArrayByKey,
}