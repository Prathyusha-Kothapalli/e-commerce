# E-Commerce Developer Setup Guide

## Requirements
- Node.js v18+
- SQLite3

## Quick Start
\\\ash
npm install
npm run start
\\\
"@


# ==========================================
# 4. TASKFLOW (PRs 1 to 5)
# ==========================================
 = "c:\Users\HP\github based project\taskflow"
 = "Prathyusha-Kothapalli/task_flow"

Execute-PR -RepoPath  -GitHubRepo  
    -BranchName "feature/task-priority-labels" 
    -PRTitle "Add task priority levels and priority sorting" 
    -PRBody "Adds support for priority tags (Low, Medium, High, Urgent) and sorting functions." 
    -FilePath "\src\priorityManager.js" 
    -FileContent @"
const PRIORITIES = { LOW: 1, MEDIUM: 2, HIGH: 3, URGENT: 4 };

class PriorityManager {
    static sortTasksByPriority(tasks, ascending = false) {
        return [...tasks].sort((a, b) => {
            const pA = PRIORITIES[a.priority?.toUpperCase()] || 0;
            const pB = PRIORITIES[b.priority?.toUpperCase()] || 0;
            return ascending ? pA - pB : pB - pA;
        });
    }
}
if (typeof module !== 'undefined') module.exports = PriorityManager;