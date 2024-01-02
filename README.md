# The chosen-chat-room app

a personal project geared to learning websockets and real-time chats or updates

## Frontend

To run the front-end, you just need a browser. The front-end is a static HTML page that uses the backend API to send and receive messages.

#### Steps to run the front-end

- Open the front-end folder
- Click on the `index.html` file to open the app in your browser

## Backend

#### Installation

- Make sure you've `docker` installed on your machine

#### Running the app

- This app is containerized, so you can run it by running the following command in the root directory of the project

```bash
bash ./containerize.sh
```

This will build the app's docker image from DockerHub and run the container. You can then access the app at `http://localhost:3000`

## NOTES

- By default, the websocket server is running on port `3000` at a URL of `http://localhost:3000`
