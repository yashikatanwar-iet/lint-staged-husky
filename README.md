**NOTION LINK**
https://www.notion.so/ESLint-Pre-commit-Hooks-using-Husky-lint-staged-20df5f32069b80f1b18bd1dec27b24bc

# **ESLint + Pre-commit Hooks using Husky & lint-staged**

## **✅ Phase 1: ESLint + Pre-commit Hooks using Husky & lint-staged**

**We'll first test this in a sample repo (e.g., `eslint-precommit-demo`), and then replicate in the actual project.**

---

### **✅ Step 1: Create a Sample Repo on GitHub**

1. **Go to GitHub → Click New Repository**
2. **Name it: `eslint-precommit-demo`**
3. **Initialize with `README.md`**
4. **Clone locally:**

```bash
bash
CopyEdit
git clone https://github.com/your-username/eslint-precommit-demo.git
cd eslint-precommit-demo

```

---

### **✅ Step 2: Initialize Node Project**

```bash
bash
CopyEdit
npm init -y

```

---

### **✅ Step 3: Install ESLint**

```bash
bash
CopyEdit
npm install eslint --save-dev

```

**Initialize config:**

```bash
ash
CopyEdit
npx eslint --init

```

**In the file package.json**

```json
 "keywords": [],
  "devDependencies": {
    "@eslint/js": "^9.28.0",
    "eslint": "^9.28.0",
    "eslint-config-prettier": "^10.1.5",
    "eslint-plugin-react": "^7.37.5",

```

**Take the demo file for checking the eslint error**

**Demo file Index.js**

**eslint command :- npx eslint index.js**

![image.png](attachment:99167489-b9a0-46d6-bd23-875e906880a6:image.png)

**auto fix by eslint for common :—- eslint . --fix for specific file npx eslint index.js —fix**

![image.png](attachment:5680346d-74b7-4a74-bdfc-a0fc6d301829:image.png)

![image.png](attachment:cfde33c8-8f54-4268-aa00-3e00c815eae7:image.png)

**like in these index.js file auto fix the double quote in the index.js**

### **✅ Step 5: Install Prettier (optional but recommended)**

```bash

npm install prettier eslint-config-prettier --save-dev

```

**Update `.eslintrc.json`:**

```json
json
CopyEdit
"extends": [
  "eslint:recommended",
  "prettier"
]

```

## **✅ 1. Install Prettier**

```bash

npm install --save-dev prettier

```

---

## **✅ 2. Create Prettier Config File**

**Create a `.prettierrc` file in the root of your project with preferred rules:**

```json
json
CopyEdit
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}

```

**You can also ignore files using `.prettierignore`, just like `.gitignore`:**

```
nginx
CopyEdit
node_modules
dist
build

```

---

## **✅ 3. Prettier Commands**

### **🔍 Check formatting without changing files:**

```bash
npx prettier . --check

```

### **✨ Format all files in the project:**

```bash

npx prettier . --write

```

> **Use this to apply Prettier formatting to all supported files (.js, .ts, .json, .css, etc.)**

### **✨ Format a specific file:**

```bash

npx prettier index.js --write

```

---

## **✅ 4. Combine ESLint + Prettier**

**If using ESLint and Prettier together, make sure:**

- **You have this in `.eslintrc.json`:**

```json
json
CopyEdit
"extends": [
  "eslint:recommended",
  "prettier"
]

```

![image.png](attachment:3334c342-eb0d-467d-ada5-f8f8dae48525:image.png)

**these file has unformat code so prettier should auto fix these command**

![image.png](attachment:77ca1894-873c-4c7c-a859-ad9f610c4d57:image.png)

**so here is auto format these code**

## **✅ Husky + lint-staged Setup (Step-by-Step)**

### **✅ 1. Install Husky & lint-staged**

```bash

npm install --save-dev husky lint-staged

```

---

### **✅ 2. Enable Husky in your project**

```bash
npx husky install

```

> **🔁 This creates a .husky/ folder in your root.**

---

### **✅ 3. Add to `package.json` script (optional but good practice)**

```json
json
CopyEdit
"scripts": {
  "prepare": "husky install"
}

```

**Then run:**

```bash

npm run prepare

```

---

### **✅ 4. Add a Pre-commit Hook**

```bash

npx husky add .husky/pre-commit "npx lint-staged"

```

---

### **✅ 5. Configure `lint-staged` in `package.json`**

**Add this:**

