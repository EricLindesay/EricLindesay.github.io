import re


def formatTextFile(format: str, filename: str) -> str:
    # read the text info file and format it
    replacementLines = ""
    with open(filename, "r") as f:
        replacementLines = f.readlines()

    # replace the format file data with the text info
    for line in replacementLines:
        line.strip()
        split = line.split(" | ")
        split[1] = split[1].replace("\\n", "<br>").strip()
        searchStr = "{{"+split[0]+"}}"
        format = format.replace(searchStr, split[1])
    return format


if __name__ == "__main__":
    formatFileText = "portfolioFormat.html"
    formatFileEntire = "entireFormat.html"
    textFiles = ["MIST.txt"]
    destFile = f"autoPortfolio.html"

    # read the format file
    formatStr = ""
    with open(formatFileText, "r") as f:
        formatStr = f.read()

    # read and format the text files
    resultStr = ""
    for file in textFiles:
        resultStr += formatTextFile(formatStr, file)

    # read the format file for the entire html file
    formatEntireStr = ""
    with open(formatFileEntire, "r") as f:
        formatEntireStr = f.read()

    # put the text in the right place
    formatEntireStr = formatEntireStr.replace("{{start}}", resultStr)

    # save result
    with open(destFile, "w") as f:
        f.write(formatEntireStr)
