<a href="https://github.com/drshahizan/learn-php/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/learn-php" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/network/members"><img src="https://img.shields.io/github/forks/drshahizan/learn-php" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/learn-php" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/issues"><img src="https://img.shields.io/github/issues/drshahizan/learn-php" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/learn-php?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/learn-php)

Don't forget to hit the :star: if you like this repo.

# Lab 15: Layout

## HTML layout using CSS
HTML layout using CSS involves using Cascading Style Sheets (CSS) to define the layout and presentation of the HTML elements in a webpage. CSS allows designers to separate the presentation and style of the webpage from the content, allowing for greater flexibility and control over the layout and design.

By using CSS, designers can define rules for various HTML elements, such as the font, color, size, position, and alignment of the content. This makes it easier to create a consistent and visually appealing layout across multiple pages of a website.

CSS also offers different layout techniques, such as the use of grids and flexboxes, that allow designers to create complex and responsive layouts that adapt to different screen sizes and devices.

Overall, HTML layout using CSS provides a powerful tool for designing modern and attractive webpages with a high degree of control and flexibility.

## Code
To design an HTML layout using a CSS file with a header, content, and footer, you can follow these steps:

1. Create a new HTML file and add the basic structure, including the `head` and `body` tags.

**HTML**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Layout with CSS</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <header>
      <h1>Header</h1>
    </header>
    <div class="content">
      <h2>Content</h2>
      <p>This is the main content area.</p>
    </div>
    <footer>
      <p>Footer</p>
    </footer>
  </body>
</html>
```

2. Create a new CSS file and link it to your HTML file using the `link` tag in the `head` section.

**CSS**
```css
/* style.css */
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
  margin: 0 auto;
  max-width: 800px;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
```

3. Add CSS rules to style the `header`, `content`, and `footer` sections.
    * The `body` rule sets the margin and padding to 0 to remove any default browser styles.
    * The `header` rule sets the background color to dark gray, the text color to white, and adds padding for spacing and centering the content.
    * The `content` rule sets the padding to provide spacing around the content, sets the maximum width to 800px, and centers the content using the `margin` property.
    * The `footer` rule sets the background color to dark gray, the text color to white, and adds padding for spacing and centering the content.

With these CSS rules, you can easily create an HTML layout with a header, content, and footer using the power of CSS. You can modify these rules as per your requirements to make it more visually appealing.

## Task 1

- You must create a web layout design similar to Figure 15.1.
- This layout has five sections: header, article, navigation, ads, and footer.
- Please use a white separator to divide this section.
- The CSS style must be entered in the generated HTML file.
- When finished, save the file as layout1.html.


Figure 15.1: Layout1. Save the file as layout1.html.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab15/download/lab15a.png"  width="600" />
</p>

## Task 2

- You must create a web layout design that makes use of the flexbox concept.
- Please download the layout2ques.html template file.
- This layout is divided into two sections: the header and the article.
- The `<article>` tag is made up of three parts. Please use the flexbox concept to automatically divide columns (refer to Figure 15.2).
- When you reduce the display size, the column size adjusts automatically (refer to Figure 15.3).
- Please use a white separator to divide this section.
- The CSS style must be entered in the generated HTML file. When finished, save the file as layout2.html.

  
Figure 15.2: Layout a. Save the file as layout2.html.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab15/download/lab15b.png"  width="600" />
</p>

  
Figure 15.3: Layout b.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab15/download/lab15c.png"  width="600" />
</p>

## Task 3

- You must create a layout design for a website called My Magazine (refer Figure 15.4).
- Please download the layout3ques.html template.
- After the section header, there is a navigation menu at the top of this website.
- There are two classes in the content section: leftcolumn and rightcolumn. The title heading, title description, and content are all found in the left column. Editor, Photos, and Contact Us information can be found in the right column class.
- The footer class is at the very bottom.
- The CSS style must be specified in the HTML file that is generated. The resulting file must be saved as layout3.html.

  
Figure 15.4: Save the file as layout3.html.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab15/download/lab15d.png"  width="600" />
</p>

## Task 4

Using HTML 5 only, create a prototype of an online newspaper:

- Throughout this lab exercise, do not worry about design. HTML is a markup language with pre-defined presentation semantics; most of the design is handled by CSS.
- For now, you can edit your HTML files locally.
- Validate and verify the result on the browser as you proceed.

### Some tips and ideas:

- Use the site http://www.lipsum.com/ if you need to generate example paragraphs.
- Use the site https://picsum.photos/ if you need some example photos.

**Steps**:

1. In this exercise, you will create the pages described in the following image:
    - The **main** page represents the main page of the newspaper having a series of **abbreviated** news items.
    - The **news article** page has one particular news item in its **complete** form. It also has comments written by the readers.
    - The **section** page is very similar to the **main** page, but only has news about a particular topic (e.g., sports).
    
Image: The file type *.html was used.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab15/download/newspaper.svg"  width="600" />
</p>
    

2. For each page, create a new HTML file, open it with your favorite code editor, and add the following basic HTML code:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Online Newspaper</title>
   </head>
   <body>
   </body>
</html>
```

3. Open the **main** page in a **web browser** (the most straightforward way is to drag the file into a new tab).

4. Complete each page using the **correct semantic elements**.

    * The header of each page should have:
      * The name of the newspaper.
      * A logo.
      * The section's name (if it's a **section** page).
      * Clicking any of these elements should take the user back to the main page.
    * The **menu** should have links to each one of the **section** pages (e.g., sports, politics, and local)
      * The links should be part of an unordered list.
      * For now, all of those can point to section.html.
    * Each **article** should have a title, some paragraphs, an image, and a footer.
      * In the **main** and **section** pages, only a couple of paragraphs of each news item should be shown.
      * The **news article** page should also have some comments. Each **comment** should have some text, a date/time, and the author's username. After all the comments, there should be a form (with a title, a username and a text fields) that allows users to add more comments.
      * The **footer** should contain the date/time and the author's name. In the **main** and **section** pages, there should also be a "Read more" link that redirects the user to the **news article** page containing the complete news item.
    * The **footer** of each page should have a Copyright Notice. Use a [character entity](https://www.amp-what.com/unicode/search/) for the © symbol.

5. Don't forget to [validate](https://validator.w3.org/) the pages when you're done.


## Submission

1. This task must be done in groups (4 people per group). 
2. Please provide your contact information in the HTML `<head>`.
```html
<!--
Lab 15: Layout
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
