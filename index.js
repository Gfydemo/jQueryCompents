var tableData = [
        {name: '小明', age: '12', sex: '1'},
        {name: '小花', age: '10', sex: '0'},
]
$('#table').dataTable({
        columns: [{title: '姓名', key: 'name', align: 'center' },
                {title: '性别', key: 'sex', template: function(row, item) {
                                return item == '1' ? '男' : '女'
                        }
                },
                {title: '年龄', key: 'age'},
                {title: '操作', key: '', template: function(row, item) {
                                return '<button>删除</button>'
                        }
                }
        ],
        data: tableData
})