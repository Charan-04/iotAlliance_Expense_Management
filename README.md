# TASK-1 
[Website Link](https://charan-04.github.io/iotAlliance_Expense_Management/) <br />
I have built a simple expense-management system website using HTML,CSS,JAVASCRIPT and DOM.

<img width="1440" alt="Pic1" src="https://user-images.githubusercontent.com/77110886/136391528-9c54a36f-9da4-431c-9ac3-52356d599d77.png">

**The design**<br />
I have used Figma to create designs for this project, Beginning with a design always makes writing code simpler. Selecting a Design helps us think in a structured manner which helps us to complete the website quickly.

**The HTML**<br />
I have created index.html in the folder and included bootstrap cdn in the head tag.I have taken two containers, the left one takes 40% of the space and the right one takes the rest. Thanks to Bootstrap Grid!
The left container has a title, actual budget and a pie chart.
The right container has a title, a dropdown to select the expense type,3 input fields and expense list will be displayed after we add some expenses.

**The CSS**<br />
As i have used bootstrap most of the CSS-stuff is already taken care of for us.Bootstrap does all the positioning and design work.So we only have to add margins, font-sizes and colors.
I have applied a linear Gradient on the left container to make the website to look better.

**The JS**<br />
JS is where the magic happens!, I have used DOM manipulation.
These are the major features i added to the website.
1.The colour of the submit button changes whenever we click on the expense type( green for savings, red for expense and bootstrap warning colour for investments.
2.Whenever we click on the submit button a row listing the date, description and value(with colours relating to expense type) will be added in the right container and the value will be added or subtracted in the left container depending on the expense type and the input fields gets reset.
3.If the user forgets to add any input field then it generates an alert to enter the details to the user.

**The PIE CHART**<br />
I have used the Chart.js library which is easy to use.This uses a canvas element to provide our charts. The pie chart indicates all the three expense types with the amount displayed when you hover over it.
