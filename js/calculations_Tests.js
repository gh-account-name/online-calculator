// Тест 0
devDebugger.expect(isNumberCorrect(123)).willBe(true);

// Тест 1
devDebugger.expect(isNumberCorrect(123.45)).willBe(true);

// Тест 2
devDebugger.expect(isNumberCorrect()).willBe(true);

// Тест 3
devDebugger.expect(isNumberCorrect('')).willBe(false);

// Тест 4
devDebugger.expect(isNumberCorrect('0')).willBe(true);

// Тест 5
devDebugger.expect(isNumberCorrect(null)).willBe(true);

// Тест 6
devDebugger.expect(isNumberCorrect('123')).willBe(true);

// Тест 7
devDebugger.expect(isNumberCorrect('123.45')).willBe(true);

// Тест 8
devDebugger.expect(isNumberCorrect('123,45')).willBe(true);

// Тест 9
devDebugger.expect(isNumberCorrect('0,32')).willBe(true);

// Тест 10
devDebugger.expect(isNumberCorrect('0,00')).willBe(true);

// Тест 11
devDebugger.expect(isNumberCorrect('0.')).willBe(false);

// Тест 12
devDebugger.expect(isNumberCorrect('.31')).willBe(false);

// Тест 13
devDebugger.expect(isNumberCorrect(' 123.45')).willBe(false);

// Тест 14
devDebugger.expect(isNumberCorrect('123,,45')).willBe(false);

// Тест 15
devDebugger.expect(isNumberCorrect('1000 000')).willBe(false);

// Тест 16
devDebugger.expect(isNumberCorrect('123.45,56')).willBe(false);

// Тест 17
devDebugger.expect(isInNumberSystem(12,10)).willBe(-1);

// Тест 18
devDebugger.expect(isInNumberSystem('12','10')).willBe(-1);

// Тест 19
devDebugger.expect(isInNumberSystem('12',10)).willBe(true);

// Тест 20
devDebugger.expect(isInNumberSystem('12,345',10)).willBe(true);

// Тест 21
devDebugger.expect(isInNumberSystem(' 12,345',10)).willBe(false);

// Тест 22
devDebugger.expect(isInNumberSystem('31',2)).willBe(false);

// Тест 23
devDebugger.expect(isInNumberSystem('12AFF',10)).willBe(false);

// Тест 24
devDebugger.expect(convertToDecimal(23,2)).willBe(-1);

// Тест 25
devDebugger.expect(convertToDecimal('23',10)).willBe(23);

// Тест 26
devDebugger.expect(convertToDecimal('23',4)).willBe(11);

// Тест 27
devDebugger.expect(convertToDecimal('23.4',5)).willBe(13.8);

// Тест 28
devDebugger.expect(convertFromDecimal('12','4')).willBe(-1);

// Тест 29
devDebugger.expect(convertFromDecimal('12',4)).willBe('30');

// Тест 30
devDebugger.expect(convertFromDecimal(12.3,30)).willBe('c.9');

// Тест 31
devDebugger.expect(convertFromDecimal('12.3',30)).willBe('c.9');

// Тест 32
devDebugger.expect(convertFromDecimal('12B',30)).willBe('NaN');

// Тест 33
devDebugger.expect(convertNumber(12)).willBe(-1);

// Тест 34
devDebugger.expect(convertNumber(12,3)).willBe(-1);

// Тест 35
devDebugger.expect(convertNumber(12,4,36)).willBe(-1);

// Тест 36
devDebugger.expect(convertNumber('12','4','36')).willBe(-1);

// Тест 37
devDebugger.expect(convertNumber('12',4,36)).willBe('6');

// Тест 38
devDebugger.expect(convertNumber('12,53',8,36)).willBe('a.o6r');

// Тест 39
devDebugger.expect(convertNumber('12,53.f',8,36)).willBe(-2);

// Тест 40
devDebugger.expect(convertNumber('12,',8,36)).willBe(-2);

// Тест 41
devDebugger.expect(convertNumber('12',2,10)).willBe(-3);

// Тест 42
devDebugger.expect(convertNumber('1101',2,16)).willBe('d');

// Тест 43
devDebugger.expect(convertNumber('01101',2,16)).willBe('d');

// Тест 44
devDebugger.expect(convertNumber('12',5,5)).willBe('12');

