# Flexbox Project - Amateur

## **Project Overview**
This project focuses on mastering the **CSS Flexbox layout module**, which is essential for creating responsive and modern web designs. You will progress through tasks that help you understand and apply key Flexbox properties, convert traditional layouts to a Flexbox-based system, and enhance the user interface for better responsiveness and alignment.

### **By:** David Dias, Senior Software Engineer at HomeX
**Weight:** 1

---

## **Learning Objectives**
By the end of this project, you will be able to:
1. Explain **Flexbox** and its purpose.
2. Convert float-based layouts to **flex**.
3. Horizontally and vertically align elements using **Flexbox**.
4. Understand the **main** and **cross axes** in Flexbox.
5. Differentiate between properties for **flex containers** and **flex items**.
6. Use shorthand properties like `flex`.
7. Create new layouts with **Flexbox** principles.

---

## **Resources**
Refer to the following materials for guidance:
- [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy - A game for learning CSS Flexbox](https://flexboxfroggy.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [Flexbox Cheatsheet](https://flexbox.malven.co/)
- [MDN: CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Awesome Flexbox](https://github.com/afonsopacifer/awesome-flexbox)
- [Flexplorer](https://the-echoplex.net/flexyboxes/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)

---

## **Project Structure**
This project consists of several tasks where you will modify existing HTML and CSS files using Flexbox properties.

### **Tasks**
1. **Add Flexbox to the layout**
   Replace float-based layouts with `display: flex`.

2. **Reorganize sections**
   Add specific classes to different sections of the layout (e.g., `.section-services`, `.section-works`).

3. **Reverse order of elements**
   Use `flex-direction: row-reverse;` to change the visual order of elements.

4. **Wrap content**
   Apply `flex-wrap: wrap;` to ensure items wrap onto multiple lines.

5. **Space adjustments**
   Use `calc()` and margin changes to create consistent spacing between items.

6. **Flexify header and navbar**
   Convert the header and navigation bar to use `display: flex` with proper alignment.

7. **Center elements**
   Align logo and navbar items using `align-items: center`.

8. **Adjust the hero section**
   Use Flexbox for vertical and horizontal alignment in the hero section.

9. **Align About Us content**
   Apply `align-self: center` to align elements within the About Us section.

10. **Create article layout**
    Add a structured article layout with hero and content sections.

11. **Add meta and tags**
    Display metadata (author, date, tags) and style the tag list with Flexbox.

12. **Add share icons**
    Use Flexbox for the layout of social share icons.

---

## **Requirements**
- **HTML and CSS only:** No JavaScript or frameworks (e.g., React, Vue, Bootstrap).
- **File Organization:**
  - Images should be stored in the `images/` directory.
  - Follow the provided folder structure for tasks.
- **Code Standards:**
  - Files must end with a new line.
  - Consistent formatting in CSS and HTML.

---

## **Key CSS Concepts**
### **Flex Container Properties**
- `display: flex;`
- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-items`
- `align-content`

### **Flex Item Properties**
- `flex`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `align-self`
- `order`

---

## **Example Layout Features**
- **Header:** Flexbox for aligning logo and navigation.
- **Hero Section:** Center-aligned content with `flex-direction: column`.
- **Services Section:** Responsive card layout with `flex-wrap`.
- **About Us:** Centered text and images using `align-self`.
- **Footer:** Social icons laid out using Flexbox.

---

## **Directory Structure**
holbertonschool-web_front_end/
├── flexbox/ │
├── 0-index.html │
├── 0-styles.css │
├── 1-index.html │
├── 1-styles.css │
├── ... │
├── 14-article.html │
├── 14-styles.css │
├── images/ │
|── favicon.jpg │ │
├── logo-white.png │ │
├── pic-article-02.jpg │
│ └── ...


---

## **How to Run the Project**
1. Clone the repository:
   ```bash
   git clone https://github.com/<your_username>/holbertonschool-web_front_end
   cd holbertonschool-web_front_end/flexbox

2. Open any .html file in your browser or run a local server:
```
python -m http.server
```

3. Navigate to http://localhost:8000 in your browser.

## Project Deliverables
. HTML and CSS files for each task.
. A functional, visually appealing Flexbox-based layout.
. A README.md summarizing the project.
