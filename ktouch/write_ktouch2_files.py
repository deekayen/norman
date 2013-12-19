#!/usr/bin/env python
# Generate a KTouch 4 XML lesson file from the
# Type Fu data. It uses no more than 10 lines
# per lesson

import json

def main():
    f = open("../Type Fu/Contents/Resources/client/data/lessons/words-qwerty.json")
    data = json.load(f)
    f.close()

    levels_count = len(data["levels"])

    print "<KTouchLecture>"
    print "<Title>Norman keyboard drills</Title>"
    print "<FontSuggestions>Monospace</FontSuggestions>"

    prevChars = []

    print "<Levels>"

    for i in xrange(levels_count):
        title = "".join(data["levels"][i])

        print "<Level>"
        print "<LevelComment>" + "".join(data["levels"][i]) + "</LevelComment>"

        newChars = ""
        for c in data["levels"][i]:
            if c not in prevChars:
                newChars += c

        print "<NewCharacters>" + newChars + "</NewCharacters>"

        prevChars = data["levels"][i]

        line = ""
        lineno = 0
        for w in data["data"][i]:
            if len(line)>0: line += " "
            line += w

            if len(line)>70:
                print "<Line>"+line+"</Line>"
                line = ""
                lineno += 1

                if lineno>=10: break

        print "</Level>"

    print "</Levels>"
    print "</KTouchLecture>"


main()
