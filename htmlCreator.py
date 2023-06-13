def readTextFileNames(orderFile: str) -> list[str]:
    '''
    Each filename is written on a newline, so just get that
    '''
    lines = []
    with open(orderFile, "r") as f:
        lines = f.readlines()

    return [line.strip() for line in lines]


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
        format = format.replace("{{"+split[0]+"}}", split[1])
    return format


if __name__ == "__main__":
    formatProject = "formattingHTML/portfolioProject.html"
    formatPage = "formattingHTML/portfolioPage.html"

    textFiles: list[str] = readTextFileNames("portfolioText/projectOrder.txt")

    destFile = f"portfolio.html"

    # read the format file
    formatStr = ""
    with open(formatProject, "r") as f:
        formatStr = f.read()

    # read and format the text files
    resultStr = ""
    for file in textFiles:
        resultStr += formatTextFile(formatStr, "portfolioText/"+file)

    # read the format file for the entire html file
    formatEntireStr = ""
    with open(formatPage, "r") as f:
        formatEntireStr = f.read()

    # put the text in the right place
    formatEntireStr = formatEntireStr.replace("{{start}}", resultStr)

    # save result
    with open(destFile, "w") as f:
        f.write(formatEntireStr)
