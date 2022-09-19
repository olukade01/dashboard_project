import DataTable from "../../components/dataTable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = ({ title, linkto }: { title: string; linkto: string }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <main>
          <DataTable title={title} linkto={linkto} />
        </main>
      </div>
    </div>
  );
};

export default List;
