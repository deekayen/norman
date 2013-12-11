#!/usr/bin/env python
# Generate a KTouch 1 lesson file from the
# Type Fu data

import json

def main():
    f = open("../Type Fu/Contents/Resources/client/data/lessons/words-qwerty.json")
    data = json.load(f)
    f.close()

    levels_count = len(data["levels"])

    print "# This KTouch lesson file is generated from"
    print "# the Type Fu Drills for the norman layout"

    for i in xrange(levels_count):
        print ""
        print "".join(data["levels"][i])

        line = ""
        lineno = 0
        for w in data["data"][i]:
            if len(line)>0: line += " "
            line += w

            if len(line)>70:
                print line
                lineno += 1
                if lineno>10: break
                line = ""


main()
