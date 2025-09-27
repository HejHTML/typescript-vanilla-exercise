"use strict";
// Funktioner för ordtransformering
const reverseWord = (word) => word.split('').reverse().join('');
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const repeatWord = (word, times) => word.repeat(times);
// Catered for Swedish vowels
const countVowels = (word) => (word.match(/[aeiouyåäö]/gi) || []).length;
const transformWord = (operation, word, param) => {
    switch (operation) {
        case 'reverse':
            return reverseWord(word);
        case 'capitalize':
            return capitalizeWord(word);
        case 'repeat':
            return repeatWord(word, param || 1);
        case 'countVowels':
            return countVowels(word);
        default:
            return "Invalid operation";
    }
};
// Kör transformeringen och uppdatera resultat
const runTransformation = () => {
    const wordInput = document.getElementById('word');
    const operationSelect = document.getElementById('operation');
    const paramInput = document.getElementById('param');
    const resultContainer = document.getElementById('result');
    const word = (wordInput === null || wordInput === void 0 ? void 0 : wordInput.value) || '';
    const operation = (operationSelect === null || operationSelect === void 0 ? void 0 : operationSelect.value) || '';
    const param = parseInt((paramInput === null || paramInput === void 0 ? void 0 : paramInput.value) || '0');
    const result = transformWord(operation, word, param);
    if (resultContainer) {
        resultContainer.textContent = `Result: ${result}`;
        resultContainer.classList.toggle('active', result !== '');
    }
};
// Visa/dölj param-input beroende på operation
const operationElement = document.getElementById('operation');
const paramContainer = document.getElementById('paramContainer');
operationElement === null || operationElement === void 0 ? void 0 : operationElement.addEventListener('change', function () {
    if (paramContainer) {
        const select = this;
        paramContainer.classList.toggle('active', select.value === 'repeat');
    }
});
// Event listener för transform-knappen
const transformButton = document.getElementById('transformButton');
transformButton === null || transformButton === void 0 ? void 0 : transformButton.addEventListener('click', runTransformation);
//# sourceMappingURL=word-transformer.js.map