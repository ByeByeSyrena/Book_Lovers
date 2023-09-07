import fund1 from '../images/support-ua-block/01-fund-1.png';
import fund1x from '../images/support-ua-block/01-fund-2x.png';
import fund2 from '../images/support-ua-block/02-fund-1.png';
import fund2x from '../images/support-ua-block/02-fund-2x.png';
import fund3 from '../images/support-ua-block/03-fund-1.png';
import fund3x from '../images/support-ua-block/03-fund-2x.png';
import fund4 from '../images/support-ua-block/04-fund-1.png';
import fund4x from '../images/support-ua-block/04-fund-2x.png';
import fund5 from '../images/support-ua-block/05-fund-1.png';
import fund5x from '../images/support-ua-block/05-fund-2x.png';
import fund6 from '../images/support-ua-block/06-fund-1.png';
import fund6x from '../images/support-ua-block/06-fund-2x.png';
import fund7 from '../images/support-ua-block/07-fund-1.png';
import fund7x from '../images/support-ua-block/07-fund-2x.png';
import fund8 from '../images/support-ua-block/08-fund-1.png';
import fund8x from '../images/support-ua-block/08-fund-2x.png';
import fund9 from '../images/support-ua-block/09-fund-1.png';
import fund9x from '../images/support-ua-block/09-fund-2x.png';
const donateFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: fund1,
    retinaImg: fund1x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: fund2,
    retinaImg: fund2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: fund3,
    retinaImg: fund3x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: fund4,
    retinaImg: fund4x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: fund5,
    retinaImg: fund5x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: fund6,
    retinaImg: fund6x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: fund7,
    retinaImg: fund7x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: fund8,
    retinaImg: fund8x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: fund9,
    retinaImg: fund9x,
  },
];
const donateButton = document.querySelector('.donate-button');
const donateButtonUp = document.querySelector('.donate-button-up');
const donateFound = document.querySelector('.donate-funds-visible');
const container = document.querySelector('.donate-funds-list');
function creatHtml(array) {
  container.insertAdjacentHTML('beforeend', array);
}
function generateDonateFundsMarkup(array) {
  const isRetina = window.devicePixelRatio > 1.1;
  const markup = array
    .map((fund, index) => {
      const foundIndex = String(index + 1).padStart(2, '0');
      const foundImage = isRetina ? fund.retinaImg : fund.img;
      return `
          <li class="donate-fund">
            <span class="donate-index">${foundIndex}</span>
            <a href="${fund.url}" target="_blank" class='donate-item-link' crossorigin="anonymous" rel="noopener noreferrer nofollow" aria-label="${fund.title}">
            <img class="donate-img" src="${foundImage}" alt="${fund.title}" loading="lazy">
            </a>
          </li>
        `;
    })
    .join('');
  return creatHtml(markup);
}
generateDonateFundsMarkup(donateFunds);
// Button
donateButton.addEventListener('click', evetList1);
function evetList1 () {
  donateButton.style.display = 'none';
  donateButtonUp.style.display = 'block';
  donateFound.scrollTo({
    top: 10000,
    behavior: 'smooth',
  });
}
donateButtonUp.addEventListener('click', evenList2);
function evenList2 () {
  donateButtonUp.style.display = 'none';
  donateButton.style.display = 'block';
  donateFound.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
  
