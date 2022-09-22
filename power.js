window.onload = () => {
    globalThis.body = document.body
    globalThis.myNum = 6
}
menuBtn = () => {
    sideBarContainer = document.createElement('div')
    sideBarContainer.innerHTML = '<div class="sideBar"><button class="m_btn Collection">Collection</button><button class="m_btn Men">Men</button><button class="m_btn Women">Women</button><button class="m_btn About">About</button><button class="m_btn Contact">Contact</button></div><button class="sideBarRemover" onclick="sideBarRemvoer_btn()"></button>'
    sideBarContainer.setAttribute('class','sideBarContainer')
    body.appendChild(sideBarContainer)
}

function sideBarRemvoer_btn(){
    document.querySelector('.sideBarContainer').remove()
}
