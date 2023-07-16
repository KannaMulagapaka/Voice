const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [{
        image: 'https://tse3.mm.bing.net/th?id=OIF.EAjSZ0L4cc5cctOlHCEmaA&pid=Api&P=0&h=180',
        text: "Global Star Ram Charan"
    },
    {
        image: 'https://tse4.mm.bing.net/th?id=OIP.9ujj_LR2qkaZngdEQvHSRQHaEH&pid=Api&P=0&h=180',
        text: "Mega Star Chiranjeevi"
    },
    {
        image: 'https://tse2.mm.bing.net/th?id=OIP.AYTde61UTMIU8o8pBjsdawHaEK&pid=Api&P=0&h=180',
        text: "Power Star Pawan kalyan"
    },
    {
        image: 'https://tse4.mm.bing.net/th?id=OIP.JZ9K71bc1nMBQhPn2MF5CAHaEK&pid=Api&P=0&h=180',
        text: "Young Rebel Star Prabhas"
    },
    {
        image: 'https://tse4.mm.bing.net/th?id=OIP.Yphqf1ujv82bSzY9ED82QwHaEK&pid=Api&P=0&h=180',
        text: "Stylish Star Allu Arjun"
    },
    {
        image: 'https://tse3.mm.bing.net/th?id=OIP.Cq5_cmJBTDCE5teovvLP-gHaEK&pid=Api&P=0&h=180',
        text: "nandamuri taraka rama rao"
    },
    {
        image: 'https://tse2.mm.bing.net/th?id=OIP.nUQwPyMi3CmmVC_nhjABjwHaEK&pid=Api&P=0&h=180',
        text: "Mass Maharaj Ravi Teja"
    },
    {
        image: 'https://tse1.mm.bing.net/th?id=OIP.bLieQjP1SY7JMtPPoIkeJwHaEK&pid=Api&P=0&h=180',
        text: "Natural Star Nani"
    },
    {
        image: 'https://tse4.mm.bing.net/th?id=OIP.TCuOhzAaUoWYjlozcWWw7gHaEK&pid=Api&P=0&h=180',
        text: 'Prince Mahesh babu'
    },
    {
        image: 'https://tse2.mm.bing.net/th?id=OIP.hzyTAh1kX5_GgNnTAN1lUAHaEK&pid=Api&P=0&h=180',
        text: 'King nagarjuna'
    },
    {
        image: 'https://tse1.mm.bing.net/th?id=OIP.pDcJUB5isGCEiBw68CFXZgAAAA&pid=Api&P=0&h=180',
        text: 'Vijay Devarakonda'
    },
    {
        image: 'https://tse1.mm.bing.net/th?id=OIP.Cg3T_BCrjcU2WjbIYV2ZhgHaEK&pid=Api&P=0&h=180',
        text: 'Ayyaggare No 1'
    }
];

data.forEach(createBox);


function createBox(item) {
    const box = document.createElement('div');

    const {
        image,
        text
    } = item;

    box.classList.add('box');

    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();


        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);
    });

    main.appendChild(box);
}


const message = new SpeechSynthesisUtterance();


let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);
    });
}


function setTextMessage(text) {
    message.text = text;
}


function speakText() {
    speechSynthesis.speak(message);
}


function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}


speechSynthesis.addEventListener('voiceschanged', getVoices);


toggleBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.toggle('show')
);


closeBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.remove('show')
);


voicesSelect.addEventListener('change', setVoice);


readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value);
    speakText();
});

getVoices();