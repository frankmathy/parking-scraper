# Wiesbaden Parking API

## Functionality

This is a simple server which exposes and API for the Wiesbaden Germany parking data which it fetches from a public website.

---

## Prerequisites

Here are instructions on how to build and run the Docker image for the Wiesbaden Parking API application.

Before you proceed, ensure you have the following installed on your system:

- [Docker](https://www.docker.com/get-started) (latest version recommended)
- A terminal or command-line interface

---

## Building the Docker Image

1. **Navigate to the Project Directory**  
    Open a terminal and navigate to the root directory of this project (where the `Dockerfile` is located):
   `cd /path/to/your/project`

2. **Build the Docker Image**  
   Use the following command to build the Docker image:
   `docker build -t parking-api .`

- `-t parking-api`: Tags the image with the name `parking-api`.
- `.`: Specifies that the `Dockerfile` in the current directory should be used.

3. **Verify the Image**  
   After building, you can verify that the image was created successfully:
   Look for an image named `parking-api` in the output.

---

## Running the Docker Container

1. **Run the Container**  
   Start a container from the built image using this command:
   `docker run -p 3000:3000 –name parking-api-container parking-api`

- `-p 3000:3000`: Maps port 3000 on your local machine to port 3000 inside the container.
- `--name parking-api-container`: Assigns a name to your container for easier management.
- `parking-api`: The name of your Docker image.

2. **Access the Application**  
   Once the container is running, you can access the Parking API at:
   `http://localhost:3000/api/parking`

---

## Stopping and Removing Containers

1. **Stop the Container**

To stop a running container:
`docker stop parking-api-container`

2. **Remove the Container**

To remove a stopped container:
`docker rm parking-api-container`

---

## Pushing to Docker Hub (Optional)

If you want to share your Docker image via Docker Hub:

1. Log in to Docker Hub:
   `docker login`

2. Tag your image:
   `docker tag parking-api /parking-api`

3. Push your image:
   `docker push /parking-api`

Replace `<your-dockerhub-username>` with your actual Docker Hub username.

---

## Troubleshooting

- **Port Already in Use**: If port 3000 is already in use, specify a different host port when running the container:
  docker run -p 8080:3000 –name parking-api-container parking-api

Access it at `http://localhost:8080/api/parking`.

- **Permission Issues**: Ensure you have sufficient permissions to run Docker commands or try running them with `sudo`.

---

## Additional Notes

- The application uses Node.js and requires internet access during build time to install dependencies.
- Modify or extend this file as needed for future updates or additional instructions.
