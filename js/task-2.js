function formatMessage(message, maxLength) {
  // 1. Перевірка довжини рядка
  if (message.length <= maxLength) {
    // Якщо довжина рядка менша або дорівнює maxLength — повертаємо без змін
    return message;
  }

  // 2. Якщо рядок довший — обрізаємо і додаємо "..."
  const trimmedMessage = message.slice(0, maxLength);
  return trimmedMessage + "...";
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"