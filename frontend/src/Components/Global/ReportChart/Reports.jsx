import { useState } from 'react';
import ReportCharts from './ReportCharts';
import './reports.css';

function Reports() {

    const [filter, setFilter] = useState('Hoje');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    return (
        <div className="card-x">
            <div className="card-body">
                <h5 className="card-title">
                    Reportes <span>/{filter}</span>
                </h5>
                <ReportCharts />
            </div>
        </div>
    )
}

export default Reports