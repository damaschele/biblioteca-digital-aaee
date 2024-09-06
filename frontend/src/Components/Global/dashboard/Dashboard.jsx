import Tabela from '../../TabelaUsuario/Tabela';
import MyCalendar from '../Calendario/MyCalendar';
import Card from '../Cards/Card';
import Reports from '../ReportChart/Reports';
import ActiveUsersList from '../UtilizadoresActivos/ActiveUsersList';
import './dashboard.css';

const Dashboard = () => {

    return (
        <section className="dashboard section">
            <div className="row poit">
                <div className="col-lg-8">
                        <Card />
                    <div className="col-12">
                        <Reports />
                    </div>
                    <div className="col-12">
                        <Tabela />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="user">
                    <ActiveUsersList />
                    </div>
                    <MyCalendar />
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
