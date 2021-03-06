export function FindMatches(substringToMatch, array) {
    var result = [];

    if (substringToMatch) {
        var regex = new RegExp(substringToMatch);
        var substringLength = substringToMatch.length;

        array.forEach(element => {
            var regexResult;
            if ((regexResult = regex.exec(element)) != null) {

                var firstPart = element.substring(0, regexResult.index);
                var matchedPart = element.substring(regexResult.index, regexResult.index + substringLength);
                var lastPart = element.substring(regexResult.index + substringLength, element.length);

                result.push({ firstPart: firstPart, matchedPart: matchedPart, lastPart: lastPart });
            }
        });
    }

    return result;
};

export function MergeResult(result) {
    return result.firstPart + result.matchedPart + result.lastPart;
}