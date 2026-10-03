document.addEventListener('DOMContentLoaded', () => {
  // Manejo accesible de acordeones (FAQ)
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        panel.setAttribute('hidden', '');
      } else {
        panel.removeAttribute('hidden');
      }
    });
  });

  // Manejo básico de respuestas del Mini Quiz (sin guardar datos)
  const quizInputs = document.querySelectorAll('.quiz-section input[type="radio"]');
  const resultDiv = document.getElementById('quiz-result');

  if (quizInputs.length > 0 && resultDiv) {
    quizInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        if (e.target.dataset.correct === "true") {
          resultDiv.textContent = "¡Correcto! ¡Buen trabajo!";
          resultDiv.style.color = "green";
        } else {
          resultDiv.textContent = "Sigue intentando.";
          resultDiv.style.color = "red";
        }
      });
    });
  }
});