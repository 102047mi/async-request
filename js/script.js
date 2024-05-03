const loadButton = document.getElementById("loadButton")
const resultElement = document.getElementById("result")

///XMLHttpRequest - оюъект с помощью которго можно работать с асинхроными запросами
//перед отправкой на сервер объект необходимо поготовить
//Для этого вызывается метод open() с двумя аргументами: метод протокола и путь к файлу сервера, который нужно загрузить
loadButton.addEventListener("click", () => {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'content.txt')
    //теперь запрос можно отправить с помощью метода send()
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status === 404) {
            console.log("что-то не так")
        } else {
            console.log(xhr.responseText)
        }
    })
})
