(function($) {
        $.fn.extend({
                dataTable: function(obj = {}) {
                        obj.target = $(this).attr('id')
                        return new dataTable(obj)
                }
        })
        /**
         * 
         * @param {表格参数} obj columns 表格表头 data 表格数据
         */
        function dataTable(obj) {
                var tableDomObj // 表格对应的JQuery对象
                var tableHeadObj // 表头对应的JQuery对象
                var tableBodyObj // 表格主体对应的JQuery对象
                // 创建表格整体
                var create = function() {
                       var target = $('#'+obj.target)

                       var tableDomId = obj.target+'Table'
                       var tableHeadId = obj.target+'TableHead'
                       target.append('<table id="'+tableDomId+'"></table>')
                // 创建表头
                        tableDomObj = $('#'+tableDomId)
                        tableDomObj.css({
                                width: obj.width ? obj.width+'px' : '100%'
                        })
                        var tableHeadDom = '<thead id="'+tableHeadId+'"></thead>'
                        tableDomObj.append(tableHeadDom)
                        tableHeadObj = $('#'+tableHeadId)
                        var theadTr = $('<tr></tr>')
                        tableHeadObj.append(theadTr)
                        obj.columns.forEach(col => {
                                var theadTrTd = $('<td>'+col.title+'</td>')
                                theadTrTd.css({
                                        'text-align': col.align? col.align : ''
                                })
                                theadTr.append(theadTrTd)
                        });
                        var tableBodyId = obj.target+'TableBody'
                        tableDomObj.append('<tbody id="'+tableBodyId+'"></tbody>')
                        tableBodyObj = $('#'+tableBodyId)
                        if (obj.data) {
                                createTable(obj.data)
                        } else {
                                ajaxtable()
                        }
                }
                // 根据数据加载表格数据
                var createTable = function(data) {
                        
                        data.forEach((row, index) => {
                                var tbodyTr = $('<tr></tr>')
                                tableBodyObj.append(tbodyTr)
                                obj.columns.forEach(col => {
                                        var tbodyTrTd
                                        if (col.template) {
                                                tbodyTrTd=$('<td>'+col.template(row, row[col.key])+'</td>')
                                        } else {
                                                tbodyTrTd=$('<td>'+row[col.key]+'</td>')
                                        }
                                        tbodyTr.append(tbodyTrTd)
                                        tbodyTrTd.css({
                                                'text-align': col.align? col.align : ''   
                                        })
                                })
                        })
                       
                }
                // 异步加载表格数据
                var ajaxtable = function () {}

                /**
                 * 获取表格选中行的ID如果数据中没有Id字段则返回第一个字段的值
                 */
                this.getCheckedId = function() {}
                /**
                 * 获取选中行的数据
                 */
                this.getSelectRows = function() {}
                /**
                 * 刷新表格数据
                 */
                this.refresh = function() {}

                create()

        }
})(jQuery)