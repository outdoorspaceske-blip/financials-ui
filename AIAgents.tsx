import { Bot, TrendingUp, AlertCircle, Zap, MessageSquare } from 'lucide-react';

export default function AIAgentsModule() {
  const agents = [
    {
      name: 'Sales Agent',
      status: 'Active',
      description: 'Nurtures leads via email/WhatsApp, personalizes proposals, auto-follows up',
      actions: ['5 leads nurtured', '3 proposals sent', '2 conversions'],
      performance: 85
    },
    {
      name: 'Design Agent',
      status: 'Active',
      description: 'Summarizes briefs, suggests checklists, reviews drawing completeness',
      actions: ['12 briefs processed', '8 checklists generated', '4 drawings reviewed'],
      performance: 78
    },
    {
      name: 'Finance Agent',
      status: 'Active',
      description: 'Monitors budgets vs actuals, predicts cash crunch, flags risky clients',
      actions: ['3 budget alerts', '2 cash flow predictions', '1 risk flagged'],
      performance: 91
    },
    {
      name: 'Site Operations Agent',
      status: 'Active',
      description: 'Reads daily logs, flags delays, proposes mitigation strategies',
      actions: ['24 daily logs processed', '2 delays detected', '3 mitigation plans'],
      performance: 88
    }
  ];

  const recentInsights = [
    { type: 'Lead', message: 'High-value lead from referral - assign immediately', priority: 'High', time: '2 min ago' },
    { type: 'Budget', message: 'Villa project 15% over budget for MEP - review spec changes', priority: 'High', time: '15 min ago' },
    { type: 'Site', message: 'Weather delay detected - suggest 2-day buffer in schedule', priority: 'Medium', time: '45 min ago' },
    { type: 'Finance', message: 'Invoice overdue 45 days - send reminder today', priority: 'Medium', time: '1 hour ago' }
  ];

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>AI Agents Dashboard</h2>
        <div className="module-actions">
          <button className="btn-primary">Deploy New Agent</button>
          <button className="btn-secondary">Agent Settings</button>
          <button className="btn-secondary">Performance Metrics</button>
        </div>
      </div>

      <div className="ai-overview">
        <h3>Active AI Agents</h3>
        <div className="agents-grid">
          {agents.map((agent, idx) => (
            <div key={idx} className="agent-card">
              <div className="agent-header">
                <div>
                  <h4>{agent.name}</h4>
                  <p>{agent.description}</p>
                </div>
                <span className="agent-status active">{agent.status}</span>
              </div>
              <div className="agent-performance">
                <div className="performance-bar">
                  <div
                    className="performance-fill"
                    style={{ width: `${agent.performance}%` }}
                  ></div>
                </div>
                <span>{agent.performance}% Performance</span>
              </div>
              <div className="agent-actions">
                <h5>Recent Actions</h5>
                <ul>
                  {agent.actions.map((action, actionIdx) => (
                    <li key={actionIdx}>{action}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-ai-insights">
        <h3>Real-time AI Insights</h3>
        <div className="insights-feed">
          {recentInsights.map((insight, idx) => (
            <div key={idx} className={`insight-feed-item priority-${insight.priority.toLowerCase()}`}>
              <div className="insight-icon">
                {insight.type === 'Lead' && <MessageSquare size={20} />}
                {insight.type === 'Budget' && <AlertCircle size={20} />}
                {insight.type === 'Site' && <Zap size={20} />}
                {insight.type === 'Finance' && <TrendingUp size={20} />}
              </div>
              <div className="insight-content">
                <div className="insight-type">{insight.type}</div>
                <div className="insight-message">{insight.message}</div>
              </div>
              <div className="insight-meta">
                <span className="priority">{insight.priority}</span>
                <span className="time">{insight.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="agent-capabilities">
        <h3>AI Agent Capabilities</h3>
        <div className="capabilities-grid">
          <div className="capability-card">
            <h4>Sales Agent</h4>
            <ul>
              <li>Email sequence automation</li>
              <li>WhatsApp follow-ups</li>
              <li>Proposal personalization</li>
              <li>Lead scoring and qualification</li>
              <li>Meeting scheduling</li>
            </ul>
          </div>
          <div className="capability-card">
            <h4>Design Agent</h4>
            <ul>
              <li>Brief summarization</li>
              <li>Checklist generation</li>
              <li>Drawing validation</li>
              <li>Specification drafting</li>
              <li>Client presentation prep</li>
            </ul>
          </div>
          <div className="capability-card">
            <h4>Finance Agent</h4>
            <ul>
              <li>Budget vs actual tracking</li>
              <li>Cash flow forecasting</li>
              <li>Risk identification</li>
              <li>Invoice optimization</li>
              <li>Payment reminders</li>
            </ul>
          </div>
          <div className="capability-card">
            <h4>Site Operations Agent</h4>
            <ul>
              <li>Daily log analysis</li>
              <li>Delay detection</li>
              <li>Safety pattern identification</li>
              <li>Schedule optimization</li>
              <li>Progress reporting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="agent-kpis">
        <h3>Agent Performance KPIs</h3>
        <div className="kpis-grid">
          <div className="kpi-card">
            <div className="kpi-metric">85%</div>
            <div className="kpi-label">Avg Lead Conversion</div>
            <div className="kpi-detail">Sales Agent performance</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-metric">2.3 hrs</div>
            <div className="kpi-label">Avg Brief Processing</div>
            <div className="kpi-detail">Design Agent efficiency</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-metric">₹45L</div>
            <div className="kpi-label">Budget Alert Savings</div>
            <div className="kpi-detail">Finance Agent impact</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-metric">92%</div>
            <div className="kpi-label">Schedule Adherence</div>
            <div className="kpi-detail">Site Agent accuracy</div>
          </div>
        </div>
      </div>

      <div className="automation-workflows">
        <h3>Active Automation Workflows</h3>
        <div className="workflow-list">
          <div className="workflow-item">
            <h4>Lead Nurture Sequence</h4>
            <p>Auto-sends 5-email sequence over 2 weeks → Escalates if no response</p>
            <span className="active-indicator">● Active</span>
          </div>
          <div className="workflow-item">
            <h4>Daily Site Report</h4>
            <p>Collects daily logs → Flags delays → Suggests 3 mitigation options</p>
            <span className="active-indicator">● Active</span>
          </div>
          <div className="workflow-item">
            <h4>Budget Monitoring</h4>
            <p>Tracks POs vs budget → Alerts at 85% threshold → Suggests value engineering</p>
            <span className="active-indicator">● Active</span>
          </div>
          <div className="workflow-item">
            <h4>Payment Reminders</h4>
            <p>Auto-sends reminders at 30, 45, 60 days overdue → Escalates to management</p>
            <span className="active-indicator">● Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
