# Akan Name Web App

#### This is a webapp that gives you your Akan name , 19/02/2021

#### By **Eston Kagwima**

## Description

This is a web app that will take your birthday and calculate the
day of the week you were born and then
depending on your gender it will show you your Akan name

## Setup/Installation Requirements

- Clone the repository
- Change directory to the project directory
- Open project on VSCode
- Start the project on live server

## Behaviour Driven Development(BDD)

Feature: Display Akan name
As a user, I want to enter my date of birth and gender and
see what my akan name is.

Scenario Outline: when user enters their details

- Given: a web browser is on the akan name page
- When: the user enters their DOB and selects their gender
- Then: results should be a display of their akan name with a
  message like "your akan name is Kwame"
- And: if the user inputs invalid details they sould see
  an error message

      Examples:
        DOB        GENDER          RESULT
      | 12/2/1990  | Male        | Kwame        |
      | 5/8/1995   | Female      | Akun         |
      | 6/10/2000  |  n/a|       | invalid input|

## Technologies Used

- JavaScript
- HTML
- CSS

## link to live site on GitHub Pages

https://kagus-code.github.io/Akan-Names/

## Support and contact details

| Eston | ekagwima745@gmail.com |
| ----- | --------------------- |

### License

License
[MIT License](https://choosealicense.com/licenses/mit/)
Copyright (c) 2021 Eston Kagwima
