Base44
ClipTube Downloader
ClipTube Downloader
Personal Workspace

एक आधुनिक, सुरक्षित और responsive Web Application बनाओ जिसका नाम हो “ClipTube Downloader”।

इस webapp का उद्देश्य यह है कि user किसी भी YouTube वीडियो का पूरी वीडियो नहीं बल्कि केवल उसका specific part (maximum 5 minutes) डाउनलोड कर सके, ताकि user कम data में सिर्फ जरूरी हिस्सा डाउनलोड कर सके।

यह webapp mobile friendly + fast + simple UI वाला होना चाहिए।

1️⃣ Main Function (Core Feature)

User को यह सुविधा दो:

User YouTube Video का URL paste करे
System automatically video fetch करे
Video preview दिखाए
User Start Time और End Time select करे
Maximum clip length 5 minutes तक allow हो
फिर user clip को download कर सके
2️⃣ Download Options

User को अलग-अलग format और quality के options दो:

🎥 Video Download Quality

User इन qualities में download कर सके:

• 144p • 240p • 360p • 480p • 720p • 1080p

🎧 Audio Only Download

User केवल audio भी डाउनलोड कर सके:

Formats:

• MP3 • M4A

Audio quality options:

• 64 kbps • 128 kbps • 192 kbps • 320 kbps

3️⃣ Video Clip Selection System

Video load होने के बाद UI में ये features हों:

• Video Player • Timeline slider • Start time input (hh:mm:ss) • End time input (hh:mm:ss)

User slider से clip select कर सके।

System automatically check करे:

• clip length ≤ 5 minutes • invalid time error show करे

4️⃣ Backend Logic

Backend में system ऐसा काम करे:

YouTube URL detect करे
Video metadata fetch करे
Available streams detect करे
Selected time range के अनुसार clip cut करे
Selected quality में encode करे
Download link generate करे
5️⃣ Suggested Tech Stack

AI को ये tech stack use करने के लिए बोलो:

Frontend

• React.js • Tailwind CSS • HTML5 Video Player • Responsive UI

Backend

• Node.js • Express.js

Video Processing

Use tools like:

• yt-dlp • FFmpeg

Flow:

YouTube Video → Download Stream → Trim → Encode → Download

6️⃣ Processing Logic Example

Backend को ऐसा logic implement करना चाहिए:

Step 1 yt-dlp से YouTube video stream fetch करो

Step 2 FFmpeg से selected part trim करो

Example command:

ffmpeg -ss STARTTIME -to ENDTIME -i input.mp4 -c copy output.mp4

Step 3 Selected quality में encode करो

Step 4 User को download file भेजो

7️⃣ UI Layout

Webapp का layout modern और minimal होना चाहिए।

Page Layout

Top Section

• Website Logo • Title: ClipTube Downloader

Middle Section

• YouTube URL Input Box • Fetch Video Button

Video Section

• Video Preview Player • Timeline Slider • Start / End Time Inputs

Download Section

Buttons:

• Download Video • Download Audio

Quality Dropdown

8️⃣ Extra Features

Webapp में ये smart features भी add करो:

⚡ Fast Mode

Fast clipping without re-encoding when possible.

📱 Mobile Friendly

Responsive design.

⏳ Progress Bar

Processing progress show करे।

📂 File Size Display

Download से पहले estimated size दिखाओ।

9️⃣ Safety & Limits

System abuse से बचाने के लिए:

• Max clip length = 5 minutes • Max file size = 200 MB • Rate limit = 5 downloads per hour per IP

🔟 Error Handling

User को clear errors दिखाओ:

• Invalid YouTube URL • Video private • Video unavailable • Clip length too long

11️⃣ Deployment Ready

AI को पूरा code generate करना चाहिए:

Frontend + Backend + Folder structure

Example:

frontend/

React app

backend/

Node server

ffmpeg integration

Also provide:

• Installation steps • Environment variables • Run commands

Example:

npm install npm start

12️⃣ UI Design Style

UI होना चाहिए:

• Dark + Light mode • Modern gradient buttons • Rounded UI • Smooth animations

13️⃣ Hosting

Deployment instructions भी दो:

Options:

• Vercel (frontend) • Render / Railway (backend)

14️⃣ Legal Notice

Website में disclaimer add करो:

“This tool is for personal use only. Users must respect YouTube’s terms of service and copyright rules.”

15️⃣ Future Upgrade Ready

Code scalable होना चाहिए ताकि future में ये features add हो सकें:

