const calculaterTemp = () => {

    const number1 = document.getElementById('temp').value;
    const Temselect = document.getElementById('temp_diff');
    const value1 = temp_diff.options[Temselect.selectedIndex].value;
    // console.log(value1);

    const caltofah = (cel) =>{
        let fahrenheit = Math.round((cel *9/5)+32);
        return fahrenheit;
    }

    const fahtocel = (fah) => {
        let Celcius = Math.round((fah-32)*5/9)
        return Celcius;  
    }


    let result;

    if(value1 == 'cel'){
        result = caltofah(number1);
        document.getElementById('resultContainer').innerHTML = `= ${result}*Fahrenheit `
    }else{
        result = fahtocel(number1);
        document.getElementById('resultContainer').innerHTML = `= ${result}*Celsius `
    }

}