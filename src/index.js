module.exports = function check(str, bracketsConfig) {
  let openBraket = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ')') {
            if (openBraket === '(') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                return false;
            }
        } else if (str[i] === ']') {
            if (openBraket === '[') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                return false;
            }
        } else if (str[i] === '}') {
            if (openBraket === '{') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                return false;
            }
        } else if (str[i] === '|') {
            if (openBraket === '|') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                openBraket = str[i];
            }
        } else if (str[i] === '2') {
            if (openBraket === '1') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                return false;
            }
        } else if (str[i] === '4') {
            if (openBraket === '3') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                return false;
            }
        } else if (str[i] === '6') {
            if (openBraket === '5') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                return false;
            }
        } else  if (str[i] === '7') {
            if (openBraket === '7') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
              openBraket = str[i];
            }
        } else if (str[i] === '8') {
            if (openBraket === '8') {
                str = str.slice(0, i-1) + str.slice(i+1);
                i = i - 3;                
            } else {
                openBraket = str[i];
            }
        } else {
            openBraket = str[i];
        }
    }
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}
