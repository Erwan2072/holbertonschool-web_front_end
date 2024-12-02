# **Developer Tools Project**

## **Description**
In this project, you will use browser Developer Tools to analyze and manipulate the website [https://dev-tools.hbtn.info/](https://dev-tools.hbtn.info/). The tasks focus on using different features of DevTools, such as inspecting elements, modifying styles, debugging, auditing, and extracting information about the webpage.

---

## **Learning Objectives**
By the end of this project, you will be able to explain the following concepts:

- What Developer Tools in your browser are.
- How to open Developer Tools in Chrome, Firefox, Safari, and Edge.
- How to use the Elements tab to inspect and modify HTML and CSS.
- How to audit a webpage using Lighthouse.
- How to create and run JavaScript snippets directly in the browser.
- How to retrieve information about files and server configurations.
- How to block requests and analyze network activity.
- How to determine the amount of JavaScript or CSS used on a webpage.
- How to detect and fix 404 issues.
- How to move elements within a webpage dynamically.

---

## **Requirements**
- A `README.md` file at the root of the project folder is mandatory.
- Use the newest version of Google Chrome browser (78.0.3904.70 or later).
- Screenshots can be taken via the operating system's screenshot tool (not necessarily through DevTools).

---

## **Tasks Overview**

### **Task 0: Responsive Device**
- Take a screenshot of the website in **iPhone X** view using the Device Toolbar in DevTools.
- Save it as `0-responsive_device.png`.

### **Task 1: Change Background Color**
- Change the background color of the `<body>` to `#4233bd`.
- Take a screenshot of the **Portfolio** section.
- Save it as `1-change_bg_color.png`.

### **Task 2: Force Hover State**
- Force the hover state on the **cake** block in the Portfolio section.
- Take a screenshot of it.
- Save it as `2-pathways_menu.png`.

### **Task 3: Copy Button Styles**
- Copy all the CSS styles applied to the **Download me!** button.
- Save the styles in a file named `3-button_styles`.

### **Task 4: Change Button Styles**
- Change:
  - `btn-primary` background color to `#0080ee`.
  - `btn-outline-light` text color to `#0020aa`.
- Take a screenshot of all changed buttons in a single image.
- Save it as `4-new_buttons.png`.

### **Task 5: Remove Cake Box**
- Remove the `<div>` of the **cake** box in the Portfolio section.
- Take a screenshot of the result.
- Save it as `5-deleted_elements.png`.

### **Task 6: Identify CSS Declaration Source**
- Identify the file where the `margin-bottom` of the `<h2>` (ABOUT) is declared.
- Save the filename in `6-declaration_file`.

### **Task 7: Count Click Listeners**
- Count how many times click events are referenced in JavaScript files.
- Save the number in `7-number_of_listeners`.

### **Task 8: HSL Color**
- Find the HSL equivalent of the `background-color` of the **Send** button.
- Save it in `8-hsl`.

### **Task 9: Max-Width of Container**
- Determine the max-width of the first `.container` in the About section.
- Save it as `9-max_width`.

### **Task 10: Move Sections**
- Swap the About and Portfolio sections dynamically.
- Take a screenshot of the result.
- Save it as `10-moved_around.png`.

### **Task 11: Freelancer CSS Size**
- Determine the size of the `freelancer.css` file in bytes.
- Save the value in `11-coverage`.

### **Task 12: Print Version**
- Emulate the print version of the webpage and take a screenshot of the homepage.
- Save it as `12-print_version.png`.

### **Task 13: Console `$0`**
- Select the Avatar image in the header, type `$0` in the console, and note the result.
- Save the result in `13-logo_dollar0`.

### **Task 14: Document Title**
- Use `console.log(document.title)` in the console and save the returned value in `14-doc_title`.

### **Task 15: Front-End Framework**
- Identify the front-end framework used on the page.
- Save the answer (A, B, C, or D) in `15-hbtn_framework`.

### **Task 16: Homepage Weight**
- Determine the total weight of the homepage.
- Take a screenshot of the result.
- Save it as `16-weight.png`.

### **Task 17: Number of Requests**
- Count the total number of requests made by the page.
- Take a screenshot of the result.
- Save it as `17-requests.png`.

### **Task 18: CSS Files**
- Count how many CSS resources are loaded on the page.
- Save the number in `18-css_loaded`.

### **Task 19: Images Loaded**
- Count how many image resources are loaded on the page.
- Save the number in `19-images_loaded`.

### **Task 20: Favicon Type**
- Identify the type of the favicon image.
- Save the type in `20-favicon_type`.

### **Task 21: Font Library**
- Identify the font library used for icons.
- Save the name in `21-hbtn_font_lib`.

### **Task 22: XHR Calls**
- Identify the resource generating the XHR calls.
- Save the name in `22-xhr_calls`.

### **Task 23: Performance Audit**
- Run a performance audit (desktop mode, no throttling) and take a screenshot of the result.
- Save it as `23-performance_audit.png`.

### **Task 24: Static Assets**
- Count the number of static assets needing a better cache policy.
- Take a screenshot of the result.
- Save it as `24-static_assets_audit.png`.

### **Task 25: Accessibility Issue**
- Determine the accessibility contrast issue and save the answer (A, B, or C) in `25-contrast_issue`.

### **Task 26: No Alt Attribute**
- Find the classes of all images without an `alt` attribute.
- Save the classes in `26-no_alt`.

### **Task 27: Missing Attribute**
- Identify the missing attribute on links with `target="_blank"`.
- Save the answer (A, B, or C) in `27-missing_attr`.

### **Task 28: SEO Links**
- Identify `<a>` links with insufficient text descriptions.
- Take a screenshot and save it as `28-unclear_desc.png`.

### **Task 29: Console Snippet**
- Create a snippet called `allcolors.js`, run it, and take a screenshot of the result.
- Save it as `29-how_many_colors.png`.

### **Task 30: Block CSS**
- Block all CSS requests and take a screenshot of the result.
- Save it as `30-no_css.png`.

### **Task 31: Session Storage**
- Identify the only key in session storage.
- Save it in `31-session_storage_key`.

### **Task 32: Service Workers**
- Check if the page uses service workers.
- Save the answer (Yes or No) in `32-service_workers`.

### **Task 33: SSL Certificate**
- Identify the organization that issued the SSL certificate.
- Save the name in `33-ssl_cert`.

### **Task 34: SSL Expiration**
- Find the SSL certificate's expiration date and take a screenshot.
- Save it as `34-ssl_expiration.png`.

---

## **How to Submit**
1. Ensure all files are correctly named and saved in the `developer_tools` directory.
2. Commit your work with a clear message:
   ```bash
   git add .
   git commit -m "Completed Developer Tools project tasks"
   git push
   ```
