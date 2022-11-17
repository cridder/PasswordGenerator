
# ReSubmit
- [ ] The main issues I can find are that your file structure is not quite organized as it should be. Ideally you should put your index in your root but then have an assets folder containing css, js, and image subfolders. These subfolders should contain all relevant files in order to make your repo and general file structure easier to navigate. This will prove very useful as your projects get larger and larger.

- [ ] did not provide a link to your repo.
    - [ ] **renamed** repo link = **https://github.com/cridder/PasswordGenerator**
        - [ ] old link = https://cridder.github.io/003-Challenge-JavaScript-Challenge_Password-Generator
- [X] readme is missing a screenshot
    - [X] **SEE IMAGES BELOW**
- [X] I would also encourage you to name your repos after the content only
    - [X] **new** name = **PasswordGenerator**
        - [X] old name = 003-Challenge-JavaScript-Challenge_Password-Generator





# Password Generator Starter Code
Link = https://cridder.github.io/PasswordGenerator/

# JavaScript Challenge: Password Generator
This week's Challenge requires you to create an application that an employee can use to generate a random password based on criteria they've selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week's coursework will teach you all the skills you need to succeed in this assignment.

The password can include special characters. If you're unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://owasp.org/www-community/password-special-characters)

# User Story
AS AN employee with access to sensitive data

- [X] I WANT to randomly generate a password that meets certain criteria
- [X] SO THAT I can create a strong password that provides greater security

# Acceptance Criteria
GIVEN I need a new, secure password
- [X] WHEN I click the button to generate a password
    - [X] THEN I am presented with a series of prompts for password criteria
- [X] WHEN prompted for password criteria
    - [X] THEN I select which criteria to include in the password
- [X] WHEN prompted for the length of the password
    - [X] THEN I choose a length of at least 8 characters and no more than 128 characters
- [X] WHEN asked for character types to include in the password
    - [X] THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- [X] WHEN I answer each prompt
    - [X] THEN my input should be validated and at least one character type should be selected
- [X] WHEN all prompts are answered
    - [X] THEN a password is generated that matches the selected criteria
- [X] WHEN the password is generated
    - [X] THEN the password is either displayed in an alert or written to the page
