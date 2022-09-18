type Inputs = {
  id: number,
  label: string,
  type: string,
  placeholder?: string,
}[]

export const userInputs:Inputs = [
  {
    id: 1,
    label: 'Username',
    type: 'text',
    placeholder: 'john_doe'
  },
  {
    id: 2,
    label: 'Name and surname',
    type: 'text',
    placeholder: 'John Doe'
  },
  {
    id: 3,
    label: 'Email',
    type: 'email',
    placeholder: 'john_doe@gmail.com'
  },
  {
    id: 4,
    label: 'Phone',
    type: 'text',
    placeholder: '+1 234 567 89'
  },
  {
    id: 5,
    label: 'Password',
    type: 'password'
  },
  {
    id: 6,
    label: 'Address',
    type: 'text',
    placeholder: 'Elton St. 216 NewYork'
  },
  {
    id: 7,
    label: 'Country',
    type: 'text',
    placeholder: 'USA'
  },
]

export const productInputs:Inputs = [
  {
    id: 1,
    label: 'Tittle',
    type: 'text',
    placeholder: 'Apple Macbook Pro'
  },
  {
    id: 2,
    label: 'Description',
    type: 'text',
    placeholder: 'Description'
  },
  {
    id: 3,
    label: 'Category',
    type: 'text',
    placeholder: 'Computers'
  },
  {
    id: 4,
    label: 'Price',
    type: 'text',
    placeholder: '100'
  },
  {
    id: 5,
    label: 'Stock',
    type: 'text',
    placeholder: 'in stock'
  }
]