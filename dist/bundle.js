(()=>{"use strict";var e=function(){function e(){}return e.prototype.checkBookFields=function(){var t=document.getElementById("bookNameLabel");if(null!=t){if(""===e.bookName.value)return t.style.display="block",!1;t.style.display="none"}var o=document.getElementById("bookAuthorLabel");if(null!=o){if(""===e.author.value)return o.style.display="block",!1;o.style.display="none"}var r=document.getElementById("bookYearLabel");if(null!=r){if(""===e.yearOfPublication.value)return r.style.display="block",!1;r.style.display="none"}return!0},e.prototype.checkUserFields=function(){var t=document.getElementById("userNameLabel");if(null!=t){if(""===e.userName.value)return t.style.display="block",!1;t.style.display="none"}var o=document.getElementById("emailLabel");if(null!=o){if(""===e.email.value)return o.style.display="block",!1;o.style.display="none"}return!0},e.bookName=document.getElementById("bookName"),e.author=document.getElementById("author"),e.yearOfPublication=document.getElementById("yearOfPublication"),e.userName=document.getElementById("userName"),e.email=document.getElementById("email"),e}(),t=function(){function e(e,t,o){this.bookName=e,this.author=t,this.yearOfPublishing=o,this.isBorrowed=!1,this.id=Math.floor(1e9*Math.random())}return e.prototype.borrow=function(){this.isBorrowed=!0},e.prototype.return=function(){this.isBorrowed=!1},e}(),o=function(){function e(e,t){this.name=e,this.email=t,this.id=Math.floor(1e9*Math.random()),this.borrowedBooks=[]}return e.prototype.getId=function(){return this.id},e.prototype.borrow=function(e){this.borrowedBooks.push(e)},e.prototype.canBorrow=function(){return this.borrowedBooks.length<3},e.prototype.canReturn=function(e){return!!this.borrowedBooks.includes(e)},e.prototype.return=function(e){this.borrowedBooks=this.borrowedBooks.filter((function(e){return e!=e}))},e}(),r=function(){function e(){this.books=[],this.users=[]}return e.prototype.addBook=function(e){this.books.push(e)},e.prototype.addUser=function(e){this.users.push(e)},e.prototype.getUsers=function(){return this.users},e.prototype.getBooks=function(){return this.books},e.prototype.find=function(e){return this.users.filter((function(t){return t.id===e}))[0]},e.prototype.findBook=function(e){var t=!0;this.books.forEach((function(o){o.author!==e&&o.bookName!==e||(alert(JSON.stringify(o)),t=!1)})),t&&alert("Книги з таким ім'ям чи автором не знайдено")},e.prototype.saveToLocalStorage=function(){localStorage.clear(),localStorage.setItem("library",JSON.stringify({books:this.books,users:this.users}))},e.prototype.loadFromLocalStorage=function(){var e=localStorage.getItem("library");if(e){var t=JSON.parse(e),o=t.books,r=t.users;this.books=o,this.users=r}},e.prototype.clear=function(){localStorage.clear()},e}(),n=function(){function n(){}return n.prototype.getUserById=function(e){var t=n.library.find(e);if(t)return t},n.prototype.findBook=function(){var e=prompt("Ввведіть назву чи автора книги");null!=e&&""!=e?n.library.findBook(e):alert("Порожній рядок")},n.prototype.loadContent=function(){var e=this;n.library.loadFromLocalStorage(),console.log(n.library);var t=n.library.getUsers(),o=n.library.getBooks();t.forEach((function(t){e.createUserElement(t),console.log(t)})),o.forEach((function(t){e.createBookElement(t)}))},n.prototype.addBook=function(){var o=new t(e.bookName.value,e.author.value,parseInt(e.yearOfPublication.value));n.library.addBook(o),this.createBookElement(o),n.library.saveToLocalStorage(),console.log("Book added: ",o)},n.prototype.addUser=function(){var t=new o(e.userName.value,e.email.value);n.library.addUser(t),this.createUserElement(t),n.library.saveToLocalStorage(),console.log("User added: ",t)},n.prototype.createBookElement=function(e){var t=this,o=document.createElement("div"),r=document.createElement("label");r.textContent="Назва книги: ".concat(e.bookName,", Автор: ").concat(e.author,", Рік: ").concat(e.yearOfPublishing,")");var n=document.createElement("button");e.isBorrowed?n.textContent="Повернути":n.textContent="Позичити",n.classList.add("btn","btn-secondary"),n.style.float="right",n.id="Borrow",n.addEventListener("click",(function(o){o.preventDefault();var r,a=!0;if("Позичити"==n.textContent)if(null!=(r=prompt("введіть ID користувача"))||""==r){var i=void 0;try{i=parseInt(r),(l=t.getUserById(i))?l.canBorrow()?(e.borrow(),l.borrow(e.id),a=!1,alert("Книга ".concat(e.bookName," (").concat(e.yearOfPublishing,"), була позичена ").concat(l.id," ").concat(l.name," ").concat(l.email)),n.textContent="Повернути"):alert("Користувач вже позичив 3 книги"):alert("Не існує користувача з таким ID")}catch(e){alert("Введіть коректні дані")}}else alert("Порожній рядок");if("Повернути"==n.textContent&&a)if(null!=(r=prompt("введіть ID користувача"))||""==r){i=void 0;try{var l;i=parseInt(r),(l=t.getUserById(i))?l.canReturn(e.id)?(e.return(),l.return(e.id),alert("Книга ".concat(e.bookName," (").concat(e.yearOfPublishing,"), була повернута")),n.textContent="Позичити"):alert("Користувач немає цієї книги"):alert("Не існує користувача з таким ID")}catch(e){alert("Введіть коректні дані")}}else alert("Порожній рядок")}));var a=document.createElement("hr");o.appendChild(r),o.appendChild(n),o.appendChild(a);var i=document.getElementById("bookList");i&&i.appendChild(o)},n.prototype.createUserElement=function(e){var t=document.createElement("div"),o=document.createElement("label");o.textContent="ID: ".concat(e.id,", Ім'я: ").concat(e.name,", Email: ").concat(e.email,")");var r=document.createElement("hr");t.appendChild(o),t.appendChild(r);var n=document.getElementById("userList");n&&n.appendChild(t)},n.prototype.clear=function(){n.library.clear()},n.library=new r,n}(),a=function(){function t(){this.validation=new e,this.libraryService=new n,this.addUserBookHandler(),this.libraryService.loadContent(),this.addFindHandler()}return t.prototype.addFindHandler=function(){var e=this;document.getElementById("findButton").addEventListener("click",(function(t){t.preventDefault(),e.libraryService.findBook()}))},t.prototype.addUserBookHandler=function(){var e=this;document.getElementById("addBook").addEventListener("click",(function(t){t.preventDefault(),e.validation.checkBookFields()&&e.libraryService.addBook()})),document.getElementById("addUser").addEventListener("click",(function(t){t.preventDefault(),e.validation.checkUserFields()&&e.libraryService.addUser()}))},t}();document.addEventListener("DOMContentLoaded",(function(){new a}))})();