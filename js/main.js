$(document).ready(function () {
    let currentFloor = 2;
    let buttonUp= $('.conter-up');
    let buttonDown = $('.counter-down');
    let counter = $('.counter');
    let floorItem = $('.home-img path');
    let btnModalOpen = $('.button-primery');
    let modal = $('.modal');
    let modalCloseBtm = $('.modal-close-button');
    let flatsImg = $('.flat-items');
    let flatsList = $('.flat-link');
    let flatsNum = $('.flat-num');


    function toggleModal(){
        modal.toggleClass('is-open');
    }

    function clearFloor(){
        floorItem.removeClass('home-active');
    }

    function clearFlat(){
        flatsImg.removeClass('flat-active');
        flatsList.removeClass('link-active');
        flatsList.children('span').removeClass('link-active');
    }

    

    
    floorItem.on('click',toggleModal);
    modalCloseBtm.on('click', toggleModal);
    btnModalOpen.on('click',toggleModal);

    flatsList.on('mouseover', function (){
        clearFlat();
        $(this).toggleClass('link-active');
        $(this).children('span').addClass('link-active');
        i = $(this).attr('data-num');
        $(`[data-n=${i}]`).addClass('flat-active');
        
    });

    flatsImg.on('mouseover', function (){
        clearFlat();
        $(this).toggleClass('flat-active');
        i = $(this).attr('data-n');
        $(`[data-num=${i}]`).toggleClass('link-active');
        $(`[data-num=${i}]`).children('span').addClass('link-active');
    });

    floorItem.on('mouseover', function (){
        clearFloor();
        buttonUp.removeClass('button-disable');
        buttonDown.removeClass('button-disable');
        currentFloor=$(this).attr('data-floor');
        counter.text(currentFloor);
        if(currentFloor[0]=='0'){
            flatsNum.text(currentFloor[1]);
        }else{
            flatsNum.text(currentFloor);
        }
        $(this).toggleClass('home-active');
        if (currentFloor=='02'){
            buttonDown.toggleClass('button-disable');
        }
        if (currentFloor=='18'){
            buttonUp.toggleClass('button-disable');
        }
        
    });

    buttonUp.on('click', function(){
        if (currentFloor<18){
            clearFloor();
            buttonDown.removeClass('button-disable');
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            counter.text(usCurrentFloor);
            if(currentFloor[0]=='0'){
                flatsNum.text(currentFloor[1]);
            }else{
                flatsNum.text(currentFloor);
            }
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('home-active');
            if (currentFloor==18){
                buttonUp.toggleClass('button-disable');
            }
            

        }
    });

    buttonDown.on('click', function(){
        if (currentFloor>2){
            clearFloor();
            buttonUp.removeClass('button-disable');
            currentFloor--;
            
            usCurrentFloor= currentFloor.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping:false});
            counter.text(usCurrentFloor);
            if(currentFloor[0]=='0'){
                flatsNum.text(currentFloor[1]);
            }else{
                flatsNum.text(currentFloor);
            }
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('home-active');
            if (currentFloor==2){
                buttonDown.toggleClass('button-disable');
            } 


        }
    });
    if (currentFloor==2){
        buttonDown.toggleClass('button-disable');
        buttonUp.removeClass('button-disable');
    } 
});