```json
json
CopyEdit
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "git add"
  ]
}

```

> **💡 This will auto-fix ESLint issues and re-stage the corrected files before committing.**

---

### **✅ 6. Try it Out 🎯**

1. **Edit a `.js` file with some ESLint errors.**
2. **Run:**

```bash

git add .
git commit -m "testing husky"

```

**✅ You’ll see Husky run `eslint --fix` via lint-staged before allowing the commit.**

---

### **🔄 To Check if Husky is Working**

**Run this:**

```bash

npx husky run pre-commit

```

![image.png](attachment:04f63e2b-4101-40ed-8f54-e67f55bac4bb:image.png)

**These index.js file when any error exist in the index.js file donot commit to git because of husky git hooks so when i modify and add to the github these thrown an error by using these husky commands and integration of husky**

![image.png](attachment:44c0c3b9-0922-4dc5-ac92-fc662c583ff6:image.png)

**when i resolve the error**

![image.png](attachment:a41537f4-251b-414d-8821-e942116c00ef:image.png)

![image.png](attachment:73377a13-e49c-4ca8-8043-52b2a096ca3d:image.png)

**these will add to my github commit to these**

### Install Dependencies

1. **Install ESLint and Plugins**:
   - **Install ESLint and Airbnb’s configuration for React and hooks:**

**cmd:-**npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks --legacy-peer-deps

1.  **Retry the Installation**:
    Run the installation command with --legacy-peer-deps:
    npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks --legacy-peer-deps

        1. **Install Husky and lint-staged**:
            - Install tools for Git hooks and staged file linting:

                `npm install --save-dev husky lint-staged`


        ### Step 3: Configure ESLint

        1. **Initialize ESLint**:
            - Run the ESLint setup wizard:

                `npx eslint --init`


        **Step 5: Configure lint-staged**
        1. **Create .lintstagedrc**:

            ◦ Configure lint-staged to run ESLint in check mode (no autofix) on staged JavaScript/TypeScript files.

        1. 1. **Create .lintstagedrc**:
            - ◦ Configure lint-staged to run ESLint in check mode (no autofix) on staged JavaScript/TypeScript files.

        ### Configure Husky

        1. **Initialize Husky**:
            - Set up Husky for Git hooks:

                `npx husky-init && npm install`

            - This creates a .husky directory with a sample pre-commit hook.
        2. **Update Pre-Commit Hook**:
            - Modify .husky/pre-commit to run lint-staged, which will execute ESLint on staged files.

        precommit file:-

        #!/usr/bin/env sh . "$(dirname -- "$0")/_/husky.sh" npx lint-staged

        ### Configure lint-staged

        1. **Create .lintstagedrc**:
            - Configure lint-staged to run ESLint in check mode (no autofix) on staged JavaScript/TypeScript files.

        File name:- .lintstagedrc.json

        ```
        {
             "*.{js,jsx,ts,tsx}": "eslint --max-warnings=0"
           }
        ```

        **Notes**

        - -max-warnings=0 ensures the commit fails if any ESLint warnings or errors are found.
        - Only *.{js,jsx,ts,tsx} files are linted, matching your React project.

        **Create Autofix Configuration**

        :

        - Create a separate .lintstagedrc.fix.json for the autofix command.

        .lintstagedrc.fix.json:-

        ```json
        {
             "*.{js,jsx,ts,tsx}": "eslint --fix"
           }
        ```

        ### Add Autofix Script

        1. **Update package.json**:
            - Add a script to run the autofix command on staged files.

        ```json
        {
             "scripts": {
               "lint:fix-staged": "lint-staged --config .lintstagedrc.fix.json"
             }
           }
        ```

        **Notes**

        :

        - The lint:fix-staged script uses the .lintstagedrc.fix.json config to apply fixes only to staged files.

        ### Test the Setup

        1. **Initialize Git (if not already done)**:

            bash

            CollapseWrapRun

            Copy

            `git init
            git add .
            git commit -m "Initial commit"`


        **Create a Test File**

        :

        - Create a sample React component with intentional ESLint errors, e.g., src/App.jsx

        these type of file structure;-

        ![image.png](attachment:2a0858e6-cda3-4da2-ac20-fd700f928ad1:image.png)

        ![image.png](attachment:bf2ccfd7-3a15-4aaa-99f7-cbc23894e9f8:image.png)

![image.png](attachment:4c1aaef2-18e7-4d17-a955-3b3035d24dd1:image.png)

