# Project Structure

This document keeps track of all the files created for the Local Skill Barter Platform and their purposes.

## Directories
- `/css/`: Contains styling files.
- `/js/`: Contains JavaScript logic for interactivity.
- `/images/`: Contains local image assets (currently placeholders).

## Files

### Documentation
- `structure.md`: Documents the current project structure and explains the purpose of each file.

### Styling
- `css/style.css`: The primary, global stylesheet overriding default browser aesthetics and applying a clean, minimal design system based on soft colors, responsive layout techniques, and modern typography.

### JavaScript
- `js/app.js`: Main logic file handling frontend interactivity (like toggling tabs, simple form validation, opening/closing modals).

### HTML Layouts
- `index.html`: The Landing / Home page. Introduces the platform, features a call-to-action to get started. 
- `auth.html`: The Authentication page. Handles login and registration views using a unified minimal form interface.
- `profile.html`: The User Profile page. Allows users to define their "Skills I Offer", "Skills I Want", and set their general location along with matching preferences.
- `dashboard.html`: The Match Discovery page. A dashboard showing nearby matches. Contains user cards with distance, offered skills, and wanted skills. Includes a button to "Connect".
- `chat.html`: The Private Chat page. An interface displaying connected users on the left sidebar and a private message threaded container on the right.
