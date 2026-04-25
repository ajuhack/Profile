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

// Skills Data
const skillsData = {
    "Risk & Credit": [
        "Credit Risk Modelling",
        "Scorecard & Rating Models",
        "IFRS 9 / ECL Frameworks",
        "Portfolio Management",
        "Fraud Analytics & ML Detection"
    ],
    "Leadership & Strategy": [
        "P&L and Team Leadership (15+)",
        "C-Suite & Board Engagement",
        "Regulatory Liaison (RBI, EBA, BCBS)",
        "Vendor & Partner Governance",
        "Change & Operating-Model Design"
    ],
    "Data, AI & Cloud": [
        "Python, SAS, SQL, R",
        "AI / ML, Generative AI, LLMs",
        "GCP, Azure, AWS",
        "Tableau, Power BI, Looker",
        "Data Governance & CoE Build-out"
    ],
    "Regulatory & Compliance": [
        "Basel III / IV",
        "BCBS 239 Risk Data Aggregation",
        "GDPR & Data Privacy",
        "DORA (Operational Resilience)",
        "EBA Guidelines, PSD2, MAS TRM"
    ],
    "Domain Expertise": [
        "Retail & Digital Lending",
        "Credit & Debit Cards",
        "Consumer & Corporate Banking",
        "Fintech Onboarding / KYC",
        "Alternate Data / Thin-File Credit"
    ],
    "Delivery": [
        "Agile & Scaled-Agile",
        "Jira, Confluence, SharePoint",
        "Programme & Budget Management",
        "Model Risk Management (MRM)",
        "QBR & Governance Forums"
    ]
};

// Experience Data
const experienceData = [
    {
        company: "L&T Finance",
        title: "Head of Risk Analytics (Retail Risk & RCU)",
        dates: "Dec 2023 – Present",
        description: "Leading enterprise-grade risk analytics at one of India's largest NBFCs. Building central data-mart, dashboards, and governance frameworks.",
        highlights: [
            "Cross-functional team leadership (15+)",
            "AI/ML fraud detection implementation",
            "BCBS 239 compliance and reporting",
            "Executive steering committees"
        ]
    },
    {
        company: "Axis Bank",
        title: "Head of Alternate Data — Data Sciences (BIU)",
        dates: "Dec 2022 – Dec 2023",
        description: "Led flagship Universal Underwriting programme with 25% NTB acquisition uplift and 8 production alternate-data assets.",
        highlights: [
            "Team leadership (8 DS + 4 DE)",
            "Data Centre of Excellence build-out",
            "Satellite imagery & account aggregator integration",
            "GenAI pilot for credit and marketing"
        ]
    },
    {
        company: "Dhani Loans & Services",
        title: "Assistant General Manager — Risk Management",
        dates: "Apr 2019 – Apr 2022",
        description: "Founded Risk Management and Policy organisation from scratch, scaling to 15 team members across credit, policy, and controls.",
        highlights: [
            "Built risk function during COVID",
            "CRO/CEO dashboard implementation",
            "Digital app integration (Aadhaar, UPI, NACH)",
            "INR 200 Cr portfolio restructuring"
        ]
    },
    {
        company: "JPMorgan Chase",
        title: "Fraud Risk Strategy — Consumer & Business Banking",
        dates: "May 2016 – Apr 2019",
        description: "Second Line of Defence rebuilding fraud MI and forecasting. Reduced fraud exposure by 15% and saved $1M/year.",
        highlights: [
            "Fraud forecasting methodology development",
            "Visa partnership ($1–1.5M/yr recoveries)",
            "KRI and diagnostic metrics framework",
            "US federal and international regulatory reporting"
        ]
    },
    {
        company: "TCS / Westpac Banking Corporation",
        title: "Senior Business Analyst — Consultant",
        dates: "May 2014 – May 2016",
        description: "Consulting on fraud analytics and campaign management. $10M fraud-loss reduction on 8B transactions.",
        highlights: [
            "Big-data analytics on 8 billion transactions",
            "Fraud rules framework (30% KPI lift)",
            "Predictive cross-sell model (18% uplift)",
            "Digital adoption programme ($1M savings)"
        ]
    }
];

// Load Projects
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-title">${project.title}</div>
                <div class="project-role">${project.role}</div>
                <div class="project-dates">${project.dates}</div>
            </div>
            <div class="project-body">
                <div class="project-description">${project.description}</div>
                <div class="project-impact">
                    <div class="project-impact-title">Key Achievements:</div>
                    <ul style="list-style: none; padding-left: 0;">
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

// Load Skills
function loadSkills() {
    // Insert skills section if it doesn't exist
    const projectsSection = document.querySelector('.projects');
    if (projectsSection && !document.querySelector('.skills')) {
        const skillsHtml = `
            <section class="skills" id="skills">
                <div class="container">
                    <h2>Core Competencies</h2>
                    <div class="skills-grid" id="skills-grid"></div>
                </div>
            </section>
        `;
        projectsSection.insertAdjacentHTML('afterend', skillsHtml);
    }

    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = Object.entries(skillsData).map(([category, skills]) => `
            <div class="skill-category">
                <h3>${category}</h3>
                <ul>
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
}

// Load Experience
function loadExperience() {
    // Insert experience section if it doesn't exist
    const skillsSection = document.querySelector('.skills');
    if (skillsSection && !document.querySelector('.experience')) {
        const experienceHtml = `
            <section class="experience" id="experience">
                <div class="container">
                    <h2>Professional Experience</h2>
                    <div class="experience-timeline" id="experience-timeline"></div>
                </div>
            </section>
        `;
        skillsSection.insertAdjacentHTML('afterend', experienceHtml);
    }

    const experienceTimeline = document.getElementById('experience-timeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = experienceData.map(exp => `
            <div class="experience-item">
                <div class="experience-header">
                    <div>
                        <div class="experience-company">${exp.company}</div>
                        <div class="experience-title">${exp.title}</div>
                        <div class="experience-dates">${exp.dates}</div>
                    </div>
                </div>
                <div class="experience-description">${exp.description}</div>
                <ul class="experience-points">
                    ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }
}

// Update Hero Section
function updateHero() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.innerHTML = `
            <h1>AJAY KANT</h1>
            <p class="hero-subtitle">Head of Risk Analytics | Credit Risk & Fraud Leadership | AI/ML & Digital Transformation</p>
            <p>14+ years of global experience across retail banking, fintech, and management consulting</p>
            <div class="hero-stats">
                <div class="stat">
                    <div class="stat-number">14+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat">
                    <div class="stat-number">$10M+</div>
                    <div class="stat-label">Cost Efficiency Delivered</div>
                </div>
                <div class="stat">
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Team Members Led</div>
                </div>
            </div>
            <a href="#projects" class="btn btn-primary">View My Work</a>
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
                <div style="margin-top: 3rem;">
                    <a href="mailto:aceakant@gmail.com" class="btn btn-secondary">Send Email</a>
                </div>
            </div>
        `;
    }
}

// Update About Section
function updateAbout() {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.innerHTML = `
            <div class="container">
                <h2>About Me</h2>
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
    updateHero();
    loadProjects();
    loadSkills();
    loadExperience();
    updateAbout();
    updateContact();
});