• Playlist clipping • Shorts downloader • 4K support • Login system • Cloud storage

Final Output:

AI को पूरा working webapp code, UI design, backend logic, download API, ffmpeg integration, और deployment instructions generate करने चाहिए।


Show more
8 hours ago


Base44 AI
Base44

I'll build a beautiful "ClipTube Downloader" UI for you. However, I need to be upfront about an important limitation:

Base44 platform doesn't support backend servers (Node.js/Express), FFmpeg, or yt-dlp. So I cannot build actual YouTube video downloading/trimming functionality. What I can build is a complete, stunning frontend UI that demonstrates the full user experience. For actual downloading, you'd need a separate backend service.

Let me build a polished, production-quality UI with all the features you described.

Plan:

Pages: Home (main downloader interface)
Components: Header, URLInput, VideoPlayer, TimelineSlider, DownloadOptions, ProgressBar, Footer
Design: Dark theme with purple/blue gradients, smooth animations, mobile-first responsive
Features: URL validation, time selection with 5-min limit, format/quality selection, error handling, file size estimation, legal disclaimer
Let me start building:

Wrote
entities/Download History
Wrote
globals
Now let me create all the components and the main page in parallel:

Wrote
cliptube/Header
Wrote
cliptube/URLInput
Wrote
cliptube/Video Player
Wrote
cliptube/Time Selector
Wrote
cliptube/Download Options
Wrote
cliptube/Processing Overlay
Wrote
cliptube/Video Info
Wrote
cliptube/Footer
Wrote
cliptube/Success Modal
Wrote
cliptube/Feature Cards
Now let me create the main page:

Wrote
Home Page
"ClipTube Downloader" बन गया है — dark/light theme, YouTube URL input, video preview, timeline slider, start/end time selection (max 5 min), video/audio quality options, file size estimate, processing animation, legal disclaimer, और mobile-responsive design सब include है। Note: Actual video downloading के लिए yt-dlp + FFmpeg वाला backend server अलग से setup करना होगा — यह UI demo fully functional दिखता है लेकिन real download backend के बिना possible नहीं है।

8 hours ago
Actual downloading requires a backend server with yt-dlp & FFmpeg integration.

an hour ago


Revert

Base44 AI
Base44

You're right, and I want to be fully transparent with you:

Base44 platform की limitations:

❌ Node.js / Express backend नहीं बना सकते
❌ yt-dlp install/run नहीं कर सकते
❌ FFmpeg execute नहीं कर सकते
❌ Server-side file processing नहीं हो सकती
❌ YouTube के servers से direct stream fetch नहीं हो सकती
Base44 केवल यह support करता है:

✅ React frontend
✅ Database (entities)
✅ AI/LLM integrations
✅ Email sending
✅ File uploads (images/docs)
Actual ClipTube Downloader बनाने के लिए आपको चाहिए:

Backend (अलग से deploy करें):
Node.js + Express
yt-dlp (YouTube download)
FFmpeg (video trimming)
Hosting:
Backend: Railway.app / Render.com / VPS
Frontend: Vercel / Netlify
मैं आपकी मदद कर सकता हूं:

🎨 UI/Frontend — Base44 पर beautiful interface (already built)
📋 Backend code — Node.js + FFmpeg का पूरा code text में दे सकता हूं जो आप अलग server पर deploy करें
🔗 API integration — जब आपका backend ready हो, उसे frontend से connect कर सकते हैं
क्या आप चाहते हैं कि मैं पूरा backend code (Node.js + yt-dlp + FFmpeg) text में provide करूं जिसे आप Railway/Render पर deploy कर सकें?

an hour ago
पूरा backend code (Node.js + yt-dip + FFmpeg) text में provide करूं जिसे आप Render पर deploy कर सकें?

44 minutes ago


Revert

Base44 AI
Base44

Here's the complete backend code for deploying on Render.com:

📁 Folder Structure
cliptube-backend/
├── server.js
├── package.json
├── .env.example
└── README.md
📄 package.json
{
  "name": "cliptube-backend",
  "version": "1.0.0",
  "description": "ClipTube Downloader Backend",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-rate-limit": "^7.1.5",
    "uuid": "^9.0.0",
    "ytdl-core": "^4.11.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
📄 server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}));

// Rate Limiter: 5 downloads per hour per IP
const downloadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'Rate limit exceeded. Max 5 downloads per hour.' },
});

