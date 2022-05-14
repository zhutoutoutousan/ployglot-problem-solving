/*
Typical Menu
<MenuItem>Board 1</MenuItem>
<SubMenu title="Board 1">
    <MenuItem>Board 1.1</MenuItem> 
    <MenuItem>Board 1.2</MenuItem>
</SubMenu>
*/
// Retrieve menu tree and render it as react jsx
const generateMenuTree = (menuTree) => {
    return menuTree.map(item => {
        return (
            // If item contains feed, use <SubMenu> and traverse the feed and render it as nested <MenuItem>
            item.feeds ? (
                <SubMenu title={item.title} key={item.id}>
                    {/* Traverse item.feeds, if they have feeds, nest, if not, render <MenuItem> */}
                    {item.feeds.map(feed => {
                        return feed.feeds ? (
                            <SubMenu title={feed.title} key={feed.id}>
                                {feed.feeds.map(subFeed => {
                                    return (
                                        <MenuItem key={subFeed.id}>{subFeed.title}</MenuItem>
                                    );
                                })}
                            </SubMenu>
                        ) : (
                            <MenuItem key={feed.id}>{feed.title}</MenuItem>
                        );
                    }
                </SubMenu>
            ) : (
                // If item doesn't contain feed, use <MenuItem>
                
                <MenuItem title={item.title} key={item.id}>
                    {item.title}
                </MenuItem>
            )
        );
    });
}


const render = (menuTree) => {
    return (
        <ul>
            {generateMenuTree(menuTree)}
        </ul>
    );
}