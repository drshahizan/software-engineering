<a href="https://github.com/drshahizan/learn-php/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/learn-php" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/network/members"><img src="https://img.shields.io/github/forks/drshahizan/learn-php" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/learn-php" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/issues"><img src="https://img.shields.io/github/issues/drshahizan/learn-php" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/learn-php?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/learn-php)

Don't forget to hit the :star: if you like this repo.

# Lab 16: Form Layout

HTML form layout refers to the arrangement of form elements such as input fields, labels, buttons, and other form controls on a web page. The layout of an HTML form can have a significant impact on the user experience, as it affects the usability, accessibility, and overall visual appeal of the form.

There are different ways to design the layout of an HTML form using CSS, including using tables, divs, and CSS grids. The layout should be organized in a way that makes it easy for the user to understand and fill out the form. Common form layouts include a single-column layout, multi-column layout, and a hybrid layout that combines both single and multi-column layouts.

## Code
Here's an example of HTML and CSS code to create a simple form layout:

HTML code:

**HTML**
```html
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </div>
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
```

**CSS**

```css
.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

In this example, we use a form element to wrap the form elements, and we group the form elements using div elements with the class form-group. Each form element has a corresponding label element, which we link to the form element using the for attribute.

We use CSS to style the form elements, including adding margins and padding, setting the width of input fields and textareas, and styling the submit button. This is just a simple example, and you can customize the form layout further to fit your specific needs.

## Lab

You are required to produce a simple form layout. There are four lab practise questions in this lab that must be answered. You've been given raw HTML and images to work with for this lab. You can download the files **lab16.zip**. The following files can be found in the [**lab16.zip**](./download/lab16.zip) file:

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16a.png" width="200" />
</p>

## Lab 1: Survey Form

Forms are always an important part of any project that collects user input information. In this lab exercise, you will use HTML and CSS to create a survey form. You will design the basic layout of the form using HTML, and CSS will add a beautiful design to our layout using text-decoration, text colour, background colour, text alignment, margin, padding, and so on. The file you will use is lab1.html. Figure 1.1 is a display of the interface without using any CSS.

Figure 1.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16b.png" width="400" />
</p>

### Output

You must create the interface depicted in Figure 1.2. Please enter the appropriate CSS to create a more aesthetically pleasing and professional interface.


Figure 1.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16c.png" width="600" />
</p>

## Lab 2: Persaka Survey Form

You have been tasked with creating an appealing survey form interface for Persaka. The files you'll need are lab2.html and mal2.jpeg. Enter CSS tags in the lab2.html file to change the appearance of the interface. The mal2.jpeg file is used as the survey form's background image. Figure 2.1 depicts the outcomes of the implementation for this lab exercise.

Figure 2.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16d.png" width="600" />
</p>

## Lab 3: Login Page

Before users can access the system, they must first enter a username and password into the login interface. You are required to change the appearance of the login page interface in this exercise. Please insert the appropriate CSS into a file called lab3.html. The implementation results are shown in Figure 3.1. When the user enters the username and password, the label will appear above the input, in a small, coloured font. When you move your cursor over the Submit button, it will transform into a coloured box (please refer to 3.2).

Figure 3.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16e.png" width="600" />
</p>

Figure 3.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16f.png" width="300" />
</p>

## Lab 4: UTMtravel

You have been tasked with creating a search interface for UTMTravel. Users can specify which locations they wish to visit. You must use the files lab4.html and mal3.jpeg. In the lab4.html file, please include a CSS tag. The mal3.jpeg file serves as the website's background image. Please see Figure 4.1 for the output results. When you move your cursor over the Register/Login button, the background colour of the box changes to red (please refer to Figure 4.2).

Figure 4.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16g.png" width="600" />
</p>

Figure 4.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab16/download/lab16h.png" width="300" />
</p>

## Submission

1. This task must be done in groups (4 people per group). 
2. Please provide your contact information in the HTML `<head>`.
```html
<!--
Lab 16: Form Layout
Group:
1. Name: [Name], Matrix No: [Matrix Number], Github ID: [Github ID]
2. Name: [Name], Matrix No: [Matrix Number], Github ID: [Github ID]
3. Name: [Name], Matrix No: [Matrix Number], Github ID: [Github ID]
4. Name: [Name], Matrix No: [Matrix Number], Github ID: [Github ID]
-->
```

3. You must place your file in the submission folder. Within the submission folder, create a folder named after your group.

> Example: /submission/[group-name]/[your-file]
>
> (Note: please replace [Name], [Matrix Number], [Github ID], [group-name], and [your-file] with the appropriate information)


## Contribution 🛠️
Please create an [Issue](https://github.com/drshahizan/learn-php/issues) for any improvements, suggestions or errors in the content.

You can also contact me using [Linkedin](https://www.linkedin.com/in/drshahizan/) for any other queries or feedback.

![](https://visitor-badge.glitch.me/badge?page_id=drshahizan)
