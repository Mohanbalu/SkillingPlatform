document.addEventListener('DOMContentLoaded', () => {
    const milestonesDiv = document.getElementById('milestones');

    const milestones = [
        {
            percent: 5,
            description: "Complete Module 1",
            additionalResources: [
                { type: 'notes', url: 'c1module.pdf', description: 'Get Notes' },
                { type: 'video', url: 'https://www.youtube.com/embed/EjavYOFoJJ0', description: 'Watch Video' }
            ]
        },
        { 
            percent: 10, 
            description: "Take Quiz 1", 
            additionalResources: [
                { type: 'notes', url: 'c2module.pdf', description: 'Get Notes' },
                { type: 'video-options', description: 'Watch Video', options: [
                    { type: 'video', url: 'https://www.youtube.com/embed/NyT9vvSBoeo', description: 'Data Types' },
                    { type: 'video', url: 'https://www.youtube.com/embed/dhh5lrXXXYw', description: 'Variables' }
                ]},
                { type: 'exam', url: 'exam1.html', description: 'Take Exam' }
            ]
        },
        { 
            percent: 20, 
            description: "Complete Module 2", 
            additionalResources: [
                { type: 'notes', url: 'c3module.pdf', description: 'Get Notes' },
                { type: 'video', url: 'https://www.youtube.com/embed/oYuRtXcwXqw', description: 'Watch Control Statements in C' }
            ]
        },
        { 
            percent: 30, 
            description: "Complete Module 4", 
            additionalResources: [
                { type: 'notes', url: 'c4module.pdf', description: 'Get Notes' },
                { type: 'video', url: 'https://www.youtube.com/embed/BpeIfof3VBk', description: 'Watch Loops in C' },
                { type: 'exam', url: 'exam2.html', description: 'Take Exam' }
            ]
        },
        { 
            percent: 40, 
            description: "Complete Module 5", 
            additionalResources: [
                { type: 'notes', url: 'c5module.pdf', description: 'Get Notes' },
                { type: 'video', url: 'https://www.youtube.com/embed/5v1w0V4GPrE', description: 'Watch Nested Loops in C' }
            ]
        },
        { 
            percent: 60, 
            description: "Complete Module 6", 
            additionalResources: [
                { type: 'notes', url: 'c6module.pdf', description: 'Get Notes' },
                { type: 'video', url: 'https://www.youtube.com/embed/oYuRtXcwXqw', description: 'Watch Control Statements in C' },
                { type: 'exam', url: 'exam3.html', description: 'Take Exam on C, Loops, If, Switch, Variables, Data Types' }
            ]
        },
        { 
            percent: 70, 
            description: "Take Quiz 2",
            additionalResources: [
                { type: 'video', url: 'https://youtu.be/E1_Gg6dURwk?si=V9_urv_2x2BhqEBU', description: 'Watch Video on Quiz 2' },
                { type: 'notes', url: 'c7module.pdf', description: 'Get Notes for Quiz 2' }
            ]
        },
        { 
            percent: 80, 
            description: "Complete Module 7",
            additionalResources: [
                { type: 'video', url: 'https://www.youtube.com/embed/IuDJeGqEZ3A?si=AfrAEggcIEeNZlS4', description: 'Watch Video on Module 7' },
                { type: 'notes', url: 'c8module.pdf', description: 'Get Notes for Module 7' }
            ]
        },
        { 
            percent: 90, 
            description: "Take Quiz 3",
            additionalResources: [
                { type: 'video', url: 'https://youtu.be/f--fD8Y0RnA?si=P4_CR1lD1J4xtkDE', description: 'Watch Video on Quiz 3' },
                { type: 'notes', url: 'c9module.pdf', description: 'Get Notes for Quiz 3' }
            ]
        },
        { 
            percent: 100, 
            description: "Complete Final Exam",
            additionalResources: [
                { type: 'exam', url: 'final_exam.html', description: 'Take Final Exam' }
            ]
        }
    ];

    milestones.forEach(milestone => {
        const milestoneDiv = document.createElement('div');
        milestoneDiv.className = 'milestone';
        milestoneDiv.innerHTML = `
            <h3>${milestone.percent}% Milestone</h3>
            <p>${milestone.description}</p>
            ${milestone.additionalResources ? milestone.additionalResources.map(resource => `
                ${resource.type === 'video-options' ? `
                    <button class="btn-primary video-options-button">${resource.description}</button>
                    <div class="video-options" style="display: none;">
                        ${resource.options.map(option => `
                            <button class="btn-primary" data-type="${option.type}" data-url="${option.url}">${option.description}</button>
                        `).join('')}
                    </div>
                ` : `
                    <button class="btn-primary" data-type="${resource.type}" data-url="${resource.url}">${resource.description}</button>
                `}
            `).join('') : ''}
        `;
        milestonesDiv.appendChild(milestoneDiv);
    });

    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const type = event.target.getAttribute('data-type');
            const url = event.target.getAttribute('data-url');

            if (type && url) {
                if (type === 'exam') {
                    enterFullscreen(url); // Directly enter fullscreen and navigate to exam page
                } else {
                    showFullscreenOverlay(type, url);
                }
            } else if (event.target.classList.contains('video-options-button')) {
                const videoOptions = event.target.nextElementSibling;
                if (videoOptions) {
                    videoOptions.style.display = videoOptions.style.display === 'none' ? 'block' : 'none';
                }
            }
        }
    });

    function enterFullscreen(examPageUrl) {
        const fullscreenElement = document.documentElement;

        if (fullscreenElement.requestFullscreen) {
            fullscreenElement.requestFullscreen().then(() => {
                // Navigate to exam page after entering fullscreen
                window.location.href = examPageUrl;
            }).catch(err => {
                console.error("Failed to enter fullscreen mode:", err);
            });
        } else {
            console.error("Fullscreen API is not supported.");
        }
    }

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            showExitLockScreenWarning();
        }
    });

    function showExitLockScreenWarning() {
        const warningOverlay = document.createElement('div');
        warningOverlay.className = 'overlay warning';
        warningOverlay.innerHTML = `
            <div class="overlay-content">
                <h2>Exam Cancelled</h2>
                <p>You have exited the full-screen mode. The exam has been cancelled.</p>
                <button class="btn-primary" id="close-warning">Close</button>
            </div>
        `;
        document.body.appendChild(warningOverlay);

        document.getElementById('close-warning').onclick = () => {
            document.body.removeChild(warningOverlay);
            window.location.href = 'home.html'; // Redirect to home or another page
        };

        window.onclick = (event) => {
            if (event.target === warningOverlay) {
                document.body.removeChild(warningOverlay);
            }
        };
    }

    function showFullscreenOverlay(type, url) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `
            <div class="overlay-content">
                <span class="close-overlay">&times;</span>
                ${type === 'notes' || type === 'exam' ? 
                    `<iframe src="${url}" style="width: 100%; height: 80vh; border: none;"></iframe>` :
                    type === 'video' ?
                        `<iframe src="${url}" style="width: 100%; height: 80vh; border: none;" allowfullscreen></iframe>` :
                        ''}
                <div class="overlay-buttons">
                    <button class="btn-primary" id="lets-go">Let's Go</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const closeButton = overlay.querySelector('.close-overlay');
        closeButton.onclick = () => document.body.removeChild(overlay);

        document.getElementById('lets-go').onclick = () => {
            document.body.removeChild(overlay);
            window.location.href = "c.html"; // Update to the desired page
        };

        window.onclick = (event) => {
            if (event.target === overlay) {
                document.body.removeChild(overlay);
            }
        };
    }
});
