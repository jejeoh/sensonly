screen.height

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    console.log(value);
    if(0.57*screen.height <= value && !document.getElementById('1').classList.contains('add')){

        document.getElementById('1').classList.add('act');
    }
    if(1.17*screen.height <= value && !document.getElementById('2').classList.contains('add')){

        document.getElementById('2').classList.add('act');
    }
    if(1.97*screen.height <= value && !document.getElementById('3').classList.contains('add')){

        document.getElementById('3').classList.add('act');
    }
    if(3*screen.height <= value && !document.getElementById('4').classList.contains('add')){

        document.getElementById('4').classList.add('act');
    }
    if(3.7*screen.height <= value && !document.getElementById('5').classList.contains('add')){

        document.getElementById('5').classList.add('act');
    }
    if(3.9*screen.height <= value && !document.getElementById('6').classList.contains('add')){

        document.getElementById('6').classList.add('act');
    }
})