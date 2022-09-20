import DataTable from "../../components/dataTable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import { userColumns } from "../../datatablesource";
import "./list.scss";

const List = ({
  title,
  linkto,
  datas,
  userColumns,
}: {
  title: string;
  linkto: string;
  datas: any;
  userColumns: any;
}) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <main>
          <DataTable
            datas={datas}
            userColumns={userColumns}
            title={title}
            linkto={linkto}
          />
        </main>
      </div>
    </div>
  );
};

export default List;
