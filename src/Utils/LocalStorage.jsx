
  const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Homepage",
          "taskDescription": "Create the initial design for the company homepage.",
          "taskDate": "2026-08-16",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Update User Profile",
          "taskDescription": "Add profile editing functionality for users.",
          "taskDate": "2026-08-17",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Login Bug",
          "taskDescription": "Resolve the login validation issue reported by users.",
          "taskDate": "2026-08-14",
          "category": "Bug Fix"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Documentation",
          "taskDescription": "Prepare documentation for the new application features.",
          "taskDate": "2026-08-18",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Deploy Test Build",
          "taskDescription": "Deploy the latest build to the testing environment.",
          "taskDate": "2026-08-13",
          "category": "Deployment"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Dashboard",
          "taskDescription": "Build the main dashboard interface for the application.",
          "taskDate": "2026-08-16",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Database Cleanup",
          "taskDescription": "Remove outdated records and organize the database.",
          "taskDate": "2026-08-14",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "API Integration",
          "taskDescription": "Connect the frontend application with the employee API.",
          "taskDate": "2026-08-17",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create slides for the upcoming project presentation.",
          "taskDate": "2026-08-19",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Server Configuration",
          "taskDescription": "Configure the development server with the required settings.",
          "taskDate": "2026-08-12",
          "category": "DevOps"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Test Cases",
          "taskDescription": "Create test cases for the authentication system.",
          "taskDate": "2026-08-16",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Review Code",
          "taskDescription": "Review the latest code changes and provide feedback.",
          "taskDate": "2026-08-15",
          "category": "Code Review"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Performance Testing",
          "taskDescription": "Test application performance under high user load.",
          "taskDate": "2026-08-18",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Test Report",
          "taskDescription": "Document the results from the latest testing cycle.",
          "taskDate": "2026-08-19",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Automated Testing",
          "taskDescription": "Set up automated tests for the payment module.",
          "taskDate": "2026-08-11",
          "category": "Automation"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Marketing Plan",
          "taskDescription": "Prepare a marketing plan for the upcoming product launch.",
          "taskDate": "2026-08-16",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Social Media Content",
          "taskDescription": "Create social media posts for the next campaign.",
          "taskDate": "2026-08-17",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Competitor Research",
          "taskDescription": "Research competitor products and summarize the findings.",
          "taskDate": "2026-08-14",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Customer Survey",
          "taskDescription": "Prepare and send a survey to existing customers.",
          "taskDate": "2026-08-20",
          "category": "Research"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Email Campaign",
          "taskDescription": "Launch the scheduled promotional email campaign.",
          "taskDate": "2026-08-10",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Invoice System",
          "taskDescription": "Develop the invoice creation and management feature.",
          "taskDate": "2026-08-16",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Update Financial Report",
          "taskDescription": "Update the monthly financial report with recent data.",
          "taskDate": "2026-08-15",
          "category": "Finance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Payment Integration",
          "taskDescription": "Integrate the payment gateway into the application.",
          "taskDate": "2026-08-18",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Budget Planning",
          "taskDescription": "Prepare the budget plan for the upcoming quarter.",
          "taskDate": "2026-08-20",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Payment Report",
          "taskDescription": "Generate the payment report and verify all transactions.",
          "taskDate": "2026-08-12",
          "category": "Finance"
        }
      ]
    }
  ];



  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];



export const setLocalStorage = ()=>{
    
  localStorage.setItem('emmployees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))


}


export const getLocalStorage = ()=>{
    
  const employees =  JSON.parse(localStorage.getItem('employees'))
    const admin =  JSON.parse(localStorage.getItem('admin'))
  

    console.log(employees , admin);
    
     
}