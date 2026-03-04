
/**
 * Devuelve true si s es palíndromo (ignora espacios y mayúsculas/minúsculas).
 */
function isPalindrome(s) {
  // se eliminó variable original no usada
  const cleaned = s.toLowerCase().replace(/\s+/g, '');
  // depuración removida
  if (cleaned === cleaned.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
  // línea inalcanzable eliminada
}

module.exports = { isPalindrome };
