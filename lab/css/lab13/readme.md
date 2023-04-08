<a href="https://github.com/drshahizan/learn-php/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/learn-php" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/network/members"><img src="https://img.shields.io/github/forks/drshahizan/learn-php" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/learn-php" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/issues"><img src="https://img.shields.io/github/issues/drshahizan/learn-php" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/learn-php?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/learn-php)

Don't forget to hit the :star: if you like this repo.

# Lab 13: Layout (Mock & Style)

## Mock design
Mock design in CSS refers to the process of creating a visual representation of a website or application design before it is implemented. Mock design is an important step in the design process, as it allows designers and developers to experiment with different layouts, color schemes, typography, and other design elements.

Mock design in CSS can be done in a variety of ways, including:

1. **Sketching**: Sketching out a rough design on paper can be a quick and effective way to explore different layout options and get ideas down on paper before moving on to more detailed mock designs.

2. **Wireframing**: Wireframing involves creating a simple, black and white layout of a web page or application to define its structure and content. This can be done using various tools like Figma, Sketch, Adobe XD, etc.

3. **Prototyping**: Prototyping involves creating a functional version of the design, using tools like HTML, CSS, and JavaScript, that can be tested and refined before the final implementation.

4. **Style Tiles**: Style tiles are a way to visually communicate design direction and mood by creating a collection of typographic, color, and interface elements without defining layout.

5. **Mood Board**: A mood board is a visual collage of images, patterns, colors, and typography that represent the overall aesthetic or vibe of the design.

When creating a mock design in CSS, it is important to consider the following design elements:

1. **Layout**: The layout defines the structure of the website or application and how the content is organized. Common layout techniques include grid-based layouts, flexbox layouts, and float-based layouts.

2. **Color**: Color is an important aspect of any design and can evoke different emotions and moods. CSS provides various color properties that can be used to set the color of text, backgrounds, and other design elements.

3. **Typography**: Typography refers to the use of typefaces, fonts, and font sizes to enhance the readability and visual appeal of the design. CSS provides various typography properties, such as font-family, font-size, font-weight, and line-height, that can be used to control the typography of the design.

4. **Images**: Images can be used to add visual interest and context to the design. CSS provides various image properties, such as background-image and object-fit, that can be used to control the appearance of images in the design.

Mock design in CSS can take many forms, depending on the design process and the tools used. Here's an example of a simple mock design for a blog post using HTML and CSS:

1. **HTML**

```html
<div class="post">
  <h2 class="post-title">How to Create Mock Designs in CSS</h2>
  <p class="post-meta">Posted by MSO on April 6, 2023</p>
  <img class="post-image" src="https://example.com/mock-design.png" alt="Mock design image">
  <p class="post-content">In this post, we'll explore the process of creating mock designs in CSS and the tools you can use to make it easier.</p>
  <a class="read-more-link" href="#">Read More</a>
</div>
```

2. **CSS**

```html
.post {
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.post-title {
  font-size: 24px;
  margin-top: 0;
}

.post-meta {
  font-size: 14px;
  color: #666;
}

.post-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.post-content {
  font-size: 16px;
  line-height: 1.5;
}

.read-more-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}
```

This code sets up a simple blog post layout with a title, date, image, content, and a "Read More" link. The CSS styles the post container with a background color, padding, border radius, and box shadow to give it a card-like appearance. The title and meta data are styled with appropriate font sizes and colors. The image is set to fill the width of the container while maintaining its aspect ratio. The content is styled with a font size and line height for readability. Finally, the "Read More" link is styled as a button with a background color, padding, and border radius.

## Layout design
Layout design in CSS refers to the process of positioning and arranging HTML elements on a web page. CSS provides various layout techniques and properties that can be used to create different types of layouts, such as grid, flexbox, and float-based layouts. Here are some common CSS properties that can be used to create layout designs:

### Box Model Properties

- **width**: specifies the width of an element.
- **height**: specifies the height of an element.
- **padding**: specifies the space between the content of an element and its border.
- **border**: specifies the border around an element.
- **margin**: specifies the space between the border of an element and the adjacent elements.

