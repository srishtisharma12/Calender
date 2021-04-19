let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let calender_body = document.getElementById("calendar-body"); 

    
    calender_body.innerHTML = "";


    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                
                 //todays date is grey coloured
                 if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-secondary");
                }
               
                //colour india holidays with green
               
                  if (date ==26 && year == 2021 && month == 0) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Independence day!");});  
                }
                  if (date ==29 && year == 2021 && month == 2) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Holi!");}); 
                }
               
                  if (date ==13 && year == 2021 && month == 4) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Ramzan/Eid-Ul-Fitr!");}); 
                }
                  if (date ==30 && year == 2021 && month == 7) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Janamashtmi!");}); 
                }
                  if (date ==15 && year == 2021 && month == 9) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Dusshera!");}); 
                }
                  if (date ==4 && year == 2021 && month == 10) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Diwali!");}); 
                }
                  if (date ==5 && year == 2021 && month == 10) {
                    cell.classList.add("bg-success");
                    cell.addEventListener("click", function(){alert("India celebrates Diwali!");}); 
                }
               
                 
                //colour dallas holiday with yellow
               
               
               
           
                 
                  if (date ==31 && year == 2021 && month == 4) {
                   cell.classList.add("bg-warning");
                   cell.addEventListener("click", function(){alert("Dallas celebrates Memorial Day!");}); 
                }
                  if (date ==5 && year == 2021 && month == 6) {
                    cell.classList.add("bg-warning");
                    cell.addEventListener("click", function(){alert("Dallas observes Independence day!");}); 
                }
                  if (date ==6 && year == 2021 && month == 8) {
                    cell.classList.add("bg-warning");
                    cell.addEventListener("click", function(){alert("Dallas celebrates Labor day!");}); 
                }
                  if (date ==25 && year == 2021 && month == 10) {
                    cell.classList.add("bg-warning");
                    cell.addEventListener("click", function(){alert("Dallas celebrates Thanksgiving!");}); 
                }
                  if (date ==26 && year == 2021 && month == 10) {
                   cell.classList.add("bg-warning");
                   cell.addEventListener("click", function(){alert("Dallas celebrates Thhanksgiving!");}); 
                }
                  if (date ==24 && year == 2021 && month == 11) {
                    cell.classList.add("bg-warning");
                    cell.addEventListener("click", function(){alert("Dallas celebrates Christmas Eve!");}); 
                }
                 
                  if (date ==31 && year == 2021 && month == 11) {
                    cell.classList.add("bg-warning");
                    cell.addEventListener("click", function(){alert("Dallas celebrates New Year's Eve !");}); 
                }
               
                //colour common india and dallas holidays with blue
               
                   if (date ==1 && year == 2021 && month == 0) {
                    cell.classList.add("bg-primary");
                    cell.addEventListener("click", function(){alert("New Year's day!");}); 
                }
                 if (date ==2 && year == 2021 && month == 3) {
               
                    cell.classList.add("bg-primary");
                    cell.addEventListener("click", function(){alert("Good Friday!");}); 
                }
               
                 if (date ==27 && year == 2021 && month == 11) {
                   cell.classList.add("bg-primary");
                   cell.addEventListener("click", function(){alert("Christmas!");}); 
                }

               

                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }
 
        calender_body.appendChild(row); // appending each row into calendar body.
    }
}

