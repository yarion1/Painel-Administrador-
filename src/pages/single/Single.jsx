import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Informacoes</h1>
            <div className="item">
              <img
                src="https://cdn.discordapp.com/attachments/814525273361088542/962493152873308223/euifj.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Pablo Henrique</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">pablohenriquedeveloper@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefone:</span>
                  <span className="itemValue">(99)99103-1905</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Endereco:</span>
                  <span className="itemValue">
                  Q. 203 Norte Alameda Central - Plano Diretor Norte, Palmas - TO, 77001-144
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pais:</span>
                  <span className="itemValue">BRASIL</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Gastos do usuário (últimos 6 meses)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">últimas transacoes</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
