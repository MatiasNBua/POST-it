# Description of POST-it
    
    This Web application is developed for those people who need a place to write down their daily tasks or reminders, here you can create your personal notes that will be linked to your account!
<br>
<br>

# Funcional Description

    In this application you can log in through a JWT system that opens from anywhere with your mobile allowing you to use it spontaneously. Inside you can also create your notes, modify and delete them. You can also change your password and play with the color changes of the theme.
<br>
<br>

# Tecnhical Description
<br>

- Login

- Register
    - create user

- Home
    - User
        - create note
        - update note
        - delete note

- Home
    - Change Password
    - Change Theme
    - Logout

# Use cases

<br>
User

 - create note
 - update note
 - delete note
 - change themes
 - change password
<br>
<br>

# Flows

![](./imgs/flow.png)

#  UI Desing

![](./imgs/UI%20Desing.png)

# Technical Description

 - Blocks
 - Sequence
 - Components
 - QA units
 - Technologies


# Data Model

User
- id: ObjectId
- name: String
- email: String
- password: String


Note
- id: ObjectId
- text: String

# Technologies 

 - Mongoose
 - express
 - jsonwebtoken
 - winston
 - Test Jest
 - JS React
 - winstone
 - TODO sass

# Images

![](./imgs/Feedback%20email%20empty.jpg)
![](./imgs/Feedback%20email%20not-Valid.jpg)
![](./imgs/Feedback%20less%208%20chart.jpg)
![](./imgs/FeedbackWrongCredentials.jpg)
![](./imgs/Login.jpg.jpg)
![](./imgs/Register.jpg)
![](./imgs/Home.jpg)
![](./imgs/HomeComplete.jpg)
![](./imgs/ToggleTheme.jpg)
![](./imgs/updatePassword.jpg)

