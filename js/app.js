document.addEventListener('DOMContentLoaded', () => {
  console.log('Local Skill Barter Platform UI loaded.');

  // Example functionality for Chat Page: toggling active user
  const chatUsers = document.querySelectorAll('.chat-user');
  chatUsers.forEach(user => {
    user.addEventListener('click', () => {
      // Remove active class from all
      chatUsers.forEach(u => u.classList.remove('active'));
      // Add active to clicked
      user.classList.add('active');
    });
  });

  // Basic Form Interaction
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // For presentation purposes, we just log prevention.
      console.log('Form submission prevented for frontend-only mockup.');
    });
  });
});
