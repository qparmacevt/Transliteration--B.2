function main() {

    //location.reload();
    
    let hundr = {
        '1': 'Сто',
        '2': 'Двісті',
        '3': 'Триста',
        '4': 'Чотириста',
        '5': "П'ятсот",
        '6': 'Шістсот',
        '7': 'Сімсот',
        '8': 'Вісімсот',
        '9': "Дев'ятсот",
    }

    let decim = {
          '2': 'Двадцять',
          '3': 'Тридцять',
          '4': 'Сорок',
          '5': "П'ятдесят",
          '6': 'Шістдесят',
          '7': 'Сімдесят',
          '8': 'Вісімдесят',
          '9': "Дев'яносто",
          '0': '',
    }

    let units = {
        '1': 'Одна',
        '2': 'Дві',
        '3': 'Три',
        '4': 'Чотири',
        '5': "П'ять",
        '6': 'Шість',
        '7': 'Сім',
        '8': 'Вісім',
        '9': "Дев'ять",
        '0': '',
    }

    let teens = {
        '10': 'Десять',
        '11': 'Одинадцять',
        '12': 'Дванадцять',
        '13': 'Тринадцять',
        '14': 'Чотирнадцять',
        '15': "П'ятнадцять",
        '16': 'Шістнадцять',
        '17': 'Сімнадцять',
        '18': 'Вісімнадцять',
        '19': "Дев'ятнадцять",
    }

    let hriv = {
        '1': 'Гривня',
        '2': 'Гривні',
        '3': 'Гривні',
        '4': 'Гривні',
        '5': 'Гривень',
        '6': 'Гривень',
        '7': 'Гривень',
        '8': 'Гривень',
        '9': 'Гривень',
        '0': 'Гривень',
    }

    
    let value = parseFloat(document.getElementById("input").value);
    value = value.toFixed(2);
    let splited  = value.split('');
    let te = splited[0]+splited[1];

    if (splited.length <= 4 && splited[0]==0) {
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${splited[2]}${splited[3]} Коп.`;
    } else if (splited.length <= 4 && splited[0] in units) {
        let unit = (units[splited[0]]);
        let hr = (hriv[splited[0]]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${unit} ${hr}, ${splited[2]}${splited[3]} Коп.`;
    } else if (splited.length <= 5 && te >= 10 && te <= 14){
        res = parseInt(te);
        let teen = (teens[te]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${teen} Гривень, ${splited[3]}${splited[4]} Коп.`;
    } else if (splited.length <= 5 && splited[0] == 1) {
        let res = splited[0] + splited[1];
        res = parseInt(res);
        let teen = (teens[res]);
        let hr = (hriv[splited[1]]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${teen} ${hr}, ${splited[3]}${splited[4]} Коп.`;
    } else if (splited.length <= 5 && splited[0] > 1) {
        let dec = (decim[splited[0]]);
        let unit = (units[splited[1]]);
        let hr = (hriv[splited[1]]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${dec} ${unit} ${hr}, ${splited[3]}${splited[4]} Коп.`;
    } else if (splited.length <=6 && splited[1] == 0){
        let hund = (hundr[splited[0]]);
        let unit = (units[splited[2]]);
        let hr = (hriv[splited[2]]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${hund} ${unit} ${hr}, ${splited[4]}${splited[5]} Коп.`;
    } else if (splited.length <=6 && splited[1] == 1 && splited[1]+splited[2]>=10 && splited[1]+splited[2]<=14) {
        let hund = (hundr[splited[0]]);
        let res = splited[1] + splited[2]
        let teen = (teens[res]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${hund} ${teen} Гривень, ${splited[4]}${splited[5]} Коп.`;
    } else if (splited.length <=6 && splited[1] == 1 && splited[1]+splited[2]>=14) {
        let hund = (hundr[splited[0]]);
        let res = splited[1] + splited[2]
        let teen = (teens[res]);
        let hr = (hriv[splited[2]]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${hund} ${teen} ${hr}, ${splited[4]}${splited[5]} Коп.`;
    }else if (splited.length <=6 && splited[1] > 1){
        let hund = (hundr[splited[0]]);
        let dec = (decim[splited[1]])
        let unit = (units[splited[2]]);
        let hr = (hriv[splited[2]]);
        document.getElementById("output").innerHTML = ' ';
        document.getElementById("output").innerHTML += `${hund} ${dec} ${unit} ${hr}, ${splited[4]}${splited[5]} Коп.`;

    }

}