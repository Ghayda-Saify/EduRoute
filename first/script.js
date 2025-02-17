document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.querySelectorAll('.ripple');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      let rect = this.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      let ripple = document.createElement('span');
      
      // Set the size and position of the ripple based on the button size
      let size = Math.max(this.offsetWidth, this.offsetHeight);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (x - size / 2) + 'px';
      ripple.style.top = (y - size / 2) + 'px';

      // Append the ripple to the button
      this.appendChild(ripple);

      // Remove the ripple after the animation ends
      setTimeout(() => ripple.remove(), 600);  // Matches the animation duration
    });
  });
});
