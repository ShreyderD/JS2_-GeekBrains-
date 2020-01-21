//version 1 (correct one!)
/*
class MessageProto {
    constructor() {
        this.allMessages = [];
        this.newMessage = "";
    }
    messageInput() {
        console.log(typeof (this.allMessages));
        //создадим окно чата
        document.querySelector('.chat-box').innerHTML =
            `<div class="chat_header-container">
                <div class="chat-closeOpen">&#10799;</div>
                <div class="chat_header">
                    <div class="chat_img_container">
                        <div class="chat_header__img"></div>
                    </div>
                    <div class="chat_header__container">
                        <div class="chat_header__title">Тэглайн</div>
                        <div class="chat_header__subtitle">Консультант</div>
                    </div>
                </div>
            </div>
            <div class="message-history">

            </div>
            <div class="new-message-container">
                <!-- <submit class="send-message" onclick="sendMessage()">Send</submit> -->
            </div>`;


        //создаем <textarea>
        let messageBox = `<textarea class="new-message-input" value="" placeholder="Введите сообщение и нажмите Enter"></textarea>`;
        document.querySelector('.new-message-container').innerHTML = messageBox;

        //добавить тригерры на обьекты close/open и <textarea>
        document.querySelector('.chat-closeOpen').onclick = this.chatOpenClose;
        //document.querySelector('.new-message-input').onkeypress = this.sendMessage;
        document.querySelector('.new-message-input').addEventListener('keypress', (e) => {
            console.log("e: " + e);
            this.sendMessage(e);
        });
    }

    //создадим шаблон сообщения и получим все сообщения в одной переменной
    sendMessage(e) {
        //let newMessage = "";
        let mess = "";
        let currentTime = "";
        if (e.keyCode === 13) {
            e.preventDefault();
            this.newMessage = document.querySelector('.new-message-input').value;
            this.allMessages.push(this.newMessage); //не работает - почему???

            if (this.newMessage && this.newMessage != "clear") {
                this.newMessage = (this.newMessage.replace(/\s/g, '').length != 0) ? this.newMessage : "empty message";

                //this.allMessages += `<p class="message-p">${this.newMessage}</p>`;
                this.allMessages.map((msg, index) => {
                    let options = {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    };
                    currentTime = new Date().toLocaleTimeString("en-us", options);

                    let newMess = `<p class="message-p">${index}: ${msg}<span class="time"><br>${currentTime}</span></p>`;
                    mess += newMess;
                });

            } else if (this.newMessage == "clear") {
                this.allMessages = [];
            }

            //очистим поле ввода
            document.querySelector('.new-message-input').value = "";

            //выведем сообщения
            let messageHistory = document.querySelector('.message-history');
            messageHistory.innerHTML = mess; //this.allMessages;
            messageHistory.scrollTop = messageHistory.scrollHeight;
        }
    }

    //Close and Open Chat-box
    chatOpenClose() {
        document.querySelector('.message-history').classList.toggle("chat-active");
        document.querySelector('.new-message-container').classList.toggle("new-message-active");
        document.querySelector('.chat-closeOpen').classList.toggle("chat-closeOpen-active");
    }
}

let chat = new MessageProto();
chat.messageInput();
*/













//Version 2
//этот вариант отличается от предПРЕДыдущего, который не работал лишь одной строчкой: 
//мы вот эту строчку: document.querySelector('.new-message-input').onekeypress = this.allMessages;
//заменили на эту: document.querySelector('.new-message-input').addEventListener('keypress', (e) => this.sendMessage(e))
/*
class MessageProto {
    constructor() {
        this.allMessages = "";
    }
    messageInput() {
        //создадим окно чата
        document.querySelector('.chat-box').innerHTML = `
            <div class="chat_header-container">
                <div class="chat-closeOpen">&#10799;</div>
                <div class="chat_header">
                    <div class="chat_img_container">
                        <div class="chat_header__img"></div>
                    </div>
                    <div class="chat_header__container">
                        <div class="chat_header__title">Тэглайн</div>
                        <div class="chat_header__subtitle">Консультант</div>
                    </div>
                </div>
            </div>
            <div class="message-history">

            </div>
            <div class="new-message-container">
                <!-- <submit class="send-message" onclick="sendMessage()">Send</submit> -->
            </div>`;

        
        //создаем <textarea>
        let messageBox = `<textarea class="new-message-input" value="" placeholder="Введите сообщение и нажмите Enter"></textarea>`;
        document.querySelector('.new-message-container').innerHTML = messageBox;

        //добавить тригерры на обьекты close/open и <textarea>
        document.querySelector('.chat-closeOpen').onclick = this.chatOpenClose;
        document.querySelector('.new-message-input').addEventListener('keypress', (e) => this.sendMessage(e))
    }

    //создадим шаблон сообщения и получим все сообщения в одной переменной
    sendMessage(e) {
        let newMessage = "";
        if (e.keyCode === 13) {
            e.preventDefault();
            newMessage = document.querySelector('.new-message-input').value;
            //this.allMessages.push(newMessage); //не работает - почему???

            if (newMessage && newMessage != "clear") {
                newMessage = (newMessage.replace(/\s/g, '').length != 0) ? newMessage : "empty message";
                this.allMessages += `<p class="message-p">${newMessage}</p>`;
                
            } else if (newMessage == "clear") {
                this.allMessages = "";
            } 

            //очистим поле ввода
            document.querySelector('.new-message-input').value = "";

            //выведем сообщения
            let messageHistory = document.querySelector('.message-history');
            messageHistory.innerHTML = this.allMessages;
            messageHistory.scrollTop = messageHistory.scrollHeight;
        }
    }
*/
    /* Close and Open Chat-box */
/*
    chatOpenClose() { 
        document.querySelector('.message-history').classList.toggle("chat-active");
        document.querySelector('.new-message-container').classList.toggle("new-message-active");
        document.querySelector('.chat-closeOpen').classList.toggle("chat-closeOpen-active");
    }
}
let chat = new MessageProto();
chat.messageInput();

*/
