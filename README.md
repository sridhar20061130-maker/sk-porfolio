# Siddharthan S K — Blue & Pink Portfolio

A high-quality, responsive portfolio built with plain HTML, CSS and JavaScript.

## Folder structure

```text
siddharthan-portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── management-talent-test.jpg
    ├── resume.jpg
    ├── tallyessential-certificate.pdf
    └── financial-literacy-quiz.pdf
```

## Run in VS Code

1. Extract this folder.
2. Open the folder in VS Code.
3. Install the **Live Server** extension by Ritwick Dey.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The site should open in your browser.

No Node.js, npm or backend is required.

## Upload to GitHub

In the VS Code terminal:

```powershell
git init
git add .
git commit -m "Create Siddharthan portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/siddharthan-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repository URL with your GitHub repository.

## Deploy on Vercel

1. Sign in to Vercel with GitHub.
2. Click **Add New → Project**.
3. Import the `siddharthan-portfolio` GitHub repository.
4. Framework Preset: **Other**.
5. Root Directory: `./`
6. Build Command: leave empty.
7. Output Directory: leave empty.
8. Click **Deploy**.

Because this is a static HTML/CSS/JS website, Vercel does not need a build command.

## Important

Keep the `assets` folder in the GitHub repository. The certificate and resume buttons use those files.

## Source-based details used

The portfolio uses the supplied resume/certificate information, including:
- B.Com Professional Accounting, KPR College of Arts Science and Research
- Current CGPA 7.1
- TallyEssential Level 1, Grade B, certified 03-Oct-2024
- National Financial Literacy Quiz 2026 participation
- Online Management Talent Test participation
- Contact details shown in the supplied resume
