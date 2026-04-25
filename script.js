// Projects Data
const projectsData = [
    {
        title: "L&T Finance - Head of Risk Analytics",
        company: "L&T Finance",
        dates: "Dec 2023 – Present",
        role: "Head of Risk Analytics (Retail Risk & RCU)",
        description: "Standing up an enterprise-grade risk analytics function at one of India's largest NBFCs (~USD 11B retail book).",
        impact: [
            "Built central risk-analytics capability (data-mart, dashboards, governance, BI team)",
            "ML-based fraud detection improving early-detection rates by 20%",
            "Ensemble risk model spanning dealer, field-sales, and geographic scorecards",
            "BCBS 239 aligned data pipelines and reporting"
        ],
        technologies: ["Python", "SAS", "GCP", "Azure", "Tableau", "ML/AI"]
    },
    {
        title: "Axis Bank - Universal Underwriting Programme",
        company: "Axis Bank",
        dates: "Dec 2022 – Dec 2023",
        role: "Head of Alternate Data — Data Sciences (BIU)",
        description: "Led a bank-wide alternate-data programme feeding credit decisioning, KYC, and fraud engines.",
        impact: [
            "+25% new-to-bank acquisition efficiency",
            "−20% reduction in early-delinquency exposure",
            "Productionised 8 alternate-data assets",
            "Satellite-data signals for agri-customer risk profiling"
        ],
        technologies: ["Python", "GCP", "Tableau", "GenAI", "Account Aggregator API"]
    },
    {
        title: "Dhani Loans - Risk & Policy Build-out",
        company: "Dhani Loans & Services",
        dates: "Apr 2019 – Apr 2022",
        role: "Assistant General Manager — Risk Management",
        description: "Founded and scaled the Risk Management and Policy organisation from scratch.",
        impact: [
            "Founded risk org (team of 15) enabling survival through COVID",
            "Centralised KRI dashboards for CRO/CEO weekly visibility",
            "SMS-based alternate scoring for KYC-lite onboarding",
            "Led ~INR 200 Cr portfolio sale"
        ],
        technologies: ["Python", "R", "SAS", "SMS APIs", "Credit Bureau Integration"]
    },
    {
        title: "JPMorgan Chase - Fraud Risk Strategy",
        company: "JPMorgan Chase",
        dates: "May 2016 – Apr 2019",
        role: "Fraud Risk Strategy — Consumer & Business Banking",
        description: "Second Line of Defence for US Consumer Banking fraud across multiple channels.",
        impact: [
            "−15% digital fraud exposure reduction",
            "$1M/year reporting cost savings",
            "Fraud-attack-lifecycle forecasting methodology",
            "Visa partnership generating $1.0–1.5M/year"
        ],
        technologies: ["Tableau", "Python", "SQL", "SAS", "Statistical Forecasting"]
    },
    {
        title: "Westpac - Fraud Framework & Campaign Management",
        company: "Westpac (via TCS)",
        dates: "May 2014 – May 2016",
        role: "Senior Business Analyst — Consultant",
        description: "Risk analytics and campaign management consulting engagement.",
        impact: [
            "$10M annual fraud-loss reduction",
            "30% improvement in fraud-detection KPIs",
            "18% cross-sell revenue uplift",
            "$1M operational savings via digital adoption"
        ],
        technologies: ["SAS", "SQL", "Python", "Logistic Regression"]
    }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-title">${project.title}</div>
                <div class="project-role">${project.role}</div>
                <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.5rem;">${project.dates}</div>
            </div>
            <div class="project-body">
                <div class="project-description">${project.description}</div>
                <div class="project-impact">
                    <div class="project-impact-title">Key Achievements:</div>
                    <ul style="list-style: none; padding-left: 0; margin-top: 0.5rem;">
                        ${project.impact.map(item => `<li style="padding: 0.3rem 0; color: #333;">✓ ${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Update About Section
function updateAbout() {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.innerHTML = `
            <div class="container">
                <h2>About Me</h2>
                <div class="about-content">
                    <p>Accomplished risk analytics and digital transformation leader with 14+ years of global experience across retail banking, fintech, and management consulting. Proven record of building enterprise-scale credit risk, fraud, and portfolio analytics capabilities — delivering $10M+ in cumulative cost efficiencies and material uplifts in acquisition, underwriting, and fraud detection.</p>
                    <p>Hands-on across Python, SAS, GCP, Azure, AWS, Tableau, and Power BI, with working knowledge of EU regulatory frameworks (Basel III/IV, BCBS 239, GDPR, DORA, EBA guidelines, PSD2). Recognised for bridging business and technology, leading cross-functional teams of 15+, and engaging C-suite and regulatory stakeholders.</p>
                    <div class="about-highlights">
                        <div class="highlight">
                            <div class="highlight-icon">🎯</div>
                            <h3>Strategic Leadership</h3>
                            <p>Driving enterprise-scale risk and analytics capabilities with C-suite engagement</p>
                        </div>
                        <div class="highlight">
                            <div class="highlight-icon">🤖</div>
                            <h3>AI & ML Innovation</h3>
                            <p>Building intelligent fraud detection, credit scoring, and portfolio analytics</p>
                        </div>
                        <div class="highlight">
                            <div class="highlight-icon">📊</div>
                            <h3>Data Mastery</h3>
                            <p>Expert in cloud platforms (GCP, Azure, AWS) and BI tools (Tableau, Power BI)</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Update Contact Section
function updateContact() {
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.innerHTML = `
            <div class="container">
                <h2>Get In Touch</h2>
                <p>Open to relocation — Ireland / Netherlands / EU</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <h3>📧 Email</h3>
                        <a href="mailto:aceakant@gmail.com">aceakant@gmail.com</a>
                    </div>
                    <div class="contact-item">
                        <h3>📱 Phone</h3>
                        <a href="tel:+919769984956">+91 97699 84956</a>
                    </div>
                    <div class="contact-item">
                        <h3>💼 LinkedIn</h3>
                        <a href="https://linkedin.com/in/ajuhack" target="_blank">linkedin.com/in/ajuhack</a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    updateAbout();
    updateContact();
});