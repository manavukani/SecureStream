# SecureStream

SecureStream is a simple video streaming application that demonstrates how to securely stream video content from a server to a client without allowing direct download of the video files.

## Importance of Using createReadStream in Backend
- Using `createReadStream` from the `fs` module of Node.js to stream video files to the client, prevents users from downloading the entire video content directly.
- Instead, the video is sent to the client in smaller chunks, making it challenging for users to download or save the complete video file.

## Installation

Follow these steps to run the project locally:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies for both the client and server:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Start the Express server:

   ```bash
   npm start
   ```

5. Start the React client:

   ```bash
   cd ../client
   npm start
   ```

6. Open your browser and visit `http://localhost:5173/` to view the SecureStream app.

## Technologies Used

- React.js
- Express.js
- Node.js
- `react-player` for video playback in the frontend

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## Contact

For any inquiries or feedback, feel free to get in touch with me.