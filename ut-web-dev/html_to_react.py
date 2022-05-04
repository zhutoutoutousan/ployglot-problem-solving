from tokenize import String


def html_to_react(html_string: String):
    """
    Converts html string to react component.
    :param html_string:
    :return:
    """
    react_string = ""
    for line in html_string:
        if line.startswith("<"):
            react_string += "{"
        if line.startswith("</"):
            react_string += "}"
        else:
            react_string += line
    print(react_string)
    return react_string