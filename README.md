> Documents of course will be move to (https://documents.aptech.io/docs/category/aptech-mern)

# ⭐ A. SETUP DEVELOPMENT ENVIROMENT

1. Nodejs: https://nodejs.org/en/ (Cài bản LTS)
2. Yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Git SCM: https://git-scm.com/download/
4. Visual Studio Code: https://code.visualstudio.com/Download
5. Cài đặt các Extensions cho Visual Studio Code
   - Auto Rename (Jun Han)
   - Auto Close Tag (Jun Han)
   - ESLint (Microsoft)
   - IntelliCode (Microsoft)
   - JavaScript (ES6) code snippets (charalampos karypidis)
   - ES7+ React/Redux/React-Native snippets (dsznajder)
   - npm Intellisense (Christian Kohler)
   - Prettier - Code formatter (Prettier)
   - TSLint (Microsoft)
   - Typescript React code snippets (infeng)
   - Vscode-styled-components (Julien Poissonnier)
6. Cài đặt các tiện ích cho Visual Studio Code:

   - Better Comments (Aaron Bond)
   - Color Highlight (Sergii N)
   - Icon: Material Icon Theme (Philipp Kief)
   - Theme: Dracula Official (Dracula Theme)

7. Các tài nguyên
   - Bootstrap: https://www.npmjs.com/package/bootstrap
     > Add index.js: import 'bootstrap/dist/css/bootstrap.min.css'
   - Avatars: https://pravatar.cc/
   - Icons: https://react-icons.github.io/react-icons/
   - Color:

     > https://flatuicolors.com/

     > https://ant.design/docs/spec/colors

     > https://mui.com/material-ui/customization/color/

   - Images:

     > https://unsplash.com/

     > https://pixabay.com/

# ⭐ B. REACT BASIC

## 1. Javascript ESNext

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/1.md)

## 2. React Basic

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/2.md)

## 3. React Hooks

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/3.md)

# ⭐ C. REACT ROUTER

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/4.md)

# ⭐ D. STATE MANAGEMENT WITH REDUX & SAGAS

[Xem chi tiết](https://github.com/ngothanhtung/reactjs-tutorials/blob/master/docs/5.md)

# ⭐ E. USING UI KIT WITH ANTD DESIGN & MUI

## [Xem chi tiết: Ant Design](https://ant.design/)

- 🌈 Enterprise-class UI designed for web applications.
- 📦 A set of high-quality React components out of the box.
- 🌻 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🌍 Internationalization support for dozens of languages.
- 🎨 Powerful theme customization in every detail.

## [Xem chi tiết: MUI](https://mui.com/)

- MUI offers a comprehensive suite of UI tools to help you ship new features faster.
- Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.


# GIT 
## Install
https://git-scm.com/downloads
- Check cài đăt thành công:
+ Window: open cmd -> git -v

MAC: 
- open terminal
- Install brew: https://docs.brew.sh/Installation
- Install git: brew install git
- Check git:  git -v

## Create repository github 
- Login: https://github.com/
- Tạo 1 repository

## Clone repository
- Open VScode
- Open folder code
- Open terminal vscode tại folder code
- Nhập: git clone <HTTPS của repository>

* Lưu ý: Cần phải kiểm soát chặt chẽ cấu trúc folder code.
- Repo bản thân tự tạo: dùng để code (code nhớ FORMAT)
- Repo document: Yêu cầu không thay đổi code. Chỉ dùng git pull để lấy tài liệu.

## Step git push code
- Lần đầu:
+ Khởi tạo git: git init
+ Config email : git config --global user.email '<email>'
+ Config username : git config --global user.name '<name>'
+ Add toàn bộ file change: git add .
+ Tạo commit mô tả: git commit -m 'homework1'
+ git push
- Những lần sau:
+ Add toàn bộ file change: git add .
+ Tạo commit mô tả: git commit -m 'homework1'
+ git push
#
git log —oneline
git reset ...
tạo branch: git checkout -b manhph
git add .
git commit -m 'ádadsdasd'
git commit —amend 

git reset --soft HEAD~
Git stash
Git stash apply
git cherry-pick —CODE

git checkout development
git pull origin development --rebase
git checkout manhph
git rebase development

nếu có conflic thì sửa
git add .
git rebase --continue
:wq
git push
git help -f


git push
git branch --show-current

git remote add origin <remote repository URL>

git branch -D …