// Temp directory for processing
const TEMP_DIR = path.join(os.tmpdir(), 'cliptube');
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

// ─── Helpers ───────────────────────────────────────────────────────────────────

// Validate YouTube URL
function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

// Convert hh:mm:ss or mm:ss to seconds
function timeToSeconds(time) {
  const parts = time.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0];
}

// Run a shell command and return a Promise
function runCommand(cmd, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args);
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', d => stdout += d.toString());
    proc.stderr.on('data', d => stderr += d.toString());
    proc.on('close', code => {
      if (code === 0) resolve(stdout.trim());
      else reject(new Error(stderr || `Process exited with code ${code}`));
    });
  });
}

// Cleanup temp files after 5 minutes
function scheduleCleanup(filePath) {
  setTimeout(() => {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }, 5 * 60 * 1000);
}

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ClipTube Backend is running ✅' });
});

// ── 1. Get Video Info ──────────────────────────────────────────────────────────
app.post('/api/video-info', async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL required' });

  const videoId = extractVideoId(url);
  if (!videoId) return res.status(400).json({ error: 'Invalid YouTube URL' });

  try {
    // Use yt-dlp to get video metadata as JSON
    const output = await runCommand('yt-dlp', [
      '--dump-json',
      '--no-playlist',
      url,
    ]);

    const data = JSON.parse(output);

    res.json({
      videoId,
      title: data.title,
      channel: data.uploader,
      duration: data.duration,        // in seconds
      thumbnail: data.thumbnail,
      views: data.view_count,
      availableFormats: (data.formats || [])
        .filter(f => f.vcodec !== 'none' || f.acodec !== 'none')
        .map(f => ({
          formatId: f.format_id,
          ext: f.ext,
          height: f.height,
          abr: f.abr,
          vcodec: f.vcodec,
          acodec: f.acodec,
        })),
    });
  } catch (err) {
    console.error('video-info error:', err.message);
    if (err.message.includes('Private video'))
      return res.status(403).json({ error: 'Video is private' });
    if (err.message.includes('not available'))
      return res.status(404).json({ error: 'Video not available' });
    res.status(500).json({ error: 'Failed to fetch video info' });
  }
});

// ── 2. Download Video Clip ─────────────────────────────────────────────────────
app.post('/api/download/video', downloadLimiter, async (req, res) => {
  const { url, startTime, endTime, quality } = req.body;

  // ── Validations ──
  if (!url || !startTime || !endTime || !quality)
    return res.status(400).json({ error: 'Missing required fields' });

  const videoId = extractVideoId(url);
  if (!videoId) return res.status(400).json({ error: 'Invalid YouTube URL' });

  const startSec = timeToSeconds(startTime);
  const endSec   = timeToSeconds(endTime);

  if (startSec >= endSec)
    return res.status(400).json({ error: 'Start time must be before end time' });

  if (endSec - startSec > 300)
    return res.status(400).json({ error: 'Clip cannot exceed 5 minutes' });

  // ── Quality map ──
  const qualityMap = {
    '144p':  'bestvideo[height<=144]+bestaudio/best[height<=144]',
    '240p':  'bestvideo[height<=240]+bestaudio/best[height<=240]',
    '360p':  'bestvideo[height<=360]+bestaudio/best[height<=360]',
    '480p':  'bestvideo[height<=480]+bestaudio/best[height<=480]',
    '720p':  'bestvideo[height<=720]+bestaudio/best[height<=720]',
    '1080p': 'bestvideo[height<=1080]+bestaudio/best[height<=1080]',
  };

  const formatSelector = qualityMap[quality] || qualityMap['720p'];
  const jobId          = uuidv4();
  const rawFile        = path.join(TEMP_DIR, `${jobId}_raw.mp4`);
  const outputFile     = path.join(TEMP_DIR, `${jobId}_clip.mp4`);

  try {
    // Step 1: Download full video with yt-dlp
    console.log(`[${jobId}] Downloading stream...`);
    await runCommand('yt-dlp', [
      '-f', formatSelector,
      '--merge-output-format', 'mp4',
      '-o', rawFile,
      '--no-playlist',
      url,
    ]);

    // Step 2: Trim with FFmpeg
    console.log(`[${jobId}] Trimming ${startTime} → ${endTime}...`);
    await runCommand('ffmpeg', [
      '-ss', String(startSec),
      '-to', String(endSec),
      '-i', rawFile,
      '-c', 'copy',       // Fast mode: no re-encode
      '-avoid_negative_ts', 'make_zero',
      '-y',
      outputFile,
    ]);

    // Check output file size (max 200 MB)
    const stats = fs.statSync(outputFile);
    const sizeMB = stats.size / (1024 * 1024);
    if (sizeMB > 200) {
      fs.unlinkSync(rawFile);
      fs.unlinkSync(outputFile);
      return res.status(400).json({ error: 'Output file exceeds 200 MB limit' });
    }

    // Step 3: Send file
    console.log(`[${jobId}] Sending file (${sizeMB.toFixed(1)} MB)...`);
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', `attachment; filename="cliptube_${quality}_${startTime.replace(/:/g,'-')}_${endTime.replace(/:/g,'-')}.mp4"`);
    res.setHeader('Content-Length', stats.size);

    const readStream = fs.createReadStream(outputFile);
    readStream.pipe(res);
    readStream.on('end', () => {
      scheduleCleanup(rawFile);
      scheduleCleanup(outputFile);
    });

  } catch (err) {
    console.error(`[${jobId}] Error:`, err.message);
    if (fs.existsSync(rawFile))    fs.unlinkSync(rawFile);
    if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
    res.status(500).json({ error: 'Processing failed: ' + err.message });
  }
});

