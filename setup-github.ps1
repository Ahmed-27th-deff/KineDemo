#!/usr/bin/env powershell

# GitHub Repository Setup Script for kinedemo Flutter App
# Run this script after creating your GitHub repository

Write-Host "================================"
Write-Host "AI Fitness Coach - GitHub Setup"
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Get GitHub username
$username = Read-Host "Enter your GitHub username"
$repoName = "kinedemo"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: GitHub username cannot be empty" -ForegroundColor Red
    exit 1
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Setting up repository:" -ForegroundColor Yellow
Write-Host "  Remote URL: $repoUrl"
Write-Host ""

# Change to project directory
cd c:\Users\Ahmed\StudioProjects\kinedemo

# Add remote
Write-Host "Adding remote repository..." -ForegroundColor Cyan
git remote add origin $repoUrl

# Rename branch to main
Write-Host "Renaming branch to 'main'..." -ForegroundColor Cyan
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host ""
Write-Host "================================"
Write-Host "✅ Successfully pushed to GitHub!"
Write-Host "================================" -ForegroundColor Green
Write-Host ""
Write-Host "View your repository at:"
Write-Host "  https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Review your repository on GitHub"
Write-Host "  2. Add a better README if needed"
Write-Host "  3. Add GitHub Actions for CI/CD (optional)"
Write-Host "  4. Create Releases for APK builds"
Write-Host ""
