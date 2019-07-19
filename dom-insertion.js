$(() => {
    $('#pattern1').on('click', () => {
        exec(pattern1);
    });

    $('#pattern2').on('click', () => {
        exec(pattern2);
    });

    $('#pattern3').on('click', () => {
        exec(pattern3);
    });

    $('#pattern4').on('click', () => {
        exec(pattern4);
    });

    $('#pattern8').on('click', () => {
        exec(pattern8);
    });
});

let count = 0;

function exec(func) {
    clear();
    count = $('#count').val();
    const startTime = performance.now();
    func();
    const endTime = performance.now();
    $('#time').text((endTime - startTime) + 'ミリ秒');
}

function clear() {
    getRootElem().html('');
}

function getRootElem() {
    return $('#target');
}

/**
 * 1セルごとに追加する
 */
function pattern1() {
    const $root = getRootElem();
    for (let i = 1; i < count; i++) {
        const $tr = $('<tr></tr>');
        $tr.append('<td>item1</td>');
        $tr.append('<td>item2</td>');
        $tr.append('<td>item3</td>');
        $tr.append('<td>item4</td>');
        $tr.append('<td>item5</td>');
        $tr.append('<td>item6</td>');
        $root.append($tr);
    }
}

/**
 * 1行ごとに文字列をため込んで追加する
 */
function pattern2() {
    const $root = getRootElem();
    let html = '';
    for (let i = 1; i < count; i++) {
        html = '<tr>';
        html += '<td>item1</td>';
        html += '<td>item2</td>';
        html += '<td>item3</td>';
        html += '<td>item4</td>';
        html += '<td>item5</td>';
        html += '<td>item6</td>';
        html += '</tr>';
        $root.append(html);
    }
}

/**
 * 文字列をため込んで、100行ずつにドーンと追加する
 */
function pattern3() {
    const $root = getRootElem();
    let html = '';
    for (let i = 1; i < count; i++) {
        html += '<tr>';
        html += '<td>item1</td>';
        html += '<td>item2</td>';
        html += '<td>item3</td>';
        html += '<td>item4</td>';
        html += '<td>item5</td>';
        html += '<td>item6</td>';
        html += '</tr>';

        if ((i % 100) === 0) {
            $root.append(html);
            html = '';
        }
    }
    if (html.length > 0) {
        $root.append(html);
    }
}

/**
 * 文字列をため込んで、最後にドーンと追加する
 */
function pattern4() {
    const $root = getRootElem();
    let html = '';
    for (let i = 1; i < count; i++) {
        html += '<tr>';
        html += '<td>item1</td>';
        html += '<td>item2</td>';
        html += '<td>item3</td>';
        html += '<td>item4</td>';
        html += '<td>item5</td>';
        html += '<td>item6</td>';
        html += '</tr>';
    }
    $root.append(html);
}
