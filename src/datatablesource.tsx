import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

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
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNj21BsjucUVU1cHF-rasiFD5nxb0vCeXw&usqp=CAU",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbu1KSt-LxQWME4qM9_u9UTNtrP3qxRdG-A&usqp=CAU",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4Wam9IQiZjp_FYkZrrd99kUqESCo0RZDzg&usqp=CAU",
    status: "pending",
    email: "3snow@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERymxzCBwiYcWG2N6vEYpXN1a0Qv7_cBFFw&usqp=CAU",
    status: "active",
    email: "4snow@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR563zwATHZ8pvggtUl0sQc5OgQxFL3GoJcLg&usqp=CAU",
    status: "passive",
    email: "5snow@gmail.com",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlUkquwvDZ856VP_lj7B4tHF6lVQKrCZe4w&usqp=CAU",
    status: "active",
    email: "6snow@gmail.com",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM52o3Lq1x8l8TMs2vHxopWkMJhgM_gKh85g&usqp=CAU",
    status: "passive",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR563zwATHZ8pvggtUl0sQc5OgQxFL3GoJcLg&usqp=CAU",
    status: "active",
    email: "8snow@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNj21BsjucUVU1cHF-rasiFD5nxb0vCeXw&usqp=CAU",
    status: "pending",
    email: "snow@gmail.com",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbu1KSt-LxQWME4qM9_u9UTNtrP3qxRdG-A&usqp=CAU",
    status: "active",
    email: "snow@gmail.com",
    age: 65,
  },
];
