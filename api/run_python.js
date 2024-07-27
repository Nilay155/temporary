import { spawn } from 'child_process';
import path from 'path';
import gemini from './src/gen-ai/gemini.js';

// Path to the Python script
const pythonScriptPath = path.join(process.cwd(), 'python.py');

// Path to the image file
const imagePath = path.join(process.cwd(), 'download.jpeg');

// Spawn a child process to run the Python script
const pythonProcess = spawn('python', [pythonScriptPath, imagePath]);

pythonProcess.stdout.on('data', (data) => {
    const d = gemini(data.toString());
    
    console.log('Extracted Data:', d);
});

pythonProcess.stderr.on('data', (data) => {
    console.error('Error:', data.toString());
});

pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
});
