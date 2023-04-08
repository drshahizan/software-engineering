<a href="https://github.com/drshahizan/learn-php/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/learn-php" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/network/members"><img src="https://img.shields.io/github/forks/drshahizan/learn-php" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/learn-php" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/issues"><img src="https://img.shields.io/github/issues/drshahizan/learn-php" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/learn-php?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/learn-php)

Don't forget to hit the :star: if you like this repo.

# Lab 14: Website Layout

A website layout refers to the way in which the content of a website is arranged on a web page. It includes the placement of different elements, such as headers, footers, navigation menus, images, text, and multimedia content.

Website layouts can vary depending on the purpose of the website, the type of content it contains, and the target audience. However, a well-designed website layout should be visually appealing, easy to navigate, and organized in a way that makes it easy for users to find the information they are looking for.

There are different types of website layouts, such as fixed, fluid, and responsive layouts. Fixed layouts have a specific width and do not change according to the size of the screen, while fluid layouts adjust to the width of the screen. Responsive layouts adapt to different screen sizes, such as those of desktops, tablets, and mobile phones, by changing the layout and design of the website based on the screen size.

In addition to the layout, website design also includes the use of color, typography, and images to create a cohesive and visually appealing website. The choice of color and typography can influence the mood and tone of the website, while the use of images and multimedia content can enhance the user experience and make the website more engaging.

## Code

Here is an example HTML and CSS code to create a basic website layout with header, content, and footer sections:

**HTML** :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <header>
      <h1>Header</h1>
    </header>
    <div class="content">
      <h2>Content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque eget massa id imperdiet. 
      Maecenas vitae lacus auctor, aliquam sapien vel, semper quam. Nulla facilisi. Integer vitae lectus elit. 
      Sed consequat ligula vel magna ultricies elementum. Ut venenatis mauris vitae velit pulvinar hendrerit. 
      Duis interdum sapien sit amet erat convallis, eget posuere tellus gravida. Curabitur convallis ornare 
      metus ac auctor. Ut faucibus libero et ligula convallis auctor. Praesent tincidunt elit eu elit tincidunt 
      lacinia. Ut suscipit libero nec enim aliquam sollicitudin. Proin lacinia justo odio, sit amet tincidunt 
      ante maximus sed. </p>
    </div>
    <footer>
      <p>Footer</p>
    </footer>
  </body>
</html>
```

**CSS code**: in a file called `style.css`

```css
body {
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.content {
  padding: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
```

This code creates a basic layout with a header, content section, and footer, with the header and footer having a dark background and white text. The content section has a white background and contains some sample text. The CSS code sets the margins and padding of the body to zero to remove any default styling, and uses padding to add spacing between the sections.

## Lab

You are required to produce a simple webpage layout. There are four lab practise questions in this lab that must be answered. You've been given some raw HTML and images to work with for this lab. You can download the files [**lab14.zip**](./download/lab14.zip). The following files can be found in the lab14.zip file:

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14a.png"  width="200" />
</p>


### Lab 1: My exciting website

When you unzip  lab14.zip , you'll find a file called *lab14_1ques.html*  and a folder called *images*. Opening the *lab14_1ques.html* file in a browser should give you a page with basic styling but no layout, which should look something like the image below (Figure 1.1).


Figure 1.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14b.png"  width="600" />
</p>

**Tasks**

You now need to implement your layout. The tasks you need to achieve are:
- To display the navigation items in a row, with an equal amount of space between the items.
- The navigation bar should scroll with the content and then become stuck at the top of the viewport when it reaches it.
- The image that is inside the article should have text wrapped around it. 
- The `<article>` and `<aside>` elements should display as a two column layout. The columns should be a flexible size so that if the browser window shrinks smaller the columns become narrower.
- The photographs should display as a two column grid with a 1 pixel gap between the images.

**Output**

The following screenshot Figure 1.2 shows an example of what the finished layout for the design should look like:

Figure 1.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14c.png"  width="600" />
</p>


### Lab 2: A parallax website

A parallax website has fixed images in the background that you can keep and scroll down the page to see different parts of the image. You can add a parallax effect to a website with basic HTML and CSS knowledge.

**Tasks**

- The use of the parallax effect in web design is very popular, and it gives the webpage a beautiful look and feel.
- *Lab14_2ques.html* is the file that will be used in this lab. You are not permitted to make changes to HTML files. The CSS style code must be placed in the *style.css* file.
- You need to dividing the entire page into four distinct sections.
- Set three background images (refer folder images - mal1.jpeg, mal2.jpeg and mal3.jpeg), align the text for different sections, adjust margins and padding, and add background-position and other CSS elements and properties to achieve a parallax effect.
- Only the **style.css** file needs to be submitted.

Figure 2.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14d.png" width="600" />
</p>

Figure 2.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14e.png" width="600" />
</p>

Figure 2.3
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14f.png" width="600" />
</p>

Figure 2.4
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14g.png" width="600" />
</p>

Figure 2.5
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14h.png" width="600" />
</p>

### Lab 3: Landing Page

Another good project that you can create with HTML and CSS is a landing page, but this one requires a solid understanding of these two building blocks. When creating a landing page, you will need to be extremely creative.

**Tasks**

- You need to use the *lab14_3ques.html* file to do this lab.
- You will practise adding a footer and header, creating columns, aligning items, dividing sections, and much more.
- You must use CSS with caution to ensure that different elements do not overlap.
- Color schemes, padding, margins, and space between sections, paragraphs, and boxes will all be handled by you.
- For different sections or backgrounds, colour combinations should complement one another.

Figure 3.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14i.png" width="600" />
</p>

Figure 3.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14j.png" width="600" />
</p>

### Lab 4: Documentation

You can create a documentation website if you know a little Javascript. However, you are not required to use Javascript in this lab. It is necessary to be familiar with HTML, CSS, and basic javascript. To complete this lab, please use the *lab14_4ques.html* file.

**Tasks**

- Separate the entire website into two sections.
- The left side generates a menu with all of the topics listed in order of appearance from top to bottom (refer Figure 4.1).
- The documentation or description for the topics must be mentioned on the right side.
- When you click on one of the topics on the left (we click Declaring Variables link), the content on the right should load (refer Figure 4.2).
- You don't need to make it too fancy; just give it a simple and respectable appearance that is appropriate for documentation.


Figure 4.1
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14l.png" width="600" />
</p>

Figure 4.2
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab14/download/lab14l.png" width="600" />
</p>

## Submission

1. This task must be done in groups (4 people per group). 
2. Please provide your contact information in the HTML `<head>`.
```html
<!--
Lab 14: Website Layout
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
