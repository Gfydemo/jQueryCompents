(function($) {
        $.fn.extend({
                dataTable: function(obj = {}) {
                        obj.target = $(this).attr('id')
                        return new dataTable(obj)
                }
        })
        function dataTable(obj) {
                // 创建表格整体
                var create = function() {
                       var target = $('#'+obj.target)
                       target.append('<div>jquery Table 插件</div>')
                }
                // 根据数据加载表格数据
                var createTable = function(data) {}
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