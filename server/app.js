import express from "express";
import { createReadStream, statSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/video", (req, res) => {
  const filePath = join(__dirname, "public", "video.mp4"); // change file name here
  const stat = statSync(filePath);
  const fileSize = stat.size;
  
  const range = req.headers.range;

  if (!range) {
    res.status(416).send("Requires Range header");
    return;
  }

  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

  if (start >= fileSize || end >= fileSize) {
    res.status(416).send("Range Not Satisfiable");
    return;
  }

  const chunkSize = (end - start) + 1;
  const fileStream = createReadStream(filePath, { start, end });

  const header = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": chunkSize,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, header);
  fileStream.pipe(res);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});