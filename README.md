# Data Alchemist

AI-powered CSV/Excel data processor with validation, rule creation, and natural language search.

## Features

- **Data Upload**: CSV/XLSX file processing for clients, workers, and tasks
- **Real-time Validation**: 12+ validation rules with error detection
- **AI Search**: Natural language data queries
- **Rule Builder**: Create business rules manually or with AI
- **Priority System**: Configure allocation weights
- **Export**: Clean data and rules configuration

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

## Usage

1. **Upload Data**: Go to "Data Upload" tab and upload CSV files
2. **View Data**: Check "Data Grid" tab to see and edit your data
3. **Create Rules**: Use "Rules" tab to build business rules
4. **Set Priorities**: Configure weights in "Priorities" tab
5. **Export**: Download clean data from "Export" tab

## Sample Data

Use the provided sample files in `/samples/`:
- `clients.csv` - Client data with priorities
- `workers.csv` - Worker skills and availability  
- `tasks.csv` - Task requirements

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui

## Deployment

\`\`\`bash
npm run build
vercel --prod
\`\`\`

## Assignment Completion

✅ All milestones completed (Milestone 1, 2, and 3)  
✅ 12+ validation rules implemented  
✅ AI-powered features throughout  
✅ Responsive design for all devices
