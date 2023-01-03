export interface Data {
  [key: string]: string | number | undefined;
  id: string;
  name: string;
  calories?: number;
  weight?: number;
  count?: number;
  protein?: number;
}

const dummyData: Data[] = [
  {
    id: '1',
    name: 'yogurt',
    calories: 270,
    weight: 112,
    count: 7,
    protein: 12,
  },
  {
    id: '2',
    name: 'rice',
    calories: 130,
    weight: 35,
    count: 2,
    protein: 7,
  },
  {
    id: '3',
    name: 'hamburger',
    calories: 85,
    weight: 82,
    count: 0,
    protein: 6,
  },
  {
    id: '4',
    name: 'tomato',
    calories: 351,
    weight: 12,
    count: 2,
    protein: 24,
  },
  {
    id: '5',
    name: 'apple',
    calories: 200,
    weight: 30,
    count: 1,
    protein: 16,
  },
  {
    id: '6',
    name: 'banana',
    calories: 199,
    weight: 45,
    count: 2,
    protein: 13,
  },
  {
    id: '7',
    name: 'mellon',
    calories: 26,
    weight: 15,
    count: 2,
    protein: 1,
  },
  {
    id: '8',
    name: 'water mellon',
    calories: 250,
    weight: 34,
    count: 0,
    protein: 4,
  },
  {
    id: '9',
    name: 'water',
    calories: 115,
    weight: 47,
    count: 9,
    protein: 3,
  },
  {
    id: '10',
    name: 'carrot',
    calories: 171,
    weight: 22,
    count: 5,
    protein: 12,
  },
  {
    id: '11',
    name: 'pizza',
    calories: 280,
    weight: 65,
    count: 7,
    protein: 30,
  },
  {
    id: '12',
    name: 'steak',
    calories: 349,
    weight: 50,
    count: 3,
    protein: 21,
  },
  {
    id: '13',
    name: 'gukbab',
    calories: 900,
    weight: 80,
    count: 2,
    protein: 75,
  },
  {
    id: '14',
    name: 'kiwi',
    calories: 600,
    weight: 90,
    count: 0,
    protein: 54,
  },
  {
    id: '15',
    name: 'galaxy',
    calories: 700,
    weight: 1012,
    count: 79,
    protein: 80,
  },
  {
    id: '16',
    name: 'mac',
    calories: 200,
    weight: 123,
    count: 86,
    protein: 24,
  },
  {
    id: '17',
    name: 'front',
    calories: 215,
    weight: 432,
    count: 69,
    protein: 86,
  },
  {
    id: '18',
    name: 'react',
    calories: 666,
    weight: 567,
    count: 35,
    protein: 300,
  },
  {
    id: '19',
    name: 'next',
    calories: 83,
    weight: 222,
    count: 43,
    protein: 200,
  },
  {
    id: '20',
    name: 'typescript',
    calories: 444,
    weight: 444,
    count: 2,
    protein: 88,
  },
  {
    id: '21',
    name: 'git',
    calories: 333,
    weight: 555,
    count: 456,
    protein: 42,
  },
  {
    id: '22',
    name: 'github',
    calories: 122,
    weight: 22,
    count: 8,
    protein: 55,
  },
  {
    id: '23',
    name: 'mola',
    calories: 86,
    weight: 12,
    count: 745,
    protein: 66,
  },
  {
    id: '24',
    name: 'yes',
    calories: 399,
    weight: 2,
    count: 4,
    protein: 12,
  },
  {
    id: '25',
    name: 'grape',
    calories: 122,
    weight: 8,
    count: 32,
    protein: 13,
  },
  {
    id: '26',
    name: 'develop',
    calories: 122,
    weight: 4,
    count: 21,
    protein: 45,
  },
  {
    id: '27',
    name: 'main',
    calories: 122,
    weight: 5,
    count: 26,
    protein: 30,
  },
];

export default dummyData;
