// Get the first three elements in an array, for each item, only returns "id", "content", "fullContent", "summary", "title"
function getFirstThree(a) {
    return a.slice(0, 3).map(function(item) {
        return {
            id: item.id,
            content: item.content,
            fullContent: item.fullContent,
            summary: item.summary,
            title: item.title
        };
    });
}