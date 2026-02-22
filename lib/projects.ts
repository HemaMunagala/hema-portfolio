export type CaseStudy = {
  problem: string;
  role: string;
  architecture: string[];
  keyWork: string[];
  impact: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: "Flagship" | "Supporting";
  oneLiner: string;
  stack: string[];
  highlights: string[];
  caseStudy?: CaseStudy; // optional for supporting projects
};

export const projects: Project[] = [
  {
    slug: "grit",
    name: "Geographic Roadway Inventory Management System (GRIT)",
    category: "Flagship",
    oneLiner:
      "Enterprise transportation platform with React UI, REST APIs, SQL Server stored procedures, and validated import workflows.",
    stack: ["React", "REST APIs", "SQL Server", "Stored Procedures"],
    highlights: [
      "Built data-driven UI modules connected to SQL-backed workflows",
      "Implemented validation rules + relational integrity safeguards",
      "Supported import and operational reporting flows",
    ],
    caseStudy: {
      problem:
        "Transportation asset data and operational workflows required reliable validation and consistent relational integrity across modules and imports.",
      role:
        "Built full-stack features across React UI, REST integrations, and SQL Server stored procedures, with focus on validation, data consistency, and production debugging.",
      architecture: [
        "React UI modules for data entry and workflow screens",
        "REST API layer to orchestrate business operations",
        "SQL Server database with stored procedures for validation + persistence",
        "Import workflows with checks to prevent bad data from entering the system",
      ],
      keyWork: [
        "Designed/updated stored procedures to enforce relational consistency",
        "Implemented validation logic for inputs and import pipelines",
        "Built UI components wired to APIs with predictable state flow",
        "Debugged production issues and ensured safe rollouts for data changes",
      ],
      impact: [
        "Reduced data inconsistencies through enforced validation rules",
        "Improved reliability of import workflows and operational reporting",
        "Faster debugging and safer updates via standardized procedures",
      ],
    },
  },
  {
    slug: "traffic-ingestion-db-sync",
    name: "Traffic Data Ingestion & Database Synchronization Platform",
    category: "Flagship",
    oneLiner:
      "Automated ATR/WIM/TCD ingestion using stored procedures, file processing, validation logic, and notifications.",
    stack: ["SQL Server", "Stored Procedures", "ETL", "Automation"],
    highlights: [
      "File-to-database ingestion pipeline with validation gates",
      "Stored procedure-driven sync and consistency checks",
      "Notifications for success/failure and data anomalies",
    ],
    caseStudy: {
      problem:
        "Traffic datasets arrived as files with inconsistent formats and needed reliable ingestion, validation, and synchronization into SQL Server for downstream reporting.",
      role:
        "Designed ingestion flows and database sync logic using stored procedures, validation rules, and automation hooks for reliable data movement.",
      architecture: [
        "File inputs (ATR/WIM/TCD) processed into staging",
        "Validation gates to catch schema/format issues early",
        "SQL Server stored procedures for upsert/sync and consistency checks",
        "Notifications for failures/anomalies to reduce silent data issues",
      ],
      keyWork: [
        "Built stored procedure patterns for sync/upsert workflows",
        "Added validation checks and error-handling paths",
        "Implemented logic for detecting new/changed data during sync",
        "Enabled notification triggers for ingestion outcomes",
      ],
      impact: [
        "More reliable ingestion with fewer manual interventions",
        "Improved trust in downstream reporting due to consistent sync logic",
        "Faster issue detection through automated notifications",
      ],
    },
  },
  {
    slug: "atspm-orchestration",
    name: "ATSPM Multi-Service Application Orchestration Platform",
    category: "Flagship",
    oneLiner:
      "Docker Compose orchestration of frontend, API, and database services for a multi-service app stack.",
    stack: ["Docker Compose", "API", "Database", "DevOps"],
    highlights: [
      "Standardized local environment with multi-service compose",
      "Reduced setup time and improved dev consistency",
      "Clear service boundaries for scalable deployment",
    ],
    caseStudy: {
      problem:
        "Multi-service applications had inconsistent local environments and brittle setup steps, slowing onboarding and increasing deployment surprises.",
      role:
        "Created Docker Compose-based orchestration to standardize development environments across services and reduce setup friction.",
      architecture: [
        "Docker Compose to orchestrate frontend + API + database services",
        "Environment variables for consistent configuration",
        "Service dependencies and health expectations documented in compose",
      ],
      keyWork: [
        "Defined compose services, ports, env vars, and dependencies",
        "Created repeatable local setup workflow for developers",
        "Aligned service startup order and documented run steps",
      ],
      impact: [
        "Reduced onboarding time with one-command startup",
        "More consistent environments across machines",
        "Fewer integration issues caused by configuration drift",
      ],
    },
  },
  {
    slug: "ai-navigator",
    name: "AI-Powered Travel Planning Platform (AI Navigator)",
    category: "Flagship",
    oneLiner:
      "Full-stack travel planner with AI itinerary generation, Firebase storage, and Places-based recommendations.",
    stack: ["React", "Firebase", "AI", "Google Places"],
    highlights: [
      "AI-generated itineraries based on user preferences",
      "Saved trips dashboard with auth + persistence",
      "Integrated recommendations and map-ready data",
    ],
    caseStudy: {
      problem:
        "Users needed fast, personalized travel itineraries with saved planning history and reliable recommendations in a clean product experience.",
      role:
        "Built the full-stack experience: UI flow, AI itinerary generation, Firebase persistence, and Places-based recommendations.",
      architecture: [
        "React frontend for inputs, itinerary view, and saved trips dashboard",
        "AI layer to generate structured itineraries from user preferences",
        "Firebase auth + Firestore for persistence",
        "Places-based recommendations to enrich trip plans",
      ],
      keyWork: [
        "Designed itinerary generation flow and output structure",
        "Implemented Firestore data model for saved trips",
        "Integrated recommendation sources into the UI",
        "Built dashboard UX for saved/previous trips",
      ],
      impact: [
        "Reduced planning time with instant itinerary generation",
        "Improved UX through saved trips and reusability",
        "More useful itineraries with recommendation enrichment",
      ],
    },
  },

  // Supporting (optional caseStudy)
  {
    slug: "traffic-recognition-edge-analytics",
    name: "Traffic Recognition & Edge-Based Video Analytics System",
    category: "Supporting",
    oneLiner:
      "Edge-capable vehicle analytics pipeline for detection, tracking, and traffic insights from video.",
    stack: ["YOLO", "Tracking", "Python", "Edge"],
    highlights: ["Vehicle detection + tracking", "Count/flow insights", "Edge deployment"],
  },
  {
    slug: "vehicle-image-classification-dashboard",
    name: "Interactive Vehicle Image Classification Dashboard",
    category: "Supporting",
    oneLiner:
      "Dashboard to review and classify vehicle imagery with fast filtering and clear labeling workflow support.",
    stack: ["React", "UI", "Data Review"],
    highlights: ["Review workflow", "Fast filtering", "Labeling support"],
  },
  {
    slug: "wim-data-transformation-migration",
    name: "WIM Data Transformation & Migration System",
    category: "Supporting",
    oneLiner:
      "Data transformation and migration pipeline for WIM datasets with validation checks and repeatable processing.",
    stack: ["SQL Server", "ETL", "Validation"],
    highlights: ["Transformation rules", "Migration workflow", "Validation gates"],
  },
  {
    slug: "crowd-sourcing-map-improvements",
    name: "Crowd Sourcing Map Improvements",
    category: "Supporting",
    oneLiner:
      "Workflow to collect, review, and apply map improvement inputs for cleaner geospatial data quality.",
    stack: ["Data Workflow", "Validation", "UI"],
    highlights: ["Input collection", "Review pipeline", "Quality improvement"],
  },
  {
    slug: "edge-based-vehicle-detection",
    name: "Edge-Based Vehicle Detection System",
    category: "Supporting",
    oneLiner:
      "Edge-deployed vehicle detection pipeline optimized for constrained hardware environments.",
    stack: ["YOLO", "Python", "Edge"],
    highlights: ["Optimized inference", "Edge deployment", "Video processing"],
  },
];