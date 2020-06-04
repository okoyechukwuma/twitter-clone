//domelement
let mainPage = document.querySelector('.main-page');
let loginPage = document.querySelector('.login-page');
let middleContent = document.querySelector('.middle-content');
let btnTop = document.querySelector('.btn-top');
let newsFeedPage = document.querySelector('.feeds-page');
let loginModule = document.querySelector('.login-module');
let moduleX = document.querySelector('.login-module i');
let loginBtn = document.querySelector('.login-btn');
let postBtn = document.querySelector('.post-btn');
let moduleWrapper = document.querySelector('.module-wrapper');
let module = document.querySelector('.module');
let postModuleX = document.querySelector('.module-header i');
let postModuleBtn = document.querySelector('.module-header button');
let footerModulePlus = document.querySelector('.module-footer span');
let moduleInput = document.querySelector('.module-input');
let user = document.querySelector('.user a');
let user2 = document.querySelector('.user div');
let sideBar = document.querySelector('.side-bar');
let sideBarWrapper = document.querySelector('.side-bar-wrapper');
let sideBarHeader = document.querySelector('.side-bar-header i');
let toggle = document.querySelector('.toggle');
let circle = document.querySelector('.circle');
let darkElement1 = document.querySelectorAll('.dark-mode-1');
let darkElement2 = document.querySelectorAll('.dark-mode-2');
let light = document.querySelectorAll('.light-text');
let borders = document.querySelectorAll('.border');




//main page

let goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}


middleContent.addEventListener('click', e => {
    if (e.target.classList[1] === "main-btn") {
        goToLoginPage();
    }
})

btnTop.addEventListener('click', () => {
    let inputUserInfo = document.querySelector('.user-info');
    let inputPassword = document.querySelector('.password');

    // console.log(inputUserInfo.value);
    if (inputUserInfo.value !== "" && inputPassword.value !== "") {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }else{
        // alert('fields are empty');
        goToLoginPage();
        loginModule.style.display = 'block';
    }
});

moduleX.addEventListener('click', () => {
    loginModule.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
    let loginUserInfo = document.querySelector('.login-user-info');
    let loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== '' && loginPassword.value !== '') {
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }else{
        loginModule.style.display = 'block';
    }
});

// news feed page
// post module
postBtn.addEventListener('click', () => {
    module.style.display = 'block';
    moduleWrapper.classList.add('module-wrapper-display');
});

let changeOpacity = x => {
    postModuleBtn.style.opacity = x;
    footerModulePlus.style.opacity = x;
};

postModuleX.addEventListener('click', () => {
    module.style.display = 'none';
    moduleWrapper.classList.remove('module-wrapper-display');
    if (moduleInput.value !== '') {
        moduleInput.value = '';
        changeOpacity(.5);
    }
});

moduleInput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        changeOpacity(1);
    }
});

moduleInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        changeOpacity(.5);
    }
});

user.addEventListener('click', () => {
     sideBar.classList.add('side-bar-display');
     sideBarWrapper.classList.add('side-bar-wrapper-display');
});

user2.addEventListener('click', () => {
    sideBar.classList.add('side-bar-display');
    sideBarWrapper.classList.add('side-bar-wrapper-display');
});

sideBarHeader.addEventListener('click', () => {
    sideBar.classList.remove('side-bar-display');
     sideBarWrapper.classList.remove('side-bar-wrapper-display');
});
// dark mode
toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElement1).map((darkEl1) => {
        darkEl1.classList.toggle('dark-1');
    });
    for (let i = 0; i < darkElement2.length; i++) {
        const element = darkElement2[i];
        element.classList.toggle('dark-2');
    }
    Array.from(light).map((lightEl) => {
        lightEl.classList.toggle('light');
    });
    for (let i = 0; i < borders.length; i++) {
        const element = borders[i];
        element.classList.toggle('border-color');
    }
});


