# KanBan Board
Project Name: Kanban Board

The Kanban Board project is a Next.js v13 application built with Prisma and GraphQL, with a PostgreSQL database run through Docker. It is a real-time task management tool that visualizes workflow stages, allowing for effective project and team management.
Prerequisites

Ensure that you have the following installed on your system:

    Docker
    Node.js (preferably v14 or later)
    Yarn package manager
    Prisma CLI (npm install prisma -g)

Getting Started

Please follow these steps to get the project running on your local machine.

    Clone the repository:

    Run the following command in your terminal to clone the project repository:

    bash

git clone https://github.com/Ebenezr/kanban.git
cd kanban

Replace [your_username] with your GitHub username.

Install the project dependencies:

In the project directory, run the following command to install the necessary dependencies:

bash

yarn

Start the PostgreSQL Docker container:

Before running the application, you need to have a PostgreSQL instance running. The project includes a Docker configuration file for this. Use the following command to start the Docker container:

bash

docker-compose up -d

Run database migrations:

Before the application is run for the first time, the database schema needs to be set up. Use Prisma's migration tool to handle this:

bash

yarn prisma migrate dev

Run the application:

Finally, you can start the application with the following command:

bash

    yarn start

    The application will be available at http://localhost:3000.

Testing

    This project uses Jest as a testing framework. To run the tests, use the following command:

    bash

    yarn test

Building

    To create a production-ready build of the project, use the following command:

    bash

yarn build

You can then serve the built project using:

bash

    yarn serve

Contributing

If you'd like to contribute to this project, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.
License

This project is open-source and available under the MIT License.
Support

If you're having any problem, please raise an issue on GitHub and the maintainers will be happy to help.
Contact

If you have any questions about this project, feel free to reach out.
Happy Coding! 🚀
