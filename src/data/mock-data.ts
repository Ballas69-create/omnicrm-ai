export const mockLeads = [
  { id: "1", name: "John Smith", company: "Acme Corp", email: "john@acme.com", phone: "+1 555-0101", status: "New", source: "Website", value: 25000, score: 85, assignedTo: "Sarah Wilson", createdAt: "2024-01-15" },
  { id: "2", name: "Emily Davis", company: "TechStart", email: "emily@techstart.com", phone: "+1 555-0102", status: "Contacted", source: "Referral", value: 45000, score: 72, assignedTo: "Mike Johnson", createdAt: "2024-01-14" },
  { id: "3", name: "Robert Chen", company: "GlobalTrade", email: "robert@globaltrade.com", phone: "+1 555-0103", status: "Qualified", source: "LinkedIn", value: 78000, score: 91, assignedTo: "Sarah Wilson", createdAt: "2024-01-13" },
  { id: "4", name: "Maria Garcia", company: "InnovateCo", email: "maria@innovateco.com", phone: "+1 555-0104", status: "Proposal", source: "Trade Show", value: 32000, score: 68, assignedTo: "David Brown", createdAt: "2024-01-12" },
  { id: "5", name: "James Wilson", company: "FutureTech", email: "james@futuretech.com", phone: "+1 555-0105", status: "Negotiation", source: "Website", value: 95000, score: 94, assignedTo: "Mike Johnson", createdAt: "2024-01-11" },
  { id: "6", name: "Lisa Anderson", company: "SmartSolutions", email: "lisa@smartsolutions.com", phone: "+1 555-0106", status: "New", source: "Google Ads", value: 18000, score: 55, assignedTo: "Sarah Wilson", createdAt: "2024-01-10" },
  { id: "7", name: "David Kim", company: "DataFlow", email: "david@dataflow.com", phone: "+1 555-0107", status: "Contacted", source: "Referral", value: 62000, score: 78, assignedTo: "David Brown", createdAt: "2024-01-09" },
  { id: "8", name: "Sarah Thompson", company: "CloudNine", email: "sarah@cloudnine.com", phone: "+1 555-0108", status: "Qualified", source: "Website", value: 41000, score: 82, assignedTo: "Mike Johnson", createdAt: "2024-01-08" },
];

export const mockCustomers = [
  { id: "1", name: "Acme Corporation", industry: "Technology", revenue: 2500000, status: "Active", contact: "John Smith", email: "john@acme.com", phone: "+1 555-0101", since: "2022-03-15", lastActivity: "2024-01-10" },
  { id: "2", name: "Global Manufacturing", industry: "Manufacturing", revenue: 8900000, status: "Active", contact: "Emily Davis", email: "emily@globalmfg.com", phone: "+1 555-0102", since: "2021-06-20", lastActivity: "2024-01-12" },
  { id: "3", name: "Urban Properties", industry: "Real Estate", revenue: 5200000, status: "Active", contact: "Robert Chen", email: "robert@urbanprops.com", phone: "+1 555-0103", since: "2023-01-10", lastActivity: "2024-01-08" },
  { id: "4", name: "HealthFirst Clinics", industry: "Healthcare", revenue: 3100000, status: "Active", contact: "Maria Garcia", email: "maria@healthfirst.com", phone: "+1 555-0104", since: "2022-09-05", lastActivity: "2024-01-14" },
  { id: "5", name: "FastTrack Logistics", industry: "Logistics", revenue: 7600000, status: "Active", contact: "James Wilson", email: "james@fasttrack.com", phone: "+1 555-0105", since: "2021-11-30", lastActivity: "2024-01-11" },
  { id: "6", name: "EduLearn Academy", industry: "Education", revenue: 1800000, status: "Inactive", contact: "Lisa Anderson", email: "lisa@edulearn.com", phone: "+1 555-0106", since: "2023-04-15", lastActivity: "2023-12-20" },
  { id: "7", name: "GreenEnergy Solutions", industry: "Energy", revenue: 4500000, status: "Active", contact: "David Kim", email: "david@greenenergy.com", phone: "+1 555-0107", since: "2022-07-22", lastActivity: "2024-01-09" },
  { id: "8", name: "SecureNet Systems", industry: "IT", revenue: 6200000, status: "Active", contact: "Sarah Thompson", email: "sarah@securenet.com", phone: "+1 555-0108", since: "2021-12-01", lastActivity: "2024-01-13" },
];

