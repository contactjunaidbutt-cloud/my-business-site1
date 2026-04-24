const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel,
        AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak, ExternalHyperlink, LevelFormat } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1F4E78" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2E5C8A" },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 }
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "4472C4" },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      },
      {
        reference: "numbers",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: {
          width: 12240,
          height: 15840
        },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // Title
      new Paragraph({
        children: [new TextRun({
          text: "The Complete Guide to Creating & Deploying a Website",
          bold: true,
          size: 40,
          color: "1F4E78"
        })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "From Claude to Live on the Web",
          size: 24,
          color: "666666",
          italics: true
        })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "A Step-by-Step Manual for Beginners",
          size: 24,
          color: "2E5C8A"
        })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 480 }
      }),

      // Table of Contents
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Table of Contents")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Introduction")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Prerequisites")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Part 1: Creating Your Website with Claude")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Part 2: Using Terminal (The Basics)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Part 3: Pushing Your Code to GitHub")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Part 4: Deploying to Vercel")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Part 5: Editing Your Site & Redeploying")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Troubleshooting & FAQ")]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Introduction
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Introduction")]
      }),

      new Paragraph({
        children: [new TextRun("Welcome! This guide will take you from zero experience to having a live, professional website on the internet. You will learn how to:")],
        spacing: { after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Create a beautiful website using Claude (AI)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Use Terminal (command line) to manage your code")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Use GitHub to store and manage your website code")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Deploy your website to Vercel for free")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Edit your website and update it live")]
      }),

      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 240 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "By the end of this guide, you will have a live URL (like https://my-site.vercel.app) that anyone in the world can visit!",
          italics: true,
          bold: true
        })],
        spacing: { after: 240 }
      }),

      // Prerequisites
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Prerequisites")]
      }),

      new Paragraph({
        children: [new TextRun("Before you start, make sure you have:")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("A Mac or Windows computer")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Access to Claude (claude.ai or Claude desktop app)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Git installed (comes pre-installed on Mac)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("A free GitHub account (github.com)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("A free Vercel account (vercel.com)")]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Part 1
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Part 1: Creating Your Website with Claude")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Step 1: Plan Your Website")]
      }),

      new Paragraph({
        children: [new TextRun("Before asking Claude to create anything, decide what kind of website you want. Examples include:")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Business/Service landing page")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Portfolio to showcase your work")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Blog or personal website")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Product landing page")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Step 2: Ask Claude to Build Your Site")]
      }),

      new Paragraph({
        children: [new TextRun("Go to Claude.ai and describe what you want. Example prompt:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: '"Create a professional business landing page for a marketing consulting company. Include a hero section, services, about us, and contact section. Use a modern, professional design with blue colors."',
          italics: true
        })],
        spacing: { before: 120, after: 120 }
      }),

      new Paragraph({
        children: [new TextRun("Claude will generate the code for your website. It will be in React format, which is perfect for Vercel.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Step 3: Get the Project Files")]
      }),

      new Paragraph({
        children: [new TextRun("Claude will create several files for you:")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("package.json (project settings)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("src/App.jsx (your website code)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("src/index.jsx (entry point)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("public/index.html (HTML shell)")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("And other configuration files")]
      }),

      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 240 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "Note: These files will automatically be saved in the outputs folder on your computer.",
          italics: true
        })]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Part 2
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Part 2: Using Terminal (The Basics)")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("What is Terminal?")]
      }),

      new Paragraph({
        children: [new TextRun("Terminal is a text-based interface where you give your computer commands. Instead of clicking buttons, you type commands. Don" + String.fromCharCode(8217) + "t worry " + String.fromCharCode(8212) + " we" + String.fromCharCode(8217) + "ll take it step by step!")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Opening Terminal on Mac")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Press Cmd + Space (opens Spotlight search)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Type: terminal")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Press Enter")]
      }),

      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 120 }
      }),

      new Paragraph({
        children: [new TextRun("A black window will open. This is Terminal! You" + String.fromCharCode(8217) + "ll see a prompt ending with %, like this:")],
        spacing: { after: 60 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "junaidbutt@Junaids-MacBook-Air ~ %",
          bold: true
        })],
        spacing: { after: 120 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Important Terminal Tips")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Copy and paste commands from this guide")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Always press Enter after pasting a command")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("If nothing happens after typing, press Enter")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("When entering a password, you won" + String.fromCharCode(8217) + "t see it appear " + String.fromCharCode(8212) + " that" + String.fromCharCode(8217) + "s normal")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("If stuck, press Ctrl + C to cancel and start over")]
      }),

      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 240 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Essential Terminal Commands")]
      }),

      new Paragraph({
        children: [new TextRun("cd = Change Directory (move to a folder)")]
      }),

      new Paragraph({
        children: [new TextRun("Example: cd ~/Downloads")],
        spacing: { after: 120 }
      }),

      new Paragraph({
        children: [new TextRun("ls = List (show files in current folder)")]
      }),

      new Paragraph({
        children: [new TextRun("pwd = Print Working Directory (show where you are)")]
      }),

      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 240 }
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Part 3
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Part 3: Pushing Your Code to GitHub")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("What is GitHub?")]
      }),

      new Paragraph({
        children: [new TextRun("GitHub is a website where developers store and manage code. Think of it like Google Drive, but for code. It keeps track of changes and lets you access your code from anywhere.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Step 1: Create a GitHub Account")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Go to github.com")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click Sign Up")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Enter your email, create a password, choose a username")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Verify your email")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Step 2: Create a Repository")]
      }),

      new Paragraph({
        children: [new TextRun("A " + String.fromCharCode(8220) + "repository" + String.fromCharCode(8221) + " is a folder on GitHub where your code lives.")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Sign in to GitHub")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click the + icon (top right)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click " + String.fromCharCode(8220) + "New repository" + String.fromCharCode(8221))]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Name: my-business-site (or your preferred name)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Description: My business landing page")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click " + String.fromCharCode(8220) + "Create repository" + String.fromCharCode(8221))]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        children: [new TextRun({
          text: "Important: Copy and save the repository URL (it looks like https://github.com/YOUR-USERNAME/my-business-site.git)",
          italics: true
        })],
        spacing: { after: 240 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Step 3: Initialize Git and Push Your Code")]
      }),

      new Paragraph({
        children: [new TextRun("Git is the tool that tracks changes to your code. Follow these steps exactly, one at a time:")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.1: Navigate to Your Project")]
      }),

      new Paragraph({
        children: [new TextRun("Open Terminal and copy this command (your actual path will be shown by Claude):")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "cd /Users/[YOUR-USERNAME]/Library/Application\\ Support/Claude/local-agent-mode-sessions/.../outputs",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({
        children: [new TextRun("Replace [YOUR-USERNAME] with your actual username. Press Enter.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.2: Initialize Git")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste, then press Enter:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git init",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({
        children: [new TextRun("You should see: " + String.fromCharCode(8220) + "Initialized empty Git repository" + String.fromCharCode(8221))]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.3: Configure Git with Your Info")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste (use your actual name and email):")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git config user.name \"Your Name\"",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git config user.email \"your-email@example.com\"",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.4: Stage Your Files")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git add .",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({
        children: [new TextRun("(The dot means " + String.fromCharCode(8220) + "all files" + String.fromCharCode(8221) + ")")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.5: Commit Your Code")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git commit -m \"Initial commit - business landing page\"",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.6: Add GitHub as Remote")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste (use YOUR repository URL from Step 2):")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git remote add origin https://github.com/YOUR-USERNAME/my-business-site.git",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.7: Set Main Branch")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git branch -M main",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Step 3.8: Push to GitHub")]
      }),

      new Paragraph({
        children: [new TextRun("Copy and paste:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git push -u origin main",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({
        children: [new TextRun("Terminal will ask for your GitHub username and a Personal Access Token:")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Username: Enter your GitHub username")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Password: You need a Personal Access Token")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Creating a Personal Access Token")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Go to github.com and sign in")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click your profile icon (top right) → Settings")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click Developer settings → Personal access tokens → Tokens (classic)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click Generate new token")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Name: my-business-site")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Expiration: 90 days (or longer)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Check the box next to repo")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click Generate token and copy it (you" + String.fromCharCode(8217) + "ll only see it once!)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Paste the token as the password in Terminal")]
      }),

      new Paragraph({
        children: [new TextRun("")],
        spacing: { after: 240 }
      }),

      new Paragraph({
        children: [new TextRun({
          text: "Success! You should see a message like: [new branch] main → main. Your code is now on GitHub!",
          bold: true,
          color: "70AD47"
        })]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Part 4
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Part 4: Deploying to Vercel")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("What is Vercel?")]
      }),

      new Paragraph({
        children: [new TextRun("Vercel is a platform that takes your code from GitHub and makes it live on the internet. It" + String.fromCharCode(8217) + "s free, fast, and perfect for React websites!")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Deployment Steps")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Go to vercel.com")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click Sign Up")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click " + String.fromCharCode(8220) + "Continue with GitHub" + String.fromCharCode(8221))]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Authorize Vercel to access your GitHub account")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("You" + String.fromCharCode(8217) + "ll see your repositories. Click " + String.fromCharCode(8220) + "Import" + String.fromCharCode(8221) + " next to my-business-site")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click Deploy")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Wait 1-2 minutes for Vercel to build and deploy")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("You" + String.fromCharCode(8217) + "ll see " + String.fromCharCode(8220) + "Congratulations! Your site is live!" + String.fromCharCode(8221))]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Click the URL to visit your live website!")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        children: [new TextRun({
          text: "Your website is now live at a URL like: https://my-business-site.vercel.app",
          bold: true,
          color: "70AD47"
        })]
      }),

      new Paragraph({
        children: [new TextRun("Share this URL with anyone and they can visit your website!")]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Part 5
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Part 5: Editing Your Site & Redeploying")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("The Beautiful Part: Auto-Deployment")]
      }),

      new Paragraph({
        children: [new TextRun("Vercel is " + String.fromCharCode(8220) + "smart" + String.fromCharCode(8221) + " " + String.fromCharCode(8212) + " whenever you push new code to GitHub, Vercel automatically rebuilds and deploys your website. No extra steps needed!")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("How to Edit Your Website")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Open the files in your outputs folder")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Find src/App.jsx (your main website file)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Edit the text, colors, or structure")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Save your changes")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Push your changes to GitHub (see next section)")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Vercel automatically deploys your updated site!")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("How to Push Changes to GitHub")]
      }),

      new Paragraph({
        children: [new TextRun("After editing your files, follow these steps in Terminal:")]
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Navigate to your project folder:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "cd /Users/[YOUR-USERNAME]/Library/Application\\ Support/Claude/local-agent-mode-sessions/.../outputs",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Stage your changes:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git add .",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Commit your changes:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git commit -m \"Updated website content\"",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 120 }
      }),

      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        children: [new TextRun("Push to GitHub:")]
      }),

      new Paragraph({
        children: [new TextRun({
          text: "git push",
          bold: true,
          color: "C00000"
        })],
        spacing: { before: 60, after: 60 }
      }),

      new Paragraph({
        children: [new TextRun("Enter your GitHub username and Personal Access Token (same as before)")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 120 } }),

      new Paragraph({
        children: [new TextRun({
          text: "That" + String.fromCharCode(8217) + "s it! Check Vercel in 1-2 minutes and your updated site will be live.",
          bold: true,
          italics: true
        })]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Troubleshooting
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Troubleshooting & FAQ")]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Q: Password authentication is not supported for Git operations")]
      }),

      new Paragraph({
        children: [new TextRun("A: GitHub no longer accepts passwords. You must use a Personal Access Token. See " + String.fromCharCode(8220) + "Creating a Personal Access Token" + String.fromCharCode(8221) + " in Part 3.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 180 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Q: Terminal is frozen/stuck")]
      }),

      new Paragraph({
        children: [new TextRun("A: Press Ctrl + C to cancel. Then try the command again. If it keeps happening, close Terminal (red X) and reopen it.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 180 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Q: How do I change the website name/colors?")]
      }),

      new Paragraph({
        children: [new TextRun("A: Edit src/App.jsx. Find the text you want to change and replace it. For colors, search for color names like " + String.fromCharCode(8220) + "blue-600" + String.fromCharCode(8221) + " and replace them.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 180 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Q: How long does deployment take?")]
      }),

      new Paragraph({
        children: [new TextRun("A: Usually 1-2 minutes. You can watch the progress on Vercel" + String.fromCharCode(8217) + "s website.")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 180 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Q: Can I use a custom domain instead of vercel.app?")]
      }),

      new Paragraph({
        children: [new TextRun("A: Yes! Go to Vercel, click your project, then Settings → Domains. You can add a custom domain (costs extra).")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 180 } }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Q: I broke something " + String.fromCharCode(8212) + " how do I undo?")]
      }),

      new Paragraph({
        children: [new TextRun("A: You can revert to a previous version on GitHub. Go to your repository on GitHub, find the commit history, and click on a previous commit to restore it.")]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Summary
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Summary & Next Steps")]
      }),

      new Paragraph({
        children: [new TextRun("Congratulations! You now know how to:")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Create a website using Claude")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Use Terminal to manage code")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Push code to GitHub")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Deploy to Vercel")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Edit and redeploy your website")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        children: [new TextRun("You have a live website that anyone can visit. From here, you can:")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Customize the design further")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Add your own content")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Add a custom domain")]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun("Build more websites using the same process")]
      }),

      new Paragraph({ children: [new TextRun("")], spacing: { after: 240 } }),

      new Paragraph({
        children: [new TextRun({
          text: "Happy building! You" + String.fromCharCode(8217) + "re now a web developer. " + String.fromCharCode(128512),
          italics: true,
          size: 24
        })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/sessions/funny-sleepy-bohr/mnt/outputs/Complete_Website_Deployment_Guide.docx", buffer);
  console.log("Document created successfully!");
});
