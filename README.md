# SkillingPlatform

SkillingPlatform is a web-based application that provides users with features for learning, exams, and student management. It includes modules for user registration, login, profiles, exam management, and course information.

## Features
- **User Registration and Login**: Users can register as students, lecturers, or controllers.
  - Students use `@srmap.edu.in` emails.
  - Lecturers use `@srmap.edu.lec.in` emails.
  - Controllers use `@srmap.edu.con.in` emails.
  
- **Dashboard**: A dashboard that shows the relevant user information after login.
  
- **Exam Management**: Supports exam instructions and various exam-related pages.
  
- **Courses and Skills**: Information about available courses and skill development.

## Files and Directory Structure

- **HTML Files**:
  - `dashboard.html`: User dashboard after login.
  - `exam-instructions.html`: Instructions for exams.
  - `exam.html`, `exam2.html`, `exam3.html`: Different versions of exam pages.
  - `index.html`: Homepage of the platform.
  - `login.html`, `register.html`: Login and registration pages for users.
  - `profile.html`: User profile page.

- **PHP Files**:
  - `login.php`, `register.php`: PHP scripts for handling user login and registration.

- **CSS Files**:
  - `dashboard.css`, `course.css`, `styles.css`: Styling files for the platform's UI.
  - `exam-instructions.css`: Styling for the exam instruction pages.
  - `profile.css`: Styling for the user profile page.

- **Images**:
  - `datascinec.jpg`: Image related to the platform's content.
  - `ready-back-school.jpg`: School-related image used on pages.
  - `web.png`: Generic image for the platform.

- **JavaScript Files**:
  - `exam2js`: JavaScript for handling some functionality on exam pages.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mohanbalu/SkillingPlatform.git
## Install Dependencies

- Ensure you have a server (e.g., Apache, Nginx) and PHP installed to handle backend functionality for login and registration.

## Run the Platform

- Put the files on your web server and navigate to `index.html` to start the platform.

## Technologies Used

- HTML/CSS for frontend design
- JavaScript for interactive pages
- PHP for backend processing
- MySQL or similar database for storing user and exam data

## Contributing

- Feel free to fork the repository, submit issues, or create pull requests.

## License

This project is open-source and available under the MIT License.
