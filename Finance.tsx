import { useState, useEffect } from 'react';
import { TrendingUp, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { supabase, type FinancialTransaction } from '../lib/supabase';

export default function FinanceModule() {
  const [transactions, setTransactions] = useState<FinancialTransaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const { data } = await supabase
      .from('financial_transactions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (data) setTransactions(data);
    setLoading(false);
  };

  const financialMetrics = [
    { label: 'Total Revenue (YTD)', value: '₹2.4 Cr', change: '+18%', icon: '💰' },
    { label: 'Outstanding AR', value: '₹45L', change: '-12%', icon: '📋' },
    { label: 'Cash Flow Health', value: '92%', change: '+5%', icon: '📈' },
    { label: 'Avg Project Margin', value: '28%', change: '+2%', icon: '🎯' }
  ];

  const costBreakdown = [
    { category: 'Design Fees', value: 32, budget: 35 },
    { category: 'Construction Labor', value: 28, budget: 30 },
    { category: 'Materials & Procurement', value: 25, budget: 28 },
    { category: 'Factory Production', value: 8, budget: 10 },
    { category: 'Site Overhead', value: 4, budget: 5 },
    { category: 'Contingency', value: 3, budget: 7 }
  ];

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Finance & Accounting</h2>
        <div className="module-actions">
          <button className="btn-primary">New Invoice</button>
          <button className="btn-secondary">Financial Reports</button>
          <button className="btn-secondary">Forecast</button>
        </div>
      </div>

      <div className="financial-metrics">
        <div className="metrics-grid">
          {financialMetrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-header">
                <span>{metric.icon}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="financial-overview">
        <h3>Project P&L Summary</h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Budget</th>
                <th>Spent</th>
                <th>Remaining</th>
                <th>Margin %</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Modern Villa - Whitefield</strong></td>
                <td>₹45L</td>
                <td>₹12L</td>
                <td>₹33L</td>
                <td>28%</td>
                <td><span className="status-badge status-active">On Track</span></td>
              </tr>
              <tr>
                <td><strong>Tech Office Interior</strong></td>
                <td>₹22L</td>
                <td>₹8L</td>
                <td>₹14L</td>
                <td>32%</td>
                <td><span className="status-badge status-active">On Track</span></td>
              </tr>
              <tr>
                <td><strong>Apartment Renovation</strong></td>
                <td>₹35L</td>
                <td>₹5L</td>
                <td>₹30L</td>
                <td>25%</td>
                <td><span className="status-badge status-warning">Risk Alert</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="cost-breakdown">
        <h3>Cost Structure Breakdown</h3>
        <div className="breakdown-grid">
          {costBreakdown.map((item, idx) => (
            <div key={idx} className="breakdown-card">
              <div className="breakdown-header">
                <span>{item.category}</span>
                <span className="percentage">{item.value}%</span>
              </div>
              <div className="breakdown-bars">
                <div className="bar-container">
                  <div className="bar-actual" style={{ width: `${(item.value / item.budget) * 100}%` }}></div>
                  <div className="bar-budget"></div>
                </div>
              </div>
              <div className="breakdown-labels">
                <span>Actual: {item.value}%</span>
                <span>Budget: {item.budget}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cash-flow">
        <h3>Cash Flow Forecast (Next 6 Months)</h3>
        <div className="cashflow-chart">
          <div className="month-bar">
            <span className="month">Jan</span>
            <div className="bar-row">
              <div className="bar inflow" style={{ height: '70px' }}></div>
              <div className="bar outflow" style={{ height: '55px' }}></div>
            </div>
          </div>
          <div className="month-bar">
            <span className="month">Feb</span>
            <div className="bar-row">
              <div className="bar inflow" style={{ height: '85px' }}></div>
              <div className="bar outflow" style={{ height: '60px' }}></div>
            </div>
          </div>
          <div className="month-bar">
            <span className="month">Mar</span>
            <div className="bar-row">
              <div className="bar inflow" style={{ height: '90px' }}></div>
              <div className="bar outflow" style={{ height: '70px' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ar-aging">
        <h3>Outstanding Invoices (AR Aging)</h3>
        <div className="aging-grid">
          <div className="aging-card urgent">
            <div className="aging-period">Over 90 Days</div>
            <div className="aging-amount">₹8L</div>
            <div className="aging-count">2 invoices</div>
          </div>
          <div className="aging-card warning">
            <div className="aging-period">60-90 Days</div>
            <div className="aging-amount">₹12L</div>
            <div className="aging-count">3 invoices</div>
          </div>
          <div className="aging-card caution">
            <div className="aging-period">30-60 Days</div>
            <div className="aging-amount">₹18L</div>
            <div className="aging-count">4 invoices</div>
          </div>
          <div className="aging-card healthy">
            <div className="aging-period">0-30 Days</div>
            <div className="aging-amount">₹25L</div>
            <div className="aging-count">6 invoices</div>
          </div>
        </div>
      </div>
    </div>
  );
}
