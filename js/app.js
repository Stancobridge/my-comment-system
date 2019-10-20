// COMMENT PROGRAM

const form = document.getElementById('form');
const commentWrapper = document.querySelector('.comment-output');
const items = JSON.parse(localStorage.getItem('item')) || [];

function addComment(e){
    e.preventDefault();
    const formInput = this.querySelector('#input-area').value;
    const name      = this.querySelector('#name').value;
    const site      = this.querySelector('.site').value;

    //  date/time
    const dt = new Date();
        let hour = dt.getHours();
        let minute = dt.getMinutes();
        let prepend = hour >= 12? "PM":"AM";
        let currentTime = hour + ":" + minute + " " + prepend;
        
        //get day and month
        let month = dt.getMonth();
        let year = dt.getFullYear();
        let todayDate = dt.getDate();
    
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let holdDate = `${todayDate} ${months[month]}  ${year}`;

    let item = {
        formInput,
        name,
        site,
        currentTime,
        holdDate
    };

    items.push(item);
    localStorage.setItem('item', JSON.stringify(items));
    populateList(item, commentWrapper);
    this.reset();
    console.log(items);
};

//populatelist display your comment.
function populateList(plates = [], commentWrap) {
   commentWrap.innerHTML += 
   `<li class="comment-one">
       <header class="header">
           <div class="container">
               <img src="img/6142904_kissdaniels3_jpegae88dd2f6e473750faaf8bb2a0e0b114.jfif" alt="profile" class="profile-img">
               <span class="gender">${plates.name}</span>
               <div class="exit">&times;</div>       
           </div>
       </header>
       <p class="text-node">${plates.formInput}</p>
       <span class="times"><I class="fa fa-clock icons"></I> ${plates.currentTime}</span>
       <span class="times"><I class="fa fa-envelope icons"></I> ${plates.site}</span>
       <span class="times"><I class="fa fa-calendar icons"></I> ${plates.holdDate}</span>
   </li>`;
};

form.addEventListener('submit', addComment);
populateList(items, commentWrapper);

//exit
const exitBtn = document.querySelector('.comment-output');
    exitBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(e.target.className == 'exit'){
            let li = e.target.parentElement.parentElement.parentElement;
            li.style.display = 'none';
        };
    });






//////////////////////////////////////////// USING DOM /////////////////////////////////////////////////////////////////

    //Sumbit button eventListener
//     submitBtn.addEventListener('click', function(){ 
        
// if (TEXTAREA.value == ""){
//     alert('Please Enter Comment')

// }else {
    
//     //get current time
//     const dt = new Date();
//     let hour = dt.getHours();
//     let minute = dt.getMinutes();
    
//     let prepend = hour >= 12? "PM":"AM";
//     let currentTime = hour + ":" + minute + " " + prepend;
    
//     //get day and month
//     let month = dt.getMonth();
//     let year = dt.getFullYear();
//     let todayDate = dt.getDate();

//     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
//        var holdDate = `${todayDate} ${months[month]}  ${year}`;
// // console.log(months)


//         // creat element to append the value
//         let img = document.createElement('span');
//         let p = document.createElement('p');
//         let header = document.createElement('header');
//         let commentDiv = document.createElement('div');
//         let span = document.createElement('span');
//         let exit = document.createElement('div');
//         let container = document.createElement('div');
//         let time = document.createElement('span');
//         let email = document.createElement('span');
//         let date = document.createElement('span')

//         //profile img icons
//          img.innerHTML = '<i class="fa fa-user-circle icons icon-md"></i> ';
//          span.textContent = userName.value ;
 
//         //header 
//         commentDiv.classList.add('comment-one');
//         header.classList.add('header');

//         // append attribute to the Element
//         p.textContent = TEXTAREA.value;;
//         p.classList.add('text-node');

       
//         span.classList.add('gender');
//         exit.classList.add('exit');

//         //container
//         container.classList.add('container');

//         //time selection
//         time.classList.add('times');
//         var clock;
//         clock = time.textContent = currentTime;
//         time.innerHTML =`<i class ="fa fa-clock icons"></i> ${clock}  `;
//         email.classList.add('times');
//         //Email
//         var mail;
//         mail = email.textContent = emailInput.value;
//         email.innerHTML = `<i class="fa fa-envelope icons "></i> ${mail}`
//         //Date
//          date.classList.add('times');
//          var calender;
//          calender = date.textContent = holdDate;
//          date.innerHTML = `<i class="fa fa-calendar icons "></i> ${calender}`
//         // append child element
        
//         exit.innerHTML = '&times;';
//         container.appendChild(img)
//         container.appendChild(span);
//         container.appendChild(exit);
//         header.appendChild(container);
//         commentDiv.appendChild(header);
//         commentDiv.appendChild(p);
//         commentDiv.appendChild(time)
//         commentDiv.appendChild(email)
//         commentDiv.appendChild(date)
//         //append to parent element
//         commentWrapper.insertBefore(commentDiv, commentWrapper.childNodes[0]);
//         items.push(commentDiv);
//         console.log(items)

//         // clear inputs
//      TEXTAREA.value = "";
//      userName.value = "";
//      emailInput.value = "";

// };
     
//     });
    

// //exit
// const exitBtn = document.querySelector('.comment-output');
//     exitBtn.addEventListener('click', function(e){
//         e.preventDefault();
//         if(e.target.className == 'exit'){
//             let li = e.target.parentElement.parentElement.parentElement;
//             li.style.display = 'none';
//         }
       
//     })

// //checkbox
 























