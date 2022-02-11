class EmptyStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class InvalidStringError extends Error {
    constructor(message) {
        super(message);
    }
}

class PartialStringError extends Error {
    constructor(message, partialResult) {
        super(message);
        this.partialResult = partialResult;
    }
}




class Parse {

    /**
     * * Given a string, it returns an array of floats
     * @param string - The string to be parsed.
     * @returns The array of float numbers
     */

    static parserAll(csv) {

        const stringwithoutblanckspace = Parse.removeBlanckSpace(csv)

        const cleanString = Parse.replaceCommaAtDot(stringwithoutblanckspace);

        const stringNewLine = Parse.splitForNewLine(cleanString);

        let array2 = [];

        for (const line of stringNewLine) {
            const lineArray = Parse.parseCSVLine(line)
            array2 = array2.concat(lineArray);

        }
        return array2;

    }
    static parserToMatrix(csv) {

        const stringwithoutblanckspace = Parse.removeBlanckSpace(csv)

        const cleanString = Parse.replaceCommaAtDot(stringwithoutblanckspace);

        const stringNewLine = Parse.splitForNewLine(cleanString);

        let array2 = [];

        for (const line of stringNewLine) {
            const lineArray = Parse.parseCSVLine(line)
            array2.push(lineArray);

        }
        return array2;

    }


    static parseCSV(csv, outputType)

    static parseCSVLine(line) {

        const arrayOfStrings = Parse.splitForSemicolon(line);

        const array6 = [];

        for (const word of arrayOfStrings) {
            const value = Parse.parseWord(word)
            if (outputType === "-a") {
                array6 = array6.concat(lineArray);
            } else {
                array6.push(value);

            }

        }



        return array6; //.reduce((p,c)=> p + c);

    }

    static parseWord(word) {
        if (!isNaN(word)) {
            return parseFloat(word);
        }

        if (word.toLoweCase() === 'true' || word.toLoweCase() === 'false') {
            return word.toLoweCase() === 'true';
        }

        if ((new Date(word) !== "Invalid Date") && !isNaN(new Date(word))) {
            return new Date(word);
        }

        return word
    }



    /**
     * Split a string into an array of strings using a semicolon as the delimiter
     * @param string - The string to be split.
     * @returns an array of strings.
     */




    static replaceCommaAtDot(string) {
        const replaced = string.replace(/,/g, ".");
        return replaced;
    }




    static removeBlanckSpace(string) {
        const replaced = string.replace(/ /g, "");
        return replaced;
    }

    static parseArrayToFloat(array) {
        let tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const string = array[i];
            const parsed = parseFloat(string);
            if (!isNaN(parsed)) {
                tempArray.push(parsed);
            }

        }
        return tempArray;
    }
    static splitForNewLine(string) {
        const splittedStringOnNewLine = string.split(/\n?\r/);
        return splittedStringOnNewLine;
    }

    static splitForSemicolon(array) {
        const splittedString = array.split(";");
        return splittedString;
    }

}


module.exports = { Parse };