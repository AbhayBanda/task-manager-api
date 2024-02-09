# Task Management API

This RESTful API will allow users to perform CRUD operations (Create, Read, Update, and Delete) on tasks. You can perform various operations such as retrieving all tasks, retrieving a single task by its ID, creating a new task, updating an existing task, and deleting a task by its ID.

## API Endpoints

### Retrieve all tasks

- **Endpoint:** `GET /tasks`
- **Description:** Retrieve a list of all tasks.

### Retrieve a single task by ID

- **Endpoint:** `GET /tasks/:id`
- **Description:** Retrieve a specific task by providing its ID as a parameter.

### Create a new task

- **Endpoint:** `POST /tasks`
- **Description:** Create a new task by sending the task details in the request body.

### Update an existing task by ID

- **Endpoint:** `PUT /tasks/:id`
- **Description:** Update an existing task by providing its ID as a parameter and sending the updated task details in the request body.

### Delete a task by ID

- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Delete a task by providing its ID as a parameter.

## Getting Started

Follow the steps below to set up and run the API locally:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbhayBanda/task-manager-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application

   ```bash
   npm start
   ```
