import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

export default function MarketingModule() {
  const campaigns = [
    { name: 'Instagram Reel - Interior Design', status: 'Active', reach: '45K', engagement: '8.2%', conversions: 12 },
    { name: 'Email Newsletter - Design Tips', status: 'Active', reach: '3.2K', engagement: '24%', conversions: 8 },
    { name: 'LinkedIn - Case Study', status: 'Active', reach: '8.5K', engagement: '6.1%', conversions: 15 },
    { name: 'Facebook Ads - Furniture', status: 'Paused', reach: '25K', engagement: '4.3%', conversions: 22 }
  ];

  const contentCalendar = [
    { day: 'Mon', post: 'Project showcase', platform: 'Instagram' },
    { day: 'Wed', post: 'Design tips video', platform: 'TikTok' },
    { day: 'Thu', post: 'Newsletter', platform: 'Email' },
    { day: 'Sat', post: 'Before/After', platform: 'Instagram' }
  ];

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Marketing & Social Media</h2>
        <div className="module-actions">
          <button className="btn-primary">New Campaign</button>
          <button className="btn-secondary">Content Calendar</button>
          <button className="btn-secondary">Analytics</button>
        </div>
      </div>

      <div className="campaign-metrics">
        <h3>Active Campaigns Performance</h3>
        <div className="metrics-grid">
          <div className="campaign-metric">
            <div>
              <span className="label">Total Reach</span>
              <span className="value">81.7K</span>
            </div>
          </div>
          <div className="campaign-metric">
            <div>
              <span className="label">Avg Engagement</span>
              <span className="value">10.7%</span>
            </div>
          </div>
          <div className="campaign-metric">
            <div>
              <span className="label">Total Conversions</span>
              <span className="value">57</span>
            </div>
          </div>
          <div className="campaign-metric">
            <div>
              <span className="label">Lead Quality Score</span>
              <span className="value">8.1/10</span>
            </div>
          </div>
        </div>
      </div>

      <div className="campaigns-list">
        <h3>Campaign Performance</h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Reach</th>
                <th>Engagement</th>
                <th>Conversions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, idx) => (
                <tr key={idx}>
                  <td><strong>{campaign.name}</strong></td>
                  <td>
                    <span className={`status-badge status-${campaign.status.toLowerCase()}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td>{campaign.reach}</td>
                  <td>{campaign.engagement}</td>
                  <td>{campaign.conversions}</td>
                  <td>
                    <button className="btn-sm">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="content-calendar">
        <h3>Weekly Content Calendar</h3>
        <div className="calendar-grid">
          {contentCalendar.map((item, idx) => (
            <div key={idx} className="calendar-item">
              <div className="calendar-day">{item.day}</div>
              <div className="calendar-post">{item.post}</div>
              <div className="calendar-platform">{item.platform}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="channel-performance">
        <h3>Performance by Channel</h3>
        <div className="channel-grid">
          <div className="channel-card">
            <h4>Instagram</h4>
            <div className="channel-stats">
              <div><span>Followers</span><span>12.5K</span></div>
              <div><span>Avg Likes</span><span>850</span></div>
              <div><span>Story Views</span><span>3.2K</span></div>
            </div>
          </div>
          <div className="channel-card">
            <h4>LinkedIn</h4>
            <div className="channel-stats">
              <div><span>Followers</span><span>2.1K</span></div>
              <div><span>Post Engagement</span><span>6.1%</span></div>
              <div><span>Leads This Month</span><span>8</span></div>
            </div>
          </div>
          <div className="channel-card">
            <h4>Email</h4>
            <div className="channel-stats">
              <div><span>Subscribers</span><span>5.8K</span></div>
              <div><span>Open Rate</span><span>24%</span></div>
              <div><span>Click Rate</span><span>4.2%</span></div>
            </div>
          </div>
          <div className="channel-card">
            <h4>TikTok</h4>
            <div className="channel-stats">
              <div><span>Followers</span><span>1.2K</span></div>
              <div><span>Avg Views</span><span>5.5K</span></div>
              <div><span>Engagement Rate</span><span>12%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="ai-marketing">
        <h3>AI Marketing Recommendations</h3>
        <div className="recommendation-grid">
          <div className="recommendation-card">
            <h4>Content Optimization</h4>
            <p>Reels with before/after content get 3x more engagement. Create 2 more this week.</p>
            <button className="btn-secondary">Create Brief</button>
          </div>
          <div className="recommendation-card">
            <h4>Timing Optimization</h4>
            <p>Posts at 7-8 PM weekdays get 25% more interactions. Reschedule posts accordingly.</p>
            <button className="btn-secondary">Update Schedule</button>
          </div>
          <div className="recommendation-card">
            <h4>Audience Expansion</h4>
            <p>Target budget-conscious homeowners aged 28-42. Allocate 40% of ad spend here.</p>
            <button className="btn-secondary">Create Audience</button>
          </div>
        </div>
      </div>
    </div>
  );
}
