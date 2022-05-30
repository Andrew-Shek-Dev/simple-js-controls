# Simple Javascript Control
To develop the HTML Control as simple as possible utilizing pure javascript without third-party tools.

## Calendar Control
You can the sample code under index.html (test folder)

To add follow code in HTML header:
```html
    <link rel="stylesheet" href="../calendar//calendar.css"/>
    <script src="../calendar/calendar.js"></script>
```

To add the control, please add following in javascript file (loaded with html file)
```javascript
SimpleCalendar({
        year:2022, //selected year
        month:5, //selected month
        select:(value)=>{ //select event when a date is selected
            console.log(value)
        }
    },
    document.querySelector("#calendar") //the container (div) element which is add calendar
);
```