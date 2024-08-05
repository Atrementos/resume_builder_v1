import '../css/style.css'
import profileImg from '/profile.png'
import figmaIcon from '/figma.png'
import photoshopIcon from '/Adobe_Photoshop.png'
import illustratorIcon from '/Adobe_Illustrator.png'
import PremiereIcon from '/Adobe_Premiere.png'
import notionIcon from '/Notion.png'
import googleMeetIcon from '/google_meet.png'
import zapierIcon from '/zapier.png'
import webflowIcon from '/webflow.png'
import framerIcon from '/framer.svg'
import wordpressIcon from '/wordpress.png'
import chatgptIcon from '/chatgpt.jpg'
import copilotIcon from '/copilot.jpg'
import midjourneyIcon from '/midjourney.png'

document.getElementById("image-showcase").innerHTML = `<img id="profile-image" src="${profileImg}" alt="Profile photo">`

const icons1 = [figmaIcon, photoshopIcon, illustratorIcon, PremiereIcon, notionIcon, googleMeetIcon]
let showcase1 = "<div class='icons-title'>design</div>"
for (const icon of icons1) {
    showcase1 = showcase1.concat(`<img src="${icon}">`)
}
document.getElementById("icons-showcase-1").innerHTML = showcase1

const icons2 = [zapierIcon, webflowIcon, framerIcon, wordpressIcon]
let showcase2 = "<div class='icons-title'>no-code</div>"
for (const icon of icons2) {
    showcase2 = showcase2.concat(`<img src="${icon}">`)
}
document.getElementById("icons-showcase-2").innerHTML = showcase2

const icons3 = [chatgptIcon, copilotIcon, midjourneyIcon]
let showcase3 = "<div class='icons-title'>artificial intelligence</div>"
for (const icon of icons3) {
    showcase3 = showcase3.concat(`<img src="${icon}">`)
}
document.getElementById("icons-showcase-3").innerHTML = showcase3

const resumeContainer = document.getElementById("main-grid")
// const pdf = new jsPDF()

const downloadButton = document.getElementById("download-button")
downloadButton.addEventListener('click', () => {
    const opt = {
        jsPDF: {
            unit: 'px',
            format: [resumeContainer.offsetWidth, resumeContainer.offsetHeight + 100]
        }
    }
    html2pdf().from(resumeContainer).set(opt).save("resume")
})