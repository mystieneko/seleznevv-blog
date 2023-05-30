const newstoast = document.getElementById("newstoast");
const refreshtoast = document.getElementById("refreshtoast");
const deletetoast = document.getElementById("deletetoast");
const cleartoast = document.getElementById("cleartoast");

newstoast.addEventListener("click", () => {

    Toastinette.init({
            position: 'top-center',
            title: 'Успешно',
            message: 'Новость добавлена!',
            type: 'success',
            autoClose: 4000,
            progress: true
    });
    
});

refreshtoast.addEventListener("click", () => {

    Toastinette.init({
            position: 'top-center',
            title: 'Информация',
            message: 'Обновлено',
            type: 'info',
            autoClose: 2000,
            progress: true
    });
    
});

deletetoast.addEventListener("click", () => {

    Toastinette.init({
            position: 'top-center',
            title: 'Информация',
            message: 'Удалено',
            type: 'info',
            autoClose: 2000,
            progress: true
    });
    
});

cleartoast.addEventListener("click", () => {

    Toastinette.init({
            position: 'top-center',
            title: 'Информация',
            message: 'Очищено',
            type: 'info',
            autoClose: 2000,
            progress: true
    });
    
});