function checkForSpam(message) {
  // 1. Переводимо все повідомлення в нижній регістр,
  // щоб порівняння не залежало від великих/малих літер
  const normalizedMessage = message.toLowerCase();

  // 2. Перевіряємо, чи є слова "spam" або "sale"
  if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
    return true;
  }

  // 3. Якщо жодного із заборонених слів не знайшли — повертаємо false
  return false;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true