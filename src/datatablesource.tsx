import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { toggleUser } from "./store/dashboard.entity";

export const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 210,
    renderCell: (params: GridValueGetterParams) => (
      <div className="cellWithImg">
        <img src={params.row.img} />
        {params.row.username}
      </div>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 220,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 120,
    // renderCell: (params) => (
    //   <div
    //     // onClick={() => toggleUser(params.row.id)}
    //     className={`cellWithStatus ${params.row.status ? "active" : "pending"}`}
    //   >
    //     {params.row.status ? "active" : "pending"}
    //   </div>
    // ),
  },
];
export const productColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 180,
    renderCell: (params: GridValueGetterParams) => (
      <div className="cellWithImg">
        <img src={params.row.img} />
        {params.row.title}
      </div>
    ),
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "color",
    headerName: "Color",
    width: 130,
    // renderCell: (params) => (
    //   <div className={`cellWithInStock ${params.row.inStock}`}>
    //     {params.row.inStock}
    //   </div>
    // ),
  },
];

export const productRows = [
  {
    id: 5,
    title: "Targaryen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR563zwATHZ8pvggtUl0sQc5OgQxFL3GoJcLg&usqp=CAU",
    color: "red",
    description: "5snow@gmail.com",
    price: 22,
    category: "laptop",
  },
  {
    id: 6,
    title: "Melisandre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlUkquwvDZ856VP_lj7B4tHF6lVQKrCZe4w&usqp=CAU",
    color: "green",
    description: "6snow@gmail.com",
    price: 15,
    category: "laptop",
  },
  {
    id: 7,
    title: "Clifford",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM52o3Lq1x8l8TMs2vHxopWkMJhgM_gKh85g&usqp=CAU",
    color: "blue",
    description: "7snow@gmail.com",
    price: 44,
    category: "laptop",
  },
  {
    id: 8,
    title: "Frances",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR563zwATHZ8pvggtUl0sQc5OgQxFL3GoJcLg&usqp=CAU",
    color: "pink",
    description: "8snow@gmail.com",
    price: 36,
    category: "laptop",
  },
  {
    id: 9,
    title: "Roxie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNj21BsjucUVU1cHF-rasiFD5nxb0vCeXw&usqp=CAU",
    color: "grey",
    description: "snow@gmail.com",
    price: 65,
    category: "laptop",
  },
  {
    id: 10,
    title: "Roxie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbu1KSt-LxQWME4qM9_u9UTNtrP3qxRdG-A&usqp=CAU",
    color: "tomato",
    description: "snow@gmail.com",
    price: 65,
    category: "laptop",
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNj21BsjucUVU1cHF-rasiFD5nxb0vCeXw&usqp=CAU",
    country: "Nigeria",
    email: "1snow@gmail.com",
    phone: 35,
    address: "adewole estate",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbu1KSt-LxQWME4qM9_u9UTNtrP3qxRdG-A&usqp=CAU",
    country: "France",
    email: "2snow@gmail.com",
    phone: 42,
    address: "adewole estate",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4Wam9IQiZjp_FYkZrrd99kUqESCo0RZDzg&usqp=CAU",
    country: "Canada",
    email: "3snow@gmail.com",
    phone: 45,
    address: "adewole estate",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERymxzCBwiYcWG2N6vEYpXN1a0Qv7_cBFFw&usqp=CAU",
    country: "England",
    email: "4snow@gmail.com",
    phone: 16,
    address: "adewole estate",
  },
];
