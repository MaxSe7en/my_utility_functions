// A, a, B, b, C, c, D, d, E, e, F, f, G, g, H, h, I, i, J, j, K, k, L, l, M, m, N, n, O, o, P, p, Q, q, R, r, S, s, T, t, U, u, V, v, W, w, X, x, Y, y, Z, z, 

// generate random password string of eight characters 
//password should contain UpperCase, lowerCase, specialCharacter, numbers
function generateRandomPassword(){
    const alphabetsCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = ["@", "#", "$",".", "&", "|", "!", "?", "%", "*", "(", ")", "-", "_", "+", "=", "/", "\\", ":", ";", ",", "~", "`", "<", ">", "[", "]", "{", "}"]

    
    function getRandomCharacter(characters) {
        return characters[Math.floor(Math.random() * characters.length)];
    }
    
    let password = [
        getRandomCharacter(alphabetsCaps),
        getRandomCharacter(smallLetters),
        getRandomCharacter(numbers),
        getRandomCharacter(symbols),
    ].join('');

    for(let i = 0; i < 4; i++){
        let randomIndex = Math.floor(Math.random() * 3);
        switch(randomIndex){
            case 0:
                password += getRandomCharacter(alphabetsCaps);
                break;
            case 1:
                password += getRandomCharacter(smallLetters);
                break;
            case 2:
                password += getRandomCharacter(numbers);
                break;
            case 3:
                password += getRandomCharacter(symbols);
                break;
        }
    }
    return password;
}


function generateRandomPasswords() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$.&|!?%*()-_+=/\\:;~`<>[]{},";
    
    function getRandomCharacter() {
        return characters[Math.floor(Math.random() * characters.length)];
    }

    const characterSet = new Set([
        getRandomCharacter(),
        getRandomCharacter(),
        getRandomCharacter(),
        getRandomCharacter(),
    ]);

    const uniqueCharacters = Array.from(characterSet);
    const shuffledCharacters = [...characters].sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
        uniqueCharacters.push(shuffledCharacters[i]);
    }

    return uniqueCharacters.join('');
}

// Example usage
const password = generateRandomPasswords();
console.log(password);


console.log(generateRandomPassword())
// console.log(generateRandomPassword())
// console.log(generateRandomPassword())
// console.log(generateRandomPassword())
// console.log(generateRandomPassword())
// console.log(generateRandomPassword())
// console.log(generateRandomPassword())