@echo off
title Project Management Tool

echo Starting MongoDB Backend Server...
cd E:\project-management-tool
start cmd /k "npm run dev"

echo Starting React Frontend Server...
cd E:\project-management-tool\client
start cmd /k "npm start"

echo Both servers are running. Press any key to exit this window...
pause >nul