![image.png](attachment:1057e428-b3ec-4dca-9db0-a6687eec3304:image.png)

![image.png](attachment:e4467144-29bd-4a1f-9395-5509df744440:image.png)

![image.png](attachment:a30539ac-f92d-4694-9a51-7c20a068f903:image.png)

- **Stage and Commit**:
  - Stage the file:
    `git add src/App.jsx`
  - Attempt to commit:
    `git commit -m "Add App component"`
  - **Expected Outcome**: The commit fails, and ESLint reports the no-console warning due to --max-warnings=0.
- **Fix Errors**:
  - Run the autofix command:
    `npm run lint:fix-staged`
  - **Expected Outcome**: ESLint fixes the no-console issue (if fixable) or reports non-fixable errors. The fixed file is updated but not re-staged.
  - Re-stage the fixed file:
    `git add src/App.jsx`
  - Commit again:
    `git commit -m "Add App component"`
  - **Expected Outcome**: The commit succeeds if all ESLint issues are resolved.

### Team Member Setup Steps

1. **Clone and Install**:

   `git clone <repository-url>
cd <repository-name>
npm install --legacy-peer-deps`

2. **Enable Husky**:

   `npx husky install`

3. **Test the Workflow**:
   - Create/edit a file (e.g., src/App.jsx) with an error (e.g., var x = 1;).
   - Stage and commit:
     `git add src/App.jsx
git commit -m "Test commit"`
   - Fix errors:
     `npm run lint:fix-staged
git add src/App.jsx
git commit -m "Test commit after fix"`

- **Check Staged Files Only** (already handled by git commit):
  `npx lint-staged`
- **Fix Staged Files Only**:
  `npm run lint:fix-staged`

### Different Scenarios and Solutions

### Different Scenarios and Solutions

Here are common scenarios team members might encounter, with commands and solutions to ensure smooth collaboration.

### Scenario 1: Team Member Wants to Check Errors for Their File

- **Situation**: A developer edited src/MyComponent.jsx and wants to check ESLint errors before staging.
- **Command**:
  `npx eslint src/MyComponent.jsx`
- **Solution**:
  - Review errors and fix manually or run:
    `npx eslint src/MyComponent.jsx --fix
npx prettier --write src/MyComponent.jsx`

### Scenario 2: Team Member’s Commit Fails

- **Situation**: git commit fails due to ESLint errors.
- **Command**:
  `npm run lint:fix-staged
git add .
git commit -m "Fixed linting issues"`
- **Solution**:
  - If errors persist (non-fixable), review ESLint output and fix manually.
  - Use npx eslint <file> to isolate issues.

### Scenario 3: Team Member Works on a Subset of Files

- **Situation**: With 100+ files, a developer only wants to lint their 5 changed files.
- **Command**:
  - Stage specific files:
    `git add src/file1.js src/file2.jsx`
  - Commit (automatically lints staged files):
    `git commit -m "Update components"`
  - Fix staged files:
    `npm run lint:fix-staged`
- **Solution**:
  - lint-staged ensures only staged files are processed, keeping performance fast.

Here are common scenarios team members might encounter, with commands and solutions to ensure smooth collaboration.

### Scenario 1: Team Member Wants to Check Errors for Their File

- **Situation**: A developer edited src/MyComponent.jsx and wants to check ESLint errors before staging.
- **Command**:
  `npx eslint src/MyComponent.jsx`
- **Solution**:
  - Review errors and fix manually or run:
    bash
    CollapseWrapRun
    Copy
    `npx eslint src/MyComponent.jsx --fix
npx prettier --write src/MyComponent.jsx`

### Scenario 2: Team Member’s Commit Fails

- **Situation**: git commit fails due to ESLint errors.
- **Command**:
  `npm run lint:fix-staged
git add .
git commit -m "Fixed linting issues"`
- **Solution**:
  - If errors persist (non-fixable), review ESLint output and fix manually.
  - Use npx eslint <file> to isolate issues.

### Scenario 3: Team Member Works on a Subset of Files

- **Situation**: With 100+ files, a developer only wants to lint their 5 changed files.
- **Command**:
  - Stage specific files:
    `git add src/file1.js src/file2.jsx`
  - Commit (automatically lints staged files)
    `git commit -m "Update components"`
  - Fix staged files:
    `npm run lint:fix-staged`
- **Solution**:
  - lint-staged ensures only staged files are processed, keeping performance fast.
