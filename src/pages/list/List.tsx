import { Link } from "react-router-dom";
// import DataTable from "../../components/dataTable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import { userColumns } from "../../datatablesource";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import "./list.scss";

const List = ({
  title,
  linkto,
  datas,
  columns,
  columnAction,
}: {
  title: string;
  linkto: string;
  datas: any;
  columns: any;
  columnAction?: any;
}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <main>
          <div className="datatable">
            <div className="dataTableTitle">
              {title}
              <Link to={linkto} className="link">
                Add new
              </Link>
            </div>
            <DataGrid
              className="datagrid"
              rows={datas}
              columns={columns.concat(columnAction)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
            />
          </div>
          {/* <DataTable
            datas={datas}
            userColumns={userColumns}
            title={title}
            linkto={linkto}
            handleDelete={handleDelete}
          /> */}
        </main>
      </div>
    </div>
  );
};
export default List;
