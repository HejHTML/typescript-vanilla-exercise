const reverseWord = (word: string): string =>
  word.split('').reverse().join('');

const capitalizeWord = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord = (word: string, times: number): string =>
  word.repeat(times);

// Catered for Swedish vowels
const countVowels = (word: string): number =>
  (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord = (
  operation: string,
  word: string,
  param?: number
): string | number => {
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
const runTransformation = (): void => {
  const wordInput = document.getElementById('word') as HTMLInputElement | null;
  const operationSelect = document.getElementById('operation') as HTMLSelectElement | null;
  const paramInput = document.getElementById('param') as HTMLInputElement | null;
  const resultContainer = document.getElementById('result');

  const word = wordInput?.value || '';
  const operation = operationSelect?.value || '';
  const param = parseInt(paramInput?.value || '0');

  const result = transformWord(operation, word, param);

  if (resultContainer) {
    resultContainer.textContent = `Result: ${result}`;
    resultContainer.classList.toggle('active', result !== '');
  }
};

const operationElement = document.getElementById('operation') as HTMLSelectElement | null;
const paramContainer = document.getElementById('paramContainer');

operationElement?.addEventListener('change', function () {
  if (paramContainer) {
    const select = this as HTMLSelectElement;
    paramContainer.classList.toggle('active', select.value === 'repeat');
  }
});

/* transform-knappen'/*
const transformButton = document.getElementById('transformButton');
transformButton?.addEventListener('click', runTransformation);
