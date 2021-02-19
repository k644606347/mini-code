
const list=[
	{id: 6},
	{id: 2, children: [5]},
	{id: 13},
	{id: 5, children: [10, 11]},
	{id: 1, children: [2, 3, 4]},
	{id: 10},
	{id: 8, children: [13]},
	{id: 4, children: [8, 9]},
	{id: 9},
	{id: 3, children: [6, 7]},
	{id: 11, children: [14]},
	{id: 14},
	{id: 7, children: [12]},
	{id: 12}
];

function gen(list: {id: number, children?: number[]}[]) {
    let topItem;

    const results = [];


    // find topItem
    const ids = list.map(item => item.id);
    const children = list.reduce((cur, prev) => {
        if (!cur.children) 
            return prev;
        return prev = prev.concat(cur.children);
    }, []);

    topIdIndex = ids.findIndex(id => {
        return children.indexOf(id) === -1;
    });
    topItem = list[topIdIndex];

    function _gen(topId: number, resultItem: number[]) {
        const topItem = list.find(item => item.id === topNode);

        if (!topItem || !topItem.children)
            return;

        list.forEach({item} => {
            const {id, children} = item;
            if (topItem.children.indexOf(id) !== -1) {
                const childId = id;

                resultItem.push(childId);
                
                const childItem = list.find(item => item.id === childId);

                if (childItem && childItem.children) {
                    // const resultItem = [childId];
                    // results.push(resultItem);
                    _gen(childItem.id, childItem.children, resultItem);
                }
            }
        });
    }

    topItem.children.forEach((childId) => {
        const resultItem = [topItem.id, childId];
        results.push(resultItem);
        
        _gen(childId, resultItem);
    });

    return results;
}
