<a href="https://github.com/drshahizan/learn-php/stargazers"><img src="https://img.shields.io/github/stars/drshahizan/learn-php" alt="Stars Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/network/members"><img src="https://img.shields.io/github/forks/drshahizan/learn-php" alt="Forks Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/pulls"><img src="https://img.shields.io/github/issues-pr/drshahizan/learn-php" alt="Pull Requests Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/issues"><img src="https://img.shields.io/github/issues/drshahizan/learn-php" alt="Issues Badge"/></a>
<a href="https://github.com/drshahizan/learn-php/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/drshahizan/learn-php?color=2b9348"></a>
![](https://visitor-badge.glitch.me/badge?page_id=drshahizan/learn-php)

Don't forget to hit the :star: if you like this repo.

# Lab 12: Text and Box Model

The Text and Box models in CSS are important concepts that form the basis of layout and design in web development.

## Text Model:

The Text Model in CSS is concerned with the rendering of text content within an element. It consists of four properties:

1. Font: The `font` property specifies the typeface, size, weight, and style of the text content.

2. Text color: The `color` property specifies the color of the text content.

3. Text alignment: The `text-align` property specifies the horizontal alignment of the text content within an element.

4. Line-height: The `line-height` property specifies the height of each line of text within an element.

Together, these properties allow developers to control the appearance and layout of text content within an HTML document.

**Sample code**:

1. CSS:
```html
<p class="text-example">This is an example of styled text</p>
```
2. HTML
```html
.text-example {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  line-height: 1.5;
}
```

In the above example, we have defined a paragraph element with a class of `text-example`. In the CSS, we have applied various properties to this class to style the text content within the paragraph. We have specified the font family, size, weight, and color of the text, as well as the text alignment and line-height.

## Box Model:

The Box Model in CSS is concerned with the layout and positioning of elements on a web page. It consists of four components:

1. Content: The content area is the actual area where the content of the element is displayed.

2. Padding: The padding area is the space between the content and the element's border.

3. Border: The border area is a thin line that surrounds the padding and content areas.

4. Margin: The margin area is the space between the border of an element and the adjacent elements.

By adjusting the dimensions of each of these components, developers can control the size, spacing, and positioning of elements on a web page. The Box Model is a fundamental concept in web design and is used extensively in layout and design.

**Sample code**:

1. HTML:
```html
<div class="box-example">
  <p>This is an example of a box with padding, border, and margin</p>
</div>
```
2. CSS:
```html
.box-example {
  width: 400px;
  height: 200px;
  background-color: #f1f1f1;
  padding: 20px;
  border: 1px solid #333333;
  margin: 20px;
}
```

In the above example, we have defined a div element with a class of `box-example`. In the CSS, we have applied various properties to this class to define the dimensions, background color, padding, border, and margin of the element. We have specified a width and height of 400px and 200px respectively, and added a gray background color. We have also added 20px of padding, a 1px solid black border, and 20px of margin around the element. The resulting box will be displayed as a rectangle with text content inside, surrounded by padding, a border, and margin.

## Change appearance on a web page
CSS provides a variety of ways to change the appearance of text on a web page. Here are some common CSS properties that can be used to style text:

### 1. Font Properties

- `font-family`: specifies the font family for text.
- `font-size`: specifies the size of the font.
- `font-weight`: specifies the weight or thickness of the font.
- `font-style`: specifies whether the font should be displayed in italics or normal style.
- `text-decoration`: specifies the decoration to be applied to the text, such as underline, overline, line-through, etc.
- `text-transform`: specifies the capitalization of the text, such as uppercase, lowercase, or capitalize.

### 2. Color Properties

- `color`: specifies the color of the text.
- `background-color`: specifies the background color behind the text.

### 3. Spacing Properties

- `line-height`: specifies the height of each line of text.
- `letter-spacing`: specifies the spacing between each letter.
- `word-spacing`: specifies the spacing between each word.
- `text-indent`: specifies the indentation of the first line of text.

### 4. Alignment Properties

- `text-align`: specifies the horizontal alignment of the text.
- `vertical-align`: specifies the vertical alignment of the text.

Here's an example of how these properties can be used to style text:

```html
h1 {
  font-family: Arial, sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  text-decoration: underline;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 20px;
}

p {
  font-family: Georgia, serif;
  font-size: 18px;
  font-style: italic;
  color: #666666;
  line-height: 1.5;
  text-indent: 20px;
}
```
In the above example, we have applied different styles to the heading and paragraph elements. The heading has a larger font size, a bold font weight, and an underline decoration. The paragraph has a smaller font size, an italic font style, and an indentation of 20px on the first line. By using a combination of these properties, we can change the appearance of text on a web page to suit our design needs.

## Task
Your task is to change the appearance of text using CSS. The following is the original interface:

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12a.png"  height="600" />
</p>


- The file [💾 lab12.zip](./download/lab12.zip) is available for download. This file contains the files lab12.html and utm_logo.png. In the lab12.html file, please enter your CSS code. You are not permitted to make any changes to the HTML file that has been provided. CSS code can be entered in the `<style>` tag: 

```css
<style>
  /* your css */
</style>
```
- Part of the HTML code is as follows:

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12b.png"  height="400" />
</p>

## Output

You must create the interface as shown below.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12c.png"  width="600" />
</p>

### Lab 1: Google Font

- This lab exercise requires you to create a green box that is in the centre of the page.
- This box contains text that is written in the Indie Flower font, which was provided by Google.
- You can use properties such as width, border, text align, padding, and margin.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12d.png" width="600" />
</p>

### Lab 2: Style first letter, first line & last line

- Lab 2 contains three paragraphs of text about the history of UTM.
- Each paragraph's first alphabet should be red, bold, and 150 percent in size.
- The first paragraph's text is salmon coloured.
- The final paragraph must be in green.
- You must also comply to the text align settings for each paragraph.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12e.png"  width="600" />
</p>

### Lab 3: Border

- Lab 3 is related with the box's border.
- You must modify the box's appearance by using border features such as solid, double, dashed, and dotted.
- Each box contains border information such as 2 px, 6 px, and 8 px. For the border, please use the colour #9799a7.
- You must also draw rounded, radius, and football shapes in addition to box shapes.
- For this lab, you can also use features like background, colour, font, display, height, margin, padding top, text align, and width.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12f.png" width="600" />
</p>

### Lab 4: Box Model 1

- For Lab 4, you will learn about the model box concept.
- To create the box, enter code such as 40px padding, 30px margin, and a 15px inset blue.
- The box's background colour is yellow.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12g.png"  width="600" />
</p>

### Lab 5: Box Model 2

- Using the box model concept, Lab 5 will create a box.
- *Box2*, *item1*, and *item2* are the three classes that are used.
- The *box2* class is used to create boxes with a *greenyellow* border.
- The *item1* and *item2* classes are used to modify the appearance of the box's contents.
- Please create a box like the image below.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12h.png"  width="600" />
</p>

### Lab 6: Box Model 3

- To generate a box for Lab 6, four ids or classes are used.
box3 is the id for creating a model box. This box is located in the centre of the page. This box's information is a 3 px border that is solid and rgb coloured (42, 75, 165). The background colour is rgba (1, 247, 177, 0.483) and the size is 500px.
- The photo class, text2 id, and text3 class are all contained within the model box. The photo class is used to alter the appearance of the utm logo.png image by adding a 5px dotted border and coloured rgb pixels (251, 0, 255).
- The id text2 is used to create a box with a 6 px dashed and rgb-colored border (248, 80, 3). This box text content can be scrolled.
- The text3 class is used to make text bold or underlined.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12i.png"  width="600" />
</p>

- The following is the interface display when the text is scrolled.

<p align="center">
<img src="https://github.com/drshahizan/learn-php/blob/main/lab/css/lab12/download/lab12h.png"  width="600" />
</p>

## Submission

1. This task must be done in groups (4 people per group). 
2. Please provide your contact information in the HTML `<head>`.
```html
<!--
Lab 12: Text and Box Model
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