export const mockDeals = [
  { id: "1", name: "Acme Enterprise License", company: "Acme Corp", value: 125000, stage: "Closed Won", probability: 100, closeDate: "2024-01-15", owner: "Sarah Wilson" },
  { id: "2", name: "Global MFG Implementation", company: "Global Manufacturing", value: 280000, stage: "Negotiation", probability: 75, closeDate: "2024-02-28", owner: "Mike Johnson" },
  { id: "3", name: "Urban Props CRM Setup", company: "Urban Properties", value: 45000, stage: "Proposal", probability: 50, closeDate: "2024-02-15", owner: "David Brown" },
  { id: "4", name: "HealthFirst Integration", company: "HealthFirst Clinics", value: 95000, stage: "Discovery", probability: 25, closeDate: "2024-03-30", owner: "Sarah Wilson" },
  { id: "5", name: "FastTrack Fleet Module", company: "FastTrack Logistics", value: 180000, stage: "Qualification", probability: 35, closeDate: "2024-03-15", owner: "Mike Johnson" },
  { id: "6", name: "GreenEnergy Dashboard", company: "GreenEnergy Solutions", value: 65000, stage: "Closed Lost", probability: 0, closeDate: "2024-01-20", owner: "David Brown" },
  { id: "7", name: "SecureNet Security Suite", company: "SecureNet Systems", value: 210000, stage: "Negotiation", probability: 80, closeDate: "2024-02-10", owner: "Sarah Wilson" },
  { id: "8", name: "EduLearn Platform", company: "EduLearn Academy", value: 38000, stage: "Proposal", probability: 60, closeDate: "2024-02-20", owner: "Mike Johnson" },
];

export const mockTickets = [
  { id: "TK-001", subject: "Login issues on mobile app", customer: "Acme Corp", priority: "High", status: "Open", assignee: "Support Team A", created: "2024-01-15", category: "Technical" },
  { id: "TK-002", subject: "Billing discrepancy on invoice", customer: "Global Manufacturing", priority: "Medium", status: "In Progress", assignee: "Billing Team", created: "2024-01-14", category: "Billing" },
  { id: "TK-003", subject: "Feature request: Custom reports", customer: "Urban Properties", priority: "Low", status: "Open", assignee: "Product Team", created: "2024-01-13", category: "Feature Request" },
  { id: "TK-004", subject: "Data sync not working", customer: "HealthFirst Clinics", priority: "Critical", status: "Escalated", assignee: "Engineering", created: "2024-01-12", category: "Technical" },
  { id: "TK-005", subject: "Onboarding assistance needed", customer: "FastTrack Logistics", priority: "Medium", status: "Open", assignee: "Customer Success", created: "2024-01-11", category: "Onboarding" },
  { id: "TK-006", subject: "API rate limit exceeded", customer: "SecureNet Systems", priority: "High", status: "In Progress", assignee: "Support Team B", created: "2024-01-10", category: "Technical" },
];

export const mockProjects = [
  { id: "PRJ-001", name: "Website Redesign", client: "Acme Corp", progress: 75, status: "On Track", deadline: "2024-03-01", budget: 45000, spent: 32000, team: ["Sarah", "Mike", "Lisa"] },
  { id: "PRJ-002", name: "ERP Implementation", client: "Global Manufacturing", progress: 45, status: "At Risk", deadline: "2024-06-15", budget: 280000, spent: 150000, team: ["David", "Emily", "Robert"] },
  { id: "PRJ-003", name: "Mobile App Development", client: "FastTrack Logistics", progress: 90, status: "On Track", deadline: "2024-02-15", budget: 120000, spent: 108000, team: ["Mike", "James", "Lisa"] },
  { id: "PRJ-004", name: "CRM Customization", client: "Urban Properties", progress: 30, status: "On Track", deadline: "2024-04-30", budget: 65000, spent: 18000, team: ["Sarah", "Robert"] },
  { id: "PRJ-005", name: "Data Migration", client: "HealthFirst Clinics", progress: 60, status: "Delayed", deadline: "2024-02-28", budget: 35000, spent: 25000, team: ["David", "Emily"] },
];

