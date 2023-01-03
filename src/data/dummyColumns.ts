export interface Columns {
  name: string;
  text?: string;
  sortable?: boolean;
}

const dummyColumns: Columns[] = [
  {
    name: 'name',
    sortable: true,
  },
  {
    name: 'calories',
    sortable: true,
  },
  {
    name: 'weight',
    text: 'weight (g)',
    sortable: false,
  },
  {
    name: 'count',
    sortable: true,
  },
  {
    name: 'protein',
    text: 'protein (g)',
    sortable: false,
  },
];

export default dummyColumns;
