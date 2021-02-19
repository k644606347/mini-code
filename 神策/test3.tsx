// import { match } from "assert"

// 以下表格，点击 `#data .date` 后使表格按日期排序，当前是正序则改为倒序，当前是倒序则改为正序。
// <table id="data">
//     <thead>
//         <tr>
//             <th class="date"
//             >日期</th>
//             <th class="total">总次数</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>2017年10月23日</td>
//             <td>68,112</td>
//         </tr>
//         <tr>
//             <td>2017年8月6日</td>
//             <td>68,020</td>
//         </tr>
//         <tr>
//             <td>2017年11月11日</td>
//             <td>69,433</td>
//         </tr>
//         <tr>
//             <td>2016年5月12日</td>
//             <td>69,699</td>
//         </tr>
//         <tr>
//             <td>2017年1月18日</td>
//             <td>42,565</td>
//         </tr>
//     </tbody>
// </table>

function parseTotal(totalStr: string) {
    return Number(totalStr.replace(/,/g, ''));
}

function parseDate(dateStr: string) {
    const matched = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);

    if (!matched)
        return;

    return new Date(Number(matched[1]), Number(matched[2]), Number(matched[3])).getTime();
}

function sortBy(tableData: {date: string; data: string}[], sortBy = 'desc', sortByField: 'date' | 'data') {
    const parseFnMap = {
        date: parseDate,
        data: parseTotal
    };

    return tableData.sort((item1, item2) => {
        const parsed1 = parseFnMap[sortByField](item1[sortByField]),
            parsed2 = parseFnMap[sortByField](item2[sortByField]);

        if (!parsed1 || !parsed2) {
            return 0;
        }

        const result = parsed1 > parsed2 ? 1 : -1;

        return sortBy === 'desc' ? result : (-1 * result);
    });
};

function render(tableData: {date: string; data: string}[]) {
    return tableData.map((item, i) => {
        return <tr key={i}><td>{item.date}</td></tr>
    });
}