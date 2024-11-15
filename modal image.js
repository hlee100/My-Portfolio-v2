// document.addEventListener("DOMContentLoaded", () => {
//     // Select all certificate images and modal elements
//     const certImages = document.querySelectorAll('.cert-images-row img');
//     const modal = document.getElementById('modal');
//     const modalImg = document.getElementById('modal-img');

//     // Add click event listener to each image
//     certImages.forEach(img => {
//         img.addEventListener('click', () => {
//             modal.style.display = 'flex'; // Show the modal
//             modalImg.src = img.src;      // Set the modal image source
//             requestAnimationFrame(() => {
//                 modal.classList.add('active'); // Trigger animation
//             });
//         });
//     });

//     // Close modal on click anywhere
//     modal.addEventListener('click', () => {
//         modal.classList.remove('active'); // Reverse animation
//         setTimeout(() => {
//             modal.style.display = 'none'; // Hide modal after animation
//         }, 400); // Match the transition duration
//     });
// })