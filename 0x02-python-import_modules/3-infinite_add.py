#!/usr/bin/python3
if __name__ == '__main__':
    import sys
    result = 0
    argc = len(sys.argv)
    count = 1
    while count < argc:
        result += int(sys.argv[count])
        count += 1

    print(result)
