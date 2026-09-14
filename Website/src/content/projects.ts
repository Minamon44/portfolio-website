import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "customer-churn",
    title: "Customer Churn Prediction for SaaS Platform",
    problem:
      "A B2B SaaS company was losing 15% of its customer base annually without early warning signals, resulting in $2.3M in preventable revenue loss.",
    data:
      "18 months of product usage logs (2.1M events), billing records (45K transactions), and support tickets (12K entries) from 8,200 active accounts.",
    method:
      "Engineered behavioral features from usage patterns, built gradient-boosted survival model with SHAP explanations, deployed real-time scoring pipeline.",
    findings:
      "Login frequency drop >40% in 14 days is the strongest churn predictor (SHAP value 0.31). Support ticket escalation within first 90 days doubles churn probability.",
    impact:
      "Reduced churn by 22% in pilot group, saving $506K ARR. Model identifies at-risk accounts 45 days before cancellation on average.",
    github: "https://github.com/alexchen/customer-churn",
    visualization:
      "SHAP summary plot showing feature importance for churn prediction",
  },
  {
    id: "demand-forecasting",
    title: "Demand Forecasting for Retail Inventory Optimization",
    problem:
      "A regional grocery chain with 34 stores was experiencing 12% waste from overstocking perishables and 8% stockouts on high-demand items.",
    data:
      "2 years of POS transaction data (18M records), weather feeds, local event calendars, and promotional schedules across 34 locations.",
    method:
      "Developed hierarchical time-series model with Prophet for base forecasts and XGBoost for residual correction, incorporating weather and event regressors.",
    findings:
      "Weather explains 34% of demand variance in fresh produce. Local events drive 2.8x demand spikes for snack categories. Promotional cannibalization reduces adjacent category sales by 15%.",
    impact:
      "Reduced waste by 28% and stockouts by 41%, improving gross margin by 3.2 percentage points ($1.8M annual impact).",
    github: "https://github.com/alexchen/demand-forecasting",
    visualization:
      "Forecast vs actual demand plot with 95% confidence intervals",
  },
  {
    id: "nlp-contract-analysis",
    title: "NLP-Powered Contract Risk Analysis",
    problem:
      "Legal teams were spending 6+ hours per contract manually identifying risk clauses, with inconsistent coverage across reviewers.",
    data:
      "2,400 annotated commercial contracts (450K clauses) with risk labels from senior legal counsel across 8 contract types.",
    method:
      "Fine-tuned BERT model for clause classification with active learning pipeline, built gradient-based attention visualization for explainability.",
    findings:
      "Model achieves 94% recall on high-risk clauses. Indemnification and limitation of liability clauses are most frequently missed by manual review (23% oversight rate).",
    impact:
      "Reduced contract review time from 6.2 hours to 1.8 hours per contract. Risk clause detection improved from 78% to 96% coverage.",
    github: "https://github.com/alexchen/nlp-contract-analysis",
    visualization:
      "Attention heatmap showing model focus on risk clause boundaries",
  },
  {
    id: "fraud-detection",
    title: "Real-Time Transaction Fraud Detection",
    problem:
      "An e-commerce platform was processing $4.2M in fraudulent transactions monthly with a rule-based system that flagged 60% of legitimate high-value orders.",
    data:
      "12 months of transaction logs (89M records), device fingerprints, user behavior sessions, and confirmed fraud labels from chargeback data.",
    method:
      "Built ensemble model combining isolation forests for anomaly detection with neural network classifier, deployed on streaming pipeline with <100ms latency requirement.",
    findings:
      "Device fingerprint anomalies predict fraud 3.2x more accurately than IP-based rules. Session behavioral features (mouse dynamics, navigation patterns) add 12% AUC improvement.",
    impact:
      "Reduced fraud losses by 67% ($2.8M monthly) while cutting false positives by 45%, improving customer experience for legitimate high-value purchases.",
    github: "https://github.com/alexchen/fraud-detection",
    visualization:
      "Precision-recall curve comparing model performance to baseline rules",
  },
];