// ── 3. Download Audio Clip ─────────────────────────────────────────────────────
app.post('/api/download/audio', downloadLimiter, async (req, res) => {
  const { url, startTime, endTime, format, quality } = req.body;

  if (!url || !startTime || !endTime || !format || !quality)
    return res.status(400).json({ error: 'Missing required fields' });

  const videoId = extractVideoId(url);
  if (!videoId) return res.status(400).json({ error: 'Invalid YouTube URL' });

  const startSec = timeToSeconds(startTime);
  const endSec   = timeToSeconds(endTime);

  if (startSec >= endSec)
    return res.status(400).json({ error: 'Start time must be before end time' });

  if (endSec - startSec > 300)
    return res.status(400).json({ error: 'Clip cannot exceed 5 minutes' });

  // Validate format
  if (!['mp3', 'm4a'].includes(format))
    return res.status(400).json({ error: 'Invalid audio format' });

  // Validate quality (kbps)
  if (!['64', '128', '192', '320'].includes(quality))
    return res.status(400).json({ error: 'Invalid audio quality' });

  const jobId      = uuidv4();
  const rawFile    = path.join(TEMP_DIR, `${jobId}_raw.webm`);
  const outputFile = path.join(TEMP_DIR, `${jobId}_clip.${format}`);

  try {
    // Step 1: Download audio only
    console.log(`[${jobId}] Downloading audio stream...`);
    await runCommand('yt-dlp', [
      '-f', 'bestaudio',
      '-o', rawFile,
      '--no-playlist',
      url,
    ]);

    // Step 2: Trim + convert with FFmpeg
    console.log(`[${jobId}] Trimming and converting to ${format} @ ${quality}kbps...`);
    const ffmpegArgs = [
      '-ss', String(startSec),
      '-to', String(endSec),
      '-i', rawFile,
      '-vn',                          // No video
      '-b:a', `${quality}k`,         // Audio bitrate
    ];

    if (format === 'mp3') {
      ffmpegArgs.push('-codec:a', 'libmp3lame');
    } else if (format === 'm4a') {
      ffmpegArgs.push('-codec:a', 'aac');
    }

    ffmpegArgs.push('-y', outputFile);
    await runCommand('ffmpeg', ffmpegArgs);

    // Check file size
    const stats = fs.statSync(outputFile);
    const sizeMB = stats.size / (1024 * 1024);

    // Step 3: Send file
    const mimeTypes = { mp3: 'audio/mpeg', m4a: 'audio/mp4' };
    res.setHeader('Content-Type', mimeTypes[format]);
    res.setHeader('Content-Disposition', `attachment; filename="cliptube_audio.${format}"`);
    res.setHeader('Content-Length', stats.size);

    const readStream = fs.createReadStream(outputFile);
    readStream.pipe(res);
    readStream.on('end', () => {
      scheduleCleanup(rawFile);
      scheduleCleanup(outputFile);
    });

  } catch (err) {
    console.error(`[${jobId}] Audio error:`, err.message);
    if (fs.existsSync(rawFile))    fs.unlinkSync(rawFile);
    if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
    res.status(500).json({ error: 'Audio processing failed: ' + err.message });
  }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ ClipTube Backend running on port ${PORT}`);
});
