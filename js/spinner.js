/**
 * Created by SJH on 2020/1/31.
 */
function Spinner(){
    return {
        init: function (eleId,inputId,defVal) {
            var ele = $('#'+eleId);
            ele.html('');
            var html = '';
            html += '<div class="input-group spinner">'
            html += '<input type="text" id="'+inputId+'" class="form-control" style="width:45px;" value="'+defVal+'">'
            html += '<div class="input-group-btn-vertical">'
            html += '<button class="btn btn-default" type="button" e-id="'+eleId+'"><i class="fa fa-caret-up"></i></button>'
            html += '<button class="btn btn-default" type="button" e-id="'+eleId+'"><i class="fa fa-caret-down"></i></button>'
            html += '</div>'
            html += '</div>';

            ele.html(html);

            $('#'+eleId+' .spinner .btn:first-of-type').on('click', function() {
                var id = $(this).attr('e-id');
                $('#'+id+' .spinner input').val( parseInt($('#'+id+' .spinner input').val(), 10) + 1);
            });
            $('#'+eleId+' .spinner .btn:last-of-type').on('click', function() {
                var id = $(this).attr('e-id');
                $('#'+id+' .spinner input').val( parseInt($('#'+id+' .spinner input').val(), 10) - 1);
            });
        }
    }
}