    var wrds = ['репа', 'либа', 'гит', 'баг', 'питон', 'код', 'программист'];
    var сөз = wrds[Math.floor(Math.random() * wrds.length)];
    var dogadalsya = [];
    var blunders = 0;
    var maxOmissions = 6;

    console.log('=== ВИСЕЛИЦА ===');
    console.log('Слово: ' + сөз.split('').map(function() { return '_'; }).join(' '));
    console.log('Вводи буквы по одной');
    console.log('Используй: tryLetter() для ввода')

    function tryLetter(lttr) {
    if (dogadalsya.includes(lttr)) {
        console.log('Эта буква уже была');
        return;
    }
    
    dogadalsya.push(lttr);
    
    if (сөз.includes(lttr)) { 
        console.log('Есть такая буква!');
    } else {
        blunders++;
        console.log('Нет такой буквы! Ошибок: ' + blunders + '/' + maxOmissions);
    }
    
    var көрсөтүү = сөз.split('').map(function(l) {
        return dogadalsya.includes(l) ? l : '_';
    }).join(' ');
    
    console.log('Слово: ' + көрсөтүү);

    if (!көрсөтүү.includes('_')) {
        console.log('ПОБЕДА! Слово угадано!');
    }
  
    if (blunders >= maxOmissions) {
        console.log('ПРОИГРЫШ! Слово было: ' + сөз);
    }
    }

    // Пример:
    // tryLetter('буква')
  