const loadSpinner = (isLoad) => {
    if(isLoad){
        document.getElementById('loadingSpinner').classList.remove('hidden')
    }else{
        document.getElementById('loadingSpinner').classList.add('hidden')

    }
}