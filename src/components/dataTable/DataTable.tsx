import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

// const DataTable = ({
//   title,
//   linkto,
//   datas,
//   userColumns,
//   handleDelete,
// }: {
//   title: string;
//   linkto: string;
//   datas: any;
//   userColumns: any;
//   handleDelete: any;
// }) => {
//   // const [data, setData] = useState(datas);
//   // const handleDelete = (id: number) => {
//   //   setData(data.filter((item: any) => item.id !== id));
//   // };

//   const columnAction = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       renderCell: (params: GridValueGetterParams) => (
//         <div className="cellAction">
//           <Link
//             to="/users/:id"
//             style={{ textDecoration: "none", border: "none" }}
//           >
//             <div className="view"> View</div>
//           </Link>
//           <div className="delete" onClick={() => handleDelete(params.row.id)}>
//             Delete
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="datatable">
//       <div className="dataTableTitle">
//         {title}
//         <Link to={linkto} className="link">
//           Add new
//         </Link>
//       </div>
//       <DataGrid
//         rows={datas}
//         columns={userColumns.concat(columnAction)}
//         pageSize={9}
//         rowsPerPageOptions={[9]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default DataTable;
