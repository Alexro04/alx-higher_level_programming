#!/usr/bin/python3
if __name__ == '__main__':
    import sys
    argc = len(sys.argv)
    if argc > 1:
        if argc == 2:
            print("1 argument:")
        else:
            print(f"{argc - 1} arguments:")
        count = 1
        while count < argc:
            print(f"{count}: {sys.argv[count]}")
            count += 1
    else:
        print("0 arguments.")
