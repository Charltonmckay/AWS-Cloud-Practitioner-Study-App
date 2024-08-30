document.addEventListener('DOMContentLoaded', () => {
  console.log('AWS Cloud Practitioner Study App Loaded!');
});

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('home-link');
  const modulesLink = document.getElementById('modules-link');
  const quizLink = document.getElementById('quiz-link');
  const examLink = document.getElementById('exam-link');

  const homeSection = document.getElementById('home-section');
  const modulesSection = document.getElementById('modules-section');
  const quizSection = document.getElementById('quiz-section');
  const examSection = document.getElementById('exam-section');

  // Function to show a section and hide others
  function showSection(section) {
      homeSection.classList.add('hidden');
      modulesSection.classList.add('hidden');
      quizSection.classList.add('hidden');
      examSection.classList.add('hidden');

      section.classList.remove('hidden');
  }

  // Event listeners for navigation links
  homeLink.addEventListener('click', () => showSection(homeSection));
  modulesLink.addEventListener('click', () => showSection(modulesSection));
  quizLink.addEventListener('click', () => showSection(quizSection));
  examLink.addEventListener('click', () => showSection(examSection));

  // Show home section by default
  showSection(homeSection);
});

