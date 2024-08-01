// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const courseCards = document.querySelectorAll('.course-card');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');
    const modalBody = document.getElementById('modal-body');

    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const coursePage = card.getAttribute('data-course');
            modalBody.innerHTML = `
                <h2>Select Path</h2>
                <button id="guidance-btn" class="btn btn-guidance">Guidance Path</button>
                <button id="non-guidance-btn" class="btn btn-non-guidance">Non-Guidance Path</button>
                <div id="path-info"></div>
            `;
            modal.style.display = 'block';

            document.getElementById('guidance-btn').onclick = () => {
                document.getElementById('path-info').innerHTML = `
                    <h3>Guidance Path</h3>
                    <p>Assign Mentor: Available</p>
                    <p>Progress Tracking: Enabled</p>
                    <p>Exams and Practice: Scheduled Regularly</p>
                    <p>Feedback: Provided on Submissions</p>
                    <p>Doubt Clearing: Available</p>
                    <button class="btn" id="lets-go">Let's Go</button>
                `;
                document.getElementById('lets-go').onclick = () => window.location.href = coursePage;
            };

            document.getElementById('non-guidance-btn').onclick = () => {
                document.getElementById('path-info').innerHTML = `
                    <h3>Non-Guidance Path</h3>
                    <p>Individual Study from PPTs and Videos Provided</p>
                    <p>Self-Practice with Exercises</p>
                    <p>System Tracks Progress</p>
                    <p>Optional Interaction Sessions</p>
                    <p>Exams and Practice: Scheduled Regularly</p>
                    <button class="btn" id="lets-go">Let's Go</button>
                `;
                document.getElementById('lets-go').onclick = () => window.location.href = coursePage;
            };
        });
    });

    closeButton.onclick = () => modal.style.display = 'none';
    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