### Positioning Properties

- **position**: specifies the type of positioning for an element, such as static, relative, absolute, or fixed.
- **top**, **right**, **bottom**, **left**: specify the offset of an element from its normal position, depending on the value of the position property.
- **z-index**: specifies the stacking order of elements.

### Layout Techniques

- **CSS Grid**: a two-dimensional layout system that allows for precise placement and sizing of elements within a grid container.
- **Flexbox**: a one-dimensional layout system that allows for flexible and responsive layouts.
- **Floats**: a layout technique that allows elements to float to the left or right of the container, enabling text to flow around them.

Here's an example of how these properties can be used to create a basic layout using CSS Grid:

1. **HTML**
```html
<div class="grid-container">
  <header class="header">Header</header>
  <nav class="nav">Navigation</nav>
  <main class="main">Main Content</main>
  <aside class="sidebar">Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>
```

2. **CSS**
```
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
  height: 100vh;
}

.header {
  grid-column: 1 / 4;
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
}

.nav {
  background-color: #f1f1f1;
  padding: 20px;
}

.main {
  grid-column: 1 / 3;
  background-color: #ffffff;
  padding: 20px;
}

.sidebar {
  grid-column: 3 / 4;
  background-color: #f1f1f1;
  padding: 20px;
}

.footer {
  grid-column: 1 / 4;
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
}
```

In the above example, we have used CSS Grid to create a basic layout with a header, navigation, main content, sidebar, and footer. We have defined a grid container with display: grid, and specified the number of columns and rows using grid-template-columns and grid-template-rows. We have also added grid-gap to specify the gap between grid items. We have used grid positioning properties such as grid-column to position the header, main content, and sidebar elements in the desired grid areas. Finally, we have applied styles to each element, such as background color, padding, and font color.

## Task

You must complete two layout design-related lab exercises. Lab 13a requires the completion of three design layouts, whereas Lab 13b requires the completion of four different design layouts. More information is available in the subtopic that follows.

### Lab 13a: Mock 1 - Mock 3

- Create three mock design layouts titled **Mock 1**, **Mock 2**, and **Mock 3**.
- You have the option of using either the grid or flexbox concept.
- Each layout design must be created entirely with HTML files. In the HTML file, please use CSS styles.
- The layout design interface is shown in Mock 1 to Mock 3.
- Save the resulting files as *mock1.html*, *mock2.html*, and *mock3.html*, respectively. After that, please zip and send the file as **lab12_1.zip**.

**Mock 1**: Save the file as mock1.html.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13a.png"  width="600" />
</p>

**Mock 2**: Save the file as mock2.html.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13b.png" width="600" />
</p>

**Mock 3**: Save the file as mock3.html.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13c.png" width="600" />
</p>
Figure 1.3: Mock 3. Save the file as mock3.html.

### Lab 13b: Style 1 - Style 4

To generate interface design layouts for Style 1 through 4, you need to create a *style.css* file. Please follow the instructions below:
- Unzip the [**lab13_2.zip**](./download/lab13_2.zip) file into a folder.
- Inside the zip, you will find an *index.html* file and a *base.css* file that contain the website structure and some base design. Do not modify these files.
- Create a **style1.css** through **style4.css** file to design each of the layouts listed below. Submit only the CSS file, and ensure to zip the file and send it as **lab13_2ans.zip**.

**Style 1**: Save the css file as style1.css.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13d.png" width="600" />
</p>

**Style 2**: Save the css file as style2.css.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13e.png" width="600" />
</p>

**Style 3**: Save the css file as style3.css.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13f.png" width="600" />
</p>

**Style 4**: Save the css file as style4.css.
<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab13/download/lab13g.png" width="600" />
</p>

## Submission

1. This task must be done in groups (4 people per group). 
2. Please provide your contact information in the HTML `<head>`.
```html
<!--
Lab 13: Layout (Mock & Style)
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
