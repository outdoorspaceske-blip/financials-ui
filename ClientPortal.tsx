import { FileText, CheckCircle, Package, MessageSquare, Download, Calendar } from 'lucide-react';

export default function ClientPortalModule() {
  const clientProjects = [
    { name: 'Modern Villa - Whitefield', phase: 'Construction', progress: 65, nextMilestone: 'Structural inspection' },
    { name: 'Tech Office Interior', phase: 'Furniture Installation', progress: 85, nextMilestone: 'Handover scheduled' }
  ];

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Client Portal</h2>
        <div className="module-actions">
          <button className="btn-primary">Create Portal Access</button>
          <button className="btn-secondary">Announcements</button>
          <button className="btn-secondary">Support Tickets</button>
        </div>
      </div>

      <div className="client-welcome">
        <div className="welcome-card">
          <h3>Welcome to Your BuildFlow Portal</h3>
          <p>Track your project progress, access documents, and communicate with your team in real-time.</p>
        </div>
      </div>

      <div className="projects-section">
        <h3>Your Projects</h3>
        <div className="client-projects-grid">
          {clientProjects.map((project, idx) => (
            <div key={idx} className="client-project-card">
              <div className="project-title">{project.name}</div>
              <div className="project-phase">
                <span className="phase-badge">{project.phase}</span>
              </div>
              <div className="project-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <span>{project.progress}% Complete</span>
              </div>
              <div className="milestone">
                <Calendar size={14} />
                Next: {project.nextMilestone}
              </div>
              <button className="btn-secondary">View Details</button>
            </div>
          ))}
        </div>
      </div>

      <div className="documents-section">
        <h3>Project Documents</h3>
        <div className="documents-grid">
          <div className="document-card">
            <FileText size={32} />
            <h4>Design Plans</h4>
            <p>Latest construction documents and design drawings</p>
            <button className="btn-sm">
              <Download size={14} /> Download
            </button>
          </div>
          <div className="document-card">
            <FileText size={32} />
            <h4>Change Orders</h4>
            <p>All approved variations and modifications</p>
            <button className="btn-sm">
              <Download size={14} /> Download
            </button>
          </div>
          <div className="document-card">
            <FileText size={32} />
            <h4>Invoices</h4>
            <p>Payment history and receipts</p>
            <button className="btn-sm">
              <Download size={14} /> Download
            </button>
          </div>
          <div className="document-card">
            <FileText size={32} />
            <h4>Warranties</h4>
            <p>Product warranties and guarantees</p>
            <button className="btn-sm">
              <Download size={14} /> Download
            </button>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h3>Project Timeline & Milestones</h3>
        <div className="timeline">
          <div className="timeline-item completed">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Project Kick-off</h4>
              <p>Completed on Dec 1, 2024</p>
            </div>
          </div>
          <div className="timeline-item completed">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Design Phase Complete</h4>
              <p>Completed on Dec 15, 2024</p>
            </div>
          </div>
          <div className="timeline-item active">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Construction Phase</h4>
              <p>In progress - 65% complete</p>
            </div>
          </div>
          <div className="timeline-item pending">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Furniture Installation</h4>
              <p>Scheduled for Jan 15, 2025</p>
            </div>
          </div>
          <div className="timeline-item pending">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Final Handover</h4>
              <p>Scheduled for Feb 1, 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="communication-section">
        <h3>Team Communication</h3>
        <div className="message-list">
          <div className="message-item">
            <div className="avatar-small">JA</div>
            <div className="message-content">
              <strong>John Architect</strong>
              <p>Structural inspection completed successfully. No issues found.</p>
              <span className="message-time">2 hours ago</span>
            </div>
          </div>
          <div className="message-item">
            <div className="avatar-small">PM</div>
            <div className="message-content">
              <strong>Priya Manager</strong>
              <p>Furniture delivery scheduled for next week. Will confirm exact date soon.</p>
              <span className="message-time">5 hours ago</span>
            </div>
          </div>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Type your message..." />
          <button className="btn-sm">Send</button>
        </div>
      </div>

      <div className="support-section">
        <h3>Support & Maintenance</h3>
        <div className="support-grid">
          <div className="support-card">
            <h4>Report an Issue</h4>
            <p>Found a problem? Report it and we'll send our team to fix it.</p>
            <button className="btn-secondary">Create Ticket</button>
          </div>
          <div className="support-card">
            <h4>Maintenance Reminders</h4>
            <p>Schedule regular maintenance for your fixtures and furniture.</p>
            <button className="btn-secondary">Schedule</button>
          </div>
          <div className="support-card">
            <h4>FAQ & Care Guides</h4>
            <p>Learn how to care for your new space and materials.</p>
            <button className="btn-secondary">View Guides</button>
          </div>
        </div>
      </div>
    </div>
  );
}