export const mockInvoices = [
  { id: "INV-2024-001", customer: "Acme Corp", amount: 25000, status: "Paid", dueDate: "2024-01-15", paidDate: "2024-01-14", items: "Enterprise License - Annual" },
  { id: "INV-2024-002", customer: "Global Manufacturing", amount: 45000, status: "Pending", dueDate: "2024-02-01", paidDate: null, items: "Implementation Services" },
  { id: "INV-2024-003", customer: "Urban Properties", amount: 12000, status: "Overdue", dueDate: "2024-01-10", paidDate: null, items: "CRM Setup & Configuration" },
  { id: "INV-2024-004", customer: "FastTrack Logistics", amount: 18500, status: "Paid", dueDate: "2024-01-20", paidDate: "2024-01-18", items: "Fleet Module - Monthly" },
  { id: "INV-2024-005", customer: "SecureNet Systems", amount: 35000, status: "Pending", dueDate: "2024-02-15", paidDate: null, items: "Security Suite - Annual" },
  { id: "INV-2024-006", customer: "HealthFirst Clinics", amount: 8500, status: "Paid", dueDate: "2024-01-25", paidDate: "2024-01-23", items: "Integration Services" },
];

export const mockEmployees = [
  { id: "1", name: "Sarah Wilson", role: "Sales Manager", department: "Sales", status: "Active", email: "sarah@omnicrm.com", phone: "+1 555-0201", joinDate: "2021-03-15", avatar: "SW" },
  { id: "2", name: "Mike Johnson", role: "Account Executive", department: "Sales", status: "Active", email: "mike@omnicrm.com", phone: "+1 555-0202", joinDate: "2022-01-10", avatar: "MJ" },
  { id: "3", name: "David Brown", role: "Senior Developer", department: "Engineering", status: "Active", email: "david@omnicrm.com", phone: "+1 555-0203", joinDate: "2021-06-20", avatar: "DB" },
  { id: "4", name: "Emily Davis", role: "Product Manager", department: "Product", status: "Active", email: "emily@omnicrm.com", phone: "+1 555-0204", joinDate: "2022-04-01", avatar: "ED" },
  { id: "5", name: "Lisa Anderson", role: "Marketing Lead", department: "Marketing", status: "Active", email: "lisa@omnicrm.com", phone: "+1 555-0205", joinDate: "2022-08-15", avatar: "LA" },
  { id: "6", name: "Robert Chen", role: "Support Engineer", department: "Support", status: "On Leave", email: "robert@omnicrm.com", phone: "+1 555-0206", joinDate: "2023-02-01", avatar: "RC" },
  { id: "7", name: "James Wilson", role: "DevOps Engineer", department: "Engineering", status: "Active", email: "james@omnicrm.com", phone: "+1 555-0207", joinDate: "2023-05-15", avatar: "JW" },
  { id: "8", name: "Maria Garcia", role: "Customer Success", department: "Support", status: "Active", email: "maria@omnicrm.com", phone: "+1 555-0208", joinDate: "2023-07-01", avatar: "MG" },
];

export const mockActivities = [
  { id: "1", type: "call", title: "Call with John Smith", description: "Discussed enterprise license renewal", user: "Sarah Wilson", timestamp: "2024-01-15T10:30:00" },
  { id: "2", type: "email", title: "Email sent to Emily Davis", description: "Sent proposal for Global MFG implementation", user: "Mike Johnson", timestamp: "2024-01-15T09:15:00" },
  { id: "3", type: "meeting", title: "Meeting with Urban Properties", description: "CRM requirements gathering session", user: "David Brown", timestamp: "2024-01-14T14:00:00" },
  { id: "4", type: "task", title: "Complete project proposal", description: "Finalize proposal for HealthFirst integration", user: "Sarah Wilson", timestamp: "2024-01-14T11:00:00" },
  { id: "5", type: "note", title: "Updated lead score", description: "Robert Chen score updated to 91", user: "System", timestamp: "2024-01-13T16:45:00" },
  { id: "6", type: "deal", title: "Deal moved to Negotiation", description: "SecureNet Security Suite moved to negotiation stage", user: "Sarah Wilson", timestamp: "2024-01-13T13:20:00" },
];

export const mockRevenueData = [
  { month: "Jul", revenue: 145000, target: 150000 },
  { month: "Aug", revenue: 162000, target: 155000 },
  { month: "Sep", revenue: 158000, target: 160000 },
  { month: "Oct", revenue: 175000, target: 165000 },
  { month: "Nov", revenue: 192000, target: 170000 },
  { month: "Dec", revenue: 210000, target: 180000 },
  { month: "Jan", revenue: 198000, target: 185000 },
];

export const mockPipelineData = [
  { stage: "Discovery", count: 12, value: 480000 },
  { stage: "Qualification", count: 8, value: 320000 },
  { stage: "Proposal", count: 6, value: 540000 },
  { stage: "Negotiation", count: 4, value: 680000 },
  { stage: "Closed Won", count: 3, value: 425000 },
];
